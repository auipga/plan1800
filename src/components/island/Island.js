/* eslint-disable no-unused-vars */
import React from 'react'
// import PropTypes from "prop-types";
import {useDispatch, useSelector} from "react-redux";

import {Card, CardHeader, CardBody, Row, Col, Collapse, Button} from "reactstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import Iconss from "../debug/Iconss";
import DeleteIslandButton from "./DeleteIslandButton";
import CultureMenus from "./culture/CultureMenus";
import CultureMenu from "./culture/CultureMenu";
import Fertilities from "./fertilities/Fertilities";
import IslandPopulation from "./population/IslandPopulation";
import IslandPopulationHeader from "./population/IslandPopulationHeader";
import Producers from "./goods/producer/Producers";
// import IslandNeeds from "./workforce/IslandNeeds";
// import Needs from "../needs/Needs";
import ProductionHeader from "./goods/ProductionHeader";
// import NonProductionHeader from "./nonproduction/NonProductionHeader";
// import NonProduction from "./nonproduction/NonProduction";

import {text_plan} from "../../data/translation/texts";


const Island = (props) => {
  const debug = useSelector(state => state.debug)


  // get island & world
  const activeWorldId = useSelector(state => state.personal.worldId)
  // const world = worlds.find(w => w.id === activeWorldId)
  // const worldType = worldTypes.find(wt => wt.worldIDs.includes(activeWorldId))
  const activeIslandId = useSelector(state => state.personal.islandId)
  const island = useSelector(state => state.islands.find(i => i.id === activeIslandId))


  const collapsed = useSelector(state => state.personal.collapsed)

  const islandInThisWorld = useSelector(state => state.islands.find(i => i.worldId === activeWorldId))

  if (!islandInThisWorld) {
    return text_plan('create-island-hint')
  }
  if (!island) {
    return text_plan('island-deleted-hint')
  }


  return (<>
    {debug.includes('show_iconss') && <Iconss/>}
    <Card className="Island-Card">
      {/*   ...   */}
      <CardHeader className="Island-Header">
        <Row>
          <Col className='pr-0'>
            <Fertilities/>
          </Col>
          {/*<Col className={'pl-0'}>*/}
          {/*</Col>*/}
          <Col className={'pl-0'} sm={'auto'}>
            <CultureMenu/>
            <DeleteIslandButton/>
          </Col>
        </Row>
      </CardHeader>

      {/*   Bevölkerungsstufen   */}
      <CardHeader>
        <IslandPopulationHeader isExpanded={!collapsed.includes('Population')}/>
      </CardHeader>
      <Collapse isOpen={!collapsed.includes('Population')} className="Population">
        <CardBody className='pt-2'>
          {/*<IslandNeeds/>*/}
          {/*<div className="d-inline-block mr-1"></div>*/}
          <IslandPopulation/>
        </CardBody>
      </Collapse>

      {/*   Elektrizität & Wärme   & öffentliche   */}
{/*
      <CardHeader>
        <NonProductionHeader isExpanded={!collapsed.includes('NonProduction')}/>
      </CardHeader>
      <Collapse isOpen={!collapsed.includes('NonProduction')} className="NonProduction">
        <CardBody className='pt-2'>
          <NonProduction/>
        </CardBody>
      </Collapse>
*/}

      {/*   Lager & Produktion   */}
      <CardHeader>
        <ProductionHeader isExpanded={!collapsed.includes('Production')}/>
      </CardHeader>
      <Collapse isOpen={!collapsed.includes('Production')} className="Production">
        <CardBody className='pt-2'>
          <Producers/>
        </CardBody>
      </Collapse>
    </Card>
  </>)
}

Island.propTypes = {
  // world: PropTypes.object.isRequired,
  // island: PropTypes.object.isRequired,
};

export default Island
