export default [
  /*
  "-11": "End Spiel",
  "-10": "Spätes Spiel",
  "-9": "Mittleres-Spätes Spiel",
  "-8": "Mittleres Spiel",
  "-7": "Frühes-Mittleres Spiel",
  "-6": "Frühes Spiel",
  */
  // islands: [large, medium, small, continental]
  /*
    islands: {
      large:       {number: 3},
      medium:      {number: 3},
      small:       {number: 8},
      continental: {number: 1},
    },
  */
  {
    id: 1, // oldWorld
    types: {
      Archipel: [8,6,7,0],
      Ecken:    [8,6,8,0],
    },
    perType: [
      {islands: [8,6,7,0], type: 'Archipel'},
      {islands: [8,6,8,0], type: 'Ecken'},
    ],
  },
  {
    id: 2, // newWorld
    perType: [
      {islands: [5,5,4,0], type: 'always'},
    ]
  },
  {
    id: 3, // capTrelawny
    perType: [
      {islands: [3,3,8,1], type: 'Ecken'},
    ],
    // generation: {
    //   large: {number: 3},
    //   medium: {number: 3},
    //   small: {number: 8},
    //   crownfalls: null,
    // }
  },
  {
    id: 4, // Arctic
    perType: [
      {islands: [0,4,4,0], type: 'all'},
    ],
  },
]
