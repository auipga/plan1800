import React from 'react'

import {Button, TabPane} from "reactstrap"

import PopoverWithTabs from "../../global/PopoverWithTabs";
import CultureSelect from "./CultureSelect";

import {blur} from "../../../functions/helpers";
import {useSelector} from "react-redux";
import Icon from "../../Icon";


const CultureMenus = () => {
  const id = 'CultureMenu'

  // eslint-disable-next-line no-unused-vars
  const debug = useSelector(state => state.debug)

  const tabs = [
    {
      name: "Festivals",
      type: "festivals",
      img: "./icons/festivals/Commemoration_Day.png",
      hidden: false // todo
    },
    {
      name: "Zoo",
      type: "zoo",
      img: "./icons/buildings/Zoo.png",
      hidden: false // todo
    },
    {
      name: "Museum",
      type: "museum",
      img: "./icons/buildings/Museum.png",
      hidden: false // todo
    },
    {
      name: "Pflanzen",
      type: "botanica",
      img: "./icons/dlcs/Icon_dlc_botanica.png",
      hidden: false // todo
      // hidden: !debug.includes('show_unsupported_culture')
    },
  ]

  if (tabs.find(t => !t.hidden) === undefined) {
    return <></>
  }


  return tabs.map(tab => (
      <div key={tab.type} className={'PopoverWithTabsWrap '+id+' mr-1'}>
        <Button id={`popover_${id}_${tab.name}`} type='button' className='sm' onClick={blur}>
          <Icon icon={tab.img}/>
        </Button>
        <PopoverWithTabs id={id+'_'+tab.name} tabs={[tab]} placement='bottom-start'>
          <TabPane tabId={tab.name}>
            <div className='description'>{tab.name}</div>
            <CultureSelect type={tab.type}/>
          </TabPane>
        </PopoverWithTabs>
      </div>
    )
  )

}

export default CultureMenus