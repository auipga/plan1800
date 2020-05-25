import React from "react";
import {useSelector} from "react-redux";

import {Row, Col} from "reactstrap";

import Good from "./Good";

import worldTypes from "../../../../data/worldTypes";
import producers from "../../../../data/producers_old";
import {types} from "../../../../data/goods";



const Stocks = (props) => {
  // get island & world
  const activeWorldId = useSelector(state => state.personal.worldId)
  // const world = worlds.find(w => w.id === activeWorldId)
  const worldType = worldTypes.find(wt => wt.worldIDs.includes(activeWorldId))
  // const activeIslandId = useSelector(state => state.personal.islandId)
  // const island = useSelector(state => state.islands.find(i => i.id === activeIslandId))





  const producersOfWorld = producers.filter(p => p.worldTypeId === worldType.id)

  return (<>
    <Row>
      {types.map(type => (
        <Col key={type}>
          <div className='mb-3 text-center'>
            <img src={"./icons/buildingtypes/" + type + ".png"} alt={type} title={type} className="buildingtypes"/>
          </div>
          {producersOfWorld.filter(p => p.type === type).map((p, key) => (
            <Good key={key} good={p.provides}/>
          ))}
        </Col>
      ))}
    </Row>


  </>)
}

export default Stocks