import React, {Component} from 'react';
import PropTypes from 'prop-types/';
import Media from "reactstrap/es/Media";
import {trans} from "../functions/translation";

export default class GoodItem extends Component {
  highlight = (good) => {
    // remove
    document.querySelectorAll('.hi-needs').forEach(highlight => {highlight.classList.remove('hi-needs')})
    document.querySelectorAll('.hi-neededBy').forEach(highlight => {highlight.classList.remove('hi-neededBy')})
    document.querySelectorAll('.hi-self').forEach(highlight => {highlight.classList.remove('hi-self')})

    // add
    if (good !== null) {
      let producer = this.props.producer
      // self - producer
      document.querySelectorAll('.GoodItem.provides-' + producer.provides).forEach(good => (good.classList.add('hi-self')))

      // needs
      producer.needs.forEach((g => (
        // todo: mehr ebenen tief
        document.querySelectorAll('.GoodItem.provides-' + g              ).forEach(good => (good.classList.add('hi-needs')))
      )))

      // neededBy
      document.querySelectorAll('.GoodItem.needs-' + producer.provides   ).forEach(good => (good.classList.add('hi-neededBy')))
    }
  }

  render() {
    const {producer} = this.props;

    let classes = 'GoodItem'
    // provides
    if (producer.provides !== undefined) {
      classes += ' provides-' + producer.provides
    }

    // needs
    if (producer && producer.needs !== undefined) {
      producer.needs.map(n => (
        classes += ' needs-' + n
      ))
    }
    return (
      <Media key={producer.key} className={classes}
             onMouseEnter={() => this.highlight(producer.key)}
             onMouseLeave={() => this.highlight(null)}
      >
        <Media left>
          <Media object src={"./icons/goods/" + producer.key + ".png"} alt={trans(producer)} title={trans(producer)}
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
  producer: PropTypes.object.isRequired,
};
