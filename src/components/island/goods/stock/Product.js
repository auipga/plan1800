import React, {} from 'react';
import PropTypes from 'prop-types';
import {shallowEqual, useSelector} from "react-redux";

import ProductMemo from "./ProductMemo";

import fnBalance from "../../../../functions/balance";


const Product = (props) => {
  // get island & world
  // const activeWorldId = useSelector(state => state.personal.worldId)
  // const world = worlds.find(w => w.id === activeWorldId)
  // const worldType = worldTypes.find(wt => wt.worldIDs.includes(activeWorldId))
  const activeIslandId = useSelector(state => state.personal.islandId)
  // const island = useSelector(state => state.islands.find(i => i.id === activeIslandId))


  const {product} = props

/*
  // const balance = useSelector(state => state.balance.find(x => x.islandId === activeIslandId && x.good === product.GUID))
  const relevantProducers = useSelector(state => state.producers.filter(x => x.islandId === activeIslandId && x.io.find(io => io.good === product.GUID) && x.pState === 'running'), shallowEqual);
  const relevantResidences = useSelector(state => state.residences.filter(x => x.islandId === activeIslandId && x.hasOwnProperty('needs') && x.needs.find(need => need.good === product.GUID)), shallowEqual);
  const balance = fnBalance(product.GUID, relevantProducers, relevantResidences);

  const relevantRoutes = useSelector(state => state.routes.filter(r => r.GUID === product.GUID && (r.sourceIslandId === activeIslandId || r.targetIslandId === activeIslandId)))
  const tradingBalance = relevantRoutes.reduce((sum, r) => sum + r.number * (r.targetIslandId===activeIslandId?-1:1), 0);
*/
  const sharings = useSelector(state => state.sharings.filter(x => x.GUID === product.GUID && x.source === activeIslandId), shallowEqual);
  const relevantIslandIDs = [activeIslandId, ...sharings.map(s => s.target)]
  const relevantProducers = useSelector(state => state.producers.filter(x => relevantIslandIDs.includes(x.islandId) && x.io.find(io => io.good === product.GUID) && x.pState === 'running'), shallowEqual);
  const relevantResidences = useSelector(state => state.residences.filter(x => relevantIslandIDs.includes(x.islandId) && x.hasOwnProperty('needs') && x.needs.find(need => need.good === product.GUID && need.factor > 0 && need.amount > 0)), shallowEqual);
  const balance = sharings.length ? 0 : fnBalance(product.GUID, relevantProducers, relevantResidences)
  const tradingBalance = sharings.length ? fnBalance(product.GUID, relevantProducers, relevantResidences) : 0

  return <ProductMemo balance={balance} tradingBalance={tradingBalance} product={product}/>
}

Product.propTypes = {
  product: PropTypes.object.isRequired,
}

export default (Product)