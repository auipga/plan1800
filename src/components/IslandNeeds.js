import React, {Component} from 'react';
import PropTypes from 'prop-types/';
import GoodItem from "./GoodItem";
import BuildingInput from "./BuildingInput";
import Chart from "./Chart";
import producers from "../data/game/producers";
import Input from "reactstrap/es/Input";

export default class IslandNeeds extends Component {
  render() {
    const { need, island, exactNeed, balance, fnSetBuildingCount } = this.props;

    let producer = producers.find(p => p.provides === need.key);

    return (
      <GoodItem resource={need}>
        {!producer ?
          <Input
            type='checkbox'
            checked={island.buildings[need.key]}
            onChange={e => fnSetBuildingCount(island.id, need.key, e.target.checked ? 1 : 0)}
          />
          : <>
            <span className="mr-2">{exactNeed.toFixed(2)}</span>{/** @todo remove? */}

            <BuildingInput
              blend={exactNeed - island.buildings[need.key]}
              buildingCount={island.buildings[need.key]}
              buildingKey={need.key}
              islandId={island.id}
              fnSetBuildingCount={fnSetBuildingCount}
            />
            <span className="mr-2"><Chart balance={island.buildings[need.key] - exactNeed}/></span>{/** @todo remove? */}
            {/*<span className="mr-2"><Chart balance={balance*producer.productionTime/60}/></span>/!** @todo remove? *!/*/}
            <span className="mr-2"><Chart balance={balance} max={3}/></span>
          </>
        }
      </GoodItem>
    )
  }
}

IslandNeeds.propTypes = {
  need: PropTypes.object.required,
  island: PropTypes.object.required,
  exactNeed: PropTypes.int,/** @todo remove? */
  balance: PropTypes.int, //.required,
  fnSetBuildingCount: PropTypes.func.required,
};
