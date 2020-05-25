import {createSlice} from '@reduxjs/toolkit'


import * as slice from "../functions/slice"
import * as obj from '../functions/obj'


const genBalance = (islandId, good, value = 0) => {
  return {
    islandId,
    good,
    value,
  }
}

const initialState = []

const balanceSlice = createSlice({
  name: 'balance',
  initialState,
  reducers: {
    upsert: (state, action) => {
      const {islandId, good, value} = action.payload

      const oldValue = state.find(x => x.islandId === islandId && x.good === good)
      if (oldValue) {
        return slice.setValue(state, x => x === oldValue, value)
      } else {
        return obj.push(state, genBalance(islandId, good, value))
      }
    },

    filterByIslandId: slice.filterByIslandId,
  }
})

export const {upsert, filterByIslandId} = balanceSlice.actions

export default balanceSlice
