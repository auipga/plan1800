import React, {Component} from 'react'
import PropTypes from 'prop-types/'
import Building from "./Building";
import BuildingButton from "./BuildingButton";

export default class ProducersOfType extends Component {

  render() {
    const {island, type} = this.props
    const unlockedProducers   = this.props.unlockedProducers.filter(p => p.type === type)
    const usedProducers   = unlockedProducers.filter(p =>  Number.isInteger(island.buildings[p.key]))
    const unusedProducers = unlockedProducers.filter(p => !Number.isInteger(island.buildings[p.key]))
    const lockedProducers = this.props.lockedProducers.filter(p => p.type === type)

    return (<>
      <div className='mb-3 text-center'>
        <img src={"./icons/buildingtypes/"+type+".png"} alt={type} title={type} style={{width:26,height:26}} className={"mr-1"}/>
      </div>
      {usedProducers.map((producer, key) => (
        <Building
          key={key}
          island={this.props.island}
          producer={producer}
          balance={this.props.fnBalance(producer.provides)}
          fnSetBuildingCount={this.props.fnSetBuildingCount}
          trades={this.props.trades}
          fnTrade={this.props.fnTrade}
          productivity={island.productivity[producer.key]}
          fnSetProductivity={this.props.fnSetProductivity}
        />
      ))}
      {usedProducers.length && (unusedProducers.length || lockedProducers.length) ? <hr/> : ''}
      {unusedProducers.length || lockedProducers.length ?
        <div className='mb-2' style={{maxWidth: 182}}>
          <img src={"./icons/Icon_build_menu.png"} alt='' className={'mr-0'} style={{height: 26, width: 26, filter: 'drop-shadow(0 0 1px #ffffff)'}}/>
          {unusedProducers.map((producer, producerKey) => (
            <BuildingButton key={producerKey} producer={producer} isUnlocked={true} fnEnable={recursive => this.props.fnEnableDisabledBuilding(island, producer, recursive)} />
          ))}
          {lockedProducers.slice(0,3).map((producer, producerKey) => (
            <BuildingButton key={producerKey} producer={producer} isUnlocked={false} />
          ))}
        </div>
        : ''
      }
    </>)
  }
}

ProducersOfType.propTypes = {
  type: PropTypes.string.isRequired,
  island: PropTypes.object.isRequired,
  trades: PropTypes.arrayOf(PropTypes.object).isRequired,
  fnSetBuildingCount: PropTypes.func.isRequired,
  fnEnableDisabledBuilding: PropTypes.func.isRequired,
  fnBalance: PropTypes.func.isRequired,
  unlockedProducers: PropTypes.arrayOf(PropTypes.object).isRequired,
  lockedProducers: PropTypes.arrayOf(PropTypes.object).isRequired,
  fnSetProductivity: PropTypes.func.isRequired,
}
