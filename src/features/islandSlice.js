import { createSlice } from '@reduxjs/toolkit'
import {addID, autoincrement, push, timestamp} from "../functions/obj";
import * as obj from "../functions/obj";
import * as slice from "../functions/slice"
import {findMax, findMin} from "../functions/helpers";
import * as personalSlice from "./personalSlice";
import {text_plan_ucf} from "../data/translation/texts";
import track from "../functions/tracking";
import palace from "../data/effects/palace";
import {asyncApplyCulture, asyncApplyCultureToProducers, asyncApplyCultureToResidences} from "./cultureSlice";

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

    buildPalace: (state, action) => {
      const {islandId, reverse=false} = action.payload

      const X = state.find(x => x.id === islandId && (x.isPalace || !reverse))
      if (!X) return /*state*/

      track.game('Palace ' + (reverse?'built':'destroyed'))

      if (reverse) {
        // alle policies deaktivieren // passiert auch beim deaktivieren der ministries, aber ich will die policies[] vorher löschen
        X.policies
          .forEach(GUID => action.asyncDispatch({type: "islands/activatePolicy", payload: {islandId, GUID, reverse: true}}))

        // alle ministries deaktivieren
        X.ministries
          .forEach(GUID => action.asyncDispatch({type: "islands/activateMinistry", payload: {islandId, GUID, palaceLevel: X.palaceLevel, reverse: true}}))

        return state.map(x => x === X ? obj.update(x, {isPalace: undefined, palaceLevel: undefined, ministries: undefined, policies: undefined}) : x)
      }
      else {
        // alle ministries aktivieren
        palace
          .forEach(GUID => action.asyncDispatch({type: "islands/activateMinistry", payload: {islandId, GUID: GUID.GUID}}))

        return state.map(x => x === X ? obj.update(x, {isPalace: true, palaceLevel: 0, ministries: [], policies: []}) : x)
      }

      // return state.map(x => x === X ? obj.update(x, {isPalace: !reverse, ministries: x.ministries??[], policies: x.policies??[]}) : x)
    },
    setPalaceLevel: (state, action) => {
      const {islandId, number} = action.payload

      const X = state.find(x => x.id === islandId && x.isPalace)
      if (!X) return /*state*/

      track.game('Palace level change')

      const oldLevel = X.palaceLevel
      const newLevel = number
      const deltaPalaceLevel = newLevel - oldLevel

      // alle inseln mit ministries anpassen
      state.filter(x => (x.isPalace || x.isMinistry) && X.ministries.length)
        .forEach(x => {
          x.ministries.forEach(GUID => {
            const ministry = palace.find(m => m.GUID === GUID)
            console.log(GUID, ministry._name)
            asyncApplyCulture(action, {islandId}, GUID, ministry, false, {deltaPalaceLevel})
          })
        })

      return state.map(x => x === X ? obj.update(x, {palaceLevel: newLevel}) : x)
    },
    buildLocalDepartment: (state, action) => {
      const {islandId, reverse=false} = action.payload

      const X = state.find(x => x.id === islandId && (x.isMinistry || !reverse))
      if (!X) return /*state*/

      track.game('Local Department ' + (reverse?'built':'destroyed'))

      if (reverse) {
        // alle policies deaktivieren // passiert auch beim deaktivieren der ministries, aber ich will die policies[] vorher löschen
        X.policies
          .forEach(GUID => action.asyncDispatch({type: "islands/activatePolicy", payload: {islandId, GUID, reverse: true}}))

        // alle ministries deaktivieren
        X.ministries
          .forEach(GUID => action.asyncDispatch({type: "islands/activateMinistry", payload: {islandId, GUID, reverse: true}}))

        return state.map(x => x === X ? obj.update(x, {isMinistry: undefined, ministries: undefined, policies: undefined}) : x)
      }

      return state.map(x => x === X ? obj.update(x, {isMinistry: true, ministries: [], policies: []}) : x)
    },
    activateMinistry: (state, action) => {
      const {islandId, GUID, palaceLevel, reverse=false} = action.payload

      const X = state.find(x => x.id === islandId && (x.isPalace || x.isMinistry || reverse))
      if (!X) return /*state*/


      const ministry = palace.find(m => m.GUID === GUID)
      let newMinistries = X.ministries??[]

      // remove?
      if (reverse /*&& newMinistries.includes(GUID)*/) { // wurde eventuell schon vorher gelöscht, daher nicht includes() prüfen
        // policies deaktivieren, die in diesem ministry sind (dürfte eigentlich immer nur eine einzige sein)
        (X.policies??[]).filter(pGUID => ministry.policies.find(p => p.GUID === pGUID))
          .forEach(GUID => action.asyncDispatch({type: "islands/activatePolicy", payload: {islandId, GUID, reverse: true}}))

        newMinistries = newMinistries.filter(m => m !== GUID)

        palaceLevel &&
        asyncApplyCulture(action, {islandId}, GUID, ministry, true, {deltaPalaceLevel: palaceLevel})
        asyncApplyCulture(action, {islandId}, GUID, ministry, true)
      }

      // add?
      else if (!reverse && !newMinistries.includes(GUID)) {
        if (X.isMinistry) {
          // dürfte eigentlich immer nur eine einzige sein
          newMinistries
            .forEach(GUID => action.asyncDispatch({type: "islands/activateMinistry", payload: {islandId, GUID, reverse: true}}))
        }

        newMinistries = push(newMinistries, GUID)

        asyncApplyCulture(action, {islandId}, GUID, ministry, false)
        palaceLevel &&
        asyncApplyCulture(action, {islandId}, GUID, ministry, false, {deltaPalaceLevel: palaceLevel})
      }

      else {
        return
      }

      return state.map(x => x === X ? obj.update(x, {ministries: newMinistries}) : x)
    },
    activateMinistry_as_object_with_enabled: (state, action) => {
      // const {islandId, GUID, reverse=false} = action.payload
      const {islandId, ministry, reverse=false} = action.payload

      const X = state.find(x => x.id === islandId && (x.isPalace || x.isMinistry))
      if (!X) return /*state*/

      const newMin = {GUID: ministry.GUID, enabled: !reverse}

      if (X.isMinistry) {
        // X.ministries.forEach(m => m.enabled = false)
        X.ministries = [newMin]
      } else {
        const existing = X.ministries.find(m => m.GUID === ministry.GUID)
        if (existing) {
          existing.enabled = !reverse
        } else {
          X.ministries = push(X.ministries, newMin)
        }
      }

      // todo: (un)apply effects

      // return state.map(x => x === X ? obj.update(x, {ministries: X.ministries}) : x)
    },
    activatePolicy: (state, action) => {
      const {islandId, GUID, reverse=false} = action.payload

      const X = state.find(x => x.id === islandId && (x.isPalace || x.isMinistry || reverse))
      if (!X) return /*state*/

      const ministry = palace.find(m => m.policies.find(p => p.GUID === GUID))
      const policy = ministry.policies.find(p => p.GUID === GUID)
      let newPolicies = X.policies??[]

      // remove?
      if (reverse /*&& newPolicies.includes(GUID)*/) { // wurde eventuell schon vorher gelöscht, daher nicht includes() prüfen
        newPolicies = newPolicies.filter(p => p !== GUID)

        asyncApplyCulture(action, {islandId}, GUID, policy, true)
      }

      // add?
      else if (!reverse && !newPolicies.includes(GUID)) {
        if (X.isMinistry) {
          // ministry aktivieren, aus der die neue policy kommt
          action.asyncDispatch({type: "islands/activateMinistry", payload: {islandId, GUID: ministry.GUID, reverse: false}})
        }

        // policies deaktivieren, die im selben ministry sind wie die neue policy (dürfte eigentlich immer nur eine einzige sein)
        newPolicies.filter(pGUID => ministry.policies.find(p => p.GUID === pGUID))
          .forEach(GUID => action.asyncDispatch({type: "islands/activatePolicy", payload: {islandId, GUID, reverse: true}}))

        newPolicies = push(newPolicies, GUID)

        asyncApplyCulture(action, {islandId}, GUID, policy, false)
      }

      else {
        return
      }

      return state.map(x => x === X ? obj.update(x, {policies: newPolicies}) : x)
    },
    activatePolicy_as_object_with_enabled: (state, action) => {
      const {islandId, ministry, policy, reverse=false} = action.payload

      const X = state.find(x => x.id === islandId && (x.isPalace || x.isMinistry))
      if (!X) return /*state*/

      const existing = X.policies?.find(p => p.GUID === policy.GUID)

      if (!existing) {
        X.policies = push(X.policies??[], {GUID: policy.GUID, enabled: !reverse})
      } else {
        existing.enabled = !reverse
      }

      // todo: (un)apply effects

      // return state.map(x => x === X ? obj.update(x, {policies}) : x)
    },
    copyToProducer_palace: (state, action) => {
      const {area, GUID:pGUID} = action.payload

      const palaceLevel = state.find(x => x.isPalace)?.palaceLevel

      const X = state.find(x => x.id === area.islandId);

      (X.ministries??[]).forEach(GUID => {
        const ministry = palace.find(m => m.GUID === GUID);
        asyncApplyCultureToProducers(action, {areaId: area.id, pGUID}, GUID, ministry);
        palaceLevel &&
        asyncApplyCultureToProducers(action, {areaId: area.id, pGUID}, GUID, ministry, false, {deltaPalaceLevel: palaceLevel});

        (X.policies??[]).filter(pGUID => ministry.policies.find(p => p.GUID === pGUID)).forEach(GUID => {
          const policy = ministry.policies.find(p => p.GUID === GUID)
          asyncApplyCultureToProducers(action, {areaId: area.id, pGUID}, GUID, policy);
        })
      })
    },
    copyToResidence_palace: (state, action) => {
      const {area} = action.payload
      const palaceLevel = state.find(x => x.isPalace).palaceLevel

      const X = state.find(a => a.id === area.islandId);

      (X.ministries??[]).forEach(GUID => {
        const ministry = palace.find(m => m.GUID === GUID);
        asyncApplyCultureToResidences(action, {areaId: area.id}, GUID, ministry);
        palaceLevel &&
        asyncApplyCultureToResidences(action, {areaId: area.id}, GUID, ministry, false, palaceLevel);

        (X.policies??[]).filter(pGUID => ministry.policies.find(p => p.GUID === pGUID)).forEach(GUID => {
          const policy = ministry.policies.find(p => p.GUID === GUID)
          asyncApplyCultureToResidences(action, {areaId: area.id}, GUID, policy);
        })
      })
    },
    upsert: (state, action) => {/*check: unused?*/
      return obj.update(state, {...action.payload})
    },
    update: slice.updateElementAction,
  }
})

export const { create, destroy, duplicate, addFertility, removeFertility, setResourceCount, upsert, update } = islandSlice.actions
export const { buildPalace, setPalaceLevel, buildLocalDepartment, activateMinistry, activatePolicy } = islandSlice.actions

export default islandSlice
