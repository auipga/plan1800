import React from "react";
import PropTypes from "prop-types";
import {useSelector} from "react-redux";

import IslandSync from "./IslandSync";

import {producers} from "../../../data/worldGeneration/buildings";


const IslandSyncs = props => {
  // get island & world
  const activeIslandId = useSelector(state => state.personal.islandId)
  const islands = useSelector(state => state.islands)


  const {GUID} = props
  const producer = producers.find(p => p.GUID === GUID)
  const routes = useSelector(state => state.routes.filter(r => r.GUID === producer.OutputProduct && (r.sourceIslandId === activeIslandId || r.targetIslandId === activeIslandId)))


  return islands.filter(i => i.id !== activeIslandId).map(i => <IslandSync key={i.id} island={i} GUID={producer.OutputProduct} route={routes.find(r => r.sourceIslandId === i.id || r.targetIslandId === i.id)}/>)
}

IslandSyncs.propTypes = {
  // GUID: PropTypes.number.isRequired,
  GUID: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired, //nur wegen fake_buildings z.B. GUID: "112690_1"
}

export default IslandSyncs
