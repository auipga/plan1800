import React from "react";
import {useDispatch, useStore} from "react-redux";

import {Button} from "reactstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import track from "../../functions/tracking";
import {blur} from "../../functions/helpers";
import {text_plan_ucf} from "../../data/translation/texts";
import {rebuildGameFromStable} from "../../functions/game_convert";


const ConvertButton = (props) => {
  const dispatch = useDispatch()
  const store = useStore()

  const oldState = localStorage.getItem('state')

  let oldData, hasData = false
  try {
    oldData = oldState === null ? null : JSON.parse(oldState)
    hasData = oldData !== null ? oldData.hasOwnProperty('islands') && oldData.islands.length : false
  } catch (e) {}

  if (!hasData) {
    return <></>
  }


  const convert = e => {
    blur(e)

    if (e.shiftKey) {
      if (window.confirm('Delete old state?')) {
        e.currentTarget.disabled = true
        track.data('Delete old/stable')
        localStorage.removeItem('state')
        localStorage.removeItem('theme')
      }
      return
    }

    e.currentTarget.disabled = true
    // dispatch({type: 'IO_GAME_leave'})
    // dispatch({type:"STATE_RESET"})
    track.data('Convert requested')

    rebuildGameFromStable(store, dispatch, oldData, () => {
      track.data('Convert succeeded')
    })
  }


  return (<>
    <Button
      size={props.size}
      color={'secondary'} className='mr-2'
      title={(!props.withLabel ? text_plan_ucf('convert')+'\n' : '') + text_plan_ucf('convert-hint')}
      onClick={convert}
      disabled={!hasData}
    >
      <FontAwesomeIcon icon="file" />
      <FontAwesomeIcon icon="caret-right" className='mx-1' />
      <FontAwesomeIcon icon="file-alt" />
      {props.withLabel&&` ${text_plan_ucf('convert')}`}
    </Button>
    <p className='text-muted font-italic'>
      {props.withHint&&` ${text_plan_ucf('convert-hint')}`}
    </p>
  </>)
}

export default ConvertButton