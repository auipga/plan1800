import React, {memo} from 'react';
import PropTypes from 'prop-types';
import {useSelector} from "react-redux";

import GoodMemo from "./GoodMemo";

import worldTypes from "../../../../data/worldTypes";
import needs from "../../../../data/needs";


const Good = (props) => {
  // get island & world
  const activeWorldId = useSelector(state => state.personal.worldId)
  // const world = worlds.find(w => w.id === activeWorldId)
  const worldType = worldTypes.find(wt => wt.worldIDs.includes(activeWorldId))
  const activeIslandId = useSelector(state => state.personal.islandId)
  const island = useSelector(state => state.islands.find(i => i.id === activeIslandId))


  const {good} = props

  const providers = useSelector(state => state.producers).filter(x =>
    x.islandId === island.id &&
    x.outputs.hasOwnProperty(good) &&
    x.pState === 'running'
    // && x !== provider
  )//)
  const needers = useSelector(state => state.producers).filter(x =>
    x.islandId === island.id &&
    x.inputs.hasOwnProperty(good) &&
    x.pState === 'running'
    // && x !== provider
  )//)
  const consumers = useSelector(state => state.residences).filter(x =>
    x.islandId === island.id &&
    // x.inputs.hasOwnProperty(good) &&
    // x.pState === 'running'
    // && x !== provider
    true
  )//)

  const relevantNeeds = needs.filter(n =>
    n.tierIDs.some(t => worldType.socialClassIDs.includes(t))
  )
  // console.log(relevantNeeds);


  const throughput = (x, inOut) => x.number * x.Productivity/100 * 60/x.productionTime / x[inOut][good]
  const sumInputs = (sum, x) => sum + throughput(x, 'inputs')
  const sumOutputs = (sum, x) => sum + throughput(x, 'outputs')
  const sumConsumtions = (sum, x) => sum + x.number * .1
//  consumption: [0.0004166667, 0.0008333334], // per residence and second

  const balance = 0
    + providers.reduce(sumOutputs, 0)
    - needers.reduce(sumInputs, 0)
    - consumers.reduce(sumConsumtions,0)

  if(isNaN(balance)) {
    // console.log({isNan: isNaN(balance), providers, needers, good});
    // console.log(providers.reduce(sumOutputs, 0));
    // console.log(needers.reduce(sumInputs, 0));
  }
  return <GoodMemo balance={balance} good={good}/>
}

Good.propTypes = {
  good: PropTypes.string.isRequired,
}

export default memo(Good)