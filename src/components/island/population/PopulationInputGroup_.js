import React from 'react'
import {useSelector} from "react-redux";
import PopulationInput_ from "./PopulationInput_";

const PopulationInputGroup = props => {
  const {area} = props

  // const residenceCounts = useSelector(state => state.residences.filter(x => x.areaId === area.id))
  let residenceCounts = []
  const x1 = useSelector(state => state.residences.find(x => x.areaId === area.id))
  const x2 = useSelector(state => state.residences.find(x => x.areaId === area.id && x.tierId > x1.tierId+0))
  const x3 = useSelector(state => state.residences.find(x => x.areaId === area.id && x.tierId > x1.tierId+1))
  const x4 = useSelector(state => state.residences.find(x => x.areaId === area.id && x.tierId > x1.tierId+2))
  const x5 = useSelector(state => state.residences.find(x => x.areaId === area.id && x.tierId > x1.tierId+3))

  if (x1) residenceCounts.push(x1)
  if (x2) residenceCounts.push(x2)
  if (x3) residenceCounts.push(x3)
  if (x4) residenceCounts.push(x4)
  if (x5) residenceCounts.push(x5)

  return (
    residenceCounts.map(x => (
      <div>
        <PopulationInput_
          areaId={area.id}
          tierId={x.tierId}
          x={x}
        />
      </div>
    ))
  )
}

export default PopulationInputGroup