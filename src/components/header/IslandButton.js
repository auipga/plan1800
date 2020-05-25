import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import PropTypes from 'prop-types';
import {Button} from "reactstrap";

import * as islandSlice from "../../features/islandSlice";
import * as personalSlice from "../../features/personalSlice";
import track from "../../functions/tracking";

const IslandButton = (props) => {
  const {island} = props

  const [edit, setEdit] = useState(false)

  const dispatch = useDispatch()
  const activeIsland = useSelector(state => state.personal.islandId)
  const active = activeIsland === island.id;

  const handleClick = (id) => {
    if (!edit && activeIsland !== id) {
      dispatch(personalSlice.island({id}))
    }
  }
  const handleContextMenu = (e) => {
    e.preventDefault()
    setEdit(true)
    setTimeout(() => {
      document.getElementById('iname_'+island.id).focus()
      document.execCommand('selectAll',false,null)
    }, 50)
  }
  const handleKey = (e) => {
    const element = e.target

    if (e.key === "Escape")  {
      element.innerText = island.name
      setEdit(false)
      element.blur()
    }
    if (e.key === "Enter")  {
      element.blur()
    }
  }
  const saveName = (e) => {
    const newName = e.target.innerText
    if (newName !== '' && newName !== island.name) {
      dispatch(islandSlice.update({where: x => x.id === island.id, set: {name: newName}}))
      track.game('Island renamed', null)
    } else {
      e.target.innerText = island.name
    }
    setEdit(false)
  }

  return (
    <Button title={island.name + " (" + island.id + ")"}
            className={'IslandButton'}
            active={active}
            // outline={true}
            onClick={() => handleClick(island.id)}
            onContextMenu={(e) => !edit && handleContextMenu(e)}
    >
        <span contentEditable={edit} suppressContentEditableWarning
              id={'iname_'+island.id}
              onBlur={(e) => saveName(e)}
              onKeyDown={e => handleKey(e)}
              className={active ? 'text-underline' : ''}
        >{island.name}</span>
    </Button>
  )
}

IslandButton.propTypes = {
  island: PropTypes.object.isRequired,
};

export default IslandButton