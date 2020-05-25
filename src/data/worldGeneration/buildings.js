export const other_producers = [
  null,
  {
    Name: "Kraftwerk",
    GUID: 100780,
    Type: "PowerplantBuilding",
    FileName: "3dicons/icon_electric_works_oil_0.png",
    type: "Konsumgüter",//todo
    worldTypeIds: [1],
    InfoDescription: 10946,
    // Electricity: -1,
    Maintenance: [
      {Product: 1010017, Amount: 400},
      {Product: 1010117, Amount: 150}
    ],
    InputProducts: [1010566],
    OutputProduct: null,
    Distance: 35,
    CycleTime: 5,
    Costs: [
      {Ingredient: 1010017, Amount: 25000},
      {Ingredient: 1010196, Amount: 30},
      {Ingredient: 1010205, Amount: 50},
      {Ingredient: 1010218, Amount: 40},
      {Ingredient: 1010207, Amount: 30},
      {Ingredient: 1010202, Amount: 25}
    ]
  },
  {
    Name: "Kohlekraftwerk",
    GUID: 100779,
    Type: "PowerplantBuilding",
    FileName: "3dicons/icon_electric_works_coal_0.png",
    type: "Konsumgüter",//todo
    worldTypeIds: [1],// nirgends? mod?
    InfoDescription: 10945,
    // Electricity: -1,
    Maintenance: [
      {Product: 1010017, Amount: 150},
      {Product: 1010117, Amount: 150}
    ],
    InputProducts: [1010226],
    OutputProduct: null,
    Distance: 30,
    CycleTime: 5,
    Costs: [
      {Ingredient: 1010017, Amount: 25000},
      {Ingredient: 1010196, Amount: 30},
      {Ingredient: 1010205, Amount: 50},
      {Ingredient: 1010218, Amount: 40},
      {Ingredient: 1010207, Amount: 30},
      {Ingredient: 1010202, Amount: 25}
    ]
  },
  {
    Name: "Gasbetriebenes Kraftwerk",
    GUID: 117547,
    Type: "PowerplantBuilding",
    FileName: "3dicons/icon_electric_works_gas_0.png",
    type: "Konsumgüter",//todo
    worldTypeIds: [1],
    InfoDescription: 117550,
    // Electricity: -1,
    Maintenance: [
      {Product: 1010017, Amount: 1200},
      {Product: 1010117, Amount: 250}
    ],
    InputProducts: [112706],
    OutputProduct: null,
    Distance: 42,
    CycleTime: 45,
    Costs: [
      {Ingredient: 1010017, Amount: 75000},
      {Ingredient: 1010196, Amount: 40},
      {Ingredient: 1010205, Amount: 60},
      {Ingredient: 1010218, Amount: 60},
      {Ingredient: 1010207, Amount: 40},
      {Ingredient: 1010202, Amount: 40}
    ]
  },
  {
    Name: "Heizofen",
    GUID: 114751,
    Type: "Heater_Arctic",
    FileName: "3dicons/icon_heating_center_0.png",
    type: "Konsumgüter",//todo
    worldTypeIds: [3],
    InfoDescription: 114290,
    // Electricity: -1,
    Maintenance: [
      {Product: 1010017, Amount: 50}
    ],
    InputProducts: [1010226],
    OutputProduct: null,
    CycleTime: 30,
    Costs: [
      {Ingredient: 1010017, Amount: 1000},
      {Ingredient: 1010196, Amount: 5}
    ]
  },
]
/*
    tierId: 8,
    requirement: 300,
    fehlt noch aus producers_old.js


targetPool: 193875 = all production boosted by electricity
// Electricity:
  -1:  "None"
   1: "Optional"
   2: "Required"
*/
export const producers = [
  {
    Name: "Holzfällerhütte",
    GUID: 1010266,
    Type: "FreeAreaBuilding",
    FileName: "3dicons/icon_wood_log_0.png",
    type: "Rohmaterial",
    worldTypeIds: [1,2],
    // Electricity: -1,
    Maintenance: [
      {Product: 1010017, Amount: 10},
      {Product: 1010052, Amount: 5}
    ],
    InputProducts: [],
    OutputProduct: 120008,
    CycleTime: 15,
    Costs: [
      {Ingredient: 1010017, Amount: 100}
    ]
  },
  {
    Name: "Sägewerk",
    GUID: 100451,
    Type: "FactoryBuilding7",
    FileName: "3dicons/icon_wooden_planks_0.png",
    type: "Baumaterial",
    worldTypeIds: [1,2],
    // Electricity: 1,
    Maintenance: [
      {Product: 1010017, Amount: 10},
      {Product: 1010052, Amount: 10}
    ],
    InputProducts: [120008],
    OutputProduct: 1010196,
    CycleTime: 15,
    Costs: [
      {Ingredient: 1010017, Amount: 100}
    ]
  },
  {
    Name: "Fischerei",
    GUID: 1010278,
    Type: "FactoryBuilding7",
    FileName: "3dicons/icon_fish_0.png",
    type: "Konsumgüter",
    worldTypeIds: [1],
    // Electricity: -1,
    Maintenance: [
      {Product: 1010017, Amount: 40},
      {Product: 1010052, Amount: 25}
    ],
    InputProducts: [],
    OutputProduct: 1010200,
    CycleTime: 30,
    Costs: [
      {Ingredient: 1010017, Amount: 100},
      {Ingredient: 1010196, Amount: 2}
    ]
  },
  {
    Name: "Kartoffelhof",
    GUID: 1010265,
    Type: "FarmBuilding",
    FileName: "3dicons/icon_potatoes_0.png",
    type: "Landwirtschaftliche Produkte",
    worldTypeIds: [1],
    // Electricity: -1,
    ModuleLimit: 72,
    Maintenance: [
      {Product: 1010017, Amount: 20},
      {Product: 1010052, Amount: 20}
    ],
    InputProducts: [],
    OutputProduct: 1010195,
    CycleTime: 30,
    Costs: [
      {Ingredient: 1010017, Amount: 100},
      {Ingredient: 1010196, Amount: 2}
    ]
  },
  {
    Name: "Schnapsbrennerei",
    GUID: 1010294,
    Type: "FactoryBuilding7",
    FileName: "3dicons/icon_schnapps_4_0.png",
    type: "Konsumgüter",
    worldTypeIds: [1],
    // Electricity: 1,
    Maintenance: [
      {Product: 1010017, Amount: 40},
      {Product: 1010052, Amount: 50}
    ],
    InputProducts: [1010195],
    OutputProduct: 1010216,
    CycleTime: 30,
    Costs: [
      {Ingredient: 1010017, Amount: 100},
      {Ingredient: 1010196, Amount: 2}
    ]
  },
  {
    Name: "Schäferei",
    GUID: 1010267,
    Type: "FarmBuilding",
    FileName: "3dicons/icon_wool_0.png",
    type: "Landwirtschaftliche Produkte",
    worldTypeIds: [1],
    // Electricity: -1,
    ModuleLimit: 3,
    Maintenance: [
      {Product: 1010017, Amount: 20},
      {Product: 1010052, Amount: 10}
    ],
    InputProducts: [],
    OutputProduct: 1010197,
    CycleTime: 30,
    Costs: [
      {Ingredient: 1010017, Amount: 100},
      {Ingredient: 1010196, Amount: 2}
    ]
  },
  {
    Name: "Weberei",
    GUID: 1010315,
    Type: "FactoryBuilding7",
    FileName: "3dicons/icon_working_cloth_0.png",
    type: "Konsumgüter",
    worldTypeIds: [1],
    // Electricity: 1,
    Maintenance: [
      {Product: 1010017, Amount: 50},
      {Product: 1010052, Amount: 50}
    ],
    InputProducts: [1010197],
    OutputProduct: 1010237,
    CycleTime: 30,
    Costs: [
      {Ingredient: 1010017, Amount: 400},
      {Ingredient: 1010196, Amount: 2}
    ]
  },

  {
    Name: "Lehmgrube",
    GUID: 100416,
    Type: "SlotFactoryBuilding7",
    FileName: "3dicons/icon_clay_0.png",
    type: "Rohmaterial",
    worldTypeIds: [1,2],
    // Electricity: 1,
    Maintenance: [
      {Product: 1010017, Amount: 10},
      {Product: 1010115, Amount: 50}
    ],
    InputProducts: [],
    OutputProduct: 1010201,
    CycleTime: 30,
    Costs: [
      {Ingredient: 1010017, Amount: 500},
      {Ingredient: 1010196, Amount: 4}
    ]
  },
  {
    Name: "Ziegelei",
    GUID: 1010283,
    Type: "FactoryBuilding7",
    FileName: "3dicons/icon_bricks_0.png",
    type: "Baumaterial",
    worldTypeIds: [1,2],
    // Electricity: 1,
    Maintenance: [
      {Product: 1010017, Amount: 20},
      {Product: 1010115, Amount: 25}
    ],
    InputProducts: [1010201],
    OutputProduct: 1010205,
    CycleTime: 60,
    Costs: [
      {Ingredient: 1010017, Amount: 500},
      {Ingredient: 1010196, Amount: 8}
    ]
  },
  {
    Name: "Schweinezucht",
    GUID: 1010269,
    Type: "FarmBuilding",
    FileName: "3dicons/icon_pigs_0.png",
    type: "Landwirtschaftliche Produkte",
    worldTypeIds: [1],
    // Electricity: -1,
    ModuleLimit: 5,
    Maintenance: [
      {Product: 1010017, Amount: 40},
      {Product: 1010052, Amount: 30}
    ],
    InputProducts: [],
    OutputProduct: 1010199,
    CycleTime: 60,
    Costs: [
      {Ingredient: 1010017, Amount: 500},
      {Ingredient: 1010196, Amount: 4}
    ]
  },
  {
    Name: "Metzgerei",
    GUID: 1010316,
    Type: "FactoryBuilding7",
    FileName: "3dicons/icon_meat_sausage_0.png",
    type: "Konsumgüter",
    worldTypeIds: [1],
    // Electricity: 1,
    Maintenance: [
      {Product: 1010017, Amount: 80},
      {Product: 1010115, Amount: 50}
    ],
    InputProducts: [1010199],
    OutputProduct: 1010238,
    CycleTime: 60,
    Costs: [
      {Ingredient: 1010017, Amount: 500},
      {Ingredient: 1010196, Amount: 4},
      {Ingredient: 1010205, Amount: 5}
    ]
  },
  {
    Name: "Segelweberei",
    GUID: 1010288,
    Type: "FactoryBuilding7",
    FileName: "3dicons/icon_sail_0.png",
    type: "Baumaterial",
    worldTypeIds: [1,2],// oder eigene? im _prod nachgucken
    // Electricity: 1,
    Maintenance: [
      {Product: 1010017, Amount: 75},
      {Product: 1010115, Amount: 50}
    ],
    InputProducts: [1010197],
    OutputProduct: 1010210,
    CycleTime: 30,
    Costs: [
      {Ingredient: 1010017, Amount: 500},
      {Ingredient: 1010196, Amount: 8},
      {Ingredient: 1010205, Amount: 10}
    ]
  },
  {
    Name: "Getreidefarm",
    GUID: 1010262,
    Type: "FarmBuilding",
    FileName: "3dicons/icon_cereals_2_0.png",
    type: "Landwirtschaftliche Produkte",
    worldTypeIds: [1],
    // Electricity: -1,
    ModuleLimit: 144,
    Maintenance: [
      {Product: 1010017, Amount: 20},
      {Product: 1010052, Amount: 20}
    ],
    InputProducts: [],
    OutputProduct: 1010192,
    CycleTime: 60,
    Costs: [
      {Ingredient: 1010017, Amount: 500},
      {Ingredient: 1010196, Amount: 4}
    ]
  },
  {
    Name: "Mühle",
    GUID: 1010313,
    Type: "FactoryBuilding7",
    FileName: "3dicons/icon_flour_0.png",
    type: "Zwischenprodukte",
    worldTypeIds: [1],
    // Electricity: 1,
    Maintenance: [
      {Product: 1010017, Amount: 50},
      {Product: 1010052, Amount: 10}
    ],
    InputProducts: [1010192],
    OutputProduct: 1010235,
    CycleTime: 30,
    Costs: [
      {Ingredient: 1010017, Amount: 500},
      {Ingredient: 1010196, Amount: 4},
      {Ingredient: 1010205, Amount: 5}
    ]
  },
  {
    Name: "Bäckerei",
    GUID: 1010291,
    Type: "FactoryBuilding7",
    FileName: "3dicons/icon_bread_0.png",
    type: "Konsumgüter",
    worldTypeIds: [1],
    // Electricity: 1,
    Maintenance: [
      {Product: 1010017, Amount: 60},
      {Product: 1010115, Amount: 50}
    ],
    InputProducts: [1010235],
    OutputProduct: 1010213,
    CycleTime: 60,
    Costs: [
      {Ingredient: 1010017, Amount: 1000},
      {Ingredient: 1010196, Amount: 4},
      {Ingredient: 1010205, Amount: 5}
    ]
  },

  {
    Name: "Eisenmine",
    GUID: 1010305,
    Type: "SlotFactoryBuilding7",
    FileName: "3dicons/icon_iron_0.png",
    type: "Rohmaterial",
    worldTypeIds: [1],
    // Electricity: 1,
    Maintenance: [
      {Product: 1010017, Amount: 50},
      {Product: 1010115, Amount: 50}
    ],
    InputProducts: [],
    OutputProduct: 1010227,
    CycleTime: 15,
    Costs: [
      {Ingredient: 1010017, Amount: 800},
      {Ingredient: 1010196, Amount: 4},
      {Ingredient: 1010205, Amount: 5}
    ]
  },
  {
    Name: "Köhlerei",
    GUID: 1010298,
    Type: "HeavyFreeAreaBuilding",
    FileName: "3dicons/icon_coal_burn_0.png",
    type: "Rohmaterial",
    worldTypeIds: [1],
    // Electricity: 1,
    Maintenance: [
      {Product: 1010017, Amount: 20},
      {Product: 1010115, Amount: 10}
    ],
    InputProducts: [],
    OutputProduct: 1010226,
    CycleTime: 30,
    Costs: [
      {Ingredient: 1010017, Amount: 500},
      {Ingredient: 1010196, Amount: 4},
      {Ingredient: 1010205, Amount: 5}
    ]
  },
  {
    Name: "Hochofen",
    GUID: 1010297,
    Type: "HeavyFactoryBuilding",
    FileName: "3dicons/icon_steel_0.png",
    type: "Zwischenprodukte",
    worldTypeIds: [1],
    // Electricity: 1,
    Maintenance: [
      {Product: 1010017, Amount: 100},
      {Product: 1010115, Amount: 100}
    ],
    InputProducts: [1010227, 1010226],
    OutputProduct: 1010219,
    CycleTime: 30,
    Costs: [
      {Ingredient: 1010017, Amount: 500},
      {Ingredient: 1010196, Amount: 4},
      {Ingredient: 1010205, Amount: 5}
    ]
  },
  {
    Name: "Stahlwerk",
    GUID: 1010296,
    Type: "HeavyFactoryBuilding",
    FileName: "3dicons/icon_beams_0.png",
    type: "Baumaterial",
    worldTypeIds: [1],
    // Electricity: 1,
    Maintenance: [
      {Product: 1010017, Amount: 200},
      {Product: 1010115, Amount: 200}
    ],
    InputProducts: [1010219],
    OutputProduct: 1010218,
    CycleTime: 45,
    Costs: [
      {Ingredient: 1010017, Amount: 1000},
      {Ingredient: 1010196, Amount: 8},
      {Ingredient: 1010205, Amount: 10}
    ]
  },
  {
    Name: "Kanonengießerei",
    GUID: 1010299,
    Type: "HeavyFactoryBuilding",
    FileName: "3dicons/icon_weapons_0.png",
    type: "Baumaterial",
    worldTypeIds: [1],
    // Electricity: 1,
    Maintenance: [
      {Product: 1010017, Amount: 150},
      {Product: 1010115, Amount: 50}
    ],
    InputProducts: [1010219],
    OutputProduct: 1010221,
    CycleTime: 90,
    Costs: [
      {Ingredient: 1010017, Amount: 700},
      {Ingredient: 1010196, Amount: 8},
      {Ingredient: 1010205, Amount: 10},
      {Ingredient: 1010218, Amount: 8}
    ]
  },
  {
    Name: "Wasenmeisterei",
    GUID: 1010312,
    Type: "FactoryBuilding7",
    FileName: "3dicons/icon_tallow_0.png",
    type: "Zwischenprodukte",
    worldTypeIds: [1],
    // Electricity: 1,
    Maintenance: [
      {Product: 1010017, Amount: 40},
      {Product: 1010115, Amount: 40}
    ],
    InputProducts: [1010199],
    OutputProduct: 1010234,
    CycleTime: 60,
    Costs: [
      {Ingredient: 1010017, Amount: 500},
      {Ingredient: 1010196, Amount: 4},
      {Ingredient: 1010205, Amount: 5},
      {Ingredient: 1010218, Amount: 4}
    ]
  },
  {
    Name: "Siederei",
    GUID: 1010281,
    Type: "FactoryBuilding7",
    FileName: "3dicons/icon_soap_2_0.png",
    type: "Konsumgüter",
    worldTypeIds: [1],
    // Electricity: 1,
    Maintenance: [
      {Product: 1010017, Amount: 50},
      {Product: 1010115, Amount: 50}
    ],
    InputProducts: [1010234],
    OutputProduct: 1010203,
    CycleTime: 30,
    Costs: [
      {Ingredient: 1010017, Amount: 500},
      {Ingredient: 1010196, Amount: 4},
      {Ingredient: 1010205, Amount: 5},
      {Ingredient: 1010218, Amount: 4}
    ]
  },
  {
    Name: "Hopfenplantage",
    GUID: 1010264,
    Type: "FarmBuilding",
    FileName: "3dicons/icon_hops_0.png",
    type: "Landwirtschaftliche Produkte",
    worldTypeIds: [1],
    // Electricity: -1,
    ModuleLimit: 96,
    Maintenance: [
      {Product: 1010017, Amount: 20},
      {Product: 1010052, Amount: 20}
    ],
    InputProducts: [],
    OutputProduct: 1010194,
    CycleTime: 90,
    Costs: [
      {Ingredient: 1010017, Amount: 500},
      {Ingredient: 1010196, Amount: 4}
    ]
  },
  {
    Name: "Mälzerei",
    GUID: 1010314,
    Type: "FactoryBuilding7",
    FileName: "3dicons/icon_malt_0.png",
    type: "Zwischenprodukte",
    worldTypeIds: [1],
    // Electricity: 1,
    Maintenance: [
      {Product: 1010017, Amount: 150},
      {Product: 1010115, Amount: 25}
    ],
    InputProducts: [1010192],
    OutputProduct: 1010236,
    CycleTime: 30,
    Costs: [
      {Ingredient: 1010017, Amount: 500},
      {Ingredient: 1010196, Amount: 4},
      {Ingredient: 1010205, Amount: 5},
      {Ingredient: 1010218, Amount: 4}
    ]
  },
  {
    Name: "Brauerei",
    GUID: 1010292,
    Type: "FactoryBuilding7",
    FileName: "3dicons/icon_beer_0.png",
    type: "Konsumgüter",
    worldTypeIds: [1],
    // Electricity: 1,
    Maintenance: [
      {Product: 1010017, Amount: 200},
      {Product: 1010115, Amount: 75}
    ],
    InputProducts: [1010194, 1010236],
    OutputProduct: 1010214,
    CycleTime: 60,
    Costs: [
      {Ingredient: 1010017, Amount: 1600},
      {Ingredient: 1010196, Amount: 4},
      {Ingredient: 1010205, Amount: 5},
      {Ingredient: 1010218, Amount: 4}
    ]
  },

  {
    Name: "Quarzgrube",
    GUID: 1010560,
    Type: "FactoryBuilding7",
    FileName: "3dicons/icon_quartz_sand_0.png",
    type: "Rohmaterial",
    worldTypeIds: [1],
    // Electricity: 1,
    Maintenance: [
      {Product: 1010017, Amount: 120},
      {Product: 1010115, Amount: 25}
    ],
    InputProducts: [],
    OutputProduct: 1010228,
    CycleTime: 30,
    Costs: [
      {Ingredient: 1010017, Amount: 2000},
      {Ingredient: 1010196, Amount: 6},
      {Ingredient: 1010205, Amount: 5}
    ]
  },
  {
    Name: "Glashütte",
    GUID: 1010319,
    Type: "FactoryBuilding7",
    FileName: "3dicons/icon_glass_0.png",
    type: "Zwischenprodukte",
    worldTypeIds: [1],
    // Electricity: 1,
    Maintenance: [
      {Product: 1010017, Amount: 100},
      {Product: 1010116, Amount: 100}
    ],
    InputProducts: [1010228],
    OutputProduct: 1010241,
    CycleTime: 30,
    Costs: [
      {Ingredient: 1010017, Amount: 5400},
      {Ingredient: 1010196, Amount: 6},
      {Ingredient: 1010205, Amount: 10},
      {Ingredient: 1010218, Amount: 8}
    ]
  },
  {
    Name: "Fensterfabrik",
    GUID: 1010285,
    Type: "FactoryBuilding7",
    FileName: "3dicons/icon_glass_window_3_0.png",
    type: "Baumaterial",
    worldTypeIds: [1],
    // Electricity: 1,
    Maintenance: [
      {Product: 1010017, Amount: 200},
      {Product: 1010116, Amount: 100}
    ],
    InputProducts: [120008,1010241],
    OutputProduct: 1010207,
    CycleTime: 60,
    Costs: [
      {Ingredient: 1010017, Amount: 6500},
      {Ingredient: 1010196, Amount: 12},
      {Ingredient: 1010205, Amount: 20},
      {Ingredient: 1010218, Amount: 16}
    ]
  },
  {
    Name: "Rinderfarm",
    GUID: 1010263,
    Type: "FarmBuilding",
    FileName: "3dicons/icon_meat_raw_0.png",
    type: "Landwirtschaftliche Produkte",
    worldTypeIds: [1],
    // Electricity: -1,
    ModuleLimit: 4,
    Maintenance: [
      {Product: 1010017, Amount: 50},
      {Product: 1010052, Amount: 20}
    ],
    InputProducts: [],
    OutputProduct: 1010193,
    CycleTime: 120,
    Costs: [
      {Ingredient: 1010017, Amount: 2000},
      {Ingredient: 1010196, Amount: 6}
    ]
  },
  {
    Name: "Paprikafarm",
    GUID: 100654,
    Type: "FarmBuilding",
    FileName: "3dicons/icon_pepper_0.png",
    type: "Landwirtschaftliche Produkte",
    worldTypeIds: [1],
    // Electricity: -1,
    ModuleLimit: 108,
    Maintenance: [
      {Product: 1010017, Amount: 100},
      {Product: 1010052, Amount: 10}
    ],
    InputProducts: [],
    OutputProduct: 1010198,
    CycleTime: 120,
    Costs: [
      {Ingredient: 1010017, Amount: 2000},
      {Ingredient: 1010196, Amount: 6}
    ]
  },
  {
    Name: "Großküche",
    GUID: 1010293,
    Type: "FactoryBuilding7",
    FileName: "3dicons/icon_goulash_01_0.png",
    type: "Zwischenprodukte",
    worldTypeIds: [1],
    // Electricity: 1,
    Maintenance: [
      {Product: 1010017, Amount: 100},
      {Product: 1010116, Amount: 75}
    ],
    InputProducts: [1010193, 1010198],
    OutputProduct: 1010215,
    CycleTime: 120,
    Costs: [
      {Ingredient: 1010017, Amount: 7000},
      {Ingredient: 1010196, Amount: 6},
      {Ingredient: 1010205, Amount: 10},
      {Ingredient: 1010218, Amount: 8},
      {Ingredient: 1010207, Amount: 8}
    ]
  },
  {
    Name: "Konservenfabrik",
    GUID: 1010295,
    Type: "FactoryBuilding7",
    FileName: "3dicons/icon_canned_goulash_0.png",
    type: "Konsumgüter",
    worldTypeIds: [1],
    // Electricity: 1,
    Maintenance: [
      {Product: 1010017, Amount: 100},
      {Product: 1010116, Amount: 75}
    ],
    InputProducts: [1010227, 1010215],
    OutputProduct: 1010217,
    CycleTime: 90,
    Costs: [
      {Ingredient: 1010017, Amount: 15000},
      {Ingredient: 1010196, Amount: 6},
      {Ingredient: 1010205, Amount: 10},
      {Ingredient: 1010218, Amount: 8},
      {Ingredient: 1010207, Amount: 8}
    ]
  },
  {
    Name: "Kohlemine",
    GUID: 1010304,
    Type: "SlotFactoryBuilding7",
    FileName: "3dicons/icon_coal_2_0.png",
    type: "Rohmaterial",
    worldTypeIds: [1],
    // Electricity: 1,
    Maintenance: [
      {Product: 1010017, Amount: 50},
      {Product: 1010115, Amount: 50}
    ],
    InputProducts: [],
    OutputProduct: 1010226,
    CycleTime: 15,
    Costs: [
      {Ingredient: 1010017, Amount: 600},
      {Ingredient: 1010196, Amount: 4},
      {Ingredient: 1010205, Amount: 5}
    ]
  },
  {
    Name: "Nähmaschinenfabrik",
    GUID: 1010284,
    Type: "FactoryBuilding7",
    FileName: "3dicons/icon_sewing_machine_0.png",
    type: "Konsumgüter",
    worldTypeIds: [1],
    // Electricity: 1,
    Maintenance: [
      {Product: 1010017, Amount: 500},
      {Product: 1010116, Amount: 150}
    ],
    InputProducts: [120008, 1010219],
    OutputProduct: 1010206,
    CycleTime: 30,
    Costs: [
      {Ingredient: 1010017, Amount: 12000},
      {Ingredient: 1010196, Amount: 6},
      {Ingredient: 1010205, Amount: 10},
      {Ingredient: 1010218, Amount: 8},
      {Ingredient: 1010207, Amount: 8}
    ]
  },
  {
    Name: "Rumbrennerei",
    GUID: "1010340_1",
    Type: "FactoryBuilding7",
    FileName: "3dicons/icon_rum_barrel_0.png",
    type: "Konsumgüter",
    worldTypeIds: [1],
    // Electricity: -1,
    Maintenance: [],
    InputProducts: [],
    OutputProduct: 1010257,
    CycleTime: 60,
    disabled: true,
    Costs: []
  },
  {
    Name: "Jagdhütte",
    GUID: 1010558,
    Type: "FreeAreaBuilding",
    FileName: "3dicons/icon_fur_0.png",
    type: "Landwirtschaftliche Produkte",
    worldTypeIds: [1],
    // Electricity: -1,
    Maintenance: [
      {Product: 1010017, Amount: 50},
      {Product: 1010052, Amount: 10}
    ],
    InputProducts: [],
    OutputProduct: 1010209,
    CycleTime: 60,
    Costs: [
      {Ingredient: 1010017, Amount: 2000},
      {Ingredient: 1010196, Amount: 6}
    ]
  },
  {
    Name: "Baumwollweberei",
    GUID: "1010318_1",
    Type: "FactoryBuilding7",
    FileName: "3dicons/icon_cotton_fur_0.png",
    type: "Zwischenprodukte",
    worldTypeIds: [1],
    // Electricity: -1,
    Maintenance: [],
    InputProducts: [],
    OutputProduct: 1010240,
    CycleTime: 30,
    disabled: true,
    Costs: []
  },
  {
    Name: "Schneiderei",
    GUID: 1010325,
    Type: "FactoryBuilding7",
    FileName: "3dicons/icon_fur_coats_0.png",
    type: "Konsumgüter",
    worldTypeIds: [1],
    // Electricity: 1,
    Maintenance: [
      {Product: 1010017, Amount: 500},
      {Product: 1010116, Amount: 200}
    ],
    InputProducts: [1010209, 1010240],
    OutputProduct: 1010247,
    CycleTime: 30,
    Costs: [
      {Ingredient: 1010017, Amount: 2000},
      {Ingredient: 1010196, Amount: 6},
      {Ingredient: 1010205, Amount: 10},
      {Ingredient: 1010218, Amount: 8},
      {Ingredient: 1010207, Amount: 5}
    ]
  },

  {
    Name: "Zementmine",
    GUID: 1010309,
    Type: "SlotFactoryBuilding7",
    FileName: "3dicons/icon_cement_0.png",
    type: "Rohmaterial",
    worldTypeIds: [1],
    // Electricity: 1,
    Maintenance: [
      {Product: 1010017, Amount: 250},
      {Product: 1010115, Amount: 25}
    ],
    InputProducts: [],
    OutputProduct: 1010231,
    CycleTime: 30,
    Costs: [
      {Ingredient: 1010017, Amount: 6000},
      {Ingredient: 1010196, Amount: 8},
      {Ingredient: 1010205, Amount: 15},
      {Ingredient: 1010218, Amount: 12},
      {Ingredient: 1010207, Amount: 10}
    ]
  },
  {
    Name: "Betonwerk",
    GUID: 1010280,
    Type: "FactoryBuilding7",
    FileName: "3dicons/icon_reinforced_concrete_0.png",
    type: "Baumaterial",
    worldTypeIds: [1],
    // Electricity: 1,
    Maintenance: [
      {Product: 1010017, Amount: 400},
      {Product: 1010117, Amount: 75}
    ],
    InputProducts: [1010219, 1010231],
    OutputProduct: 1010202,
    CycleTime: 60,
    Costs: [
      {Ingredient: 1010017, Amount: 15000},
      {Ingredient: 1010196, Amount: 20},
      {Ingredient: 1010205, Amount: 30},
      {Ingredient: 1010218, Amount: 24},
      {Ingredient: 1010207, Amount: 25}
    ]
  },
  {
    Name: "Ölraffinerie",
    GUID: 101331,
    Type: "FarmBuilding",
    FileName: "3dicons/icon_oil_0.png",
    type: "Rohmaterial",
    worldTypeIds: [1],
    // Electricity: -1,
    Maintenance: [
      {Product: 1010017, Amount: 250},
      {Product: 1010115, Amount: 100}
    ],
    InputProducts: [],
    OutputProduct: 1010566,
    CycleTime: 15,
    Costs: [
      {Ingredient: 1010017, Amount: 25000},
      {Ingredient: 1010196, Amount: 8},
      {Ingredient: 1010205, Amount: 15},
      {Ingredient: 1010218, Amount: 12},
      {Ingredient: 1010207, Amount: 10},
      {Ingredient: 1010202, Amount: 10}
    ]
  },
  other_producers[1],
  // other_producers[2],
  other_producers[3],
  {
    Name: "Kupfermine",
    GUID: 1010308,
    Type: "SlotFactoryBuilding7",
    FileName: "3dicons/icon_copper_0.png",
    type: "Rohmaterial",
    worldTypeIds: [1],
    // Electricity: 1,
    Maintenance: [
      {Product: 1010017, Amount: 250},
      {Product: 1010115, Amount: 25}
    ],
    InputProducts: [],
    OutputProduct: 1010230,
    CycleTime: 30,
    Costs: [
      {Ingredient: 1010017, Amount: 5000},
      {Ingredient: 1010196, Amount: 8},
      {Ingredient: 1010205, Amount: 15},
      {Ingredient: 1010218, Amount: 12},
      {Ingredient: 1010207, Amount: 10},
      {Ingredient: 1010202, Amount: 10}
    ]
  },
  {
    Name: "Zinkmine",
    GUID: 1010307,
    Type: "SlotFactoryBuilding7",
    FileName: "3dicons/icon_tin_ore_0.png",
    type: "Rohmaterial",
    worldTypeIds: [1],
    // Electricity: 1,
    Maintenance: [
      {Product: 1010017, Amount: 250},
      {Product: 1010115, Amount: 25}
    ],
    InputProducts: [],
    OutputProduct: 1010229,
    CycleTime: 30,
    Costs: [
      {Ingredient: 1010017, Amount: 5000},
      {Ingredient: 1010196, Amount: 8},
      {Ingredient: 1010205, Amount: 15},
      {Ingredient: 1010218, Amount: 12},
      {Ingredient: 1010207, Amount: 10},
      {Ingredient: 1010202, Amount: 10}
    ]
  },
  {
    Name: "Messinghütte",
    GUID: 1010282,
    Type: "HeavyFactoryBuilding",
    FileName: "3dicons/icon_brass_0.png",
    type: "Zwischenprodukte",
    worldTypeIds: [1],
    // Electricity: 1,
    Maintenance: [
      {Product: 1010017, Amount: 250},
      {Product: 1010115, Amount: 25}
    ],
    InputProducts: [1010230, 1010229],
    OutputProduct: 1010204,
    CycleTime: 60,
    Costs: [
      {Ingredient: 1010017, Amount: 17000},
      {Ingredient: 1010196, Amount: 8},
      {Ingredient: 1010205, Amount: 15},
      {Ingredient: 1010218, Amount: 12},
      {Ingredient: 1010207, Amount: 10},
      {Ingredient: 1010202, Amount: 10}
    ]
  },
  {
    Name: "Brillenfabrik",
    GUID: 101250,
    Type: "FactoryBuilding7",
    FileName: "3dicons/icon_glasses_0.png",
    type: "Konsumgüter",
    worldTypeIds: [1],
    // Electricity: 1,
    Maintenance: [
      {Product: 1010017, Amount: 1000},
      {Product: 1010117, Amount: 100}
    ],
    InputProducts: [1010241, 1010204],
    OutputProduct: 120030,
    CycleTime: 90,
    Costs: [
      {Ingredient: 1010017, Amount: 17000},
      {Ingredient: 1010196, Amount: 8},
      {Ingredient: 1010205, Amount: 15},
      {Ingredient: 1010218, Amount: 12},
      {Ingredient: 1010207, Amount: 10},
      {Ingredient: 1010202, Amount: 10}
    ]
  },
  {
    Name: "Motorenfabrik",
    GUID: 1010302,
    Type: "HeavyFactoryBuilding",
    FileName: "3dicons/icon_steam_machine_0.png",
    type: "Baumaterial",
    worldTypeIds: [1],
    // Electricity: 2,
    Maintenance: [
      {Product: 1010017, Amount: 1800},
      {Product: 1010117, Amount: 250}
    ],
    InputProducts: [1010219, 1010204],
    OutputProduct: 1010224,
    CycleTime: 90,
    Costs: [
      {Ingredient: 1010017, Amount: 75000},
      {Ingredient: 1010196, Amount: 16},
      {Ingredient: 1010205, Amount: 30},
      {Ingredient: 1010218, Amount: 24},
      {Ingredient: 1010207, Amount: 20},
      {Ingredient: 1010202, Amount: 20}
    ]
  },
  {
    Name: "Salpeterwerk",
    GUID: 1010310,
    Type: "FactoryBuilding7",
    FileName: "3dicons/icon_niter_0.png",
    type: "Rohmaterial",
    worldTypeIds: [1],
    // Electricity: 1,
    Maintenance: [
      {Product: 1010017, Amount: 500},
      {Product: 1010115, Amount: 25}
    ],
    InputProducts: [],
    OutputProduct: 1010232,
    CycleTime: 120,
    Costs: [
      {Ingredient: 1010017, Amount: 12500},
      {Ingredient: 1010196, Amount: 10},
      {Ingredient: 1010205, Amount: 20},
      {Ingredient: 1010218, Amount: 16}
    ]
  },
  {
    Name: "Dynamitfabrik",
    GUID: 1010300,
    Type: "FactoryBuilding7",
    FileName: "3dicons/icon_dynamite_0.png",
    type: "Zwischenprodukte",
    worldTypeIds: [1],
    // Electricity: 1,
    Maintenance: [
      {Product: 1010017, Amount: 1000},
      {Product: 1010117, Amount: 250}
    ],
    InputProducts: [1010234, 1010232],
    OutputProduct: 1010222,
    CycleTime: 60,
    Costs: [
      {Ingredient: 1010017, Amount: 54000},
      {Ingredient: 1010196, Amount: 10},
      {Ingredient: 1010205, Amount: 20},
      {Ingredient: 1010218, Amount: 16},
      {Ingredient: 1010207, Amount: 15},
      {Ingredient: 1010202, Amount: 15}
    ]
  },
  {
    Name: "Geschützfabrik",
    GUID: 1010301,
    Type: "HeavyFactoryBuilding",
    FileName: "3dicons/icon_advanced_weaponry_0.png",
    type: "Baumaterial",
    worldTypeIds: [1],
    // Electricity: 2,
    Maintenance: [
      {Product: 1010017, Amount: 2200},
      {Product: 1010117, Amount: 250}
    ],
    InputProducts: [1010218, 1010222],
    OutputProduct: 1010223,
    CycleTime: 120,
    Costs: [
      {Ingredient: 1010017, Amount: 85000},
      {Ingredient: 1010196, Amount: 20},
      {Ingredient: 1010205, Amount: 40},
      {Ingredient: 1010218, Amount: 32},
      {Ingredient: 1010207, Amount: 30},
      {Ingredient: 1010202, Amount: 30}
    ]
  },
  {
    Name: "Kautschuckplantage",
    GUID: "1010333_1",
    Type: "FarmBuilding",
    FileName: "3dicons/icon_caoutchouc_0.png",
    type: "Landwirtschaftliche Produkte",
    worldTypeIds: [1],
    // Electricity: -1,
    ModuleLimit: 144,
    Maintenance: [],
    InputProducts: [],
    OutputProduct: 1010255,
    CycleTime: 60,
    disabled: true,
    Costs: []
  },
  {
    Name: "Hochrad-Werkhalle",
    GUID: 1010323,
    Type: "FactoryBuilding7",
    FileName: "3dicons/icon_high_wheeler_0.png",
    type: "Konsumgüter",
    worldTypeIds: [1],
    // Electricity: 2,
    Maintenance: [
      {Product: 1010017, Amount: 1200},
      {Product: 1010117, Amount: 150}
    ],
    InputProducts: [1010255, 1010219],
    OutputProduct: 1010245,
    CycleTime: 30,
    Costs: [
      {Ingredient: 1010017, Amount: 42000},
      {Ingredient: 1010196, Amount: 8},
      {Ingredient: 1010205, Amount: 15},
      {Ingredient: 1010218, Amount: 12},
      {Ingredient: 1010207, Amount: 10},
      {Ingredient: 1010202, Amount: 10}
    ]
  },
  {
    Name: "Kaffeerösterei",
    GUID: "101252_1",
    Type: "FactoryBuilding7",
    FileName: "3dicons/icon_coffe_cup_0.png",
    type: "Konsumgüter",
    worldTypeIds: [1],
    // Electricity: -1,
    Maintenance: [],
    InputProducts: [],
    OutputProduct: 120032,
    CycleTime: 30,
    disabled: true,
    Costs: []
  },
  {
    Name: "Goldmine",
    GUID: "1010311_1",
    Type: "SlotFactoryBuilding7",
    FileName: "3dicons/icon_gold_ore_0.png",
    type: "Rohmaterial",
    worldTypeIds: [1],
    // Electricity: -1,
    Maintenance: [],
    InputProducts: [],
    OutputProduct: 1010233,
    CycleTime: 150,
    disabled: true,
    Costs: []
  },
  {
    Name: "Goldschmelze",
    GUID: 1010327,
    Type: "FactoryBuilding7",
    FileName: "3dicons/icon_gold_0.png",
    type: "Zwischenprodukte",
    worldTypeIds: [1],
    // Electricity: 1,
    Maintenance: [
      {Product: 1010017, Amount: 750},
      {Product: 1010117, Amount: 125}
    ],
    InputProducts: [1010233, 1010226],
    OutputProduct: 1010249,
    CycleTime: 60,
    Costs: [
      {Ingredient: 1010017, Amount: 27000},
      {Ingredient: 1010196, Amount: 8},
      {Ingredient: 1010205, Amount: 15},
      {Ingredient: 1010218, Amount: 12},
      {Ingredient: 1010207, Amount: 10},
      {Ingredient: 1010202, Amount: 10}
    ]
  },
  {
    Name: "Uhrenwerkstatt",
    GUID: 1010324,
    Type: "FactoryBuilding7",
    FileName: "3dicons/icon_pocket_watch_0.png",
    type: "Konsumgüter",
    worldTypeIds: [1],
    // Electricity: 2,
    Maintenance: [
      {Product: 1010017, Amount: 1400},
      {Product: 1010117, Amount: 150}
    ],
    InputProducts: [1010241, 1010249],
    OutputProduct: 1010246,
    CycleTime: 90,
    Costs: [
      {Ingredient: 1010017, Amount: 48000},
      {Ingredient: 1010196, Amount: 8},
      {Ingredient: 1010205, Amount: 15},
      {Ingredient: 1010218, Amount: 12},
      {Ingredient: 1010207, Amount: 10},
      {Ingredient: 1010202, Amount: 10}
    ]
  },
  {
    Name: "Glühfadenfabrik",
    GUID: 1010321,
    Type: "FactoryBuilding7",
    FileName: "3dicons/icon_carbon_filament_0.png",
    type: "Zwischenprodukte",
    worldTypeIds: [1],
    // Electricity: 1,
    Maintenance: [
      {Product: 1010017, Amount: 725},
      {Product: 1010117, Amount: 150}
    ],
    InputProducts: [1010226],
    OutputProduct: 1010243,
    CycleTime: 60,
    Costs: [
      {Ingredient: 1010017, Amount: 30000},
      {Ingredient: 1010196, Amount: 8},
      {Ingredient: 1010205, Amount: 15},
      {Ingredient: 1010218, Amount: 12},
      {Ingredient: 1010207, Amount: 10},
      {Ingredient: 1010202, Amount: 10}
    ]
  },
  {
    Name: "Glühbirnenfabrik",
    GUID: 1010286,
    Type: "FactoryBuilding7",
    FileName: "3dicons/icon_light_bulb_0.png",
    type: "Konsumgüter",
    worldTypeIds: [1],
    // Electricity: 1,
    Maintenance: [
      {Product: 1010017, Amount: 1000},
      {Product: 1010117, Amount: 150}
    ],
    InputProducts: [1010241, 1010243],
    OutputProduct: 1010208,
    CycleTime: 60,
    Costs: [
      {Ingredient: 1010017, Amount: 45000},
      {Ingredient: 1010196, Amount: 8},
      {Ingredient: 1010205, Amount: 15},
      {Ingredient: 1010218, Amount: 12},
      {Ingredient: 1010207, Amount: 10},
      {Ingredient: 1010202, Amount: 10}
    ]
  },
  {
    Name: "Weinberg",
    GUID: 100655,
    Type: "FarmBuilding",
    FileName: "3dicons/icon_grapes_0.png",
    type: "Landwirtschaftliche Produkte",
    worldTypeIds: [1],
    // Electricity: -1,
    ModuleLimit: 128,
    Maintenance: [
      {Product: 1010017, Amount: 200},
      {Product: 1010052, Amount: 10}
    ],
    InputProducts: [],
    OutputProduct: 120014,
    CycleTime: 120,
    Costs: [
      {Ingredient: 1010017, Amount: 8000},
      {Ingredient: 1010196, Amount: 10}
    ]
  },
  {
    Name: "Sektkellerei",
    GUID: 100659,
    Type: "FactoryBuilding7",
    FileName: "3dicons/icon_champagne_0.png",
    type: "Konsumgüter",
    worldTypeIds: [1],
    // Electricity: 1,
    Maintenance: [
      {Product: 1010017, Amount: 1000},
      {Product: 1010116, Amount: 150}
    ],
    InputProducts: [1010241, 120014],
    OutputProduct: 120016,
    CycleTime: 30,
    Costs: [
      {Ingredient: 1010017, Amount: 35000},
      {Ingredient: 1010196, Amount: 10},
      {Ingredient: 1010205, Amount: 20},
      {Ingredient: 1010218, Amount: 16},
      {Ingredient: 1010207, Amount: 15},
      {Ingredient: 1010202, Amount: 15}
    ]
  },
  {
    Name: "Kunstschreinerei",
    GUID: 1010320,
    Type: "FactoryBuilding7",
    FileName: "3dicons/icon_inlay_0.png",
    type: "Zwischenprodukte",
    worldTypeIds: [1],
    // Electricity: 1,
    Maintenance: [
      {Product: 1010017, Amount: 750},
      {Product: 1010117, Amount: 150}
    ],
    InputProducts: [120008],
    OutputProduct: 1010242,
    CycleTime: 60,
    Costs: [
      {Ingredient: 1010017, Amount: 22000},
      {Ingredient: 1010196, Amount: 10},
      {Ingredient: 1010205, Amount: 20},
      {Ingredient: 1010218, Amount: 16},
      {Ingredient: 1010207, Amount: 15},
      {Ingredient: 1010202, Amount: 15}
    ]
  },
  {
    Name: "Zigarren-Manufaktur",
    GUID: "1010342_1",
    Type: "FactoryBuilding7",
    FileName: "3dicons/icon_cigars_0.png",
    type: "Konsumgüter",
    worldTypeIds: [1],
    // Electricity: -1,
    Maintenance: [],
    InputProducts: [],
    OutputProduct: 1010259,
    CycleTime: 30,
    disabled: true,
    Costs: []
  },
  {
    Name: "Schokoladenfabrik",
    GUID: "1010341_1",
    Type: "FactoryBuilding7",
    FileName: "3dicons/icon_chocolate_0.png",
    type: "Konsumgüter",
    worldTypeIds: [1],
    // Electricity: -1,
    Maintenance: [],
    InputProducts: [],
    OutputProduct: 1010258,
    CycleTime: 30,
    disabled: true,
    Costs: []
  },
  {
    Name: "Perlenfarm",
    GUID: "1010339_1",
    Type: "FactoryBuilding7",
    FileName: "3dicons/icon_pearls_0.png",
    type: "Rohmaterial",
    worldTypeIds: [1],
    // Electricity: -1,
    Maintenance: [],
    InputProducts: [],
    OutputProduct: 1010256,
    CycleTime: 90,
    disabled: true,
    Costs: []
  },
  {
    Name: "Goldschmiede",
    GUID: 1010328,
    Type: "FactoryBuilding7",
    FileName: "3dicons/icon_jewelry_0.png",
    type: "Konsumgüter",
    worldTypeIds: [1],
    // Electricity: 1,
    Maintenance: [
      {Product: 1010017, Amount: 2500},
      {Product: 1010116, Amount: 150}
    ],
    InputProducts: [1010249, 1010256],
    OutputProduct: 1010250,
    CycleTime: 30,
    Costs: [
      {Ingredient: 1010017, Amount: 33000},
      {Ingredient: 1010196, Amount: 10},
      {Ingredient: 1010205, Amount: 20},
      {Ingredient: 1010218, Amount: 16},
      {Ingredient: 1010207, Amount: 15},
      {Ingredient: 1010202, Amount: 15}
    ]
  },
  {
    Name: "Phonographenfabrik",
    GUID: 1010326,
    Type: "FactoryBuilding7",
    FileName: "3dicons/icon_phonographs_0.png",
    type: "Konsumgüter",
    worldTypeIds: [1],
    // Electricity: 2,
    Maintenance: [
      {Product: 1010017, Amount: 1600},
      {Product: 1010117, Amount: 150}
    ],
    InputProducts: [1010204, 1010242],
    OutputProduct: 1010248,
    CycleTime: 120,
    Costs: [
      {Ingredient: 1010017, Amount: 60000},
      {Ingredient: 1010196, Amount: 10},
      {Ingredient: 1010205, Amount: 20},
      {Ingredient: 1010218, Amount: 16},
      {Ingredient: 1010207, Amount: 15},
      {Ingredient: 1010202, Amount: 15}
    ]
  },
  {
    Name: "Kutschen-Werkhalle",
    GUID: 1010289,
    Type: "FactoryBuilding7",
    FileName: "3dicons/icon_chassis_0.png",
    type: "Zwischenprodukte",
    worldTypeIds: [1],
    // Electricity: 1,
    Maintenance: [
      {Product: 1010017, Amount: 1200},
      {Product: 1010117, Amount: 150}
    ],
    InputProducts: [120008, 1010255],
    OutputProduct: 1010211,
    CycleTime: 120,
    Costs: [
      {Ingredient: 1010017, Amount: 55000},
      {Ingredient: 1010196, Amount: 10},
      {Ingredient: 1010205, Amount: 20},
      {Ingredient: 1010218, Amount: 16},
      {Ingredient: 1010207, Amount: 15},
      {Ingredient: 1010202, Amount: 15}
    ]
  },

  {
    Name: "Dampfwagenfabrik",
    GUID: 1010303,
    Type: "HeavyFactoryBuilding",
    FileName: "3dicons/icon_steam_carriage_0.png",
    type: "Konsumgüter",
    worldTypeIds: [1],
    // Electricity: 2,
    Maintenance: [
      {Product: 1010017, Amount: 3000},
      {Product: 1010117, Amount: 500}
    ],
    InputProducts: [1010224, 1010211],
    OutputProduct: 1010225,
    CycleTime: 60,
    Costs: [
      {Ingredient: 1010017, Amount: 115000},
      {Ingredient: 1010196, Amount: 20},
      {Ingredient: 1010205, Amount: 40},
      {Ingredient: 1010218, Amount: 32},
      {Ingredient: 1010207, Amount: 30},
      {Ingredient: 1010202, Amount: 30}
    ]
  },


  //holz
  //bretter
  {
    Name: "Bananenplantage",
    GUID: 101263,
    Type: "FarmBuilding",
    FileName: "3dicons/icon_banana_0.png",
    type: "Landwirtschaftliche Produkte",
    worldTypeIds: [2],
    // Electricity: -1,
    ModuleLimit: 128,
    Maintenance: [
      {Product: 1010017, Amount: 5},
      {Product: 1010366, Amount: 10}
    ],
    InputProducts: [],
    OutputProduct: 120041,
    CycleTime: 30,
    Costs: [
      {Ingredient: 1010017, Amount: 500},
      {Ingredient: 1010196, Amount: 6}
    ]
  },
  {
    Name: "Fischölfabrik",
    GUID: 101262,
    Type: "FactoryBuilding7",
    FileName: "3dicons/icon_fishoil_0.png",
    type: "Landwirtschaftliche Produkte",
    worldTypeIds: [2],
    // Electricity: -1,
    Maintenance: [
      {Product: 1010017, Amount: 5},
      {Product: 1010366, Amount: 15}
    ],
    InputProducts: [],
    OutputProduct: 120042,
    CycleTime: 30,
    Costs: [
      {Ingredient: 1010017, Amount: 500},
      {Ingredient: 1010196, Amount: 6}
    ]
  },
  {
    Name: "Küche",
    GUID: 101264,
    Type: "FactoryBuilding7",
    FileName: "3dicons/icon_fried_bananas_0.png",
    type: "Konsumgüter",
    worldTypeIds: [2],
    // Electricity: -1,
    Maintenance: [
      {Product: 1010017, Amount: 15},
      {Product: 1010366, Amount: 25}
    ],
    InputProducts: [120041, 120042],
    OutputProduct: 120033,
    CycleTime: 30,
    Costs: [
      {Ingredient: 1010017, Amount: 500},
      {Ingredient: 1010196, Amount: 2}
    ]
  },
  {
    Name: "Baumwollplantage",
    GUID: 1010331,
    Type: "FarmBuilding",
    FileName: "3dicons/icon_cotton_0.png",
    type: "Landwirtschaftliche Produkte",
    worldTypeIds: [2],
    // Electricity: -1,
    ModuleLimit: 144,
    Maintenance: [
      {Product: 1010017, Amount: 5},
      {Product: 1010366, Amount: 10}
    ],
    InputProducts: [],
    OutputProduct: 1010253,
    CycleTime: 60,
    Costs: [
      {Ingredient: 1010017, Amount: 500},
      {Ingredient: 1010196, Amount: 6}
    ]
  },
  {
    Name: "Baumwollweberei",
    GUID: 1010318,
    Type: "FactoryBuilding7",
    FileName: "3dicons/icon_cotton_fur_0.png",
    type: "Zwischenprodukte",
    worldTypeIds: [2],
    // Electricity: -1,
    Maintenance: [
      {Product: 1010017, Amount: 10},
      {Product: 1010366, Amount: 10}
    ],
    InputProducts: [1010253],
    OutputProduct: 1010240,
    CycleTime: 30,
    Costs: [
      {Ingredient: 1010017, Amount: 500},
      {Ingredient: 1010196, Amount: 6}
    ]
  },
  //segel
  {
    Name: "Zuckerrohrplantage",
    GUID: 1010329,
    Type: "FarmBuilding",
    FileName: "3dicons/icon_cane_sugar_1_0.png",
    type: "Landwirtschaftliche Produkte",
    worldTypeIds: [2],
    // Electricity: -1,
    ModuleLimit: 128,
    Maintenance: [
      {Product: 1010017, Amount: 5},
      {Product: 1010366, Amount: 10}
    ],
    InputProducts: [],
    OutputProduct: 1010251,
    CycleTime: 30,
    Costs: [
      {Ingredient: 1010017, Amount: 500},
      {Ingredient: 1010196, Amount: 6}
    ]
  },
  {
    Name: "Rumbrennerei",
    GUID: 1010340,
    Type: "FactoryBuilding7",
    FileName: "3dicons/icon_rum_barrel_0.png",
    type: "Konsumgüter",
    worldTypeIds: [2],
    // Electricity: -1,
    Maintenance: [
      {Product: 1010017, Amount: 50},
      {Product: 1010366, Amount: 30}
    ],
    InputProducts: [120008, 1010251],
    OutputProduct: 1010257,
    CycleTime: 30,
    Costs: [
      {Ingredient: 1010017, Amount: 2500},
      {Ingredient: 1010196, Amount: 6}
    ]
  },
  {
    Name: "Alpakafarm",
    GUID: 101272,
    Type: "FarmBuilding",
    FileName: "3dicons/icon_alpaca_wool_0.png",
    type: "Landwirtschaftliche Produkte",
    worldTypeIds: [2],
    // Electricity: -1,
    ModuleLimit: 4,
    Maintenance: [
      {Product: 1010017, Amount: 5},
      {Product: 1010366, Amount: 10}
    ],
    InputProducts: [],
    OutputProduct: 120036,
    CycleTime: 30,
    Costs: [
      {Ingredient: 1010017, Amount: 500},
      {Ingredient: 1010196, Amount: 6}
    ]
  },
  {
    Name: "Ponchoweberei",
    GUID: 101266,
    Type: "FactoryBuilding7",
    FileName: "3dicons/icon_poncho_0.png",
    type: "Konsumgüter",
    worldTypeIds: [2],
    // Electricity: -1,
    Maintenance: [
      {Product: 1010017, Amount: 15},
      {Product: 1010366, Amount: 30}
    ],
    InputProducts: [120036],
    OutputProduct: 120043,
    CycleTime: 30,
    Costs: [
      {Ingredient: 1010017, Amount: 500},
      {Ingredient: 1010196, Amount: 6}
    ]
  },
  {
    Name: "Kautschuckplantage",
    GUID: 1010333,
    Type: "FarmBuilding",
    FileName: "3dicons/icon_caoutchouc_0.png",
    type: "Landwirtschaftliche Produkte",
    worldTypeIds: [2],
    // Electricity: -1,
    ModuleLimit: 144,
    Maintenance: [
      {Product: 1010017, Amount: 25},
      {Product: 1010366, Amount: 10}
    ],
    InputProducts: [],
    OutputProduct: 1010255,
    CycleTime: 60,
    Costs: [
      {Ingredient: 1010017, Amount: 2500},
      {Ingredient: 1010196, Amount: 8}
    ]
  },
  {
    Name: "Perlenfarm",
    GUID: 1010339,
    Type: "FactoryBuilding7",
    FileName: "3dicons/icon_pearls_0.png",
    type: "Rohmaterial",
    worldTypeIds: [2],
    // Electricity: -1,
    Maintenance: [
      {Product: 1010017, Amount: 25},
      {Product: 1010366, Amount: 50}
    ],
    InputProducts: [],
    OutputProduct: 1010256,
    CycleTime: 90,
    Costs: [
      {Ingredient: 1010017, Amount: 8500},
      {Ingredient: 1010196, Amount: 10}
    ]
  },

  //lehm
  //ziegel
  {//händisch von https://anno1800.fandom.com/wiki/Cattle_Farm
    Name: "Rinderfarm",
    GUID: 101269,
    Type: "FarmBuilding",
    FileName: "3dicons/icon_meat_raw_0.png",
    type: "Landwirtschaftliche Produkte",
    worldTypeIds: [2],
    // Electricity: -1,
    ModuleLimit: 6,
    Maintenance: [
      {Product: 1010017, Amount: 25},
      {Product: 1010366, Amount: 20}
    ],
    InputProducts: [],
    OutputProduct: 1010193,
    CycleTime: 60,
    Costs: [
      {Ingredient: 1010017, Amount: 2500},//
      {Ingredient: 1010196, Amount: 6}
    ]
  },
  {
    Name: "Maisplantage",
    GUID: 101270,
    Type: "FarmBuilding",
    FileName: "3dicons/icon_corn_0.png",
    type: "Landwirtschaftliche Produkte",
    worldTypeIds: [2],
    // Electricity: -1,
    ModuleLimit: 168,
    Maintenance: [
      {Product: 1010017, Amount: 25},
      {Product: 1010366, Amount: 10}
    ],
    InputProducts: [],
    OutputProduct: 120034,
    CycleTime: 60,
    Costs: [
      {Ingredient: 1010017, Amount: 2500},
      {Ingredient: 1010196, Amount: 3}
    ]
  },
  {
    Name: "Tortilla-Bäckerei",
    GUID: 101271,
    Type: "FactoryBuilding7",
    FileName: "3dicons/icon_burrito_0.png",
    type: "Konsumgüter",
    worldTypeIds: [2],
    // Electricity: -1,
    Maintenance: [
      {Product: 1010017, Amount: 100},
      {Product: 1010367, Amount: 100}
    ],
    InputProducts: [1010193, 120034],
    OutputProduct: 120035,
    CycleTime: 30,
    Costs: [
      {Ingredient: 1010017, Amount: 4500},
      {Ingredient: 1010196, Amount: 3},
      {Ingredient: 1010205, Amount: 2}
    ]
  },
  {
    Name: "Kaffeeplantage",
    GUID: 101251,
    Type: "FarmBuilding",
    FileName: "3dicons/icon_coffee_beans_0.png",
    type: "Landwirtschaftliche Produkte",
    worldTypeIds: [2],
    // Electricity: -1,
    ModuleLimit: 168,
    Maintenance: [
      {Product: 1010017, Amount: 25},
      {Product: 1010366, Amount: 10}
    ],
    InputProducts: [],
    OutputProduct: 120031,
    CycleTime: 60,
    Costs: [
      {Ingredient: 1010017, Amount: 2500},
      {Ingredient: 1010196, Amount: 5}
    ]
  },
  {
    Name: "Kaffeerösterei",
    GUID: 101252,
    Type: "FactoryBuilding7",
    FileName: "3dicons/icon_coffe_cup_0.png",
    type: "Konsumgüter",
    worldTypeIds: [2],
    // Electricity: -1,
    Maintenance: [
      {Product: 1010017, Amount: 150},
      {Product: 1010367, Amount: 150}
    ],
    InputProducts: [120031],
    OutputProduct: 120032,
    CycleTime: 30,
    Costs: [
      {Ingredient: 1010017, Amount: 9000},
      {Ingredient: 1010196, Amount: 5},
      {Ingredient: 1010205, Amount: 3}
    ]
  },
  {
    Name: "Goldmine",
    GUID: 1010311,
    Type: "SlotFactoryBuilding7",
    FileName: "3dicons/icon_gold_ore_0.png",
    type: "Rohmaterial",
    worldTypeIds: [2],
    // Electricity: -1,
    Maintenance: [
      {Product: 1010017, Amount: 250},
      // {Product: 1010115, Amount: 25}
      {Product: 1010367, Amount: 25}
    ],
    InputProducts: [],
    OutputProduct: 1010233,
    CycleTime: 150,
    Costs: [
      {Ingredient: 1010017, Amount: 12000},
      {Ingredient: 1010196, Amount: 8},
      {Ingredient: 1010205, Amount: 15},
      {Ingredient: 1010218, Amount: 12},
      {Ingredient: 1010207, Amount: 10},
      {Ingredient: 1010202, Amount: 10}
    ]
  },
  {// händisch von https://anno1800.fandom.com/wiki/Oil_Refinery
    Name: "Ölraffinerie",
    GUID: 1010561,
    Type: "FarmBuilding",
    FileName: "3dicons/icon_oil_0.png",
    type: "Rohmaterial",
    worldTypeIds: [2],
    // Electricity: -1,
    Maintenance: [
      {Product: 1010017, Amount: 250},
      {Product: 1010367, Amount: 100}
    ],
    InputProducts: [],
    OutputProduct: 1010566,
    CycleTime: 15,
    Costs: [
      {Ingredient: 1010017, Amount: 2500},//
      {Ingredient: 1010196, Amount: 8},
      {Ingredient: 1010205, Amount: 15},
      {Ingredient: 1010218, Amount: 12},
      {Ingredient: 1010207, Amount: 10},
      {Ingredient: 1010202, Amount: 10}
    ]
  },
  {
    Name: "Filzfabrik",
    GUID: 101415,
    Type: "FactoryBuilding7",
    FileName: "3dicons/icon_felt_0.png",
    type: "Zwischenprodukte",
    worldTypeIds: [2],
    // Electricity: -1,
    Maintenance: [
      {Product: 1010017, Amount: 10},
      {Product: 1010366, Amount: 10}
    ],
    InputProducts: [120036],
    OutputProduct: 120044,
    CycleTime: 30,
    Costs: [
      {Ingredient: 1010017, Amount: 2500},
      {Ingredient: 1010196, Amount: 3},
      {Ingredient: 1010205, Amount: 2}
    ]
  },
  {
    Name: "Hutmacherei",
    GUID: 101273,
    Type: "FactoryBuilding7",
    FileName: "3dicons/icon_bowler_hat_0.png",
    type: "Konsumgüter",
    worldTypeIds: [2],
    // Electricity: -1,
    Maintenance: [
      {Product: 1010017, Amount: 50},
      {Product: 1010367, Amount: 20}
    ],
    InputProducts: [1010240, 120044],
    OutputProduct: 120037,
    CycleTime: 30,
    Costs: [
      {Ingredient: 1010017, Amount: 9000},
      {Ingredient: 1010196, Amount: 3},
      {Ingredient: 1010205, Amount: 2}
    ]
  },
  {
    Name: "Brauerei",
    GUID: "1010292_2",
    Type: "FactoryBuilding7",
    FileName: "3dicons/icon_beer_0.png",
    type: "Konsumgüter",
    worldTypeIds: [2],
    // Electricity: 1,
    Maintenance: [],
    InputProducts: [],
    OutputProduct: 1010214,
    CycleTime: 60,
    disabled: true,
    Costs: []
  },
  {
    Name: "Tabakplantage",
    GUID: 1010330,
    Type: "FarmBuilding",
    FileName: "3dicons/icon_tobacco_0.png",
    type: "Landwirtschaftliche Produkte",
    worldTypeIds: [2],
    // Electricity: -1,
    ModuleLimit: 192,
    Maintenance: [
      {Product: 1010017, Amount: 25},
      {Product: 1010366, Amount: 10}
    ],
    InputProducts: [],
    OutputProduct: 1010252,
    CycleTime: 120,
    Costs: [
      {Ingredient: 1010017, Amount: 7000},
      {Ingredient: 1010196, Amount: 10}
    ]
  },
  {// händisch von https://anno1800.fandom.com/wiki/Marquetry_Workshop
    Name: "Kunstschreinerei",
    GUID: 101296,
    Type: "FactoryBuilding7",
    FileName: "3dicons/icon_inlay_0.png",
    type: "Zwischenprodukte",
    worldTypeIds: [2],
    // Electricity: -1,
    Maintenance: [
      {Product: 1010017, Amount: 100},
      {Product: 1010367, Amount: 100}
    ],
    InputProducts: [120008],
    OutputProduct: 1010242,
    CycleTime: 60,
    Costs: [
      {Ingredient: 1010017, Amount: 2500},//
      {Ingredient: 1010196, Amount: 10},
      {Ingredient: 1010205, Amount: 20}
    ]
  },
  {
    Name: "Zigarren-Manufaktur",
    GUID: 1010342,
    Type: "FactoryBuilding7",
    FileName: "3dicons/icon_cigars_0.png",
    type: "Konsumgüter",
    worldTypeIds: [2],
    // Electricity: -1,
    Maintenance: [
      {Product: 1010017, Amount: 250},
      {Product: 1010367, Amount: 175}
    ],
    InputProducts: [1010252, 1010242],
    OutputProduct: 1010259,
    CycleTime: 30,
    Costs: [
      {Ingredient: 1010017, Amount: 2500},
      {Ingredient: 1010196, Amount: 10},
      {Ingredient: 1010205, Amount: 20}
    ]
  },
  {
    Name: "Nähmaschinenfabrik",
    GUID: "1010284_2",
    Type: "FactoryBuilding7",
    FileName: "3dicons/icon_sewing_machine_0.png",
    type: "Konsumgüter",
    worldTypeIds: [2],
    // Electricity: 1,
    Maintenance: [],
    InputProducts: [],
    OutputProduct: 1010206,
    CycleTime: 30,
    disabled: true,
    Costs: []
  },
  {
    Name: "Zuckerraffinerie",
    GUID: 1010317,
    Type: "FactoryBuilding7",
    FileName: "3dicons/icon_salt_0.png",
    type: "Zwischenprodukte",
    worldTypeIds: [2],
    // Electricity: -1,
    Maintenance: [
      {Product: 1010017, Amount: 10},
      {Product: 1010367, Amount: 50}
    ],
    InputProducts: [1010251],
    OutputProduct: 1010239,
    CycleTime: 30,
    Costs: [
      {Ingredient: 1010017, Amount: 500},
      {Ingredient: 1010196, Amount: 6}
    ]
  },
  {
    Name: "Kakaoplantage",
    GUID: 1010332,
    Type: "FarmBuilding",
    FileName: "3dicons/icon_cocoa_0.png",
    type: "Landwirtschaftliche Produkte",
    worldTypeIds: [2],
    // Electricity: -1,
    ModuleLimit: 128,
    Maintenance: [
      {Product: 1010017, Amount: 5},
      {Product: 1010366, Amount: 10}
    ],
    InputProducts: [],
    OutputProduct: 1010254,
    CycleTime: 60,
    Costs: [
      {Ingredient: 1010017, Amount: 7600},
      {Ingredient: 1010196, Amount: 6}
    ]
  },
  {
    Name: "Schokoladenfabrik",
    GUID: 1010341,
    Type: "FactoryBuilding7",
    FileName: "3dicons/icon_chocolate_0.png",
    type: "Konsumgüter",
    worldTypeIds: [2],
    // Electricity: -1,
    Maintenance: [
      {Product: 1010017, Amount: 50},
      {Product: 1010367, Amount: 100}
    ],
    InputProducts: [1010239, 1010254],
    OutputProduct: 1010258,
    CycleTime: 30,
    Costs: [
      {Ingredient: 1010017, Amount: 24000},
      {Ingredient: 1010196, Amount: 6}
    ]
  },
  {
    Name: "Gasförderstätte",
    GUID: "112690_1",
    Type: "FarmBuilding_Arctic",
    FileName: "3dicons/icon_gas_red_0.png",
    type: "Baumaterial",
    worldTypeIds: [1],
    // Electricity: -1,
    Heated: 1,
    Maintenance: [],
    InputProducts: [],
    OutputProduct: 112706,
    CycleTime: 270,
    disabled: true,
    Costs: []
  },

  other_producers[4],
  {
    Name: "Holzfällerhütte",
    GUID: 114703,
    Type: "FreeAreaBuilding_Arctic",
    FileName: "3dicons/icon_wood_log_0.png",
    type: "Rohmaterial",
    worldTypeIds: [3],
    // Electricity: -1,
    Heated: 1,
    Maintenance: [
      {Product: 1010017, Amount: 20},
      {Product: 112653, Amount: 10}
    ],
    InputProducts: [],
    OutputProduct: 120008,
    CycleTime: 15,
    Costs: [
      {Ingredient: 1010017, Amount: 100}
    ]
  },
  {
    Name: "Sägewerk",
    GUID: 114704,
    Type: "FactoryBuilding7_Arctic",
    FileName: "3dicons/icon_wooden_planks_0.png",
    type: "Baumaterial",
    worldTypeIds: [3],
    // Electricity: -1,
    Heated: 1,
    Maintenance: [
      {Product: 1010017, Amount: 20},
      {Product: 112653, Amount: 10}
    ],
    InputProducts: [120008],
    OutputProduct: 1010196,
    CycleTime: 15,
    Costs: [
      {Ingredient: 1010017, Amount: 100}
    ]
  },
  {
    Name: "Köhlerei",
    GUID: 114705,
    Type: "HeavyFreeAreaBuilding_Arctic",
    FileName: "3dicons/icon_coal_burn_0.png",
    type: "Rohmaterial",
    worldTypeIds: [3],
    // Electricity: -1,
    Maintenance: [
      {Product: 1010017, Amount: 20},
      {Product: 112653, Amount: 10}
    ],
    InputProducts: [],
    OutputProduct: 1010226,
    CycleTime: 30,
    Costs: [
      {Ingredient: 1010017, Amount: 500},
      {Ingredient: 1010196, Amount: 2}
    ]
  },
  {
    Name: "Walfängerei",
    GUID: 112666,
    Type: "FactoryBuilding7_Arctic",
    FileName: "3dicons/icon_whale_oil_2_0.png",
    type: "Landwirtschaftliche Produkte",
    worldTypeIds: [3],
    // Electricity: -1,
    Heated: 1,
    Maintenance: [
      {Product: 1010017, Amount: 75},
      {Product: 112653, Amount: 30}
    ],
    InputProducts: [],
    OutputProduct: 112699,
    CycleTime: 60,
    Costs: [
      {Ingredient: 1010017, Amount: 200},
      {Ingredient: 1010196, Amount: 5}
    ]
  },
  {
    Name: "Rentier-Jagdhütte",
    GUID: 112667,
    Type: "FreeAreaBuilding_Arctic",
    FileName: "3dicons/icon_reindeer_meat_0.png",
    type: "Landwirtschaftliche Produkte",
    worldTypeIds: [3],
    // Electricity: -1,
    Heated: 1,
    Maintenance: [
      {Product: 1010017, Amount: 40},
      {Product: 112653, Amount: 25}
    ],
    InputProducts: [],
    OutputProduct: 112694,
    CycleTime: 60,
    Costs: [
      {Ingredient: 1010017, Amount: 200},
      {Ingredient: 1010196, Amount: 2}
    ]
  },
  {
    Name: "Pemmikan-Räucherei",
    GUID: 112668,
    Type: "FactoryBuilding7_Arctic",
    FileName: "3dicons/icon_pemmican_0.png",
    type: "Konsumgüter",
    worldTypeIds: [3],
    // Electricity: -1,
    Heated: 1,
    Maintenance: [
      {Product: 1010017, Amount: 60},
      {Product: 112653, Amount: 30}
    ],
    InputProducts: [112699, 112694],
    OutputProduct: 112705,
    CycleTime: 60,
    Costs: [
      {Ingredient: 1010017, Amount: 1000},
      {Ingredient: 1010196, Amount: 5}
    ]
  },
  {
    Name: "Gänsefarm",
    GUID: 112676,
    Type: "FarmBuilding_Arctic",
    FileName: "3dicons/icon_goose_feathers_0.png",
    type: "Landwirtschaftliche Produkte",
    worldTypeIds: [3],
    // Electricity: -1,
    Heated: 1,
    Maintenance: [
      {Product: 1010017, Amount: 70},
      {Product: 112653, Amount: 35}
    ],
    InputProducts: [],
    OutputProduct: 112697,
    CycleTime: 120,
    Costs: [
      {Ingredient: 1010017, Amount: 200},
      {Ingredient: 1010196, Amount: 10}
    ]
  },
  {
    Name: "Robbenfängerei",
    GUID: 112674,
    Type: "FactoryBuilding7_Arctic",
    FileName: "3dicons/icon_seal_skin_0.png",
    type: "Landwirtschaftliche Produkte",
    worldTypeIds: [3],
    // Electricity: -1,
    Heated: 1,
    Maintenance: [
      {Product: 1010017, Amount: 50},
      {Product: 112653, Amount: 20}
    ],
    InputProducts: [],
    OutputProduct: 112696,
    CycleTime: 30,
    Costs: [
      {Ingredient: 1010017, Amount: 200},
      {Ingredient: 1010196, Amount: 5}
    ]
  },
  {
    Name: "Schlafsackfabrik",
    GUID: 112675,
    Type: "FactoryBuilding7_Arctic",
    FileName: "3dicons/icon_sleeping_bags_0.png",
    type: "Konsumgüter",
    worldTypeIds: [3],
    // Electricity: -1,
    Heated: 1,
    Maintenance: [
      {Product: 1010017, Amount: 120},
      {Product: 112653, Amount: 50}
    ],
    InputProducts: [112697, 112696],
    OutputProduct: 112701,
    CycleTime: 60,
    Costs: [
      {Ingredient: 1010017, Amount: 1500},
      {Ingredient: 1010196, Amount: 15}
    ]
  },
  {
    Name: "Messinghütte",
    GUID: 1010282,
    Type: "HeavyFactoryBuilding",
    FileName: "3dicons/icon_brass_0.png",
    type: "Zwischenprodukte",
    worldTypeIds: [3],
    // Electricity: 1,
    Maintenance: [],
    InputProducts: [],
    OutputProduct: 1010204,
    CycleTime: 60,
    disabled: true,
    Costs: []
  },
  {
    Name: "Öllampenfabrik",
    GUID: 112679,
    Type: "FactoryBuilding7_Arctic",
    FileName: "3dicons/icon_oil_lamps_0.png",
    type: "Konsumgüter",
    worldTypeIds: [3],
    // Electricity: -1,
    Heated: 1,
    Maintenance: [
      {Product: 1010017, Amount: 200},
      {Product: 112653, Amount: 70}
    ],
    InputProducts: [1010204, 112699],
    OutputProduct: 112702,
    CycleTime: 60,
    Costs: [
      {Ingredient: 1010017, Amount: 2000},
      {Ingredient: 1010196, Amount: 15}
    ]
  },
  {
    Name: "Schnapsbrennerei",
    GUID: "1010294_3",
    Type: "FactoryBuilding7",
    FileName: "3dicons/icon_schnapps_4_0.png",
    type: "Konsumgüter",
    worldTypeIds: [3],
    // Electricity: 1,
    Maintenance: [],
    InputProducts: [],
    OutputProduct: 1010216,
    CycleTime: 30,
    disabled: true,
    Costs: []
  },

  {
    Name: "Konservenfabrik",
    GUID: "1010295_3",
    Type: "FactoryBuilding7",
    FileName: "3dicons/icon_canned_goulash_0.png",
    type: "Konsumgüter",
    worldTypeIds: [3],
    // Electricity: 1,
    Maintenance: [],
    InputProducts: [],
    OutputProduct: 1010217,
    CycleTime: 90,
    disabled: true,
    Costs: []
  },
  {
    Name: "Bären-Jagdhütte",
    GUID: 112673,
    Type: "FreeAreaBuilding_Arctic",
    FileName: "3dicons/icon_bear_fur_0.png",
    type: "Landwirtschaftliche Produkte",
    worldTypeIds: [3],
    // Electricity: -1,
    Heated: 1,
    Maintenance: [
      {Product: 1010017, Amount: 90},
      {Product: 112653, Amount: 40}
    ],
    InputProducts: [],
    OutputProduct: 112695,
    CycleTime: 90,
    Costs: [
      {Ingredient: 1010017, Amount: 2000},
      {Ingredient: 1010196, Amount: 5}
    ]
  },
  {
    Name: "Meisterhafte Jagdhütte",
    GUID: 116034,
    Type: "FreeAreaBuilding_Arctic",
    FileName: "3dicons/icon_fur_0.png",
    type: "Landwirtschaftliche Produkte",
    worldTypeIds: [3],
    // Electricity: -1,
    Heated: 1,
    Maintenance: [
      {Product: 1010017, Amount: 50},
      {Product: 112653, Amount: 40}
    ],
    InputProducts: [],
    OutputProduct: 1010209,
    CycleTime: 15,
    Costs: [
      {Ingredient: 1010017, Amount: 200},
      {Ingredient: 1010196, Amount: 2}
    ]
  },
  {
    Name: "Parkaschneiderei",
    GUID: 112672,
    Type: "FactoryBuilding7_Arctic",
    FileName: "3dicons/icon_fur_parka_0.png",
    type: "Konsumgüter",
    worldTypeIds: [3],
    // Electricity: -1,
    Heated: 1,
    Maintenance: [
      {Product: 1010017, Amount: 350},
      {Product: 112654, Amount: 80}
    ],
    InputProducts: [112696, 112695],
    OutputProduct: 112700,
    CycleTime: 90,
    Costs: [
      {Ingredient: 1010017, Amount: 2000},
      {Ingredient: 1010196, Amount: 10},
      {Ingredient: 1010218, Amount: 4}
    ]
  },
  {
    Name: "Huskyfarm",
    GUID: 112682,
    Type: "FarmBuilding_Arctic",
    FileName: "3dicons/animals/icon_husky_0.png",
    type: "Landwirtschaftliche Produkte",
    worldTypeIds: [3],
    // Electricity: -1,
    Heated: 1,
    Maintenance: [
      {Product: 1010017, Amount: 150},
      {Product: 112654, Amount: 80}
    ],
    InputProducts: [],
    OutputProduct: 112698,
    CycleTime: 120,
    Costs: [
      {Ingredient: 1010017, Amount: 3000},
      {Ingredient: 1010196, Amount: 20}
    ]
  },
  {
    Name: "Schlittenmanufaktur",
    GUID: 112681,
    Type: "FactoryBuilding7_Arctic",
    FileName: "3dicons/icon_sled_frame_0.png",
    type: "Zwischenprodukte",
    worldTypeIds: [3],
    // Electricity: -1,
    Heated: 1,
    Maintenance: [
      {Product: 1010017, Amount: 450},
      {Product: 112654, Amount: 80}
    ],
    InputProducts: [120008, 112696],
    OutputProduct: 112704,
    CycleTime: 60,
    Costs: [
      {Ingredient: 1010017, Amount: 3000},
      {Ingredient: 1010196, Amount: 20},
      {Ingredient: 1010218, Amount: 5}
    ]
  },
  {
    Name: "Hundeschlitten-Station",
    GUID: 112680,
    Type: "FactoryBuilding7_Arctic",
    FileName: "3dicons/icon_sled_0.png",
    type: "Konsumgüter",
    worldTypeIds: [3],
    // Electricity: -1,
    Heated: 1,
    Maintenance: [
      {Product: 1010017, Amount: 650},
      {Product: 112654, Amount: 100}
    ],
    InputProducts: [112698, 112704],
    OutputProduct: 112703,
    CycleTime: 60,
    Costs: [
      {Ingredient: 1010017, Amount: 5000},
      {Ingredient: 1010196, Amount: 20},
      {Ingredient: 1010218, Amount: 6}
    ]
  },
  {
    Name: "Kaffeerösterei",
    GUID: "101252_3",
    Type: "FactoryBuilding7",
    FileName: "3dicons/icon_coffe_cup_0.png",
    type: "Konsumgüter",
    worldTypeIds: [3],
    // Electricity: -1,
    Maintenance: [],
    InputProducts: [],
    OutputProduct: 120032,
    CycleTime: 30,
    disabled: true,
    Costs: []
  },
  {
    Name: "Tiefe Goldmine",
    GUID: 116029,
    Type: "SlotFactoryBuilding7_Arctic",
    FileName: "3dicons/icon_gold_ore_0.png",
    type: "Rohmaterial",
    worldTypeIds: [3],
    // Electricity: -1,
    Heated: 1,
    Maintenance: [
      {Product: 1010017, Amount: 400},
      {Product: 112654, Amount: 100}
    ],
    InputProducts: [],
    OutputProduct: 1010233,
    CycleTime: 60,
    Costs: [
      {Ingredient: 1010017, Amount: 5000},
      {Ingredient: 1010196, Amount: 20},
      {Ingredient: 1010218, Amount: 5}
    ]
  },
  {
    Name: "Gasförderstätte",
    GUID: 112690,
    Type: "FarmBuilding_Arctic",
    FileName: "3dicons/icon_gas_red_0.png",
    type: "Baumaterial",
    worldTypeIds: [3],
    // Electricity: -1,
    Heated: 1,
    Maintenance: [
      {Product: 1010017, Amount: 1000},
      {Product: 112654, Amount: 250}
    ],
    InputProducts: [],
    OutputProduct: 112706,
    CycleTime: 270,
    Costs: [
      {Ingredient: 1010017, Amount: 8000},
      {Ingredient: 1010196, Amount: 20},
      {Ingredient: 1010218, Amount: 5}
    ]
  },
]

/*
Market
CityInstitutionBuilding
PublicServiceBuilding
*/
export const non = [
  {
    GUID: 1010372,
    Name: "Marktplatz",
    Type: "Market",
    FileName: "3dicons/icon_market_0.png",
    worldTypeIds: [1,2],
    InfoDescription: 2976,
    // Electricity: -1,
    Maintenance: [
      {Product: 1010017, Amount: 20}
    ],
    Costs: [
      {Ingredient: 1010017, Amount: 500},
      {Ingredient: 1010196, Amount: 10}
    ]
  },
  {
    GUID: 101258,
    Name: "Kapelle",
    Type: "PublicServiceBuilding",
    FileName: "3dicons/icon_church_0.png",
    worldTypeIds: [2],
    // Electricity: 1,
    Maintenance: [],
    Costs: [
      {Ingredient: 1010017, Amount: 500},
      {Ingredient: 1010196, Amount: 10},
      {Ingredient: 1010205, Amount: 0}
    ]
  },
  {
    GUID: 1010463,
    Name: "Feuerwache",
    Type: "CityInstitutionBuilding",
    FileName: "3dicons/icon_fire_house_0.png",
    worldTypeIds: [1,2],
    InfoDescription: 118032,
    // Electricity: -1,
    Maintenance: [
      {Product: 1010017, Amount: 25}
    ],
    Costs: [
      {Ingredient: 1010017, Amount: 500},
      {Ingredient: 1010196, Amount: 4}
    ]
  },
  {
    GUID: 1010358,
    Name: "Wirtshaus",
    Type: "PublicServiceBuilding",
    FileName: "3dicons/icon_pub_0.png",
    worldTypeIds: [1],
    // Electricity: 1,
    Maintenance: [
      {Product: 1010017, Amount: 20}
    ],
    Costs: [
      {Ingredient: 1010017, Amount: 500},
      {Ingredient: 1010196, Amount: 10}
    ]
  },
  {
    GUID: 1010359,
    Name: "Kirche",
    Type: "PublicServiceBuilding",
    FileName: "3dicons/icon_church_0.png",
    worldTypeIds: [1],
    // Electricity: 1,
    Maintenance: [
      {Product: 1010017, Amount: 50}
    ],
    Costs: [
      {Ingredient: 1010017, Amount: 2500},
      {Ingredient: 1010196, Amount: 20},
      {Ingredient: 1010205, Amount: 25}
    ]
  },
  {
    GUID: 1010360,
    Name: "Schule",
    Type: "PublicServiceBuilding",
    FileName: "3dicons/icon_school_0.png",
    worldTypeIds: [1],
    // Electricity: 1,
    Maintenance: [
      {Product: 1010017, Amount: 50}
    ],
    Costs: [
      {Ingredient: 1010017, Amount: 2500},
      {Ingredient: 1010196, Amount: 20},
      {Ingredient: 1010205, Amount: 25},
      {Ingredient: 1010218, Amount: 20}
    ]
  },
  {
    GUID: 1010462,
    Name: "Polizeiwache",
    Type: "CityInstitutionBuilding",
    FileName: "3dicons/icon_police_0.png",
    worldTypeIds: [1,2],
    InfoDescription: 3788,
    // Electricity: -1,
    Maintenance: [
      {Product: 1010017, Amount: 50}
    ],
    Costs: [
      {Ingredient: 1010017, Amount: 2500},
      {Ingredient: 1010196, Amount: 8},
      {Ingredient: 1010205, Amount: 10}
    ]
  },
  {
    GUID: 1010361,
    Name: "Varieté",
    Type: "PublicServiceBuilding",
    FileName: "3dicons/icon_cabaret_0.png",
    worldTypeIds: [1],
    // Electricity: 1,
    Maintenance: [
      {Product: 1010017, Amount: 100}
    ],
    Costs: [
      {Ingredient: 1010017, Amount: 10000},
      {Ingredient: 1010196, Amount: 30},
      {Ingredient: 1010205, Amount: 50},
      {Ingredient: 1010218, Amount: 40},
      {Ingredient: 1010207, Amount: 40}
    ]
  },
  {
    GUID: 1010362,
    Name: "Universität",
    Type: "PublicServiceBuilding",
    FileName: "3dicons/icon_university_0.png",
    worldTypeIds: [1],
    // Electricity: 1,
    Maintenance: [
      {Product: 1010017, Amount: 400}
    ],
    Costs: [
      {Ingredient: 1010017, Amount: 15000},
      {Ingredient: 1010196, Amount: 30},
      {Ingredient: 1010205, Amount: 50},
      {Ingredient: 1010218, Amount: 40},
      {Ingredient: 1010207, Amount: 40}
    ]
  },
  {
    GUID: 1010464,
    Name: "Hospital",
    Type: "CityInstitutionBuilding",
    FileName: "3dicons/icon_hospital_0.png",
    worldTypeIds: [1,2],
    InfoDescription: 3789,
    // Electricity: -1,
    Maintenance: [
      {Product: 1010017, Amount: 100}
    ],
    Costs: [
      {Ingredient: 1010017, Amount: 10000},
      {Ingredient: 1010196, Amount: 12},
      {Ingredient: 1010205, Amount: 20},
      {Ingredient: 1010218, Amount: 16},
      {Ingredient: 1010207, Amount: 40}
    ]
  },
  {
    GUID: 1010365,
    Name: "Bankhaus",
    Type: "PublicServiceBuilding",
    FileName: "3dicons/icon_bank_0.png",
    worldTypeIds: [1],
    // Electricity: 1,
    Maintenance: [
      {Product: 1010017, Amount: 1000}
    ],
    Costs: [
      {Ingredient: 1010017, Amount: 100000},
      {Ingredient: 1010196, Amount: 40},
      {Ingredient: 1010205, Amount: 75},
      {Ingredient: 1010218, Amount: 60},
      {Ingredient: 1010207, Amount: 60},
      {Ingredient: 1010202, Amount: 50}
    ]
  },
  {
    GUID: 1010364,
    Name: "Clubhaus",
    Type: "PublicServiceBuilding",
    FileName: "3dicons/icon_club_house_0.png",
    worldTypeIds: [1],
    // Electricity: 1,
    Maintenance: [
      {Product: 1010017, Amount: 350}
    ],
    Costs: [
      {Ingredient: 1010017, Amount: 50000},
      {Ingredient: 1010196, Amount: 50},
      {Ingredient: 1010205, Amount: 100},
      {Ingredient: 1010218, Amount: 80},
      {Ingredient: 1010207, Amount: 75},
      {Ingredient: 1010202, Amount: 75}
    ]
  },

  {
    GUID: 114889,
    Name: "114889",
    Type: "Market",
    FileName: "3dicons/icon_canteen_0.png",
    worldTypeIds: [3],
    InfoDescription: 11144,
    // Electricity: -1,
    Maintenance: [
      {Product: 1010017, Amount: 100}
    ],
    Costs: [
      {Ingredient: 1010017, Amount: 1000},
      {Ingredient: 1010196, Amount: 5}
    ]
  },
  {
    GUID: 112684,
    Name: "112684",
    Type: "PublicServiceBuilding",
    FileName: "3dicons/icon_post_office_0.png",
    worldTypeIds: [3],
    // Electricity: 1,
    Maintenance: [
      {Product: 1010017, Amount: 75}
    ],
    Costs: [
      {Ingredient: 1010017, Amount: 2500},
      {Ingredient: 1010196, Amount: 20},
      {Ingredient: 1010218, Amount: 10}
    ]
  },

]

export const builders = [
  {
    GUID: 1010520,
    Type: "Shipyard",
    Name: "Segelschiffswerft",
    FileName: "3dicons/icon_sail_shipyard_0.png",
    worldTypeIds: [1],//auch 2?
    InfoDescription: 1090,
    // Electricity: 1,
    Maintenance: [
      {Product: 1010017, Amount: 100},
      {Product: 1010115, Amount: 100}
    ],
    Costs: [
      {Ingredient: 1010017, Amount: 10000},
      {Ingredient: 1010196, Amount: 20},
      {Ingredient: 1010205, Amount: 25}
    ]
  },
  {
    GUID: 1010521,
    Type: "Shipyard",
    Name: "Dampfschiffswerft",
    FileName: "3dicons/icon_steam_shipyard_0.png",
    worldTypeIds: [1],
    InfoDescription: 1091,
    // Electricity: 2,
    Maintenance: [
      {Product: 1010017, Amount: 400},
      {Product: 1010117, Amount: 200}
    ],
    Costs: [
      {Ingredient: 1010017, Amount: 90000},
      {Ingredient: 1010196, Amount: 50},
      {Ingredient: 1010205, Amount: 100},
      {Ingredient: 1010218, Amount: 80},
      {Ingredient: 1010207, Amount: 75},
      {Ingredient: 1010202, Amount: 75}
    ]
  },
]

