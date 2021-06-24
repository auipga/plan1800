import React from 'react'
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from "react-redux";

import DataInput from "../../../global/DataInput";

import * as producerSlice from "../../../../features/producerSlice";
import {ensureMinMax} from "../../../../functions/helpers";


const ProducerSumInput = (props) => {
  // get island & world
  const activeIslandId = useSelector(state => state.personal.islandId)


  const {GUID, disabled} = props

  const dispatch = useDispatch()
  const x = useSelector(state => state.producerSums.find(x =>
      x.islandId === activeIslandId &&
      x.GUID === GUID
  )) || /*fake:*/{number: 0}

  const setNumber = number => {
    number = ensureMinMax(number, 0, 999)
    dispatch(producerSlice.change({islandId: activeIslandId, GUID, pState: 'running', delta: number - x.number}))
  }


  return (<>
    {disabled ?
      <DataInput
        className='ProducerInput'
        presentValue='&#10005;'
        disabled={disabled}
      />
      :
      <DataInput
        className='ProducerInput'
        presentValue={x.number}
        setNumber={setNumber}
      />
    }
  </>)
}

ProducerSumInput.propTypes = {
  // GUID: PropTypes.number.isRequired,
  GUID: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired, //nur wegen fake_buildings z.B. GUID: "112690_1"
  firstArea: PropTypes.object.isRequired, //todo kann weg + da wo es herkommt
  disabled: PropTypes.bool,
}

export default ProducerSumInput