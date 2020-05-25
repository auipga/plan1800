import React, {useState} from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import {Nav, NavItem, NavLink, Popover, PopoverBody, PopoverHeader, TabContent} from "reactstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useSelector} from "react-redux";


const PopoverWithTabs = (props) => {
  const debug = useSelector(state => state.debug)
  const {id, tabs, placement = 'auto-start', trigger = 'legacy'} = props

  const [opened, setOpened] = useState(false)
  const toggleOpened = () => {
    if (!opened && typeof props.openCallback === 'function') {
      props.openCallback()
    }
    setOpened(!opened)
    setActiveTab(tabs.find(t => !t.hidden).name)
  }

  const [activeTab, setActiveTab] = useState(null)
  const toggleActiveTab = tab => {
    if(activeTab !== tab) {
      setActiveTab(tab)
    }
  }

  const visibleTabs = tabs.filter(t => !t.hidden)
  if (visibleTabs.length === 0) {
    return <>{id} hat keine sichtbaren Tabs</>
  }


  return (
    <Popover
      className={'PopoverWithTabs ' + id+'-popover ' + props.className}
      placement={placement}
      trigger={!debug.includes('popover_no_close') ? trigger : 'click'}
      target={'popover_'+id}
      isOpen={opened}
      toggle={toggleOpened}
    >
      {visibleTabs.length >= 2 &&
      <PopoverHeader>
        <Nav tabs vertical={false}>{/*TODO*/}
          {visibleTabs.map(tab => (
            <NavItem key={tab.name} title={tab.name}>
              <NavLink
                className={classnames({ active: activeTab === tab.name, "py-1": !!tab.icon, "py-0": !tab.icon })}
                onMouseEnter={() => { toggleActiveTab(tab.name) }}
              >
                {tab.icon
                  ? <FontAwesomeIcon icon={tab.icon} fixedWidth color={'#343a40'}/>
                  : <img src={tab.img} alt={tab.name} className='tabIcon'/>
                }
              </NavLink>
            </NavItem>
          ))}
        </Nav>
      </PopoverHeader>
      }
      <PopoverBody>
        <TabContent activeTab={activeTab}>
          {props.children}
        </TabContent>
      </PopoverBody>
    </Popover>

  )
}

PopoverWithTabs.propTypes = {
  id: PropTypes.string.isRequired,
  tabs: PropTypes.array.isRequired,
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
}

export default PopoverWithTabs