import React, {} from 'react';
import {Button} from "reactstrap/es";
import {trans} from "../functions/translation";
import PropTypes from 'prop-types/';
import TieredMap from "../classes/TieredMap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const WorldButton = (props) => {
    const {world, exploration} = props
    // const {world} = props

    return (
      <Button
        title={trans(world)}
        className={'mr-2'}
        active={props.active}
        onClick={props.onClick}
      >
        <img src={'./icons/worlds/' + world.id + '.png'} alt={trans(world)} style={{width: 40, height: 40}}/>
        {/*{props.player.roles.some(r => ["expedition", "expedition_exploration"].includes(r)) && exploration !== undefined && (*/}
        {exploration !== undefined && !props.unlocked && (
          // <img src={explorationStates[exploration.state].img} alt={explorationStates[exploration.state].alt} style={{width: 40, height: 40}}/>
          <img src={'./icons/expedition/Icon_expedition_exploration.png'} alt={'explorationStates[exploration.state].alt'} style={{width: 20, height: 20, position: 'relative', top: -5}}/>
        )}
        {exploration === undefined && !props.unlocked && (
          <FontAwesomeIcon icon="lock" size='sm' style={{position: 'relative', top: -5}}/>
        )}
        <span className={'ml-2 d-none'}>
          {trans(world)}
        </span>
      </Button>
    )
}

WorldButton.propTypes = {
  world: PropTypes.object.isRequired,
  // allPopulation: PropTypes.instanceOf(TieredMap).isRequired,
  active: PropTypes.bool,
  // explorationState: PropTypes.arrayOf(PropTypes.oneOf([...Object.keys(explorationStates)])).isRequired,
  // exploration: PropTypes.object,
  onClick: PropTypes.func.isRequired,
  // islands: PropTypes.arrayOf(PropTypes.object).isRequired,

  // notifications: PropTypes.arrayOf(PropTypes.oneOf(["locked", "unlocked", "hasWar", "needsGoods", "reminder", "playerLeft/Offline"])),
}

export default WorldButton