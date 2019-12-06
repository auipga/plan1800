import React, {Component} from 'react';
import {Button, Card, CardBody, CardHeader, Container} from 'reactstrap';
import './App.scss'
import worlds from "./data/worlds";
import needs from "./data/needs";
import producers from "./data/producers";
import ResetButton from "./components/ResetButton";
import WorldSwitch from "./components/WorldSwitch";
import IslandButton from "./components/IslandButton";
import IslandPopulations from "./components/IslandPopulations";
import Fertilities from "./components/Fertilities";
import {trans} from "./functions/translation";
import * as game from "./functions/game";
import Producers from "./components/Producers";
import TieredMap from "./classes/TieredMap";
import GoodItem from "./components/GoodItem";
import tiers from "./data/tiers";

const debugEnabled = true
const jst = JSON.stringify
const jpa = JSON.parse
const jcl = foo => jpa(jst(foo)) // clone function
const cl = console.log
// eslint-disable-next-line
const d = debugEnabled ? cl : () => null
// eslint-disable-next-line
const dd = debugEnabled ? (...foo) => <div className='d-inline-block font-italic text-break'>{foo}</div> : () => null

class App extends Component {
  saveLogic = {
    waitMs: 500,
    timeout: null
  }
  initialState = {
    darkMode: false,
    islands: [],
    unlockedWorlds: debugEnabled ? [1, 2, 3] : [1],
    activeWorld: 1,
    activeIslands: {},
    unlockedProducers: [],
    unlockedNonProducers: [],
    globalBuffs: {"expansion": 0},
    trades: [],
  }
  expansion_buffs = [0,50,100,200]


  constructor(props) {
    // localStorage.clear();
    super(props);

    let oldState = localStorage.getItem('state');
    this.state = this.prepareStateString(oldState ? oldState : jst(this.initialState))

    if (debugEnabled && !this.state.islands.length) {
      setTimeout(() => this.addIsland(1), 1)
    }
    function handleHighlight(e) {
      let elem = document.querySelector('.hi-self')
      if (elem) {
        const clas = Array.from(elem.classList).find(c => c.startsWith('provides-'))
        if (clas) {
          GoodItem.highlight(producers.find(p => p.provides === clas.split('provides-')[1]), e.ctrlKey)
        }
      }
    }
    // initialise darkMode in index.html
    document.getElementsByTagName('body')[0].classList.toggle('bg-secondary', !!this.state.darkMode)

    document.addEventListener('keydown', handleHighlight)
    document.addEventListener('keyup',   handleHighlight)

    document.addEventListener('keydown', e => { this.setState({modifier: this.modifier(e)}) })
    document.addEventListener('keyup',   e => { this.setState({modifier: this.modifier(e)}) })
  }

  reset = () => {
    if (!debugEnabled && !window.confirm('Start from beginning?')) {
      return;
    }
    localStorage.clear();
    const darkMode = this.state.darkMode
    this.setState(prevState => jcl(this.initialState), () => {
      if (darkMode) {
        this.toggleDarkMode()
      }
      if (debugEnabled) {
        this.addIsland(1)
      }
    })
  }
  prepareStateString(string) {
    let newState = JSON.parse(string)
    for (let island of newState.islands) {
      island.residences              = TieredMap.createFromJson(island.residences)
      island.populationPerResidence  = TieredMap.createFromJson(island.populationPerResidence)
      island.population              = TieredMap.createFromJson(island.population)
      island.prohibitedNeeds         = TieredMap.createFromJson(island.prohibitedNeeds)
      island.populationDifference    = TieredMap.createFromJson(island.populationDifference)
    }
    return newState
  }
  loadState(string) {
    localStorage.clear();
    this.setState(prevState => this.prepareStateString(string), this.persistState);
  }
  saveState() {
    // it works but has a smell
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
  modifier = (event) => {
    let step = 1
    if (event.ctrlKey)  { step *= 5  }
    if (event.shiftKey) { step *= 10 }
    // if (event.altKey)   { step *= 5  }
    return step
  }

  // Islands and Worlds
  generateEmptyIsland = (worldId, newIslandId) => {
    const world = worlds.find(w => w.id === worldId)

    return {
      id: newIslandId,
      worldId: worldId,
      fertilities: debugEnabled ? world.fertilities : [],
      regionalResources: world.regionalResources.reduce((obj,res) => ({...obj, [res]:debugEnabled ? 5 : 0}), {}),
      name: `(${newIslandId}) ${trans(world)}`,
      residences: new TieredMap(world.socialClassIDs, 0),
      populationPerResidence: new TieredMap(world.socialClassIDs, 0),
      population: new TieredMap(world.socialClassIDs, 0),
      populationDifference: new TieredMap(world.socialClassIDs, 0),
      buildings: {},
      buildingsWithElectricity: {},
      productivityBoost: {},
      unlockedNeeds: [],
      prohibitedNeeds: new TieredMap(world.socialClassIDs, [])
    }
  }
  setIslandName = (id, name) => {
    let islands = this.state.islands
    islands.find((i) => i.id === id).name = name

    this.setState({islands: islands}, this.persistState);
  }
  addIsland(worldId) {
    let islands = this.state.islands
    let increment = islands.reduce((prev, next, i) => Math.max(prev, next.id), 0) + 1
    let newIsland = this.generateEmptyIsland(worldId, increment)

    this.setState({islands: [...islands, newIsland]}, () => {this.switchIsland(increment)})
  }
  switchIsland = (id) => {
    let activeIslands = this.state.activeIslands
    activeIslands[this.state.activeWorld] = id
    this.setState({activeIslands: activeIslands}, this.persistState)
  }
  deleteIsland = (islandId) => {
    if (!debugEnabled && !window.confirm('Insel "'+this.state.islands.find((i) => i.id === islandId).name+'" löschen?')) {
      return;
    }
    let islands = this.state.islands.filter((i) => i.id !== islandId)

    this.setState({islands: islands}, () => {
      this.persistState();
      const otherIslands = this.state.islands.filter(i => i.worldId === this.state.activeWorld);
      const otherIsland = otherIslands.find(i => i.id > islandId) || otherIslands.reverse().find(i => i.id < islandId)
      if (otherIsland) {
        this.switchIsland(otherIsland.id)
      }
      else if (debugEnabled) {
        this.addIsland(this.state.activeWorld)
      }
    })
  }
  unlockWorld = (worldId) => {
    this.state.unlockedWorlds.push(worldId)

    this.setState({unlockedWorlds: this.state.unlockedWorlds}, this.persistState)
  }
  switchWorld = (worldId) => {
    this.setState({activeWorld: worldId}, this.persistState)
    if (debugEnabled) {
      if (!this.state.islands.filter(i => i.worldId === worldId).length) {
        setTimeout(() => this.addIsland(worldId), 500)
      }
    }
  }
  getAllPopulation = (worldId = false) => {
    let allPopulation = new TieredMap(tiers.reduce((all, t) => [...all, t.id], []), 0)
    let islands = this.state.islands.filter(i => worldId === false || i.worldId === worldId)
    islands.forEach(island => {
      island.population.forEach((pop, tierId) => {
        allPopulation.add(tierId, pop)
      })
    })

    // only workforce, not population!!
    // if (this.state.globalBuffs.expansion > 0) {
    //   islands.forEach(island => {
    //     island.population.forEach((pop, tierId) => {
    //       // d("add", island.id, tierId, pop)
    //       if (allPopulation.present(tierId)) {
    //         allPopulation.add(tierId, this.expansion_buffs[this.state.globalBuffs.expansion])
    //       }
    //     })
    //   })
    // }

    return allPopulation
  }

  // Island settings
  setFertilities = (island, fertilities) => {
    island.fertilities = fertilities
    this.saveState()
  }
  changeResourceCount = (island, resource, addend) => {
    let resources = island.regionalResources
    resources[resource] = Math.max(0,(resources[resource] ? parseInt(resources[resource]) : 0) + addend)

    this.saveState()
  }
  setProhibitedNeeds = (island, tierId, needs) => {
    island.prohibitedNeeds.set(tierId, needs)

    this.updatePopulationPerResidence(island, tierId)
    this.recalculatePopulation(island, tierId)

    while (this.updateUnlockedNeeds(island)) {
      d("updateUnlockedNeeds", "tierId", tierId)
      this.updatePopulationPerResidence(island, tierId)
      this.recalculatePopulation(island, tierId)
    }

    this.saveState()
  }
  changeResidences = (event, island, tierId, direction, move = false) => {
    const step = this.modifier(event)

    if (move === true) {
      island.residences.move(tierId, direction + tierId, step)
      this.postChangeResidences(island, tierId+(direction>0?1:0))
      this.recalculatePopulation(island, tierId+(direction>0?0:-1))
    } else {
      island.residences.add(tierId, direction * step)
      this.postChangeResidences(island, tierId)
    }

    this.saveState()
  }
  setResidences = (island, tierId, number) => {
    island.residences.set(tierId, number ? parseInt(number) : 0)

    this.postChangeResidences(island, tierId)
    this.saveState()
  }
  changePopDiff = (event, island, tierId, direction) => {
    const step = this.modifier(event)

    island.populationDifference.add(tierId, direction * step, true)
    this.recalculatePopulation(island, tierId)

    this.saveState()
  }
  postChangeResidences = (island, tierId) => {
    const highestFrom0 = tierId > island.population.highestTier() // population not yet calculated / still 0
    const thisFrom0 = !island.population.present(tierId) // population not yet calculated / still 0
    const highestTo0 = tierId > island.residences.highestTier()   // residences already set to 0 in this action
    const handleLowerTiers = highestFrom0 || highestTo0
    const handleNoOtherTiers = tierId < island.residences.highestTier()

    if (handleNoOtherTiers) {
      this.recalculatePopulation(island, tierId)
      if (thisFrom0) {
        needs.filter(n => n.tierIDs.includes(tierId)).forEach(need => {
          this.enableDisabledBuilding(island, producers.find(p => p.key === need.key), -1)
        })
      }
      return
    }

    this.recalculatePopulation(island, tierId)

    while (this.updateUnlockedNeeds(island)) {
      d("updateUnlockedNeeds", "tierId", tierId)
      this.updatePopulationPerResidence(island, tierId)
      this.recalculatePopulation(island, tierId)
    }
    if (island.residences.has(tierId+1)) { // wenn ausgeblendet, reicht .present
      d("updatePopulationPerResidence", "+1",tierId+1)
      this.updatePopulationPerResidence(island, tierId+1)
    }
    while (handleLowerTiers && island.residences.has(--tierId)) {
      d("updatePopulationPerResidence", '--', tierId)
      this.updatePopulationPerResidence(island, tierId)
      this.recalculatePopulation(island, tierId)
      if (island.residences.present(tierId)) {
        break
      }
    }
    this.updateUnlockedProducers(island)

    this.saveState()
  }
  updatePopulationPerResidence(island, tierId) {
    const relevantNeeds = needs.filter(n =>
      island.unlockedNeeds.includes(n.key)                       // unlocked on this island
      && n.tierIDs.includes(tierId)                              // relevant for this tier
      && !island.prohibitedNeeds.ofTier(tierId).includes(n.key)  // not prohibited for this tier
    )
    island.populationPerResidence.set(tierId, 0)
    relevantNeeds.forEach(n => {
      // d('add', n.influx[n.tierIDs.indexOf(tierId)], 'for', tierId, n.key)
      island.populationPerResidence.add(tierId, n.influx[n.tierIDs.indexOf(tierId)])
    })
  }
  recalculatePopulation = (island, tierId) => {
    island.population.set(tierId, island.residences.ofTier(tierId) * island.populationPerResidence.ofTier(tierId))
    island.population.add(tierId, island.populationDifference.ofTier(tierId))
  }

  // Buildings and Needs
  updateUnlockedProducers = (island) => {
    const unlockedProducers = producers.filter(p =>
      // only this world
      island.population.has(p.tierId) && (
      // unlocked by higher tier present
      (p.tierId < island.residences.highestTier())
      // unlocked by requirement with highest tier
      || (p.tierId === island.residences.highestTier() && island.population.highestTierValue() >= p.requirement)
    ))

    unlockedProducers
      .filter(p => !this.state.unlockedProducers.includes(p.key))
      .forEach(producer => {
        this.state.unlockedProducers.push(producer.key)
        island.buildings[producer.key] = 0
      })
  }
  updateUnlockedNeeds = (island) => {
    const unlockedNeeds = needs.filter(n =>
      // only this world
      island.population.has(n.tierIDs[0]) && (
      // unlocked by higher tier present
      (n.tierIDs[0] < island.residences.highestTier())
      // unlocked by requirement with highest tier
      || (n.tierIDs[0] === island.residences.highestTier() && island.population.highestTierValue() >= n.requirement)
    ))

    unlockedNeeds.filter(n => n.tierIDs.filter(t => island.population.present(t)).length)
      .forEach(need => {
        this.enableDisabledBuilding(island, producers.find(p => p.provides === need.key && island.population.has(p.tierId)), 0)
      })

    const keys = unlockedNeeds.reduce((all, need) => [...all, need.key], [])
    const keysWithMarketplace = keys.length ? keys : ["Marketplace"]
    if (island.unlockedNeeds.length !== keysWithMarketplace.length) {
      island.unlockedNeeds = keysWithMarketplace
      return true
    }
    return false
  }
  setBuildingCount = (island, producer, number) => {
    let buildings = island.buildings;

    if (number===null) {
      // hide producer = unbuilt
      buildings[producer.key] = null
    } else {
      if (number > 0) {
        this.enableDisabledBuilding(island, producer, -1)
      }
      buildings[producer.key] = number ? Math.max(parseInt(number), 0) : 0
    }

    this.setState(prevState => prevState, this.persistState);
  }
  enableDisabledBuilding = (island, producer, recursive = 0) => {
    if (!producer) {
      return
    }
    if (recursive !== 0) {
      producers.filter(p => producer.needs.includes(p.provides) && island.population.has(p.tierId)).forEach(p => {
        this.enableDisabledBuilding(island, p, --recursive)
        if (document.querySelector('.hi-self')) {
          setTimeout(() => GoodItem.highlight(producer), 1)
        }
      })
    }

    if ([undefined, null].includes(island.buildings[producer.key])) {
      this.setBuildingCount(island, producer, 0)
    }
  }

  // Productivity, Electricity
  setProductivityBoost = (island, producer, value) => {
    island.productivityBoost[producer.key] = value
    this.saveState()
  }
  setWithElectricity = (island, producer, number) => {
    let elec = island.buildingsWithElectricity;

    if ([null, "all"].includes(number)) {
      elec[producer.key] = number
    } else {
      elec[producer.key] = number ? Math.max(parseInt(number), 0) : 0
    }

    this.setState(prevState => prevState, this.persistState);
  }

  // Trading
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

  // Resource Balance
  producersReducer = (sum, p, island, hasElectricity) => {
    const productivityBoost = isNaN(parseInt(island.productivityBoost[p.key])) ? 0 : island.productivityBoost[p.key];
    const buildingCount = island.buildings[p.key]
    let withElec = island.buildingsWithElectricity[p.key]
    if (withElec === undefined || !hasElectricity) {
      withElec = 0
    }

    const electricityBoost = 100
    let productivity
    if (p.needs.includes("Electricity")) {
      productivity = 100 + productivityBoost + electricityBoost;
      if (withElec === "all") {
        return sum + buildingCount * (60 / p.productionTime) * (productivity/100)
      }
      return sum + withElec * (60 / p.productionTime) * (productivity/100)
    } else {
      let partialElectricityBoost = 0
      if (withElec === "all") {
        partialElectricityBoost = electricityBoost
      } else if (buildingCount>0) {
        partialElectricityBoost = electricityBoost * withElec / buildingCount;
      }
      productivity = 100 + productivityBoost + partialElectricityBoost;
    }
    return sum + buildingCount * (60 / p.productionTime) * (productivity/100)
  }
  productionPerTick = (resource, island, hasElectricity) => {
    return producers
      .filter(p => island.buildings[p.key] !== undefined) // omit buildings not (yet) built
      .filter(p => p.provides === resource)        // only providers of that resource
      .reduce((sum, p) => this.producersReducer(sum, p, island, hasElectricity), 0)
  }
  consumptionThroughBuildingsPerTick = (resource, island, hasElectricity) => {
    return producers
      .filter(p => island.buildings[p.key] !== undefined) // noch nie gebaut
      .filter(p => p.needs.includes(resource)) // isConsumingResource
      .reduce((sum, p) => this.producersReducer(sum, p, island, hasElectricity), 0)
  }
  consumptionThroughPopulationPerTick = (resource, island) => {
    let need = needs.find(n => n.key === resource && island.population.has(n.tierIDs[0]))
    if (!need) {
      return 0
    }

    const isUnlocked = island.unlockedNeeds.includes(need.key);
    return need.tierIDs
      .filter(id =>
        isUnlocked
        // && island.population.present(id)
        && !island.prohibitedNeeds.ofTier(id).includes(resource)
      )
      .reduce((prev, next, i) => prev + island.population.ofTier(next) * need.consumption[i], 0)
  }
  calculateTradeBalance = (good, island) => {
    const trades = this.state.trades.filter(t => t.good === good);
    const loading  = trades.filter(t => t.from === island.id && t.to   !== null).reduce((sum, that) => sum + that.amount, 0);
    const dropping = trades.filter(t => t.to   === island.id && t.from !== null).reduce((sum, that) => sum + that.amount, 0);
    return dropping - loading
  }
  calculateBalance = (resource, island) => {
    const hasElectricity = island.buildings["Electricity"] > 0

    return (
      + this.productionPerTick(resource, island, hasElectricity)
      - this.consumptionThroughBuildingsPerTick(resource, island, hasElectricity)
      - this.consumptionThroughPopulationPerTick(resource, island)
      + this.calculateTradeBalance(resource, island)
    )
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
                    unlocked={this.state.unlockedWorlds.includes(world.id)}
                    islands={this.state.islands}
                    allPopulation={this.getAllPopulation()}
                    fnSwitchWorld={this.switchWorld}
                    fnUnlockWorld={this.unlockWorld}
                  />
                ))}
              <strong className={'d-inline-block mr-3'}>
                <img src={"./icons/population/Population.png"} alt="" />
                { this.getAllPopulation().sum() }
              </strong>
              <ResetButton resetFunction={this.reset}/>
              {this.state.islands.length > 3 ?
              <div className="btn-group">
                <Button
                onClick={() =>this.setState({globalBuffs: {expansion: Math.min(3,this.state.globalBuffs.expansion+1)}})}
                onContextMenu={e => {e.preventDefault(); this.setState({globalBuffs: {expansion: Math.max(0, this.state.globalBuffs.expansion-1)}}) }}
                >
                  <img src={'./icons/buffs/expansion_'+this.state.globalBuffs.expansion+'.png'} alt='' />
                  +{this.expansion_buffs[this.state.globalBuffs.expansion]}
                </Button>
              </div> : ''}
              {/*eslint-disable-next-line*/}
              <Button onClick={this.toggleDarkMode} color={'primary'} className='float-right mr-3'>&#128161;{/*icon-lamp*/}</Button>
              {/*eslint-disable-next-line*/}
              <Button onClick={() => game.loadFromFile((fileContent) => this.loadState(fileContent))} color={'secondary'} className='float-right mr-3'>&#128194;{/*icon-load*/}</Button>
              {/*eslint-disable-next-line*/}
              <Button onClick={() => game.exportToFile(this.state)} color={'secondary'} className='float-right mr-3'>&#128190;{/*icon-save*/}</Button>
            </CardHeader>
            {/*   Insel auswahl   */}
            <CardBody className={'overflow-auto text-nowrap'}>
              <Button onClick={() => this.addIsland(this.state.activeWorld)} className={'px-1 py-0 mr-2'}>
                <img src={'./icons/Icon_plus.png'} alt='Hinzufügen' style={{maxWidth: 36, maxHeight: 36}}/>
              </Button>
              {this.state.islands.filter(island => island.worldId === this.state.activeWorld).map((island, islandKey) => (
                <IslandButton
                  key={island.id}
                  island={island}
                  activeIsland={this.state.activeIslands[this.state.activeWorld]}
                  onClick={this.switchIsland}
                  fnSetIslandName={this.setIslandName}
                />
              ))}
              <div className='float-right ml-3' style={{lineHeight: 1.2}}>
                <li><a href='https://t.me/plan1800'>Telegram Support-Gruppe</a></li>
                <li><a href='https://forums-de.ubisoft.com/showthread.php/218755-Plan1800-noch-so-ein-Calculator'>ubisoft Forum</a></li>
              </div>
              <div className='float-right mx-3' style={{lineHeight: 1.2}}>
                <li><a href='https://youtu.be/ntDAreoiJA0'>YouTube Anleitung</a></li>
              </div>
            </CardBody>
          </Card>
          {this.state.islands.filter(island => island.id === this.state.activeIslands[this.state.activeWorld]).map((island, islandKey) => (
            <Card key={island.id} className={'my-3' + (this.state.darkMode ? ' bg-dark' : '')}>
              {/*   Inselname & Bevölkerung & Fruchtbarkeiten  */}
              <CardHeader>
                <strong className={'d-inline-block mr-3'}>
                  <img src={"./icons/population/Population.png"} alt="" />
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
                  allPopulation={this.getAllPopulation()}
                  buff={this.expansion_buffs[this.state.globalBuffs.expansion]}
                  fnChangePopDiff={this.changePopDiff}
                  fnChangeResidences={this.changeResidences}
                  fnSetResidences={this.setResidences}
                  fnSetProhibitedNeeds={this.setProhibitedNeeds}
                />
              </CardHeader>

              {/*   Zeug auf der Insel   */}
              <CardBody>
                {/*   Producers   */}
                <Producers
                  island={island}
                  trades={this.state.trades}
                  fnTrade={this.upsertTrade}
                  fnBalance={(resource) => this.calculateBalance(resource, island)}
                  fnSetBuildingCount={this.setBuildingCount}
                  fnSetWithElectricity={this.setWithElectricity}
                  fnEnableDisabledBuilding={this.enableDisabledBuilding}
                  unlockedProducers={this.state.unlockedProducers}
                  fnSetProductivityBoost={this.setProductivityBoost}
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
