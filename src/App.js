import React, {Component} from 'react';
import {Button, ButtonGroup, Card, CardBody, Col, Container, Input, InputGroup, InputGroupAddon, Row} from 'reactstrap';
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
      this.addIsland('oldWorld')
    }
  }

  reset = () => {
    localStorage.clear();
    this.setState(config.defaultState, () => {
      this.addIsland('oldWorld')
    });
  }
  exactNeed = (population, need) => {
    // alert(JSON.stringify(need))
    // return 1;
    return need.provides.reduce((prev, next, i) => prev + population[i + need.tier - 1] / next, 0);
    // return need.consumption.reduce((prev, next, i) => prev + next * population[i + need.tier - 1], 0);
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
    // return need.provides.reduce((prev, next, i) => prev + population[i + need.tier - 1] / next, 0);
    // return need.consumption.reduce((prev, next, i) => prev + next * population[i + need.tier - 1], 0);
  }
  changePopulationLevel = (islandKey, tierKey, direction, move = false, relativeTarget = 0) => {
    let number = direction * this.step
    let population = this.state.islands[islandKey].population.level;
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
  setPopulationLevel = (islandKey, tierKey, number) => {
    let population = this.state.islands[islandKey].population.level;
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
    islands[id].name = name

    this.setState(prevState => ({
      ...prevState,
      islands: islands
    }), () => {
      localStorage.setItem('state', JSON.stringify(this.state));
    });
  }
  addIsland(worldKey) {
    let islands = this.state.islands
    islands.push(JSON.parse(JSON.stringify({...config.emptyIsland[worldKey], id: islands.length })))

    this.setState(prevState => ({
      ...prevState,
      islands: islands
    }), () => {
      localStorage.setItem('state', JSON.stringify(this.state));
    });
  }
  unlockWorld(worldKey) {
    let worlds = this.state.worlds
    worlds.push(worldKey)

    this.setState(prevState => ({
      ...prevState,
      worlds: worlds
    }), () => {
      localStorage.setItem('state', JSON.stringify(this.state));
    });
  }
  deleteIsland(islandKey) {
    if (!window.confirm('Insel "'+this.state.islands[islandKey].name+'" ('+islandKey+') löschen?')) {
      return;
    }
    let islands = this.state.islands.slice(0, islandKey).concat(this.state.islands.slice(islandKey+1))

    this.setState(prevState => ({
      ...prevState,
      islands: islands
    }), () => {
      localStorage.setItem('state', JSON.stringify(this.state));
    });
  }
  setBuildingCount = (islandKey, building, number) => {
    let buildings = this.state.islands[islandKey].buildings;
    buildings[building] = number ? Math.max(parseInt(number),0) : 0

    this.setState(prevState => ({
      ...prevState.buildings,
      buildings: buildings
    }), () => {
      localStorage.setItem('state', JSON.stringify(this.state));
    });
  }

  isNeeded = (need, island) => {
    let firstTierRequireCount = island.population.level[need.tier-1];
    /** auf dieser insel */
    let oneAboveRequirementExists = 0 < island.population.level[need.tier];
    /** @todo requirement auf DIESER insel, baumöglichkeit auf IRGENDEINER insel*/
    let anyAboveRequirementExists = 0 < island.population.level.slice(need.tier).reduce((prev, next) => prev + next, 0);

    let needed = firstTierRequireCount >= need.requirement || oneAboveRequirementExists
             || (firstTierRequireCount > 0                 && anyAboveRequirementExists);

    if (needed && isNaN(island.buildings[need.id])) {
      island.buildings[need.id] = 0;
    }
    return needed;
  };
  isUnlocked = (ressource, island) => {
    let firstTierRequireCount = island.population.level[ressource.tier - 1];
    let anyAboveRequirementExists = 0 < island.population.level.slice(ressource.tier).reduce((prev, next) => prev + next, 0);

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

  render() {
    return (
      <div className="App">
        <Container fluid>
          <h2 className='mb-3'>Plan1800
            <Button onClick={this.reset} size='sm'>reset</Button>
          </h2>
          {this.state.worlds.map((world, worldKey) => (
            <div>
          {this.state.islands.filter((island) => {return island.world === world}).map((island, islandKey) => (
          <Card className={'mb-3 bg-dark'}>
            <CardHeader>
              <Input value={island.name} onChange={e => this.setIslandName(island.id, e.target.value)} style={{maxWidth: 300}} className={'d-inline-block mr-3'} />
              <strong className={'d-inline-block mr-3'}>
                <img src={"./icons/population/Population.png"} alt="" className={" rounded"} style={{height: 40, width: 40}}/>
                { island.population.level.reduce((prev, next) => prev + next, 0) }
              </strong>
              <Button onClick={() => this.deleteIsland(island.id)} size='sm'>löschen</Button>
            </CardHeader>
            {/*<Population levels={this.populationLevels} />*/}
              {/*<PopulationItem populationLevel={levels[i]} i={i} />*/}
            <CardHeader>
              <Row>
                {tiers.filter((tier) => { return worlds.find(w => { return w.key === world}).socialClassIDs.find(tierID => tierID === tier.id)} ).map((tier, tierKey) => (
                <Col xs={12} sm={6} md={4} lg={3} xl={''} key={tierKey}
                      className={"align-content-center" + ((!tierKey || (island.population.level[tierKey] > 0)) ? ' bg-success-': ' d-none-')}>
                  <Row className={'align-items-end'}>
                    {/*<Col className={'col-auto' + ((tierKey === 0) ? ' bg-warning d-none': '')}>*/}
                    {/*  <ButtonGroup vertical size='sm'>*/}
                    {/*    <Button onClick={() => this.changePopulationLevel(tierKey-1, -1) + this.changePopulationLevel(tierKey, +1)} color='primary'>&raquo;</Button>*/}
                    {/*    <Button onClick={() => this.changePopulationLevel(tierKey, -1) + this.changePopulationLevel(tierKey-1, +1)} color='warning'>&lsaquo;</Button>*/}
                    {/*  </ButtonGroup>*/}
                    {/*</Col>*/}
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
                    <Col className={'col-auto '+ ((tier.id === worlds.find(w => { return w.key === world}).socialClassIDs.slice(-1)[0]) ? ' bg-warning d-none': '')}
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
                <Col sm={'auto'} className='ml-auto'>
                  {ressources.filter((ressource) => this.isUnlocked(ressource, island, this)).map((ressource, ressourceKey) => (
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
                                 style={{width: 62}}
                                 className={'mr-2 text-center px-1' + (island.buildings[ressource.id] <= 0  && !island.id ? ' is-invalid' :'')}
                                 onChange={e => this.setBuildingCount(island.id, ressource.id, e.target.value)}
                          />
                        </Media>
                      </Media>
                    </div>
                  ))}
                  <hr/>
                </Col>
                <Col sm={'auto'}>
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
                </Col>
                <Col sm={'auto'}>
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
            </div>
          ))}

          <Card className={'my-3 bg-dark'}>
            <CardHeader>
              <Button onClick={() => this.addIsland("oldWorld")} className={'mr-2'}>Neue Insel</Button>
              <Button onClick={() => this.addIsland("oldWorld")} className={'mr-2'}>Alte Welt</Button>
              <Button onClick={() => this.addIsland("newWorld")} className={'mr-2'} disabled={!this.state.worlds.find((w) => w === "newWorld")}>Neue Welt</Button>
              <Button onClick={() => this.unlockWorld("newWorld")} className={'mr-2'} disabled={this.state.worlds.find((w) => w === "newWorld")}>Neue Welt freischalten</Button>
            {/*<Button onClick={() => this.addIsland("capTrelawny")}>Cap Trelawny</Button>*/}
            </CardHeader>
          </Card>

        </Container>
      </div>
    );
  }
}

export default App;
