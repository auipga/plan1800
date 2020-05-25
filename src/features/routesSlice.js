import { createSlice } from '@reduxjs/toolkit'

import * as obj from '../functions/obj'
import * as slice from "../functions/slice";

const genObj = (sourceIslandId, targetIslandId, GUID, number) => {
  return {
    sourceIslandId,
    targetIslandId,
    GUID,
    number,
  }
}

const initialState = []

const routesSlice = createSlice({
  name: 'routes',
  initialState,
  reducers: {
    upsert: (state, action) => {
      const {sourceIslandId, targetIslandId, GUID, number} = action.payload

      const X = state.find(x =>
        x.sourceIslandId === sourceIslandId &&
        x.targetIslandId === targetIslandId &&
        x.GUID === GUID
      )
      if (X) {
        if (number === null) {
          return state.filter(x => x !== X)
        }
        return state.map(x => x === X ? obj.update(x, {number}) : x)
      }

      if (number === null) return /*state*/

      return obj.push(state, genObj(sourceIslandId, targetIslandId, GUID, number))
    },
    filterByIslandId: (state, action) => {
      const {islandId} = action.payload
      return state.filter(x => x.sourceIslandId !== islandId && x.targetIslandId !== islandId)
    },
    update: slice.updateElementAction,
  }
})

export const { upsert, filterByIslandId, update } = routesSlice.actions

export default routesSlice
