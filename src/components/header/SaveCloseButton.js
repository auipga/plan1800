import React from "react";
import {useDispatch} from "react-redux";

import {Button} from "reactstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import {blur, delay} from "../../functions/helpers";
import {text_plan_ucf} from "../../data/translation/texts";
import track from "../../functions/tracking";


export const save = (e, dispatch, name, callback, close = false) => {
  blur(e)
  document.body.click();

  dispatch({type: 'personal/upsert', payload: {nameOfMatch: name}})
  dispatch({type: 'STATE_SAVE_AS', payload: {name}})

  if (callback) {
    delay(100).then(() => callback(name))
  }
  if (close) {
    delay(callback ? 150 : 0).then(() => dispatch({type:"STATE_RESET"}))
  }

  track.data('Save')
}

const SaveCloseButton = (props) => {
  const {name} = props

  const dispatch = useDispatch()

  return (
    <Button
      onClick={e => save(e, dispatch, name, props.callback, true)}
      disabled={!name}
      color={'secondary'}
      className='mr-2'
      size={props.size}
      title={props.withLabel ? '' : text_plan_ucf('save-close')}
    >
      <FontAwesomeIcon icon="save" fixedWidth/>
      <FontAwesomeIcon icon="times" fixedWidth/>
      {props.withLabel&& ` ${text_plan_ucf('save-close')}`}
    </Button>
  )
}

export default SaveCloseButton