import React from 'react'
import PropTypes from 'prop-types'

import Building from "./Building";
import Icon from "../../../Icon";
import {shallowEqual, useSelector} from "react-redux";
import BuildingButton from "./BuildingButton";


const ProducersOfType = (props) => {
  // get island & world
  // const activeWorldId = useSelector(state => state.personal.worldId)
  // const world = worlds.find(w => w.id === activeWorldId)
  // const worldType = worldTypes.find(wt => wt.worldIDs.includes(activeWorldId))
  const activeIslandId = useSelector(state => state.personal.islandId)
  // const island = useSelector(state => state.islands.find(i => i.id === activeIslandId))


  const {type, producers, firstArea} = props

  const builtProducers = useSelector(state => state.producers.filter(x => x.islandId === activeIslandId), shallowEqual)
  const unbuiltProducers = producers.filter(p => !builtProducers.find(x => x.GUID === p.GUID))


  return (<div className='ProducersOfType'>
    <Icon icon={type} className="buildingtypes"/>

    {producers.filter(p => builtProducers.find(x => x.GUID === p.GUID)).map(p =>
      <Building key={p.GUID} producer={p} firstArea={firstArea}/>
    )}

    {!!unbuiltProducers.length && (<>
      <hr/>

      <div style={{maxWidth: 150}}>
        <img src={"./icons/Icon_build_menu.png"} alt='' className='build-icon'/>
        {unbuiltProducers.map(p => <BuildingButton key={p.GUID} producer={p} firstArea={firstArea} /> )}
      </div>
    </>)}
  </div>)
}

ProducersOfType.propTypes = {
  type: PropTypes.string.isRequired,
  firstArea: PropTypes.object.isRequired,
  producers: PropTypes.array.isRequired
}

export default ProducersOfType