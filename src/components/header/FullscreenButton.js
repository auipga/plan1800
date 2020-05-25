import React, {useEffect, useState} from 'react'

import {Button} from "reactstrap"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {blur} from "../../functions/helpers";
import {text_plan_ucf} from "../../data/translation/texts";


const FullscreenButton = () => {
  const isFull = () => document.fullscreenElement !== null
  const [isFullscreen, setIsFullscreen] = useState(isFull);

  const updateChange = () => setIsFullscreen(isFull)

  useEffect(() => {
    document.addEventListener('fullscreenchange', updateChange)

    return () => {
      document.removeEventListener('fullscreenchange', updateChange)
    };
    // eslint-disable-next-line
  }, [isFullscreen]);


  const toggle = (e) => {
    blur(e)

    if (isFull()) {
      document.exitFullscreen()
    } else {
      document.documentElement.requestFullscreen()
    }
  }

  if (!document.fullscreenEnabled) {
    return <></>
  }

  return (
    <Button onClick={toggle} className='mr-2 hidden-md-up' title={text_plan_ucf(isFullscreen ? 'close-fullscreen' : 'fullscreen')}>
      <FontAwesomeIcon icon={isFullscreen ? 'compress' : 'expand'}/>
    </Button>
  )
}

export default FullscreenButton