export var emptyIsland = [
  {
    world: 1,
    name: 'Alte ',
    population: {
      level: [0, 0, 0, 0, 0],
    },
    buildings: {},
    resourceWant: {}
  },
  {
    world: 2,
    key: 'newWorld',
    name: 'Neue ',
    population: {
      level: [0, 0],
    },
    buildings: {},
    resourceWant: {}
  },
  {
    world: 3,
    key: 'capTrelawny',
    name: 'Kap ',
    population: {
      level: [0, 0, 0, 0, 0],
    },
    buildings: {},
    resourceWant: {}
  },
]

export var defaultState = {
  islands: [],
  worlds: [1],
  activeWorld: 1,
  activeIslands: {},
}
