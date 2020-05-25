import React from 'react';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from "react-redux";

// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Button} from "reactstrap";

import Icon from "../Icon";

import {blur} from "../../functions/helpers";
import {text_anno} from "../../data/translation/texts";
import * as personalSlice from "../../features/personalSlice";


const WorldButton = (props) => {
  const show_world_labels = useSelector(state => state.debug).includes('show_world_labels')

  const {world} = props

  const dispatch = useDispatch()
  const activeWorld = useSelector(state => state.personal.worldId)
  const active = activeWorld === world.id

  const handleClick = e => {
    blur(e)
    dispatch(personalSlice.world({id: world.id}))
  }


  // let exploration
  return (
    <Button
      title={text_anno(world.GUID)}
      className="WorldButton"
      active={active} /*auch mit props.active werden alle WorldButton neu gerendert*/
      // outline={true || !active}
      // color={active ? 'secondary' : 'light'}
      onClick={handleClick}
    >
      <Icon icon={'session' + world.id} alt={text_anno(world.GUID)} title={false} />
      {/*{props.player.roles.some(r => ["expedition", "expedition_exploration"].includes(r)) && exploration !== undefined && (*/}
      {/*
        {exploration !== undefined && !props.unlocked && (
          // <img src={explorationStates[exploration.state].img} alt={explorationStates[exploration.state].alt} style={{width: 40, height: 40}}/>
          <img src={'./icons/expedition/Icon_expedition_exploration.png'} alt={'explorationStates[exploration.state].alt'} style={{width: 20, height: 20, position: 'relative', top: -5}}/>
        )}
        {exploration === undefined && !props.unlocked && (
          <FontAwesomeIcon icon="lock" size='sm' style={{position: 'relative', top: -5}}/>
        )}
*/}
      {show_world_labels && <span className={'ml-2'}>{text_anno(world.GUID)}</span>}
    </Button>
  )
}

WorldButton.propTypes = {
  world: PropTypes.object.isRequired,
}

export default WorldButton