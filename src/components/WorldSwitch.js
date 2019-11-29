import React, {Component} from 'react';
import PropTypes from 'prop-types/';
import {Badge, DropdownItem, DropdownMenu, DropdownToggle, UncontrolledButtonDropdown} from "reactstrap";
import WorldButton from "./WorldButton";

export default class WorldSwitch extends Component {
  render() {
    const {world, activeWorld, fnSwitchWorld, unlocked, fnUnlockWorld, allPopulation} = this.props;

    const elemWorldButton =
      <WorldButton
        world={world}
        activeWorld={activeWorld}
        unlocked={unlocked}
        fnSwitchWorld={fnSwitchWorld}
      />

    if (unlocked) {
      return elemWorldButton
    }

    const planable = false // unlockedWorlds.contains(Math.round(world.id/2)) && haveAddon: the passage || dlc-pack
    const startable = false // wie unlockable, aber ohne started:true und timer===0
    const unlockable = allPopulation.ofTier(world.tierId) >= world.requirement
                    // || allPopulation.sumAbove(world.tierId+1) # sumAbove stimmt nicht weil 1 jornalero kein ingenieur ist

    return (
      <UncontrolledButtonDropdown className={'mr-2 '}>
        {elemWorldButton}
        <DropdownToggle caret color="secondary"/>
        <DropdownMenu right={false}>
          <DropdownItem
            onClick={() => fnUnlockWorld(world.id)}
            disabled={!unlockable}>freischalten</DropdownItem>

          <DropdownItem divider/>

          <DropdownItem
            onClick={() => alert(world.id)}
            disabled={!planable}>
            <span>Expedition planen</span>
            <Badge color='secondary' className={'ml-2'}>later</Badge>
          </DropdownItem>
          <DropdownItem
            onClick={() => alert(world.id)}
            disabled={!startable}>
            <span>Expedition starten</span>
            <Badge color='secondary' className={'ml-2'}>later</Badge>
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledButtonDropdown>
    )
  }
}

WorldSwitch.propTypes = {
  world: PropTypes.object.isRequired,
  allPopulation: PropTypes.object.isRequired, // TieredMap
  activeWorld: PropTypes.number,
  unlocked: PropTypes.bool.isRequired,
  fnSwitchWorld: PropTypes.func.isRequired,
  islands: PropTypes.arrayOf(PropTypes.object).isRequired,
  fnUnlockWorld: PropTypes.func.isRequired,
};
