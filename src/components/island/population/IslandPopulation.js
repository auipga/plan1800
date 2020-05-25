import React, {memo, useState} from 'react'
import {shallowEqual, useDispatch, useSelector} from "react-redux";

// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Button} from "reactstrap";

import PopulationArea from "./PopulationArea";
import Icon from "../../Icon";

import worldTypes from "../../../data/worldTypes";
import {blur} from "../../../functions/helpers";
import {text_anno, text_plan_ucf} from "../../../data/translation/texts";
import * as areaSlice from "../../../features/areaSlice";


const IslandPopulation = (props) => {
  const show_planned_features = useSelector(state => state.debug).includes('show_planned_features')

  // get island & world
  const activeWorldId = useSelector(state => state.personal.worldId)
  // const world = worlds.find(w => w.id === activeWorldId)
  const worldType = worldTypes.find(wt => wt.worldIDs.includes(activeWorldId))
  const activeIslandId = useSelector(state => state.personal.islandId)
  // const island = useSelector(state => state.islands.find(i => i.id === activeIslandId))

  const dispatch = useDispatch()
  const addArea = e => {
    blur(e)
    dispatch(areaSlice.create({worldId: activeWorldId, islandId: activeIslandId, usage: 'TownHall'}))
  }

  // performance: was ist besser?
  const ids = useSelector(state => state.areas.filter(x => x.islandId === activeIslandId && x.usage === 'TownHall'), shallowEqual).map(x => x.id)
  // const ids = useSelector(state => state.residences).filter(x => x.islandId === activeIslandId && x.tierId === worldType.socialClassIDs[0]).map(x => x.areaId)

  const [moveMode, setMoveMode] = useState(false)
  const toggleMoveMode = e => {
    blur(e)
    setMoveMode(!moveMode)
  }


  return (<div className='d-table'>
    <div className='d-table-row'>
      <div className="d-table-cell text-center">
        <Button className='sm mx-3' onClick={addArea} title={text_plan_ucf(worldType.id<3 ?'build-townhall':'build-lodge')}>
          <Icon icon={worldType.id<3?'TownHall':'ArticLodge'} className='i22' title={false}/>
          {/*<FontAwesomeIcon icon='plus-circle'/>*/}
        </Button>
      </div>
      {show_planned_features && <div className="d-table-cell"></div>} {/*reorder*/}

      {worldType.socialClassIDs.map((t, key) => <React.Fragment key={key}>
        <div className="d-table-cell text-center">
          <img src={"./icons/population/Workforce_" + t + ".png"}
               alt={t}
               title={text_anno(worldType.populaGUIDs[key])}
               className='i36'
          />
        </div>
        {key + 1 < worldType.socialClassIDs.length && <div className="d-table-cell"></div>}
      </React.Fragment>)}
    </div>

    {ids.map((id,key) => <PopulationArea
      key={id}
      areaId={id}

      index={key}
      allIds={ids}
      move={{on: moveMode, toggle: toggleMoveMode}}
    />)}
  </div>)
}

export default memo(IslandPopulation)