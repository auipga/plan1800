import React, {Component} from 'react';
import PropTypes from 'prop-types/';
import {Button, Col, Input, InputGroup, InputGroupText, InputGroupAddon, Row} from "reactstrap";
import tiers from "../data/tiers";
import needs from "../data/needs";
import NeedSwitch from "./NeedSwitch";

export default class IslandPopulations extends Component {
  handleWheel = (event, island, tierId, direction, move = false) => {
    event.preventDefault()
    this.props.fnChangeResidences(event, island, tierId, direction, move)
  }

  render() {
    const {island, fnChangeResidences, fnSetResidences, fnSetProhibitedNeeds} = this.props;
    let loop={needs:null}

    return (
      <Row>
        {tiers.filter(tier => island.population.has(tier.id)).map((tier, tierKey) => (
          <Col sm={'auto'} key={tier.id}
               className={"" + ((!tier.id || (island.population.ofTier(tier.id) > 0)) ? ' bg-success-' : ' d-none-')}>
            {/*   Eingabe Spalte   */}
            <InputGroup style={{width: 170}}>
              <InputGroupAddon addonType="prepend">
                {island.population.firstTier() === tier.id ?
                  <Button color='secondary' className={'py-1 pl-1 pr-0'}
                          onWheel={e => this.handleWheel(e, island, tier.id, -Math.sign(e.deltaY), false)}
                          onClick={e => fnChangeResidences(e, island, tier.id, +1, false)}
                  >
                    <img src={"./icons/upgrade.png"} alt={"\u25B2"} style={{height: 24, width: 24}}/>
                  </Button>
                  :
                  <Button color='secondary' className={'py-1 pl-1 pr-0'}
                          onWheel={e => this.handleWheel(e, island, tier.id -1 +(Math.sign(e.deltaY) > 0 ? 1 : 0), -Math.sign(e.deltaY), true)}
                          onClick={e => fnChangeResidences(e, island, tier.id - 1, +1, true)}
                  >
                    <img src={"./icons/upgrade.png"} alt={"\u25B2"} style={{height: 24, width: 24}}/>
                  </Button>
                }
                <InputGroupText className={'py-0 px-1'}>
                  <img src={"./icons/population/Workforce_" + (tier.key) + ".png"} alt={tier.id} style={{height: 30, width: 30}}/>
                </InputGroupText>

              </InputGroupAddon>
              <Input
                value={island.residences.get(tier.id)}
                className={'text-center px-0'}
                onChange={e => fnSetResidences(island, tier.id, e.target.value)}
                onMouseEnter={e => e.target.focus()}
                onMouseLeave={e => e.target.blur()}
                onWheel={e => this.handleWheel(e, island, tier.id, -Math.sign(e.deltaY))}
              />
              <InputGroupAddon addonType="append">
                <InputGroupText className='py-1 px-1' style={{lineHeight: 1.1}}>
                  <small>&times;{island.populationPerResidence.get(tier.id)}<br/>=<b>{island.population.get(tier.id)}</b></small>
                </InputGroupText>
              </InputGroupAddon>
            </InputGroup>
            {/*   Ressourcen - Bedürfnisse   */}
            <div className='mt-1 mb-2 text-center'>
              {needs.filter(n => n.tierIDs.includes(tier.id)).map((need, key) => {
                let nextTier = loop.needs !== null && loop.needs !== need.tierIDs[0]
                loop.needs = need.tierIDs[0]
                return (<React.Fragment key={key}>
                  {nextTier ? <hr className={'mt-1 mb-0'}/> : ''}
                  <NeedSwitch
                    need={need}
                    nIndex={need.tierIDs.indexOf(tier.id)}
                    needed={island.unlockedNeeds.includes(need.key)}
                    prohibitedNeeds={island.prohibitedNeeds.ofTier(tier.id)}
                    fnSetIslandProhibitedNeeds={prohibitedNeeds => fnSetProhibitedNeeds(island, tier.id, prohibitedNeeds)}
                  />
                </React.Fragment>)
              })}
            </div>
          </Col>
        ))}
      </Row>
    )
  }
}

IslandPopulations.propTypes = {
  island: PropTypes.object.isRequired,
  fnChangeResidences: PropTypes.func.isRequired,
  fnSetResidences: PropTypes.func.isRequired,
  fnSetProhibitedNeeds: PropTypes.func.isRequired,
};
