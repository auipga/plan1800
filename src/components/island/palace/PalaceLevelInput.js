import React from 'react'
import {useDispatch, useSelector} from "react-redux";

import DataInput from "../../global/DataInput";

import * as islandSlice from "../../../features/islandSlice";
import {ensureMinMax} from "../../../functions/helpers";
import {modifier} from "../../../functions/wheel";
import Icon from "../../Icon";


const PalaceLevelInput = (props) => {
  // get island & world
  const activeIslandId = useSelector(state => state.personal.islandId)
  const island = useSelector(state => state.islands.find(i => i.id === activeIslandId))

  const dispatch = useDispatch()

  const setPalaceLevel = number => {
    number = ensureMinMax(number, 0, 25)
    dispatch(islandSlice.setPalaceLevel({islandId: activeIslandId, number, delta: number - island.palaceLevel}))
  }
  const increasePalaceLevel = e => {
    e.preventDefault()
    setPalaceLevel(island.palaceLevel + modifier(e))
  }
  const decreasePalaceLevel = e => {
    e.preventDefault()
    setPalaceLevel(island.palaceLevel - modifier(e))
  }


  return (<div>
    <span
      onClick={increasePalaceLevel}
      onContextMenu={decreasePalaceLevel}
    >
      <Icon icon={'Prestige'} title={'Prestige Level'}/>
    </span>

    <DataInput
      className='ProducerInput PalaceLevelInput'
      presentValue={island.palaceLevel}
      setNumber={setPalaceLevel}
    />
  </div>)
}

export default PalaceLevelInput