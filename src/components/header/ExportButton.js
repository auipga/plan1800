import React from "react";
import {useStore} from "react-redux";

import {Button} from "reactstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import * as game from "../../functions/game";
import {text_plan_ucf} from "../../data/translation/texts";
import track from "../../functions/tracking";


const ExportButton = (props) => {
  const store = useStore()

  const download = e => {
    const data = store.getState()
    game.exportToFile(data)
    track.data('Export')
  }


  return (
    <Button
      disabled={props.disabled}
      size={props.size}
      onClick={download} color={'secondary'} className='mr-2' title={(!props.withLabel ? text_plan_ucf('export')+'\n' : '') + text_plan_ucf('download-file')}>
      <FontAwesomeIcon icon="cloud-download-alt" fixedWidth/>
      {props.withLabel&&` ${text_plan_ucf('export')}`}
    </Button>
  )
}

export default ExportButton