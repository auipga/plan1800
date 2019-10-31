import React, {Component} from 'react';
import PropTypes from 'prop-types/';
import {Badge, DropdownItem, DropdownMenu, DropdownToggle, UncontrolledButtonDropdown} from "reactstrap";
import WorldButton from "./WorldButton";
import worlds from "../data/game/worlds";

export default class WorldSwitch extends Component {
  render() {
    const {world, activeWorld, fnSwitchWorld, unlockedWorlds, fnUnlockWorld, islands} = this.props;

    const unlocked = unlockedWorlds.includes(world.id);

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

    let firstIsland = islands.find(() => true);
    let planable, startable, unlockable = false

    if (firstIsland) {
      planable = false
      startable = false
      unlockable = true
    }

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
  // ...WorldButton.PropTypes,
  world: PropTypes.object.required,
  activeWorld: PropTypes.int,
  unlocked: PropTypes.bool.required,
  fnSwitchWorld: PropTypes.func.required,

  unlockedWorlds: PropTypes.arrayOf(PropTypes.int),
  islands: PropTypes.arrayOf(PropTypes.object),
  fnUnlockWorld: PropTypes.func.required,
};
