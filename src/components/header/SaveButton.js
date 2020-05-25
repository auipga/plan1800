import React from "react";
import {useDispatch} from "react-redux";

import {Button} from "reactstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import {blur, delay} from "../../functions/helpers";
import {text_plan_ucf} from "../../data/translation/texts";
import track from "../../functions/tracking";


export const save = (e, dispatch, name, callback) => {
  blur(e)
  dispatch({type: 'personal/upsert', payload: {nameOfMatch: name}})
  dispatch({type: 'STATE_SAVE_AS', payload: {name}})

  if (callback) {
    delay(100).then(() => callback(name))
  }
  track.data('Save')
}

const SaveButton = (props) => {
  const {name} = props

  const dispatch = useDispatch()

  return (
    <Button
      onClick={e => save(e, dispatch, name, props.callback)}
      disabled={!name}
      color={'secondary'}
      className='mr-2'
      size={props.size}
      title={(props.withLabel ? '' : text_plan_ucf('save')+'\n') + text_plan_ucf('override')}
    >
      <FontAwesomeIcon icon="save" fixedWidth/>
      {props.withLabel&& ` ${text_plan_ucf('save')}`}
    </Button>
  )
}

export default SaveButton