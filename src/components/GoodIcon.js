import React from 'react';
import PropTypes from 'prop-types/';
import {trans} from "../functions/translation";
import classNames from "classnames";
import {isObject} from "reactstrap/es/utils";

const GoodIcon = (props) => {
  const {producer, px, mr} = props;
  let {good} = props;
  let title = good

  if (isObject(producer) && producer.hasOwnProperty("key")) {
    good = producer.key
    title = trans(producer)
  }

  return (
    <img
      src={"./icons/goods/" + good + ".png"}
      className={props.className + (mr ? ' mr-2' : null)}
      // className={'producer '+classNames({"locked": !isUnlocked})}
      // style={{height: px, width: px}}
      alt={title}
      title={title}
    />
  )
}

GoodIcon.propTypes = {
  producer: PropTypes.object,
  good: PropTypes.string,
  mr: PropTypes.bool,
  className: PropTypes.string,
}

GoodIcon.defaultProps = {
  mr: false,
  className: '',
};

export default GoodIcon