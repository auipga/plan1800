import {createSlice} from '@reduxjs/toolkit'
import * as slice from "../functions/slice"
import * as obj from "../functions/obj"

const genSum = (islandId, GUID) => {
  return {
    islandId,
    GUID,
    number: 0,
  }
}

const initialState = []

const producerSumSlice = createSlice({
  name: 'producerSums',
  initialState,
  reducers: {
    create: (state, action) => {
      const {islandId, GUID} = action.payload
      const X = state.find(x => x.islandId === islandId && x.GUID === GUID)
      if (X) return /*state*/ /*todo besser lösen, |: ausgeblendet, gebaut :| */
      return obj.push(state, genSum(islandId, GUID))
    },
    setNumber: (state, action) => {
      const {islandId, GUID, number} = action.payload

      const findTarget = x => x.islandId === islandId && x.GUID === GUID && x.number !== number

      return slice.setNumber(state, findTarget, number)
    },
    change: (state, action) => {
      const {islandId, GUID, delta} = action.payload

      if (delta === 0) return /*state*/

      const X = state.find(x => x.islandId === islandId && x.GUID === GUID)

      return state.map(x => x === X ? obj.update(x, {number: X.number + delta}) : x)
    },

    filterByIslandId: slice.filterByIslandId,
    update: slice.updateElementAction,
  }
})

export const {create, destroy, setNumber, move, update} = producerSumSlice.actions

export default producerSumSlice
