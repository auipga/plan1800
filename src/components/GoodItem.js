import React, {Component} from 'react';
import PropTypes from 'prop-types/';
import Media from "reactstrap/es/Media";
import {trans} from "../functions/translation";

export default class GoodItem extends Component {
  render() {
    const { resource } = this.props;

    return (
      <Media key={resource.key} className='my-1'>
        <Media left>
          <Media object src={"./icons/goods/" + resource.key + ".png"} alt={trans(resource)} title={trans(resource)}
                 middle style={{height: 30, width: 30}} className='mr-2'
          />
        </Media>
        <Media body className='align-self-center form-inline'>
          {this.props.children}
        </Media>
      </Media>
    )
  }
}

GoodItem.propTypes = {
  resource: PropTypes.object.required,
};
