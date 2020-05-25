import React from 'react'
import {shallowEqual, useSelector} from "react-redux";

import PopulationArea from "./PopulationArea";

// import worlds from "../../../data/worlds";
// import worldTypes from "../../../data/worldTypes";


const PopulationAreas = (props) => {
  // get island & world
  // const activeWorldId = useSelector(state => state.personal.worldId)
  // const world = worlds.find(w => w.id === activeWorldId)
  // const worldType = worldTypes.find(wt => wt.worldIDs.includes(activeWorldId))
  const activeIslandId = useSelector(state => state.personal.islandId)
  // const island = useSelector(state => state.islands.find(i => i.id === activeIslandId))


  // performance: was ist besser?
   const ids = useSelector(state => state.areas.filter(x => x.islandId === activeIslandId && x.usage === 'TownHall'), shallowEqual).map(x => x.id)
   // const ids = useSelector(state => state.residences).filter(x => x.islandId === activeIslandId && x.tierId === worldType.socialClassIDs[0]).map(x => x.areaId)

  return (<>
    {ids.slice(1).map((id,key) => <PopulationArea key={id} areaId={id} isFirst={key===0} isLast={key+1===ids.length-1}/>)}
  </>)
}

export default (PopulationAreas)