import React, {Component} from 'react';
import PropTypes from 'prop-types/';
import {Input} from "reactstrap";
import GoodItem from "./GoodItem";
import BuildingInput from "./BuildingInput";

export default class IslandBuildingResources extends Component {
  render() {
    const { resource, island, fnSetBuildingCount, fnSetResourceWantCount } = this.props;

    return (
      <GoodItem resource={resource}>
        <Input
          type='number' bsSize='sm'
          style={{width: 31}}
          className={'mr-2 text-center px-1' + (island.resourceWant[resource.key] <= 0 && island.id === 1 ? ' is-invalid' : '')}
          max={99}
          value={island.resourceWant[resource.key]}
          onChange={e => fnSetResourceWantCount(island.id, resource.key, e.target.value)}
        />
        <BuildingInput
          blend={island.resourceWant[resource.key] - island.buildings[resource.key]}
          // max={1}
          buildingCount={island.buildings[resource.key]}
          buildingKey={resource.key}
          islandId={island.id}
          fnSetBuildingCount={fnSetBuildingCount}
        />
      </GoodItem>
    )
  }
}

IslandBuildingResources.propTypes = {
  resource: PropTypes.object.required,
  island: PropTypes.object.required,
  fnSetBuildingCount: PropTypes.func.required,
  fnSetResourceWantCount: PropTypes.func.required,
};
