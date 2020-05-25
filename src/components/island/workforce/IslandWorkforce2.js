import React from 'react'
// import PropTypes from 'prop-types';
import {useSelector} from "react-redux";

import IslandWorkforceOfTier from "./IslandWorkforceOfTier";

// import worlds from "../../../data/worlds";
import worldTypes from "../../../data/worldTypes";

// eslint-disable-next-line no-unused-vars
// function getWorkforce(tier, resi, iCols) {
//   let factor = 1 // 100% = no change
//   let percent = 100 // 100% = no change
//   const area_hk_used_slots = iCols.filter(iCol => iCol.areaId === resi.areaId)
//   if (area_hk_used_slots.length) {
//     // console.log({area_hk_used_slots});
//
//     const relevant_items = items.filter(item => area_hk_used_slots.map(slot => slot.item).includes(item.GUID))
//     relevant_items.forEach(item => {
//       if (item.hasOwnProperty('WorkforceModifierInPercent')) {
//         factor *= (100 + item.WorkforceModifierInPercent)/100
//         percent += item.WorkforceModifierInPercent
//       }
//     })
//     // console.log({relevant_items});
//   }
//
//   // welche berechnungs-art nehmen???
//   if (0)
//     factor = percent/100
//
//   return Math.round(resi.number * tier.maxInhabitants * factor);
// }
const IslandWorkforce = (props) => {
  // get island & world
  const activeWorldId = useSelector(state => state.personal.worldId)
  // const world = worlds.find(w => w.id === activeWorldId)
  const worldType = worldTypes.find(wt => wt.worldIDs.includes(activeWorldId))
  // const activeIslandId = useSelector(state => state.personal.islandId)
  // const island = useSelector(state => state.islands.find(i => i.id === activeIslandId))


  // const relevantTiers = tiers.filter(t => t.worldID === activeWorldId)

  // const relevantAreas = useSelector(state => state.areas).filter(a => a.islandId === island.id)
  //
  // const areaIds = relevantAreas.map(a => a.id)
  // const relevantResidences = useSelector(state => state.residences.filter(a => areaIds.includes(a.areaId)))

  // const iCols = useSelector(state => state.itemCollections.filter(a => areaIds.includes(a.areaId)))


  return (<>
    <div className="IslandWorkforce">
      <button className='sm' disabled>Summe</button>
      {worldType.socialClassIDs.map(t => (<IslandWorkforceOfTier key={t} tierId={t}/>))}
    </div>


{/*
    <div className="IslandWorkforce">
      <button disabled>pop</button>
      {relevantTiers.map(t => {
        // const a = relevantResidences.reduce((all, next) => all+next.residences[t.id-1]*t.maxInhabitants, 0)
        const a = sum(relevantResidences.filter(x => x.tierId === t.id).map(x => x.number*t.maxInhabitants))
        return <div key={t.id}><input type='text' value={a} readOnly/></div>
      })}
    </div>

    <div className="IslandWorkforce">
      <button disabled>work</button>
      {relevantTiers.map(t => {
        const a = relevantResidences.filter(x => x.tierId === t.id).reduce((all, resi) => all+getWorkforce(t, resi, iCols), 0)
        return <div key={t.id}><input type='text' value={a} readOnly/></div>
      })}
    </div>
*/}
  </>)
}

IslandWorkforce.propTypes = {
  // island: PropTypes.object.isRequired,
}

export default IslandWorkforce