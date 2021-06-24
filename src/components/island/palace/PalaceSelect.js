import React from 'react'
import classNames from "classnames"
import {useDispatch, useSelector} from "react-redux"

import palace from "../../../data/effects/palace";
import * as islandSlice from "../../../features/islandSlice";
import {text_anno} from "../../../data/translation/texts";


const PalaceSelect = (props) => {
  // get island & world
  // const activeWorldId = useSelector(state => state.personal.worldId)
  // const world = worlds.find(w => w.id === activeWorldId)
  // const worldType = worldTypes.find(wt => wt.worldIDs.includes(activeWorldId))
  const activeIslandId = useSelector(state => state.personal.islandId)
  const island = useSelector(state => state.islands.find(i => i.id === activeIslandId))
  const palaceIsland = useSelector(state => state.islands.find(i => i.hasOwnProperty('isPalace') && i.isPalace))

  const show_unsupported_culture = useSelector(state => state.debug).includes('show_unsupported_culture')

  const ministryFilter = m => show_unsupported_culture || (m.hasOwnProperty('policies') && m.policies.length)
  const policyFilter = p => show_unsupported_culture || (p.hasOwnProperty('effectsToProducers') || p.hasOwnProperty('effectsToResidences')) // correct would be with .length check too

  const dispatch = useDispatch()

  const activateMinistry = (e, GUID) => {
    dispatch(islandSlice.activateMinistry({islandId: activeIslandId, GUID, palaceLevel: palaceIsland?.palaceLevel, reverse: !e.target.checked}))
  }
  const activatePolicy = (e, GUID) => {
    dispatch(islandSlice.activatePolicy({islandId: activeIslandId, GUID, reverse: !e.target.checked}))
  }

  const isUseless = thing => !thing.hasOwnProperty('effectsToProducers') && !thing.hasOwnProperty('effectsToResidences')

  return (<div className='PalaceSelect'>
    {palace.filter(ministryFilter).map(ministry => {
      const checked = island.ministries.includes(ministry.GUID)

      return (<div key={ministry.GUID} className={'d-block'}>
        <label className={classNames({'mb-1': true, 'text-muted': isUseless(ministry)})}>
          {!island.isPalace && <input
            type='checkbox'
            value={ministry.GUID}
            onChange={e => activateMinistry(e, ministry.GUID)}
            checked={checked}
            className={'mr-1'}
          />}
          <img src={"./allicons/" + ministry.FileName} className={'i30 mr-1'} alt={''}/>
          <span>{text_anno(ministry.GUID)}</span>
        </label>
        {ministry.policies.filter(policyFilter).map(policy => {
          const checked = island.policies.includes(policy.GUID)//.find(p => p.GUID === policy.GUID && p.enabled)
          return (<div key={policy.GUID} className={'d-block'}>
            <label className={classNames({'mb-1': true, 'text-muted': isUseless(policy), 'ml-4': !island.isPalace, 'ml-2': island.isPalace})}>
              <input
                type='checkbox'
                value={policy.GUID}
                onChange={e => activatePolicy(e, policy.GUID)}
                checked={checked}
              />
              <img src={"./allicons/" + policy.FileName} className={'i30 mx-1'} alt={''}/>
              <span>{text_anno(policy.GUID)}</span>
            </label>
          </div>)
        })}
      </div>)
    })}
  </div>)
}

export default PalaceSelect