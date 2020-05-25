/* eslint-disable no-unused-vars */
import React from 'react'
import {useSelector} from "react-redux";

import {Card, CardHeader, Col, Row} from "reactstrap";

import WorldBar from "./WorldBar";
import IslandBar from "./IslandBar";

import Todo from "../debug/Todo";
import Debug from "../debug/Debug";
import Paypal from "./Paypal";
import LoadSave from "./LoadSave";
import ThemeButton from "../ThemeButton";
import FullscreenButton from "./FullscreenButton";
import MultiplayerButton from "./MultiplayerButton";

// import ExpeditionBar from "./ExpeditionBar";
import {isDE} from "../../data/translation/texts";


const Header = (props) => {
  const donated = useSelector(state => state.debug).includes('donated')
  const {activeModule} = props


  return (
    <Card className="HeaderCard">
      <CardHeader>
        <Row>

          <Col>
            {activeModule === 'islands' && <WorldBar/>}
            {activeModule !== 'islands' && <h1>plan1800</h1>}
          </Col>

          <Col sm='auto' className='hidden-sm-down'>
            {activeModule === 'islands' && isDE && <Paypal/>}
            <Todo/>
            {activeModule === 'islands' && donated && <Debug/>}
          </Col>

          <Col className='mr-n2 text-right '>
            {activeModule === 'islands' && <MultiplayerButton/>}
            <LoadSave/>
            <FullscreenButton/>
            <ThemeButton/>
          </Col>

        </Row>
        <Row className="mt-2">
          <Col>
            {activeModule === 'islands' && <IslandBar/>}
            {/*{activeModule === 'expeditions' && <ExpeditionBar/>}*/}
          </Col>
        </Row>
      </CardHeader>
    </Card>
  )
}

export default Header