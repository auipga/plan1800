import React from "react";
import PropTypes from "prop-types";
import {useSelector} from "react-redux";

import IslandSharing from "./IslandSharing";

import {producers} from "../../../data/worldGeneration/buildings";


const IslandSharings = props => {
  // get island & world
  const activeIslandId = useSelector(state => state.personal.islandId)
  const islands = useSelector(state => state.islands)//.sort((a,b) => (a.worldId - b.worldId) || (a.id - b.id))


  const {GUID} = props
  const producer = producers.find(p => p.GUID === GUID)
  const sharings = useSelector(state => state.sharings.filter(s => s.GUID === producer.OutputProduct && (s.source === activeIslandId || s.target === activeIslandId)))


  return islands.filter(i => i.id !== activeIslandId).map(i => <IslandSharing key={i.id} island={i} GUID={producer.OutputProduct} sharing={sharings.find(s => s.target === i.id)}/>)
}

IslandSharings.propTypes = {
  // GUID: PropTypes.number.isRequired,
  GUID: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired, //nur wegen fake_buildings z.B. GUID: "112690_1"
}

export default IslandSharings
