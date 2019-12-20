import React from 'react';
import PropTypes from 'prop-types/';
import {trans} from "../functions/translation";
import {Media} from "reactstrap";
import {isObject} from "reactstrap/es/utils";

const GoodMediaObject = (props) => {
  const {producer, px, middle = false, mr = false} = props
  let {good} = props
  let title = good

  if (isObject(producer) && producer.hasOwnProperty("key")) {
    good = producer.key
    title = trans(producer)
  }

  return (
    <Media object middle={middle}
      src={"./icons/goods/" + good + ".png"}
      className={props.className + (mr ? ' mr-2' : '')}
      // className={'producer '+classNames({"locked": !isUnlocked})}
      style={px === undefined ? {} : {height: px, width: px}}
      alt={title}
      title={title}
    />
  )
}

GoodMediaObject.propTypes = {
  producer: PropTypes.object,
  good: PropTypes.string,
  mr: PropTypes.bool,
  middle: PropTypes.bool,
  px: PropTypes.number,
  className: PropTypes.string,
}

export default GoodMediaObject