import React from 'react'
import {Button} from 'reactstrap'
import PropTypes from 'prop-types/'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const ExpeditionPreparationBar = (props) => {
  return (<>
      <div className_='overflow-auto text-nowrap' className='mr-n2'>

        <Button onClick={props.addPreparation} className={'mr-2 px-2'}>
          <FontAwesomeIcon icon="plus-square" />
          <FontAwesomeIcon icon="ship" className='ml-2' />
          <FontAwesomeIcon icon="dolly-flatbed" className='ml-2' />
        </Button>

        {props.preparations.map((prep, key) => (
          <Button
            key={key}
            className={'mr-2 '}
            active={props.activePreparation === prep.id}
            onClick={() => props.onClick(prep.expId, prep.id)}
          >
            {prep.id}
          </Button>
        ))}
      </div>
  </>)
}

ExpeditionPreparationBar.propTypes = {
  addPreparation: PropTypes.func.isRequired,
  preparations: PropTypes.arrayOf(PropTypes.object).isRequired,
  activePreparation: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default ExpeditionPreparationBar