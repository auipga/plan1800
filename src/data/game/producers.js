export default [
  {
    key: "Wood",
    tierId: 1,
    requirement: 0,
    productionTime: 15,
    type: "Rohmaterial",
    needs: [],
  },
  {
    key: "Timber",
    tierId: 1,
    requirement: 0,
    productionTime: 15,
    type: "Baumaterial",
    needs: ["Wood"],
  },
  // {
  //   key: "Wood",
  //   tierId: 6,
  //   requirement: 0,
  //   productionTime: 15,
  //   type: "Rohmaterial",
  //   needs: [],
  // },
  // {
  //   key: "Timber",
  //   tierId: 6,
  //   requirement: 0,
  //   productionTime: 15,
  //   type: "Baumaterial",
  //   needs: ["Wood"],
  // },
  {
    key: "Fish",
    tierId: 1,
    requirement: 50,
    productionTime: 15,
    type: "Konsumgüter",
    needs: [],
  },
  {
    key: "Potato",
    tierId: 1,
    requirement: 100,
    productionTime: 30,
    type: "Landwirtschaftliche Produkte",
    needs: ["fertility"],
  },
  {
    key: "Schnapps",
    tierId: 1,
    requirement: 100,
    productionTime: 30,
    type: "Konsumgüter",
    needs: ["Potato"],
  },
  {
    key: "Wool",
    tierId: 1,
    requirement: 150,
    productionTime: 30,
    type: "Landwirtschaftliche Produkte",
    needs: [],
  },
  {
    key: "Work_clothes",
    tierId: 1,
    requirement: 150,
    productionTime: 30,
    type: "Konsumgüter",
    needs: ["Wool"],
  },
  {
    key: "Clay",
    tierId: 2,
    requirement: 1,
    productionTime: 30,
    type: "Rohmaterial",
    needs: [],
    max: 4
  },
  {
    key: "Bricks",
    tierId: 2,
    requirement: 1,
    productionTime: 60,
    type: "Baumaterial",
    needs: ["Clay"],
  },
  {
    key: "Pigs",
    tierId: 2,
    requirement: 1,
    productionTime: 60,
    type: "Landwirtschaftliche Produkte",
    needs: [],
  },
  {
    key: "Sausages",
    tierId: 2,
    requirement: 1,
    productionTime: 60,
    type: "Konsumgüter",
    needs: ["Pigs"],
  },
  {
    key: "Grain",
    tierId: 2,
    requirement: 150,
    productionTime: 60,
    type: "Landwirtschaftliche Produkte",
    needs: ["fertility"],
  },
  {
    key: "Sails",
    tierId: 2,
    requirement: 150,
    productionTime: 30,
    type: "Baumaterial",
    needs: ["Wool"],
  },
  {
    key: "Flour",
    tierId: 2,
    requirement: 150,
    productionTime: 30,
    type: "Zwischenprodukte",
    needs: ["Grain"],
  },
  {
    key: "Bread",
    tierId: 2,
    requirement: 150,
    productionTime: 60,
    type: "Konsumgüter",
    needs: ["Flour"],
  },
  {
    key: "Iron",
    tierId: 2,
    requirement: 300,
    productionTime: 15,
    type: "Rohmaterial",
    needs: [],
    max: 3 //todo dynamic
  },
  {
    key: "Charcoal_kiln",
    tierId: 2,
    requirement: 300,
    productionTime: 30,
    type: "Rohmaterial",
    needs: [],
  },
  {
    key: "Furnace",
    tierId: 2,
    requirement: 300,
    productionTime: 30,
    type: "Zwischenprodukte",
    needs: ["Iron", "Charcoal_kiln"],
  },
  {
    key: "Steel_beams",
    tierId: 2,
    requirement: 300,
    productionTime: 45,
    type: "Baumaterial",
    needs: ["Furnace"],
  },
  {
    key: "Weapons",
    tierId: 2,
    requirement: 300,
    productionTime: 90,
    type: "Baumaterial",
    needs: ["Furnace"],
  },
  {
    key: "Tallow",
    tierId: 2,
    requirement: 300,
    productionTime: 60,
    type: "Zwischenprodukte",
    needs: ["Pigs"],
  },
  {
    key: "Soap",
    tierId: 2,
    requirement: 300,
    productionTime: 30,
    type: "Konsumgüter",
    needs: ["Tallow"],
  },
  {
    key: "Hops",
    tierId: 2,
    requirement: 500,
    productionTime: 90,
    type: "Landwirtschaftliche Produkte",
    needs: ["fertility"],
  },
  {
    key: "Malt",
    tierId: 2,
    requirement: 500,
    productionTime: 30,
    type: "Zwischenprodukte",
    needs: ["Grain"],
  },
  {
    key: "Beer",
    tierId: 2,
    requirement: 500,
    productionTime: 60,
    type: "Konsumgüter",
    needs: ["Malt", "Hops"],
  },



  {
    key: "Plantains",
    tierId: 6,
    requirement: 50,
    productionTime: 30,
    type: "Landwirtschaftliche Produkte",
    needs: ["fertility"],
  },
  {
    key: "Fish_Oil",
    tierId: 6,
    requirement: 50,
    productionTime: 30,
    type: "Landwirtschaftliche Produkte",
    needs: ["harbour"],
  },
  {
    key: "Fried_plantains",
    tierId: 6,
    requirement: 50,
    productionTime: 30,
    type: "Konsumgüter",
    needs: ["Plantains", "Fish_Oil"],
  },

  {
    key: "Sugar_cane",
    tierId: 6,
    requirement: 100,
    productionTime: 30,
    type: "Landwirtschaftliche Produkte",
    needs: ["fertility"],
  },
  {
    key: "Rum",
    tierId: 6,
    requirement: 100,
    productionTime: 30,
    type: "Konsumgüter",
    needs: ["Wood", "Sugar_cane"],
  },
  {
    key: "Alpaca_wool",
    tierId: 6,
    requirement: 200,
    productionTime: 30,
    type: "Landwirtschaftliche Produkte",
    needs: ["harbour"],
  },
  {
    key: "Ponchos",
    tierId: 6,
    requirement: 200,
    productionTime: 30,
    type: "Konsumgüter",
    needs: ["Alpaca_wool"],
  },
]