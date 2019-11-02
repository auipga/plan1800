export default [
  {
    key: "Wood",
    tierId: 1,
    requirement: 0,
    productionTime: 15,
    type: "Rohmaterial",
    provides: "Wood",
    needs: [],
  },
  {
    key: "Timber",
    tierId: 1,
    requirement: 0,
    productionTime: 15,
    type: "Baumaterial",
    provides: "Timber",
    needs: ["Wood"],
  },
  {
    key: "Wood_2",
    tierId: 6,
    requirement: 0,
    productionTime: 15,
    type: "Rohmaterial",
    provides: "Wood",
    needs: [],
  },
  {
    key: "Timber_2",
    tierId: 6,
    requirement: 0,
    productionTime: 15,
    type: "Baumaterial",
    provides: "Timber",
    needs: ["Wood"],
  },
  {
    key: "Fish",
    tierId: 1,
    requirement: 50,
    productionTime: 30,
    type: "Konsumgüter",
    provides: "Fish",
    needs: [],
  },
  {
    key: "Potato",
    tierId: 1,
    requirement: 100,
    productionTime: 30,
    type: "Landwirtschaftliche Produkte",
    provides: "Potato",
    needs: ["fertility"],
  },
  {
    key: "Schnapps",
    tierId: 1,
    requirement: 100,
    productionTime: 30,
    type: "Konsumgüter",
    provides: "Schnapps",
    needs: ["Potato"],
  },
  {
    key: "Wool",
    tierId: 1,
    requirement: 150,
    productionTime: 30,
    type: "Landwirtschaftliche Produkte",
    provides: "Wool",
    needs: [],
  },
  {
    key: "Work_clothes",
    tierId: 1,
    requirement: 150,
    productionTime: 30,
    type: "Konsumgüter",
    provides: "Work_clothes",
    needs: ["Wool"],
  },
  {
    key: "Clay",
    tierId: 2,
    requirement: 1,
    productionTime: 30,
    type: "Rohmaterial",
    provides: "Clay",
    needs: [],
    max: 4
  },
  {
    key: "Bricks",
    tierId: 2,
    requirement: 1,
    productionTime: 60,
    type: "Baumaterial",
    provides: "Bricks",
    needs: ["Clay"],
  },
  {
    key: "Pigs",
    tierId: 2,
    requirement: 1,
    productionTime: 60,
    type: "Landwirtschaftliche Produkte",
    provides: "Pigs",
    needs: [],
  },
  {
    key: "Sausages",
    tierId: 2,
    requirement: 1,
    productionTime: 60,
    type: "Konsumgüter",
    provides: "Sausages",
    needs: ["Pigs"],
  },
  {
    key: "Grain",
    tierId: 2,
    requirement: 150,
    productionTime: 60,
    type: "Landwirtschaftliche Produkte",
    provides: "Grain",
    needs: ["fertility"],
  },
  {
    key: "Sails",
    tierId: 2,
    requirement: 150,
    productionTime: 30,
    type: "Baumaterial",
    provides: "Sails",
    needs: ["Wool"],
  },
  {
    key: "Flour",
    tierId: 2,
    requirement: 150,
    productionTime: 30,
    type: "Zwischenprodukte",
    provides: "Flour",
    needs: ["Grain"],
  },
  {
    key: "Bread",
    tierId: 2,
    requirement: 150,
    productionTime: 60,
    type: "Konsumgüter",
    provides: "Bread",
    needs: ["Flour"],
  },
  {
    key: "Iron",
    tierId: 2,
    requirement: 300,
    productionTime: 15,
    type: "Rohmaterial",
    provides: "Iron",
    needs: [],
    max: 3 //todo dynamic
  },
  {
    key: "Charcoal_kiln",
    tierId: 2,
    requirement: 300,
    productionTime: 30,
    type: "Rohmaterial",
    provides: "Coal",
    needs: [],
  },
  {
    key: "Furnace",
    tierId: 2,
    requirement: 300,
    productionTime: 30,
    type: "Zwischenprodukte",
    provides: "Furnace",
    needs: ["Iron", "Coal"],
  },
  {
    key: "Steel_beams",
    tierId: 2,
    requirement: 300,
    productionTime: 45,
    type: "Baumaterial",
    provides: "Steel_beams",
    needs: ["Furnace"],
  },
  {
    key: "Weapons",
    tierId: 2,
    requirement: 300,
    productionTime: 90,
    type: "Baumaterial",
    provides: "Weapons",
    needs: ["Furnace"],
  },
  {
    key: "Tallow",
    tierId: 2,
    requirement: 300,
    productionTime: 60,
    type: "Zwischenprodukte",
    provides: "Tallow",
    needs: ["Pigs"],
  },
  {
    key: "Soap",
    tierId: 2,
    requirement: 300,
    productionTime: 30,
    type: "Konsumgüter",
    provides: "Soap",
    needs: ["Tallow"],
  },
  {
    key: "Hops",
    tierId: 2,
    requirement: 500,
    productionTime: 90,
    type: "Landwirtschaftliche Produkte",
    provides: "Hops",
    needs: ["fertility"],
  },
  {
    key: "Malt",
    tierId: 2,
    requirement: 500,
    productionTime: 30,
    type: "Zwischenprodukte",
    provides: "Malt",
    needs: ["Grain"],
  },
  {
    key: "Beer",
    tierId: 2,
    requirement: 500,
    productionTime: 60,
    type: "Konsumgüter",
    provides: "Beer",
    needs: ["Malt", "Hops"],
  },

  {
    key: "Coal",
    tierId: 3,
    requirement: 250,
    productionTime: 15,
    type: "Rohmaterial",
    provides: "Coal",
    needs: [],
  },



  {
    key: "Plantains",
    tierId: 6,
    requirement: 50,
    productionTime: 30,
    type: "Landwirtschaftliche Produkte",
    provides: "Plantains",
    needs: ["fertility"],
  },
  {
    key: "Fish_Oil",
    tierId: 6,
    requirement: 50,
    productionTime: 30,
    type: "Landwirtschaftliche Produkte",
    provides: "Fish_Oil",
    needs: ["harbour"],
  },
  {
    key: "Fried_plantains",
    tierId: 6,
    requirement: 50,
    productionTime: 30,
    type: "Konsumgüter",
    provides: "Fried_plantains",
    needs: ["Plantains", "Fish_Oil"],
  },

  {
    key: "Sugar_cane",
    tierId: 6,
    requirement: 100,
    productionTime: 30,
    type: "Landwirtschaftliche Produkte",
    provides: "Sugar_cane",
    needs: ["fertility"],
  },
  {
    key: "Rum",
    tierId: 6,
    requirement: 100,
    productionTime: 30,
    type: "Konsumgüter",
    provides: "Rum",
    needs: ["Wood", "Sugar_cane"],
  },
  {
    key: "Alpaca_wool",
    tierId: 6,
    requirement: 200,
    productionTime: 30,
    type: "Landwirtschaftliche Produkte",
    provides: "Alpaca_wool",
    needs: [],
  },
  {
    key: "Ponchos",
    tierId: 6,
    requirement: 200,
    productionTime: 30,
    type: "Konsumgüter",
    provides: "Ponchos",
    needs: ["Alpaca_wool"],
  },
]
