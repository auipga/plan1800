import React from "react";
import PropTypes from "prop-types";
import {useDispatch, useSelector} from "react-redux";

import {Button} from "reactstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import DataInput from "../../global/DataInput";
import Chart2 from "../../Chart2";

import * as routeSlice from "../../../features/routesSlice";
import fnBalance from "../../../functions/balance";


const IslandSync = props => {
  // get island & world
  const activeIslandId = useSelector(state => state.personal.islandId)


  const {GUID, island, route} = props

  const dispatch = useDispatch()
  const x = route || /*fake:*/{sourceIslandId: activeIslandId, targetIslandId: island.id, GUID, number: 0}

  const setNumber = number => {
    number = Math.max(-10000, Math.min(10000, number)) * (x.targetIslandId===activeIslandId?-1:1)
    dispatch(routeSlice.upsert({...x, number}))
  }
  const reset = () => {
    dispatch(routeSlice.upsert({...x, number: null}))
  }

  const relevantProducers = useSelector(state => state.producers.filter(x => x.islandId === island.id && x.io.find(io => io.good === GUID) && x.pState === 'running'), );
  const relevantResidences = useSelector(state => state.residences.filter(x => x.islandId === island.id && x.hasOwnProperty('needs') && x.needs.find(need => need.good === GUID)), );
  const balance = fnBalance(GUID, relevantProducers, relevantResidences);

  const relevantRoutes = useSelector(state => state.routes.filter(r => r.GUID === GUID && (r.sourceIslandId === island.id || r.targetIslandId === island.id)))
  const tradingBalance = relevantRoutes.reduce((sum, r) => sum + r.number * (r.targetIslandId===island.id?-1:1), 0);

  return (<>
    <label
      htmlFor={'routesFor'+GUID+'_island_'+island.id}
      className='IslandSync'
    >
      <span className="mr-1" style={{height: 30}}><Chart2 balance={balance} tradingBalance={tradingBalance} /></span>
      <DataInput
        className='ProductivityInput'
        presentValue={x.number * (x.targetIslandId===activeIslandId?-1:1)}
        leadingPlus={true}
        setNumber={setNumber}
      />

      {route !== undefined && <Button className='sm' onClick={reset}>
        <FontAwesomeIcon icon={'undo'} size={'sm'}/>
      </Button>}

     {/* <Input
        id={'routesFor'+GUID+'_island_'+island.id}
        type='checkbox'
        checked={syncedHere}
        disabled={otherSyncs.filter(s => s.islandIDs.includes(i.id)).length}
        onChange={() => fnTradeSync(GUID, island.id, ids)}
      />*/}
      <span className={'text-truncate'} style={{maxWidth:170}}>{island.name}</span>
    </label>
  </>)
}

IslandSync.propTypes = {
  // GUID: PropTypes.number.isRequired,
  GUID: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired, //nur wegen fake_buildings z.B. GUID: "112690_1"
  island: PropTypes.object.isRequired,
  route: PropTypes.object,
}

export default IslandSync