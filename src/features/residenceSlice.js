import { createSlice } from '@reduxjs/toolkit'

import worldTypes from "../data/worldTypes";
import needs from "../data/needsOfProducts";
import * as obj from '../functions/obj'
import * as slice from "../functions/slice"
import tiers from "../data/tiers";
import {ensureMinMax} from "../functions/helpers";


const genNeed = (good, factor, amount) => ({good, factor, amount})
const genResidenceCount = (area, tier) => {
  const newObj = {
    areaId: area.id,
    worldId: area.worldId,   // for debugging oder so
    islandId: area.islandId, // for debugging oder so
    tierId: tier.id,
    number: 0,
    GUID: tier.residenceGUID,
  }
  newObj.needs = (needs.find(n=>n.tierId === tier.id).Inputs || []).map(i => genNeed(i.GUID, 1, i.Amount))

  return newObj
}

const residenceSlice = createSlice({
  name: 'residences',
  reducers: {
    // add/remove counts
    create: (state, action) => {
      const {area} = action.payload

      const worldType = worldTypes.find(wt => wt.worldIDs.includes(area.worldId))
      const objs = tiers.filter(t => t.worldTypeId === worldType.id).map(tier => genResidenceCount(area, tier))

      return [...state, ...objs]
    },
    destroy: (state, action) => {
      const {areaId, defaultAreaId} = action.payload

      if (defaultAreaId !== undefined) {
        // move residences to default area when deleting
        state.filter(x => x.areaId === areaId && x.number > 0).forEach((x) => {
          const X = state.find(xx => xx.areaId === defaultAreaId && x.tierId === xx.tierId)
          action.asyncDispatch({type: "residences/setNumber", payload: {areaId: defaultAreaId, tierId: x.tierId, number: X.number + x.number}})
        })
      }

      return state.filter(x => x.areaId !== areaId)
    },

    // change number of residences within existing area
    setNumber: (state, action) => {
      const p = action.payload
      const findTarget = x => x.areaId === p.areaId && x.tierId === p.tierId

      // return slice.updateElementAction(state, {where: findTarget, set: {number: p.number}})
      return slice.setNumber(state, findTarget, p.number)
    },
    /** @deprecated */
    set_: (state, action) => {
      const {areaId, tierId, number} = action.payload
      // const {uuid, number} = action.payload

      const newValue = ensureMinMax(number, 0, number)

      return state.map(x => {
        const isTarget = x.areaId === areaId && x.tierId === tierId
        if (isTarget && x.number !== newValue) {
          return obj.update(x, {number: newValue})
        }
        return x
      })
    },
    /** @deprecated nur set nutzen und selbst addieren*/
    change: (state, action) => {
      alert('@deprecated: nur set nutzen und selbst addieren')
      const {areaId, tierId, number} = action.payload

      // no change
      if (number === 0) {
        return /*state*/
      }

      // get old value
      const X = state.find(x => x.areaId === areaId && x.tierId === tierId)
      const newValue = ensureMinMax(X.number + number, 0)

      /* funktioniert nicht, sollte inject ablösen
            // set() new value
            let newAction = Object.assign({}, action)
            newAction.payload.number = newValue
            return residenceSlice.actions.set(state, newAction)
      */

      // inject new values to new state object
      return state.map(x => {
        const isTarget = x === X;
        if (isTarget) {
          return obj.update(x, {number: newValue})
        }
        return x
      })
    },
    move: (state, action) => {
      const p = action.payload

      const findSource = x => x.areaId === p.source.areaId && x.tierId === p.source.tierId
      const findTarget = x => x.areaId === p.target.areaId && x.tierId === p.target.tierId

      return slice.move(state, findSource, findTarget, p.number)
    },
    /** @deprecated */
    move_: (state, action) => {
      const {areaId: sourceAreaId, tierId: sourceTierId} = action.payload.source
      const {areaId: targetAreaId, tierId: targetTierId} = action.payload.target
      const amount = action.payload.number

      // get old values
      const source = state.find(x => x.areaId === sourceAreaId && x.tierId === sourceTierId)
      const target = state.find(x => x.areaId === targetAreaId && x.tierId === targetTierId)
      let sourceCount = source.number
      let targetCount = target.number

      // ensure not to move more than existing
      const numberValidated = Math.sign(amount) > 0
        ? Math.min(amount, sourceCount)   // will reduce source
        : -Math.min(-amount, targetCount) // will reduce target

      // no change
      if (numberValidated === 0) {
        return /*state*/
      }

      // set new values
      sourceCount -= numberValidated
      targetCount += numberValidated

      // inject new values to new state object
      return state.map(x => {
        if (x === source) {
          return obj.update(x, {number: sourceCount})
        } else if (x === target) {
          return obj.update(x, {number: targetCount})
        }
        return x
      })
    },

    changeByItem: slice.changeByItem,
    changeByCulture: slice.changeByCulture,

    filterByAreaId: slice.filterByAreaId,
    filterByIslandId: slice.filterByIslandId,
    update: slice.updateElementAction,
  },
  initialState: []
})

export const { create, destroy, setNumber, change, move, update } = residenceSlice.actions

export default residenceSlice
