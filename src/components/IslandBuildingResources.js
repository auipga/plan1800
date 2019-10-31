import React, { Component } from 'react';
import PropTypes from 'prop-types/';
import {Input} from "reactstrap";
import GoodItem from "./GoodItem";
import {RGB_Log_Blend} from "../functions/color";

export default class IslandBuildingResources extends Component {
  render() {
    const { resource, island, fnSetBuildingCount, fnSetResourceWantCount } = this.props;

    return (
      <GoodItem resource={resource}>
        <Input
          type='number' bsSize='sm'
          max={99}
          style={{width: 31}}
          className={'mr-2 text-center px-1' + (island.resourceWant[resource.key] <= 0 && island.id === 1 ? ' is-invalid' : '')}
          value={island.resourceWant[resource.key]}
          onChange={e => fnSetResourceWantCount(island.id, resource.key, e.target.value)}
        />
        <Input
          type='number' bsSize='sm'
          max={99}
          style={{width: 50,
            backgroundColor:
              RGB_Log_Blend(
                Math.min(Math.max(island.resourceWant[resource.key] - island.buildings[resource.key], 0), 1),
                // 'rgba(100,200,255,0.5)',
                'rgba(100,255,100,0.5)',
                'rgba(255,50,50,0.5)',
              ),
          }}
          className={'mr-2 text-center px-1' + (island.buildings[resource.key] < island.resourceWant[resource.key] ? ' is-invalid' : '')}
          onChange={e => fnSetBuildingCount(island.id, resource.key, e.target.value)}
          value={island.buildings[resource.key]}
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
