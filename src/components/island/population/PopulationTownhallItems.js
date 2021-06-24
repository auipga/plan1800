import React from 'react'
import PropTypes from "prop-types";
import {useSelector} from "react-redux";

import ItemSelect from "../../item/ItemSelect";

import allItems from "../../../data/effects/items";
import worlds from "../../../data/worlds";
import {supportedEffects} from "../../../functions/slice";
import * as targetPools from "../../../data/effects/targetPools";
import {text_anno} from "../../../data/translation/texts";


const PopulationTownhallItems = (props) => {
  // get island & world
  const activeWorldId = useSelector(state => state.personal.worldId)
  const world = worlds.find(w => w.id === activeWorldId)
  // const worldType = worldTypes.find(wt => wt.worldIDs.includes(activeWorldId))
  // const activeIslandId = useSelector(state => state.personal.islandId)
  // const island = useSelector(state => state.islands.find(i => i.id === activeIslandId))

  const {areaId} = props
  const itemTargetGUIDs = targetPools.residenceItemTargetGUIDs(world.worldTypeId)

  const manuallyHidden1_2 = [
    //  TODO: double-check !
    /*z.B. Bedürfnisbonus Markt, Variete*/
    190726, 191466,
    191738, 191739, 191740,
    190677,
    /*nicht verfügbare Items*/
    190635, 190963
  ]
  const manuallyHidden2 = [
  //  TODO: double-check !
    191470, 191564, 191569, 191575,
    190672, 190673, 190674,
    190717, 190719,
    191573
  ]

  const relevantItems = allItems.filter(i =>
    (
      (world.worldTypeId === 1 && !manuallyHidden1_2.includes(i.GUID)
        && (i.Type === "TownhallItem" || (i.Type === "GuildhouseItem" && i.Allocation === "TownHall")))
      ||
      (world.worldTypeId === 2 && !manuallyHidden1_2.includes(i.GUID) && !manuallyHidden2.includes(i.GUID)
        && (i.Type === "TownhallItem" || (i.Type === "GuildhouseItem" && i.Allocation === "TownHall")))
      ||
      (world.worldTypeId === 3 && /*todo: check | performance only??: */i.GUID > 116040
        && i.Type === "GuildhouseItem" && i.Allocation === "Lodge")
      ||
      (world.worldTypeId === 4 && i.GUID > 116040 // todo: check assetviewer, welche items gehen in Enbesa?
        && (i.Type === "TownhallItem" || (i.Type === "GuildhouseItem" && i.Allocation === "TownHall")))
    )
    && i.hasOwnProperty('EffectTargets')
    && i.EffectTargets.some(it => itemTargetGUIDs.includes(it.GUID))
    && supportedEffects.find(se => i.hasOwnProperty(se.thingKey))
  )
  // .sort((a, b) => itemTargetGUIDs.indexOf(b.EffectTargets[0]) - itemTargetGUIDs.indexOf(a.EffectTargets[0]))
  // .sort((a, b) => itemTargetGUIDs.indexOf(b.GUID) - itemTargetGUIDs.indexOf(a.GUID))
  // .sort((a, b) => a.GUID - b.GUID)
  .map(i => ({...i, translation: text_anno(i.GUID)}))
  .sort((a, b) => a.translation > b.translation ? 1 : -1)

  return (<div className="PopulationTownhallItems">
    <ItemSelect items={relevantItems} areaId={areaId} slot={1} usageIn='TownHall' />
    <ItemSelect items={relevantItems} areaId={areaId} slot={2} usageIn='TownHall' />
    <ItemSelect items={relevantItems} areaId={areaId} slot={3} usageIn='TownHall' />
    <ItemSelect items={relevantItems} areaId={areaId} slot={4} usageIn='TownHall' />
  </div>)
}

PopulationTownhallItems.propTypes = {
  areaId: PropTypes.number.isRequired
}

export default PopulationTownhallItems