import React, {useState} from 'react'
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from "react-redux";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Button} from "reactstrap";

import IslandWorkforceOfTier from "../workforce/IslandWorkforceOfTier";
import Icon from "../../Icon";

// import worlds from "../../../data/worlds";
import worldTypes from "../../../data/worldTypes";
import {blur} from "../../../functions/helpers";
import * as personalSlice from "../../../features/personalSlice";
import * as areaSlice from "../../../features/areaSlice";

const NonProductionHeader = (props) => {
  // get island & world
  const activeWorldId = useSelector(state => state.personal.worldId)
  // const world = worlds.find(w => w.id === activeWorldId)
  const worldType = worldTypes.find(wt => wt.worldIDs.includes(activeWorldId))
  const activeIslandId = useSelector(state => state.personal.islandId)
  // const island = useSelector(state => state.islands.find(i => i.id === activeIslandId))


  const collapsed = useSelector(state => state.personal.collapsed)
  const c = 'NonProduction'
  const dispatch = useDispatch()
  const handleToggle = e => {
    blur(e)
    const key = e.currentTarget.id.replace('toggle_', '');
    collapsed.includes(key) /*refactor: add/remove/toggle within a list*/
      ? dispatch(personalSlice.upsert({collapsed: collapsed.filter(x => x !== key)}))
      : dispatch(personalSlice.upsert({collapsed: [...collapsed, key]}))
  }
  const addArea = e => {
    dispatch(areaSlice.create({worldId: activeWorldId, islandId: activeIslandId, usage: 'TownHall'}))
    e.currentTarget.blur()
  }

  return (
    <div className="NonProductionHeader">
      <Button id={'toggle_' + c} size='sm' className='sm mr-2' active={!collapsed.includes(c)} onClick={handleToggle}>
        {/*<FontAwesomeIcon icon={props.isExpanded ? 'plus-square' : 'minus-square'} />*/}
      {/*<FontAwesomeIcon icon={!props.isExpanded ? 'eye' : 'eye-slash'} fixedWidth/>*/}
      <Icon icon='NonProduction'/>
      </Button>

      {props.isExpanded ? <>
        isExpanded = true
      </> : <>
        isExpanded = false
      </>}

    </div>
  )
}

NonProductionHeader.propTypes = {
  // island: PropTypes.object.isRequired,
  isExpanded: PropTypes.bool.isRequired,
}

export default NonProductionHeader