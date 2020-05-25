import React from 'react';
import PropTypes from 'prop-types';
// import {useDispatch} from "react-redux";

import Media from "reactstrap/es/Media";
import GoodMediaObject from "./GoodMediaObject";

// import * as producerSlice from "../features/residences/producerSlice";


const GoodItem = (props) => {
  // eslint-disable-next-line no-unused-vars
  const {producer, area, x} = props;
  // const dispatch = useDispatch()

  const handleClick = e => {
    // dispatch(producerSlice.setNumber({areaId: area.id, key: producer.key, pState: 'running', number: x.number + 1}))
  }
  const handleContextMenu = e => {
    e.preventDefault()
    // dispatch(producerSlice.setNumber({areaId: area.id, key: producer.key, pState: 'running', number: x.number - 1}))
  }
  if (!x) {
    // return '!x'
  }


  return (
    <Media className='GoodItem'>
      <Media
        left
        onClick={handleClick}
        onContextMenu={handleContextMenu}
      >
        <GoodMediaObject producer={producer} mr={true} />
      </Media>
      <Media body>
        {props.children}
      </Media>
    </Media>
  )
}

GoodItem.propTypes = {
  producer: PropTypes.object.isRequired,
};

export default GoodItem