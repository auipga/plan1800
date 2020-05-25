import React from 'react'
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from "react-redux";

import DataInput from "../../global/DataInput";
import UpgradeButton from "./UpgradeButton";

import {ensureMinMax} from "../../../functions/helpers";
import {text_anno} from "../../../data/translation/texts";
import * as residenceSlice from "../../../features/residenceSlice";


const PopulationInput = (props) => {
  // get island & world
  const activeIslandId = useSelector(state => state.personal.islandId)


  const {areaId, tierId, tierGUID} = props

  const dispatch = useDispatch()
  // holt sich immer die erste area, sonst noch ein .sort(sortByNumberField('areaId'))
  const x = useSelector(state => state.residences.find(x => x.islandId === activeIslandId && x.areaId >= areaId && x.tierId === tierId))

  if (!x) {/*workaround*/
    return <div>nix</div>/*passiert nur wenn remote action 'area/create' mit async vorzögertem 'residences/create' */
  }

  const setNumber = number => {
    if (props.moveTo) {
      dispatch(residenceSlice.move({
        source: {areaId: x.areaId, tierId: tierId},
        target: {areaId: props.moveTo, tierId: tierId},
        number: x.number - number
      }))
    } else {
      number = ensureMinMax(number, 0, 1e6)
      dispatch(residenceSlice.setNumber({areaId: x.areaId, tierId, number}))
    }
  }

  const applyMove = (number) => {
    if (!props.moveTo) {
      dispatch(residenceSlice.move({
        source: {areaId: x.areaId, tierId: tierId},
        target: {areaId: x.areaId, tierId: tierId + 1},
        number
      }))
    }
  }

  return (<>
    <div className='d-table-cell'>
      <DataInput
        className='PopulationInput'
        presentValue={x.number}
        setNumber={setNumber}
        disabled={props.moveTo === x.areaId}
        title={text_anno(tierGUID)}
      />
    </div>
    {!props.isLast && (
      <div className='d-table-cell'>
        <UpgradeButton
          applyMove={applyMove}
          disabled={props.moveTo !== false}
        />
      </div>
    )}
  </>)
}

PopulationInput.propTypes = {
  areaId: PropTypes.number,
  tierId: PropTypes.number.isRequired,
  isLast: PropTypes.bool.isRequired,
  tierGUID: PropTypes.number.isRequired,
}

export default (PopulationInput)