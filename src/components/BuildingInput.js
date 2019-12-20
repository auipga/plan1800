import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types/';
import {Input} from "reactstrap";
import {Parser} from "expr-eval";
// import {RGB_Log_Blend} from "../functions/color";

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

const BuildingInput = (props) => {
  let [localValue, setLocalValue] = useState(props.value.toString())
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

      if (saveHandle) {
        clearTimeout(saveHandle)
      }
      setSaveHandle(setTimeout(() => {
        props.fnBubbleValue(value)
      }, saveDelayMs))

    } catch (e) {
      // setLocalValue(value)
      console.log(e)
    }
  }

    if (props.max === 0) {
      return (
        <Input id={"input_" + props.buildingKey}
               type='text'
               bsSize='sm'
               className={'BuildingInput mr-2 text-center'}
               value='&#10005;' // icon-x
               disabled={true}
        />
      )
    }

    const boostClass = props.boost ? 'overlay-boost boost-'+ props.boost : ''

    return (<div className='overlay-wrapper'>
      {props.electricityIcon}
      <Input
        id={"input_"+props.buildingKey}
        type='text'
        bsSize='sm'
        // style={{
        //   backgroundColor:
        //     RGB_Log_Blend(
        //       Math.min(Math.max(props.blend, 0), 1),
        //       // 'rgba(100,200,255,0.5)',
        //       'rgba(100,255,100,0.5)',
        //       'rgba(255,50,50,0.5)',
        //     ),
        // }}
        className={
          'BuildingInput mr-2 text-center ' + boostClass
          + (props.blend > 0 ? ' is-invalid' : '')
          // + (props.blend < 0 ? ' border-primary' : '')
        }
        value={localValue}
        onChange={e => setLocalValue(e.target.value)}
        onKeyDown={_handleKeyDown}
        onWheel={_handleWheel}
        onBlur={_save}
      />
      </div>
    )
}

BuildingInput.propTypes = {
  blend: PropTypes.number,
  buildingKey: PropTypes.string,
  boost: PropTypes.number,
  value: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  fnBubbleValue: PropTypes.func,
}

export default BuildingInput
