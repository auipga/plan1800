import React from 'react'
import {Button, Nav} from 'reactstrap'
import PropTypes from 'prop-types/'
import WorldBar from "./WorldBar";
import WorldTab from "./WorldTab"
import WorldButton from "./WorldButton";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import ExpeditionPreparation from "./ExpeditionPreparation";

const WorldExpBar = (props) => {
  // const nonExplorations = () => props.expeditions.filter(e => e.type !== "expedition_exploration")

  const worldBar = (<>
    <WorldBar
      explorations={props.expeditions.filter(e => e.type === "expedition_exploration")}
      Tag={props.useTabs ? WorldTab : WorldButton}
      unlockedWorlds={props.unlockedWorlds}
      activeWorld={props.activeSection === "worlds" ? props.activeWorld : null}
      fnSwitchWorld={props.fnSwitchWorld}
    />
  </>)

  const expeditionSection = (<>
    <Button
      className='mr-2'
      active={props.activeSection === "expeditions"}
      onClick={() => props.fnSwitchSection("expeditions")}
    >
      <img src={'./icons/expedition/Icon_expedition_generic.png'} alt='exp'/>
      {/*<FontAwesomeIcon icon={''}/>*/}
    </Button>
  </>)

  const all = (<>
    {worldBar}
    {props.expeditionsUnlocked && expeditionSection}
  </>)

  return (<>
    <div className='d-inline-block'>
      {props.useTabs
        ?
        <Nav tabs>{all}</Nav>
        :
        all
      }
    </div>
  </>)
}

WorldExpBar.propTypes = {
  useTabs: PropTypes.bool,

  activeWorld: PropTypes.number,
  fnSwitchWorld: PropTypes.func.isRequired,

  expeditionsUnlocked: PropTypes.bool,

  activeSection: PropTypes.string.isRequired,
  fnSwitchSection: PropTypes.func.isRequired,
}

export default WorldExpBar