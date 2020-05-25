import React, {useState} from 'react'
import {useDispatch, useSelector, useStore} from "react-redux";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import * as areaSlice from "../../../features/areaSlice";
import needs from "../../../data/needs";
import tiers from "../../../data/tiers";


const PopulationNeedsGroup = (props) => {
  const {island} = props

  const dispatch = useDispatch()

  const relevantTiers = tiers.filter(t => t.worldID === island.worldId)

  const toggleNeed = () => {
    // dispatch(needSlice.toggle({islandId: island.id, need}))
  }


  return (
    <div className="-PopulationsNeedsGroup-">
        <button disabled><FontAwesomeIcon icon="star"/></button>
      {relevantTiers.map(t => (
        <div>
          {/*{needs.}*/}
        </div>
      ))}
      {/*<NeedToggle area={area}/>*/}
    </div>
  )
}

export default PopulationNeedsGroup