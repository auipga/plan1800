import { createSlice } from '@reduxjs/toolkit'
import * as obj from '../functions/obj'
import * as slice from "../functions/slice"
import * as producerSlice from "./producerSlice";
import {producers} from "../data/worldGeneration/buildings";

const genEffect = (targetGUID, location, attribute, value, source) => {
  return {
    targetGUID,
    attribute, // produktion, verbrauch, bedarf, unterhalt, happiness,...
    value,
    propaganga: location.propaganga || false,
    worldId:    location.worldId    || null,
    islandId:   location.islandId   || null,
    areaId:     location.areaId     || null,
    source,  // {type: 'item', GUID: 123},
  }
}
const initialState = []

const effectSlice = createSlice({
  name: 'effects',
  initialState,
  reducers: {
    // add/remove counts
    create: (state, action) => {
      const {targetGUID/*todo: mehrere gleichzeitig erhalten*/, location, attribute, value, source} = action.payload

      const existing = state.find(e => false)
      if (existing) {
        // TODO: delete oder update statt insert (wie bei itemCollectionSlice.setItem)
      }
      const p = producers.find(p => p.GUID === targetGUID)
      if (p)
      action.asyncDispatch(producerSlice.applyEffect({...location, GUID: p.GUID, attribute, value}))

      // insert
      return obj.pushWithUUID(state, genEffect(targetGUID, location, attribute, value, source))
    },
    destroy: (state, action) => {
      const {source, location} = action.payload

      const effects = state.filter(x =>
        x.source.type === source.type &&
        x.source.GUID === source.GUID &&
        x[Object.keys(location)[0]] === Object.values(location)[0]) // x.areaId === 42 oder x.islandId=1

      effects.forEach(x => {
        const p = producers.find(p => p.GUID === x.targetGUID)
        if (p)
          action.asyncDispatch(producerSlice.undoEffect({...location, GUID: p.GUID, attribute: x.attribute, value: x.value}))
      })

      return state.filter(x => !effects.includes(x))
      // return state.filter(x =>
      //   x.source.type !== source.type ||
      //   x.source.GUID !== source.GUID ||
      //   x[Object.keys(location)[0]] !== Object.values(location)[0])
    },
    copy: (state, action) => {
      const {area, producer} = action.payload

      const effects = state.filter(x =>
        (x.islandId === area.islandId ||
        x.worldId === area.worldId) &&
        x.targetGUID === producer.GUID
      )

      effects.forEach(x => {
          action.asyncDispatch(producerSlice.pasteEffect({GUID: producer.GUID, area, attribute: x.attribute, value: x.value}))
      })
    },

    filterByAreaId: slice.filterByAreaId,
    filterByIslandId: slice.filterByIslandId,

    update: slice.updateElementAction,
  }
})

export const { create, destroy, setNumber, change, move } = effectSlice.actions

export default effectSlice
