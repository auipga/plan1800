export default [
  {
    id: 1,
    key: "oldWorld",
    i10n: {en: "The Old World", de: "Die Alte Welt"},
    socialClassIDs: [1, 2, 3, 4, 5],
    tierId: 1,
    requirement: 0,
    fertilities: ["Potato", "Grain", "Hops", "Red_peppers", "Furs", "Saltpeter", "Grapes"],
    regionalResources: ["Clay", "Iron", "Coal", "Zinc", "Copper", "Cement", "Oil"],
    hasNewsEffect: true,
  },
  {
    id: 2,
    key: "newWorld",
    i10n: {en: "The New World", de: "Die Neue Welt"},
    socialClassIDs: [6, 7],
    tierId: 3,
    requirement: 1,
    exploration: {
      fixedSkulls: 1,
      duration: 35,// days \\ not yet in use!
    },
    fertilities: ["Plantains", "Sugar_cane", "Cotton", "Cocoa", "Corn", "Caoutchouc", "Coffee_beans", "Pearls", "Tobacco"],
    regionalResources: ["Clay_6", "Oil_6", "Gold_ore_6"],
    hasNewsEffect: true,
  },
  {
    id: 3,
    key: "capTrelawny",
    i10n: {en: "Cap Trelawny", de: "Kap Trelawny"},
    socialClassIDs: [1, 2, 3, 4, 5],
    tierId: 3,
    requirement: 750,
    exploration: {
      fixedSkulls: 2,//
      // fixedAdvises: ["Crafting", "Diplomacy", "Force"]
      // fixedAdvises: 1 ["Hunting", "Diplomacy", "Navigation"], //
      duration: 1,
    },
    fertilities: ["Potato", "Grain", "Hops", "Red_peppers", "Furs", "Saltpeter", "Grapes"],
    regionalResources: ["Clay", "Iron", "Coal", "Zinc", "Copper", "Cement", "Oil"],
    hasNewsEffect: true,
  },
  {
    id: 4,
    key: "Arctic",
    i10n: {en: "The Arctic", de: "Die Arktis"},
    socialClassIDs: [8, 9],
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
    regionalResources: [
      // Arktische Hochinsel / max 4
      "Gas", // immer 13

      // normale Insel / max 8
      "Gold_ore_9", // immer 1-2
      // Gas Gold entweder oder
    ],
    hasNewsEffect: false,
  },
]