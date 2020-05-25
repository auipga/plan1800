import { createSlice } from '@reduxjs/toolkit'

import * as obj from '../functions/obj'
import * as slice from "../functions/slice";
import {all as allCulture} from "../data/effects/culture";

const genObj = (islandId, type, GUID) => {
  return {
    islandId,
    type,
    GUID,
  }
}

const initialState = []

function asyncApplyCulture(action, location, GUID, thing, isRemoval=false) {
  asyncApplyCultureToProducers(action, location, GUID, thing, isRemoval)
  asyncApplyCultureToResidences(action, location, GUID, thing, isRemoval)
  // asyncApplyCultureToIsland(action, location, GUID, thing, isRemoval)
}
function asyncApplyCultureToProducers(action, location, GUID, thing, isRemoval=false) {
  if (thing.hasOwnProperty('effectsToProducers') && thing.effectsToProducers.length)
    action.asyncDispatch({type: 'producers/changeByCulture', payload: {...location, GUID, effects: thing.effectsToProducers, isRemoval}})
}
function asyncApplyCultureToResidences(action, location, GUID, thing, isRemoval=false) {
  if (thing.hasOwnProperty('effectsToResidences') && thing.effectsToResidences.length)
    action.asyncDispatch({type: 'residences/changeByCulture', payload: {...location, GUID, effects: thing.effectsToResidences, isRemoval}})
}
// function asyncApplyCultureToIsland(action, location, GUID, thing, isRemoval=false) {
  // if (thing.hasOwnProperty('effectsToIsland') && thing.effectsToIsland.length)
  //   action.asyncDispatch({type: 'islands/changeByCulture', payload: {islandId, GUID, effects: thing.effectsToIsland}})
// }


const cultureSlice = createSlice({
  name: 'culture',
  initialState,
  reducers: {
    setSet: (state, action) => {
      const {islandId, type, GUID} = action.payload

      const newThing = allCulture.find(c => c.hasOwnProperty('GUID') && c.GUID === GUID)
      if (!newThing) return /*state*/

      // update
      if (type==='festivals') {
        const existing = state.find(a => a.islandId === islandId && a.type === type)
        if (existing) {
          const oldThing = allCulture.find(c => c.hasOwnProperty('GUID') && c.GUID === existing.GUID)
          return state.map(x => {
            const isTarget = x === existing;
            if (!isTarget) {
              return x
            }
            // remove old
            asyncApplyCulture(action, {islandId}, existing.GUID, oldThing, true)
            // insert new
            asyncApplyCulture(action, {islandId}, GUID, newThing, false)

            return obj.update(x, {GUID})
          })
        }
      }

      // insert
      asyncApplyCulture(action, {islandId}, GUID, newThing, false)

      return obj.push(state, genObj(islandId, type, GUID))
    },
    removeSet: (state, action) => {
      const {islandId, GUID} = action.payload

      const x = state.find(a => a.islandId === islandId && a.GUID === GUID)
      if (!x) return /*state*/

      const thing = allCulture.find(c => c.hasOwnProperty('GUID') && c.GUID === GUID)
      if (!thing) return /*state*/

      asyncApplyCulture(action, {islandId}, GUID, thing, true)

      return state.filter(a => a.islandId !== islandId || a.GUID !== GUID)
    },
    copyToProducer: (state, action) => {
      const {area, GUID:pGUID} = action.payload

      const Xs = state.filter(a => a.islandId === area.islandId)
      Xs.forEach(X => {
        const thing = allCulture.find(c => c.hasOwnProperty('GUID') && c.GUID === X.GUID)
        if (thing)
          asyncApplyCultureToProducers(action, {areaId: area.id, pGUID}, X.GUID, thing)
      })
    },
    filterByIslandId: slice.filterByIslandId,
    update: slice.updateElementAction,
  }
})

export const { setSet, removeSet, update } = cultureSlice.actions

export default cultureSlice
