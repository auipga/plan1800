import React from "react";
import PropTypes from "prop-types";
import {useDispatch, useSelector} from "react-redux";

import {Input} from "reactstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import Icon from "../../Icon";

import * as sharingSlice from "../../../features/sharingSlice";
import * as personalSlice from "../../../features/personalSlice";


const IslandSharing = props => {
  // get island & world
  const activeIslandId = useSelector(state => state.personal.islandId)


  const {GUID, island} = props

  const dispatch = useDispatch()
  const sharing = props.sharing || /*new:*/{GUID, source: activeIslandId, target: island.id}

  const handleChange = e => {
    if (e.currentTarget.checked) {
      dispatch(sharingSlice.add(sharing))
    } else {
      dispatch(sharingSlice.remove(sharing))
    }
  }
  const goto = e => {
    dispatch(personalSlice.world({id: island.worldId}))
    dispatch(personalSlice.island({id: island.id}))
  }


  return (<div className='ml-4'>
    <label
      htmlFor={'routesFor'+GUID+'_island_'+island.id}
      className='IslandSharing'
    >
      <Input
        id={'routesFor'+GUID+'_island_'+island.id}
        type='checkbox'
        checked={props.sharing !== undefined}
        onChange={handleChange}
      />
      <Icon icon={'session'+island.worldId} className='i20'/>
      <span className={'text-truncate'} style={{maxWidth:170}}>{island.name}</span>
      {' '}<FontAwesomeIcon icon='external-link-alt' size='sm' className='c-pointer' onClick={goto} />
    </label>
  </div>)
}

IslandSharing.propTypes = {
  // GUID: PropTypes.number.isRequired,
  GUID: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired, //nur wegen fake_buildings z.B. GUID: "112690_1"
  island: PropTypes.object.isRequired,
  sharing: PropTypes.object,
}

export default IslandSharing