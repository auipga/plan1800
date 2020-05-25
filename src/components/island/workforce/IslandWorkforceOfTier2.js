import React, {memo} from 'react'
import PropTypes from 'prop-types';
import {useSelector} from "react-redux";

import {sum} from "../../../functions/helpers";

const IslandWorkforceOfTier = (props) => {
  // get island & world
  // const activeWorldId = useSelector(state => state.personal.worldId)
  // const world = worlds.find(w => w.id === activeWorldId)
  // const worldType = worldTypes.find(wt => wt.worldIDs.includes(activeWorldId))
  const activeIslandId = useSelector(state => state.personal.islandId)
  // const island = useSelector(state => state.islands.find(i => i.id === activeIslandId))


  const relevantResidences = useSelector(state => state.residences.filter(a => a.islandId === activeIslandId && a.tierId === props.tierId))

  const a = sum(relevantResidences.map(x => x.number))

  return (<div>
    <img src={"./icons/population/Workforce_" + props.tierId + ".png"}
         alt={props.tierId}
         // className='WorkforceIcon' gelöscht!
    />
    <input
      type='text'
      className='PopulationInput DataInput' /*DataInput nur für styling*/
      value={a}
      // readOnly
      disabled
    />
  </div>)
}

IslandWorkforceOfTier.propTypes = {
  tierId: PropTypes.number.isRequired,
}

export default memo(IslandWorkforceOfTier)