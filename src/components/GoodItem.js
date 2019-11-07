import React, {Component} from 'react';
import PropTypes from 'prop-types/';
import Media from "reactstrap/es/Media";
import {trans} from "../functions/translation";
import producers from "../data/game/producers";

export default class GoodItem extends Component {
  highlight = (good) => {
    // remove
    document.querySelectorAll('.hi-needs').forEach(highlight => {highlight.classList.remove('hi-needs')})
    document.querySelectorAll('.hi-neededBy').forEach(highlight => {highlight.classList.remove('hi-neededBy')})
    document.querySelectorAll('.hi-self').forEach(highlight => {highlight.classList.remove('hi-self')})

    // add
    if (good) {
      let producer = producers.find(p => p.key === good)
      if (!producer) {
        // self - need
        document.querySelectorAll('.GoodItem.provides-' + good             ).forEach(good => (good.classList.add('hi-self')))
      } else {
        // self - producer
        document.querySelectorAll('.GoodItem.provides-' + producer.provides).forEach(good => (good.classList.add('hi-self')))

        // needs
        producer.needs.forEach((g => (
          document.querySelectorAll('.GoodItem.provides-' + g              ).forEach(good => (good.classList.add('hi-needs')))
        )))

        // neededBy
        document.querySelectorAll('.GoodItem.needs-' + producer.provides   ).forEach(good => (good.classList.add('hi-neededBy')))
      }
    }
  }

  render() {
    const { resource } = this.props;

    let classes = 'GoodItem'
    // producer
    if (resource.provides !== undefined) {
      classes += ' provides-' + resource.provides
    }
    // need
    else if (resource.key !== undefined) {
      classes += ' provides-' + resource.key
    }

    /**@todo nur die, die needs-, deren Good hier gebaut werden kann (Rum, Kaffee...)*/
    // producer
    if (producer && producer.needs !== undefined) {
      producer.needs.map(n => (
        classes += ' needs-' + n
      ))
    }
    // need
    else if (resource.needs !== undefined) {
      resource.needs.map(n => (
        classes += ' needs-' + n
      ))
    }
    return (
      <Media key={resource.key} className={'my-1 ' + classes}
             onMouseEnter={() => this.highlight(resource.key)}
             onMouseLeave={() => this.highlight(null)}
      >
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
