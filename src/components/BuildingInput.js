import React, {Component} from 'react';
import PropTypes from 'prop-types/';
import {Input} from "reactstrap";
import {RGB_Log_Blend} from "../functions/color";

export default class BuildingInput extends Component {
  render() {
    const { blend, islandId, buildingCount, buildingKey, max, fnSetBuildingCount } = this.props;

    if (max === 0) {
      return (
        <Input id={"input_" + buildingKey}
               type='text'
               bsSize='sm'
               style={{width: 50}}
               className={'mr-2 text-center px-1'}
               value='&#10060;' // emoji :-(
               disabled={true}
        />
      )
    }

    return (
      <Input id={"input_"+buildingKey}
        type='number'
        bsSize='sm'
        style={{
          width: 50,
          backgroundColor:
            RGB_Log_Blend(
              Math.min(Math.max(blend, 0), 1),
              // 'rgba(100,200,255,0.5)',
              'rgba(100,255,100,0.5)',
              'rgba(255,50,50,0.5)',
            ),
        }}
        className={
          'mr-2 text-center px-1'
          + (blend > 0 ? ' is-invalid' : '')
          + (blend < 0 ? ' border-primary' : '')
        }
        max={max !== undefined ? max : 99}
        value={buildingCount}
        onChange={e => fnSetBuildingCount(islandId, buildingKey, e.target.value)}
      />
    )
  }
}

BuildingInput.propTypes = {
  blend: PropTypes.int,
  islandId: PropTypes.int,
  buildingCount: PropTypes.int,
  buildingKey: PropTypes.string,
  max: PropTypes.int,
  fnSetBuildingCount: PropTypes.func,
};
