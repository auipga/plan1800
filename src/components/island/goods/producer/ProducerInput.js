import React from 'react'
import PropTypes from 'prop-types';
import {shallowEqual, useDispatch, useSelector} from "react-redux";

import {Button} from "reactstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import DataInput from "../../../global/DataInput";

import * as producerSlice from "../../../../features/producerSlice";
import {blur, ensureMinMax} from "../../../../functions/helpers";
import {text_plan} from "../../../../data/translation/texts";
import boosts from "../../../../data/effects/boosts";


const ProducerInput = (props) => {
  const debug = useSelector(state => state.debug)

  // get island & world
  const activeWorldId = useSelector(state => state.personal.worldId)
  const activeIslandId = useSelector(state => state.personal.islandId)


  const {areaId, GUID, boost} = props
  const boostId = 'boost_by_'+boost

  const dispatch = useDispatch()
  // holt sich immer die erste area, sonst noch ein .sort(sortByNumberField('areaId'))
  let x = useSelector(state => state.producers.find(x =>
    x.areaId === areaId &&
    x.GUID === GUID &&
    x.pState === 'running'
  ), shallowEqual) || /*fake:*/{number: 0, Productivity: 0}


  const setNumber = number => {
    number = ensureMinMax(number, 0, 999)
    if (x.number === number) {
      return
    }

    const area /*fake*/ = {id: areaId, islandId: activeIslandId, worldId: activeWorldId}
    if (!x.areaId/* && number*/) {
      dispatch(producerSlice.create({area, GUID, isDefault: true}))
    }
    dispatch(producerSlice.setNumber({islandId: activeIslandId, areaId, GUID, pState: 'running', number}))
  }

  const handleSetDefaultArea = e => {
    blur(e)
    dispatch(producerSlice.setDefault({islandId: activeIslandId, GUID, areaId}))
  }
  const boostEnabled = x.boosts?.includes(boost)
  const handleToggleBoost = e => {
    blur(e)
    dispatch(producerSlice.toggleBoost({areaId, GUID, boost}))
  }

  return (<>
    <input
      type='radio'
      className='SetDefaultArea'
      // disabled={x.isDefault}
      checked={x.isDefault}
      onChange={handleSetDefaultArea}
      title={text_plan('description-SetDefaultArea')}
    />
    {/*<Button
      className='sm SetDefaultArea'
      disabled={x.isDefault}
      active={x.isDefault}
      onClick={handleSetDefaultArea}
      title={"> Immer hier bauen\nEingaben im Summenfeld* werden hier anwendet\n\n* das neben dem Diagram"}>
      <FontAwesomeIcon icon={x.isDefault ? 'map-marker-alt' : 'map-marker'} color={'#dddddd'}/>
    </Button>*/}
    <DataInput
      className='ProducerInput'
      presentValue={x.number}
      setNumber={setNumber}
    />
    {debug.includes('show_productivity_percent') &&
    <span className={'productivity_percent'+(x.Productivity <= 0 || x.Productivity === 100 ? ' text-muted' : '')}>{Math.max(0, x.Productivity)}%</span>}
    {!props.isNoArea && boost !== null && <Button
        className='sm btn-nocolor booster'
        // disabled={props.isNoArea}
        color={boostEnabled ? 'secondary' : 'light'}
        active={!boostEnabled}
        onClick={handleToggleBoost}
        title={text_plan('connect-to-'+boost)}>
        <FontAwesomeIcon icon={boosts.find(b => b.GUID === boostId)?.icon} />
      </Button>
    }
  </>)
}

ProducerInput.propTypes = {
  areaId: PropTypes.number.isRequired,
  // GUID: PropTypes.number.isRequired,
  GUID: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired, //nur wegen fake_buildings z.B. GUID: "112690_1"
  boost: PropTypes.oneOf(["electricity", "silo", "tractor", null]),
}

export default ProducerInput