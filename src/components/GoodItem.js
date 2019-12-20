import React, {Component} from 'react';
import PropTypes from 'prop-types/';
import Media from "reactstrap/es/Media";
import producers from "../data/producers";
import GoodMediaObject from "../components/GoodMediaObject";

export default class GoodItem extends Component {
  static highlight = (producer, recursive) => {
    // remove
    document.querySelectorAll('.hi-needs, .hi-neededBy, .hi-self')
      .forEach(elem => {elem.classList.remove('hi-needs','hi-neededBy','hi-self')})

    if (producer === null) {
      return
    }

    // add
    // self - producer
    document.querySelectorAll('.GoodItem.provides-' + producer.provides).forEach(elem => elem.classList.add('hi-self'))

    // needs
    producer.needs.forEach(g => {
      document.querySelectorAll('.GoodItem.provides-' + g              ).forEach(elem => elem.classList.add('hi-needs'))
      if (recursive) {
        producers.filter(p => p.provides === g).forEach(n => n.needs.forEach(g2 =>
          document.querySelectorAll('.GoodItem.provides-' + g2         ).forEach(elem => elem.classList.add('hi-needs'))
        ))
      }
    })

    // neededBy
    document.querySelectorAll('.GoodItem.needs-' + producer.provides   ).forEach(elem => elem.classList.add('hi-neededBy'))
    if (recursive) {
      producers.filter(p => p.needs.includes(producer.provides)).forEach(n =>
        document.querySelectorAll('.GoodItem.needs-' + n.provides      ).forEach(elem => elem.classList.add('hi-neededBy'))
      )
    }
  }

  static classes(producer) {
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
    return classes;
  }

  render() {
    const {producer} = this.props;

    return (
      <Media key={producer.key} className={GoodItem.classes(producer)}
             onMouseEnter={(e) => GoodItem.highlight(producer, e.ctrlKey)}
             onMouseLeave={() => GoodItem.highlight(null)}
      >
        <Media left
          onClick={this.props.onClick}
          onContextMenu={this.props.onContextMenu}>
          <GoodMediaObject producer={producer} mr={true} />
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
