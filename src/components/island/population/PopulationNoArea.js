import React, {memo} from 'react'
import {useDispatch, useSelector} from "react-redux";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import PopulationInputGroup from "./PopulationInputGroup";

import * as areaSlice from "../../../features/areaSlice";
import PropTypes from "prop-types";


const PopulationNoArea = (props) => {
  // get island & world
  const activeWorldId = useSelector(state => state.personal.worldId)
  // const world = worlds.find(w => w.id === activeWorldId)
  // const worldType = worldTypes.find(wt => wt.worldIDs.includes(activeWorldId))
  const activeIslandId = useSelector(state => state.personal.islandId)
  // const island = useSelector(state => state.islands.find(i => i.id === activeIslandId))


  // const {areaId} = props

  const dispatch = useDispatch()
  // todo: was macht hier producer Code??
  // // holt sich immer die erste area, sonst noch ein .sort(sortByNumberField('areaId'))
  // let x = useSelector(state => state.producers.find(x => x.areaId >= areaId && x.key === producerKey && x.pState === 'running'))
  //
  // const x = useSelector(state => state.areas).find(a => a.usage === 'TownHall' && a.islandId === islandId)

  const addArea = (e) => {
    dispatch(areaSlice.create({worldId: activeWorldId, islandId: activeIslandId, usage: 'TownHall'}))
    e.currentTarget.blur()
  }

  return (
    <div className="AreaPopulation">
      <button onClick={addArea} className='sm'>
        <FontAwesomeIcon icon="plus-circle" fixedWidth />
      </button>

      <PopulationInputGroup areaId={null}/>{/*kleinste ID wird gesucht, mögl. Fehlerquelle!*/}

      {props.hasTownhalls && 'items:'}
    </div>
  )
}

PopulationNoArea.propTypes = {
  // areaId: PropTypes.number,
  hasTownhalls: PropTypes.bool,
}

export default memo(PopulationNoArea)