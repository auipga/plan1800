import {createSlice} from '@reduxjs/toolkit'

import {sumBy} from "../functions/helpers";

import * as slice from "../functions/slice"
import * as obj from '../functions/obj'


const genThroughput = (islandId, areaId, good, type, source, value = 0) => ({
  source,  // {type: 'item', GUID: 123},
  good,
  value,
  islandId,
  areaId,
  type,
  // tierId,
})

const recalcBalance = (state, action, islandId, good) => {
  const balance = sumBy(state.filter(x => x.islandId === islandId && x.good === good), 'value')
  action.asyncDispatch({type: "balance/upsert", payload: {islandId, good, value: balance}})
}

const initialState = []

const throughputSlice = createSlice({
  name: 'throughput',
  initialState,
  reducers: {
/*
    updateProducer: (state, action) => {
      const {islandId, X: p} = action.payload // X = producerSlice-Element, islandId weil es nicht in X steht

      let newState = [...state]

      // produktions-ergebnisse neu berechnen:
      p.io.forEach(io => {
        const throughput = p.number * p.Productivity / 100 * 60 / p.productionTime / io.Cycle
        const oldValue = newState.find(x =>
          x.areaId === p.areaId &&
          x.source === p.key &&
          x.good === io.good) /!*GUID: source-key*!/
        if (oldValue) {
          newState = slice.setValue(newState, x => x === oldValue, throughput)
        } else {
          newState = obj.push(newState, genThroughput(islandId, p.areaId, io.good, 'producer', p.key, throughput))
        }


        // balance neu berechnen:
        const balance = sumBy(newState.filter(x => x.islandId === islandId && x.good === io.good), 'value')
        action.asyncDispatch({type: "balance/set", payload: {islandId, good: io.good, value: balance}})
      })

      return newState

      // // evtl bessere performance
      // const changes = []
      // p.io.forEach(io => {
      //   const throughput = 111
      //   // ...
      //   changes.push({source: p.key, good: io.good, throughput})
      // })
      // const sourcesToChange = changes.map(c => c.source)
      //
      // return state.map(x => {
      //   if (x.areaId === p.areaId && x.good === p.good && sourcesToChange.includes(x.source)) {
      //     const number = changes.find(c => c.source === x.source).throughput
      //     return obj.update(x, {number})
      //   }
      //   return x
      // })
    },
*/
    upsert: (state, action) => {
      const {islandId, areaId, source, type, good, value} = action.payload

      const oldValue = state.find(x =>
        x.areaId === areaId &&
        x.source === source &&
        x.good === good
      )

      let newState = null
      if (oldValue) {
        newState = slice.setValue(state, x => x === oldValue, value)
      } else {
        newState = obj.push(state, genThroughput(islandId, areaId, good, type, source, value))
      }

      recalcBalance(newState, action, islandId, good)

      return newState
    },
    destroyArea: (state, action) => {
      const {areaId, islandId} = action.payload

      const Xs = state.filter(x => x.areaId === areaId)

      const goodsToRecalculate = Array.from(new Set(Xs.map(good => good.good)))

      const newState = state.filter(x => x.areaId !== areaId)

      goodsToRecalculate.forEach(good => {
        recalcBalance(newState, action, islandId, good)
      })

      return newState
    },

    filterByAreaId: slice.filterByAreaId,
    filterByIslandId: slice.filterByIslandId,

    update: slice.updateElementAction,
  }
})

// export const { upsert } = throughputSlice.actions

export default throughputSlice
