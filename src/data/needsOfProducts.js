import {producers} from "./worldGeneration/buildings";

const needsOfProducts = [
{
  GUID: 1010343,
  tierId: 1, // Farmers
  Inputs: [
    {GUID: 120020, Amount: 0.0, influx: 5},
    {GUID: 1010200, Amount: 0.0004166667, influx: 3},
    {GUID: 1010216, Amount: 0.000555556, influx: 0},
    {GUID: 1010237, Amount: 0.000512821, influx: 2},
  ]
},
  {
    GUID: 1010344,
    tierId: 2, // Workers
    Inputs: [
      {GUID: 120020, Amount: 0.0, influx: 5},
      {GUID: 1010200, Amount: 0.0008333334, influx: 3},
      {GUID: 1010216, Amount: 0.001111112, influx: 0},
      {GUID: 1010237, Amount: 0.001025642, influx: 2},
      {GUID: 1010238, Amount: 0.000333334, influx: 3},
      {GUID: 1010213, Amount: 0.00030303, influx: 3},
      {GUID: 1010203, Amount: 0.000138889, influx: 2},
      {GUID: 1010214, Amount: 0.00025641, influx: 0},
      {GUID: 1010351, Amount: 0.0, influx: 2},
    ]
  },
  {
    GUID: 1010345,
    tierId: 3, // Artisans
    Inputs: [
      {GUID: 1010238, Amount: 0.000666667, influx: 6},
      {GUID: 1010213, Amount: 0.000606061, influx: 6},
      {GUID: 1010203, Amount: 0.000277778, influx: 4},
      {GUID: 1010214, Amount: 0.000512821, influx: 0},
      {GUID: 1010351, Amount: 0.0, influx: 4},
      {GUID: 1010217, Amount: 0.00017094, influx: 4},
      {GUID: 1010206, Amount: 0.00047619, influx: 2},
      {GUID: 1010257, Amount: 0.000952381, influx: 0},
      {GUID: 1010247, Amount: 0.000444444, influx: 2},
      {GUID: 1010353, Amount: 0.0, influx: 2},
    ]
  },
  {
    GUID: 1010346,
    tierId: 4, // Engineers
    Inputs: [
      {GUID: 1010217, Amount: 0.00034188, influx: 12},
      {GUID: 1010206, Amount: 0.000952381, influx: 6},
      {GUID: 1010257, Amount: 0.001904762, influx: 0},
      {GUID: 1010247, Amount: 0.000888889, influx: 6},
      {GUID: 1010353, Amount: 0.0, influx: 6},
      {GUID: 120030, Amount: 0.000148148, influx: 4},
      {GUID: 1010245, Amount: 0.000416667, influx: 0},
      {GUID: 120032, Amount: 0.000784314, influx: 2},
      {GUID: 1010246, Amount: 0.000130719, influx: 0},
      {GUID: 1010354, Amount: 0.0, influx: 2},
      {GUID: 1010208, Amount: 0.000208333, influx: 2},
    ]
  },
  {
    GUID: 1010347,
    tierId: 5, // Investors
    Inputs: [
      {GUID: 120030, Amount: 0.000296296, influx: 16},   // Glasses
      {GUID: 1010245, Amount: 0.000833333, influx: 0},   // Penny Farthings
      {GUID: 120032, Amount: 0.001568627, influx: 8},    // Coffee
      {GUID: 1010246, Amount: 0.000261438, influx: 0},   // Pocket Watches
      {GUID: 1010354, Amount: 0.0, influx: 8},           // Electricity
      {GUID: 1010208, Amount: 0.000416667, influx: 8},   // Light Bulbs
      {GUID: 120016, Amount: 0.000392, influx: 2},       // Champagne
      {GUID: 1010259, Amount: 0.00037037, influx: 2},    // Cigars
      {GUID: 1010258, Amount: 0.000888889, influx: 2},   // Chocolate
      {GUID: 1010250, Amount: 0.000350877, influx: 0},   // Jewellery
      {GUID: 1010248, Amount: 0.0000877, influx: 0},     // Gramophones
      {GUID: 1010225, Amount: 0.000111111, influx: 4},   // Steam Carriages
    ]
  },
  {
    GUID: 101254,
    tierId: 6, // Jornaleros
    Inputs: [
      {GUID: 120020, Amount: 0.0, influx: 5},
      {GUID: 120033, Amount: 0.00047619, influx: 3},
      {GUID: 1010257, Amount: 0.000238095, influx: 0},
      {GUID: 120043, Amount: 0.000416667, influx: 2},
    ]
  },
  {
    GUID: 101255,
    tierId: 7, // Obreros
    Inputs: [
      {GUID: 120020, Amount: 0.0, influx: 5},
      {GUID: 120033, Amount: 0.000952381, influx: 3},
      {GUID: 1010257, Amount: 0.000476191, influx: 0},
      {GUID: 120043, Amount: 0.000833333, influx: 2},
      {GUID: 120035, Amount: 0.00047619, influx: 4},
      {GUID: 120032, Amount: 0.000196079, influx: 2},
      {GUID: 120037, Amount: 0.000444444, influx: 2},
      {GUID: 1010214, Amount: 0.000444444, influx: 0},
      {GUID: 1010259, Amount: 0.000185185, influx: 0},
      {GUID: 1010206, Amount: 0.000416667, influx: 2},
    ]
  },
  {
    GUID: 112091,
    tierId: 8, // Explorers
    Inputs: [
      {GUID: 114889/**/,  Amount: 0,   influx: 4},
      {GUID: 114751/**/,  Amount: 0,   influx: 0},
      {GUID: 112705,  Amount: 0.0002,  influx: 3},
      {GUID: 112702,  Amount: 0.0001,  influx: 3},
      {GUID: 112701,  Amount: 0.00015, influx: 0},
      {GUID: 1010216, Amount: 0.00025, influx: 0},
    ]
  },
  {
    GUID: 112652,
    tierId: 9, // Technicians
    Inputs: [
      {GUID: 114889/**/,  Amount: 0,  influx: 4},
      {GUID: 114751/**/,  Amount: 0,  influx: 0},
      {GUID: 112705,  Amount: 0.0004, influx: 3},
      {GUID: 112702,  Amount: 0.0002, influx: 3},
      {GUID: 112701,  Amount: 0.0003, influx: 0},
      {GUID: 1010216, Amount: 0.0005, influx: 0},
      {GUID: 112684,  Amount: 0,      influx: 3},
      {GUID: 1010217, Amount: 0.0002, influx: 3},
      {GUID: 112703,  Amount: 0.0003, influx: 4},
      {GUID: 112700,  Amount: 0.0004, influx: 0},
      {GUID: 120032,  Amount: 0.0004, influx: 0},
    ]
  },
  {
    GUID: 114436,
    tierId: 10, // Shepherd
    Inputs: [
      {GUID: 114371,  Amount: 0.0005, influx: 3},
      {GUID: 114401,  Amount: 0.00025, influx: 2},
      {GUID: 114359,  Amount: 0.00035, influx: 2},
      {GUID: 114390,  Amount: 0.0002, influx: 0},
    ]
  },
  {
    GUID: 114437,
    tierId: 11, // Elder
    Inputs: [
      {GUID: 114371,  Amount: 0.0010, influx: 3},
      {GUID: 114401,  Amount: 0.0005, influx: 2},
      {GUID: 114359,  Amount: 0.0007, influx: 2},
      {GUID: 114390,  Amount: 0.0004, influx: 0},
      {GUID: 118724,  Amount: 0.0004, influx: 2},
      {GUID: 114404,  Amount: 0.00035, influx: 0},
      {GUID: 114410,  Amount: 0.00037, influx: 3},
      {GUID: 114414,  Amount: 0.00015, influx: 0},
      {GUID: 117698,  Amount: 0.00018, influx: 2},
      {GUID: 120030,  Amount: 0.00012, influx: 0},
      {GUID: 117699,  Amount: 0.0003, influx: 3},
    ]
  },
  {
    GUID: 114445,
    tierId: 12, // Scholars
    Inputs: [
      {GUID: 1010353, Amount: 0.0, influx: 12},     // University
      {GUID: 1010217, Amount: 0.001, influx: 19},   // Canned Food
      {GUID: 114428,  Amount: 0.002, influx: 0},    // Leather Boots
      {GUID: 1010257, Amount: 0.0008, influx: 0},   // Rum
      {GUID: 114430,  Amount: 0.00275, influx: 23}, // Tailored Suits
      {GUID: 120037,  Amount: 0.0008, influx: 0},   // Bowler Hats
      {GUID: 1010354, Amount: 0.0, influx: 12},     // Electricity
      {GUID: 114390,  Amount: 0.00175, influx: 0},  // Hibiscus Tea
      {GUID: 114410,  Amount: 0.0015, influx: 22},  // Seafood Stew
      {GUID: 114404,  Amount: 0.00125, influx: 0},  // Tapestries
      {GUID: 114431,  Amount: 0.0015, influx: 20},  // Telephones
      {GUID: 114414,  Amount: 0.00075, influx: 0},  // Clay Pipes
      /*todo: which GUID is correct? I think, it's the first one*/
      {GUID: 114425-118736,  Amount: 0.0, influx: 12},     // Radio Tower
      {GUID: 1010248, Amount: 0.0007, influx: 0},   // Gramophones
    ]
  },

]

export const producersNeededPerTier = needsOfProducts.map(n => ({
    GUID: n.GUID,
    producerGUIDs: n.Inputs.map(
      i => producers.filter(p => p.OutputProduct === i.GUID)?.map(x=>x.GUID)
    ).flat()
  })
)

export default needsOfProducts
