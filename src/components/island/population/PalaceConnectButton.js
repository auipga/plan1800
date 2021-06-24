import React from 'react'
import PropTypes from 'prop-types';

import Icon from "../../Icon";

import {text_plan_ucf} from "../../../data/translation/texts";
import * as residenceSlice from "../../../features/residenceSlice";
import {useDispatch} from "react-redux";
import {blur} from "../../../functions/helpers";


const PalaceConnectButton = (props) => {
  const {area, connectTo} = props

  const dispatch = useDispatch()

  const handleClick = e => {
    // blur(e)
    dispatch(residenceSlice.connect({areaId: area.areaId, tierId: area.tierId, connectTo, reverse: area[connectTo]===true}))
  }

  return (<>
    <button
      className='PalaceConnectButton'
      disabled={props.disabled}
      onClick={handleClick}
      title={text_plan_ucf('connect to palace effect')}
    >
      <Icon icon='connect' title={false} className={props.disabled ? 'invisible' : ''} />
    </button>
  </>)
}

PalaceConnectButton.propTypes = {
}

export default PalaceConnectButton