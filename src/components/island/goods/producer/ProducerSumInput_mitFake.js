import React from 'react'
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from "react-redux";

import DataInput from "../../../global/DataInput";

import * as producerSumSlice from "../../../../features/producerSumSlice";
import * as producerSlice from "../../../../features/producerSlice";
import {ensureMinMax} from "../../../../functions/helpers";


const ProducerSumInput = (props) => {
  // get island & world
  const activeIslandId = useSelector(state => state.personal.islandId)


  const {GUID, firstArea} = props

  const dispatch = useDispatch()
  const x = useSelector(state => state.producerSums.find(x =>
      x.islandId === activeIslandId &&
      x.GUID === GUID
  )) || /*fake:*/{number: 0}

  let createdNow = false
  const setNumber = number => {
    number = ensureMinMax(number, 0, 999)

    if (!x.islandId && !createdNow) {
      // x.islandId = -1 // damit es durch die dispatch Latenz nicht doppelt passiert
      createdNow = true // damit es durch die dispatch Latenz nicht doppelt passiert
      dispatch(producerSumSlice.create({islandId: activeIslandId, GUID}))
      dispatch(producerSlice.create({area: firstArea, GUID, isDefault: true}))
      dispatch(producerSlice.setNumber({islandId: activeIslandId, areaId: firstArea.id, GUID, pState: 'running', number}))
    } else if (x) {
      dispatch(producerSlice.change({islandId: activeIslandId, GUID, pState: 'running', delta: number - x.number}))
    }
  }


  return (<>
    <DataInput
      className='ProducerInput'
      presentValue={x.number}
      setNumber={setNumber}
    />
    {/*<div className="d-inline-block"></div>*/}
  </>)
}

ProducerSumInput.propTypes = {
  GUID: PropTypes.number.isRequired,
  firstArea: PropTypes.object.isRequired,
}

export default ProducerSumInput