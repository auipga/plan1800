import React, {Component} from 'react';
import {Button, ButtonGroup, Card, CardBody, Col, Container, Input, InputGroup, InputGroupAddon, Row} from 'reactstrap';
import Media from "reactstrap/es/Media";
import CardHeader from "reactstrap/es/CardHeader";
import './App.css'
// import Population from "./components/Population";
// import Productions from "./components/Productions";
// import PopulationItem from "./components/PopulationItem";

const RGB_Linear_Blend=(p,c0,c1)=>{
  var i=parseInt,r=Math.round,P=1-p,[a,b,c,d]=c0.split(","),[e,f,g,h]=c1.split(","),x=d||h,d=x?","+(!d?h:!h?d:r((parseFloat(d)*P+parseFloat(h)*p)*1000)/1000+")"):")";
  return"rgb"+(x?"a(":"(")+r(i(a[3]=="a"?a.slice(5):a.slice(4))*P+i(e[3]=="a"?e.slice(5):e.slice(4))*p)+","+r(i(b)*P+i(f)*p)+","+r(i(c)*P+i(g)*p)+d;
}
const RGB_Log_Blend=(p,c0,c1)=>{
  var i=parseInt,r=Math.round,P=1-p,[a,b,c,d]=c0.split(","),[e,f,g,h]=c1.split(","),x=d||h,d=x?","+(!d?h:!h?d:r((parseFloat(d)*P+parseFloat(h)*p)*1000)/1000+")"):")";
  return"rgb"+(x?"a(":"(")+r((P*i(a[3]=="a"?a.slice(5):a.slice(4))**2+p*i(e[3]=="a"?e.slice(5):e.slice(4))**2)**0.5)+","+r((P*i(b)**2+p*i(f)**2)**0.5)+","+r((P*i(c)**2+p*i(g)**2)**0.5)+d;
}

class App extends Component {
  populationLevels = [
    "Farmers",
    "Workers",
    "Artisans",
    "Engineers",
    "Investors",
  ];
  ressources = [
    {
      id: "Timber",
      tier: 1,
      requirement: 0,
      buildingName: "Sägewerk",
      resourceName: "Bretter",
      productionTime: 15,
      needs: [ "Wood" ],
    },
    {
      id: "Bricks",
      tier: 2,
      requirement: 1,
      buildingName: "Bricks Factory",
      resourceName: "Ziegel",
      productionTime: 60,
      needs: [ "Clay" ],
    },
 ]
  ressources_farms = [
    {
      id: "Wood",
      tier: 1,
      requirement: 0,
      buildingName: "Holzfällerhütte",
      resourceName: "Holz",
      productionTime: 15,
      provides: "Wood",
    },
    {
      id: "Potato",
      tier: 1,
      requirement: 100,
      buildingName: "Kartoffelacker",
      resourceName: "Kartoffeln",
      productionTime: 30,
      provides: "Potato",
    },
    {
      id: "Wool",
      tier: 1,
      requirement: 150,
      buildingName: "Schaffarm",
      resourceName: "Wolle",
      productionTime: 30,
      provides: "Wool",
    },
    {
      id: "Clay",
      tier: 2,
      requirement: 1,
      buildingName: "Lehmgrube",
      resourceName: "Lehm",
      productionTime: 30,
      provides: "Clay",
      max: 4
    },
    {
      id: "Pigs",
      tier: 2,
      requirement: 1,
      buildingName: "Schweinefarm",
      resourceName: "Schweine",
      productionTime: 30,
      provides: "Pigs",
    },
  ]

  step = 50;
  precision = 2;
  emptyIsland = {
    oldWorld: {
      name: 'Neue Insel (Alte Welt)',
      population: {
        level: [
          0,
          0,
          0,
          0,
          0,
        ],
      },
      buildings: {}
    },
    newWorld: {
      name: 'Neue Insel (Neue Welt)',
      population: {
        level: [
          0,
          0,
        ],
      },
      buildings: {}
    },
  }
  defaultState = {
    islands: [
      JSON.parse(JSON.stringify(this.emptyIsland.oldWorld))
    ],
  };
  componentDidMount() {
    // window.addEventListener('wheel', (e) => this.handleWheel(e), {passive: false});
    // document.addEventListener("mousewheel", this.handleWheel.bind(this), { passive: false });
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
    document.removeEventListener('wheel', this.handleWheel);
  }
  handleWheel = (event, islandKey, tierKey, direction, move = false, relativeTarget = 0) => {
    event.preventDefault()
    this.changePopulationLevel(islandKey, tierKey, direction, move, relativeTarget)
  }

  needs = [
    {
      id: "Marketplace",
      tier: 1,
      requirement: 1,
      buildingName: "Martplatz",
      resourceName: "Markt",
      consumption: [ 1/1e10, 1/1e10, ],
      provides: [1e10,1e10, ],
      influx: [ 5, 5 ],
      happiness: 0,
      income: 0,
    },
    {
      id: "Fish",
      tier: 1,
      requirement: 50,
      buildingName: "Fischer",
      resourceName: "Fisch",
      consumption: [ 1/800, 1/800, ],
      provides: [800,800, ],
      influx: [ 3, 3 ],
      happiness: 0,
      income: [ 1, 2 ],
    },
    {
      id: "Schnapps",
      tier: 1,
      requirement: 100,
      buildingName: "Schnapsbrennerei",
      resourceName: "Schnaps",
      consumption: [ 1/600, 1/600, ],
      provides: [600,600, ],
      influx: 0,
      happiness: [ 8, 4 ],
      income: [ 3, 7 ],
      productionTime: 30,
      needs: [ "Potato" ],
    },
    {
      id: "Working_clothes",
      tier: 1,
      requirement: 150,
      buildingName: "Weberei",
      resourceName: "Arbeitskleidung",
      consumption: [ 1/650, 1/650, ],
      provides: [650,650, ],
      influx: [ 2, 2 ],
      happiness: 0,
      income: [ 3, 7 ],
      productionTime: 30,
      needs: [ "Wool" ],
    },
    {
      id: "Pub",
      tier: 1,
      requirement: 150,
      buildingName: "Wirtshaus",
      resourceName: "-_-",
      consumption: [ 1/1e10, 1/1e10, ],
      provides: [1e10,1e10, ],
      influx: 0,
      happiness: [ 12, 6 ],
      income: [ 1, 3 ],
    },
    {
      id: "Sausages",
      tier: 2,
      requirement: 1,
      buildingName: "Metzger",
      resourceName: "Wurst",
      consumption: [ 1/1000, 1/750, ],
      provides: [1000,750, ],
      influx: [ 3, 6 ],
      happiness: 0,
      income: [ 5, 15 ],
      productionTime: 30,
      needs: [ "Pigs" ],
    },
    {
      id: "Bread",
      tier: 2,
      requirement: 150,
      buildingName: "Bäckerei",
      resourceName: "Brot",
      consumption: [ 1/1100, 1/825, ],
      provides: [1100,825, ],
      influx: [ 3, 6 ],
      happiness: 0,
      income: [ 5, 15 ],
      productionTime: 30,
      needs: [ "Grain" ],
    },
    {
      id: "Church",
      tier: 2,
      requirement: 150,
      buildingName: "Kirche",
      resourceName: "-_- Glaube",
      consumption: [ 1/1e10, 1/1e10, ],
      provides: [1e10,1e10, ],
      influx: 0,
      happiness: [ 7, 7 ],
      income: 0,
    },
    {
      id: "Soap",
      tier: 2,
      requirement: 300,
      buildingName: "Seiferei",
      resourceName: "Seife",
      consumption: [ 1/4800, 1/3600, ],
      provides: [4800,3600, ],
      influx: [ 2, 4 ],
      happiness: 0,
      income: [ 5, 15 ],
      productionTime: 30,
      needs: [  ],
    },
    {
      id: "Beer",
      tier: 2,
      requirement: 500,
      buildingName: "Brauerei",
      resourceName: "Bier",
      consumption: [ 1/1300, 1/975, ],
      provides: [1300,975, ],
      influx: 0,
      happiness: [ 3, 3 ],
      income: [ 12, 37 ],
      productionTime: 30,
      needs: [ "Grain", "Hepf" ],
    },
    {
      id: "School",
      tier: 2,
      requirement: 750,
      buildingName: "Schule",
      resourceName: "-_- Bildung",
      consumption: [ 1/1e10, 1/1e10, ],
      provides: [Infinity, Infinity, ],
      influx: [ 2, 4 ],
      happiness: 0,
      income: 0,
    },
  ]

  constructor (props) {
    // localStorage.clear();
    super(props);

    let oldState = localStorage.getItem('state');
    this.state = oldState ? JSON.parse(oldState) : this.defaultState;
  }

  reset = () => {
    localStorage.clear();
    this.setState(this.defaultState);
  }
  exactNeed = (population, need) => {
    // alert(JSON.stringify(need))
    // return 1;
    return need.provides.reduce((prev, next, i) => prev + population[i + need.tier - 1] / next, 0);
    // return need.consumption.reduce((prev, next, i) => prev + next * population[i + need.tier - 1], 0);
  }
  exactConsumption = (buildings, ressource) => {
    let provider = this.ressources_farms.find((farm) => this.isProvidingRessource(farm, ressource))
    let consumers = ([...this.needs, ...this.ressources]).filter((farm) => this.isConsumingRessource(farm, ressource))
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
  setIslandName = (islandKey, name) => {
    let islands = this.state.islands
    islands[islandKey].name = name

    this.setState(prevState => ({
      ...prevState,
      islands: islands
    }), () => {
      localStorage.setItem('state', JSON.stringify(this.state));
    });
  }
  addIsland(worldKey) {
    let islands = this.state.islands
    islands.push(JSON.parse(JSON.stringify(this.emptyIsland[worldKey])))

    this.setState(prevState => ({
      ...prevState,
      islands: islands
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
          {this.state.islands.map((island, islandKey) => (
          <Card className={'mb-3 bg-dark'}>
            <CardHeader>
              <Input value={island.name} onChange={e => this.setIslandName(islandKey, e.target.value)} style={{maxWidth: 300}} className={'d-inline-block mr-3'} />
              <strong className={'d-inline-block mr-3'}>
                <img src={"./icons/population/Population.png"} alt="" className={" rounded"} style={{height: 40, width: 40}}/>
                { island.population.level.reduce((prev, next) => prev + next, 0) }
              </strong>
              <Button onClick={() => this.deleteIsland(islandKey)} size='sm'>löschen</Button>
            </CardHeader>
            {/*<Population levels={this.populationLevels} />*/}
              {/*<PopulationItem populationLevel={levels[i]} i={i} />*/}
            <CardHeader>
              <Row>
            {this.populationLevels.map((populationLevel, tierKey) => (
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
                      <img src={"./icons/population/Workforce" + (tierKey + 1) + ".png"} alt="" className="d-block mx-auto rounded" style={{height: 40, width: 40}}/>
                      {/*<Col xs={12} sm={10} md={6} lg={4} key={tierKey}>*/}
                      {/*<PopulationItem populationLevel={this.populationLevels[tierKey]} tierKey={tierKey} />*/}
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <Button onClick={() => this.changePopulationLevel(islandKey, tierKey, -1)} color='secondary'>-</Button>
                        </InputGroupAddon>
                        <Input placeholder={populationLevel} title={populationLevel}
                               value={island.population.level[tierKey]}
                               style={{height: 62}}
                               className={'text-center'}
                            // readOnly
                               onChange={e => this.setPopulationLevel(islandKey, tierKey, e.target.value)}
                               onWheel={e => this.handleWheel(e, islandKey, tierKey, -Math.sign(e.deltaY))}
                        />
                        <InputGroupAddon addonType="append">
                          <Button onClick={() => this.changePopulationLevel(islandKey, tierKey, +1)} color='secondary'>+</Button>
                        </InputGroupAddon>
                      </InputGroup>
                    </Col>
                    <Col className={'col-auto '+ ((tierKey === 4) ? ' bg-warning d-none': '')}
                         onWheel={e => this.handleWheel(e, islandKey, tierKey+(Math.sign(e.deltaY)>0 ? 1 : 0), -1, true, -Math.sign(e.deltaY))}
                    >
                      <ButtonGroup vertical size='sm'>
                        <Button onClick={() => this.changePopulationLevel(islandKey, tierKey+0, -1, true, +1)} color='primary'>&raquo;</Button>
                        <Button onClick={() => this.changePopulationLevel(islandKey, tierKey+1, -1, true, -1)} color='warning'>&lsaquo;</Button>
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
                  {this.ressources.filter((ressource) => this.isUnlocked(ressource, island, this)).map((ressource, ressourceKey) => (
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
                                 className={'mr-2 text-center px-1' + (island.buildings[ressource.id] <= 0  && !islandKey ? ' is-invalid' :'')}
                                 onChange={e => this.setBuildingCount(islandKey, ressource.id, e.target.value)}
                          />
                        </Media>
                      </Media>
                    </div>
                  ))}
                  <hr/>
                </Col>
                <Col sm={'auto'}>
                  {this.needs.filter((need) => this.isNeeded(need, island)).map((need, needKey) => (
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
                              onChange={e => this.setBuildingCount(islandKey, need.id, e.target.value)}
                            />
                          </Media>
                        </Media>
                      </div>
                  ))}
                </Col>
                <Col sm={'auto'}>
                    <hr/>
                  {this.ressources_farms.filter((ressource) => this.isUnlocked(ressource, island, this)).map((ressource, ressourceKey) => (
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
                              onChange={e => this.setBuildingCount(islandKey, ressource.id, e.target.value)}
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

          <Card className={'my-3 bg-dark'}>
            <CardHeader>
              <Button onClick={() => this.addIsland("oldWorld")} className={'mr-2'}>Neue Insel</Button>
              <Button onClick={() => this.addIsland("oldWorld")} className={'mr-2'}>Alte Welt</Button>
              <Button onClick={() => this.addIsland("newWorld")} className={'mr-2'}>Neue Welt</Button>
            {/*<Button onClick={() => this.addIsland("capTrelawny")}>Cap Trelawny</Button>*/}
            </CardHeader>
          </Card>

        </Container>
      </div>
    );
  }
}

export default App;
