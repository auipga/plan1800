import React, {} from 'react';
import PropTypes from 'prop-types';
import {useSelector} from "react-redux";

import ProductMemo from "./ProductMemo";


const Product = (props) => {
  // get island & world
  // const activeWorldId = useSelector(state => state.personal.worldId)
  // const world = worlds.find(w => w.id === activeWorldId)
  // const worldType = worldTypes.find(wt => wt.worldIDs.includes(activeWorldId))
  const activeIslandId = useSelector(state => state.personal.islandId)
  // const island = useSelector(state => state.islands.find(i => i.id === activeIslandId))


  const {product} = props

  const balance = useSelector(state => state.balance.find(x => x.islandId === activeIslandId && x.good === product.GUID))




  // console.log(balance);
  return <ProductMemo balance={balance ? balance.value : 0} product={product}/>
}

Product.propTypes = {
  product: PropTypes.object.isRequired,
}

export default (Product)