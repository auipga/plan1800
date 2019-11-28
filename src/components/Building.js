import React, {Component} from 'react';
import PropTypes from 'prop-types/';
import GoodItem from "./GoodItem";
import BuildingInput from "./BuildingInput";
import Chart from "./Chart";
import RecommendedAddButton from "./RecommendedAddButton";
import BuildingContextMenu from "./BuildingContextMenu";

export default class Building extends Component {
  render() {
    const {producer, island, balance, fnSetBuildingCount} = this.props

    let buildingBalance, recommendedCount, recommendedAdd = 0
    let max = undefined

    buildingBalance = balance*producer.productionTime/60
    // recommendedCount = Math.ceil(island.buildings[producer.key] - buildingBalance);
    // recommendedAdd = recommendedCount - island.buildings[producer.key];

    if (producer.needs.includes("deposit")) {
      max = island.regionalResources[producer.key]
    }
    if (producer.needs.includes("otherWorld")
      || (producer.needs.includes("fertility") && !island.fertilities.includes(producer.provides))
    ) {
      max = 0
    }

    this.trades = this.props.trades.filter(r => r.good === producer.provides && (r.from === island.id || r.to === island.id || r.from === null || r.to === null));
    this.removable = !island.buildings[producer.key] && !this.trades.length && !balance

    return (
      <label htmlFor={"input_"+producer.key} className='d-block mb-1'
             onContextMenu={(e) => {e.preventDefault(); this.removable ? fnSetBuildingCount(island, producer, null) : console.log('in use.') }}
      >
        <GoodItem producer={producer}>
          <BuildingInput
            blend={-buildingBalance}
            boost={this.props.productivity > 100 ? 'up' : this.props.productivity < 100 ? 'down' : null }
            buildingCount={island.buildings[producer.key]}
            buildingKey={producer.key}
            islandId={island.id}
            fnSetBuildingCount={number => fnSetBuildingCount(island, producer, number)}
            max={max}
          />

          <span className="mr-2"><Chart balance={balance} max={3}/></span>
          {max === 0 || recommendedCount > max ? '' :
            <RecommendedAddButton add={recommendedAdd} action={() => fnSetBuildingCount(island, producer, recommendedCount)} />
          }
          <BuildingContextMenu
            island={island}
            good={producer.provides}
            balance={balance}
            trades={this.trades}
            fnTrade={this.props.fnTrade}
            productivity={this.props.productivity}
            fnProductivity={(productivity) => this.props.fnSetProductivity(island, producer, productivity)}
          />
        </GoodItem>
      </label>
    )
  }
}

Building.propTypes = {
  producer: PropTypes.object.isRequired,
  island: PropTypes.object.isRequired,
  balance: PropTypes.number.isRequired,
  fnSetBuildingCount: PropTypes.func.isRequired,
  trades: PropTypes.arrayOf(PropTypes.object).isRequired,
  fnTrade: PropTypes.func.isRequired,
  productivity: PropTypes.number.isRequired,
  fnSetProductivity: PropTypes.func.isRequired,
};
