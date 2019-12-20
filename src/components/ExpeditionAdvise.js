import React from 'react'
import {Button, ButtonGroup} from 'reactstrap'
import PropTypes from 'prop-types/'
import * as ex from '../functions/expeditions'
import {orDefault} from '../functions/helpers'

const ExpeditionAdvise = (props) => {
  const getAdvices = () => orDefault(props.expedition.fixedAdvises, orDefault(props.expedition.advises, []))

  const {advises} = {advises: getAdvices()} // props
  const toggleAdvise = (advise) => {
    const newAdvises =
      advises.includes(advise)
        ? advises.filter(f => f !== advise)
        : [...advises.slice(-2), advise]

    props.fnUpdate({...props.expedition, advises: newAdvises})
  }

  return (<>
    <ButtonGroup>
      {ex.skills.map(type => (
        <Button onClick={() => toggleAdvise(type)} color={'secondary'} active={advises.includes(type)}>
          <img src={'./icons/expedition/Expedition'+type+'.png'} alt={type}/>
        </Button>
      ))}
    </ButtonGroup>
  </>)
}

ExpeditionAdvise.propTypes = {
  // useTabs: PropTypes.bool,
  expedition: PropTypes.object.isRequired,
  fnUpdate: PropTypes.func.isRequired,
}

export default ExpeditionAdvise