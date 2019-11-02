import React, {Component} from 'react';
import {Button} from "reactstrap";
import PropTypes from 'prop-types/';

export default class DarkModeButton extends Component {
  render() {
    const { fnToggleDarkMode } = this.props;

    return (
      <Button onClick={fnToggleDarkMode} className='btn-success float-right'>
        <img src={'./icons/Icon_traderoutes.png'} alt='reset' style={{width: 40, height: 40}}/>
        DarkMode
      </Button>
    )
  }
}

DarkModeButton.propTypes = {
  fnToggleDarkMode: PropTypes.func.required,
};
