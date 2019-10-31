import React, {Component} from 'react';
import PropTypes from 'prop-types/';
import GoodItem from "./GoodItem";
import Chart from "./Chart";
import BuildingInput from "./BuildingInput";

export default class Producer extends Component {
  render() {
    const {producer, island, consumption, fnSetBuildingCount} = this.props;

    return (
      <GoodItem resource={producer}>
        <span className="mr-2">{consumption.toFixed(2)}</span>

        <BuildingInput
          // blend={-consumption2}
          blend={consumption - island.buildings[producer.key]}
          buildingCount={island.buildings[producer.key]}
          buildingKey={producer.key}
          islandId={island.id}
          fnSetBuildingCount={fnSetBuildingCount}
          max={producer.max}
        />

      </GoodItem>
    )
  }
}

Producer.propTypes = {
  producer: PropTypes.object.required,
  island: PropTypes.object.required,
  consumption: PropTypes.int,
  fnSetBuildingCount: PropTypes.func.required,
};
