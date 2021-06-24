import React from 'react'

import {Button, ButtonGroup, TabPane} from "reactstrap"

import Icon from "../../Icon";
import PopoverWithTabs from "../../global/PopoverWithTabs";
import PalaceSelect from "./PalaceSelect";

import {blur} from "../../../functions/helpers";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {text_anno, text_plan} from "../../../data/translation/texts";
import {useDispatch, useSelector} from "react-redux";
import * as islandSlice from "../../../features/islandSlice";
import PalaceLevelInput from "./PalaceLevelInput";


const PalaceMenu = () => {
  const id = 'PalaceMenu'

  // get island & world
  // const activeWorldId = useSelector(state => state.personal.worldId)
  // const world = worlds.find(w => w.id === activeWorldId)
  // const worldType = worldTypes.find(wt => wt.worldIDs.includes(activeWorldId))
  const activeIslandId = useSelector(state => state.personal.islandId)
  const island = useSelector(state => state.islands.find(i => i.id === activeIslandId))

  const isPalaceBuilt = useSelector(state => state.islands.find(i => i.hasOwnProperty('isPalace') && i.isPalace))
  const ministriesBuilt = useSelector(state => state.islands.filter(i => i.hasOwnProperty('isMinistry') && i.isMinistry)).length
  const canTogglePalace = !isPalaceBuilt || island.isPalace
  const canToggleMinistry = true //isPalaceBuilt && !island.isPalace
  const icon = island.isPalace ? 'Palace-Building' : (island.isMinistry ? 'Ministry-Building' : 'Palace')

  const dispatch = useDispatch()

  const buildPalace = e => {
    blur(e)
    dispatch(islandSlice.buildPalace({islandId: activeIslandId, reverse: island.isPalace}))
  }
  const buildLocalDepartment = e => {
    blur(e)
    dispatch(islandSlice.buildLocalDepartment({islandId: activeIslandId, reverse: island.isMinistry}))
  }

  // const debug = useSelector(state => state.debug)
  const tabs = [
    {
      name: "all",
      img: "./.png",
      hidden: false
    },
  ]

  return (<div className={'PopoverWithTabsWrap '+id}>
    <Button id={'popover_' + id} type='button' className='sm mr-1' onClick={blur}>
      <Icon icon={icon}/>
      {/*{' '}{island.palaceLevel}*/}
      <FontAwesomeIcon icon='caret-down' fixedWidth />
    </Button>
    <PopoverWithTabs id={id} tabs={tabs} placement='bottom-start'>
      <TabPane tabId="all">

        <ButtonGroup className={'d-none'}>
          <Button id={'popover_' + id} type='button' onClick={buildPalace} disabled={!canTogglePalace} active={island.isPalace}>
            <Icon icon={'Palace-Building'}/> <br/>{text_anno(249947)}
          </Button>
          <Button id={'popover_' + id} type='button' onClick={buildLocalDepartment} disabled={!canToggleMinistry} active={island.isMinistry}>
            <Icon icon={'Ministry-Building'}/> <br/>{text_anno(269602)}
          </Button>
        </ButtonGroup>

        {!isPalaceBuilt && (
          <Button id={'popover_' + id} type='button' onClick={buildPalace} /*disabled={!canTogglePalace} active={island.isPalace}*/>
            <Icon icon={'Palace-Building'}/> <br/>{text_plan('Palace-build')}
          </Button>
        )}

        {isPalaceBuilt && !island.isPalace && !island.isMinistry && (
          <Button id={'popover_' + id} type='button' onClick={buildLocalDepartment} /*disabled={!canToggleMinistry} active={island.isMinistry}*/>
            <Icon icon={'Ministry-Building'}/> <br/>{text_plan('Ministry-build')}
          </Button>
        )}

{/*
269602: "Regionalministerium",
249976: "Ministeriumseffekt",
249978: "Richtlinien",
*/}

        {island.isPalace && (<>
          <div className='description'>{text_anno(99999127)}</div>{/*Palast Einstellung*/}
          <div>
            <PalaceLevelInput />
          </div>

          <div className='description mt-3'>{text_anno(249978)}</div> {/*Richtlinien*/}
          <PalaceSelect />

          {!ministriesBuilt && <Button id={'popover_' + id} type='button' onClick={buildPalace} className={'sm'}>
            <Icon icon={'demolish'} className={''}/> {text_plan('Palace-destroy')}
          </Button>}
        </>)}

        {island.isMinistry && (<>
          <div className='description'>{text_anno(249978)}</div> {/*Richtlinien*/}
          <PalaceSelect />

          <Button id={'popover_' + id} type='button' onClick={buildLocalDepartment} className={'sm'}>
            <Icon icon={'demolish'} className={''}/> {text_plan('Ministry-destroy')}
          </Button>
        </>)}


        {/*<div className='description mt-3'>{text_plan('palace-ministry')}</div>*/}
      </TabPane>
    </PopoverWithTabs>
  </div>)
}

export default PalaceMenu