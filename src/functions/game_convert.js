import worlds from "../data/worlds";
import {producers} from "../data/worldGeneration/buildings";
import {autoincrement, push} from "./obj";

import {delay, sumBy} from "./helpers";
import track from "./tracking";

import * as personalSlice from "../features/personalSlice";
import * as islandSlice from "../features/islandSlice";
import * as residenceSlice from "../features/residenceSlice";
import * as producerSumSlice from "../features/producerSumSlice";
import * as producerSlice from "../features/producerSlice";
import * as areaSlice from "../features/areaSlice";
import * as productivitySlice from "../features/productivitySlice";
import * as sharingSlice from "../features/sharingSlice";
import tiers from "../data/tiers";
import boosts from "../data/effects/boosts";
import {genResidenceCount} from "../features/residenceSlice";

const log = (msg) => {
  console.log(msg)
  track.data(msg)
}

export const rebuildGameFromVeryOld = (store, dispatch, data, callback) => {
  track.disable()

  const oldMapping = [
    {GUID: 100780, OldName: "Electricity"},            // Kraftwerk
    {GUID: 100779, OldName: ""},                       // Kohlekraftwerk
    {GUID: 117547, OldName: ""},                       // Gasbetriebenes Kraftwerk
    {GUID: 114751, OldName: "Heater"},                 // Heizofen

    {GUID: 1010266, OldName: "Wood"},                  // Holzfällerhütte
    {GUID: 100451, OldName: "Timber"},                 // Sägewerk
    {GUID: 1010266, OldName: "Wood_6"},                // Holzfällerhütte
    {GUID: 100451, OldName: "Timber_6"},               // Sägewerk
    {GUID: 114703, OldName: "Wood_8"},                 // Holzfällerhütte
    {GUID: 114704, OldName: "Timber_8"},               // Sägewerk
    {GUID: 1010278, OldName: "Fish"},                  // Fischerei
    {GUID: 1010265, OldName: "Potato"},                // Kartoffelhof
    {GUID: 1010294, OldName: "Schnapps"},              // Schnapsbrennerei
    {GUID: "1010294_3", OldName: "Schnapps_8"},        // Schnapsbrennerei
    {GUID: 1010267, OldName: "Wool"},                  // Schäferei
    {GUID: 1010315, OldName: "Work_clothes"},          // Weberei

    {GUID: 100416, OldName: "Clay"},                   // Lehmgrube
    {GUID: 1010283, OldName: "Bricks"},                // Ziegelei
    {GUID: 100416, OldName: "Clay_6"},                 // Lehmgrube
    {GUID: 1010283, OldName: "Bricks_6"},              // Ziegelei
    {GUID: 101267, OldName: "Clay_?"},                 // Lehmgrube
    {GUID: 101268, OldName: "Bricks_?"},               // Ziegelei
    {GUID: 1010269, OldName: "Pigs"},                  // Schweinezucht
    {GUID: 1010316, OldName: "Sausages"},              // Metzgerei
    {GUID: 1010288, OldName: "Sails"},                 // Segelweberei
    {GUID: 1010288, OldName: "Sails_6"},               // Segelweberei
    {GUID: 101265, OldName: "Sails_?"},                // Segelweberei
    {GUID: 1010262, OldName: "Grain"},                 // Getreidefarm
    {GUID: 1010313, OldName: "Flour"},                 // Mühle
    {GUID: 1010291, OldName: "Bread"},                 // Bäckerei
    {GUID: 1010305, OldName: "Iron"},                  // Eisenmine
    {GUID: 1010298, OldName: "Charcoal_kiln"},         // Köhlerei
    {GUID: 114705, OldName: "Charcoal_kiln_8"},        // Köhlerei
    {GUID: 1010297, OldName: "Furnace"},               // Hochofen
    {GUID: 1010296, OldName: "Steel_beams"},           // Stahlwerk
    {GUID: 1010299, OldName: "Weapons"},               // Kanonengießerei
    {GUID: 1010312, OldName: "Tallow"},                // Wasenmeisterei
    {GUID: 1010281, OldName: "Soap"},                  // Siederei
    {GUID: 1010264, OldName: "Hops"},                  // Hopfenplantage
    {GUID: 1010314, OldName: "Malt"},                  // Mälzerei
    {GUID: 1010292, OldName: "Beer"},                  // Brauerei
    {GUID: 1010560, OldName: "Quartz_sand"},           // Quarzgrube
    {GUID: 1010319, OldName: "Glass"},                 // Glashütte
    {GUID: 1010285, OldName: "Windows"},               // Fensterfabrik
    {GUID: 1010263, OldName: "Beef"},                  // Rinderfarm
    {GUID: 100654, OldName: "Red_peppers"},            // Paprikafarm
    {GUID: 1010293, OldName: "Goulash"},               // Großküche
    {GUID: 1010295, OldName: "Canned_food"},           // Konservenfabrik
    {GUID: "1010295_3", OldName: "Canned_food_9"},     // Konservenfabrik
    {GUID: 1010304, OldName: "Coal"},                  // Kohlemine
    {GUID: 1010284, OldName: "Sewing_machines"},       // Nähmaschinenfabrik
    {GUID: "1010284_2", OldName: "Sewing_machines_6"}, // Nähmaschinenfabrik
    {GUID: "1010340_1", OldName: ""},                  // Rumbrennerei
    {GUID: 1010558, OldName: "Furs"},                  // Jagdhütte
    {GUID: "1010318_1", OldName: ""},                  // Baumwollweberei
    {GUID: 1010325, OldName: "Fur_coats"},             // Schneiderei
    {GUID: 1010309, OldName: "Cement"},                // Zementmine
    {GUID: 1010280, OldName: "Reinforced_concrete"},   // Betonwerk
    {GUID: 101331, OldName: "Oil"},                    // Ölraffinerie
    {GUID: 1010308, OldName: "Copper"},                // Kupfermine
    {GUID: 1010307, OldName: "Zinc"},                  // Zinkmine
    {GUID: 1010282, OldName: "Brass"},                 // Messinghütte
    {GUID: 1010282, OldName: "Brass_8"},               // Messinghütte
    {GUID: 101250, OldName: "Glasses"},                // Brillenfabrik
    {GUID: 1010302, OldName: "Steam_motors"},          // Motorenfabrik
    {GUID: 1010310, OldName: "Saltpeter"},             // Salpeterwerk
    {GUID: 1010300, OldName: "Dynamite"},              // Dynamitfabrik
    {GUID: 1010301, OldName: "Advanced_weapons"},      // Geschützfabrik
    {GUID: "1010333_1", OldName: ""},                  // Kautschuckplantage
    {GUID: 1010323, OldName: "Penny_farthings"},       // Hochrad-Werkhalle
    {GUID: "101252_1", OldName: ""},                   // Kaffeerösterei
    {GUID: "1010311_1", OldName: ""},                  // Goldmine
    {GUID: 1010327, OldName: "Gold"},                  // Goldschmelze
    {GUID: 1010324, OldName: "Pocket_watches"},        // Uhrenwerkstatt
    {GUID: 1010321, OldName: "Filaments"},             // Glühfadenfabrik
    {GUID: 1010286, OldName: "Light_bulbs"},           // Glühbirnenfabrik
    {GUID: 100655, OldName: "Grapes"},                 // Weinberg
    {GUID: 100659, OldName: "Champagne"},              // Sektkellerei
    {GUID: 1010320, OldName: "Wood_veneers"},          // Kunstschreinerei
    {GUID: "1010342_1", OldName: ""},                  // Zigarren-Manufaktur
    {GUID: "1010341_1", OldName: ""},                  // Schokoladenfabrik
    {GUID: "1010339_1", OldName: ""},                  // Perlenfarm
    {GUID: 1010328, OldName: "Jewellery"},             // Goldschmiede
    {GUID: 1010326, OldName: "Gramophones"},           // Phonographenfabrik
    {GUID: 1010289, OldName: "Chassis"},               // Kutschen-Werkhalle
    {GUID: 1010303, OldName: "Steam_carriages"},       // Dampfwagenfabrik
    {GUID: 101263, OldName: "Plantains"},              // Bananenplantage
    {GUID: 101262, OldName: "Fish_Oil"},               // Fischölfabrik
    {GUID: 101264, OldName: "Fried_plantains"},        // Küche
    {GUID: 1010331, OldName: "Cotton"},                // Baumwollplantage
    {GUID: 1010318, OldName: "Cotton_fabric_6"},       // Baumwollweberei
    {GUID: "1010318_1", OldName: "Cotton_fabric"},     // Baumwollweberei
    {GUID: 1010329, OldName: "Sugar_cane"},            // Zuckerrohrplantage
    {GUID: 1010340, OldName: "Rum_6"},                 // Rumbrennerei
    {GUID: "1010340_1", OldName: "Rum"},               // Rumbrennerei
    {GUID: 101272, OldName: "Alpaca_wool"},            // Alpakafarm
    {GUID: 101266, OldName: "Ponchos"},                // Ponchoweberei
    {GUID: 1010333, OldName: "Caoutchouc_6"},          // Kautschuckplantage
    {GUID: "1010333_1", OldName: "Caoutchouc"},        // Kautschuckplantage
    {GUID: 1010339, OldName: "Pearls_6"},              // Perlenfarm
    {GUID: "1010339_1", OldName: "Pearls"},            // Perlenfarm
    {GUID: 101269, OldName: "Beef_6"},                 // Rinderfarm
    {GUID: 101270, OldName: "Corn"},                   // Maisplantage
    {GUID: 101271, OldName: "Tortillas"},              // Tortilla-Bäckerei
    {GUID: 101251, OldName: "Coffee_beans"},           // Kaffeeplantage
    {GUID: 101252, OldName: "Coffee_6"},               // Kaffeerösterei
    {GUID: "101252_1", OldName: "Coffee"},             // Kaffeerösterei
    {GUID: "101252_3", OldName: "Coffee_9"},           // Kaffeerösterei
    {GUID: 1010311, OldName: "Gold_ore_6"},            // Goldmine
    {GUID: "1010311_1", OldName: "Gold_ore"},          // Goldmine
    {GUID: 1010561, OldName: "Oil_6"},                 // Ölraffinerie
    {GUID: "1010561_1", OldName: "Oil"},               // Ölraffinerie
    {GUID: 101415, OldName: "Felt"},                   // Filzfabrik
    {GUID: 101273, OldName: "Bowler_hats"},            // Hutmacherei
    {GUID: "1010292_2", OldName: "Beer_6"},            // Brauerei
    {GUID: 1010330, OldName: "Tobacco"},               // Tabakplantage
    {GUID: 101296, OldName: "Wood_veneers_6"},         // Kunstschreinerei
    {GUID: 1010342, OldName: "Cigars_6"},              // Zigarren-Manufaktur
    {GUID: "1010342_1", OldName: "Cigars"},            // Zigarren-Manufaktur
    {GUID: 1010317, OldName: "Sugar"},                 // Zuckerraffinerie
    {GUID: 1010332, OldName: "Cocoa"},                 // Kakaoplantage
    {GUID: 1010341, OldName: "Chocolate_6"},           // Schokoladenfabrik
    {GUID: "1010341_1", OldName: "Chocolate"},         // Schokoladenfabrik
    {GUID: "112690_1", OldName: ""},                   // Gasförderstätte
    {GUID: 114703, OldName: "Wood_8"},                 // Holzfällerhütte
    {GUID: 114704, OldName: "Timber_8"},               // Sägewerk
    {GUID: 114705, OldName: "Charcoal_kiln_8"},        // Köhlerei
    {GUID: 112666, OldName: "Whale_Oil"},              // Walfängerei
    {GUID: 112667, OldName: "Caribou_Meat"},           // Rentier-Jagdhütte
    {GUID: 112668, OldName: "Pemmican"},               // Pemmikan-Räucherei
    {GUID: 112676, OldName: "Goose_Feathers"},         // Gänsefarm
    {GUID: 112674, OldName: "Seal_Skin"},              // Robbenfängerei
    {GUID: 112675, OldName: "Sleeping_Bags"},          // Schlafsackfabrik
    {GUID: 112679, OldName: "Oil_Lamps"},              // Öllampenfabrik
    {GUID: "1010294_3", OldName: ""},                  // Schnapsbrennerei
    {GUID: "1010295_3", OldName: ""},                  // Konservenfabrik
    {GUID: 112673, OldName: "Bear_Fur"},               // Bären-Jagdhütte
    {GUID: 116034, OldName: "Furs_9"},                 // Meisterhafte Jagdhütte
    {GUID: 112672, OldName: "Parkas"},                 // Parkaschneiderei
    {GUID: 112682, OldName: "Huskies"},                // Huskyfarm
    {GUID: 112681, OldName: "Sleds"},                  // Schlittenmanufaktur
    {GUID: 112680, OldName: "Husky_Sleds"},            // Hundeschlitten-Station
    {GUID: "101252_3", OldName: ""},                   // Kaffeerösterei
    {GUID: 116029, OldName: "Gold_ore_9"},             // Tiefe Goldmine
    {GUID: 112690, OldName: "Gas"},                    // Gasförderstätte
  ]

  data.islands.forEach(i => {
    const world = worlds.find(w => w.id === i.worldId)
    const islandId = i.id

    console.log({world: i.worldId, island: islandId, name: i.name})

    // island
    dispatch(islandSlice.create({world, size: 0, name: i.name, id: islandId}))

    // fertilities
    i.fertilities.forEach(fertility => {
      dispatch(islandSlice.addFertility({islandId, fertility}))
    })

    // resources
    Object.keys(i.regionalResources).forEach(resource => {
      dispatch(islandSlice.setResourceCount({
        islandId,
        resource,
        number: i.regionalResources[resource]
      }))
    })

    // residences
    Object.keys(i.residences).forEach(tierId => {
      // console.log(islandId, tierId, i.residences[tierId])
      dispatch(residenceSlice.update({
        where: x => x.islandId === islandId && x.tierId === parseInt(tierId),
        set: {number: i.residences[tierId]}
      }))
    })

    // producers
    Object.keys(i.buildings).forEach(producerName => {
      const p = oldMapping.find(p => p.OldName === producerName)
      const value = i.buildings[producerName]
      if (p) {
        const {GUID} = p
        // console.log(producerName, p)
        dispatch(producerSumSlice.create({islandId, GUID}))
        const firstArea = store.getState().areas.find(a => a.usage === 'TradeUnion' && a.islandId === islandId)
        dispatch(producerSlice.create({area: firstArea, GUID, isDefault: true}))
        if (value) {
          dispatch(producerSlice.change({islandId: i.id, GUID, pState: 'running', delta: value}))
        }
      } else if (value > 0) {
        console.log('can not map producer named', producerName, 'with value', value)
      }
    })

    // buildingsWithElectricity
    Object.keys(i.buildingsWithElectricity)
    .filter(b => i.buildings.hasOwnProperty(b) && i.buildings[b])
    .forEach(producerName => {
      const p = oldMapping.find(p => p.OldName === producerName)
      const value = i.buildingsWithElectricity[producerName] === "all" ? 99 : i.buildingsWithElectricity[producerName]
      if (p && value > 0) {
        const {GUID} = p
        const firstArea   = store.getState().areas.find(a => a.usage === 'TradeUnion' && a.islandId === islandId)
        const increment = autoincrement(store.getState().areas)
        dispatch(areaSlice.create({worldId: i.worldId, islandId, usage: 'TradeUnion', producerGUID: GUID, asDefault: true}))
        dispatch(producerSlice.move({GUID: GUID, sourceAreaId: firstArea.id, targetAreaId: increment, amount: value}))
        dispatch(producerSlice.toggleElectricity({areaId: increment}))
      } else if (value > 0) {
        console.log('can not map producer named', producerName, 'with value', value, '(electricity)')
      }
    })

    // productivityBoost
    Object.keys(i.productivityBoost).forEach(producerName => {
      const p = oldMapping.find(p => p.OldName === producerName)
      const number = i.productivityBoost[producerName]
      if (p) {
        const {GUID} = p
        dispatch(productivitySlice.set({islandId, GUID, number}))
      } else {
        console.log('can not map producer named', producerName, 'with ProdBoost', number)
      }
    })
  })

  // routes
  data.tradeSyncs.forEach(sync => {
    const p = oldMapping.find(p => p.OldName === sync.good)
    const GUID = producers.find(x => x.GUID === p.GUID)?.OutputProduct

    if (p && GUID) {

      const {islandIDs} = sync

      dispatch(sharingSlice.add({GUID, source: islandIDs[0], target: islandIDs[1]}))
      if (islandIDs.length > 2) {
        dispatch(sharingSlice.add({GUID, source: islandIDs[0], target: islandIDs[2]}))
        dispatch(sharingSlice.add({GUID, source: islandIDs[1], target: islandIDs[2]}))
      }
      if (islandIDs.length > 3) {
        dispatch(sharingSlice.add({GUID, source: islandIDs[0], target: islandIDs[3]}))
        dispatch(sharingSlice.add({GUID, source: islandIDs[1], target: islandIDs[3]}))
        dispatch(sharingSlice.add({GUID, source: islandIDs[2], target: islandIDs[3]}))
      }
      if (islandIDs.length > 4) {
        dispatch(sharingSlice.add({GUID, source: islandIDs[0], target: islandIDs[4]}))
        dispatch(sharingSlice.add({GUID, source: islandIDs[1], target: islandIDs[4]}))
        dispatch(sharingSlice.add({GUID, source: islandIDs[2], target: islandIDs[4]}))
        dispatch(sharingSlice.add({GUID, source: islandIDs[3], target: islandIDs[4]}))
      }
      if (islandIDs.length > 5) {
        alert('You did sync goods with more than 5 islands. Please send me your JSON-file and I will convert it for you.\n' +
          'Else you need to create those routes again.\n' +
          'Good: '+sync.good)
      }
    } else {
      console.log('can not map route', sync)
    }
  })


  delay(100).then(() => {
    // navigation
    dispatch(personalSlice.upsert({
      nameOfMatch: (data.gameName||"unnamed")+" (converted)",
      module: 'islands',
      worldId: data.activeWorld,
      islandId: data.activeIslands[""+data.activeWorld] || null,
      islandIds: {
        1: data.activeIslands["1"] || null,
        2: data.activeIslands["2"] || null,
        3: data.activeIslands["3"] || null,
        4: data.activeIslands["4"] || null,
      },
      theme: data.darkMode === true ? 'theme-dark' : data.darkMode === false ? 'theme-light' : 'theme-auto',
    }))

    delay(100).then(() => {
      track.enable()
      callback()
    })
  })
}

export const update2020_12_26 = (state) => {
  console.log('Running update 2020-12-26')

  state.personal.version = {GU: 9.2, date: "2020-12-26"}

  // update electricity notation:
  // old: producer.e = ["area"]
  // new: producer.boosts = ["electricity"]
  state.producers.forEach(i => {
    if (i.hasOwnProperty("e")) {
      if (Array.isArray(i.e) && i.e.includes('area')) {
        // add new notation
        i.boosts = ['electricity']
        /* this is a different approach, which is not in use:
          // unapply effect of electricity
          dispatch(producerSlice.changeByBoost({areaId: i.areaId, boostId: 'electricity', isRemoval: true}))
          // remove old notation
          delete i.e
          // apply new (notation + effect)
          dispatch(producerSlice.toggleBoost({areaId: i.areaId, GUID: i.GUID, boost: 'electricity'}))
        */
        console.log(' - Updating electricity in world '+i.worldId+', island '+i.islandId+', area '+i.areaId+' ('+i.d_name+')')
      }

      // remove old notation
      delete i.e

    }
  })

  console.log('Done.')
}

export const update2020_12_27 = (state) => {
  console.log('Running update 2020-12-27')

  state.personal.version = {GU: 9.2, date: "2020-12-27"}

  // add residenceCounts for scholars:

  const tier12 = tiers.find(t => t.id === 12)

  state.residences.filter(a => a.tierId === 5).forEach(r5 => {
    if (state.residences.find(a => a.areaId === r5.areaId && a.tierId === 12)) {
      console.log(' - skip (area '+r5.areaId+')')
      return
    }

    const area = {
      id: r5.areaId,
      worldId: r5.worldId,
      islandId: r5.islandId,
    }

    const residencesForTier12 = genResidenceCount(area, tier12)
    console.log(' - Adding scholars to world '+area.worldId+', island '+area.islandId+', area '+area.id)

    state.residences = push(state.residences, residencesForTier12)
  })

  console.log('Done.')
}

export const update2020_12_27_2 = (state) => {
  console.log('Running update 2020-12-27_2')

  state.personal.version = {GU: 9.2, date: "2020-12-27_2"}

  const changedGUIDs = {
    // ebensas silo, fuel, tractor
    "269957_4": 119025,
    "118571_4": 119028,
    "269839_4": 119026,
  }

  state.producers.filter(p => changedGUIDs.hasOwnProperty(p.GUID)).forEach(p => {
    const ps = state.producerSums.find(s => s.islandId === p.islandId && s.GUID === p.GUID)
    console.log(' - Updating GUID from '+ps.GUID+' to '+changedGUIDs[p.GUID]+' ('+p.d_name+') [producerSum] world '+p.worldId+', island '+p.islandId+', area '+p.areaId)
    ps.GUID = changedGUIDs[p.GUID]

    console.log(' - Updating GUID from '+p.GUID+' to '+changedGUIDs[p.GUID]+' ('+p.d_name+') [producer] world '+p.worldId+', island '+p.islandId+', area '+p.areaId)
    p.GUID = changedGUIDs[p.GUID]
  })

  console.log('Done.')
}

export const update2020_12_28 = (state) => {
  console.log('Running update 2020-12-28')

  state.personal.version = {GU: 9.2, date: "2020-12-28"}

  state.areas.filter(a => a.hasOwnProperty('hasElectricity')).forEach(area => {
    delete area.hasElectricity
    console.log(' - Removing obsolete area.hasElectricity world '+area.worldId+', island '+area.islandId+', area '+area.id)
  })

  console.log('Done.')
}

export const update2021_09_12 = (state, action) => {
  console.log('Running update 2021-09-12')

  boosts.forEach(boost => {
    state.islands.forEach(island => {
      const producersInAreaWithBoost = state.producers
      .filter(p => p.islandId === island.id)
      .filter(p => p.hasOwnProperty('boosts') && p.boosts.includes(boost.key))

      if (producersInAreaWithBoost.length > 1) {
      const sum = sumBy(producersInAreaWithBoost, 'number')
      // if (sum > 0) {
        const provider = boost.provider.find(pr => pr.worldId === island.worldId)

        if (!state.producerSums.find(pS => pS.islandId === island.id && pS.GUID === provider.GUID)) {
          action.asyncDispatch({type: 'producerSums/create', payload: {islandId: island.id, GUID: provider.GUID}})
        }

        if (!state.producers.find(p => p.islandId === island.id && p.GUID === provider.GUID)) {
          const firstArea = state.areas.find(a => a.usage === 'TradeUnion' && a.islandId === island.id)
          action.asyncDispatch({type: 'producers/create', payload: {area: firstArea, GUID: provider.GUID, copyExistingEffects: true, isDefault: true}})
        }

        if (provider.requirement === 'each') {
          action.asyncDispatch({type: 'producers/setNumber', payload: {islandId: island.id, /*areaId,*/GUID: provider.GUID, pState: 'running', number: sum}})
          console.log(` - Adding ${sum}x ${boost.key} on island #${island.id} '${island.name}'`)
        }
      }
    })
  })

  state.personal.version = {GU: 9.2, date: "2021-09-12"}
  console.log('Done.')
}
