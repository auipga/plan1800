import React, {useState} from "react";
import PropTypes from "prop-types";
import {useSelector} from "react-redux";

import {Button, Popover, PopoverBody} from "reactstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const PopoverButton = (props) => {
  const debug = useSelector(state => state.debug)
  const {id, placement = 'auto-start', trigger = 'legacy'} = props

  const [opened, setOpened] = useState(false)
  const toggleOpened = () => {
    if (!opened && props.openCallback !== undefined && typeof props.openCallback === 'function') {
      props.openCallback()
    }
    setOpened(!opened)
  }


  return (<div className={'PopoverWithTabsWrap ' + id}>
    <Button
      id={'popover_' + id}
      className='mr-2'
      size='sm'
      {...props.button}>
      {props.icon && <FontAwesomeIcon icon={props.icon} fixedWidth={props.fixedWidth}/>}
      {(!props.icon || props.caret) && <FontAwesomeIcon icon='caret-down' className={props.icon && 'ml-1'} />}
    </Button>
    <Popover
      className={'Popover ' + id+'-popover ' + (props.className||'')}
      placement={placement}
      trigger={!debug.includes('popover_no_close') ? trigger : 'click'}
      target={'popover_'+id}
      isOpen={opened}
      toggle={toggleOpened}
    >
      <PopoverBody>
        {props.children}
      </PopoverBody>
    </Popover>
  </div>)
}

PopoverButton.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  trigger: PropTypes.oneOf(["right", "hover", "focus", "legacy"]),
  placement: PropTypes.oneOf([
    'auto',
    'auto-start',
    'auto-end',
    'top',
    'top-start',
    'top-end',
    'right',
    'right-start',
    'right-end',
    'bottom',
    'bottom-start',
    'bottom-end',
    'left',
    'left-start',
    'left-end'
  ]),
  openCallback: PropTypes.func,

  icon: PropTypes.string,
  caret: PropTypes.bool,
  fixedWidth: PropTypes.bool,
  button: PropTypes.object,
}

export default PopoverButton