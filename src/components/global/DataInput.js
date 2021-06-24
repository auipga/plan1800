import React, {memo, useEffect, useRef} from 'react'
import PropTypes from 'prop-types';
import {useSelector} from "react-redux";
// import {useSelector} from "react-redux";

import wheel, {arrow} from "../../functions/wheel";


const DataInput = (props) => {
  // const debug = useSelector(state => state.debug)

  // get island & world
  // const activeWorldId = useSelector(state => state.personal.worldId)
  // const world = worlds.find(w => w.id === activeWorldId)
  // const worldType = worldTypes.find(wt => wt.worldIDs.includes(activeWorldId))
  const activeIslandId = useSelector(state => state.personal.islandId)
  // const island = useSelector(state => state.islands.find(i => i.id === activeIslandId))


  const {presentValue, setNumber} = props

  /* todo: Parser.evaluate aus InputWrapper*/

  // props.applyChange für spezialfall: residenceSlice.move
  const applyChange = props.applyChange || ((amount) => {
    setNumber(presentValue + amount)
  })
  const handleWheel = e => {
    const amount = wheel(e)
    if (!props.disabled && amount) {
      applyChange(amount)
    }
  }
  const handleKeyPress = e => {
    const amount = arrow(e)
    if (!props.disabled && amount) {
      applyChange(amount)
    }
  }
  const handleChange = e => {
    if (props.disabled) return
    const number = parseInt(e.target.value)
    setNumber(number || 0)
  }

  const ref = useRef(null)

  // todo: bleibt x.number alt --- deps=[x.number] macht den eventlistener bei jedem change neu = doof
  // alt+j doofX
  useEffect(() => {
    const _el = ref.current
    // noinspection JSUnresolvedFunction // console.log('add');
    _el.addEventListener('wheel', handleWheel)
    return () => {
      // noinspection JSUnresolvedFunction // console.log('remove');
      _el.removeEventListener('wheel', handleWheel)
    }
  // }, []); //doofX
  // }, [x.number]); //doofX
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [presentValue, activeIslandId, setNumber]); //doofX

  const leadingPlus = props.leadingPlus && presentValue > 0 && !presentValue.toString().startsWith('+') ? "+" : ''

  return (<>
    <input
      className={'DataInput ' + props.className + (props.disabled ? ' c-not-allowed': '')}
      pattern={props.pattern}

      type='text'
      // title={x.z_updated}
      value={leadingPlus + presentValue}
      onChange={handleChange}
      ref={ref}
      // onWheel={handleWheel} /*doofX*/
      onKeyDown={handleKeyPress}
      disabled={props.disabled}
      readOnly={props.readonly}
      title={props.title}
      // onTouchStart={e => console.log(e.type)}
      // onTouchCancel={e => console.log(e.type)}
      // onTouchEnd={e => console.log(e.type)}
      // onTouchMove={e => console.log(e.type)}
    />
  </>)
}

DataInput.propTypes = {
  presentValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  setNumber: PropTypes.func,
  // presentValue: PropTypes.number.isRequired,
  // setNumber: PropTypes.func.isRequired,
  applyChange: PropTypes.func,
  className: PropTypes.string,

  pattern: PropTypes.string,
  disabled: PropTypes.bool,
  readonly: PropTypes.bool,
  title: PropTypes.string,
}

export default memo(DataInput)//??