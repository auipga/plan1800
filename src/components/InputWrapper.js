import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types/';
import {Input} from 'reactstrap';
import {Parser} from "expr-eval";

const Min =    (value, _min = 0) => Math.max(_min, value)
const Max =    (value, _max = 99) => Math.min(_max, value)
const minmax = (value, _min = 0, _max = 99) => Max(Min(value, _min), _max).toFixed(0)

const modifier = (event) => {
  let step = 1
  if (event.ctrlKey)  { step *= 5  }
  if (event.shiftKey) { step *= 10 }
  // if (event.altKey)   { step *= 5  }
  return step
}

const InputWrapper = (props) => {
  let [localValue, setLocalValue] = useState(props.value)
  useEffect(() => { setLocalValue(props.value) }, [props.value])

  const saveDelayMs = 50
  let [saveHandle, setSaveHandle] = useState(0)

  function up(step = 1) {
    localValue += '+'+step
    _save()
  }
  function down(step = 1) {
    localValue += '-'+step
    _save()
  }

  const _handleWheel = (e) => {
    e.preventDefault()

    if (e.deltaY > 0) {
      down(modifier(e))
    }

    if (e.deltaY < 0) {
      up(modifier(e))
    }
  }
  const _handleKeyDown = (e) => {
    if (e.key === "ArrowUp") {
      up(modifier(e))
    }

    if (e.key === "ArrowDown") {
      down(modifier(e))
    }

    // if (["Enter", "ArrowUp", "ArrowDown"].includes(e.key)) {
    if (e.key === "Enter") {
      _save()
    }

    if (e.key === "Escape") {
      setLocalValue(props.value)
    }
  }

  const _save = () => {
    let value = 0
    try {
      value = Parser.evaluate(localValue.toString())
      value = minmax(value, props.min, props.max)
      setLocalValue(value)

      if (!saveDelayMs) { // todo: überdenken - mega langsam
        props.fnBubbleValue(value)
      } else {
        if (saveHandle) {
          clearTimeout(saveHandle)
        }
        setSaveHandle(setTimeout(() => {
          props.fnBubbleValue(value)
        }, saveDelayMs))
      }

    } catch (e) {
      // setLocalValue(value)
      // todo? add .is-invalid
      console.log(e.toString())
    }
  }

  const leadingPlus = props.leadingPlus && localValue > 0 && !localValue.toString().startsWith('+') ? "+" : ''

  return (
    <>
      <Input
        {...props}
        value={leadingPlus + localValue}
        onChange={e => setLocalValue(e.target.value)}
        onKeyDown={_handleKeyDown}
        onWheel={_handleWheel}
        onBlur={_save}
      />
     {/* {props.slider ?
        <Input
          type='range'
          value={localValue}
          min={-50}
          max={+50}
          onChange={(e) => setLocalValue(e.target.value)}
        />
        : ''}*/}
    </>
  )
}

InputWrapper.propTypes = {
  value: PropTypes.number.isRequired,
  min: PropTypes.number,
  max: PropTypes.number,
  leadingPlus: PropTypes.bool,
  fnBubbleValue: PropTypes.func.isRequired,

  disabled: PropTypes.bool,
  className: PropTypes.string,
}

export default InputWrapper
