import React from 'react'
import PropTypes from 'prop-types/'
import ExpeditionButton from "./ExpeditionButton";
import ExpeditionAdd from "./ExpeditionAdd";

const ExpeditionBar = (props) => {
  // const planable = false // unlockedWorlds.contains(Math.round(world.id/2)) && haveAddon: the passage || dlc-pack
  // const startable = false // wie unlockable, aber ohne started:true und timer===0
  // const unlockable = allPopulation.ofTier(world.tierId) >= world.requirement
  // const preparable =
  // || allPopulation.sumAbove(world.tierId+1) # sumAbove stimmt nicht weil 1 jornalero kein ingenieur ist
  // const explorationOf = worldId => props.expeditions.find(e => e.type === "expedition_exploration" && e.target === worldId)
  // const nonExplorations = () => props.expeditions.filter(e => e.type !== "expedition_exploration")

  return (<>
    <ExpeditionAdd
      disabled={!props.allowAdd}
      add={props.fnAddExpedition}
    />

    {props.expeditions.filter(e => e.type !== "expedition_exploration").map((expedition, key) => (
      <props.Tag
        key={key}
        // player={props.player}
        expedition={expedition}
        active={props.activeExpedition === expedition.id}
        onClick={() => props.fnSwitchExp(expedition.id)}
      />
    ))}
  </>)
}

ExpeditionBar.propTypes = {
  Tag: PropTypes.isRequired,//
  // player: PropTypes.object.isRequired,

  allowAdd: PropTypes.bool.isRequired,
  fnAddExpedition: PropTypes.func.isRequired,

  expeditions: PropTypes.object.isRequired,
  activeExpedition: PropTypes.number,
  fnSwitchExp: PropTypes.func.isRequired,
}

export default ExpeditionBar