import React, {Component} from 'react';
import {UncontrolledButtonDropdown, Badge, DropdownToggle, DropdownMenu, DropdownItem, Button, ButtonGroup, Card, CardBody, Col, Container, Input, InputGroup, InputGroupAddon, Row} from 'reactstrap';
// import {Button, ButtonGroup, Card, CardBody, CardText, CardTitle, Col, Container, Input, InputGroup, InputGroupAddon, Nav, NavItem, NavLink, Row, TabContent, TabPane} from 'reactstrap';
import Media from "reactstrap/es/Media";
import CardHeader from "reactstrap/es/CardHeader";
import './App.css'
import {RGB_Log_Blend} from "./functions/color";
import {trans} from "./functions/translation";
import tiers from "./data/game/tiers";
import worlds from "./data/game/worlds";
import needs from "./data/game/needs";
import farms from "./data/game/farms";
import ressources from "./data/game/ressources";
import * as config from "./data/app/config";

const debugEnabled = true
const jst = JSON.stringify
const jpa = JSON.parse
const jcl = foo => jpa(jst(foo)) // clone function
const cl = console.log
const d = debugEnabled ? cl : () => null
const dd = debugEnabled ? (...foo) => <div className='d-inline-block font-italic text-break'>{foo}</div> : () => null
const dst = foo => d(jst(foo))

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
  exactConsumption = (buildings, ressource) => {
    let provider = farms.find((farm) => this.isProvidingRessource(farm, ressource))
    let consumers = ([...needs, ...ressources])
      // .filter((farm) => () => buildings.indexOf(farm.key))
      .filter((farm) => this.isConsumingRessource(farm, ressource))
    // let consumers = this.needs.filter((farm) => this.isConsumingRessource(farm, ressource))

    let consumption = consumers.reduce((prev, next, i) => prev + buildings[next.key] * next.productionTime / provider.productionTime, 0)

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
  unlockWorld(worldId) {
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
             || (firstTierRequireCount > 0                 && anyAboveRequirementExists);

    if (needed && isNaN(island.buildings[need.key])) {
      island.buildings[need.key] = 0;
    }
    /** auf dieser insel */
    /** @todo requirement auf DIESER insel, baumöglichkeit auf IRGENDEINER insel*/
    return needed;
  };
  isUnlocked = (ressource, island) => {
    let unlocked = false

    let islandTierKey = worlds.find(w => w.id === island.world).socialClassIDs.indexOf(ressource.tierId);
    if (islandTierKey <= -1) {
      return unlocked
    }

    if (!unlocked) {
      let firstTierRequireCount = island.population.level[islandTierKey];
      unlocked = firstTierRequireCount >= ressource.requirement
    }
    if (!unlocked) {
      let anyAboveCount = island.population.level.slice(islandTierKey+1).reduce((prev, next) => prev + next, 0);
      unlocked = anyAboveCount > 0;
    }

    if (unlocked && isNaN(island.buildings[ressource.key])) {
      island.buildings[ressource.key] = 0;
    }
    return unlocked;
  };
  isProvidingRessource = (building, ressource) => {
    return building.provides === ressource.key
  };
  isConsumingRessource = (building, ressource) => {
    // d('finding '+ressource.id)//, building.needs.indexOf(ressource.id))
    if (undefined === building.needs) {
      return false;
    }
    // d(building.needs)
    return -1 < building.needs.indexOf(ressource.key)
  };

  switchWorld = (worldKey) => {
    let activeWorld = this.state.activeWorld
    activeWorld = worldKey

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
          <Card className={'my-3 bg-dark-'}>
            {/*   Welt auswahl   */}
            <CardHeader>
              {worlds.filter(w => this.state.worlds.indexOf(w.id) >= 0).map((world, worldKey) => (
                <Button key={world.id}
                        title={trans(world)} className={'mr-2 '}
                        active={this.state.activeWorld === world.id}
                        disabled={0 > this.state.worlds.indexOf(world.id)}
                        onClick={() => this.switchWorld(world.id)}>
                  <img src={'./icons/worlds/' + world.id + '.png'} alt={world} style={{width: 40, height: 40}}/>
                  {/*{trans(world)}*/}
                </Button>
              ))}
              {worlds.filter(w => this.state.worlds.indexOf(w.id) < 0).map((world, worldKey) => (
                <UncontrolledButtonDropdown key={world.id} className={'mr-2 '}>
                  <Button title={trans(world)}
                          active={this.state.activeWorld === world.id}
                          disabled={0 > this.state.worlds.indexOf(world.id)}
                          onClick={() => this.switchWorld(world.id)}>
                    <img src={'./icons/worlds/' + world.id + '.png'} alt={world} style={{width: 40, height: 40}}/>
                    {/*{trans(world)}*/}
                  </Button>
                  <DropdownToggle caret color="secondary"/>
                  <DropdownMenu right={false}>
                    <DropdownItem onClick={() => this.unlockWorld(world.id)}
                                  disabled={this.state.islands.length && this.state.islands.find(() => true).population.level[2] > 0}>freischalten</DropdownItem>
                    <DropdownItem divider/>
                    <DropdownItem onClick={() => alert(world.id)}
                                  disabled={this.state.islands.length && this.state.islands.find(() => true).population.level[2] < 50}>Expedition planen <Badge color='secondary'>later</Badge></DropdownItem>
                    <DropdownItem onClick={() => alert(world.id)}
                                  disabled={this.state.islands.length && this.state.islands.find(() => true).population.level[2] < 200}>Expedition starten <Badge color='secondary'>later</Badge></DropdownItem>
                  </DropdownMenu>
                </UncontrolledButtonDropdown>
              ))}
              {dd(jst(this.state.activeWorld), " ", jst(this.state.worlds),)}
              <Button onClick={this.reset} className='btn-warning float-right'>
                <img src={'./icons/Icon_traderoutes.png'} alt='reset' style={{width: 40, height: 40}}/>
              </Button>
            </CardHeader>
            {/*   Insel auswahl   */}
            <CardBody className={'overflow-auto text-nowrap'}>
              <Button onClick={() => this.addIsland(this.state.activeWorld)} className={'px-1 py-0 mr-2'}>
                <img src={'./icons/Icon_plus.png'} alt='Hinzufügen' style={{width: 36, height: 36}}/>
              </Button>
              {this.state.islands.filter(island => island.world === this.state.activeWorld).map((island, islandKey) => (
               <Button key={island.id} title={island.name}
                       className={'mr-2 '}
                       active={this.state.activeIslands[this.state.activeWorld] === island.id}
                       onClick={() => this.switchIsland(island.id)}
               >
                 {island.name} ({island.id})
               </Button>
              ))}
              {dd(jst(this.state.activeIslands[this.state.activeWorld]), " ",
                jst(this.state.islands.filter(island => island.world === this.state.activeWorld).reduce((prev, next) => [...prev, next.id], [])),)}
            </CardBody>
          </Card>
          {this.state.islands.filter(island => island.id === this.state.activeIslands[this.state.activeWorld]).map((island, islandKey) => (
            <Card key={island.id} className={'mb-3 bg-dark-'}>
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
              <CardHeader>
                <Row>
                  {tiers.filter(tier => worlds.find(w => w.id === island.world).socialClassIDs.find(tierId => tierId === tier.id)).map((tier, tierKey) => (
                    <Col xs={12} sm={6} md={4} lg={3} xl={''} key={tierKey}
                      // style={{maxWidth: '20%'}}
                         className={"align-content-center" + ((!tierKey || (island.population.level[tierKey] > 0)) ? ' bg-success-' : ' d-none')}>
                      <Row className={'align-items-end'}>
                        {/*   Eingabe Spalte   */}
                        <Col className=''>
                          <img src={"./icons/population/Workforce_" + (tier.key) + ".png"} alt="" className="d-block mx-auto rounded" style={{height: 40, width: 40}}/>
                          {/*<Col xs={12} sm={10} md={6} lg={4} key={tierKey}>*/}
                          {/*<PopulationItem tier={this.populationLevels[tierKey]} tierKey={tierKey} />*/}
                          <InputGroup>
                            <InputGroupAddon addonType="prepend">
                              <Button onClick={() => this.changePopulationLevel(island.id, tierKey, -1)} color='secondary'>-</Button>
                            </InputGroupAddon>
                            <Input placeholder={trans(tier)} title={trans(tier)}
                                   value={island.population.level[tierKey]}
                                   style={{height: 62}}
                                   className={'text-center'}
                              // readOnly
                                   onChange={e => this.setPopulationLevel(island.id, tierKey, e.target.value)}
                                   onWheel={e => this.handleWheel(e, island.id, tierKey, -Math.sign(e.deltaY))}
                            />
                            <InputGroupAddon addonType="append">
                              <Button onClick={() => this.changePopulationLevel(island.id, tierKey, +1)} color='secondary'>+</Button>
                            </InputGroupAddon>
                          </InputGroup>
                        </Col>
                        {/*   Upgrade Spalte   */}
                        <Col className={'col-auto ' + ((tier.id === worlds.find(w => w.id === island.world).socialClassIDs.slice(-1)[0]) ? ' bg-warning invisible' : '')}
                             onWheel={e => this.handleWheel(e, island.id, tierKey + (Math.sign(e.deltaY) > 0 ? 1 : 0), -1, true, -Math.sign(e.deltaY))}
                        >
                          <ButtonGroup vertical size='sm'>
                            <Button onClick={() => this.changePopulationLevel(island.id, tierKey + 0, -1, true, +1)} color='primary'>&raquo;</Button>
                            <Button onClick={() => this.changePopulationLevel(island.id, tierKey + 1, -1, true, -1)} color='warning'>&lsaquo;</Button>
                          </ButtonGroup>
                        </Col>
                      </Row>
                    </Col>
                  ))}
                </Row>
              </CardHeader>

              {/*   Zeug auf der Insel   */}
              <CardBody>
                {dd(jst(this.state.islands.find(i => i.id === this.state.activeIslands[this.state.activeWorld]).buildings))}
                <Row>
                  <Col sm={'auto'} className='ml-auto-'>
                    {/*   Ressourcen - Baumaterial   */}
                    {ressources.filter((ressource) => this.isUnlocked(ressource, island)).map((ressource, ressourceKey) => (
                      <div key={ressource.key} className='my-1'>
                        <Media>
                          <Media left>
                            <Media object src={"./icons/goods/" + ressource.key + ".png"} alt={trans(ressource)} title={trans(ressource)}
                                   middle style={{height: 30, width: 30}} className='mr-2'
                            />
                          </Media>
                          <Media body className='align-self-center form-inline'>
                            <span className="mr-2">
                              {island.buildings[ressource.key].toFixed(this.precision)}
                            </span>
                            <Input type='number' bsSize='sm'
                                   style={{width: 62}}
                                   className={'mr-2 text-center px-1' + (island.buildings[ressource.key] <= 0 && island.id === 1 ? ' is-invalid' : '')}
                                   value={island.buildings[ressource.key]}
                                   onChange={e => this.setBuildingCount(island.id, ressource.key, e.target.value)}
                            />
                          </Media>
                        </Media>
                      </div>
                    ))}
                    {/*</Col><Col sm={'auto'}>*/}
                    <hr/>
                    {/*   Ressourcen - Bedürfnisse   */}
                    {needs.filter((need) => this.isNeeded(need, island)).map((need, needKey) => (
                      <div key={need.id} className='my-1'>
                        <Media>
                          <Media left>
                            <Media object src={"./icons/goods/" + need.key + ".png"} alt={need.resourceName}
                                   middle style={{height: 30, width: 30}} className='mr-2'
                            />
                          </Media>
                          <Media body className='align-self-center form-inline'>
                            <span className="mr-2">
                              {this.exactNeed(need, island).toFixed(this.precision)}
                            </span>
                            <Input type='number' bsSize='sm'
                                   style={{width: 62,
                                     backgroundColor:
                                       RGB_Log_Blend(
                                         Math.min(Math.max(this.exactNeed(need, island).toFixed(this.precision) - island.buildings[need.key], 0), 1),
                                         // 'rgba(100,200,255,0.5)',
                                         'rgba(100,255,100,0.5)',
                                         'rgba(255,50,50,0.5)',
                                       ),
                                   }}
                                   className={'mr-2 text-center px-1' + (this.exactNeed(need, island).toFixed(this.precision) > island.buildings[need.key] ? ' is-invalid' : '')}
                                   onChange={e => this.setBuildingCount(island.id, need.key, e.target.value)}
                                   value={island.buildings[need.key]}
                            />
                          </Media>
                        </Media>
                      </div>
                    ))}
                    {/*</Col><Col sm={'auto'}>*/}
                    <hr/>
                    {/*   Ressourcen - Farmen   */}
                    {farms.filter(ressource => this.isUnlocked(ressource, island)).map((ressource, ressourceKey) => (
                      <div key={ressource.key} className='my-1'>
                        <Media>
                          <Media left>
                            <Media object src={"./icons/goods/" + ressource.key + ".png"} alt={ressource.resourceName}
                                   middle style={{height: 30, width: 30}} className='mr-2'
                            />
                          </Media>
                          <Media body className='align-self-center form-inline'>
                            <span className="mr-2">
                              {this.exactConsumption(island.buildings, ressource).toFixed(this.precision)}
                            </span>
                            <Input type='number' bsSize='sm'
                                   value={island.buildings[ressource.key]}
                                   max={ressource.max}
                                   style={{
                                     width: 62,
                                     backgroundColor:
                                       RGB_Log_Blend(
                                         Math.min(Math.max(this.exactConsumption(island.buildings, ressource) - island.buildings[ressource.key], 0), 1),
                                         // 'rgba(100,200,255,0.5)',
                                         'rgba(100,255,100,0.5)',
                                         'rgba(255,50,50,0.5)',
                                       ),
                                   }}
                              // className={'mr-2 text-center px-1'}
                                   className={'mr-2 text-center px-1' + (this.exactConsumption(island.buildings, ressource) > island.buildings[ressource.key] ? ' is-invalid' : '')}
                                   onChange={e => this.setBuildingCount(island.id, ressource.key, e.target.value)}
                            />
                          </Media>
                        </Media>
                      </div>
                    ))}
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
