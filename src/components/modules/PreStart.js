import React from "react";
import {useDispatch} from "react-redux";

import {Jumbotron, Button, Row, Col} from "reactstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import * as personalSlice from "../../features/personalSlice";
import track from "../../functions/tracking";


const PreStart = () => {
  const dispatch = useDispatch()
  const moduleSetup = () => {
    track.data('Start game setup')
    dispatch(personalSlice.upsert({module: 'start'}))
  }


  return (
    <div>
      <Jumbotron>
        <Row>
          <Col>
            <div className="lead">
              <img src="Screenshot%20from%202020-03-07%2022-23-56.png" alt="" style={{width: 260, height: 260}} className='float-left mr-4 img-thumbnail'/>
              <h1 className="display-5">Neuauflage - Work in Progress (WIP)</h1>
              <p>
                Wenn du <strong><u>Handelskammern</u></strong> und <strong><u>Items</u></strong> nutzen möchtest, bist du hier genau richtig.
              </p>
              <p>
                <Button onClick={moduleSetup} color="primary" size='lg'>Starten</Button>
              </p>
              <p>
                Viele Features sind geplant oder in der Umsetzung. Details hierzu und eine Changelog findest du auf diesem
                Button: <Button id={'popover_Todo'} type='button' size='sm' color='success' outline><FontAwesomeIcon icon='clipboard-list'/></Button>.
              </p>
              <p>
                WIP, das bedeutet für dich: Du kannst die neuesten Funktionen ausprobieren. Aber es kann auch sein, dass nicht alles rund läuft.
                Zudem sind noch nicht alle Features des stabilen Rechners implementiert.
              </p>
            </div>
          </Col>
        </Row>

        <hr/>

        <Row>
          <Col>
            <div className="lead">
              <img src="Screenshot%20from%202020-03-07%2022-19-00.png" alt="" style={{width: 260, height: 260}} className='float-left mr-4 img-thumbnail'/>
              <h1 className="display-5">plan1800 - stable</h1>
              Wenn du einen <u>stabilen</u> Calculator suchst, dann wechsle bitte zu dieser Version: <a
              href="../stable/" className='text-nowrap btn btn-success py-0'
              title='manueltransfeld.de/public/projects/plan1800/stable/'>klick</a>. Dort findest du auch Unterstützung bei der <u>Expeditionsvorbereitung</u>,
              Fruchtbarkeiten und kannst den Verbrauch von Waren verbieten. <br/>
              <i>Dieser Rechner wird nicht mehr weiterentwickelt.</i><br/>
              <i>Bugs: Die Bedürfniss-Werte in der Arktis sind falsch.</i>
            </div>
          </Col>
        </Row>

      </Jumbotron>
    </div>
  )
}

export default PreStart