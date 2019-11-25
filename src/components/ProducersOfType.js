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
    const lockedProducers = this.props.lockedProducers.filter(p => p.type === type).slice(0,20)

    return (<>
      <h6>{this.props.title}</h6>
      {usedProducers.map((producer, producerKey) => (
        <Building
          key={producerKey}
          island={this.props.island}
          producer={producer}
          balance={this.props.fnBalance(producer.provides)}
          fnSetBuildingCount={this.props.fnSetBuildingCount}
          trades={this.props.trades}
          fnTrade={this.props.fnTrade}
        />
      ))}
      {usedProducers.length && (unusedProducers.length || lockedProducers.length) ? <hr/> : ''}
      {unusedProducers.length || lockedProducers.length ?
        <div className='d-flex flex-wrap mb-2' style={{maxWidth: '182px'}}>
          <img src={"./icons/Icon_build_menu.png"} alt='' className={'mr-1'} style={{height: 26, width: 26, filter: 'drop-shadow(0 0 1px #ffffff)'}}/>
          {unusedProducers.map((producer, producerKey) => (
            <BuildingButton key={producerKey} producer={producer} isUnlocked={true} fnEnable={recursive => this.props.fnEnableDisabledBuilding(island, producer, recursive)} />
          ))}
          {lockedProducers.map((producer, producerKey) => (
            <BuildingButton key={producerKey} producer={producer} isUnlocked={false} />
          ))}
        </div>
        : ''
      }
    </>)
  }
}

ProducersOfType.propTypes = {
  title: PropTypes.string.isRequired, // todo: replace with icon
  type: PropTypes.string.isRequired,

  island: PropTypes.object.isRequired,
  trades: PropTypes.arrayOf(PropTypes.object).isRequired,
  fnSetBuildingCount: PropTypes.func.isRequired,
  fnEnableDisabledBuilding: PropTypes.func.isRequired,
  fnBalance: PropTypes.func.isRequired,
  unlockedProducers: PropTypes.arrayOf(PropTypes.object).isRequired,
  lockedProducers: PropTypes.arrayOf(PropTypes.object).isRequired,
}
