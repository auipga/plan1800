import React from 'react';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from "react-redux";

import DataInput from "../../global/DataInput";

import * as islandSlice from "../../../features/islandSlice";
import {ensureMinMax} from "../../../functions/helpers";
import {modifier} from "../../../functions/wheel";


const ResourceInput = (props) => {
  // get island & world
  // const activeWorldId = useSelector(state => state.personal.worldId)
  // const world = worlds.find(w => w.id === activeWorldId)
  // const worldType = worldTypes.find(wt => wt.worldIDs.includes(activeWorldId))
  const activeIslandId = useSelector(state => state.personal.islandId)
  // const island = useSelector(state => state.islands.find(i => i.id === activeIslandId))

  const {resource, count} = props
  // const count = island?.resources[resource]||0

  const max = 50 // todo dynamisch
  const min = 0

  const dispatch = useDispatch()

  const setNumber = number => {
    saveNumber(ensureMinMax(number, min, max))
  }
  const handleMediaClick = e => {
    saveNumber(ensureMinMax(count+modifier(e), min, max))
  }
  const handleMediaContextMenu = e => {
    e.preventDefault()
    saveNumber(ensureMinMax(count-modifier(e), min, max))
  }
  const saveNumber = number => {
    if (number !== count) {
      dispatch(islandSlice.setResourceCount({islandId: activeIslandId, resource, number}))
    }
  }


  return (<div className='ResourceInputWrap'>
      <img
        src={"./icons/goods/" + resource + ".png"} alt={resource} title={resource} className='i26'
        onClick={handleMediaClick}
        onContextMenu={handleMediaContextMenu}
      />
      &times;
      <DataInput
        className='ResourceInput'
        presentValue={count}
        setNumber={setNumber}
      />
    </div>
  )
}

ResourceInput.propTypes = {
  count: PropTypes.number,
  resource: PropTypes.string.isRequired,
};

export default ResourceInput