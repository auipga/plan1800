import React from "react";
import {useSelector} from "react-redux";

import {Badge} from "reactstrap";

import ResourceBadge from "./ResourceBadge";
import FertilitySwitch from "./FertilitySwitch";
import PopoverButton from "../../global/PopoverButton";
import ResourceInput from "./ResourceInput";

import worlds from "../../../data/worlds";
import {nth} from "../../../functions/helpers";
import {text_plan, text_plan_ucf} from "../../../data/translation/texts";


const Fertilities = (props) => {
  // get island & world
  // const activeWorldId = useSelector(state => state.personal.worldId)
  // const world = worlds.find(w => w.id === activeWorldId)
  // const worldType = worldTypes.find(wt => wt.worldIDs.includes(activeWorldId))
  const activeIslandId = useSelector(state => state.personal.islandId)
  const island = useSelector(state => state.islands.find(i => i.id === activeIslandId))


  const world = worlds.find(w => w.id === island.worldId)
  const possibleFertilities = world.fertilities
  const possibleResources = world.resources


  return (<>
    <PopoverButton
      id='Fertilities'
      placement='bottom-start'
      icon='pencil-alt'
      caret={true}
    >
      <div className="description">{text_plan_ucf('fertilities')}</div>
      <div className="text-nowrap">
        {possibleFertilities.map(fertility => (
          <FertilitySwitch
            key={fertility}
            fertility={fertility}
            enabled={island.fertilities?.includes(fertility) || false} /*compat false, ?.*/
          />
        ))}
      </div>

      {possibleResources.length > 0 && (<>
      <hr/>
      <div className="description">{text_plan_ucf('resources')}</div>
      {possibleResources.map((resource,key) => (<React.Fragment key={key}>
        {nth(3, key) && <br/>}
        <ResourceInput
          // key={resource}
          resource={resource}
          count={island.resources ? island.resources[resource]||0 : 0} /*compat*/
          // count={island.resources[resource] || 0} /*compat */
        />
      </React.Fragment>))}
      </>)}

      <hr/>
      <div className="description font-weight-bold"
           dangerouslySetInnerHTML={{ __html: text_plan_ucf('fertility-no-calc') }}
      />
    </PopoverButton>

    <Badge color={'secondary'} pill className={'mr-2 px-2'}>
      {possibleFertilities.filter(key => island.fertilities?.includes(key)).map(fertility =>
        <img key={fertility} src={"./icons/goods/" + fertility + ".png"} alt={fertility} title={fertility} className='mx-1 i24'/>
      )}
      {((!island.fertilities || !island.fertilities.length) && !Object.keys(island.resources||{}).length) && text_plan('no-fertilities')}
    </Badge>

    {possibleResources.filter(key => island.resources?.hasOwnProperty(key) && island.resources[key]).map(resource => (
      <ResourceBadge
        key={resource}
        resource={resource}
        count={island.resources ? island.resources[resource] : 0}
      />
    ))}
  </>)
}

export default Fertilities