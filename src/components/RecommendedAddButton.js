import React, {Component} from 'react';
import PropTypes from 'prop-types/';
import {Button} from "reactstrap";

export default class RecommendedAddButton extends Component {
  render() {
    const {add, action} = this.props;

    return (
      add > 0
        ?
        <Button onClick={action} className={'px-1 py-0 mr-2'} color='warning'>
          {/*<img src={'./icons/Icon_plus.png'} alt='+' style={{width: 28, height: 28}}/>*/}
          + {add}
        </Button>
        :
        <></>
    )
  }
}

RecommendedAddButton.propTypes = {
  add: PropTypes.int,
  action: PropTypes.func.required,
};
