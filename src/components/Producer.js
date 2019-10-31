import React, {Component} from 'react';
import PropTypes from 'prop-types/';
import {Input} from "reactstrap";
import GoodItem from "./GoodItem";
import Chart from "./Chart";
import {RGB_Log_Blend} from "../functions/color";

export default class Producer extends Component {
  render() {
    const {producer, island, consumption, fnSetBuildingCount} = this.props;

    return (
      <GoodItem resource={producer}>
        <span className="mr-2">{consumption.toFixed(2)}</span>

        <Input
          type='number' bsSize='sm'
          value={island.buildings[producer.key]}
          max={producer.max ? producer.max : 99}
          style={{
            width: 50,
            backgroundColor:
              RGB_Log_Blend(
                Math.min(Math.max(consumption - island.buildings[producer.key], 0), 1),
                // 'rgba(100,200,255,0.5)',
                'rgba(100,255,100,0.5)',
                'rgba(255,50,50,0.5)',
              ),
          }}
          className={
            'mr-2 text-center px-1'
            + (consumption > island.buildings[producer.key] ? ' is-invalid' : '')
            + (consumption < island.buildings[producer.key] ? ' border-primary' : '')
          }
          onChange={e => fnSetBuildingCount(island.id, producer.key, e.target.value)}
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
