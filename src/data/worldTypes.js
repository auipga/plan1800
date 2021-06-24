export default [
  {
    id: 1,
    key: "Moderate",
    worldIDs: [1, 3],
    socialClassIDs: [1, 2, 3, 4, 5, 12],
    popResGUIDs: [1010343, 1010344, 1010345, 1010346, 1010347, 114445],
    populaGUIDs: [15000000, 15000001, 15000002, 15000003, 15000004, 118745],
    workforceGUIDs: [1010052, 1010115, 1010116, 1010117, 1010128, 124478],
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
  {
    id: 4,
    key: "Africa",
    worldIDs: [5],
    socialClassIDs: [10, 11],
    popResGUIDs: [114436, 114437],
    populaGUIDs: [114329, 114330],
    workforceGUIDs: [114340, 114341],
    fertilities: [
      /*TODO*/
      "../../allicons/3dicons/goods_africa/icon_linen_farm_0",
      "Gold_ore_9", // immer 1-2
      "",
      "",
      "",
      "",
      "",
    ],
    regionalResources: [
      /*TODO*/
      "WorkAreaRiverBuilding",
      "Lehm",
      "wasser",
      "papier",
    ],
    hasPropogandaEffect: undefined/*TODO*/,
  },
]

const a = [
  {
    Name: "Flachsfarm",
    GUID: 114448,
    Type: "FarmBuilding",
    FileName: "3dicons/goods_africa/icon_linen_farm_0.png",
    type: "Landwirtschaftliche Produkte",
    worldTypeIds: [4],
    Electricity: "None",
    ModuleLimit: 96,
    MotorizableType: "Tractor",
    Maintenance: [
      {Product: 1010017, Amount: 10},
      {Product: 114340, Amount: 5}
    ],
    InputProducts: [],
    OutputProduct: 114365,
    CycleTime: 60,
    Costs: [
      {Ingredient: 1010017, Amount: 500},
      {Ingredient: 114356, Amount: 2}
    ]
  },
  {
    Name: "Sanga-Farm",
    GUID: 114439,
    Type: "FarmBuilding",
    FileName: "3dicons/goods_africa/icon_watusi_0.png",
    type: "Landwirtschaftliche Produkte",//todo x2
    worldTypeIds: [4],
    ModuleLimit: 5,
    MotorizableType: "Silo",
    Maintenance: [
      {Product: 1010017, Amount: 10},
      {Product: 114340, Amount: 20}
    ],
    InputProducts: [],
    OutputProduct: 114357,
    CycleTime: 60,
    Costs: [
      {Ingredient: 1010017, Amount: 750},
      {Ingredient: 114356, Amount: 4}
    ]
  },
  {
    Name: "Hibiskusfarm",
    GUID: 114447,
    Type: "FarmBuilding",
    FileName: "3dicons/goods_africa/icon_hibiscus_farm_0.png",
    type: "Landwirtschaftliche Produkte",
    worldTypeIds: [4],
    ModuleLimit: 144,
    MotorizableType: "Tractor",
    Maintenance: [
      {Product: 1010017, Amount: 15},
      {Product: 114340, Amount: 15}
    ],
    InputProducts: [],
    OutputProduct: 114364,
    CycleTime: 60,
    Costs: [
      {Ingredient: 1010017, Amount: 1250},
      {Ingredient: 114356, Amount: 6}
    ]
  },
  {
    Name: "Tef-Farm",
    GUID: 114450,
    Type: "FarmBuilding",
    FileName: "3dicons/goods_africa/icon_teff_grass_0.png",
    type: "Landwirtschaftliche Produkte",
    worldTypeIds: [4],
    ModuleLimit: 168,
    MotorizableType: "Tractor",
    Maintenance: [
      {Product: 1010017, Amount: 20},
      {Product: 114340, Amount: 20}
    ],
    InputProducts: [],
    OutputProduct: 114367,
    CycleTime: 60,
    Costs: [
      {Ingredient: 1010017, Amount: 1500},
      {Ingredient: 114356, Amount: 5}
    ]
  },
  {
    Name: "Indigofarm",
    GUID: 114451,
    Type: "FarmBuilding",
    FileName: "3dicons/goods_africa/icon_indigo_0.png",
    type: "Landwirtschaftliche Produkte",
    worldTypeIds: [4],
    ModuleLimit: 144,
    MotorizableType: "Tractor",
    Maintenance: [
      {Product: 1010017, Amount: 25},
      {Product: 114340, Amount: 20}
    ],
    InputProducts: [],
    OutputProduct: 114368,
    CycleTime: 60,
    Costs: [
      {Ingredient: 1010017, Amount: 2000},
      {Ingredient: 114356, Amount: 5}
    ]
  },
  {
    Name: "Gewürzfarm",
    GUID: 114452,
    Type: "FarmBuilding",
    FileName: "3dicons/goods_africa/icon_spices_0.png",
    type: "Landwirtschaftliche Produkte",
    worldTypeIds: [4],
    ModuleLimit: 128,
    MotorizableType: "Tractor",
    Maintenance: [
      {Product: 1010017, Amount: 25},
      {Product: 114340, Amount: 15}
    ],
    InputProducts: [],
    OutputProduct: 114369,
    CycleTime: 60,
    Costs: [
      {Ingredient: 1010017, Amount: 2500},
      {Ingredient: 114356, Amount: 10}
    ]
  },
  {
    Name: "Zuchtbecken",
    GUID: 118729,
    Type: "FactoryBuilding7",
    FileName: "3dicons/goods_africa/icon_seafood_0.png",
    type: "Landwirtschaftliche Produkte",
    worldTypeIds: [4],
    Maintenance: [
      {Product: 1010017, Amount: 40},
      {Product: 114340, Amount: 35}
    ],
    InputProducts: [],
    OutputProduct: 118728,
    CycleTime: 60,
    Costs: [
      {Ingredient: 1010017, Amount: 3000},
      {Ingredient: 114356, Amount: 12},
      {Ingredient: 114402, Amount: 8}
    ]
  },
  {
    Name: "Tabakplantage",
    GUID: "1010330_4",
    Type: "FarmBuilding",
    FileName: "3dicons/icon_tobacco_0.png",
    type: "Landwirtschaftliche Produkte",
    worldTypeIds: [4],
    Maintenance: [],
    InputProducts: [],
    OutputProduct: 1010252,
    CycleTime: 120,
    disabled: true,
    Costs: []
  },
  {
    Name: "Baumwollplantage",
    GUID: "1010331_4",
    Type: "FarmBuilding",
    FileName: "3dicons/icon_cotton_0.png",
    type: "Landwirtschaftliche Produkte",
    worldTypeIds: [4],
    Maintenance: [],
    InputProducts: [],
    OutputProduct: 1010253,
    CycleTime: 60,
    disabled: true,
    Costs: []
  },
  {
    Name: "Imkerei",
    GUID: 114453,
    Type: "FarmBuilding",
    FileName: "3dicons/goods_africa/icon_beeswax_0.png",
    type: "Landwirtschaftliche Produkte",//todo
    worldTypeIds: [4],
    ModuleLimit: 192,
    MotorizableType: "Tractor",
    Maintenance: [
      {Product: 1010017, Amount: 70},
      {Product: 114340, Amount: 30}
    ],
    InputProducts: [],
    OutputProduct: 114370,
    CycleTime: 30,
    Costs: [
      {Ingredient: 1010017, Amount: 9000},
      {Ingredient: 114356, Amount: 15}
    ]
  }
]
