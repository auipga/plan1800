import React, {Component} from 'react';
import {Button, Card, CardBody, CardHeader, Container, Row, Col} from 'reactstrap';
import './App.scss'
import worlds from "./data/worlds";
import needs from "./data/needs";
import producers from "./data/producers";
import WorldExpBar from "./components/WorldExpBar";
import IslandBar from "./components/IslandBar";
import ExploreBar from "./components/ExploreBar";
import ExpeditionBar from "./components/ExpeditionBar";
import ExpeditionButton from "./components/ExpeditionButton";
import ExpeditionPreparationBar from "./components/ExpeditionPreparationBar";
import ExpeditionPreparation from "./components/ExpeditionPreparation";
import IslandPopulations from "./components/IslandPopulations";
import Fertilities from "./components/Fertilities";
import {trans} from "./functions/translation";
import * as game from "./functions/game";
import Producers from "./components/Producers";
import TieredMap from "./classes/TieredMap";
import GoodItem from "./components/GoodItem";
import tiers from "./data/tiers";
import Settings from "./components/Settings";
import Support from "./components/Support";
import {library} from '@fortawesome/fontawesome-svg-core'
import {fas} from '@fortawesome/free-solid-svg-icons'
import {fab} from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
library.add(fas, fab)

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
    useTabs: false,
    islands: [],
    unlockedWorlds: [1],
    activeSection: "worlds",
    activeWorld: 1,
    activeIslands: {},
    unlockedProducers: [],
    unlockedNonProducers: [],
    globalBuffs: {"expansion": 0},
    trades: [],
    tradeSyncs: [],//? geht auch ohne...
    expeditions: [],
    activeExpeditionPreparations: {},
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
    const theme = localStorage.getItem('theme')
    const darkMode = JSON.stringify((this.state.darkMode))
    this.setState(prevState => this.prepareStateString(jst(this.initialState)), () => {
      if (darkMode) {
        this.toggleDarkMode()
      }
      localStorage.setItem('theme', theme)
      if (debugEnabled) {
        this.addIsland(1)
      }
    })
  }
  prepareStateString(string) {
    let newState = JSON.parse(string)
    let tmp_alerts = []
    for (let island of newState.islands) {
      island.residences              = TieredMap.createFromJson(island.residences)
      island.populationPerResidence  = TieredMap.createFromJson(island.populationPerResidence)
      island.population              = TieredMap.createFromJson(island.population)
      island.prohibitedNeeds         = TieredMap.createFromJson(island.prohibitedNeeds)
      island.populationDifference    = TieredMap.createFromJson(island.populationDifference)

      // compatibility with productivityBoost
      if (!island.hasOwnProperty('productivityBoost')) {
        island.productivityBoost = {}
        if (!tmp_alerts.includes("productivityBoost")) {
          alert("English: Added productivityBoost\nDeutsch: Produktivitäts-Regler hinzugefügt.")
          tmp_alerts = [...tmp_alerts, "productivityBoost"]
        }
      }
      // compatibility with electricity
      if (!island.hasOwnProperty('buildingsWithElectricity')) {
        island.buildingsWithElectricity = {}
        if (!tmp_alerts.includes("electricity")) {
          alert("English: Added electricity\nDeutsch: Elektrizität hinzugefügt.")
          tmp_alerts = [...tmp_alerts, "electricity"]
        }
      }
    }

    // compatibility with tradeSyncs
    if (!newState.hasOwnProperty('tradeSyncs')) {
      newState.tradeSyncs = []
      if (newState.hasOwnProperty('trades') && Array.isArray(newState.trades) && newState.trades.length) {
        alert("English: Routes have been changed to work in a different way. Please add your routes again!\nDeutsch: Deine alten Routen wurden gelöscht. Bitte lege sie neu an.")
        // newState.trades = null
      }
    }

    // compatibility with expeditions
    if (!newState.hasOwnProperty('expeditions')) {
      newState.expeditions = []
    }
    if (!newState.hasOwnProperty('expedition_preparations')) {
      newState.expedition_preparations = []
    }
    if (!newState.hasOwnProperty('activeExpeditionPreparations')) {
      newState.activeExpeditionPreparations = {}
    }
    // newState.expeditions = KeyedMap.createFromJson(newState.expeditions)

    // compatibility with button/tab-toggle'
    if (!newState.hasOwnProperty('useTabs')) {
      newState.useTabs = false
    }
    // compatibility with pages'
    if (!newState.hasOwnProperty('activeSection')) {
      newState.activeSection = "worlds"
    }
    return newState
  }
  loadState(string) {
    localStorage.clear();
    this.setState(prevState => this.prepareStateString(string), this.persistState);
  }
  saveState(callback = null) {
    // it works but has a smell
    this.setState(prevState => prevState, typeof callback === "function" ? callback : this.persistState);
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

  switchSection = (section) => {
    this.setState({activeSection: section}, this.persistState)
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
    if (this.state.tradeSyncs.find(s => s.islandIDs.includes(islandId))) {
      alert("EN: remove active routes first!\nDE: Aktive Routen müssen gelöscht sein!")
      return;
    }
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
    const unlockedWorlds = this.state.unlockedWorlds
    unlockedWorlds.push(worldId)
    this.setState({unlockedWorlds: unlockedWorlds}, this.persistState)
  }
  lockWorld = (worldId) => {
    const unlockedWorlds = this.state.unlockedWorlds.filter(id => id !== worldId)
    this.setState({unlockedWorlds: unlockedWorlds}, this.persistState)
  }
  switchWorld = (worldId) => {
    this.setState({activeSection: "worlds", activeWorld: worldId}, this.persistState)
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
    //         allPopulation.plus(tierId, this.expansion_buffs[this.state.globalBuffs.expansion])
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
    /*todo fix: [0,0,0,1,0] downgrade [0,0,1,0,0] gelöschte wurst ect. kommt nicht beim ersten change, bei upgrade funktioniert's*/
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
    this.updateUnlockedEvents(island)

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

  // Expeditions
  addExpedition = (expType, skulls, moreData = {}, silentAdd = false) => {
    let expeditions = this.state.expeditions
    let increment = expeditions.reduce((prev, next, i) => Math.max(prev, next.id), 0) + 1
    let newExpeditions = {
      id: increment,
      type: expType,
      skulls: skulls,
      state: "expedition_preparable",
      // preparations: [],
      ...moreData
    }

    this.setState({expeditions: [...expeditions, newExpeditions]}, () => {
      this.addPreparation(increment)

      // if (silentAdd) {
      //   this.persistState()
      // } else {
      this.switchExpedition(increment)
      // }
    })
  }
  switchExpedition = (id) => {
    this.setState({activeExpedition: id}, this.persistState)
  }
  updateExpedition = (newData) => {
    const expeditions = this.state.expeditions
    let expedition = this.state.expeditions.find((i) => i.id === newData.id)
    expedition = {...expedition, ...newData}

    const newExps = [...expeditions.filter(p => p.id !== newData.id), expedition]

    this.setState({expeditions: newExps}, this.persistState)
  }
  deleteExpedition = (id) => {
    let expeditions = this.state.expeditions.filter((i) => i.id !== id)

    this.switchExpedition(null)
    this.setState({expeditions: expeditions})
  }
  addPreparation(expeditionId) {
    let preparations = this.state.expedition_preparations
    // let expedition = this.state.expeditions.find((i) => i.id !== expeditionId)
    // let preparations = expedition.preparations
    // preparations = preparations ? preparations : []
    let increment = preparations.reduce((prev, next, i) => Math.max(prev, next.id), 0) + 1
    let newPreparation = {
      id: increment,
      expId: expeditionId,
    }
    this.state.expedition_preparations.push(newPreparation)
    // this.state.expeditions[1] = {
    //   ...expedition,
    //   preparations: [...preparations, newPreparation],
    // }

    this.saveState(() => {this.switchExpeditionPreparation(expeditionId, increment)})
    // this.setState({expedition_preparations: [...preparations, newPreparation]}, () => {this.switchExpeditionPreparation(expeditionId, increment)})
  }
  updateExpeditionPreparation = (id, data) => {
    const preps = this.state.expedition_preparations
    let prep = preps.find((i) => i.id === id)
    prep = {...prep, ...data}

    const newPreps = [...preps.filter(p => p.id !== id), prep]

    this.setState({expedition_preparations: newPreps}, this.persistState)
  }
  switchExpeditionPreparation = (expeditionId, id) => {
    let preparations = this.state.activeExpeditionPreparations
    preparations[expeditionId] = id

    this.saveState()
  }

  // Buildings and Needs
  updateUnlockedEvents = (island) => {
    const lockedThings = {
      worlds: worlds.filter(w => !this.state.unlockedWorlds.includes(w.id) && this.state.expeditions.find(e => e.type === "expedition_exploration" && e.target === w.id) === undefined),
      // worlds2: worlds.filter(w => this.state.expeditions.getDefault("expedition_planable", []).find(e => (e.type === "expedition_exploration" && e.target === w.id)) === undefined),
      producers: producers.filter(p => !this.state.unlockedProducers.includes(p.key)),
      // nonProducers: nonproducers.filter(np => !this.state.unlockedNonProducers.includes(np.key)),
    }
    const actions = {
      worlds: (world) => {
        this.addExpedition("expedition_exploration", world.exploration.fixedSkulls, {
          fixedType: "expedition_exploration",
          target: world.id,
          ...world.exploration,
        }, true)
      },
      worlds2: (world) => {
        const old = this.state.expeditions.get("expedition_planable")
        this.state.expeditions.remove("expedition_planable", old)
        this.state.expeditions.add("expedition_preparable", {
          ...old,
          state: "expedition_preparable",
        })
      },
      producers: (producer) => {
        this.state.unlockedProducers.push(producer.key)
        island.buildings[producer.key] = 0
      },
      nonProducers: (nonProducer) => {
        this.state.unlockedProducers.push(nonProducer.key)
        island.buildings[nonProducer.key] = 0
      },
    }

    Object.keys(lockedThings).forEach(type => {
      return lockedThings[type].filter(thing => (
          // unlocked by higher tier present
          (thing.tierId < this.getAllPopulation().highestTier())
          // unlocked by requirement with highest tier
          || (thing.tierId === island.residences.highestTier() && island.population.highestTierValue() >= thing.requirement)
        )).forEach(thing => actions[type](thing))
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
  upsertSync = (good, havingId, islandIDs) => {
    let trades = this.state.tradeSyncs
    trades = trades.filter(t => t.good !== good || !t.islandIDs.includes(havingId))

    if (islandIDs.length >= 2) {
      const newTrade = {good: good, islandIDs: islandIDs}
      trades = [...trades, newTrade]
    }
    this.setState({tradeSyncs: trades}, this.persistState)
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
  calculateSynced = (good, island) => {
    const sync = this.state.tradeSyncs.find(t => t.good === good && t.islandIDs.includes(island.id))
    if (sync === undefined) {
      return 0
    }
    const otherIslandIDs = sync.islandIDs.filter(id => id !== island.id);
    return otherIslandIDs
    .reduce((sum, islandID) => sum + this.localBalance(good, this.state.islands.find(i => i.id === islandID)), 0)
  }
  localBalance = (resource, island) => {
    const hasElectricity = island.buildings["Electricity"] > 0

    return (
      + this.productionPerTick(resource, island, hasElectricity)
      - this.consumptionThroughBuildingsPerTick(resource, island, hasElectricity)
      - this.consumptionThroughPopulationPerTick(resource, island)
    )
  }
  calculateBalance = (resource, island) => {
    return (
      + this.localBalance(resource, island)
      + this.calculateSynced(resource, island)
      // + this.calculateTradeBalance(resource, island)
      // - this.calculateTradeGive(resource, island)
      // + this.calculateTradeGet(resource, island)
    )
  }

 setGamename = (name) => {
   this.state.gameName = name
   this.saveState()
 }
  render() {
    return (
      <div className="App">
        <Container fluid>
          <Card className={'my-3' + (this.state.darkMode ? ' bg-dark' : '')}>
            <CardHeader>
              <Row>
                {/*   Welt auswahl   */}
                <Col sm={'auto'}>
                  <WorldExpBar
                    // player={{roles: ["expedition_exploration"]}}
                    useTabs={this.state.useTabs}

                    unlockedWorlds={this.state.unlockedWorlds}

                    activeWorld={this.state.activeWorld}
                    fnSwitchWorld={this.switchWorld}

                    expeditions={this.state.expeditions}
                    expeditionsUnlocked={this.state.unlockedWorlds.length > 1}

                    activeSection={this.state.activeSection}
                    fnSwitchSection={this.switchSection}
                  />
                </Col>
                <Col className='text-center'>

                  <strong className={'d-inline-block mx-3'}>
                    <img src={"./icons/population/Population.png"} alt=""/>
                    {this.getAllPopulation().sum()}
                  </strong>
                  {/*<ExpeditionPreparationOldWithButtonAndModal*/}
                  {/*  unlockedProducers={this.state.unlockedProducers}*/}
                  {/*  worldId={this.state.activeWorld}*/}
                  {/*  allPopulation={this.getAllPopulation()}*/}
                  {/*/>*/}
                  {this.state.islands.length > 3 ?
                    <Button
                      onClick={() =>this.setState({globalBuffs: {expansion: Math.min(3,this.state.globalBuffs.expansion+1)}})}
                      // onClick={() => this.updateUnlockedEvents()}
                      onContextMenu={e => {e.preventDefault(); this.setState({globalBuffs: {expansion: Math.max(0, this.state.globalBuffs.expansion-1)}}) }}
                      className='mr-2 p-1'
                    >
                      <img src={'./icons/buffs/expansion_'+this.state.globalBuffs.expansion+'.png'} alt='' />
                      +{this.expansion_buffs[this.state.globalBuffs.expansion]}
                    </Button> : ''}
                </Col>
                <Col sm={'auto'} className='text-right'>
                  <Button onClick={() => game.exportToFile(this.state)} color={'secondary'} className='mr-2' title="Export">
                    <FontAwesomeIcon icon="download" />
                  </Button>
                  <Button onClick={() => game.loadFromFile((fileContent) => this.loadState(fileContent))} color={'secondary'} className='mr-2' title="Import">
                    <FontAwesomeIcon icon="upload" />
                  </Button>
                  <Button onClick={this.toggleDarkMode} color={'secondary'} className='mr-2'>
                    <FontAwesomeIcon icon="adjust" />
                  </Button>
                  <Button onClick={this.reset} color={'secondary'} className='mr-2' title="Reset">
                    <FontAwesomeIcon icon="trash" />
                  </Button>
                  <Support/>
                  <Settings>
                    <p>
                      <label htmlFor="settings_gamename">
                        Name of the game:
                        <input id='settings_gamename' onChange={e => this.setGamename(e.target.value)} value={this.state.gameName}/>
                      </label>
                    </p>
                    <p>
                      <input type='checkbox' id='tabButtons' checked={this.state.useTabs} onChange={() => this.setState({useTabs: this.state.useTabs !== true}, this.persistState)}/>
                      <label htmlFor="tabButtons">
                        use tabs
                      </label>
                    </p>
                  </Settings>
                </Col>
              </Row>
              {/*   Insel auswahl   */}
              <Row className='mt-2'>
                <Col>
                  {this.state.activeSection === "expeditions"
                    ? (<>
                      <Row>
                        <Col>
                          <ExpeditionBar
                            Tag={this.state.useTabs ? ExpeditionButton : ExpeditionButton}

                            allowAdd={this.state.unlockedWorlds.length > 1 || true}
                            fnAddExpedition={this.addExpedition}

                            expeditions={this.state.expeditions.sort((a, b) => a.id - b.id)}
                            activeExpedition={this.state.activeExpedition}
                            fnSwitchExp={this.switchExpedition}
                          />
                        </Col>
                        <Col sm={'auto'}>
                          {<ExpeditionPreparationBar
                            addPreparation={() => this.addPreparation(this.state.activeExpedition)}
                            preparations={this.state.expedition_preparations.filter(prep => prep.expId === this.state.activeExpedition).sort((a, b) => a.id - b.id)}
                            activePreparation={this.state.activeExpeditionPreparations[this.state.activeExpedition]}
                            onClick={this.switchExpeditionPreparation}
                          />}
                        </Col>
                      </Row>
                    </>) : (<>
                      {this.state.unlockedWorlds.includes(this.state.activeWorld)
                        ? (<>
                          <IslandBar
                            useTabs={this.state.useTabs}
                            worldId={this.state.activeWorld}
                            islands={this.state.islands.filter(island => island.worldId === this.state.activeWorld)}
                            activeIsland={this.state.activeIslands[this.state.activeWorld]}
                            onClick={this.switchIsland}
                            add={() => this.addIsland(this.state.activeWorld)}
                            fnSetIslandName={this.setIslandName}
                            fnLockWorld={() => this.lockWorld(this.state.activeWorld)}
                          />
                        </>) : (
                          <ExploreBar
                            worldId={this.state.activeWorld}
                            expedition={this.state.expeditions.find(exp => exp.target === this.state.activeWorld) }
                            expeditions={this.state.expeditions}
                            islands={this.state.islands.filter(island => island.worldId === this.state.activeWorld)}
                            fnUnlockWorld={() => this.unlockWorld(this.state.activeWorld)}
                            fnGoExpedition={(id) => {this.switchExpedition(id); this.switchSection("expeditions")}}
                          />
                        )}
                    </>)}
                </Col>
              </Row>
            </CardHeader>
          </Card>
          {this.state.activeSection === "worlds" && !this.state.unlockedWorlds.includes(this.state.activeWorld) && this.state.expeditions.find(e => (e.target === this.state.activeWorld)) && (
            <Card className={'my-3' + (this.state.darkMode ? ' bg-dark' : '')}>
              <ExpeditionPreparation
                updateExpedition={this.updateExpedition}

                expedition={this.state.expeditions.find(e => (e.target === this.state.activeWorld)) }
                unlockedProducers={this.state.unlockedProducers}
                unlockedWorlds={this.state.unlockedWorlds}
                allPopulation={this.getAllPopulation()}
                preparation={this.state.expedition_preparations.find(prep => prep.id === this.state.activeExpeditionPreparations[this.state.activeExpedition])}
                update={data => this.updateExpeditionPreparation(this.state.activeExpeditionPreparations[this.state.activeExpedition], data)}
                fnUpdate={this.updateExpedition}
                deleteExpedition={this.deleteExpedition}
              />
            </Card>
          )}
          {this.state.activeSection === "expeditions" && this.state.activeExpedition && (
            <Card className={'my-3' + (this.state.darkMode ? ' bg-dark' : '')}>
              <ExpeditionPreparation
                updateExpedition={this.updateExpedition}

                expedition={this.state.expeditions.find(e => (e.id === this.state.activeExpedition)) }
                unlockedProducers={this.state.unlockedProducers}
                unlockedWorlds={this.state.unlockedWorlds}
                allPopulation={this.getAllPopulation()}
                preparation={this.state.expedition_preparations.find(prep => prep.id === this.state.activeExpeditionPreparations[this.state.activeExpedition])}
                update={data => this.updateExpeditionPreparation(this.state.activeExpeditionPreparations[this.state.activeExpedition], data)}
                fnUpdate={this.updateExpedition}
                deleteExpedition={this.deleteExpedition}
              />
            </Card>
          )}
          {this.state.activeSection === "worlds" && this.state.islands.filter(island => island.id === this.state.activeIslands[this.state.activeWorld]).map((island, islandKey) => (<>
            <Card key={island.id} className={'my-3' + (this.state.darkMode ? ' bg-dark' : '')}>
              {/*   Inselname & Bevölkerung & Fruchtbarkeiten  */}
              <CardHeader>
                <Row>
                  <Col className='pr-0'>
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
                  </Col>
                  <Col className={'pl-0'} sm={'auto'}>
                <Button onClick={() => this.deleteIsland(island.id)} size='sm' className='float-right'><FontAwesomeIcon icon="trash" /></Button>
                  </Col>
                </Row>
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
                  islands={this.state.islands}
                  trades={this.state.trades}
                  fnTrade={this.upsertTrade}
                  tradeSyncs={this.state.tradeSyncs}
                  fnTradeSync={this.upsertSync}
                  fnBalance={(resource) => this.calculateBalance(resource, island)}
                  fnSetBuildingCount={this.setBuildingCount}
                  fnSetWithElectricity={this.setWithElectricity}
                  fnEnableDisabledBuilding={this.enableDisabledBuilding}
                  unlockedProducers={this.state.unlockedProducers}
                  fnSetProductivityBoost={this.setProductivityBoost}
                />
              </CardBody>
             </Card>
          </>))}
        </Container>
      </div>
    );
  }
}

export default App;
