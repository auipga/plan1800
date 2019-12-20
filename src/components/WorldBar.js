import React from 'react'
import PropTypes from 'prop-types/'
// import WorldButton from "./WorldButton"
// import WorldTab from "./WorldTab"
import worlds from "../data/worlds"
import ExpeditionPreparation from "./ExpeditionPreparation";

const WorldBar = (props) => {
  return (<>
    {worlds.map((world, key) => (
      <props.Tag
        key={key}
        world={world}
        active={props.activeWorld === world.id}
        onClick={() => props.fnSwitchWorld(world.id)}
        unlocked={props.unlockedWorlds.includes(world.id)}
        exploration={props.explorations.find(exp => exp.target === world.id)}
      />
    ))}
  </>)
}

WorldBar.propTypes = {
  Tag: PropTypes.isRequired,//
  activeWorld: PropTypes.number,
  fnSwitchWorld: PropTypes.func.isRequired,
}

export default WorldBar