import React, {memo} from 'react'
import PropTypes from 'prop-types';
import {useSelector} from "react-redux";

import {sum} from "../../../functions/helpers";
import {Badge} from "reactstrap";

const IslandWorkforceOfTier = (props) => {
  // get island & world
  // const activeWorldId = useSelector(state => state.personal.worldId)
  // const world = worlds.find(w => w.id === activeWorldId)
  // const worldType = worldTypes.find(wt => wt.worldIDs.includes(activeWorldId))
  const activeIslandId = useSelector(state => state.personal.islandId)
  // const island = useSelector(state => state.islands.find(i => i.id === activeIslandId))


  const relevantResidences = useSelector(state => state.residences.filter(a => a.islandId === activeIslandId && a.tierId === props.tierId))

  const a = sum(relevantResidences.map(x => x.number))

  return (
    // <Badge className={'mr-2 ' + (!a ? 'text-muted': '')} color={a > 0 ? 'secondary' : ''} pill>
    <Badge className='mr-2' color='secondary' pill>
      <img src={"./icons/population/Workforce_" + props.tierId + ".png"}
           alt={props.tierId}
           className='i24'
      /> &times; <span className='d-inline-block'>{a}</span>
    </Badge>
  )
}

IslandWorkforceOfTier.propTypes = {
  tierId: PropTypes.number.isRequired,
}

export default memo(IslandWorkforceOfTier)