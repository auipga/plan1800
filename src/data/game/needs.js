export default [
  /**
   * Farmers
   */
  {
    key: "Marketplace",
    tierIDs: [1, 2],
    requirement: 1,
    consumption: [1/1e10, 1/1e10],
    influx: [5, 5],
    income: [0, 0],
    happiness: [0, 0],
  },
  {
    key: "Fish",
    tierIDs: [1, 2],
    requirement: 50,
    consumption: [2/800, 2/800],// produces 2t/m and satisfies 800 people
    influx: [3, 3],
    income: [1, 2],
    happiness: [0, 0],
  },
  {
    key: "Schnapps",
    tierIDs: [1, 2],
    requirement: 100,
    consumption: [2/600, 2/600],
    influx: [0, 0],
    income: [3, 7],
    happiness: [8, 4],
  },
  {
    key: "Work_clothes",
    tierIDs: [1, 2],
    requirement: 150,
    consumption: [2/650, 2/650],
    influx: [2, 2],
    income: [3, 7],
    happiness: [0, 0],
  },
  {
    key: "Pub",
    tierIDs: [1, 2],
    requirement: 150,
    consumption: [1/1e10, 1/1e10],
    influx: [0, 0],
    income: [1, 3],
    happiness: [12, 6],
  },

  /**
   * Workers
   */
  {
    key: "Sausages",
    tierIDs: [2, 3],
    requirement: 1,
    consumption: [1/1000, 1/750],
    influx: [3, 6],
    income: [5, 15],
    happiness: [0, 0],
  },
  {
    key: "Bread",
    tierIDs: [2, 3],
    requirement: 150,
    consumption: [1/1100, 1/825],
    influx: [3, 6],
    income: [5, 15],
    happiness: [0, 0],
  },
  {
    key: "Church",
    tierIDs: [2, 3],
    requirement: 150,
    consumption: [1/1e10, 1/1e10],
    influx: [0, 0],
    income: [0, 0],
    happiness: [7, 7],
  },
  {
    key: "Soap",
    tierIDs: [2, 3],
    requirement: 300,
    consumption: [2/4800, 2/3600],
    influx: [2, 4],
    income: [5, 15],
    happiness: [0, 0],
  },
  {
    key: "Beer",
    tierIDs: [2, 3],
    requirement: 500,
    consumption: [2/2600, 2/1950],
    influx: [0, 0],
    income: [12, 37],
    happiness: [3, 3],
  },
  {
    key: "School",
    tierIDs: [2, 3],
    requirement: 750,
    consumption: [1/1e10, 1/1e10],
    influx: [2, 4],
    income: [0, 0],
    happiness: [0, 0],
  },

  /**
   * Artisans
   */
  {
    key: "Canned_food",
    tierIDs: [3, 4],
    requirement: 1,
    consumption: [6/11700, 6/7800],
    influx: [4, 12],
    income: [7, 20],
    happiness: [0, 0],
  },
  {
    key: "Sewing_machines",
    tierIDs: [3, 4],
    requirement: 250,
    consumption: [2/4200, 2/2800],
    influx: [2, 6],
    income: [15, 40],
    happiness: [0, 0],
  },
  {
    key: "Variety_theatre",
    tierIDs: [3, 4],
    requirement: 250,
    consumption: [1/1e10, 1/1e10],
    influx: [0, 0],
    income: [7, 10],
    happiness: [6, 6],
  },
  {
    key: "Rum",
    tierIDs: [3, 4],
    requirement: 500,
    consumption: [2/2100, 2/1400],
    influx: [0, 0],
    income: [18, 50],
    happiness: [4, 4],
  },
  {
    key: "Fur_coats",
    tierIDs: [3, 4],
    requirement: 900, //1000,
    consumption: [1/2250, 1/1500],
    influx: [2, 6],
    income: [22, 60],
    happiness: [0, 0],
  },
  {
    key: "University",
    tierIDs: [3, 4],
    requirement: 1500,
    consumption: [1/1e10, 1/1e10],
    influx: [2, 6],
    income: [0, 0],
    happiness: [0, 0],
  },

  /**
   * Engineers
   */
  {
    key: "Glasses",
    tierIDs: [4, 5],
    requirement: 1,
    consumption: [3/9000, 3/5625],
    influx: [4, 16],
    income: [25, 62],
    happiness: [0, 0],
  },
  {
    key: "Penny_farthings",
    tierIDs: [4, 5],
    requirement: 500,
    consumption: [1/6400, 1/4000],
    influx: [0, 0],
    income: [35, 87],
    happiness: [5, 4],
  },
  {
    key: "Coffee",
    tierIDs: [4, 5],
    requirement: 1000,
    consumption: [1/1700, 1/1062.5],
    influx: [2, 8],
    income: [28, 50],
    happiness: [0, 0],
  },
  {
    key: "Pocket_watches",
    tierIDs: [4, 5],
    requirement: 1000,
    consumption: [3/20400, 3/12750],
    influx: [0, 0],
    income: [45, 112],
    happiness: [3, 3],
  },
  {
    key: "Electricity",
    tierIDs: [4, 5],
    requirement: 1750,
    consumption: [1/1e10, 1/1e10],
    influx: [0, 0],
    income: [0, 0],
    happiness: [0, 0],
  },
  {
    key: "Light_bulbs",
    tierIDs: [4, 5],
    requirement: 1750,
    consumption: [4/12800, 4/8000],
    influx: [2, 8],
    income: [35, 87],
    happiness: [0, 0],
  },
  {
    key: "Bank",
    tierIDs: [4, 5],
    requirement: 3000,
    consumption: [1/1e10, 1/1e10],
    influx: [0, 0],
    income: [50, 125],
    happiness: [2, 2],
  },

  /**
   * Investors
   */
  {
    key: "Champagne",
    tierIDs: [5],
    requirement: 1,
    consumption: [1/4250],
    influx: [2],
    income: [31],
    happiness: [0],
  },
  {
    key: "Cigars",
    tierIDs: [5],
    requirement: 750,
    consumption: [2/9000],
    influx: [2],
    income: [31],
    happiness: [0],
  },
  {
    key: "Chocolate",
    tierIDs: [5],
    requirement: 750,
    consumption: [1/1875],
    influx: [2],
    income: [31],
    happiness: [0],
  },
  {
    key: "Members_club",
    tierIDs: [5],
    requirement: 750,
    consumption: [1/1e10],
    influx: [0],
    income: [31],
    happiness: [5],
  },
  {
    key: "Jewellery",
    tierIDs: [5],
    requirement: 1750,
    consumption: [2/9500],
    influx: [0],
    income: [156],
    happiness: [2],
  },
  {
    key: "Gramophones",
    tierIDs: [5],
    requirement: 3000,
    consumption: [4/3800],
    influx: [0],
    income: [93],
    happiness: [4],
  },
  {
    key: "Steam_carriages",
    tierIDs: [5],
    requirement: 5000,
    consumption: [2/30000],
    influx: [4],
    income: [187],
    happiness: [0],
  },


  /**
   * Jornaleros
   */
  {
    key: "Marketplace",
    tierIDs: [6, 7],
    requirement: 1,
    consumption: [1/1e10, 1/1e10],
    influx: [5, 5],
    income: [0, 0],
    happiness: [0, 0],
  },
  {
    key: "Fried_plantains",
    tierIDs: [6, 7],
    requirement: 50,
    consumption: [2/700, 2/700],
    influx: [3, 3],
    income: [3, 6],
    happiness: [0, 0],
  },
  {
    key: "Rum",
    tierIDs: [6, 7],
    requirement: 100,
    consumption: [2/2800, 2/2800],
    influx: [0, 0],
    income: [3, 6],
    happiness: [6, 3],
  },
  {
    key: "Ponchos",
    tierIDs: [6, 7],
    requirement: 200,
    consumption: [2/800, 2/800],
    influx: [2, 2],
    income: [3, 6],
    happiness: [0, 0],
  },
  {
    key: "Chapel",
    tierIDs: [6, 7],
    requirement: 300,
    consumption: [1/1e10, 1/1e10],
    influx: [0, 0],
    income: [0, 0],
    happiness: [14, 7],
  },

  /**
   * Obreros
   */
  {
    key: "Tortillas",
    tierIDs: [7],
    requirement: 1,
    consumption: [1/1400],
    influx: [4],
    income: [2],
    happiness: [0],
  },
  {
    key: "Coffee",
    tierIDs: [7],
    requirement: 300,
    consumption: [1/3400],
    influx: [2],
    income: [2],
    happiness: [0],
  },
  {
    key: "Boxing_arena",
    tierIDs: [7],
    requirement: 300,
    consumption: [1/1e10],
    influx: [0],
    income: [2],
    happiness: [4],
  },
  {
    key: "Bowler_hats",
    tierIDs: [7],
    requirement: 600,
    consumption: [1/1500],
    influx: [2],
    income: [2],
    happiness: [0],
  },
  {
    key: "Beer",
    tierIDs: [7],
    requirement: 600,
    consumption: [2/1500],
    influx: [0],
    income: [7],
    happiness: [4],
  },
  {
    key: "Cigars",
    tierIDs: [7],
    requirement: 1000,
    consumption: [2/7200],
    influx: [0],
    income: [8],
    happiness: [2],
  },
  {
    key: "Sewing_machines",
    tierIDs: [7],
    requirement: 1000,
    consumption: [2/3200],
    influx: [2],
    income: [16],
    happiness: [0],
  },
]
