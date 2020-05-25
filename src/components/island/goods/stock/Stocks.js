import React, {useState} from "react";
import {useSelector} from "react-redux";

import {Button} from "reactstrap";

import Icon from "../../../Icon";
import Product from "./Product";

import worldTypes from "../../../../data/worldTypes";
import goods, {productTypes} from "../../../../data/goods";



const Stocks = (props) => {
  // get island & world
  const activeWorldId = useSelector(state => state.personal.worldId)
  // const world = worlds.find(w => w.id === activeWorldId)
  const worldType = worldTypes.find(wt => wt.worldIDs.includes(activeWorldId))
  // const activeIslandId = useSelector(state => state.personal.islandId)
  // const island = useSelector(state => state.islands.find(i => i.id === activeIslandId))


  // const producersOfWorld = producers.filter(p => p.worldTypeId === worldType.id)
  const goodsInWorld = goods.filter(g => g.worldTypeIds.includes(worldType.id))

  const allAndType = ['all_goods', ...productTypes];

  const [filter, setFilter] = useState([]);
  const handleClick = (e, type) => {
    e.currentTarget.blur()

    // reset
    if (type === 'all_goods') {
      setFilter([])
    }

    // set single
    else if (!e.ctrlKey) {
      setFilter([type])
    }

    // modify
    else {
      // all but one type
      if (!filter.length) {
        setFilter(productTypes.filter(f => f !== type))
      }
      // remove type
      else if (filter.includes(type)) {
        setFilter(filter.filter(f => f !== type))
      }
      // add type
      else {
        setFilter([...filter, type])
      }
    }
  }


  return (<>
    <div className='text-nowrap mb-3'>
      {allAndType.map(type => (
        <Button
          key={type}
          className='sm'
          active={(!filter.length && type === 'all_goods') || filter.includes(type)}
          onClick={e => handleClick(e, type)}
        >
          <Icon icon={type} className="buildingtypes"/>
        </Button>
      ))}
    </div>

    <div>
      {goodsInWorld.filter(g => !filter.length || filter.includes(g.type)).map(product => (
        <Product key={product.GUID} product={product}/>
      ))}
    </div>
  </>)
}

export default Stocks