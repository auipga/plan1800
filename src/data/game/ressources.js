export default [
  {
    id: "Timber",
    tier: 1,
    requirement: 0,
    buildingName: "Sägewerk",
    resourceName: "Bretter",
    productionTime: 15,
    needs: ["Wood"],
  },
  {
    id: "Bricks",
    tier: 2,
    requirement: 1,
    buildingName: "Bricks Factory",
    resourceName: "Ziegel",
    productionTime: 60,
    needs: ["Clay"],
  },
]