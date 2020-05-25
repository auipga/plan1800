import React from 'react'
import PropTypes from 'prop-types'
import {useDispatch, useSelector} from "react-redux";

import {Button} from "reactstrap";

import ProductMediaObject from "../stock/ProductMediaObject";

import * as producerSumSlice from "../../../../features/producerSumSlice";
import * as producerSlice from "../../../../features/producerSlice";
import * as hl from "../../../../functions/highlight";


const BuildingButton = (props) => {
  // get island & world
  // const activeWorldId = useSelector(state => state.personal.worldId)
  // const world = worlds.find(w => w.id === activeWorldId)
  // const worldType = worldTypes.find(wt => wt.worldIDs.includes(activeWorldId))
  const activeIslandId = useSelector(state => state.personal.islandId)
  // const island = useSelector(state => state.islands.find(i => i.id === activeIslandId))


  const show_highlights = useSelector(state => state.debug).includes('show_highlights')

  const {producer, firstArea} = props

  const dispatch = useDispatch()
  const handleClick = () => {
    hl.highlight(null)
    dispatch(producerSumSlice.create({islandId: activeIslandId, GUID: producer.GUID}))
    dispatch(producerSlice.create({area: firstArea, GUID: producer.GUID, isDefault: true}))
  }
  const relevantGoods = hl.relevantGoodsBasic(producer)
  const handleMouseEnter = () => show_highlights && hl.highlight(producer, relevantGoods)
  const handleMouseLeave = () => show_highlights && hl.highlight(null)


  return (
    <Button
      id={'prod'+producer.GUID}
      className={'BuildingButton'+hl.ioClasses(producer, relevantGoods) + hl.workforceClasses(producer)}
      color={'link'}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <ProductMediaObject product={producer} className='i24'/>
    </Button>
  )
}

BuildingButton.propTypes = {
  producer: PropTypes.object.isRequired,
  firstArea: PropTypes.object.isRequired,
}

export default BuildingButton