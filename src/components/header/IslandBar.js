import React from 'react'
import {useDispatch, useSelector} from "react-redux";

import {Button} from 'reactstrap'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import IslandButton from "./IslandButton";

import worlds from "../../data/worlds";
import * as islandSlice from "../../features/islandSlice";


const IslandBar = () => {
  // get island & world
  const activeWorldId = useSelector(state => state.personal.worldId)
  const world = worlds.find(w => w.id === activeWorldId)
  // const worldType = worldTypes.find(wt => wt.worldIDs.includes(activeWorldId))
  const activeIslandId = useSelector(state => state.personal.islandId)
  // const island = useSelector(state => state.islands.find(i => i.id === activeIslandId))

  const islands = useSelector(state => state.islands)
  const relevantIslands = islands.filter(i => i.worldId === activeWorldId)

  const dispatch = useDispatch()
  const addIsland = () => {
    dispatch(islandSlice.create({world, size: 0}))
  }
  const duplicateIsland = (e) => {
    e.preventDefault()
    dispatch(islandSlice.duplicate({islandId: activeIslandId}))
  }

  return (<>
    <div className='IslandBar'>
{/*
      {!relevantIslands.length && activeWorldId > 1 &&
      <Button className={'unlock'} onClick={"fnLockWorld"}  color='warning'>
        <FontAwesomeIcon icon="unlock"/>
      </Button>
      }
*/}
      <Button className={'addIsland'} onClick={addIsland} onContextMenu={duplicateIsland}>
        {/*<Icon icon={'plus'}/>*/}
        <FontAwesomeIcon icon="plus-circle"/>
      </Button>
      {relevantIslands.map((island, key) => (
        <IslandButton key={key} island={island}/>
      ))}
    </div>
  </>)
}

export default IslandBar