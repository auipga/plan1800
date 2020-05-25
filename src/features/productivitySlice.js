import { createSlice } from '@reduxjs/toolkit'

import * as obj from '../functions/obj'
import * as slice from "../functions/slice";

const genObj = (islandId, GUID, number) => {
  return {
    islandId,
    GUID,
    number,
  }
}

const initialState = []

const productivitySlice = createSlice({
  name: 'productivity',
  initialState,
  reducers: {
    set: (state, action) => {
      const {islandId, GUID, number} = action.payload

      // update
      const X = state.find(a => a.islandId === islandId && a.GUID === GUID)
      if (X) {
        return state.map(x => {
          const isTarget = x === X;
          if (!isTarget) {
            return x
          }
          const delta = number - X.number
          if (delta === 0) {
            return x
          }

          action.asyncDispatch({type: 'producers/changeByProductivity', payload: {islandId, GUID, number: delta}})
          return obj.update(x, {number})
        })
      }

      // insert
      action.asyncDispatch({type: 'producers/changeByProductivity', payload: {islandId, GUID, number}})
      return obj.push(state, genObj(islandId, GUID, number))
    },
    reset: (state, action) => {
      const {islandId, GUID} = action.payload

      const X = state.find(a => a.islandId === islandId && a.GUID === GUID)
      if (!X) return /*state*/

      if (X.number !== 0) {
        action.asyncDispatch({type: 'producers/changeByProductivity', payload: {islandId, GUID, number: -X.number}})
      }

      return state.filter(a => a.islandId !== islandId || a.GUID !== GUID)
    },
    copyToProducer: (state, action) => {
      const {area, GUID} = action.payload

      const X = state.find(a => a.islandId === area.islandId && a.GUID === GUID)
      if (X && X.number !== 0) {
        action.asyncDispatch({type: 'producers/changeByProductivity', payload: {areaId: area.id, GUID, number: X.number}})
      }
    },
    filterByAreaId: slice.filterByAreaId,
    filterByIslandId: slice.filterByIslandId,
  }
})

export const { set, reset } = productivitySlice.actions

export default productivitySlice
