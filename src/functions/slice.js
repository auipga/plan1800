import * as obj from "./obj";
import items from "../data/effects/items";
import {resolveTargetGUIDs} from "../data/effects/targetPools";

export const updateElementAction = (state, {payload: {where: isTarget, set: attrs}}) => {
  return state.map(x => isTarget(x) ? obj.update(x, attrs) : x)
}

/**
 * @param {Object} state
 * @param {function} isTarget
 * @param {Number} number
 * @param {String} key
 */
export const setNumber = (state, isTarget, number, key='number') => {
  // no update
  const X = state.find(x => isTarget(x) && x[key] !== number)
  if (!X) {
    return state
  }

  return state.map(x => (X === x) ? obj.update(x, {[key]: number}) : x)
}

export const setValue = (state, isTarget, value) => {
  // no update
  const X = state.find(x => isTarget(x) && x.number !== value)
  if (!X) {
    return state
  }

  return state.map(x => (X === x) ? obj.update(x, {value}) : x)
}

export const addElementToKey = (state, action) => {
  const {key, element} = action.payload
  // no update
  const X = state[key] && state[key].find(x => x === element)
  if (X) {
    return state
  }

  return {
    ...state,
    [key]: [...state[key]||[], element]
  }
}
export const removeElementFromKey = (state, action) => {
  const {key, element} = action.payload

  // no update
  const X = state[key].find(x => x === element)
  if (!X) {
    return state
  }

  return {
    ...state,
    [key]: state[key].filter(elem => elem !== element)
  }
}

export const move = (state, findSource, findTarget, amount) => {
  // get old values
  const source = state.find(findSource)
  const target = state.find(findTarget)

  if (!source) alert('source not found')
  if (!target) alert('target not found')

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
/*
  return state.map(x =>
    x === source
      ? obj.update(x, {number: sourceCount})
      : (x === target
        ? obj.update(x, {number: targetCount})
        : x
      )
  )
*/
}

export const filterByAreaId = (state, action) => {
  const {areaId} = action.payload
  return state.filter(x => x.areaId !== areaId)
}

export const filterByIslandId = (state, action) => {
  const {islandId} = action.payload
  return state.filter(x => x.islandId !== islandId)
}


export const changeByItem = (state, action) => {
  const {GUID, areaId, isRemoval = false} = action.payload

  const item = items.find(i => i.GUID === GUID)
  const relevantEffects = supportedEffects.filter(se => item.hasOwnProperty(se.thingKey))
  if (relevantEffects.length && item.hasOwnProperty('EffectTargets')) {
    const resolvedTargetGUIDs = resolveTargetGUIDs(item.EffectTargets.map(i => i.GUID))
    const findTarget = x => findTargetLocationXor(x, {areaId}, resolvedTargetGUIDs)

    return applyEffects(state, findTarget, relevantEffects, item, isRemoval)
  }
}
export const changeByCulture = (state, action) => {
  const {effects, GUID, pGUID, isRemoval = false} = action.payload
  const {islandId, areaId} = action.payload // wahlweise
  let newState = [...state]

  effects.forEach(eff => {
    const relevantEffects = supportedEffects.filter(se => eff.hasOwnProperty(se.thingKey))
    if (relevantEffects.length && eff.hasOwnProperty('targetGUIDs')) {
      const resolvedTargetGUIDs = resolveTargetGUIDs(eff.targetGUIDs)
      const findTarget = x => findTargetLocationXor(x, {islandId, areaId, pGUID}, resolvedTargetGUIDs)

      newState = applyEffects(newState, findTarget, relevantEffects, {GUID, ...eff}, isRemoval, additional?.deltaPalaceLevel)
    }
  })

  return newState
}

export const findTargetLocationXor = (x, location, resolvedTargetGUIDs) => {
  return (
    (location.pGUID === undefined ^ x.GUID === location.pGUID) &&
    (location.areaId === undefined ^ x.areaId === location.areaId) &&
    (location.islandId === undefined ^ x.islandId === location.islandId) &&
    (location.worldId === undefined ^ x.worldId === location.worldId) &&
    // (location.propaganda === true ^ x.worldId <= 3) && // todo: entfernt weil keine items für die arktis funktionierten
    resolvedTargetGUIDs.includes(x.GUID)
    // && x.pState === 'running'
  )
}

const effectApplyer = {
  'plus-minus': (targetKey, thingKey) => (x, thing, isRemoval) => {
    return x[targetKey] + thing[thingKey] * (isRemoval?-1:1)
  },
  'add-element': (targetKey, thingKey, genElement) => (x, thing, isRemoval) => {
    if (isRemoval) {//entfernt alle, bei 5x selbes item später mal nur 1 entfernen?
      return x[targetKey].filter(a => !a.hasOwnProperty('d_add_source') || a.d_add_source !== thing.GUID)
    }
    return thing[thingKey].reduce((data, a) =>
      [...data, {...genElement(a), d_add_source: thing.GUID}],
      x[targetKey] // alles bisherige (als Kopie!)
    )
  },
  'replace-element': (targetKey, thingKey, findTarget, replace, restore) => (x, thing, isRemoval) => {
    // ReplaceWorkforce: 1010366,
    if (isRemoval) {
      return x[targetKey].map(a => a.hasOwnProperty('d_replace_source') && a.d_replace_source === thing.GUID ? restore(a) : a)
    }
    // ReplaceInputs: [
    //      {
    //         OldInput: 1010249,
    //         NewInput: 1010233
    //       }
    // ]
    return x[targetKey].map(a => findTarget(a, thing[thingKey]) ? ({...replace(a, thing[thingKey]), d_replace_source: thing.GUID}) : a)
  },
  'change-need-factor': (targetKey, thingKey) => (x, thing, isRemoval) => {
    return x[targetKey].map(need => {
      const change = thing[thingKey].find(r => r.ProvidedNeed === need.good)
      if (change) {
        return {
          ...need,
          factor: need.factor + (change.AmountInPercent/100 * (isRemoval?-1:1))
        }
      }
      return need
    })
  },
  'remove-need-factor': (targetKey, thingKey) => (x, thing, isRemoval) => {
    return x[targetKey].map(need => {
      const change = thing[thingKey].find(r => r.ProvidedNeed === need.good)
      if (change) {
        return {
          ...need,
          factor: need.factor + (-1) * (isRemoval?-1:1) // todo (später): nur wenn SubstituteNeed erfüllt ist
        }
      }
      return need
    })
  },
}
export const supportedEffects = [
  {
    thingKey: 'Productivity',
    targetKey: 'Productivity',
    apply: effectApplyer['plus-minus']('Productivity', 'Productivity')
  },
/*
  {
    thingKey: 'MaintenanceUpgrade',
    targetKey: 'todo',
    apply: effectApplyer['plus-minus']('todo', 'MaintenanceUpgrade')
  },
*/
/*
  {
    thingKey: 'Workforce',
    targetKey: 'Workforce_Needed todo',
    apply: effectApplyer['plus-minus']('todo', 'Workforce')
  },
*/
/*
  {
    thingKey: 'Attractivity',
    targetKey: 'AttractiveNess',
    apply: effectApplyer['plus-minus']('AttractiveNess', 'Attractivity')
  },
*/
  {// Bedürfnis-Bonus
    /*
     GoodConsumptionUpgrade: [
      {
        ProvidedNeed: 1010352,
        AmountInPercent: -100
      }
    ],
    */
    thingKey: 'GoodConsumptionUpgrade',
    targetKey: 'needs',
    apply: effectApplyer['change-need-factor']('needs', 'GoodConsumptionUpgrade')
  },
  {// Zusatzversorgung
    /*
      NeedProvideNeedUpgrade: [
      {
        ProvidedNeed: 1010257,
        SubstituteNeed: 1010352
      },
    ],
    */
    thingKey: 'NeedProvideNeedUpgrade',
    targetKey: 'needs',
    apply: effectApplyer['remove-need-factor']('needs', 'NeedProvideNeedUpgrade')
  },
  // {thingKey: '',      targetKey: '',                mechanism: ''},
  {
    thingKey: 'AdditionalOutput',
    targetKey: 'io',
    apply: effectApplyer['add-element'](
      'io',
      'AdditionalOutput',
      (a) => ({good: a.Product, Cycle: a.Cycle}) //genIO(a.Product, a.Cycle)
    )
  },
  {
    thingKey: 'ReplaceInputs',
    targetKey: 'io',
    apply: effectApplyer['replace-element'](
      'io',
      'ReplaceInputs',
      (a, bb) => bb.map(b => b.OldInput).includes(a.good),
      (a, bb) => ({good: bb.find(b => b.OldInput === a.good).NewInput, Cycle: a.Cycle, old_good: a.good}),
      (a) => ({good: a.old_good, Cycle: a.Cycle}),
    )
  },

  /*
  {
    thingKey: 'ReplaceWorkforce',
    targetKey: 'workforce',
    apply: effectApplyer['replace-element'](
      'workforce',
      'ReplaceWorkforce',
      // (a, bb) => bb.map(b => b.OldInput).includes(a.good),
      // (a, bb) => ({good: bb.find(b => b.OldInput === a.good).NewInput, Cycle: a.Cycle, old_good: a.good}),
      // (a) => ({good: a.old_good, Cycle: a.Cycle}),
    )
  },
*/

//    ProvideElectricity: 1,
//     IncidentInfectableUpgrade: -100,
  //neue per 26.3.
  // 1x {thingKey: 'InputAmountUpgrade',   targetKey: '',                mechanism: ''},
  // 6x {thingKey: 'ResolverUnitMovementSpeedUpgrade',   targetKey: '',                mechanism: ''},
  // 7x {thingKey: 'ResolverUnitCountUpgrade',   targetKey: '',                mechanism: ''},
  // {thingKey: 'TaxModifierInPercent',   targetKey: '',                mechanism: ''},
  // 7x {thingKey: 'VisitorSpawnProbability',   targetKey: '',                mechanism: ''},
  // 9x {thingKey: 'MaintainanceUpgradeVehicle',   targetKey: '',                mechanism: ''},

  // {thingKey: 'Workforce_Contained',   targetKey: '',                mechanism: ''},
  // {thingKey: 'Einwohner_Max',         targetKey: '',                mechanism: ''},
]
export const applyEffects = (state, findTarget, relevantEffects, effOrItem, isRemoval) => {
  // noinspection UnnecessaryLocalVariableJS
  const newState = state.map(x => {
    if (findTarget(x)) {
      let newData = {}

      relevantEffects.forEach(re => {
        newData[re.targetKey] = re.apply( {...x, ...newData}, effOrItem, isRemoval)
      })

      return obj.update(x, {...newData})
    }
    return x;
  })

  // if (eff.attribute === 'Productivity' oder ResiVerbrauch/BedüBonus) {
  //   const newXs = newState.filter(findTarget)
  //   newXs.forEach(newX => {
  //     recalcTroughput(newX, action)
  //   })
  // }

  return newState
}
