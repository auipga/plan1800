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
      duration: 1,
    },
    fertilities: ["Potato", "Grain", "Hops", "Red_peppers", "Furs", "Saltpeter", "Grapes"],
    regionalResources: ["Clay", "Iron", "Coal", "Zinc", "Copper", "Cement", "Oil"],
  },
]