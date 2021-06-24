import {createSlice} from '@reduxjs/toolkit'

import {addID, timestamp/*todo: uncomment line 16*/} from "../functions/obj";
import {autoincrement} from "../functions/obj";

import * as obj from '../functions/obj'
import * as slice from "../functions/slice";


const genArea = (worldId, islandId, usage) => {
  return {
    worldId,
    islandId,
    usage, /* Handelskammer || Rathaus  || Hafenmeisterei || Quartier   */
           /* TradeUnion    || TownHall || HarbourMasters || ArticLodge */
    // z_created: timestamp()
  }
}

const initialState = []
const possibleUsages = ["TownHall", "TradeUnion", "HarbourMasters"]//, "ArticLodge"]

const areaSlice = createSlice({
  name: 'areas',
  initialState,
  reducers: {
    create: (state, action) => {
      const {worldId, islandId, usage, producerGUID, asDefault=false} = action.payload

      const area = addID(genArea(worldId, islandId, usage), autoincrement(state))
      if (area.usage === 'TownHall' || area.usage === 'ArticLodge') {
        action.asyncDispatch({type: "residences/create", payload: {area, copyExistingEffects: true}})
      }
      if (area.usage !== 'TownHall' && producerGUID !== undefined) {
        action.asyncDispatch({type: "producers/create", payload: {area, copyExistingEffects: true, GUID: producerGUID}})
        if (asDefault) {
          action.asyncDispatch({type: "producers/setDefault", payload: {islandId: area.islandId, GUID: producerGUID, areaId: area.id, pState: 'running'}})
        }
      }
      return obj.push(state, area)

      // return obj.pushWithUUID(state, genArea(world, island, usage))
      // return obj.pushWithID(state, genArea(worldId, islandId, usage))
    },
    createAll: (state, action) => {
      const {worldId, islandId} = action.payload

      let increment = autoincrement(state)
      const objs = possibleUsages.map((usage) => (
        addID(genArea(worldId, islandId, usage), increment++)
      ))
      action.asyncDispatch({ type: "residences/create", payload: {area: objs[0], copyExistingEffects: false} }) //TownHall
      // action.asyncDispatch({ type: "producers/createAll", payload: {area: objs[1], copyExistingEffects: false} }) //TradeUnion
      return [...state, ...objs]
    },
    destroy: (state, action) => {
      const {areaId, defaultAreaId} = action.payload
      const X = state.find(x => x.id === areaId)
      if (!X) return /*state*/

      if (X.usage === 'TownHall' || X.usage === 'ArticLodge') {
        action.asyncDispatch({ type: "residences/destroy", payload: {areaId, defaultAreaId} })
      }
      if (X.usage !== 'TownHall') {
        // action.asyncDispatch({ type: "producers/filterByAreaId", payload: {areaId} })
        action.asyncDispatch({ type: "producers/destroyByAreaId", payload: {areaId} })
      }
      action.asyncDispatch({ type: "itemCollection/filterByAreaId", payload: {areaId} })
      // action.asyncDispatch({ type:        "effects/filterByAreaId", payload: {areaId} })

      action.asyncDispatch({ type:    "throughput/destroyArea", payload: {areaId, islandId: X.islandId} })
      return state.filter(x => x !== X)
    },
    destroyByIslandId: (state, action) => { /*nur durch asyncDispatch islandSlice.destroy*/
      const {islandId} = action.payload

      state.filter(x => x.islandId === islandId).forEach(x => {
        action.asyncDispatch({ type: "itemCollection/filterByAreaId", payload: {areaId: x.id} })
        action.asyncDispatch({ type:        "effects/filterByAreaId", payload: {areaId: x.id} })
      })

      return state.filter(x => x.islandId !== islandId)
    },

    filterByIslandId: slice.filterByIslandId,
    update: slice.updateElementAction,
  }
})

export const { create, destroy, update } = areaSlice.actions

export default areaSlice
