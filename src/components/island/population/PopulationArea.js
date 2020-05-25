import React, {useState} from 'react'
import PropTypes from "prop-types";
import {useDispatch, useSelector} from "react-redux";
import classNames from 'classnames'

import {ButtonGroup, Button} from "reactstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import PopulationInputGroup from "./PopulationInputGroup";
import PopulationTownhallItems from "./PopulationTownhallItems";

import worldTypes from "../../../data/worldTypes";
import {blur} from "../../../functions/helpers";
import {text_plan, text_plan_ucf} from "../../../data/translation/texts";
import * as areaSlice from "../../../features/areaSlice";


const PopulationArea = (props) => {
  const show_some_ids = useSelector(state => state.debug).includes('show_some_ids')
  const show_planned_features = useSelector(state => state.debug).includes('show_planned_features')

  // get island & world
  const activeWorldId = useSelector(state => state.personal.worldId)
  // const world = worlds.find(w => w.id === activeWorldId)
  const worldType = worldTypes.find(wt => wt.worldIDs.includes(activeWorldId))
  // const activeIslandId = useSelector(state => state.personal.islandId)
  // const island = useSelector(state => state.islands.find(i => i.id === activeIslandId))


  const {areaId, allIds, index} = props

  const dispatch = useDispatch()

  const [pre, setPre] = useState(null)
  const pre_deleteArea = e => {
    blur(e)
    if (!pre) {
      setPre(setTimeout(() => setPre(false), 1000))
      return
    }
    setPre(clearTimeout(pre))
    deleteArea(e.shiftKey)
  }
  const deleteArea = (a) => {
    if (areaId !== null && areaId !== allIds[0]) {
      if (a) {
        dispatch(areaSlice.destroy({areaId, defaultAreaId: allIds[0]}))
      } else {
        dispatch(areaSlice.destroy({areaId}))
      }
    }
  }


  const moveUp = () => {

  }
  const moveDown = () => {

  }

  return (
    <div className="d-table-row AreaPopulation">
      <div className='d-table-cell text-center'>
        {index === 0 ?
          <Button
            className={classNames({'sm': true, 'btn-success': props.move.on, 'invisible': allIds.length === 1})}
            onClick={props.move.toggle}
            title={text_plan('move_pop_to_other_area')}
          >
            <FontAwesomeIcon icon={props.move.on ? "people-carry" : "people-carry"} fixedWidth/>
            {/*<FontAwesomeIcon icon={props.move.on ? "people-arrows" : "male"} fixedWidth/>*/}
          </Button>
          :
          <Button onClick={pre_deleteArea}
            title={text_plan_ucf(worldType.id<3?'trash-townhall':'trash-lodge')+'\n'+text_plan_ucf('trash-shift-move')}
                  className={classNames({'sm': true, 'danger': pre, 'invisible': props.move.on })}>
            <FontAwesomeIcon icon="trash" fixedWidth/>
            {show_some_ids && areaId}
          </Button>}
      </div>

      {show_planned_features && <div className='d-table-cell px-1'>
        <ButtonGroup size='sm' className='d-none-'>{/*index !== 0*/}
          <Button onClick={moveUp} disabled={index <= 1} className='font-weight-bold pt-0 pb-1 pl-1 pr-0'>
            {/*&#8639;*/}
            &#8593;
          </Button>
          <Button onClick={moveDown} disabled={index === 0 || index === allIds.length-1} className='font-weight-bold pt-1 pb-0 pl-0 pr-1'>
            {/*&#8642;*/}
            &#8595;
          </Button>
        </ButtonGroup>
      </div>}

      <PopulationInputGroup areaId={areaId} moveTo={props.move.on ? allIds[0] : false}/>

      <div className='d-table-cell'>
        {index > 0 && <PopulationTownhallItems areaId={areaId}/>}
      </div>
    </div>
  )
}

PopulationArea.propTypes = {
  areaId: PropTypes.number.isRequired,
  allIds: PropTypes.arrayOf(PropTypes.number).isRequired,
  index: PropTypes.number.isRequired,
}

export default PopulationArea