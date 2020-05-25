import React from 'react'
import {useSelector} from "react-redux";

import {Row, Col} from "reactstrap";


import worldTypes from "../../../data/worldTypes";
import * as buildings from "../../../data/worldGeneration/buildings";

import Building from "../goods/producer/Building";


const NonProduction = (props) => {
  // get island & world
  const activeWorldId = useSelector(state => state.personal.worldId)
  // const world = worlds.find(w => w.id === activeWorldId)
  const worldType = worldTypes.find(wt => wt.worldIDs.includes(activeWorldId))
  const activeIslandId = useSelector(state => state.personal.islandId)
  // const island = useSelector(state => state.islands.find(i => i.id === activeIslandId))


  // holt sich immer die erste area, sonst noch ein .sort(sortByNumberField('areaId'))
  const firstArea = useSelector(state => state.areas.find(a => a.usage === 'TradeUnion' && a.islandId === activeIslandId),)

  const thisWorld = p => p.worldTypeIds.includes(worldType.id)
  // eslint-disable-next-line no-unused-vars
  const nonProducersOfWorld = buildings.other_producers.filter(thisWorld)

  return (<>
    <Row>
      <Col className='ColProducersOfType' sm={'auto'}>
        {/*<div className='ProducersOfType'>*/}
        {/*  /!*<Icon icon={type} className="buildingtypes"/>*!/*/}
        {/*  {buildings.other_producers.filter(thisWorld).map(p =>*/}
        {/*    <Building key={p.GUID} producer={p} firstArea={firstArea}/>*/}
        {/*  )}*/}
        {/*</div>*/}
        {/*<div className='ProducersOfType'>*/}
        {/*  {buildings.builders.filter(thisWorld).map(p =>*/}
        {/*    <Building key={p.GUID} producer={p} firstArea={firstArea}/>*/}
        {/*  )}*/}
        {/*</div>*/}
        NonProducers
        <div className='ProducersOfType'>
          {buildings.non.filter(thisWorld).map(p =>
            <Building key={p.GUID} producer={p} firstArea={firstArea}/>
          )}
        </div>
      </Col>
    </Row>
  </>)
}

export default NonProduction