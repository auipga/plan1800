import { createSlice } from '@reduxjs/toolkit'
import * as obj from "../functions/obj";
import * as slice from "../functions/slice"
import track from "../functions/tracking";

const initialState = {
  nameOfPlayer: "Spieler ohne Name",
  nameOfMatch: "",
  module: 'start',
  worldId: 1,
  islandId: null,
  islandIds: {1:null, 2:null, 3:null, 4:null},
  collapsed: [],
  theme: 'theme-auto',

  onlineToken: "",
  onlineAutoConnect: false,
  onlineClientId: null,
  onlineAutoRejoin: false,
  onlineWsState: 0, // 1, 2, 3, 4, 5
}
/*
{type: 'personal/island', payload: {id: 3}}
*/
const personalSlice = createSlice({
  name: 'personal',
  initialState,
  reducers: {
    world: (state, action) => {
      const {id: worldId} = action.payload
/*
      // mutating:
      state.worldId = worldId
      state.islandId = state.islandIds[worldId]
*/

      track.navigation('World', worldId)

      return {
        ...state,
        worldId,
        islandId: state.islandIds[worldId]
      }
    },
    island: (state, action) => {
      const {id: islandId} = action.payload
/*
      // mutating:
      state.islandId = islandId
      state.islandIds[state.worldId] = islandId
*/

      track.navigation('Island', islandId)

      return {
        ...state,
        islandId,
        islandIds: {
          ...state.islandIds,
          [state.worldId]: islandId
        }
      }
    },

    update: slice.updateElementAction,
    upsert: (state, action) => {
      return obj.update(state, {...action.payload})
    },
  }
})

export const { world, island, update, upsert } = personalSlice.actions

export default personalSlice
