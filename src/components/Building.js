import React, {Component} from 'react';
import PropTypes from 'prop-types/';
import GoodItem from "./GoodItem";
import BuildingInput from "./BuildingInput";
import Chart from "./Chart";
import classNames from 'classnames'
import RecommendedAddButton from "./RecommendedAddButton";
import BuildingContextMenu from "./BuildingContextMenu";

export default class Building extends Component {
  render() {
    const {producer, island, balance, fnSetBuildingCount} = this.props

    let buildingBalance, recommendedCount, recommendedAdd = 0
    let max = undefined

    const buildingCount = island.buildings[producer.key]

    buildingBalance = balance*producer.productionTime/60
    // recommendedCount = Math.ceil(island.buildings[producer.key] - buildingBalance);
    // recommendedAdd = recommendedCount - island.buildings[producer.key];

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
      || producer.tierId > 5 // Old World todo: this is not ready for the passage
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

    this.trades = this.props.trades.filter(r => r.good === producer.provides && (r.from === island.id || r.to === island.id || r.from === null || r.to === null));
    this.removable = !buildingCount && !this.trades.length && !balance

    const hasLoadings  = this.trades.find(t => t.from === island.id                       ) !== undefined
    const hasDroppings = this.trades.find(t => t.from !== null      && t.to === island.id ) !== undefined

    let tradeIcon = null
    if (hasLoadings && hasDroppings) {
      tradeIcon = <img src={"./icons/overlays/trade_buy_sell.png"} alt="" className='trade-icon' />
    } else if (hasLoadings) {
      tradeIcon = <img src={"./icons/overlays/trade_sell.png"} alt="" className='trade-icon' />
    } else if (hasDroppings) {
      tradeIcon = <img src={"./icons/overlays/trade_buy.png"} alt="" className='trade-icon' />
    }
    return (
      <label htmlFor={"input_"+producer.key} className='d-block mb-1'
             onContextMenu={(e) => {e.preventDefault(); this.removable ? fnSetBuildingCount(island, producer, null) : console.log('in use.') }}
      >
        <GoodItem producer={producer}>
          <BuildingInput
            blend={-buildingBalance}
            boost={this.props.productivityBoost > 0 ? 'up' : this.props.productivityBoost < 0 ? 'down' : null }
            buildingCount={buildingCount}
            electricityIcon={electricityIcon}
            buildingKey={producer.key}
            islandId={island.id}
            fnSetBuildingCount={number => fnSetBuildingCount(island, producer, number)}
            max={max}
          />

          <span className={"mr-2 overlay-wrapper " + classNames({'trade-sell' : hasLoadings, 'trade-buy' : hasDroppings})}>
            {tradeIcon}
            <Chart balance={balance} max={3}/>
          </span>
          {max === 0 || recommendedCount > max ? '' :
            <RecommendedAddButton add={recommendedAdd} action={() => fnSetBuildingCount(island, producer, recommendedCount)} />
          }
          <BuildingContextMenu
            island={island}
            good={producer.provides}
            producer={producer}
            buildingCount={buildingCount}
            buildingsWithElectricity={buildingsWithElectricity}
            electricity={this.props.electricity}
            fnSetWithElectricity={number => this.props.fnSetWithElectricity(island, producer, number)}
            canEletrified={canEletrified}
            balance={balance}
            trades={this.trades}
            fnTrade={this.props.fnTrade}
            productivityBoost={this.props.productivityBoost}
            fnProductivityBoost={(productivityBoost) => this.props.fnSetProductivityBoost(island, producer, productivityBoost)}
          />
        </GoodItem>
      </label>
    )
  }
}

Building.propTypes = {
  producer: PropTypes.object.isRequired,
  island: PropTypes.object.isRequired,
  balance: PropTypes.number.isRequired,
  fnSetBuildingCount: PropTypes.func.isRequired,
  electricity: PropTypes.bool.isRequired,
  fnSetWithElectricity: PropTypes.func.isRequired,
  trades: PropTypes.arrayOf(PropTypes.object).isRequired,
  fnTrade: PropTypes.func.isRequired,
  productivityBoost: PropTypes.number.isRequired,
  fnSetProductivityBoost: PropTypes.func.isRequired,
};
