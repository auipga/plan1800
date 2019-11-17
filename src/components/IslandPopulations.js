import React, {Component} from 'react';
import PropTypes from 'prop-types/';
import {Button, ButtonGroup, Col, Input, InputGroup, InputGroupAddon, Row} from "reactstrap";
import tiers from "../data/tiers";
import worlds from "../data/worlds";
import needs from "../data/needs";
import {trans} from "../functions/translation";
import NeedSwitch from "./NeedSwitch";

export default class IslandPopulations extends Component {
  handleWheel = (event, island, tierId, direction, move = false) => {
    event.preventDefault()
    this.props.fnChangePopulation(island, tierId, direction, move)
  }

  render() {
    const {island, fnChangePopulation, fnSetPopulation, fnSetProhibitedNeeds} = this.props;
    let loop={needs:null}

    return (
        <Row>
          {tiers
            .filter(tier => worlds.find(w => w.id === island.worldId).socialClassIDs.find(tierKey => tierKey === tier.id))
            .map((tier, tierKey) => (
            <Col xs={12} sm={6} md={4} lg={3} xl={''} key={tier.id}
                 style={{maxWidth: '20%'}}
                 className={"align-content-center" + ((!tier.id || (island.population.ofTier(tier.id) > 0)) ? ' bg-success-' : ' d-none-')}>
              <Row className={'align-items-end'}>
                {/*   Eingabe Spalte   */}
                <Col className=''>
                  <img src={"./icons/population/Workforce_" + (tier.key) + ".png"} alt="" className="d-block mx-auto rounded" style={{height: 40, width: 40}}/>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      {/*eslint-disable-next-line*/}
                      <Button onClick={() => fnChangePopulation(island, tier.id, -1)} color='secondary'>&#10134;{/*icon-minus*/}</Button>
                    </InputGroupAddon>
                    <Input placeholder={trans(tier)} title={trans(tier)}
                           value={island.population.get(tier.id)}
                           style={{height: 56}}
                           className={'text-center'}
                      // readOnly
                           onChange={e => fnSetPopulation(island, tier.id, e.target.value)}
                           onWheel={e => this.handleWheel(e, island, tier.id, -Math.sign(e.deltaY))}
                    />
                    <InputGroupAddon addonType="append">
                      {/*eslint-disable-next-line*/}
                      <Button onClick={() => fnChangePopulation(island, tier.id, +1)} color='secondary'>&#10133;{/*icon-plus*/}</Button>
                    </InputGroupAddon>
                  </InputGroup>
                  {/*   Ressourcen - Bedürfnisse   */}
                  <hr className={'mt-3 mb-2'}/>
                  <div className='text-center'>
                    {needs.filter(n => n.tierIDs.includes(tier.id) && n.consumption[0] !== 1/1e10).map((need, key) => {
                      let nextTier = loop.needs !== null && loop.needs !== need.tierIDs[0]
                      loop.needs = need.tierIDs[0]
                      return (<React.Fragment key={key}>
                        {nextTier ? <hr className={'mt-1 mb-0'}/> : ''}
                        <NeedSwitch
                          needKey={need.key}
                          needed={island.unlockedNeeds.includes(need.key)}
                          prohibitedNeeds={island.prohibitedNeeds.ofTier(tier.id)}
                          fnSetIslandProhibitedNeeds={prohibitedNeeds => fnSetProhibitedNeeds(island, tier.id, prohibitedNeeds)}
                        />
                      </React.Fragment>)
                    })}
                  </div>
                </Col>
                {/*   Upgrade Spalte   */}
                <Col className={'col-auto ' + ((tier.id === worlds.find(w => w.id === island.worldId).socialClassIDs.slice(-1)[0]) ? ' bg-warning invisible' : '')}
                     onWheel={e => this.handleWheel(e, island, tier.id+(Math.sign(e.deltaY) > 0 ? 1 : 0), -Math.sign(e.deltaY), true)}
                >
                  <ButtonGroup vertical size='sm'>
                    <Button onClick={() => fnChangePopulation(island, tier.id + 0, +1, true)} color='primary'>
                      <img src="./icons/upgrade.png" alt=""
                           style={{height: 24, width: 24}}
                      />
                    </Button>
                    <Button onClick={() => fnChangePopulation(island, tier.id + 1, -1, true)} color='warning'
                      className={'py-0'}>&#10094;{/*icon-arrow left*/}</Button>
                  </ButtonGroup>
                </Col>
              </Row>
            </Col>
            ))
          }
        </Row>
    )
  }
}

IslandPopulations.propTypes = {
  island: PropTypes.object.isRequired,
  fnChangePopulation: PropTypes.func.isRequired,
  fnSetPopulation: PropTypes.func.isRequired,
  fnSetProhibitedNeeds: PropTypes.func.isRequired,
};
