import {createSlice} from '@reduxjs/toolkit'

import * as obj from '../functions/obj'
import * as slice from "../functions/slice";

const genObj = (GUID, source, target) => {
  return {
    GUID,
    source,
    target,
  }
}

// const initialState = []
const find = (state, GUID, source, target) => state.find(x => x.GUID === GUID && x.source === source && x.target === target)

const sharingSlice = createSlice({
  name: 'sharings',
  initialState: [],
  reducers: {
    add: (state, action) => {
      const {GUID, source, target} = action.payload

      const X1 = find(state, GUID, source, target)
      const X2 = find(state, GUID, target, source)
      if (X1 || X2) return /*state*/

      const new1 = genObj(GUID, source, target)
      const new2 = genObj(GUID, target, source)

      let mn = []
      // state.filter(x => x.GUID === GUID && x.source === source).forEach(x => {
      //   mn = [...mn, genObj(GUID, target, x.target), genObj(GUID, x.target, target)]
      // })

      return obj.push(state, new1, new2, ...mn)
    },
    remove: (state, action) => {
      const {GUID, source, target} = action.payload

      const X1 = find(state, GUID, source, target)
      const X2 = find(state, GUID, target, source)
      if (!X1 && !X2) return /*state*/

      return state.filter(x => x !== X1 && x !== X2)
    },
    filterByIslandId: (state, action) => {
      const {islandId} = action.payload
      return state.filter(x => x.source !== islandId && x.target !== islandId)
    },
    update: slice.updateElementAction,
  }
})

export const {add, remove, filterByIslandId, update} = sharingSlice.actions

export default sharingSlice
