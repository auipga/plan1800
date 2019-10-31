import React, {Component} from 'react';
import PropTypes from 'prop-types/';
import {Input} from "reactstrap";
import GoodItem from "./GoodItem";
import {RGB_Log_Blend} from "../functions/color";

export default class IslandNeeds extends Component {
  render() {
    const { need, island, exactNeed, fnSetBuildingCount } = this.props;

    return (
      <GoodItem resource={need}>
        <span className="mr-2">{exactNeed.toFixed(2)}</span>

        <Input
          type='number' bsSize='sm'
          max={99}
          style={{width: 50,
            backgroundColor:
              RGB_Log_Blend(
                Math.min(Math.max(exactNeedF - island.buildings[need.key], 0), 1),
                // 'rgba(100,200,255,0.5)',
                'rgba(100,255,100,0.5)',
                'rgba(255,50,50,0.5)',
              ),
          }}
          className={
            'mr-2 text-center px-1'
            + (exactNeedF > island.buildings[need.key] ? ' is-invalid' : '')
            + (exactNeedF < island.buildings[need.key] ? ' border-primary' : '')
          }
          onChange={e => fnSetBuildingCount(island.id, need.key, e.target.value)}
          value={island.buildings[need.key]}
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
