import React from 'react'
import {Button} from 'reactstrap'
import PropTypes from 'prop-types/'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import ExpeditionButton from "./ExpeditionButton";
import * as ex from "../functions/expeditions";
import {trans} from "../functions/translation";


const ExploreBar = (props) => {
  return (<>
    <Button onClick={props.fnUnlockWorld} className={'mr-2 px-2'} color='warning'>
      <FontAwesomeIcon icon="lock"/>
      {/*<img src={'./icons/worlds/' + world.id + '.png'} alt={trans(world)} style={{width: 40, height: 40}}/>*/}
    </Button>

{/*
    {props.expedition !== undefined &&
    <Button
      onClick={()=> props.fnGoExpedition(props.expedition.id)}
      className={'mr-2 px-2'}
      size='sm'
      style={{height: 38}}
    >
      <FontAwesomeIcon icon='caret-right' fixedWidth/>
      <img src={'./icons/expedition/Icon_expedition_exploration.png'} alt='exp'/>
    </Button>
    }
*/}

    {props.expedition === undefined
      ? <>
{/*       <Button
         title=''
         onClick={() => props.addExpedition()}
         size='sm'
         style={{height: 38}}
       >
         <img src={'./icons/expedition/Icon_expedition_exploration.png'} alt={'exp'} style={{width: 40, height: 40}}/>

         <FontAwesomeIcon icon='plus'/>
       </Button>*/}
      </>:
      <ExpeditionButton
        expedition={props.expedition}
        active={true}
        onClick={() => {}}
      />
    }
  </>)
}

ExploreBar.propTypes = {
  expedition: PropTypes.object.isRequired,
  islands: PropTypes.arrayOf(PropTypes.object).isRequired,
  fnUnlockWorld: PropTypes.object.isRequired,
}

export default ExploreBar