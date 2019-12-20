import React, {} from 'react';
import {Button} from "reactstrap/es";
import PropTypes from 'prop-types/';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {orDefault} from '../functions/helpers'
import * as ex from '../functions/expeditions'

const ExpeditionButton = (props) => {
  const {expedition} = props

  if (expedition === undefined) {/*todo*/
    return <>expedition === undefined</>
  }

  const expType = orDefault(expedition.fixedType, expedition.type)
  const skulls = orDefault(expedition.fixedSkulls, expedition.skulls)
  const advises = orDefault(expedition.fixedAdvises, orDefault(expedition.advises, []))

  return (
    <Button
      title={expType}
      className={'mr-2'}
      active={props.active}
      onClick={() => props.onClick(expedition.id)}
      size='sm'
      style={{height: 38}}
    >
      <img src={'./icons/expedition/Icon_'+expType+'.png'} alt={ex.explorationStates[expedition.state].alt} style={{width: 40, height: 40}}/>
      {/*<img src={'./icons/expedition/ExpeditionSkulls' + expedition.skulls + '.png'} alt={expedition.skulls}/>*/}

      {Array(skulls).fill(<FontAwesomeIcon icon={'skull'} fixedWidth/>)}

      {/*{advises.map(type => (*/}
      {/*  <img src={'./icons/expedition/Expedition'+type+'.png'} alt={type}/>*/}
      {/*))}*/}
      {advises.length < 3 && <FontAwesomeIcon icon='question'/>}

      {/*<img src={ex.explorationStates[expedition.state].img} alt={ex.explorationStates[expedition.state].alt} style={{width: 40, height: 40}}/>*/}
    </Button>
  )
}

ExpeditionButton.propTypes = {
  active: PropTypes.bool,
  expedition: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default ExpeditionButton