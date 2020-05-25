import React from 'react';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from "react-redux";

import {Button} from "reactstrap";

import * as islandSlice from "../../../features/islandSlice";
import {blur} from "../../../functions/helpers";


const FertilitySwitch = (props) => {
  // get island & world
  // const activeWorldId = useSelector(state => state.personal.worldId)
  // const world = worlds.find(w => w.id === activeWorldId)
  // const worldType = worldTypes.find(wt => wt.worldIDs.includes(activeWorldId))
  const activeIslandId = useSelector(state => state.personal.islandId)
  // const island = useSelector(state => state.islands.find(i => i.id === activeIslandId))

  const {fertility, enabled} = props;

  const dispatch = useDispatch()

  const toggle = (e) => {
    blur(e)
    dispatch(islandSlice[(enabled ? 'remove': 'add') + 'Fertility']({islandId: activeIslandId, fertility}))
  }

  return (
    <Button
      className={'px-1 py-1 mr-1'}
      color={enabled ? 'secondary' : 'light'}
      active={!enabled}
      onClick={toggle}
    >
      <img src={"./icons/goods/" + fertility + ".png"} alt={fertility} title={fertility} className='i24' />
    </Button>
  )
}

FertilitySwitch.propTypes = {
  fertility: PropTypes.string.isRequired,
  enabled: PropTypes.bool.isRequired,
};

export default FertilitySwitch