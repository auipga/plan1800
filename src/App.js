import React, {Component} from 'react';
import {Button, ButtonGroup, Col, Container, Input, InputGroup, InputGroupAddon, Row} from 'reactstrap';
import Media from "reactstrap/es/Media";
// import Population from "./components/Population";
// import Productions from "./components/Productions";
// import PopulationItem from "./components/PopulationItem";

class App extends Component {
  populationLevels = [
    "Farmers",
    "Workers",
    "Artisans",
    "Engineers",
    "Investors",
  ];
  step = 50;
  precision = 2;
  defaultState = {
    population: {
      level_o: {
        0: 3000,
        1: 2000,
        2: 500
      },
      level: [
        0,
        0,
        0,
        0,
        0,
      ],
    },
  };
  componentDidMount() {
    // window.addEventListener('wheel', (e) => this.handleWheel(e), {passive: false});
    // document.addEventListener("mousewheel", this.handleWheel.bind(this), { passive: false });
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
    document.removeEventListener('wheel', this.handleWheel);
  }
  handleWheel = (event, i, direction, move = false, relativeTarget = 0) => {
    event.preventDefault()
    this.changePopulationLevel(i, direction, move, relativeTarget)
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
  changePopulationLevel_o = (i, number) => {
    this.setState(prevState => ({
      ...prevState,
        population: {
          ...prevState.population,
            level: {
              ...prevState.population.level,
              [i]: this.state.population.level[i] + number
            }
        }
    }));
  }
  changePopulationLevel = (i, direction, move = false, relativeTarget = 0) => {
    let number = direction * this.step
    let level = this.state.population.level;
    let NewValue = (isNaN(level[i]) ? 0 : level[i]) + number;
    let NewValueButMinimum0 = Math.max(NewValue, 0);
    level[i] = NewValueButMinimum0;

    // restore missing difference
    if (move === true) {
      let diff = NewValue - NewValueButMinimum0;
      NewValue = (isNaN(level[i+relativeTarget]) ? 0 : level[i+relativeTarget]) + diff - number;
      NewValueButMinimum0 = Math.max(NewValue, 0);
      level[i+relativeTarget] = NewValueButMinimum0;
    }

    this.setState(prevState => ({
      ...prevState,
        population: {
          ...prevState.population,
            level: level
        }
    }), () => {
      localStorage.setItem('state', JSON.stringify(this.state));
    });

  }
  setPopulationLevel_o = (i, number) => {
    this.setState(prevState => ({
      ...prevState,
        population: {
          ...prevState.population,
            level: {
              ...prevState.population.level,
              [i]: parseInt(number)
            }
        }
    }));
  }
  setPopulationLevel = (i, number) => {
    let level = this.state.population.level;
    level[i] = number ? parseInt(number) : 0

    this.setState(prevState => ({
      ...prevState,
        population: {
          ...prevState.population,
            level: level
        }
    }), () => {
      localStorage.setItem('state', JSON.stringify(this.state));
    });
  }

  render() {
    return (
      <div className="App">
        <Container fluid>
          <h2 className='mb-3'>Plan1800</h2>
          <h4>Population ({ this.state.population.level.reduce((prev, next) => prev + next, 0) }) <Button onClick={this.reset} size='sm'>Reset</Button></h4>
          <Row className='mb-5'>
            {/*<Population levels={this.populationLevels} />*/}
              {/*<PopulationItem populationLevel={levels[i]} i={i} />*/}
            {this.populationLevels.map((populationLevel, i) => (
                <Col key={i} className={"align-content-center" + ((this.state.population.level[i] > 0) ? ' bg-success': ' d-none-')}>
                  <Row className={'align-items-end'}>
                    {/*<Col className={'col-auto' + ((i === 0) ? ' bg-warning d-none': '')}>*/}
                    {/*  <ButtonGroup vertical size='sm'>*/}
                    {/*    <Button onClick={() => this.changePopulationLevel(i-1, -1) + this.changePopulationLevel(i, +1)} color='primary'>&raquo;</Button>*/}
                    {/*    <Button onClick={() => this.changePopulationLevel(i, -1) + this.changePopulationLevel(i-1, +1)} color='warning'>&lsaquo;</Button>*/}
                    {/*  </ButtonGroup>*/}
                    {/*</Col>*/}
                    <Col className=''>
                      <img src={"/icons/population/Workforce" + (i + 1) + ".png"} alt="" className="d-block mx-auto rounded" style={{height: 40, width: 40}}/>
                      {/*<Col xs={12} sm={10} md={6} lg={4} key={i}>*/}
                      {/*<PopulationItem populationLevel={this.populationLevels[i]} i={i} />*/}
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <Button onClick={() => this.changePopulationLevel(i, -1)} color='secondary'>-</Button>
                        </InputGroupAddon>
                        <Input placeholder={populationLevel} title={populationLevel}
                               value={this.state.population.level[i]}
                               style={{height: 62}}
                               className={'text-center'}
                            // readOnly
                               onChange={e => this.setPopulationLevel(i, e.target.value)}
                               onWheel={e => this.handleWheel(e, i, -Math.sign(e.deltaY))}
                        />
                        <InputGroupAddon addonType="append">
                          <Button onClick={() => this.changePopulationLevel(i, +1)} color='secondary'>+</Button>
                        </InputGroupAddon>
                      </InputGroup>
                    </Col>
                    <Col className={'col-auto '+ ((i === 4) ? ' bg-warning d-none': '')}
                         onWheel={e => this.handleWheel(e, i+(Math.sign(e.deltaY)>0 ? 1 : 0), -1, true, -Math.sign(e.deltaY))}
                    >
                      <ButtonGroup vertical size='sm'>
                        <Button onClick={() => this.changePopulationLevel(i+0, -1, true, +1)} color='primary'>&raquo;</Button>
                        <Button onClick={() => this.changePopulationLevel(i+1, -1, true, -1)} color='warning'>&lsaquo;</Button>
                      </ButtonGroup>
                    </Col>
                  </Row>
                </Col>
            ))}

            {/*<div className="w-100 m-3"></div>*/}
            <Col className="align-content-center d-none-">
              <img src={"/icons/population/Population.png"} alt="" className={"d-block mx-auto rounded"} style={{height: 40, width: 40}}/>
              <InputGroup>
                <Input value={'∑ ' + this.state.population.level.reduce((prev, next) => prev + next, 0)}
                       style={{height: 62}}
                       className={'text-center'}
                       readOnly
                />
              </InputGroup>
            </Col>
          </Row>

          <Row>
            <Col className='col-auto'>
              <h4>Needs</h4>
              <Row>
                <Col sm={12}>
                  {this.needs.filter(function (need) {
                    let firstTierRequireCount = this.state.population.level[need.tier-1];
                    /** auf dieser insel */
                    let oneAboveRequirementExists = 0 < this.state.population.level[need.tier];
                    /** @todo requirement auf DIESER insel, baumöglichkeit auf IRGENDEINER insel*/
                    let anyAboveRequirementExists = 0 < this.state.population.level.slice(need.tier).reduce((prev, next) => prev + next, 0);

                    return firstTierRequireCount >= need.requirement || oneAboveRequirementExists
                        || (firstTierRequireCount > 0                && anyAboveRequirementExists);
                  }, this).map((need, key) => (
                      <div key={key} className='my-3'>
                        <Media>
                          <Media left>
                            <Media object src={"/icons/goods/" + need.id + ".png"} alt={need.resourceName}
                                   middle style={{height: 30, width: 30}} className='mr-2'/>
                          </Media>
                          <Media body className='align-self-center'>
                            <Media heading className={'d-none'}>
                              {need.resourceName}
                            </Media>
                            Need: {Math.ceil(this.exactNeed(this.state.population.level, need))}
                            {' '}({this.exactNeed(this.state.population.level, need).toFixed(this.precision)})
                          </Media>
                        </Media>
                      </div>
                  ))}
                </Col>
              </Row>
            </Col>
            <Col className='col-auto'>
              <h4>Buildings</h4>
              {/*<Productions productions={this.state.buildings} />*/}
            </Col>
          </Row>

          <Row>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
