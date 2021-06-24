import { createSlice } from '@reduxjs/toolkit'

import * as obj from '../functions/obj'
import * as slice from "../functions/slice";

const genObj = (islandId, areaId, slot, GUID) => {
  return {
    islandId, // nur für filterByIslandId
    areaId,
    slot,
    GUID,
  }
}

const initialState = []
// const possibleUsages = ["TownHall", "TradeUnion", "HarbourMasters", "ArticLodge"]

const itemCollectionSlice = createSlice({
  name: 'itemCollection',
  initialState,
  reducers: {
    setItem: (state, action) => {
      const {islandId, areaId, usageIn, slot, GUID} = action.payload

      // update
      const existing = state.find(a => a.areaId === areaId && a.slot === slot)
      if (existing) {
        return state.map(x => {
          const isTarget = x === existing;
          if (!isTarget) {
            return x
          }
          if (usageIn === 'ArticLodge' || usageIn === 'TownHall') {
            action.asyncDispatch({type: 'residences/changeByItem', payload: {areaId, GUID: existing.GUID, isRemoval: true}})
            action.asyncDispatch({type: 'residences/changeByItem', payload: {areaId, GUID}})
          }
          if (usageIn === 'ArticLodge' || usageIn === 'TradeUnion' || usageIn === 'HarbourMasters') {
            action.asyncDispatch({type: 'producers/changeByItem', payload: {areaId, GUID: existing.GUID, isRemoval: true}})
            action.asyncDispatch({type: 'producers/changeByItem', payload: {areaId, GUID}})
          }
          return obj.update(x, {GUID})
        })
      }

      // insert
      if (usageIn === 'ArticLodge' || usageIn === 'TownHall') {
        action.asyncDispatch({type: 'residences/changeByItem', payload: {areaId, GUID}})
      }
      if (usageIn === 'ArticLodge' || usageIn === 'TradeUnion' || usageIn === 'HarbourMasters') {
        action.asyncDispatch({type: 'producers/changeByItem', payload: {areaId, GUID}})
      }
      return obj.push(state, genObj(islandId, areaId, slot, GUID))
    },
    removeItem: (state, action) => {
      const {areaId, usageIn, slot} = action.payload

      const x = state.find(a => a.areaId === areaId && a.slot === slot)
      if (!x) {
        return /*state*/
      }

      if (usageIn === 'ArticLodge' || usageIn === 'TownHall') {
        action.asyncDispatch({type: 'residences/changeByItem', payload: {areaId, GUID: x.GUID, isRemoval: true}})
      }
      if (usageIn === 'ArticLodge' || usageIn === 'TradeUnion' || usageIn === 'HarbourMasters') {
        action.asyncDispatch({type: 'producers/changeByItem', payload: {areaId, GUID: x.GUID, isRemoval: true}})
      }

      return state.filter(a => a.areaId !== areaId || a.slot !== slot)
    },
    filterByAreaId: slice.filterByAreaId,
    filterByIslandId: slice.filterByIslandId,
  }
})

export const { setItem, removeItem } = itemCollectionSlice.actions

export default itemCollectionSlice
