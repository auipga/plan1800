import React from 'react'
import {Button, Nav, NavItem, NavLink} from 'reactstrap'
import PropTypes from 'prop-types/'
import IslandTab from "./IslandTab";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import IslandButton from "./IslandButton";

const IslandBar = (props) => {
  return (<>
    {props.useTabs ?
      <Nav tabs>
        {!props.islands.length && props.worldId > 1 &&
        <NavItem>
          <NavLink onClick={props.fnLockWorld}>
            <FontAwesomeIcon icon="unlock"/>{props.worldId}
          </NavLink>
        </NavItem>
        }
        {props.islands.map((island, key) => (
          <IslandTab
            key={key}
            island={island}
            activeIsland={props.activeIsland}
            onClick={props.onClick}
            fnSetIslandName={props.fnSetIslandName}
          />
        ))}
        <NavItem>
          <NavLink onClick={props.add}>
            <FontAwesomeIcon icon="plus-square" />
          </NavLink>
        </NavItem>
      </Nav>
      :
      <div className_='overflow-auto text-nowrap'>
        {!props.islands.length && props.worldId > 1 &&
        <Button className={'mr-2 px-2'} onClick={props.fnLockWorld} color='warning'>
          <FontAwesomeIcon icon="unlock"/>
        </Button>
        }
        <Button className={'mr-2 px-2'} onClick={props.add}>
          <FontAwesomeIcon icon="plus-circle"/>
        </Button>
        {props.islands.map((island, key) => (
          <IslandButton
            key={key}
            island={island}
            activeIsland={props.activeIsland}
            onClick={props.onClick}
            fnSetIslandName={props.fnSetIslandName}
          />
        ))}
      </div>
    }
  </>)
}

IslandBar.propTypes = {
  useTabs: PropTypes.bool,
  activeIsland: PropTypes.number,
  add: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  fnSetIslandName: PropTypes.func.isRequired,
  islands: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default IslandBar