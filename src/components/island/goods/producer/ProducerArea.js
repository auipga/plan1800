import React, {memo, useState} from 'react'
import PropTypes from "prop-types";
import {useDispatch, useSelector} from "react-redux";

import {Button} from "reactstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import ProducerInput from "./ProducerInput";
import ItemSelect from "../../../item/ItemSelect";
import OptimizationToolbar from "../../../optimization/OptimizationToolbar";
import ProductivityInput from "./ProductivityInput";

import allItems from "../../../../data/effects/items";
import {text_anno, text_plan} from "../../../../data/translation/texts";
import {blur, forceSign} from "../../../../functions/helpers";
import {supportedEffects} from "../../../../functions/slice";
import * as targetPools from "../../../../data/effects/targetPools";
import * as areaSlice from "../../../../features/areaSlice";
import {isInPool} from "../../../../data/effects/targetPools";


const ProducerArea = props => {
  const show_planned_features = useSelector(state => state.debug).includes('show_planned_features')
  const show_some_ids = useSelector(state => state.debug).includes('show_some_ids')

  const {areaId, producer} = props
  const {GUID} = producer

  const dispatch = useDispatch()

  const [pre, setPre] = useState(null)
  const pre_areaDestroy = (e) => {
    blur(e)
    if (!pre) {
      setPre(setTimeout(() => setPre(false), 1000))
      return
    }
    setPre(clearTimeout(pre))
    areaDestroy(e)
  }
  const areaDestroy = e => {
    dispatch(areaSlice.destroy({areaId: areaId}))
  }


  const itemTargetGUIDs = targetPools.findAllGUIDs(producer.GUID)

  const relevantItems = allItems.filter(i =>
    i.Type === "GuildhouseItem"
    && i.hasOwnProperty('EffectTargets')
    && i.EffectTargets.some(it => itemTargetGUIDs.includes(it.GUID))
    && supportedEffects.find(se => i.hasOwnProperty(se.thingKey))
  )
  // .sort((a, b) => itemTargetGUIDs.indexOf(b.EffectTargets[0]) - itemTargetGUIDs.indexOf(a.EffectTargets[0]))
  .map(i => ({...i, translation: text_anno(i.GUID)}))
  // .map(i => ({...i, translation: (i.hasOwnProperty('Productivity') ? forceSign(i['Productivity']) + '% ' : '') + text_anno(i.GUID)}))
  .sort((a, b) => a.translation > b.translation ? 1 : -1)
  .map(i => ({...i, translation: (i.hasOwnProperty('Productivity') ? forceSign(i['Productivity']) + '% ' : '') + i.translation}))
  // .sort(sortByNumberField('Productivity' || 'GUID', true))//Productivity
  // .sort(sortByNumberField('Name'))

  const boost = producer.hasOwnProperty('MotorizableType') ? producer.MotorizableType.toLowerCase()
      : (isInPool(GUID, 193875) ? 'electricity' : null)


  return (<div className='ProducerArea'>
    <ProducerInput GUID={GUID} areaId={areaId} isNoArea={props.isNoArea} boost={boost} />

    {props.isNoArea ? (<>
      <ProductivityInput GUID={GUID}/>
      <OptimizationToolbar GUID={GUID}/>
    </>):(<>
      <ItemSelect items={relevantItems} areaId={areaId} slot={1} usageIn='TradeUnion' />
      <ItemSelect items={relevantItems} areaId={areaId} slot={2} usageIn='TradeUnion' />
      <ItemSelect items={relevantItems} areaId={areaId} slot={3} usageIn='TradeUnion' />
      <ItemSelect items={relevantItems} areaId={areaId} slot={4} usageIn='TradeUnion' />

      {show_planned_features && <Button className='sm' disabled>
        {/*object-group copy clone*/}
        <FontAwesomeIcon icon='share-alt' color={'#dddddd'}/>
      </Button>}
      <Button className={'sm' + (pre?' danger':'')} onClick={pre_areaDestroy} title={text_plan('click-twice-delete')}>
        <FontAwesomeIcon icon='trash' color={'#dddddd'}/>
        {show_some_ids && areaId}
      </Button>
    </>)}

  </div>)
}

ProducerArea.propTypes = {
  areaId: PropTypes.number.isRequired,
  producer: PropTypes.object.isRequired,
  isNoArea: PropTypes.bool.isRequired,
}

export default memo(ProducerArea)