import React, {memo} from 'react'

import PopulationNoArea from "./PopulationNoArea";
import PopulationAreas from "./PopulationAreas";


const IslandPopulation = (props) => {

  return (<>
    <PopulationNoArea hasTownhalls={false}/>

    <PopulationAreas/>
  </>)
}

export default memo(IslandPopulation)