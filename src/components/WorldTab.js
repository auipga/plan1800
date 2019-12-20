import React, {useState} from 'react';
import PropTypes from 'prop-types/';
import {NavItem, NavLink} from 'reactstrap';
import {trans} from "../functions/translation";
import TieredMap from "../classes/TieredMap";
import KeyedMap from "../classes/KeyedMap";

const WorldTab = (props) => {
  const {world, exploration} = props

  return (
    <NavItem>
      <NavLink
        href="#"
        title={trans(world)}
        className={'text-light-'}
        active={props.active}
        onClick={props.onClick}
      >
        <img src={'./icons/worlds/' + world.id + '.png'} alt={trans(world)} style={{width: 40, height: 40}}/>
        {/*{props.player.roles.some(r => ["expedition", "expedition_exploration"].includes(r)) && exploration !== undefined && (*/}
        {/*  // <img src={explorationStates[exploration.state].img} alt={explorationStates[exploration.state].alt} style={{width: 40, height: 40}}/>*/}
        {/*  <img src={'./icons/expedition/Icon_expedition_exploration.png'} alt={explorationStates[exploration.state].alt} style={{width: 40, height: 40}}/>*/}
        {/*)}*/}
        <span className={'ml-2 d-none'}>
          {trans(world)}
        </span>
      </NavLink>
    </NavItem>
  )
}

WorldTab.propTypes = {
  player: PropTypes.object.isRequired,
  world: PropTypes.object.isRequired,
  allPopulation: PropTypes.instanceOf(TieredMap).isRequired,
  notifications: PropTypes.arrayOf(PropTypes.oneOf(["locked", "unlocked", "hasWar", "needsGoods", "reminder", "playerLeft/Offline"])),
  active: PropTypes.bool,
  unlocked: PropTypes.bool,
  // explorationState: PropTypes.arrayOf(PropTypes.oneOf([...Object.keys(explorationStates)])).isRequired,
  exploration: PropTypes.object,
  onClick: PropTypes.func.isRequired,
  // islands: PropTypes.arrayOf(PropTypes.object).isRequired,
  fnUnlockWorld: PropTypes.func.isRequired,
};
// PropTypes.dataStructure()
// PropTypes.instanceOf()
// PropTypes.regex()
// PropTypes.regex()
// PropTypes.arrayOf(["locked", "unlocked", "hasWar", "needsGoods", "reminder", "playerLeft/Offline"]).isRequired,

export default WorldTab