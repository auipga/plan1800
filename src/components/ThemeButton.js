/* eslint-disable no-unused-vars */
import React from 'react'
import {useDispatch, useSelector} from "react-redux";

import {Button} from "reactstrap"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import * as personalSlice from "../features/personalSlice";
import {blur} from "../functions/helpers";
import Icon from "./Icon";
import {text_plan} from "../data/translation/texts";


const ThemeButton = () => {
  const appliedTheme = useSelector(state => state.personal.theme) || 'theme-auto'

  const isDark = appliedTheme === 'theme-dark' || !appliedTheme
  const isLight = appliedTheme === 'theme-light'
  const isAuto = appliedTheme === 'theme-auto'

  const dispatch = useDispatch()
  const handleClick = (e) => {
    blur(e)
    dispatch(personalSlice.upsert({theme: isDark ? 'theme-light' : 'theme-dark'}))
  }
  const handleContextMenu = (e) => {
    blur(e)
    e.preventDefault()
    dispatch(personalSlice.upsert({theme: 'theme-auto'}))
  }


  return (
    <Button
      onClick={handleClick}
      onContextMenu={handleContextMenu}
      className='mr-2 p-1'
      title={text_plan('title_ThemeButton', appliedTheme)}
    >
      <Icon icon={isAuto ? 'daynight' : (isLight ? 'day' : 'night')} className='i28' title={false}/>
      {/*<FontAwesomeIcon icon={'adjust'}/>*/}
    </Button>
  )
}

export default ThemeButton