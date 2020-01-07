import React, {Component} from 'react';
import PropTypes from 'prop-types/';
import GoodItem from "./GoodItem";
import {Button} from "reactstrap"
import BuildingInput from "./BuildingInput";
import Chart from "./Chart";
import classNames from 'classnames'
import RecommendedAddButton from "./RecommendedAddButton";
import BuildingContextMenu from "./BuildingContextMenu";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default class Building extends Component {
  render() {
    const {producer, island, balance, fnSetBuildingCount} = this.props

    let buildingBalance, recommendedCount, recommendedAdd = 0
    let max = undefined

    const buildingCount = island.buildings[producer.key]

    buildingBalance = balance*producer.productionTime/60
    // recommendedCount = Math.ceil(buildingCount - buildingBalance);
    recommendedAdd = recommendedCount - buildingCount;

    if (producer.needs.includes("deposit")) {
      max = island.regionalResources[producer.key]
    }
    if (producer.needs.includes("otherWorld")
      || (producer.needs.includes("fertility") && !island.fertilities.includes(producer.provides))
    ) {
      max = 0
    }

    const canEletrified = !(
      producer.type === "Landwirtschaftliche Produkte"
      || producer.key === "Wood"
      || producer.key === "Fish"
      || producer.key === "Electricity"
      || producer.key === "Oil"
      || producer.tierId > 5
      || producer.needs.includes("otherWorld") // fake building, used as trade receiver only
    )

    const buildingsWithElectricity = island.buildingsWithElectricity[producer.key]
    const e_all = buildingsWithElectricity === "all"
    const e_all2 = buildingsWithElectricity === buildingCount && buildingCount > 0
    const e_some = buildingsWithElectricity > 0
    let electricityIcon = null
    if (e_all || e_all2 || e_some/*canEletrified*/) {
      const hasElectricity = island.buildings["Electricity"] > 0

      electricityIcon = <img src={"./icons/Electricity_on.png"} alt="" className={'electricity-icon '+
        classNames({
          'el-on': e_all || e_all2 || e_some,
          'el-on-full': e_all || e_all2,
          'el-some': !e_all2 && e_some,
          'el-off': !hasElectricity,
        })
      } />
    }
    this.tradeSyncs = this.props.tradeSyncs.filter(r => r.good === producer.provides)
    this.hasSyncs = this.tradeSyncs.find(s => s.islandIDs.includes(island.id)) !== undefined
    this.removable = !buildingCount && !this.hasSyncs && !balance

    return (
      <div className='mb-1'>
        <GoodItem producer={producer} replaceInputs={island.replaceInputs}
          onClick={() => fnSetBuildingCount(island, producer, buildingCount+1)}
          onContextMenu={(e) => { e.preventDefault(); fnSetBuildingCount(island, producer, buildingCount-1)} }
          >
          <BuildingInput
            blend={-buildingBalance}
            boost={this.props.productivityBoost > 0 ? 'up' : this.props.productivityBoost < 0 ? 'down' : null }
            value={buildingCount}
            electricityIcon={electricityIcon}
            buildingKey={producer.key}
            fnBubbleValue={number => fnSetBuildingCount(island, producer, number)}
            max={max}
          />

          {this.removable ?
            <Button onClick={() => {fnSetBuildingCount(island, producer, null) }} className={'px-1 py-0 mr-2'}>
              <FontAwesomeIcon icon={'trash'} size={'sm'} fixedWidth style={{margin:1}} />
            </Button>
            :
            <span className={"mr-2 overlay-wrapper"}>
            {this.hasSyncs ? <img src={"./icons/Icon_traderoutes.png"} alt="" className='trade-icon' /> : ''}
            {producer.key !== "Electricity" && producer.key !== "Heater" && <Chart balance={balance} max={4}/>}
          </span>
          }
          {max === 0 || recommendedCount > max ? '' :
            // @todo: recursive, auch wenn wurst hochdrehen, dann schweine auch (e.ctrlKey)
            <RecommendedAddButton add={recommendedAdd} action={() => fnSetBuildingCount(island, producer, recommendedCount)} />
          }

          <BuildingContextMenu
            island={island}
            islands={this.props.islands}
            good={producer.provides}
            producer={producer}
            buildingCount={buildingCount}
            buildingsWithElectricity={buildingsWithElectricity ? buildingsWithElectricity : 0}
            electricity={this.props.electricity}
            fnSetWithElectricity={number => this.props.fnSetWithElectricity(island, producer, number)}
            canEletrified={canEletrified}
            balance={balance}
            tradeSyncs={this.tradeSyncs}
            fnTradeSync={this.props.fnTradeSync}
            productivityBoost={this.props.productivityBoost ? this.props.productivityBoost : 0}
            fnProductivityBoost={(productivityBoost) => this.props.fnSetProductivityBoost(island, producer, productivityBoost)}
          />
        </GoodItem>
      </div>
    )
  }
}

Building.propTypes = {
  producer: PropTypes.object.isRequired,
  island: PropTypes.object.isRequired,
  islands: PropTypes.arrayOf(PropTypes.object).isRequired,
  balance: PropTypes.number.isRequired,
  fnSetBuildingCount: PropTypes.func.isRequired,
  electricity: PropTypes.bool.isRequired,
  fnSetWithElectricity: PropTypes.func.isRequired,
  tradeSyncs: PropTypes.arrayOf(PropTypes.object).isRequired,
  fnTradeSync: PropTypes.func.isRequired,
  productivityBoost: PropTypes.number.isRequired,
  fnSetProductivityBoost: PropTypes.func.isRequired,
};
