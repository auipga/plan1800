import React, {Component} from 'react';
import PropTypes from 'prop-types/';

export default class ResourceBadge extends Component {
  render() {
    const {resource, count, fnSetResourceCount} = this.props;
    const editMode = fnSetResourceCount !== undefined

    return (
      <span className='badge badge-secondary badge-pill mr-2'
        onClick={(e) => {if (editMode) { fnSetResourceCount(1) }}}
        onWheel={(e) => {if (editMode) { fnSetResourceCount(-Math.sign(e.deltaY)); e.preventDefault() }}}
        onContextMenu={(e) => {if (editMode) {fnSetResourceCount(-1)} e.preventDefault()}}
      >
        {/*{fnSetResourceCount !== undefined ? <>*/}
        {/*  <span style={{cursor: 'pointer'}} onClick={() => fnSetResourceCount(1)}>&and;</span>*/}
        {/*  <span style={{cursor: 'pointer'}} onClick={() => fnSetResourceCount(-1)}>&or;</span>*/}
        {/*</> : ''}*/}
        {count}
        &times;
        <img src={"./icons/goods/" + resource + ".png"} alt={resource} title={resource} style={{width: 22, height: 22}}/>
      </span>
    )
  }
}

ResourceBadge.propTypes = {
  count: PropTypes.int,
  resource: PropTypes.string.required,
  fnSetResourceCount: PropTypes.func,
};
