import React from 'react'
import {useSelector} from "react-redux";

import Needs from "../../needs/Needs";
import tiers from "../../../data/tiers";


const IslandNeeds = (props) => {
  // get island & world
  const activeWorldId = useSelector(state => state.personal.worldId)
  // const world = worlds.find(w => w.id === activeWorldId)
  // const worldType = worldTypes.find(wt => wt.worldIDs.includes(activeWorldId))
  // const activeIslandId = useSelector(state => state.personal.islandId)
  // const island = useSelector(state => state.islands.find(i => i.id === activeIslandId))


  const relevantTiers = tiers.filter(t => t.worldID === activeWorldId)

  return (<div className="IslandNeeds">
      <button disabled>needs</button>
      {relevantTiers.map(t => <Needs key={t.id} tierId={t.id}/>)}
  </div>)
}


export default IslandNeeds