import {createSlice} from '@reduxjs/toolkit'
// import producers from "../data/producers_old";
import {producers} from "../data/worldGeneration/buildings";

import {findTargetLocationXor} from "../functions/slice";
import * as slice from "../functions/slice";
import * as obj from "../functions/obj";

import worldTypes from "../data/worldTypes";
import {ensureMinMax} from "../functions/helpers";
import boosts from "../data/effects/boosts";


const genIO = (good, Cycle) => ({good, Cycle})
const genProducerCount = (area, producer, pState, isDefault) => {
  const newObj = {
    number: 0,
    GUID: producer.GUID,
    d_name: producer.key || producer.Name,
    // effects: [], //{world/island/area-effect:}
    pState, // blueprints, built, running/non-paused, planned, wanted
    areaId: area.id,
    islandId: area.islandId, // für debugging oder so
    worldId: area.worldId,   // für debugging oder so
  }

  if (pState === 'running') {
    newObj.io = producer.InputProducts.reduce((io, InputProduct) => [...io, genIO(InputProduct, -1)], producer.OutputProduct ? [genIO(producer.OutputProduct, 1)] : [])
    // .filter(n => n.charCodeAt(0) < 91)
    newObj.CycleTime = producer.CycleTime
    newObj.Productivity = 100
  }
  return {...newObj, isDefault}
}
// eslint-disable-next-line no-unused-vars
function recalcTroughput(newX, action) {
  newX.io.forEach(io => {
    const throughput = newX.number * newX.Productivity / 100 * 60 / newX.CycleTime / io.Cycle
    action.asyncDispatch({type: "throughput/upsert", payload: {
        islandId: newX.islandId,
        areaId: newX.areaId,
        source: newX.GUID,
        type: 'producer',
        good: io.good,
        value: throughput
      }})
  })
}

const producerStates = ['running']


// const producerStates = ['blueprint', 'built', 'running', 'planned', 'wanted']
// const producerStates = {'-2': 'wanted', '-1': 'planned', 0: 'blueprint', 1: 'built', 2: 'running'}

const producerSlice = createSlice({
  name: 'producers',
  initialState: [],
  reducers: {
    create: (state, action) => {
      const {area, GUID, isDefault=false, copyExistingEffects} = action.payload

      // effects anwenden, die es vorher schon gab: insel-fest, Palast
      if (copyExistingEffects) {
      // Idee 1: böse kopieren:
      // // mögl. Fehlerquelle, multi player richtig doof
      // const areaIdToCopy = state.find(p => p.key === key && p.islandId === area.islandId).areaId
      // const objs = state.filter(p => p.areaId === areaIdToCopy && p.key === key).map(p => {
      //   const newX = JSON.parse(JSON.stringify(p))
      //   newX.number = 0
      //   newX.areaId = area.id
      //   newX.z_updated = undefined
      //   return newX
      // })
      // console.log(objs);
      //
      // return [...state, ...objs]

      // idee 2: finden und neu anwenden auf nur diese eine Area
      // const allPossibleTargetGUIDs = [
      //   GUID,
      //   ...targetPools.filter(tp => tp.TargetPool.find(TP => TP.GUID === GUID)).map(tp => tp.GUID)
      // ]
      // console.log(allPossibleTargetGUIDs);
      //
      // action.asyncDispatch({ type: "effects/copy", payload: {area, producer} })
        action.asyncDispatch({type: "productivity/copyToProducer", payload: {area, GUID}})
        action.asyncDispatch({type: "culture/copyToProducer", payload: {area, GUID}})
        action.asyncDispatch({type: "islands/copyToProducer_palace", payload: {area, GUID}})
      }
      const producer = producers.find(p => p.GUID === GUID)
      return [...state, ...producerStates.map(pState => genProducerCount(area, producer, pState, isDefault))]
    },
    createAll_: (state, action) => {
      const {area} = action.payload

      const worldType = worldTypes.find(wt => wt.worldIDs.includes(area.worldId))
      const producersOfWorld = producers.filter(p => p.worldTypeId === worldType.id)
      // action.asyncDispatch({ type: "producers/create", payload: {area, key: producer.key} }) //TownHall

      const objs = producersOfWorld.reduce((arr, producer) => {
        return [...arr, ...producerStates.map(pState => genProducerCount(area, producer, pState))]
      }, [])

      return [...state, ...objs]
    },
    destroy: (state, action) => {
      const {areaId, GUID} = action.payload
      return state.filter(x => x.areaId !== areaId || x.GUID !== GUID)
    },
    destroyByAreaId: (state, action) => {
      const {areaId} = action.payload

      const X = state.find(x => x.areaId === areaId)
      if (!X) return /*state*/

      if (X.isDefault) {
        const firstAreaId = state.find(x => x.islandId === X.islandId && x.GUID === X.GUID && x.pState === 'running').areaId
        action.asyncDispatch({type: "producers/setDefault", payload: {islandId: X.islandId, GUID: X.GUID, areaId: firstAreaId, pState: 'running'}})
      }

      if (X.number !== 0) {
        if (X.isDefault) {
          action.asyncDispatch({type: "producerSums/change", payload: {islandId: X.islandId, GUID: X.GUID, delta: -X.number}})
        } else {
          action.asyncDispatch({type: "producerSums/change", payload: {islandId: X.islandId, GUID: X.GUID, delta: -X.number}})
          const defaultAreaId = state.find(x => x.islandId === X.islandId && x.GUID === X.GUID && x.pState === 'running' && x.isDefault === true).areaId
          action.asyncDispatch({type: "producers/change", payload: {islandId: X.islandId, GUID: X.GUID, areaId: defaultAreaId, pState: 'running', delta: X.number}})
        }
      }

      return state.filter(x => x !== X)
    },

    setNumber: (state, action) => {
      const {areaId, GUID, pState, number} = action.payload
      const {islandId} = action.payload // nur für producerSums/change

      let findTarget
      if (areaId !== undefined) {
        findTarget = x => x.areaId   === areaId   && x.GUID === GUID && x.pState === pState
      } else {
        findTarget = x => x.islandId === islandId && x.GUID === GUID && x.pState === pState && x.isDefault === true
      }

      const X = state.find(findTarget)
      if (!X) return /*state*/

      const newState = slice.setNumber(state, x => x === X, number);

      action.asyncDispatch({type: "producerSums/change", payload: {islandId, GUID, delta: number - X.number}})

      // silo, tractor
      if (X.boosts !== undefined && X.boosts.length) {
        const provider = boosts.find(b => b.key === X.boosts[0])?.provider.find(pr => pr.worldId === X.worldId)
        if (provider?.GUID !== undefined) {
          if (provider.requirement === 'each') {
            action.asyncDispatch({type: 'producers/change', payload: {islandId: X.islandId, GUID: provider.GUID, pState: 'running', delta: number - X.number}})
          }
        }
      }

      // const newX = newState.find(findTarget)
      // recalcTroughput(newX, action)

      //weg? -> action.asyncDispatch({type: "throughput/updateProducer", payload: {islandId, X: JSON.parse(JSON.stringify(X))}})
      return newState
    },
    change: (state, action) => {
      const {islandId, areaId, GUID, pState, delta} = action.payload

      let findTarget
      if (areaId !== undefined) {
        findTarget = x => x.areaId   === areaId   && x.GUID === GUID && x.pState === pState
      } else {
        findTarget = x => x.islandId === islandId && x.GUID === GUID && x.pState === pState && x.isDefault === true
      }
      const X = state.find(findTarget)
      if (!X) return /*state*/

      const newNumber = ensureMinMax(X.number + delta, 0, 999)
      const newDelta = newNumber - X.number

      // silo, tractor
      if (X.boosts !== undefined && X.boosts.length) {
        const provider = boosts.find(b => b.key === X.boosts[0])?.provider.find(pr => pr.worldId === X.worldId)
        if (provider?.GUID !== undefined) {
          if (provider.requirement === 'each') {
            action.asyncDispatch({type: 'producers/change', payload: {islandId: X.islandId, /*areaId,*/GUID: provider.GUID, pState: 'running', delta: newDelta}})
          }
          // else if (provider.requirement === 'atLeastOne' && newDelta > 0) {
          //   // ensure at least 1: subtract 1, add 1
          //   action.asyncDispatch({type: 'producers/change', payload: {islandId: X.islandId, /*areaId,*/GUID: provider.GUID, pState: 'running', delta: -1}})
          //   action.asyncDispatch({type: 'producers/change', payload: {islandId: X.islandId, /*areaId,*/GUID: provider.GUID, pState: 'running', delta: 1}})
          // }
        }
      }

      if (!newDelta) {
        // action.asyncDispatch({type: "highlight/todo", payload: {X (ist nicht mehr da)}})
        return /*state*/
      }

      const newState = state.map(x => x === X ? obj.update(x, {number: newNumber}) : x);

      action.asyncDispatch({type: "producerSums/change", payload: {islandId, GUID, delta: newDelta}})

      // const newX = newState.find(findTarget)
      // recalcTroughput(newX, action)

      return newState
    },
    setDefault: (state, action) => {
      const {islandId, GUID, areaId} = action.payload

      const findOldDefault = x => x.islandId === islandId && x.GUID === GUID && x.pState === 'running' && x.isDefault === true
      const findNewDefault = x => x.islandId === islandId && x.GUID === GUID && x.pState === 'running' && x.areaId === areaId

      return state.map(x =>
        findOldDefault(x) ? obj.update(x, {isDefault: false}) :
          findNewDefault(x) ? obj.update(x, {isDefault: true}) :
            x
      )
    },

    move: (state, action) => {
      const {GUID, sourceAreaId, targetAreaId, amount} = action.payload

      const findSource = x => x.areaId === sourceAreaId && x.GUID === GUID
      const findTarget = x => x.areaId === targetAreaId && x.GUID === GUID

      return slice.move(state, findSource, findTarget, amount)
    },
    changeState: (state, action) => { // areaId, oldState, newState (blueprint / built / running)
      const p = action.payload

      const findSource = x => x.areaId === p.areaId && x.pState === p.oldState
      const findTarget = x => x.areaId === p.areaId && x.pState === p.newState

      return slice.move(state, findSource, findTarget, p.amount)
    },

    changeByItem: slice.changeByItem,
    changeByCulture: slice.changeByCulture,
    changeByProductivity: (state, action) => {
      const {GUID, number} = action.payload
      const {islandId, areaId} = action.payload // wahlweise

      const findTarget = x =>
        (islandId === undefined ^ x.islandId === islandId) &&
        (areaId === undefined ^ x.areaId === areaId) &&
        x.GUID === GUID

      const newState = state.map(x => findTarget(x) ? obj.update(x, {Productivity: x.Productivity + number}) : x)

      // const newXs = newState.filter(findTarget)
      // newXs.forEach(newX => {
      //   recalcTroughput(newX, action)
      // })

      return newState
    },
    toggleElectricity: (state, action) => {
      const {reason = 'area'} = action.payload
      const {islandId, areaId} = action.payload // wahlweise

      const findTarget = x =>
        (islandId === undefined ^ x.islandId === islandId) &&
        (areaId === undefined ^ x.areaId === areaId) &&
        true //(isRemoval ^ x.e.includes(''))

      const changeE = (x) => {
        let e = x.e || []
        const existing = e.find(ee => ee === reason) !== undefined
        const newX = {Productivity: x.Productivity + 100 * (existing?-1:1)}
        if (existing) {
          newX.e = e.filter(e => e !== reason)
        } else {
          newX.e = [...e, reason]
        }
        return newX
      }

      return state.map(x => findTarget(x) ? obj.update(x, changeE(x)) : x)
      //recalcTroughput(newX, action)
    },
    changeByBoost: slice.changeByBoost,
    toggleBoost: (state, action) => {
      // const {islandId, areaId} = action.payload // wahlweise
      // const {GUID, boostId} = action.payload
      const {areaId, GUID, boost} = action.payload
      const boostId = 'boost_by_'+boost

      // const findTarget = x =>
      //   (islandId === undefined ^ x.islandId === islandId) &&
      //   (areaId === undefined ^ x.areaId === areaId)
      const findTarget = x => x.areaId === areaId && x.GUID === GUID

      const X = state.find(findTarget)
      if (!X) return

      const applyBoost = (x) => {
        let active_boosts = x.boosts || []
        const existing = active_boosts.find(b => b === boost) !== undefined
        const newX = {boosts: x.boosts}

        if (existing) {
          newX.boosts = active_boosts.filter(e => e !== boost)
        } else {
          newX.boosts = [...active_boosts, boost]
        }

        // handle silo and tractor
        const provider = boosts.find(b => b.GUID === boostId)?.provider.find(pr => pr.worldId === x.worldId)
        // Silo/Traktorscheune bauen/abreißen
        if (provider?.GUID !== undefined) {
          if (provider.requirement === 'each') {
            action.asyncDispatch({type: 'producers/change', payload: {islandId: x.islandId, /*areaId,*/GUID: provider.GUID, pState: 'running', delta: (existing?-1:1) * x.number}})
          }
          // else if (provider.requirement === 'atLeastOne' && !existing) {
          //   // ensure at least 1: subtract 1, add 1
          //   action.asyncDispatch({type: 'producers/change', payload: {islandId: x.islandId, /*areaId,*/GUID: provider.GUID, pState: 'running', delta: -1}})
          //   action.asyncDispatch({type: 'producers/change', payload: {islandId: x.islandId, /*areaId,*/GUID: provider.GUID, pState: 'running', delta: 1}})
          // }
        }

        // apply boost
        action.asyncDispatch({type: 'producers/changeByBoost', payload: {areaId, boostId, isRemoval: existing}})

        return newX
      }

      return state.map(x => x === X  ? obj.update(x, applyBoost(x)) : x)
    },
    pasteProductivityToArea_: (state, action) => {
      const {GUID, area, number} = action.payload

      const findTarget = x => x.areaId === area.id && x.GUID === GUID

      return state.map(x => findTarget(x) ? obj.update(x, {Productivity: x.Productivity + number}) : x)
    },
    applyEffect: (state, action) => {
      const pl = action.payload // one location ID, GUID, target, attribute, [id, target !== propaganda]

      const findTarget = x => findTargetLocationXor(x, pl)

      const X = state.find(findTarget)
      if (!X) return

      const newState = state.map(x => findTarget(x) ? obj.update(x, {[pl.attribute]: x[pl.attribute] + pl.value}) : x);

      const newXs = newState.filter(findTarget)

      if (pl.attribute === 'Productivity') {
        newXs.forEach(newX => {
          // recalcTroughput(newX, action)
        })
      }

      // const effect = genEffect(pl.target, pl.attribute, pl.id)

      // return state.map(x => findTarget(x) ? obj.update(x, {effects: [...x.effects, effect]}) : x)
      return newState
    },
    pasteEffect: (state, action) => {
      const pl = action.payload // one location ID, GUID, target, attribute, [id, target !== propaganda]

      const findTarget = x => x.areaId === pl.area.id && x.GUID === pl.GUID && x.pState === 'running'

      return state.map(x => findTarget(x) ? obj.update(x, {[pl.attribute]: x[pl.attribute] + pl.value}) : x)
    },
    undoEffect: (state, action) => {
      const pl = action.payload // one location ID, GUID, attribute, value

      const findTarget = x => findTargetLocationXor(x, pl)

      const X = state.find(findTarget)
      if (!X) return

      const newState = state.map(x => findTarget(x) ? obj.update(x, {[pl.attribute]: x[pl.attribute] - pl.value}) : x);

      const newXs = newState.filter(findTarget)

      if (pl.attribute === 'Productivity') {
        newXs.forEach(newX => {
          // recalcTroughput(newX, action)
        })
      }

      return newState
    },

    filterByAreaId: slice.filterByAreaId,
    filterByIslandId: slice.filterByIslandId,
    update: slice.updateElementAction,
  }
})

export const {create, destroy, setNumber, move, changeState, toggleElectricity, toggleBoost, setDefault, change, update} = producerSlice.actions

export default producerSlice
