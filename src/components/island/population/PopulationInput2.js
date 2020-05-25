import React from 'react'
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from "react-redux";

import DataInput from "../../global/DataInput";

import * as residenceSlice from "../../../features/residenceSlice";
import {ensureMinMax} from "../../../functions/helpers";


const PopulationInput = (props) => {
  const alwaysChange = useSelector(state => state.debug).includes('show_alwaysChange')

  // get island & world
  const activeIslandId = useSelector(state => state.personal.islandId)


  const {areaId, tierId} = props

  const dispatch = useDispatch()
  // holt sich immer die erste area, sonst noch ein .sort(sortByNumberField('areaId'))
  const x = useSelector(state => state.residences.find(x => x.islandId === activeIslandId && x.areaId >= areaId && x.tierId === tierId))

  if (!x) {/*workaround*/
    return <div>nix</div>/*passiert nur wenn remote action 'area/create' mit async vorzögertem 'residences/create' */
  }

  const setNumber = number => {
    number = ensureMinMax(number, 0, 1e6)
    dispatch(residenceSlice.setNumber({areaId: x.areaId, tierId, number}))
  }
  const applyChange = (number) => {
    // build new residence
    if (tierId === 1 || tierId === 6 || tierId === 8 || alwaysChange) {
      //doofX
      setNumber(x.number + number)
      // dispatch(setNumber(+ref.current.value + number))
    }
    // upgrade existing residence
    else {
      dispatch(residenceSlice.move({
        source: {areaId: x.areaId, tierId: tierId - 1},
        target: {areaId: x.areaId, tierId: tierId},
        number
      }))
    }
  }

  return (<>
    <DataInput
      className='PopulationInput'
      presentValue={x.number}
      setNumber={setNumber}
      applyChange={applyChange}
    />

  </>)
}

PopulationInput.propTypes = {
  areaId: PropTypes.number,
  tierId: PropTypes.number.isRequired,
}

export default (PopulationInput)