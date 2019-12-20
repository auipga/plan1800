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
        {types.map((type, key) => (
          <Col sm={'auto'} key={key}>
            <ProducersOfType
              type={type}
              island={island}
              islands={this.props.islands}
              tradeSyncs={this.props.tradeSyncs}
              fnTradeSync={this.props.fnTradeSync}
              unlockedProducers={producers.filter(p => this.props.unlockedProducers.includes(p.key) && island.population.has(p.tierId) )}
              lockedProducers={producers.filter(p => !this.props.unlockedProducers.includes(p.key) && island.population.has(p.tierId) )}
              fnSetBuildingCount={this.props.fnSetBuildingCount}
              electricity={this.props.unlockedProducers.includes("Electricity")}
              fnSetWithElectricity={this.props.fnSetWithElectricity}
              fnEnableDisabledBuilding={this.props.fnEnableDisabledBuilding}
              fnBalance={fnBalance}
              fnSetProductivityBoost={this.props.fnSetProductivityBoost}
            />
          </Col>
        ))}
      </Row>
    )
  }
}

Producers.propTypes = {
  island: PropTypes.object.isRequired,
  islands: PropTypes.arrayOf(PropTypes.object).isRequired,
  tradeSyncs: PropTypes.arrayOf(PropTypes.object).isRequired,
  fnTradeSync: PropTypes.func.isRequired,
  fnSetBuildingCount: PropTypes.func.isRequired,
  fnSetWithElectricity: PropTypes.func.isRequired,
  fnEnableDisabledBuilding: PropTypes.func.isRequired,
  fnBalance: PropTypes.func.isRequired,
  unlockedProducers: PropTypes.array.isRequired,
  fnSetProductivityBoost: PropTypes.func.isRequired,
}
