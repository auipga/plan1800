export default [
  {
    id: 1,
    key: "oldWorld",
    i10n: {en: "Old World", de: "Alte Welt"},
    img: "old-world.png",
    socialClassIDs: [1, 2, 3, 4, 5],
    unlock: [1, 0],// 0 of tier 1 = instant/always
    fertilities: ["Potato", "Grain", "Hops", "Red_peppers", "Furs", "Saltpeter", "Grapes"],
    regionalResources: ["Clay", "Iron", "Coal", "Cement", "Copper", "Zinc", "Oil"],
  },
  {
    id: 2,
    key: "newWorld",
    i10n: {en: "New World", de: "Neue Welt"},
    img: "new-world.png",
    socialClassIDs: [6, 7],
    unlock: [3, 1],// 1 of tier 3
    fertilities: ["Plantains", "Sugar_cane", "Cotton", "Caoutchouc", "Corn", "Coffee", "Pearls", "Tobacco", "Cocoa"],
    regionalResources: ["Clay_6", "Gold_ore", "Oil_6"],
  },
  {
    id: 3,
    key: "capTrelawny",
    i10n: {en: "Cap Trelawny", de: "Kap Trelawny"},
    img: "cap-trelawny.png",
    socialClassIDs: [1, 2, 3, 4, 5],
    unlock: [3, 750],// 750 of tier 3
    fertilities: ["Potato", "Grain", "Hops", "Red_peppers", "Furs", "Saltpeter", "Grapes"],
    regionalResources: ["Clay", "Iron", "Coal", "Cement", "Copper", "Zinc", "Oil"],
  },
]