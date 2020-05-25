import React, {memo} from "react";
import PropTypes from "prop-types";
import {shallowEqual, useSelector} from "react-redux";


import ProducerArea from "./ProducerArea";
import {producers} from "../../../../data/worldGeneration/buildings";


const ProducerAreas = (props) => {
  // get island & world
  // const activeWorldId = useSelector(state => state.personal.worldId)
  // const world = worlds.find(w => w.id === activeWorldId)
  // const worldType = worldTypes.find(wt => wt.worldIDs.includes(activeWorldId))
  const activeIslandId = useSelector(state => state.personal.islandId)
  // const island = useSelector(state => state.islands.find(i => i.id === activeIslandId))


  const {GUID} = props
  const producer = producers.find(p => p.GUID === GUID)

  const areaIds = useSelector(state => state.producers.filter(
    x => x.islandId === activeIslandId && x.GUID === GUID && x.pState === 'running'
  ), shallowEqual).map(x => x.areaId)


  return (<>
    {areaIds.map((id, key) => <ProducerArea key={id} isNoArea={!key} areaId={id} producer={producer}/>)}
  </>)
}

ProducerAreas.propTypes = {
  // GUID: PropTypes.number.isRequired,
  GUID: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired, //nur wegen fake_buildings z.B. GUID: "112690_1"
};

export default memo(ProducerAreas)