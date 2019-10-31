import React, {Component} from 'react';
import PropTypes from 'prop-types/';
import GoodItem from "./GoodItem";
import BuildingInput from "./BuildingInput";

export default class IslandNeeds extends Component {
  render() {
    const { need, island, exactNeed, fnSetBuildingCount } = this.props;

    return (
      <GoodItem resource={need}>
        <span className="mr-2">{exactNeed.toFixed(2)}</span>

        <BuildingInput
          blend={exactNeed - island.buildings[need.key]}
          buildingCount={island.buildings[need.key]}
          buildingKey={need.key}
          islandId={island.id}
          fnSetBuildingCount={fnSetBuildingCount}
        />
      </GoodItem>
    )
  }
}

IslandNeeds.propTypes = {
  need: PropTypes.object.required,
  island: PropTypes.object.required,
  exactNeed: PropTypes.int,
  fnSetBuildingCount: PropTypes.func.required,
};
