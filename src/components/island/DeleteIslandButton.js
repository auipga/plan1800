import React, {useState} from 'react'
// import PropTypes from "prop-types";
import {useDispatch, useSelector} from "react-redux";

// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import Icon from "../Icon";

import {blur} from "../../functions/helpers";
import * as islandSlice from "../../features/islandSlice";
import {text_plan_ucf} from "../../data/translation/texts";


const DeleteIslandButton = (props) => {
  // get island & world
  // const activeWorldId = useSelector(state => state.personal.worldId)
  // const world = worlds.find(w => w.id === activeWorldId)
  // const worldType = worldTypes.find(wt => wt.worldIDs.includes(activeWorldId))
  const activeIslandId = useSelector(state => state.personal.islandId)
  // const island = useSelector(state => state.islands.find(i => i.id === activeIslandId))


  const dispatch = useDispatch()

  const [pre, setPre] = useState(null)
  const pre_deleteIsland = (e) => {
    blur(e)
    if (!pre) {
      setPre(setTimeout(() => setPre(false), 1000))
    } else {
      setPre(clearTimeout(pre))
      deleteIsland(e)
    }
  }
  const deleteIsland = (e) => {
    dispatch(islandSlice.destroy({islandId: activeIslandId, activeIslandId}))
  }


  return (<>
    <button
      onClick={pre_deleteIsland}
      title={text_plan_ucf('delete-island')+'\n'+text_plan_ucf('click-twice-delete')}
      className={'sm btn'+(pre ? ' danger':'')}
    >
      <Icon icon={'trash'} title={false}/>
      {/*<FontAwesomeIcon icon="trash"/>*/}
    </button>
  </>)
}

DeleteIslandButton.propTypes = {
  // islandId: PropTypes.number.isRequired,
}

export default DeleteIslandButton