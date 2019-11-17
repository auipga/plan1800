import React, {Component} from 'react';
import {Button, Card, CardBody, CardHeader, Container, Input} from 'reactstrap';
import './App.css'
import worlds from "./data/worlds";
import needs from "./data/needs";
import producers from "./data/producers";
import ResetButton from "./components/ResetButton";
import WorldSwitch from "./components/WorldSwitch";
import IslandButton from "./components/IslandButton";
import IslandPopulations from "./components/IslandPopulations";
import Fertilities from "./components/Fertilities";
import {trans} from "./functions/translation";
import Producers from "./components/Producers";
import TieredMap from "./classes/TieredMap";

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
  saveLogic = {
    waitMs: 500,
    timeout: null
  }
  initialState = {
    islands: [],
    worlds: [1],
    activeWorld: 1,
    activeIslands: {},
    unlockedProducers: [],
    unlockedNonProducers: [],
    trades: [],
  }


  constructor(props) {
    // localStorage.clear();
    super(props);

    let oldState = localStorage.getItem('state');
    this.state = jpa(oldState ? oldState : jst(this.initialState))
    if (!this.state.islands.length) {
      this.addIsland(this.initialState.activeWorld)
    } else {
      for (let island of this.state.islands) {
        island.residences       = TieredMap.createFromJson(island.residences)
        island.population       = TieredMap.createFromJson(island.population)
        island.prohibitedNeeds  = TieredMap.createFromJson(island.prohibitedNeeds)
      }
    }
    // initialise darkMode in index.html
    document.getElementsByTagName('body')[0].classList.toggle('bg-secondary', !!this.state.darkMode)
  }

  reset = () => {
    localStorage.clear();
    this.setState(prevState => jcl(this.initialState), () => {
      this.addIsland(this.initialState.activeWorld)
    });
  }
  saveState() {
    this.setState(prevState => prevState, this.persistState);
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

    this.setState({darkMode: darkMode}, this.persistState)
  }

  generateEmptyIsland = (worldId, newIslandId) => {
    const world = worlds.find(w => w.id === worldId)

    return {
      id: newIslandId,
      worldId: worldId,
      fertilities: [],
      // fertilities: world.fertilities,
      regionalResources: world.regionalResources.reduce((obj,res) => ({...obj, [res]:0}), {}),
      name: `(${newIslandId}) ${trans(world)}`,
      residences: new TieredMap(world.socialClassIDs, 0),
      population: new TieredMap(world.socialClassIDs, 0),
      buildings: {},
      unlockedNeeds: [],
      prohibitedNeeds: new TieredMap(world.socialClassIDs, [])
    }
  }

  productionPerTick = (resource, buildings) => {
    return producers
      .filter(p => buildings[p.key] !== undefined) // omit buildings not (yet) built
      .filter(p => p.provides === resource)        // only providers of that resource
      .reduce((sum, p) => sum + buildings[p.key] * 60 / p.productionTime, 0)
  }
  consumptionThroughBuildingsPerTick = (resource, buildings) => {
    return producers
      .filter(p => buildings[p.key] !== undefined) // noch nie gebaut
      .filter(p => p.needs.includes(resource)) // isConsumingResource
      .reduce((prev, next, i) => prev + buildings[next.key] * 60 / next.productionTime, 0)
  }
  consumptionThroughPopulationPerTick = (resource, island) => {
    let need = needs.find(n => n.key === resource && Array.from(island.population.keys()).includes(n.tierIDs[0]))
    if (!need) {
      return 0
    }

    return need.tierIDs
      .filter(id => island.population.present(id))
      .filter(id => !island.prohibitedNeeds.ofTier(id).includes(resource))
      .filter(id => island.unlockedNeeds.includes(need.key))
      .reduce((prev, next, i) => prev + island.population.ofTier(next) * need.consumption[i], 0)
  }
  calculateTradeBalance = (islandId, good) => {
    const trades = this.state.trades.filter(t => t.good === good);
    const loading  = trades.filter(t => t.from === islandId && t.to   !== null).reduce((sum, that) => sum + that.amount, 0);
    const dropping = trades.filter(t => t.to   === islandId && t.from !== null).reduce((sum, that) => sum + that.amount, 0);
    return dropping - loading
  }
  calculateBalance = (resource, island) => {
    return (
      + this.productionPerTick(resource, island.buildings)
      - this.consumptionThroughBuildingsPerTick(resource, island.buildings)
      - this.consumptionThroughPopulationPerTick(resource, island)
    )
  }

  changePopulation = (island, tierId, direction, move = false) => {
    if (move === true) {
      island.population.move(tierId, direction + tierId, this.step);
    } else {
      island.population.add(tierId, direction * this.step);
    }
    producers.forEach(p => {this.updateUnlockedProducers(p, island)})
    needs.filter(n => Array.from(island.population.keys()).includes(n.tierIDs[0])).forEach(need => {this.updateUnlockedNeeds(need, island)})

    this.saveState()
  }
  setPopulation = (island, tierId, number) => {
    island.population.set((tierId), number ? parseInt(number) : 0)
    producers.forEach(p => {this.updateUnlockedProducers(p, island)})
    needs.forEach(need => {this.updateUnlockedNeeds(need, island)})

    this.saveState()
  }
  setIslandName = (id, name) => {
    let islands = this.state.islands
    islands.find((i) => i.id === id).name = name

    this.setState({islands: islands}, this.persistState);
  }
  setFertilities = (island, fertilities) => {
    island.fertilities = fertilities
    this.saveState()
  }
  setProhibitedNeeds = (island, tierId, needs) => {
    island.prohibitedNeeds.set(tierId, needs)
    this.saveState()
  }
  changeResourceCount = (island, resource, addend) => {
    let resources = island.regionalResources
    resources[resource] = Math.max(0,(resources[resource] ? parseInt(resources[resource]) : 0) + addend)

    this.saveState()
  }
  addIsland(worldId) {
    let islands = this.state.islands
    let increment = islands.reduce((prev, next, i) => Math.max(prev, next.id), 0) + 1
    let newIsland = this.generateEmptyIsland(worldId, increment)

    this.setState({islands: [...islands, newIsland]}, () => {this.switchIsland(increment)})
  }
  unlockWorld = (worldId) => {
    this.state.worlds.push(worldId)

    this.setState({worlds: this.state.worlds}, this.persistState)
  }
  deleteIsland(islandId) {
    // if (!window.confirm('Insel "'+this.state.islands[islandKey].name+'" ('+islandKey+') löschen?')) {
    //   return;
    // }
    let islands = this.state.islands.filter((i) => i.id !== islandId)

    this.setState({islands: islands}, () => {
      this.persistState();
      let otherIsland = this.state.islands.find(i => i.worldId === this.state.activeWorld);
      if (otherIsland) {
        this.switchIsland(otherIsland.id)
      }
    });
  }
  setBuildingCount = (island, producer, number) => {
    let buildings = island.buildings;

    if (number===null) {
      buildings[producer.key] = null
    } else {
      if (number > 0) {
        this.enableDisabledBuildingAndItsNeeds(island, producer)
      }
      buildings[producer.key] = number ? Math.max(parseInt(number), 0) : 0
    }

    this.setState(prevState => prevState, this.persistState);
  }
  upsertTrade = (oldTrade, newTrade) => {
    // d(from, to, good, amount)
    let trades = this.state.trades;
    // remove possibly existing trade
    if (oldTrade) {
      // trades = trades.filter(r => !(r.from === oldTrade.from && r.to === oldTrade.to && r.good === oldTrade.good))
      trades = trades.filter(r => r !== oldTrade)
    }
    if (newTrade) {
    // if (!isNaN(newTrade.amount)) {
    //   if (newTrade.amount > 0) {
    //     newTrade.amount = newTrade.amount
    //   }
    // }
      // add new trade / re-add changed trade
      trades = [...trades, newTrade]
    }
    this.setTrades(trades)
    // this.props.fnbsTrades(trades)
  }
  setTrades = (trades) => {
    this.setState({trades: trades}, this.persistState)
  }

  updateUnlockedProducers = (producer, island) => {
    const pop = island.population
    let unlocked = false

    if (!worlds.find(w => w.id === island.worldId).socialClassIDs.includes(producer.tierId)) {
      return false // wrong world
    }

    if (!unlocked) {
      unlocked = pop.ofTier(producer.tierId) >= producer.requirement
    }
    if (!unlocked) {
      unlocked = pop.sumAbove(producer.tierId) > 0;
    }

    if (unlocked) {
      if (island.buildings[producer.key] === undefined) {
        island.buildings[producer.key] = producer.type === "" ? 0 : null
      }
      if (!this.state.unlockedProducers.includes(producer.key)) {
        this.state.unlockedProducers.push(producer.key)
      }
    }
  }
  updateUnlockedNeeds = (need, island) => {
    const pop = island.population
    let needed = false
    const firstTierID = need.tierIDs[0];

    if (!needed) {
      needed = pop.ofTier(firstTierID) >= need.requirement;
    }
    if (!needed && firstTierID < Math.max(...pop.keys())) { // wenn das nächste Tier noch zur selben Welt gehört
      needed = pop.present(firstTierID+1)
    }
    if (!needed) {
      needed = pop.present(firstTierID) && pop.sumAbove(firstTierID)
    }
    if (needed) {
      if (!island.unlockedNeeds.includes(need.key)) {
        this.enableDisabledBuildingAndItsNeeds(island, producers.find(p => p.key === need.key))
        island.unlockedNeeds.push(need.key)
      }
    } else if (island.unlockedNeeds.includes(need.key)) {
      island.unlockedNeeds = island.unlockedNeeds.filter(n => n !== need.key)
    }
  };
  enableDisabledBuildingAndItsNeeds = (island, producer) => {
    if (!producer) {
      return
    }
    producers.filter(p => producer.needs.includes(p.provides)).forEach(p => {
      // console.log("enableDisabledBuildingAndItsNeeds",p.key);
      this.enableDisabledBuildingAndItsNeeds(island, p)
    })

    if ([undefined, null].includes(island.buildings[producer.key])) {
      this.setBuildingCount(island, producer, 0)
      // this.state.islands.find((i) => i.id === island.id).buildings[buildingKey] = 0;
    }

  }
  switchWorld = (worldId) => {
    this.setState({activeWorld: worldId}, this.persistState);
  }
  switchIsland = (id) => {
    let activeIslands = this.state.activeIslands
    activeIslands[this.state.activeWorld] = id
    this.setState({activeIslands: activeIslands}, this.persistState);
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
                  unlocked={this.state.worlds.includes(world.id)}
                  islands={this.state.islands}
                  fnSwitchWorld={this.switchWorld}
                  fnUnlockWorld={this.unlockWorld}
                />
              ))}
              <ResetButton resetFunction={this.reset}/>
              {/*eslint-disable-next-line*/}
              <Button onClick={this.toggleDarkMode} color={'primary'} className='float-right mr-3'>&#128161;{/*icon-lamp*/}</Button>
            </CardHeader>
            {/*   Insel auswahl   */}
            <CardBody className={'overflow-auto text-nowrap'}>
              <Button onClick={() => this.addIsland(this.state.activeWorld)} className={'px-1 py-0 mr-2'}>
                <img src={'./icons/Icon_plus.png'} alt='Hinzufügen' style={{width: 36, height: 36}}/>
              </Button>
              {this.state.islands.filter(island => island.worldId === this.state.activeWorld).map((island, islandKey) => (
                <IslandButton key={island.id} island={island} activeIsland={this.state.activeIslands[this.state.activeWorld]} onClick={this.switchIsland}/>
              ))}
            </CardBody>
          </Card>
          {this.state.islands.filter(island => island.id === this.state.activeIslands[this.state.activeWorld]).map((island, islandKey) => (
            <Card key={island.id} className={'my-3' + (this.state.darkMode ? ' bg-dark' : '')}>
              {/*   Inselname & Bevölkerung & Fruchtbarkeiten  */}
              <CardHeader>
                <Input value={island.name} onChange={e => this.setIslandName(island.id, e.target.value)} style={{maxWidth: 300}} className={'d-inline-block mr-3'}/>
                <strong className={'d-inline-block mr-3'}>
                  <img src={"./icons/population/Population.png"} alt="" style={{height: 40, width: 40}}/>
                  { island.population.sum() }
                </strong>

                <Fertilities
                  island={island}
                  forceEdit={!island.fertilities.length && !Object.keys(island.regionalResources).reduce((prev, next, i) => prev + island.regionalResources[next], 0)}
                  fnSetFertilities={this.setFertilities}
                  fnChangeResourceCount={this.changeResourceCount}
                />

                <Button onClick={() => this.deleteIsland(island.id)} size='sm' className='float-right'>&#10005;{/*icon-x*/}</Button>
              </CardHeader>
              {/*   Bevölkerungsstufen   */}
              <CardHeader>
                <IslandPopulations
                  island={island}
                  fnChangePopulation={this.changePopulation}
                  fnSetPopulation={this.setPopulation}
                  fnSetProhibitedNeeds={this.setProhibitedNeeds}
                />
              </CardHeader>

              {/*   Zeug auf der Insel   */}
              <CardBody>
                {false ? dd(jst(this.state.islands.find(i => i.id === this.state.activeIslands[this.state.activeWorld]).buildings)) : null}
                {/*   Producers   */}
                <br/>
                {/*{dd(jst(this.state.unlockedProducers))}*/}
                <Producers
                  island={island}
                  trades={this.state.trades}
                  fnTrade={this.upsertTrade}
                  fnBalance={(resource) => this.calculateBalance(resource, island) + this.calculateTradeBalance(island.id, resource)}
                  fnSetBuildingCount={this.setBuildingCount}
                  fnEnableDisabledBuildingAndItsNeeds={producer => this.enableDisabledBuildingAndItsNeeds(island, producer)}
                  unlockedProducers={this.state.unlockedProducers}

                />
              </CardBody>
            </Card>
          ))}
        </Container>
      </div>
    );
  }
}

export default App;
