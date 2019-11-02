import React, {Component} from 'react';
import {Button, Card, CardBody, Col, Container, Input, Row} from 'reactstrap';
import CardHeader from "reactstrap/es/CardHeader";
import './App.css'
import worlds from "./data/game/worlds";
import needs from "./data/game/needs";
import producers from "./data/game/producers";
import * as config from "./data/app/config";
import ResetButton from "./components/ResetButton";
import WorldSwitch from "./components/WorldSwitch";
import IslandButton from "./components/IslandButton";
import IslandPopulations from "./components/IslandPopulations";
import Building from "./components/Building";
import IslandBuildingResources from "./components/IslandBuildingResources";

const debugEnabled = true
const jst = JSON.stringify
const jpa = JSON.parse
const jcl = foo => jpa(jst(foo)) // clone function
const cl = console.log
// eslint-disable-next-line
const d = debugEnabled ? cl : () => null
const dd = debugEnabled ? (...foo) => <div className='d-inline-block font-italic text-break'>{foo}</div> : () => null

class App extends Component {
  step = 50;
  precision = 2;
  saveLogic = {
    waitMs: 500,
    timeout: null
  };

  handleWheel = (event, islandKey, tierKey, direction, move = false, relativeTarget = 0) => {
    event.preventDefault()
    this.changePopulationLevel(islandKey, tierKey, direction, move, relativeTarget)
  }


  constructor(props) {
    // localStorage.clear();
    super(props);

    let oldState = localStorage.getItem('state');
    this.state = jpa(oldState ? oldState : jst((config.defaultState)))
    if (!this.state.islands.length) {
      this.addIsland(1)
    }
    // initialise darkMode in index.html
    document.getElementsByTagName('body')[0].classList.toggle('bg-secondary', this.state.darkMode)
  }

  reset = () => {
    localStorage.clear();
    this.setState(config.defaultState, () => {
      this.addIsland(1)
    });
  }
  persistState() {
    if (this.saveLogic.timeout) {
      clearTimeout(this.saveLogic.timeout);
    }
    this.saveLogic.timeout = setTimeout(() => {
      localStorage.setItem('state', jst(this.state));
    }, this.saveLogic.waitMs)
  }

  toggleDarkMode = () => {
    let darkMode = !this.state.darkMode

    document.getElementsByTagName('body')[0].classList.toggle('bg-secondary', darkMode)

    this.setState(prevState => ({
      ...prevState,
      darkMode: darkMode
    }), this.persistState);
  }

  /**
   * @todo remove?
   * @deprecated
   */
  exactNeed = (need, island) => {
    // [1,2,3,4,5]
    // [6,7]
    let keys = worlds.find(w => w.id === island.world).socialClassIDs

    // [0,1]
    let islandTierKey = [];
    let needTierKey = [];

    // need.tierIDs = [1, 2, 6, 7]
    for (let b in need.tierIDs) {
      let a = keys.indexOf(need.tierIDs[b]);
      // d(b, a, need.tierIDs[b])
      if (a > -1) {
        islandTierKey.push(a)
        needTierKey.push(b)
      }
    }

    return island.population.level
      .filter((l,lKey) => islandTierKey.indexOf(lKey) > -1)
      .reduce((prev, next, i) => prev + ((next / need.consumption_denominator[needTierKey[i]])), 0);
    // return need.consumption_denominator
    //   .filter((l,lKey) => islandTierKey.indexOf(lKey) > -1)
    //   .reduce((prev, next, i) => prev + island.population.level[needTierKey[i]] / next, 0);
  }

  populationWithTierIDs = (worldId, population) => {
    let socialClassIDs = worlds.find(w => w.id === worldId).socialClassIDs
    return population.reduce((prev, next, i) => ({...prev, [parseInt(socialClassIDs[i])]: next}), {});
  }
  productionPerTick = (resource, buildings) => {
    return producers
      .filter(p => buildings[p.key] !== undefined) // omit buildings not (yet) built
      .filter(p => p.provides === resource)        // only providers of that resource
      .reduce((prev, next, i) => prev + buildings[next.key] * 60 / next.productionTime, 0)
  }
  consumptionThroughBuildingsPerTick = (resource, buildings) => {
    return producers
      .filter(p => buildings[p.key] !== undefined) // noch nie gebaut
      .filter(p => p.needs.includes(resource)) // isConsumingResource
      .reduce((prev, next, i) => prev + buildings[next.key] * 60 / next.productionTime, 0)
  }
  consumptionThroughPopulationPerTick = (resource, population) => {
    let need = needs.find(n => n.key === resource)
    return need.tierIDs.filter(id => population[id] !== undefined).reduce((prev, next, i) => prev + population[next] * need.consumption[i], 0)
  }
  calculateBalance = (resource, buildings, population = false) => {
    return (
      + this.productionPerTick(resource, buildings)
      - this.consumptionThroughBuildingsPerTick(resource, buildings)
      - (false === population ? 0 : this.consumptionThroughPopulationPerTick(resource, population))
    )
  }

  /** @deprecated*/
  exactConsumption = (buildings, producer) => {
    let resource = producer.provides
    let provider = producers
      .find(producer => producer.provides === resource) // isProvidingResource
    // d(resource)
    // d("provider", provider)
    let consumers = producers
      .filter(producer => buildings[producer.key] !== undefined) // noch nie gebaut
      .filter(producer => producer.needs.includes(resource)) // isConsumingResource
    // let consumers = this.needs.filter((farm) => this.isConsumingResource(farm, resource))
    // d("consumers",consumers)

    let consumption = consumers.reduce((prev, next, i) => prev + buildings[next.key] * provider.productionTime / next.productionTime, 0)

    return consumption
  }
  changePopulationLevel = (id, tierKey, direction, move = false, relativeTarget = 0) => {
    let number = direction * this.step
    let population = this.state.islands.find((i) => i.id === id).population.level;
    let NewValue = (isNaN(population[tierKey]) ? 0 : population[tierKey]) + number;
    let NewValueButMinimum0 = Math.max(NewValue, 0);
    population[tierKey] = NewValueButMinimum0;

    // restore missing difference
    if (move === true) {
      let diff = NewValue - NewValueButMinimum0;
      NewValue = (isNaN(population[tierKey + relativeTarget]) ? 0 : population[tierKey + relativeTarget]) + diff - number;
      NewValueButMinimum0 = Math.max(NewValue, 0);
      population[tierKey + relativeTarget] = NewValueButMinimum0;
    }

    this.setState(prevState => ({
      ...prevState.population,
      level: population
    }), this.persistState);
  }
  setPopulationLevel = (id, tierKey, number) => {
    let population = this.state.islands.find((i) => i.id === id).population.level;
    population[tierKey] = number ? parseInt(number) : 0

    this.setState(prevState => ({
      ...prevState,
      population: {
        ...prevState.population,
        level: population
      }
    }), this.persistState);
  }
  setIslandName = (id, name) => {
    let islands = this.state.islands
    islands.find((i) => i.id === id).name = name

    this.setState(prevState => ({
      ...prevState,
      islands: islands
    }), this.persistState);
  }
  addIsland(worldId) {
    let islands = this.state.islands
    let newId = islands.reduce((prev, next, i) => Math.max(prev, next.id), 0) + 1;
    islands.push(jcl({...config.emptyIsland.find((i) => i.world === worldId), id: newId}))

    this.setState(prevState => ({
      ...prevState,
      islands: islands
    }), () => {
      this.persistState();
      this.switchIsland(newId)
    });
  }
  unlockWorld = (worldId) => {
    let worlds = this.state.worlds
    worlds.push(worldId)

    this.setState(prevState => ({
      ...prevState,
      worlds: worlds
    }), this.persistState);
  }
  deleteIsland(islandId) {
    // if (!window.confirm('Insel "'+this.state.islands[islandKey].name+'" ('+islandKey+') löschen?')) {
    //   return;
    // }
    let islands = this.state.islands.filter((i) => i.id !== islandId)

    this.setState(prevState => ({
      ...prevState,
      islands: islands
    }), () => {
      this.persistState();
      let otherIsland = this.state.islands.find(i => i.world === this.state.activeWorld);
      if (otherIsland) {
        this.switchIsland(otherIsland.id)
      }
    });
  }
  setBuildingCount = (islandId, buildingKey, number) => {
    // d(buildingKey)
    // alert(jst(buildings))
    let buildings = this.state.islands.find((i) => i.id === islandId).buildings;
    buildings[buildingKey] = number ? Math.max(parseInt(number), 0) : 0

    this.setState(prevState => ({
      ...prevState.buildings,
      buildings: buildings
    }), this.persistState);
  }
  setResourceWantCount = (islandId, buildingKey, number) => {
    let resourceWant = this.state.islands.find((i) => i.id === islandId).resourceWant;
    resourceWant = resourceWant ? resourceWant : {}
    resourceWant[buildingKey] = number ? Math.max(parseInt(number), 0) : 0

    this.setState(prevState => ({
      ...prevState.resourceWant,
      resourceWant: resourceWant
    }), this.persistState);
  }

  isNeeded = (need, island) => {
    let keys = worlds.find(w => w.id === island.world).socialClassIDs
    let islandTierKey = [];
    for (let b in need.tierIDs) {
      let a = keys.indexOf(need.tierIDs[b]);
      if (a > -1) {
        islandTierKey.push(a)
      }
    }

    let firstTierRequireCount = island.population.level[islandTierKey[0]];
    let oneAboveRequirementExists = 0 < island.population.level[islandTierKey[1]];
    let anyAboveRequirementExists = 0 < island.population.level.slice(islandTierKey[1]).reduce((prev, next) => prev + next, 0);

    let needed = firstTierRequireCount >= need.requirement || oneAboveRequirementExists
      ||        (firstTierRequireCount > 0                 && anyAboveRequirementExists);

    if (needed && isNaN(island.buildings[need.key])) {
      island.buildings[need.key] = 0;
    }
    /** auf dieser insel */
    /** @todo requirement auf DIESER insel, baumöglichkeit auf IRGENDEINER insel*/
    return needed;
  };
  isUnlocked = (resource, island) => {
    let unlocked = false

    let islandTierKey = worlds.find(w => w.id === island.world).socialClassIDs.indexOf(resource.tierId);
    if (islandTierKey <= -1) {
      return unlocked
    }

    if (!unlocked) {
      let firstTierRequireCount = island.population.level[islandTierKey];
      unlocked = firstTierRequireCount >= resource.requirement
    }
    if (!unlocked) {
      let anyAboveCount = island.population.level.slice(islandTierKey+1).reduce((prev, next) => prev + next, 0);
      unlocked = anyAboveCount > 0;
    }

    if (unlocked && isNaN(island.buildings[resource.key])) {
      island.buildings[resource.key] = 0;
      island.resourceWant[resource.key] = 0;
    }
    return unlocked;
  };

  switchWorld = (worldId) => {
    let activeWorld = this.state.activeWorld
    activeWorld = worldId

    this.setState(prevState => ({
      ...prevState,
      activeWorld: activeWorld
    }), this.persistState);
  }
  switchIsland = (id) => {
    let activeIslands = this.state.activeIslands
    activeIslands[this.state.activeWorld] = id

    this.setState(prevState => ({
      ...prevState,
      activeIslands: activeIslands
    }), this.persistState);
  }

  render() {
    return (
      <div className="App">
        <Container fluid>
          <Card className={'my-3' + (this.state.darkMode ? ' bg-dark' : '')}>
            {/*   Welt auswahl   */}
            <CardHeader>
              {worlds.map((world, worldKey) => (
                <WorldSwitch
                  key={world.id}
                  world={world}
                  activeWorld={this.state.activeWorld}
                  unlockedWorlds={this.state.worlds}
                  islands={this.state.islands}
                  fnSwitchWorld={this.switchWorld}
                  fnUnlockWorld={this.unlockWorld}
                />
              ))}
              {dd(jst(this.state.activeWorld), " ", jst(this.state.worlds),)}
              <ResetButton resetFunction={this.reset}/>
              <Button onClick={this.toggleDarkMode} className='btn-success float-right mr-3'>Dark</Button>
            </CardHeader>
            {/*   Insel auswahl   */}
            <CardBody className={'overflow-auto text-nowrap'}>
              <Button onClick={() => this.addIsland(this.state.activeWorld)} className={'px-1 py-0 mr-2'}>
                <img src={'./icons/Icon_plus.png'} alt='Hinzufügen' style={{width: 36, height: 36}}/>
              </Button>
              {this.state.islands.filter(island => island.world === this.state.activeWorld).map((island, islandKey) => (
                <IslandButton key={island.id} island={island} activeIsland={this.state.activeIslands[this.state.activeWorld]} onClick={this.switchIsland}/>
              ))}
              {dd(jst(this.state.activeIslands[this.state.activeWorld]), " ",
                jst(this.state.islands.filter(island => island.world === this.state.activeWorld).reduce((prev, next) => [...prev, next.id], [])),)}
            </CardBody>
          </Card>
          {this.state.islands.filter(island => island.id === this.state.activeIslands[this.state.activeWorld]).map((island, islandKey) => (
            <Card key={island.id} className={'my-3' + (this.state.darkMode ? ' bg-dark' : '')}>
              {/*   Inselname & Bevölkerung   */}
              <CardHeader>
                <Input value={island.name} onChange={e => this.setIslandName(island.id, e.target.value)} style={{maxWidth: 300}} className={'d-inline-block mr-3'}/>
                <strong className={'d-inline-block mr-3'}>
                  <img src={"./icons/population/Population.png"} alt="" style={{height: 40, width: 40}}/>
                  { island.population.level.reduce((prev, next) => prev + next, 0) }
                </strong>
                {dd(jst(this.state.islands.find(i => i.id === this.state.activeIslands[this.state.activeWorld]).population.level))}
                <Button onClick={() => this.deleteIsland(island.id)} size='sm' className='float-right'>&times;</Button>
              </CardHeader>
              {/*   Bevölkerungsstufen   */}
              <IslandPopulations
                island={island}
                fnChangePopulationLevel={this.changePopulationLevel}
                fnHandleWheel={this.handleWheel}
                fnSetPopulationLevel={this.setPopulationLevel}
              />

              {/*   Zeug auf der Insel   */}
              <CardBody>
                {dd(jst(this.state.islands.find(i => i.id === this.state.activeIslands[this.state.activeWorld]).buildings))}
                <Row>
                  {/*   Ressourcen - Baumaterial   */}
                  <Col sm={'auto'} className='ml-auto-'>
                    {producers.filter(resource => resource.type === "Baumaterial" && this.isUnlocked(resource, island)).map((resource, resourceKey) => (
                      <IslandBuildingResources
                        island={island}
                        resource={resource}
                        fnSetBuildingCount={this.setBuildingCount}
                        fnSetResourceWantCount={this.setResourceWantCount}
                      />
                    ))}
                    <hr/>
                  </Col>
                  {/*   Ressourcen - Bedürfnisse   */}
                  <Col sm={'auto'}>
                    {needs.filter((need) => this.isNeeded(need, island)).map((need, needKey) => (
                      <Building
                        island={island}
                        needOrProducer={need}
                        consumption={this.exactNeed(need, island)/** @todo remove? */}
                        balance={this.calculateBalance(need.key, island.buildings, this.populationWithTierIDs(island.world, island.population.level))}
                        fnSetBuildingCount={this.setBuildingCount}
                      />
                    ))}
                    <hr/>
                  </Col>
                  {/*   Ressourcen - Farmen   */}
                  <Col sm={'auto'}>
                    {producers.filter(producer => !(["Baumaterial", "Konsumgüter"].includes(producer.type)) && this.isUnlocked(producer, island)).map((producer, resourceKey) => (
                      <Building
                        island={island}
                        needOrProducer={producer}
                        consumption={this.exactConsumption(island.buildings, producer)}
                        balance={this.calculateBalance(producer.provides, island.buildings)}
                        fnSetBuildingCount={this.setBuildingCount}
                      />
                    ))}
                    <hr/>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          ))}
        </Container>
      </div>
    );
  }
}

export default App;
