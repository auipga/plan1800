import React from "react";
import {useDispatch} from "react-redux";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Button} from "reactstrap";

import {blur} from "../../functions/helpers";
import {text_plan, text_plan_ucf} from "../../data/translation/texts";
import track from "../../functions/tracking";


const ResetButton = (props) => {
  const dispatch = useDispatch()
  const reset = e => {
    blur(e)
    if (window.confirm(text_plan('close-confirm'))) {
      document.body.click()
      dispatch({type: 'personal/upsert', payload: {onlineAutoRejoin: false}})
      // dispatch({type: 'IO_GAME_leave'})
      dispatch({type: 'IO_DISCONNECT'})
      dispatch({type: "STATE_RESET"})
    }
    track.data('Close')
  }


  return (<>
    <Button
      size={props.size}
      disabled={props.disabled}
      onClick={reset} color={'secondary'} className='mr-2' title={props.withLabel ? text_plan_ucf('close') : null}>
      <FontAwesomeIcon icon="times" fixedWidth />
      {props.withLabel&&` ${text_plan_ucf('close')}`}
    </Button>
    {/*<FontAwesomeIcon icon="question-circle" title={'Bitte speichere VORHER - falls gewünscht.'} className='text-muted'/>*/}
  </>)
}

export default ResetButton