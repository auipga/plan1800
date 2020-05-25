import React from 'react'
import PropTypes from "prop-types";

import icons from "../data/icons";


const Icon = (props) => {
  return <img
    src={icons[props.icon] || props.icon}
    alt={props.alt === false ? '' : props.alt||props.icon}
    title={props.title === false ? null : props.title||props.icon}
    className={props.className}
    style={props.style}
  />
}

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  alt: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  title: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  className: PropTypes.string,
}

export default Icon