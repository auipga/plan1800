import {createSlice} from '@reduxjs/toolkit'


const initialState = [
  'show_productivity_percent',
  'show_balance_chart',
  'show_highlights',
]

const debugSlice = createSlice({
  name: 'debug',
  initialState,
  reducers: {
    add: (state, action) => {
      return [...state, action.payload]
    },
    destroy: (state, action) => {
      return state.filter(x => x !== action.payload)
    },
    clean: (state, action) => {
      return initialState
    },
  }
})

export const {add, destroy, clean} = debugSlice.actions

export default debugSlice
