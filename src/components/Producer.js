import React, {Component} from 'react';
import PropTypes from 'prop-types/';
import GoodItem from "./GoodItem";
import Chart from "./Chart";
import BuildingInput from "./BuildingInput";

export default class Producer extends Component {
  render() {
    const {producer, island, balance, consumption, fnSetBuildingCount} = this.props;

    return (
      <GoodItem resource={producer}>
        <span className="mr-2">{consumption.toFixed(2)}</span>

        <BuildingInput
          blend={-balance*producer.productionTime/60}
          buildingCount={island.buildings[producer.key]}
          buildingKey={producer.key}
          islandId={island.id}
          fnSetBuildingCount={fnSetBuildingCount}
          max={producer.max}
        />

        <span className="mr-2"><Chart balance={balance}/></span>
      </GoodItem>
    )
  }
}
// let recommendedCount = Math.ceil(consumptionInBuildings);
// let recommendedAdd = Math.ceil(consumptionInBuildings) - island.buildings[producer.key];
// let consumptionInBuildings = island.buildings[producer.key] + balance * producer.productionTime / 60
// <RecommendedAddButton add={recommendedAdd} newValue={recommendedCount} action={() => fnSetBuildingCount(island.id, producer.key, recommendedCount)} />

Producer.propTypes = {
  producer: PropTypes.object.required,
  island: PropTypes.object.required,
  consumption: PropTypes.int,
  balance: PropTypes.int, //.required,
  fnSetBuildingCount: PropTypes.func.required,
};
