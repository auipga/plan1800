import React, {Component} from 'react';
import {Button} from "reactstrap";
import PropTypes from 'prop-types/';

export default class ResetButton extends Component {
  render() {
    return (
      <Button onClick={this.props.resetFunction} className='btn-warning float-right'>
        <img src={'./icons/Icon_traderoutes.png'} alt='reset' style={{width: 40, height: 40}}/>
      </Button>
    )
  }
}

ResetButton.propTypes = {
  resetFunction: PropTypes.func.required,
};
