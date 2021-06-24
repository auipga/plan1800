import React from 'react';
import PropTypes from 'prop-types';

import ProducerSumInput from "./ProducerSumInput";
import BuildingContextMenu from "./BuildingContextMenu";
import Media from "reactstrap/es/Media";
import ProductMediaObject from "../stock/ProductMediaObject";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import * as producerSlice from "../../../../features/producerSlice";
import fnBalance from "../../../../functions/balance";
import Chart2 from "../../../Chart2";
import * as hl from "../../../../functions/highlight";
import {Button} from "reactstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {modifier} from "../../../../functions/wheel";


const Building = (props) => {
  // get island & world
  // const activeWorldId = useSelector(state => state.personal.worldId)
  // const world = worlds.find(w => w.id === activeWorldId)
  // const worldType = worldTypes.find(wt => wt.worldIDs.includes(activeWorldId))
  const activeIslandId = useSelector(state => state.personal.islandId)
  // const island = useSelector(state => state.islands.find(i => i.id === activeIslandId))

  const hide_BuildingContextMenu = useSelector(state => state.debug).includes('hide_BuildingContextMenu')
  const show_highlights = useSelector(state => state.debug).includes('show_highlights')


  const {producer, firstArea} = props

  const producerDisabled = producer?.disabled || producer.inputDisabled

  const dispatch = useDispatch()
  const handleTrashClick = () => dispatch(producerSlice.destroy({areaId: firstArea.id, GUID: producer.GUID}))
  const handleMediaClick = e => {
    if (producerDisabled) return
    dispatch(producerSlice.change({islandId: activeIslandId, GUID: producer.GUID, pState: 'running', delta: modifier(e)}))
  }
  const handleMediaContextMenu = e => {
    e.preventDefault()
    if (producerDisabled) return
    dispatch(producerSlice.change({islandId: activeIslandId, GUID: producer.GUID, pState: 'running', delta: -modifier(e)}))
  }

  const sharings = useSelector(state => state.sharings.filter(x => x.GUID === producer.OutputProduct && (x.source === activeIslandId)), shallowEqual);
  const relevantIslandIDs = [activeIslandId, ...sharings.map(s => s.target)]
  const relevantProducers = useSelector(state => state.producers.filter(x => relevantIslandIDs.includes(x.islandId) && x.io.find(io => io.good === producer.OutputProduct) && x.pState === 'running'), shallowEqual);
  const relevantResidences = useSelector(state => state.residences.filter(x => relevantIslandIDs.includes(x.islandId) && x.hasOwnProperty('needs') && x.needs.find(need => need.good === producer.OutputProduct && need.factor > 0 && need.amount > 0)), shallowEqual);
  const balance = sharings.length ? 0 : fnBalance(producer.OutputProduct, relevantProducers, relevantResidences)
  const tradingBalance = sharings.length ? fnBalance(producer.OutputProduct, relevantProducers, relevantResidences) : 0

  // const relevantRoutes = useSelector(state => state.routes.filter(r => r.GUID === producer.OutputProduct && (r.sourceIslandId === activeIslandId || r.targetIslandId === activeIslandId)), shallowEqual)
  // const tradingBalance = relevantRoutes.reduce((sum, r) => sum + r.number * (r.targetIslandId===activeIslandId?-1:1), 0);


  const thisProducers = useSelector(state => state.producers.filter(x => x.islandId === activeIslandId && x.GUID === producer.GUID), shallowEqual);
  const relevantGoods = hl.relevantGoodsAdvanced(thisProducers)

  const handleMouseEnter = () => show_highlights && hl.highlight(producer, relevantGoods)
  const handleMouseLeave = () => show_highlights && hl.highlight(null)


  if (!thisProducers.length) {
    return <></>
  }

  return (
      <Media
        id={'prod'+producer.GUID}
        className={'Building'+hl.ioClasses(producer, relevantGoods)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Media
          left
          onClick={handleMediaClick}
          onContextMenu={handleMediaContextMenu}
        >
          <ProductMediaObject product={producer}/>
        </Media>
        <Media body>
          <ProducerSumInput GUID={producer.GUID} firstArea={firstArea} disabled={producerDisabled}/>
          {thisProducers.length > 1 || thisProducers[0].number > 0 || balance || tradingBalance || sharings.length ?
            <Chart2 balance={balance} tradingBalance={tradingBalance}/>
            :
            <Button
              onClick={handleTrashClick}
              className='trash-button'>
              <FontAwesomeIcon icon={'trash'} size={'sm'} fixedWidth />
            </Button>
          }
          {!hide_BuildingContextMenu && <BuildingContextMenu producer={producer} GUID={producer.GUID} producer_disabled={producerDisabled}/>}
        </Media>
      </Media>
  )
}



Building.propTypes = {
  producer: PropTypes.object.isRequired,
  firstArea: PropTypes.object.isRequired,
}

export default Building