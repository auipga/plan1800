import React, {memo} from 'react';
import PropTypes from 'prop-types';
import {trans} from "../functions/translation";
import {Media} from "reactstrap";
import {isObject} from "reactstrap/es/utils";

const GoodMediaObject = (props) => {
  const {producer} = props

  let {good} = props
  let title = good

  if (isObject(producer) && producer.hasOwnProperty("key")) {
    good = producer.key
    title = trans(producer)
  }

  return (
    <Media object
      src={"./icons/goods/" + good + ".png"}
      className={props.className + ' GoodMediaObject'}
      alt={title}
      title={title}
    />
  )
}

GoodMediaObject.propTypes = {
  producer: PropTypes.object,
  good: PropTypes.string,
  className: PropTypes.string,
}

export default memo(GoodMediaObject)