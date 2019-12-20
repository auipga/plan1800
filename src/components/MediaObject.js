import React from 'react';
import PropTypes from 'prop-types/';
import {trans} from "../functions/translation";
import {Media} from "reactstrap";
import {isObject} from "reactstrap/es/utils";

const MediaObject = (props) => {
  const {object, type, middle = false, mr = false, px, className} = props
  let {thing} = props
  let title = thing

  if (isObject(object) && object.hasOwnProperty("key")) {
    thing = object.key
    title = trans(object)
  }

  return (
    <Media object middle={middle}
      src={"./icons/"+type+"/" + thing + ".png"}
      className={className + (mr ? ' mr-2' : '')+ ' d-inline-block'}
      // className={'producer '+classNames({"locked": !isUnlocked})}
      style={px === undefined ? {} : {height: px, width: px}}
      alt={title}
      title={title}
    />
  )
}

MediaObject.propTypes = {
  object: PropTypes.object,
  thing: PropTypes.string,
  type: PropTypes.oneOf(["items", "goods", "expedition"]).isRequired,
  middle: PropTypes.bool,
  mr: PropTypes.bool,
  px: PropTypes.number,
  className: PropTypes.string,
}

export default MediaObject