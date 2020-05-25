import React from 'react'

import {Button, TabPane} from "reactstrap"

import Icon from "../../Icon";
import PopoverWithTabs from "../../global/PopoverWithTabs";
import CultureSelect from "./CultureSelect";

import {blur} from "../../../functions/helpers";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {text_plan} from "../../../data/translation/texts";


const CultureMenu = () => {
  const id = 'CultureMenu'

  // const debug = useSelector(state => state.debug)

  const tabs = [
    {
      name: "Festivals",
      img: "./icons/festivals/Commemoration_Day.png",
      hidden: false // todo
    },
    {
      name: "Zoo",
      img: "./icons/buildings/Zoo.png",
      hidden: false // todo
    },
    {
      name: "Museum",
      img: "./icons/buildings/Museum.png",
      hidden: false // todo
    },
    {
      name: "Pflanzen",
      img: "./icons/dlcs/Icon_dlc_botanica.png",
      hidden: false
    },
  ]

  if (tabs.find(t => !t.hidden) === undefined) {
    return <></>
  }


  return (<div className={'PopoverWithTabsWrap '+id}>
    <Button id={'popover_' + id} type='button' className='sm mr-1' onClick={blur}>
      <Icon icon={'Culture'}/>
      <FontAwesomeIcon icon='caret-down' fixedWidth />
    </Button>
    <PopoverWithTabs id={id} tabs={tabs} placement='bottom-start'>
      <TabPane tabId="Festivals">
        <div className='description'>{text_plan('culture-festivals')}</div>
        <CultureSelect type='festivals'/>
      </TabPane>
      <TabPane tabId="Zoo">
        <div className='description'>{text_plan('culture-zoo')}</div>
        <CultureSelect type='zoo'/>
      </TabPane>
      <TabPane tabId="Museum">
        <div className='description'>{text_plan('culture-museum')}</div>
        <CultureSelect type='museum'/>
      </TabPane>
      <TabPane tabId="Pflanzen">
        <div className='description'>{text_plan('culture-botanica')}</div>
        <CultureSelect type='botanica'/>
      </TabPane>
    </PopoverWithTabs>
  </div>)
}

export default CultureMenu