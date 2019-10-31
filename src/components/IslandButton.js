import React, {Component} from 'react';
import PropTypes from 'prop-types/';
import {Button} from "reactstrap";

export default class IslandButton extends Component {
  render() {
    const { island, activeIsland, onClick } = this.props;

    return (
      <Button title={island.name + " (" + island.id + ")"}
              className={'mr-2 '}
              active={activeIsland === island.id}
              onClick={() => onClick(island.id)}
      >
        {island.name}
      </Button>
    )
  }
}

IslandButton.propTypes = {
  island: PropTypes.int,
  activeIsland: PropTypes.int,
  onClick: PropTypes.func,
};

