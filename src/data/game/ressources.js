export default [
  {
    id: 1,
    key: "Timber",
    tierIDs: [1,2,3,4,5,6,7],
    tierId: 1,
    requirement: 0,
    buildingName: "Sägewerk",
    resourceName: "Bretter",
    productionTime: 15,
    needs: ["Wood"],
  },
  {
    id: 2,
    key: "Bricks",
    tierIDs: [2,3,4,5,7],
    tierId: 2,
    requirement: 1,
    buildingName: "Bricks Factory",
    resourceName: "Ziegel",
    productionTime: 60,
    needs: ["Clay"],
  },
]