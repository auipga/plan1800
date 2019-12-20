import React, {useState} from 'react'
import {Button, Popover, PopoverHeader, PopoverBody} from "reactstrap"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const Support = () => {
  const [opened, setOpened] = useState(false)

  return (<>
      <Button type='button' id='popover_support' className='mr-2'>
        <FontAwesomeIcon icon={'question-circle'} />
      </Button>
      <Popover placement='bottom-end' trigger='legacy' isOpen={opened} target='popover_support' toggle={() => {setOpened(!opened)}}>
        <PopoverHeader className='bg-dark'>
          Support
        </PopoverHeader>
        <PopoverBody style={{minHeight:80}}>
          <ul className='list-unstyled'>
            <li><a href='https://youtu.be/ntDAreoiJA0'>
              <FontAwesomeIcon size='lg' fixedWidth icon={["fab", "youtube"]} /> Tutorial</a>
            </li>

            <li><a href='https://t.me/plan1800'>
              <FontAwesomeIcon size='lg' fixedWidth icon={["fab", "telegram"]} /> Support-Gruppe</a>
            </li>

            <li><a href='https://forums-de.ubisoft.com/showthread.php/218755-Plan1800-noch-so-ein-Calculator'>
              <FontAwesomeIcon size='lg' fixedWidth icon="keyboard" /> ubisoft Forum</a>
            </li>
          </ul>
        </PopoverBody>
      </Popover>
    </>
  )
}

export default Support