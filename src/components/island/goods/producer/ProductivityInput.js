import React from 'react'
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from "react-redux";

import DataInput from "../../../global/DataInput";

import * as productivitySlice from "../../../../features/productivitySlice";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Button} from "reactstrap";
import {text_plan} from "../../../../data/translation/texts";


const ProductivityInput = (props) => {
  // get island & world
  const activeIslandId = useSelector(state => state.personal.islandId)


  const {GUID} = props

  const dispatch = useDispatch()
  // holt sich immer die erste area, sonst noch ein .sort(sortByNumberField('areaId'))
  const x = useSelector(state => state.productivity.find(x =>
    x.islandId === activeIslandId &&
    x.GUID === GUID
  )) || /*fake:*/{number: 0}

  const setNumber = number => {
    // number = Math.max(-50, Math.min(50, number))
    dispatch(productivitySlice.set({islandId: activeIslandId, GUID, number}))
  }
  const reset = () => {
    dispatch(productivitySlice.reset({islandId: activeIslandId, GUID}))
  }


  return (<>
    <DataInput
      className='ProductivityInput'
      presentValue={x.number}
      leadingPlus={true}
      setNumber={setNumber}
      pattern='[+-]?(50|([1-4]?[0-9]))'
      title={text_plan('workload-adjustment')}
    />

    {x.islandId && <Button className='sm' onClick={reset} title={text_plan('workload-reset')}>
      <FontAwesomeIcon icon={'undo'} size={'sm'}/>
    </Button>}
  </>)
}

ProductivityInput.propTypes = {
  // GUID: PropTypes.number.isRequired,
  GUID: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired, //nur wegen fake_buildings z.B. GUID: "112690_1"
}

export default ProductivityInput