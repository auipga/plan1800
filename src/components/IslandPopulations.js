import React, {Component} from 'react';
import PropTypes from 'prop-types/';
import {Button, ButtonGroup, Col, Input, InputGroup, InputGroupAddon, Row} from "reactstrap";
import tiers from "../data/game/tiers";
import worlds from "../data/game/worlds";
import {trans} from "../functions/translation";
import CardHeader from "reactstrap/es/CardHeader";

export default class IslandPopulations extends Component {
  render() {
    const { island, fnChangePopulationLevel, fnSetPopulationLevel, fnHandleWheel } = this.props;

    return (
      <CardHeader>
        <Row>
          {tiers
            .filter(
              tier => worlds.find(w => w.id === island.world).socialClassIDs
                .find(tierId => tierId === tier.id))
            .map((tier, tierKey) => (
            <Col xs={12} sm={6} md={4} lg={3} xl={''} key={tierKey}
                 style={{maxWidth: '20%'}}
                 className={"align-content-center" + ((!tierKey || (island.population.level[tierKey] > 0)) ? ' bg-success-' : ' d-none-')}>
              <Row className={'align-items-end'}>
                {/*   Eingabe Spalte   */}
                <Col className=''>
                  <img src={"./icons/population/Workforce_" + (tier.key) + ".png"} alt="" className="d-block mx-auto rounded" style={{height: 40, width: 40}}/>
                  {/*<Col xs={12} sm={10} md={6} lg={4} key={tierKey}>*/}
                  {/*<PopulationItem tier={this.populationLevels[tierKey]} tierKey={tierKey} />*/}
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <Button onClick={() => fnChangePopulationLevel(island.id, tierKey, -1)} color='secondary'>-</Button>
                    </InputGroupAddon>
                    <Input placeholder={trans(tier)} title={trans(tier)}
                           value={island.population.level[tierKey]}
                           style={{height: 62}}
                           className={'text-center'}
                      // readOnly
                           onChange={e => fnSetPopulationLevel(island.id, tierKey, e.target.value)}
                           onWheel={e => fnHandleWheel(e, island.id, tierKey, -Math.sign(e.deltaY))}
                    />
                    <InputGroupAddon addonType="append">
                      <Button onClick={() => fnChangePopulationLevel(island.id, tierKey, +1)} color='secondary'>+</Button>
                    </InputGroupAddon>
                  </InputGroup>
                </Col>
                {/*   Upgrade Spalte   */}
                <Col className={'col-auto ' + ((tier.id === worlds.find(w => w.id === island.world).socialClassIDs.slice(-1)[0]) ? ' bg-warning invisible' : '')}
                     onWheel={e => fnHandleWheel(e, island.id, tierKey + (Math.sign(e.deltaY) > 0 ? 1 : 0), -1, true, -Math.sign(e.deltaY))}
                >
                  <ButtonGroup vertical size='sm'>
                    <Button onClick={() => fnChangePopulationLevel(island.id, tierKey + 0, -1, true, +1)} color='primary'>&raquo;</Button>
                    <Button onClick={() => fnChangePopulationLevel(island.id, tierKey + 1, -1, true, -1)} color='warning'>&lsaquo;</Button>
                  </ButtonGroup>
                </Col>
              </Row>
            </Col>
          ))}
        </Row>
      </CardHeader>
    )
  }
}

IslandPopulations.propTypes = {
  island: PropTypes.object.required,
  fnChangePopulationLevel: PropTypes.func.required,
  fnSetPopulationLevel: PropTypes.func.required,
  fnHandleWheel: PropTypes.func.required,
};
