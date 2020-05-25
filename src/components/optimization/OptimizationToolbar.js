import React from "react";
import PropTypes from 'prop-types'
import {useDispatch, useSelector} from "react-redux";

import {Button} from "reactstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import * as areaSlice from "../../features/areaSlice";


const OptimizationToolbar = (props) => {
  const show_planned_features = useSelector(state => state.debug).includes('show_planned_features')

  // get island & world
  const activeWorldId = useSelector(state => state.personal.worldId)
  // const world = worlds.find(w => w.id === activeWorldId)
  // const worldType = worldTypes.find(wt => wt.worldIDs.includes(activeWorldId))
  const activeIslandId = useSelector(state => state.personal.islandId)
  // const island = useSelector(state => state.islands.find(i => i.id === activeIslandId))


  const {GUID} = props

  const dispatch = useDispatch()

  const areaCreate = (e) => {
    dispatch(areaSlice.create({worldId: activeWorldId, islandId: activeIslandId, usage: 'TradeUnion', producerGUID: GUID, asDefault: true}))
    e.currentTarget.blur()
  }

  return (<div className='OptimizationToolbar'>
    <Button type='button' className='sm' onClick={areaCreate}>
      <FontAwesomeIcon icon={'plus'} color={'#dddddd'}/>
    </Button>
    {show_planned_features && <Button type='button' className='sm' disabled>
      <FontAwesomeIcon icon="link" color={'#dddddd'}/>
    </Button>}
    {show_planned_features && <Button type='button' className='sm' disabled>
      <FontAwesomeIcon icon={'vector-square'} color={'#dddddd'}/>
    </Button>}
  </div>)
}

OptimizationToolbar.propTypes = {
  // GUID: PropTypes.number.isRequired,
  GUID: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired, //nur wegen fake_buildings z.B. GUID: "112690_1"
}

export default OptimizationToolbar