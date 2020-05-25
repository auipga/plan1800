import React from "react";
import {useDispatch, useStore} from "react-redux";

import {Button} from "reactstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import {blur} from "../../functions/helpers";
import {text_plan_ucf} from "../../data/translation/texts";
import * as game from "../../functions/game";
import {rebuildGameFromStable} from "../../functions/game_convert";
import track from "../../functions/tracking";


const ImportButton = (props) => {
  const dispatch = useDispatch()
  const store = useStore()

  const upload = e => {
    blur(e)
    dispatch({type: 'IO_GAME_leave'})
    track.data('Import requested')
    game.loadFromFile((fileContent) => {
      const jsonAsObject = JSON.parse(fileContent)

      if (jsonAsObject.hasOwnProperty('unlockedWorlds')) {
        rebuildGameFromStable(store, dispatch, jsonAsObject, () => {
          track.data('Import / Convert succeeded')
        })
      } else {
        dispatch({type: 'STATE_LOAD', payload: {jsonAsObject}})
      }
    })
  }


  return (<>
    <Button
      size={props.size}
      onClick={upload} color={'secondary'} className='mr-2' title={(!props.withLabel ? text_plan_ucf('import')+'\n' : '') + text_plan_ucf('upload-file')}>
      <FontAwesomeIcon icon="cloud-upload-alt" fixedWidth/>
      {props.withLabel&&` ${text_plan_ucf('import')}`}
    </Button>
    <p className='text-muted font-italic'>
      {props.withHint&&` ${text_plan_ucf('upload-file')}`}
    </p>
  </>)
}

export default ImportButton