import React, {useState, useEffect, useRef} from 'react';
import PropTypes from 'prop-types/';
import {Button, NavItem, NavLink} from "reactstrap";

const IslandTab = (props) => {
  const {island, onClick, fnSetIslandName} = props;

  const [edit, setEdit] = useState(false)
  useEffect(() => {
    if (edit === true) {
      ref.current.focus()
      document.execCommand('selectAll', false, null)
    } else {
      ref.current.blur()
    }
  }, [edit])

  const ref = useRef(null)

  const handleContextMenu = (e) => {
    e.preventDefault()
    setEdit(true)
  }
  const saveName = (newName) => {
    fnSetIslandName(island.id, newName ? newName : 'undef1ned')
    setEdit(false)
  }
  const handleKey = (e) => {
    if (e.key === "Escape")  {
      e.target.innerText = island.name
      setEdit(false)
    }
    if (e.key === "Enter")  {
      e.preventDefault()
      saveName(e.target.innerText)
    }
  }

  return (
    <NavItem>
      <NavLink
        href='#'
        title={island.name + " (" + island.id + ")"}
        className={'text-light- mr-1-'}
        active={props.activeIsland === island.id}
        onClick={() => !edit ? onClick(island.id) : null}
        onContextMenu={(e) => !edit ? handleContextMenu(e) : null}
        // onDoubleClick={(e) => !edit ? handleContextMenu(e) : null}
      >
         <span
           ref={ref}
           contentEditable={edit}
           suppressContentEditableWarning={true}
           id={'iname_'+island.id}
           onBlur={(e) => edit ? saveName(e.target.innerText) : null}
           onKeyDown={e => handleKey(e)}
         >{island.name}</span>
      </NavLink>
    </NavItem>
  )
}

IslandTab.propTypes = {
  island: PropTypes.object.isRequired,
  activeIsland: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  fnSetIslandName: PropTypes.func.isRequired,
}

export default IslandTab