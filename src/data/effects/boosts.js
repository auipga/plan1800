export default [
  {
    GUID: 'boost_by_electricity',
    key: 'electricity',
    icon: 'plug',
    provider: [
      // todo: wenn producerSum < 1, dann producer.change( ohne areaId, delta: 1) oder producer.setNumber?
      // {worldId: 1, GUID: 100780, requireAtLeastOne: true},
      // {worldId: 3, GUID: 100780, requireAtLeastOne: true},
    ],
    Productivity: 100,
  },
  {
    GUID: 'boost_by_palace',
    key: 'palace',
    icon: 'place-of-worship', // landmark  gopuram  university  monument  archway  hotel
    provider: [],
    // Productivity: x,
  },
  {
    GUID: 'boost_by_silo',
    key: 'silo',
    icon: 'database',
    provider: [
      {worldId: 1, GUID: 269957},
      {worldId: 2, GUID: 269958},
      {worldId: 3, GUID: 269957},
      {worldId: 5, GUID: "269957_4"},
    ],
    Productivity: 100,
    Maintenance: -50,
    AdditionalOutput: [
      {Product: 'OutputProduct', Cycle: 3, Amount: 1},
    ],
  },
  {
    GUID: 'boost_by_tractor',
    key: 'tractor',
    icon: 'tractor',
    provider: [
      {worldId: 1, GUID: 269839},
      {worldId: 2, GUID: 269849},
      {worldId: 3, GUID: 269839},
      {worldId: 5, GUID: "269839_4"},
    ],
    Productivity: 200,
    Maintenance: -50,
    AdditionalOutput: [
      {Product: 'OutputProduct', Cycle: 3, Amount: 1},
    ],
  },
  {
    GUID: 'boost_by_water',
    key: 'water',
    icon: 'faucet',
    provider: [
      // {worldId: 5, GUID: 114544, requireAtLeastOne: true}, todo
    ],
    Productivity: 50,
  },
];
