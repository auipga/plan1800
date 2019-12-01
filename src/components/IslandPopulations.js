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
  handleWheelDiff = (event, island, tierId, direction) => {
    event.preventDefault()
    if (island.population.present(tierId)) {
      this.props.fnChangePopDiff(event, island, tierId, direction)
    }
  }

  render() {
    const {island, fnChangeResidences, fnSetResidences, fnSetProhibitedNeeds} = this.props;
    let loop={needs:null}

    return (
      <Row>
        {island.population.tiers().map(tierId => {
          let popSum = island.population.get(tierId)
          if (this.props.allPopulation.present(tierId)) {
            popSum += this.props.buff
          }

          let popDiff = island.populationDifference.ofTier(tierId)
          let popDiffText = ''
          if (popDiff > 0) {popDiffText += '\u25B2'+popDiff}
          if (popDiff < 0) {popDiffText += '\u25BC'+(-popDiff)}
          return (
          <Col sm={'auto'} key={tierId}>
            {/*   Eingabe Spalte   */}
            <InputGroup style={{width: 170}}>
              <InputGroupAddon addonType="prepend">
                {island.population.firstTier() === tierId ?
                  <Button color='secondary' className={'py-0 px-1'}
                          onWheel={e => this.handleWheel(e, island, tierId, -Math.sign(e.deltaY), false)}
                          onClick={e => fnChangeResidences(e, island, tierId, +1, false)}
                          onContextMenu={e => {fnChangeResidences(e, island, tierId, -1, false); e.preventDefault()}}
                  >
                    {/*<img src={"./icons/upgrade.png"} alt={"\u25B2"} style={{height: 24, width: 24}}/>*/}
                    <img src={"./icons/population/Workforce_" + tierId + ".png"} alt={tierId} style={{height: 30, width: 30}}/>
                  </Button>
                  :
                  <Button color='secondary' className={'py-0 px-1'}
                          onWheel={e => this.handleWheel(e, island, tierId -1 +(Math.sign(e.deltaY) > 0 ? 1 : 0), -Math.sign(e.deltaY), true)}
                          onClick={e => fnChangeResidences(e, island, tierId - 1, +1, true)}
                          onContextMenu={e => {fnChangeResidences(e, island, tierId, -1, true); e.preventDefault()}}
                  >
                    {/*<img src={"./icons/upgrade.png"} alt={"\u25B2"} style={{height: 24, width: 24}}/>*/}
                    <img src={"./icons/population/Workforce_" + tierId + ".png"} alt={tierId} style={{height: 30, width: 30}}/>
                  </Button>
                }
              </InputGroupAddon>

              <Input
                value={island.residences.get(tierId)}
                className={'text-center px-0'}
                onChange={e => fnSetResidences(island, tierId, e.target.value)}
                onMouseEnter={e => e.target.focus()}
                onWheel={e => this.handleWheel(e, island, tierId, -Math.sign(e.deltaY))}
              />

              <InputGroupAddon addonType="append">
                <InputGroupText className='py-1 px-1' style={{lineHeight: 1.1, minWidth: 52}}>
                  <small className='mx-auto' onWheel={e => this.handleWheelDiff(e, island, tierId, -Math.sign(e.deltaY))}>
                    &times;{island.populationPerResidence.get(tierId)}{popDiffText}<br/>
                    <b>{popSum}</b></small>
                </InputGroupText>
              </InputGroupAddon>
            </InputGroup>
            {/*   Ressourcen - Bedürfnisse   */}
            <div className='mt-1 mb-2 text-center'>
              {needs.filter(n => n.tierIDs.includes(tierId)).map((need, key) => {
                let nextTier = loop.needs !== null && loop.needs !== need.tierIDs[0]
                loop.needs = need.tierIDs[0]
                return (<React.Fragment key={key}>
                  {nextTier ? <hr className={'mt-1 mb-0'}/> : ''}
                  <NeedSwitch
                    need={need}
                    nIndex={need.tierIDs.indexOf(tierId)}
                    needed={island.unlockedNeeds.includes(need.key)}
                    prohibitedNeeds={island.prohibitedNeeds.ofTier(tierId)}
                    fnSetIslandProhibitedNeeds={prohibitedNeeds => fnSetProhibitedNeeds(island, tierId, prohibitedNeeds)}
                  />
                </React.Fragment>)
              })}
            </div>
          </Col>
        )})}
      </Row>
    )
  }
}

IslandPopulations.propTypes = {
  island: PropTypes.object.isRequired,
  fnChangeResidences: PropTypes.func.isRequired,
  fnSetResidences: PropTypes.func.isRequired,
  fnChangePopDiff: PropTypes.func.isRequired,
  fnSetProhibitedNeeds: PropTypes.func.isRequired,
};
