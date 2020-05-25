import React from 'react'

import needs from "../../data/needs";
import NeedSwitch from "../NeedSwitch";

const Needs = (props) => {
  const {tierId} = props

  let loop={needs:null}

  const buildings = [
    "Marketplace",
    "Pub",
    "Church",
    "School",
    "Variety_theatre",
    "University",
    "Electricity",
    "Bank",
    "Members_club",
  ];
  return (<>
    {/*   Ressourcen - Bedürfnisse   */}
    <div className='mt-0 mb-1 text-center- text-left'>
      {needs.filter(n => n.tierIDs.includes(tierId) && n.influx[0] > 0 && !buildings.includes(n.key)).map((need, key) => {
        let nextTier = loop.needs !== null && loop.needs !== need.tierIDs[0]
        loop.needs = need.tierIDs[0]
        return (<React.Fragment key={key}>
          {nextTier && '|'}
          <NeedSwitch
            need={need}
            nIndex={need.tierIDs.indexOf(tierId)}
            needed={true}
            prohibitedNeeds={[]}
            // needed={true || island.unlockedNeeds.includes(need.key)}
            // prohibitedNeeds={[] || island.prohibitedNeeds.ofTier(tierId)}
            // fnSetIslandProhibitedNeeds={prohibitedNeeds => fnSetProhibitedNeeds(island, tierId, prohibitedNeeds)}
          />
        </React.Fragment>)
      })}
    </div>
  </>)
}

export default Needs