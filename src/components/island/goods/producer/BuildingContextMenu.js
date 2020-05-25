import React from 'react'
import PropTypes from 'prop-types'
import {shallowEqual, useSelector} from "react-redux";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Button, TabPane} from "reactstrap"

import PopoverWithTabs from "../../../global/PopoverWithTabs";
import ProducerAreas from "./ProducerAreas";
// import OptimizationToolbar from "../../../optimization/OptimizationToolbar";
import IslandSharings from "../IslandSharings";

import {blur} from "../../../../functions/helpers";
import {text_plan} from "../../../../data/translation/texts";


const BuildingContextMenu = (props) => {
  // get island & world
  const countIslands = useSelector(state => state.islands.length, shallowEqual)


  const {GUID, producer_disabled} = props
  const id = 'BuildingContextMenu_'+GUID

  const tabs = [
    {
      name: "Items",
      // icon: "tools",
      img: "./icons/buildings/Trade_Union.png",
      // img: "./allicons/Icons/icon_guildhouse_2d_0.png",
      hidden: producer_disabled
    }, // angle-double-up
    {
      name: "Sharings",
      icon: "sync",
      img: "./icons/Icon_traderoutes.png",
      hidden: countIslands === 1
    }, //  sync sync-alt retweet share-alt-square
    {
      name: "Routes",
      icon: "sync",
      img: "./icons/Icon_traderoutes.png",
      hidden: true || countIslands === 1
    }, //  sync sync-alt retweet share-alt-square
  ]

  // const sum = useSelector(state => state.producerSums.find(x => x.islandId === activeIslandId && x.GUID === GUID))

  return (<div className={'PopoverWithTabsWrap '+id}>
      <Button id={'popover_'+id} type='button' className='sm' onClick={blur} tabIndex="-1"
              // disabled={!sum} überbleibsel
      >
        {/*caret-right sliders-h bars ellipsis-v */}
        <FontAwesomeIcon icon={'sliders-h'} color={'#dddddd'}/>
      </Button>
      <PopoverWithTabs id={id} tabs={tabs} placement='right-start' className={'BuildingContextMenu-popover'}>

        <TabPane tabId="Items">
          <div className='description'>{text_plan('description-area')}</div>{/*Create Trade Unions*/}
          {/*<OptimizationToolbar GUID={GUID}/>*/}
          <ProducerAreas GUID={GUID} />
        </TabPane>

        {/*<TabPane tabId="Routes">
          <p className='mb-2 font-italic text-muted'>Waren verladen</p>
          <IslandSyncs GUID={GUID}/>
        </TabPane>*/}

        <TabPane tabId="Sharings" className=''>
          <div className='description'>{text_plan('description-sharings')}</div>
          <div style={{marginLeft: -3}}>
            <IslandSharings GUID={GUID}/>
          </div>
        </TabPane>

      </PopoverWithTabs>
    </div>
  )
}

BuildingContextMenu.propTypes = {
  // GUID: PropTypes.number.isRequired,
  GUID: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired, //nur wegen fake_buildings z.B. GUID: "112690_1"
}

export default BuildingContextMenu