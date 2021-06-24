export default [
  { // "The Old World"
    id: 1,
    GUID: 180023,
    worldTypeId: 1,
    // socialClassIDs: [1, 2, 3, 4, 5],
    tierId: 1,
    requirement: 0,
    fertilities: ["Potato", "Grain", "Hops", "Red_peppers", "Furs", "Grapes", "Saltpeter"],
    resources: ["Clay", "Iron", "Coal", "Zinc", "Copper", "Cement", "Oil"],
    hasPropogandaEffect: true,
    dlc: false,
  },
  { // "The New World"
    id: 2,
    GUID: 180025,
    worldTypeId: 2,
    // socialClassIDs: [6, 7],
    tierId: 3,
    requirement: 1,
    exploration: {
      fixedSkulls: 1,
      duration: 35,// days \\ not yet in use!
    },
    fertilities: ["Plantains", "Sugar_cane", "Cotton", "Cocoa", "Corn", "Caoutchouc", "Coffee_beans", "Pearls", "Tobacco"],
    resources: ["Clay_6", "Oil_6", "Gold_ore_6"],
    hasPropogandaEffect: true,
    dlc: false,
  },
  { // "Cap Trelawny"
    id: 3,
    GUID: 803518, // en missing
    worldTypeId: 1,
    // socialClassIDs: [1, 2, 3, 4, 5],
    tierId: 3,
    requirement: 750,
    exploration: {
      fixedSkulls: 2,//
      // fixedAdvises: ["Crafting", "Diplomacy", "Force"]
      // fixedAdvises: 1 ["Hunting", "Diplomacy", "Navigation"], //
      duration: 1,
    },
    fertilities: ["Potato", "Grain", "Hops", "Red_peppers", "Furs", "Grapes", "Saltpeter"],
    resources: ["Clay", "Iron", "Coal", "Zinc", "Copper", "Cement", "Oil"],
    hasPropogandaEffect: true,
    dlc: 1,
  },
  { // "The Arctic"
    id: 4,
    GUID: 180045,
    worldTypeId: 3,
    // socialClassIDs: [8, 9],
    tierId: 4,
    requirement: 1,
    exploration: {
      fixedSkulls: 2,
      // fixedAdvises: ["Hunting", "Force", "Navigation"], //
      duration: 1,
    },
    fertilities: [
      // "Forest",
      "Caribou_Meat",
      "Seal_Skin",
      "Whale_Oil",
      "Bear_Fur",
      "Furs",
    ], // trees?

    resources: [
      // Arktische Hochinsel / max 4
      "Gas", // immer 13

      // normale Insel / max 8
      "Gold_ore_9", // immer 1-2
      // Gas Gold entweder oder
    ],
    hasPropogandaEffect: false,
    dlc: 3,
  },
]