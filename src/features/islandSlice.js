import { createSlice } from '@reduxjs/toolkit'
import {addID, autoincrement, timestamp} from "../functions/obj";
import * as obj from "../functions/obj";
import * as slice from "../functions/slice"
import {findMax, findMin} from "../functions/helpers";
import * as personalSlice from "./personalSlice";
import {text_plan_ucf} from "../data/translation/texts";
import track from "../functions/tracking";

const genIsland = (world, size = null, name = 'unnamed', influx = null) => {
  return {
    worldId: world.id,
    fertilities: [],
    resources: {},
    // size,
    // influx,
    name,
    // kontor, depot, Lagervolumen (für "Zeit bis leer/voll" Berechnung)
    z_created: timestamp()
  }
}

const initialState = []

/*
{type: 'islands/destroy', payload: {islandId: 1}}
*/
const islandSlice = createSlice({
  name: 'islands',
  initialState,
  reducers: {
    create: (state, action) => {
      const {world, size = 0, influx = null, name = null, id} = action.payload

      const x = addID(genIsland(world, size, name, influx), id || autoincrement(state))
      if (name === null) {
        x.name = `${text_plan_ucf('island')} ${x.id}`
      }
      // action.asyncDispatch({ type: "areas/create", payload: {worldId: world.id, islandId: x.id, usage: 'TownHall'} })
      action.asyncDispatch({ type: "areas/createAll", payload: {worldId: world.id, islandId: x.id} })
      // action.asyncDispatch({ type: "residences/create/from-island-create", payload: {x} })
      // const area = {id: null, islandId: x.id, worldId: world.id} // fake area null
      // action.asyncDispatch({ type: "residences/create", payload: {area} })
      if (!action.source) {
        action.asyncDispatch({type: "personal/island", payload: {id: x.id}})
        track.game('Island created', null)
      }
      return obj.push(state, x)
      // return Object.assign({}, state, x);
    },
    duplicate: (state, action) => {
      const {islandId} = action.payload

      const island = state.find(x => x.id === islandId) // only for reading the active worldId

      action.asyncDispatch({type: "islands/create", payload: {world: {id: island.worldId}}})
      action.asyncDispatch({type: "islands/create", payload: {world: {id: island.worldId}}})
    },
    destroy: (state, action) => {
      const {islandId} = action.payload

      if (!action.source) {
        // switch to next or previous island of this world
        const island = state.find(x => x.id === islandId) // only for reading the active worldId
        const relevantIslandIds = state.filter(x => x.worldId === island.worldId).map(x => x.id)

        // const nextId = relevantIslandIds.sort(sort).find(id => id > islandId)
        const nextId = findMin(relevantIslandIds.filter(id => id > islandId))
        if (nextId) {
          action.asyncDispatch(personalSlice.island({id: nextId}))/*TODO TODO TODO TODO TODO*/
          // action.asyncDispatch({ type: "personal/island", payload: {id: nextId} })
        } else {
          // const prevId = relevantIslandIds.sort(sortDown).find(id => id < islandId)
          const prevId = findMax(relevantIslandIds.filter(id => id < islandId))
          if (!nextId && prevId) {
            action.asyncDispatch(personalSlice.island({id: prevId}))
            // action.asyncDispatch({ type: "personal/island", payload: {id: prevId} })
          } else {
            action.asyncDispatch(personalSlice.island({id: null}))
            // action.asyncDispatch({ type: "personal/island", payload: {id: null} })
          }
        }
        track.game('Island destroyed', null)
      }

      // clean up
      action.asyncDispatch({ type:          "areas/destroyByIslandId", payload: {islandId} }) // inkl. itemCollection, effects
      action.asyncDispatch({ type:      "residences/filterByIslandId", payload: {islandId} })
      action.asyncDispatch({ type:       "producers/filterByIslandId", payload: {islandId} })
      action.asyncDispatch({ type:    "producerSums/filterByIslandId", payload: {islandId} })
      action.asyncDispatch({ type:    "productivity/filterByIslandId", payload: {islandId} })
      // action.asyncDispatch({ type:         "effects/filterByIslandId", payload: {islandId} }) // nur die von location-islandId
      action.asyncDispatch({ type:         "culture/filterByIslandId", payload: {islandId} })
      action.asyncDispatch({ type:        "sharings/filterByIslandId", payload: {islandId} })
      action.asyncDispatch({ type:          "routes/filterByIslandId", payload: {islandId} })
      // action.asyncDispatch({ type:      "throughput/filterByIslandId", payload: {islandId} })
      // action.asyncDispatch({ type:         "balance/filterByIslandId", payload: {islandId} })

      return state.filter(x => x.id !== islandId)
    },

    addFertility: (state, action) => {
      const {islandId, fertility} = action.payload

      const X = state.find(x => x.id === islandId && !x.fertilities?.includes(fertility))
      if (!X) return /*state*/

      track.game('Fertility added', null)

      return state.map(x => x === X ? obj.update(x, {fertilities: [...x.fertilities||[/*compat*/], fertility]}) : x)
    },
    removeFertility: (state, action) => {
      const {islandId, fertility} = action.payload

      const X = state.find(x => x.id === islandId && x.fertilities.includes(fertility))
      if (!X) return /*state*/

      track.game('Fertility removed', null)

      return state.map(x => x === X ? obj.update(x, {fertilities: x.fertilities.filter(f => f !== fertility)}) : x)
    },
    setResourceCount: (state, action) => {
      const {islandId, resource, number} = action.payload

      const X = state.find(x => x.id === islandId && (!x.resources?.hasOwnProperty(resource) || x.resources[resource] !== number))/*compat ?.hasOwnProperty*/
      if (!X) return /*state*/

      track.game('ResourceCount changed', null)

      return state.map(x => x === X ? obj.update(x, {resources: {...x.resources, [resource]: number}}) : x)
    },

    upsert: (state, action) => {/*check: unused?*/
      return obj.update(state, {...action.payload})
    },
    update: slice.updateElementAction,
  }
})

export const { create, destroy, duplicate, addFertility, removeFertility, setResourceCount, upsert, update } = islandSlice.actions

export default islandSlice
