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


class App extends Component {
  step = 50;
  precision = 2;

  handleWheel = (event, islandKey, tierKey, direction, move = false, relativeTarget = 0) => {
    event.preventDefault()
    this.changePopulationLevel(islandKey, tierKey, direction, move, relativeTarget)
  }


  constructor (props) {
    // localStorage.clear();
    super(props);

    let oldState = localStorage.getItem('state');
    this.state = JSON.parse(oldState ? oldState : JSON.stringify((config.defaultState)))
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
  exactNeed = (population, need) => {
    // alert(JSON.stringify(need))
    // return 1;
    return need.provides.reduce((prev, next, i) => prev + population[i + need.tierId - 1] / next, 0);
    // return need.consumption.reduce((prev, next, i) => prev + next * population[i + need.tierId - 1], 0);
  }
  exactConsumption = (buildings, ressource) => {
    let provider = farms.find((farm) => this.isProvidingRessource(farm, ressource))
    let consumers = ([...needs, ...ressources]).filter((farm) => this.isConsumingRessource(farm, ressource))
    // let consumers = this.needs.filter((farm) => this.isConsumingRessource(farm, ressource))

    let consumption = consumers.reduce((prev, next, i) => prev + buildings[next.id] * next.productionTime/provider.productionTime, 0)

    // alert(JSON.stringify(buildings))
    // console.log(ressource)
    // console.log(consumers)
    // console.log(consumption)
    // alert(JSON.stringify(buildings[provider.provides]))

    // return buildings[provider.id]
    return consumption
    // return 3
    // return need.provides.reduce((prev, next, i) => prev + population[i + need.tierId - 1] / next, 0);
    // return need.consumption.reduce((prev, next, i) => prev + next * population[i + need.tierId - 1], 0);
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
      NewValue = (isNaN(population[tierKey+relativeTarget]) ? 0 : population[tierKey+relativeTarget]) + diff - number;
      NewValueButMinimum0 = Math.max(NewValue, 0);
      population[tierKey+relativeTarget] = NewValueButMinimum0;
    }

    this.setState(prevState => ({
          ...prevState.population,
            level: population
    }), () => {
      localStorage.setItem('state', JSON.stringify(this.state));
    });
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
    }), () => {
      localStorage.setItem('state', JSON.stringify(this.state));
    });
  }
  setIslandName = (id, name) => {
    let islands = this.state.islands
    islands.find((i) => i.id === id).name = name

    this.setState(prevState => ({
      ...prevState,
      islands: islands
    }), () => {
      localStorage.setItem('state', JSON.stringify(this.state));
    });
  }
  addIsland(worldId) {
    let islands = this.state.islands
    let newId = islands.reduce((prev, next, i) => Math.max(prev, next.id), 0)+1;
    islands.push(JSON.parse(JSON.stringify({...config.emptyIsland.find((i) => i.world === worldId), id: newId })))

    this.setState(prevState => ({
      ...prevState,
      islands: islands
    }), () => {
      localStorage.setItem('state', JSON.stringify(this.state));
      this.switchIsland(newId)
    });
  }
  unlockWorld(worldId) {
    let worlds = this.state.worlds
    worlds.push(worldId)

    this.setState(prevState => ({
      ...prevState,
      worlds: worlds
    }), () => {
      localStorage.setItem('state', JSON.stringify(this.state));
    });
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
      localStorage.setItem('state', JSON.stringify(this.state));
    });
  }
  setBuildingCount = (islandId, building, number) => {
    let buildings = this.state.islands.find((i) => i.id === islandId).buildings;
    buildings[building] = number ? Math.max(parseInt(number),0) : 0

    this.setState(prevState => ({
      ...prevState.buildings,
      buildings: buildings
    }), () => {
      localStorage.setItem('state', JSON.stringify(this.state));
    });
  }

  isNeeded = (need, island) => {
    // NW ist id 6 und 7 statt 0 und 1
    let keys = worlds.find(w => w.id === island.world).socialClassIDs
    let relativePopulationLevel = []
    for (let i = 0; i < keys.length; i++) {
      relativePopulationLevel[keys[i]-1] = island.population.level[i]
    }

    let firstTierRequireCount = relativePopulationLevel[need.tierId-1];
    /** auf dieser insel */
    let oneAboveRequirementExists = 0 < relativePopulationLevel[need.tierId];
    /** @todo requirement auf DIESER insel, baumöglichkeit auf IRGENDEINER insel*/
    let anyAboveRequirementExists = 0 < relativePopulationLevel.slice(need.tierId).reduce((prev, next) => prev + next, 0);

    let needed = firstTierRequireCount >= need.requirement || oneAboveRequirementExists
             || (firstTierRequireCount > 0                 && anyAboveRequirementExists);

    if (needed && isNaN(island.buildings[need.id])) {
      island.buildings[need.id] = 0;
    }
    return needed;
  };
  isUnlocked = (ressource, island) => {
    // NW ist id 6 und 7 statt 0 und 1
    let keys = worlds.find(w => w.id === island.world).socialClassIDs
    let relativePopulationLevel = []
    for (let i = 0; i < keys.length; i++) {
      relativePopulationLevel[keys[i]-1] = island.population.level[i]
    }

    let firstTierRequireCount = relativePopulationLevel[ressource.tierId - 1];
    let anyAboveRequirementExists = 0 < relativePopulationLevel.slice(ressource.tierId).reduce((prev, next) => prev + next, 0);

    let unlocked = firstTierRequireCount >= ressource.requirement || anyAboveRequirementExists;

    if (unlocked && isNaN(island.buildings[ressource.id])) {
      island.buildings[ressource.id] = 0;
    }
    return unlocked;
  };
  isProvidingRessource = (building, ressource) => {
    return building.provides === ressource.id
  };
  isConsumingRessource = (building, ressource) => {
    // console.log('finding '+ressource.id)//, building.needs.indexOf(ressource.id))
    if (undefined === building.needs) {
      return false;
    }
    // console.log(building.needs)
    return -1 < building.needs.indexOf(ressource.id)
  };

  switchWorld = (worldKey) => {
    let activeWorld = this.state.activeWorld
    activeWorld = worldKey

    this.setState(prevState => ({
      ...prevState,
      activeWorld: activeWorld
    }), () => {
      localStorage.setItem('state', JSON.stringify(this.state));
    });
  }
  switchIsland = (id) => {
    let activeIslands = this.state.activeIslands
    activeIslands[this.state.activeWorld] = id

    this.setState(prevState => ({
      ...prevState,
      activeIslands: activeIslands
    }), () => {
      localStorage.setItem('state', JSON.stringify(this.state));
    });
  }

  render() {
    return (
      <div className="App mt-3">
        <Container fluid>
          <Card className={'my-3 bg-dark-'}>
            {/*Welt auswahl*/}
            <CardHeader>
              {worlds.filter(w => this.state.worlds.indexOf(w.id) >= 0).map((world, worldKey) => (
                <Button title={trans(world)} className={'mr-2 '}
                        active={this.state.activeWorld === world.id}
                        disabled={0 > this.state.worlds.indexOf(world.id)}
                        onClick={() => this.switchWorld(world.id)}>
                  <img src={'./icons/worlds/' + world.id + '.png'} alt={world} style={{width: 40, height: 40}}/>
                  {/*{trans(world)}*/}
                </Button>
              ))}
              {worlds.filter(w => this.state.worlds.indexOf(w.id) < 0).map((world, worldKey) => (
                <UncontrolledButtonDropdown className={'mr-2 '}>
                  <Button title={trans(world)}
                          active={this.state.activeWorld === world.id}
                          disabled={0 > this.state.worlds.indexOf(world.id)}
                          onClick={() => this.switchWorld(world.id)}>
                    <img src={'./icons/worlds/' + world.id + '.png'} alt={world} style={{width: 40, height: 40}}/>
                    {/*{trans(world)}*/}
                  </Button>
                  <DropdownToggle caret color="secondary"/>
                  <DropdownMenu right={0}>
                    <DropdownItem onClick={() => this.unlockWorld(world.id)}
                      disabled={this.state.islands.length && this.state.islands.find(() => true).population.level[2]}>freischalten</DropdownItem>
                    <DropdownItem divider/>
                    <DropdownItem onClick={() => alert(world.id)}
                      disabled={this.state.islands.length && this.state.islands.find(() => true).population.level[2] < 50}>Expedition planen <Badge color='secondary'>later</Badge></DropdownItem>
                    <DropdownItem onClick={() => alert(world.id)}
                      disabled={this.state.islands.length && this.state.islands.find(() => true).population.level[2] < 200}>Expedition starten <Badge color='secondary'>later</Badge></DropdownItem>
                  </DropdownMenu>
                </UncontrolledButtonDropdown>
                ))}
              <Button onClick={this.reset} className='btn-warning float-right'>
                <img src={'./icons/Icon_traderoutes.png'} alt='reset' style={{width: 40, height: 40}}/>
              </Button>
            </CardHeader>
            {/*Insel auswahl*/}
            <CardBody className={'overflow-auto text-nowrap'}>
              {this.state.islands.filter((island) => {return island.world === this.state.activeWorld}).map((island, islandKey) => (
               <Button title={island.name}
                       className={'mr-2 '}
                       active={this.state.activeIslands[this.state.activeWorld] === island.id}
                       onClick={() => this.switchIsland(island.id)}
               >
                 {island.name} ({island.id})
               </Button>
              ))}
              <Button onClick={() => this.addIsland(this.state.activeWorld)} className={'px-1 py-0'}>
                <img src={'./icons/Icon_plus.png'} alt='Hinzufügen' style={{width: 36, height: 36}}/>
              </Button>
            </CardBody>
          </Card>
          <h2 className='mb-3 d-none'>Plan1800
            <Button onClick={this.reset} size='sm'>reset</Button>
          </h2>
          {/*{this.state.worlds.filter((worldId) => worldId === this.state.activeWorld).map((world, worldKey) => (*/}
          {/*  <div>*/}
          {this.state.islands.filter((island) => {return island.id === this.state.activeIslands[this.state.activeWorld]}).map((island, islandKey) => (
          <Card className={'mb-3 bg-dark-'}>
            <CardHeader>
              <Input value={island.name} onChange={e => this.setIslandName(island.id, e.target.value)} style={{maxWidth: 300}} className={'d-inline-block mr-3'} />
              <strong className={'d-inline-block mr-3'}>
                <img src={"./icons/population/Population.png"} alt="" className={" rounded"} style={{height: 40, width: 40}}/>
                {/*{ island.population.level.reduce((prev, next) => prev + next, 0) }*/}
              </strong>
              <Button onClick={() => this.deleteIsland(island.id)} size='sm' className='float-right'>&times;</Button>
            </CardHeader>
            {/*<Population levels={this.populationLevels} />*/}
              {/*<PopulationItem populationLevel={levels[i]} i={i} />*/}
            <CardHeader>
              <Row>
                {tiers.filter((tier) => { return worlds.find(w => { return w.id === island.world}).socialClassIDs.find(tierID => tierID === tier.id)} ).map((tier, tierKey) => (
                <Col xs={12} sm={6} md={4} lg={3} xl={''} key={tierKey}
                     // style={{maxWidth: '20%'}}
                      className={"align-content-center" + ((!tierKey || (island.population.level[tierKey] > 0)) ? ' bg-success-': ' d-none')}>
                  <Row className={'align-items-end'}>
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
                    <Col className={'col-auto '+ ((tier.id === worlds.find(w => { return w.id === island.world}).socialClassIDs.slice(-1)[0]) ? ' bg-warning invisible': '')}
                         onWheel={e => this.handleWheel(e, island.id, tierKey+(Math.sign(e.deltaY)>0 ? 1 : 0), -1, true, -Math.sign(e.deltaY))}
                    >
                      <ButtonGroup vertical size='sm'>
                        <Button onClick={() => this.changePopulationLevel(island.id, tierKey+0, -1, true, +1)} color='primary'>&raquo;</Button>
                        <Button onClick={() => this.changePopulationLevel(island.id, tierKey+1, -1, true, -1)} color='warning'>&lsaquo;</Button>
                      </ButtonGroup>
                    </Col>
                  </Row>
                </Col>
            ))}
              </Row>
            </CardHeader>

            {/*<div className="w-100 m-3"></div>*/}
            <CardBody>
              <Row>
                <Col sm={'auto'} className='ml-auto-'>
                  {ressources.filter((ressource) => this.isUnlocked(ressource, island, this)).map((ressource, ressourceKey) => (
                    <div key={ressource.id} className='my-1'>
                      <Media>
                        <Media left>
                          <Media object src={"./icons/goods/" + ressource.key + ".png"} alt={trans(ressource)} title={trans(ressource)}
                                 middle style={{height: 30, width: 30}} className='mr-2'
                          />
                        </Media>
                        <Media body className='align-self-center form-inline'>
                          <span className="mr-2">
                            {island.buildings[ressource.id].toFixed(this.precision)}
                          </span>
                          <Input type='number' size='sm'
                            // title={populationLevel}
                                 value={island.buildings[ressource.id]}
                                 style={{width: 62}}
                                 className={'mr-2 text-center px-1' + (island.buildings[ressource.id] <= 0  && !island.id ? ' is-invalid' :'')}
                                 onChange={e => this.setBuildingCount(island.id, ressource.id, e.target.value)}
                          />
                        </Media>
                      </Media>
                    </div>
                  ))}
                  <hr/>
                {/*</Col>*/}
                {/*<Col sm={'auto'}>*/}
                  {needs.filter((need) => this.isNeeded(need, island)).map((need, needKey) => (
                      <div key={need.id} className='my-1'>
                        <Media>
                          <Media left>
                            <Media object src={"./icons/goods/" + need.id + ".png"} alt={need.resourceName}
                                   middle style={{height: 30, width: 30}} className='mr-2'
                            />
                          </Media>
                          <Media body className='align-self-center form-inline'>
                            <span className="mr-2">
                            {/*{Math.ceil(this.exactNeed(island.population.level, need))}*/}
                            {/*{' '}*/}
                            {this.exactNeed(island.population.level, need).toFixed(this.precision)}
                            </span>
                            <Input type='number' size='sm'
                              // title={populationLevel}
                              value={island.buildings[need.id]}
                              style={{width: 62,
                                backgroundColor:
                                  RGB_Log_Blend(
                                    Math.min(Math.max(this.exactNeed(island.population.level, need).toFixed(this.precision) - island.buildings[need.id], 0),1),
                                    // 'rgba(100,200,255,0.5)',
                                    'rgba(100,255,100,0.5)',
                                    'rgba(255,50,50,0.5)',
                                  ),
                              }}
                              className={'mr-2 text-center px-1' + (this.exactNeed(island.population.level, need).toFixed(this.precision) > island.buildings[need.id] ? ' is-invalid' :'')}
                              onChange={e => this.setBuildingCount(island.id, need.id, e.target.value)}
                            />
                          </Media>
                        </Media>
                      </div>
                  ))}
                {/*</Col>*/}
                {/*<Col sm={'auto'}>*/}
                    <hr/>
                  {farms.filter((ressource) => this.isUnlocked(ressource, island, this)).map((ressource, ressourceKey) => (
                      <div key={ressource.id} className='my-1'>
                        <Media>
                          <Media left>
                            <Media object src={"./icons/goods/" + ressource.id + ".png"} alt={ressource.resourceName}
                                   middle style={{height: 30, width: 30}} className='mr-2'
                            />
                          </Media>
                          <Media body className='align-self-center form-inline'>
                            <span className="mr-2">
                            {island.buildings[ressource.id].toFixed(this.precision)}
                            </span>
                            <Input type='number' size='sm'
                              // title={populationLevel}
                              value={island.buildings[ressource.id]}
                              max={ressource.max}
                              style={{width: 62,
                                backgroundColor:
                                  RGB_Log_Blend(
                                    Math.min(Math.max(this.exactConsumption(island.buildings, ressource) - island.buildings[ressource.id], 0),1),
                                    // 'rgba(100,200,255,0.5)',
                                    'rgba(100,255,100,0.5)',
                                    'rgba(255,50,50,0.5)',
                                  ),
                              }}
                              // className={'mr-2 text-center px-1'}
                              className={'mr-2 text-center px-1' + (this.exactConsumption(island.buildings, ressource) > island.buildings[ressource.id] ? ' is-invalid' :'')}
                              onChange={e => this.setBuildingCount(island.id, ressource.id, e.target.value)}
                            />
                            {this.exactConsumption(island.buildings, ressource)}
                          </Media>
                        </Media>
                      </div>
                  ))}
                </Col>
              {/*<Productions productions={island.buildings} />*/}
              </Row>
            </CardBody>
          </Card>
          ))}
            {/*</div>*/}
          {/*))}*/}

        </Container>
      </div>
    );
  }
}

export default App;
