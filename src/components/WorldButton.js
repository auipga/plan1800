import React, {Component} from 'react';
import {Button} from "reactstrap/es";
import {trans} from "../functions/translation";
import PropTypes from 'prop-types/';

export default class WorldButton extends Component {
  render() {
    const { world, activeWorld, unlocked, fnSwitchWorld } = this.props;

    const active = activeWorld === world.id

    return (
      <Button
        title={trans(world)}
        className={unlocked ? 'mr-2 ' : ''}
        active={active}
        disabled={!unlocked}
        onClick={() => fnSwitchWorld(world.id)}>
        <img src={'./icons/worlds/' + world.id + '.png'} alt={world} style={{width: 40, height: 40}}/>
        <span className={'ml-2 d-none'}>
          {trans(world)}
        </span>
      </Button>
    )
  }
}

WorldButton.propTypes = {
  world: PropTypes.object.isRequired,
  activeWorld: PropTypes.number,
  unlocked: PropTypes.bool.isRequired,
  fnSwitchWorld: PropTypes.func.isRequired,
};
