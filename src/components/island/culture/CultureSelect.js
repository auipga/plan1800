import React from 'react'
import PropTypes from 'prop-types'
import classNames from "classnames"
import {shallowEqual, useDispatch, useSelector} from "react-redux"

import {sortByStringField} from "../../../functions/helpers"
import culture from "../../../data/effects/culture"
import * as cultureSlice from "../../../features/cultureSlice"
import {text_anno} from "../../../data/translation/texts";


const CultureSelect = (props) => {
  // get island & world
  // const activeWorldId = useSelector(state => state.personal.worldId)
  // const world = worlds.find(w => w.id === activeWorldId)
  // const worldType = worldTypes.find(wt => wt.worldIDs.includes(activeWorldId))
  const activeIslandId = useSelector(state => state.personal.islandId)
  // const island = useSelector(state => state.islands.find(i => i.id === activeIslandId))


  const {type} = props
  const options = culture[type].sort(sortByStringField('name'))//Productivity
  const selectedGUIDs = useSelector(state => state.culture.filter(c => c.islandId === activeIslandId && c.type === type), shallowEqual).map(c => c.GUID)

  const show_unsupported_culture = useSelector(state => state.debug).includes('show_unsupported_culture')

  const dispatch = useDispatch()

  const handleChange = (e) => {
    const value = parseInt(e.target.value)

    if (isNaN(value)) {
      alert('isNaN: '+e.target.value)
      console.log({value}, 'isNaN')
      return;
    }
    const payload = {islandId: activeIslandId, type, GUID: value}
    if (e.target.checked) {
      dispatch(cultureSlice.setSet(payload))
    } else {
      dispatch(cultureSlice.removeSet(payload))//type muss nicht mehr
    }
  }


  return (<div className='CultureSelect'>
    {options.map((i, key) => {
      const checked = selectedGUIDs.includes(i.GUID)
      !i.GUID && alert('!i.GUID')
      // !i.effects && alert('!i.effects')
      // const disabled = !i.GUID || !i.effects || !i.effects.map(x=>x.attribute).includes('Productivity')
      // const disabled = !i.GUID || !i.effects || !supportedEffects.find(se => i.effects.find(x=>x.hasOwnProperty(se.thingKey)))
      const disabled = !i.hasOwnProperty('effectsToProducers') && !i.hasOwnProperty('effectsToResidences')
      const icon = type==='zoo' ? "./icons/buildings/Zoo.png"  :
        (type==='museum' ? "./icons/buildings/Museum.png" :
          (type==='botanica' ? "./icons/dlcs/Icon_dlc_botanica.png" :
            './icons/festivals/'+i.filename
          )
        )

      if (disabled && !show_unsupported_culture) return <div key={key}></div>

      return (
        <label key={key} className={classNames({'d-block mb-0': true, 'text-muted': disabled})}>
          <input
            type='checkbox' //. radio
            value={i.GUID}
            disabled={disabled}
            onChange={handleChange}
            checked={checked}
            //. name='festival' // weil radio
          />
          {/*{type==='festivals' && <img src={icon} className={type==='festivals' ? 'i30' : 'i20'} alt={''}/>}*/}
          <img src={icon} className={type==='festivals' ? 'i30' : 'i20'} alt={''}/>{' '}
          <span className='text-capitalize'>{text_anno(i.GUID).toLowerCase()}</span>
        </label>
      )
    })}

    {/*{type==='festivals' && <div className='my-2 text-info'>Todo: Timer mit Restlaufzeit</div>}*/}
    {/*{type!=='festivals' && <div className='my-2 text-info'>Todo: Individuelle Icons, <br/>Highlight betroffener Gebäude</div>}*/}

  </div>)
}

CultureSelect.propTypes = {
  type: PropTypes.oneOf(['festivals', 'zoo', 'museum', 'botanica']).isRequired
}

export default CultureSelect