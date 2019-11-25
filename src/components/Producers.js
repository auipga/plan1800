import React, {Component} from 'react'
import PropTypes from 'prop-types/'
import {Col, Row} from "reactstrap";
import producers from "../data/producers";
import ProducersOfType from "./ProducersOfType";

export default class Producers extends Component {
  render() {
    const {island, fnBalance} = this.props
    let types = [
      "Konsumgüter",
      "Baumaterial",
      "Rohmaterial",
      "Landwirtschaftliche Produkte",
      "Zwischenprodukte",
    ]

    return (
      <Row>
        {/*   Ressourcen - Bedürfnisse   */}
        {/*<Col sm={'auto'}>*/}
        {/*  <h6>Bedürfnisse</h6>*/}

        {/*  {needs.filter((need) => island.unlockedNeeds.includes(need.key) && island.population.has(need.tierIDs[0]) && need.consumption[0] !== 1/1e10).map((need, needKey) => {*/}
        {/*  const producer = producers.find(p => p.provides === need.key && island.population.has(p.tierId))*/}
        {/*    if (!producer) {*/}
        {/*      return need.key*/}
        {/*    }*/}
        {/*  return <Building*/}
        {/*    key={needKey}*/}
        {/*    island={island}*/}
        {/*    producer={producer}*/}
        {/*    balance={fnBalance(producer.provides)}*/}
        {/*    fnSetBuildingCount={this.props.fnSetBuildingCount}*/}
        {/*    trades={this.props.trades}*/}
        {/*    fnTrade={this.props.fnTrade}*/}
        {/*  />*/}
        {/*})}*/}
        {/*</Col>*/}

        {types.filter(t => true || !(["Konsumgüter"].includes(t))).map((type, key) => (
          <Col sm={'auto'} key={key}>
            <ProducersOfType
              title={type.split(" ")[0]}
              type={type}
              island={island}
              trades={this.props.trades}
              fnTrade={this.props.fnTrade}
              unlockedProducers={producers.filter(p => this.props.unlockedProducers.includes(p.key) && island.population.has(p.tierId) )}
              lockedProducers={producers.filter(p => !this.props.unlockedProducers.includes(p.key) && island.population.has(p.tierId) )}
              fnSetBuildingCount={this.props.fnSetBuildingCount}
              fnEnableDisabledBuilding={this.props.fnEnableDisabledBuilding}
              fnBalance={fnBalance}
            />
          </Col>
        ))}
      </Row>
    )
  }
}

Producers.propTypes = {
  island: PropTypes.object.isRequired,
  trades: PropTypes.arrayOf(PropTypes.object).isRequired,
  fnSetBuildingCount: PropTypes.func.isRequired,
  fnEnableDisabledBuilding: PropTypes.func.isRequired,
  fnBalance: PropTypes.func.isRequired,
  unlockedProducers: PropTypes.array.isRequired,
}
