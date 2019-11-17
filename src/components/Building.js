import React, {Component} from 'react';
import PropTypes from 'prop-types/';
import GoodItem from "./GoodItem";
import BuildingInput from "./BuildingInput";
import Chart from "./Chart";
import RecommendedAddButton from "./RecommendedAddButton";
import Trading from "./Trading";

export default class Building extends Component {
  render() {
    const {producer, island, balance, fnSetBuildingCount} = this.props
    const {trades} = this.props

    let buildingBalance, recommendedCount, recommendedAdd = 0
    let max = undefined

    buildingBalance = balance*producer.productionTime/60
    // recommendedCount = Math.ceil(island.buildings[producer.key] - buildingBalance);
    // recommendedAdd = recommendedCount - island.buildings[producer.key];

    if (producer.needs.includes("deposit")) {
      max = island.regionalResources[producer.key]
    }
    if (producer.needs.includes("otherWorld")
      // || !worlds.find(w => w.id === this.props.island.worldId).socialClassIDs.includes(producer.tierId)
      || (producer.needs.includes("fertility") && !island.fertilities.includes(producer.provides))
    ) {
      max = 0
    }

    return (
      <label htmlFor={"input_"+producer.key} className='d-block mb-1'
             onContextMenu={(e) => {fnSetBuildingCount(island, producer, null); e.preventDefault()}}
      >
      <GoodItem producer={producer}>
            <BuildingInput
              blend={-buildingBalance}
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
        <Trading
          island={island}
          good={producer.provides}
          balance={balance}
          trades={trades.filter(r => r.good === producer.provides && (r.from === island.id || r.to === island.id || r.from === null || r.to === null))}
          fnTrade={this.props.fnTrade}
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
};
