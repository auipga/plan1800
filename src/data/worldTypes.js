export default [
  {
    id: 1,
    key: "Moderate",
    worldIDs: [1, 3],
    socialClassIDs: [1, 2, 3, 4, 5],
    popResGUIDs: [1010343, 1010344, 1010345, 1010346, 1010347],
    populaGUIDs: [15000000, 15000001, 15000002, 15000003, 15000004],
    workforceGUIDs: [1010052, 1010115, 1010116, 1010117],
    fertilities: ["Potato", "Grain", "Hops", "Red_peppers", "Furs", "Saltpeter", "Grapes"],
    regionalResources: ["Clay", "Iron", "Coal", "Zinc", "Copper", "Cement", "Oil"],
    hasPropogandaEffect: true,
  },
  {
    id: 2,
    key: "Colony01",
    worldIDs: [2],
    socialClassIDs: [6, 7],
    popResGUIDs: [101254, 101255],
    populaGUIDs: [15000005, 15000006],
    workforceGUIDs: [1010366, 1010367],
    fertilities: ["Plantains", "Sugar_cane", "Cotton", "Cocoa", "Corn", "Caoutchouc", "Coffee_beans", "Pearls", "Tobacco"],
    regionalResources: ["Clay_6", "Oil_6", "Gold_ore_6"],
    hasPropogandaEffect: true,
  },
  {
    id: 3,
    key: "Arctic",
    worldIDs: [4],
    socialClassIDs: [8, 9],
    popResGUIDs: [112091, 112652],
    populaGUIDs: [112642, 112643],
    workforceGUIDs: [112653, 112654],
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
    hasPropogandaEffect: false,
  },
]