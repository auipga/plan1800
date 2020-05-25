import React, {memo} from 'react'
import PropTypes from "prop-types";
import {useSelector} from "react-redux";

import PopulationInput from "./PopulationInput";

// import worlds from "../../../data/worlds";
import worldTypes from "../../../data/worldTypes";


const PopulationInputGroup = props => {
  // get island & world
  const activeWorldId = useSelector(state => state.personal.worldId)
  // const world = worlds.find(w => w.id === activeWorldId)
  const worldType = worldTypes.find(wt => wt.worldIDs.includes(activeWorldId))
  // const activeIslandId = useSelector(state => state.personal.islandId)
  // const island = useSelector(state => state.islands.find(i => i.id === activeIslandId))


  const {areaId} = props


  return worldType.socialClassIDs.map(t => <PopulationInput key={t} areaId={areaId} tierId={t}/>)
}

PopulationInputGroup.propTypes = {
  areaId: PropTypes.number,//.isRequired,
}

export default memo(PopulationInputGroup)