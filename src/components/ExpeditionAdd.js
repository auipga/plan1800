import React, {useState} from 'react'
import PropTypes from 'prop-types/'
import {Button, ButtonGroup, Popover, PopoverBody} from 'reactstrap'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

const manualTypes = [
  // "expedition_generic",
  // "expedition_exploration", // Discovery
  "expedition_rescue_mission",
  "expedition_wildlife", // Zoological
  "expedition_archeology", // Archeological
  "expedition_botanical", // Botanical
  "pirate_hunt",
]

const ExpeditionAdd = (props) => {
  const [opened, setOpened] = useState(false)
  const toggle = () => setOpened(prevState => !prevState)

  const [expType, setExpType] = useState(null)
  const [skulls, setSkulls] = useState(null)

  const add = () => {
    props.add(expType, skulls)
    setExpType(null)
    setSkulls(null)
    toggle()
  }
  return (
    <>
      <Button type='button' id='popover_add_expedition' className='mr-2 px-2' disabled={props.disabled}>
        <FontAwesomeIcon icon="plus-circle"/>
        {/*<img src={'./icons/expedition/Icon_expedition_generic.png'} alt='exp'/>*/}
        <FontAwesomeIcon icon='caret-down' className='ml-1'/>
      </Button>
      <Popover placement="bottom-start" trigger='legacy' isOpen={opened} target='popover_add_expedition' toggle={toggle}>
        <PopoverBody>
          <div className='font-italic'>Add new expedition</div>

          <ButtonGroup className='my-2 d-block' size={'sm'}>
            {manualTypes.map(type => (
              <Button onClick={() => setExpType(type)} active={expType === type}>
                <img src={'./icons/expedition/Icon_' + type + '.png'} alt={type}/>
              </Button>
            ))}
          </ButtonGroup>

          {/*difficulty selection*/}
          <ButtonGroup className='mr-3'>
            {[1, 2, 3].map(value => (
              <Button onClick={() => setSkulls(value)} color={'secondary'} active={skulls >= value} className='px-1'>
                <FontAwesomeIcon icon={'skull'}/>
                {/*<img src={'./icons/expedition/ExpeditionSkulls' + value + '.png'} alt={value}/>*/}
              </Button>
            ))}
          </ButtonGroup>

          <Button onClick={add} color={'secondary'} disabled={!expType || !skulls}>
            <FontAwesomeIcon icon={'check'}/>
          </Button>
        </PopoverBody>
      </Popover>
    </>
  )
}

ExpeditionAdd.propTypes = {
  disabled: PropTypes.bool,
  add: PropTypes.func.isRequired,
}

export default ExpeditionAdd