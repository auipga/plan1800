import React, {Component} from 'react';
import PropTypes from 'prop-types/';
import {Badge, DropdownItem, DropdownMenu, DropdownToggle, UncontrolledButtonDropdown} from "reactstrap";
import WorldButton from "./WorldButton";
import worlds from "../data/worlds";

export default class WorldSwitch extends Component {
  render() {
    const {world, activeWorld, fnSwitchWorld, unlocked, fnUnlockWorld, islands} = this.props;

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

    let unlockCondition = worlds.find(w => w.id === world.id).unlock
    let firstIsland = islands.find(() => true)
    let planable, startable, unlockable = false

    if (firstIsland) {
      planable = false
      startable = false
      unlockable = islands.length && firstIsland.population.ofTier(unlockCondition[0]) >= unlockCondition[1]
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
  world: PropTypes.object.isRequired,
  activeWorld: PropTypes.number,
  unlocked: PropTypes.bool.isRequired,
  fnSwitchWorld: PropTypes.func.isRequired,
  islands: PropTypes.arrayOf(PropTypes.object).isRequired,
  fnUnlockWorld: PropTypes.func.isRequired,
};
