import React from 'react'
import {useSelector} from "react-redux";

import {Row, Col} from "reactstrap";


import worldTypes from "../../../../data/worldTypes";
import {producers} from "../../../../data/worldGeneration/buildings";

// eslint-disable-next-line no-unused-vars
import Stocks from "../stock/Stocks";
import ProducersOfType from "./ProducersOfType";
import {productTypes} from "../../../../data/goods";


const Producers = (props) => {
  // get island & world
  const activeWorldId = useSelector(state => state.personal.worldId)
  // const world = worlds.find(w => w.id === activeWorldId)
  const worldType = worldTypes.find(wt => wt.worldIDs.includes(activeWorldId))
  const activeIslandId = useSelector(state => state.personal.islandId)
  // const island = useSelector(state => state.islands.find(i => i.id === activeIslandId))


  // holt sich immer die erste area, sonst noch ein .sort(sortByNumberField('areaId'))
  const firstArea = useSelector(state => state.areas.find(a => a.usage === 'TradeUnion' && a.islandId === activeIslandId),)

  const producersOfWorld = producers.filter(p => p.hasOwnProperty('worldTypeIds') && p.worldTypeIds.includes(worldType.id))

  return (<>
    <Row>
{/*
      <Col className='ColStocks'>
        <Stocks/>
      </Col>
*/}

      {productTypes.map(type => (
        <Col className='ColProducersOfType' sm={false && type==='Konsumgüter' ? '' : 'auto'} key={type}>
        {/*<Col className='ColProducersOfType' sm={type==='Konsumgüter' ? '' : 'auto'} key={type}>*/}
        {/*<Col className='ColProducersOfType' sm={'auto'} key={type}>*/}
          <ProducersOfType type={type} firstArea={firstArea} producers={producersOfWorld.filter(p => p.type === type)} />
          { /* && p.tierId === worldType.socialClassIDs[0]*/}
        </Col>
      ))}
    </Row>
  </>)
}

export default Producers