import React, {Component} from 'react';
import PropTypes from 'prop-types/';
import {Button} from "reactstrap";

export default class FertilitySwitch extends Component {
  render() {
    const {fertility, islandFertilities, fnSetFertilities} = this.props;

    const enabled = islandFertilities.includes(fertility)

    const toggle = () => {
      if (enabled) {
        fnSetFertilities(islandFertilities.filter(f => f !== fertility))
      } else {
        fnSetFertilities([...islandFertilities, fertility]) // hint: .add() does not work
      }
    }

    return (
      <Button
        className={'p-1 mr-1'}
        color={enabled ? 'light' : 'link'}
        active={enabled}
        onClick={toggle}
      >
        <img src={"./icons/goods/" + fertility + ".png"} alt={fertility} title={fertility} style={{width: 24, height: 24}}/>
      </Button>
    )
  }
}

FertilitySwitch.propTypes = {
  fertility: PropTypes.string,
  islandFertilities: PropTypes.arrayOf(PropTypes.string).isRequired,
  fnSetFertilities: PropTypes.func.isRequired,
};
