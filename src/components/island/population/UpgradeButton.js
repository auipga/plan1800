import React, {useEffect, useRef} from 'react'
import PropTypes from 'prop-types';

import Icon from "../../Icon";

import wheel, {modifier} from "../../../functions/wheel";
import {text_plan_ucf} from "../../../data/translation/texts";


const UpgradeButton = (props) => {
  const {applyMove} = props

  const handleWheel = e => {
    const amount = wheel(e)
    applyMove(amount)
  }
  const handleMediaClick = e => {
    const amount = modifier(e)
    applyMove(amount)
  }
  const handleMediaContextMenu = e => {
    e.preventDefault()
    const amount = -modifier(e)
    applyMove(amount)
  }

  const ref = useRef(null)
  useEffect(() => {
    const _el = ref.current
    if (!props.disabled) {
      // noinspection JSUnresolvedFunction // console.log('add');
      _el.addEventListener('wheel', handleWheel)
    }
    return () => {
      // noinspection JSUnresolvedFunction // console.log('remove');
      _el.removeEventListener('wheel', handleWheel)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref, applyMove, props.disabled]);


  return (<>
    <button
      className='UpgradeButton'
      ref={ref}
      disabled={props.disabled}
      onClick={handleMediaClick}
      onContextMenu={handleMediaContextMenu}
      title={text_plan_ucf('upgrade-house')}
    >
      <Icon icon='arrow-right' title={false} className={props.disabled ? 'invisible' : ''} />
    </button>
  </>)
}

UpgradeButton.propTypes = {
  applyMove: PropTypes.func.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
}

export default UpgradeButton