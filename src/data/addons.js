const dlcs = [
  {
    id: 1,
    fileName: '../Icon_anarchist.png',
    text: 'anarchist',
    seasonPass: false,
    available: true,
  },
  {
    id: 2,
    fileName: 'Icon_dlc_sunken_treasure.png',
    text: 'sunken-treasures',
    seasonPass: 1,
    available: true,
  },
  {
    id: 3,
    fileName: 'Icon_dlc_botanica.png',
    text: 'botanica',
    seasonPass: 1,
    available: true,
  },
  {
    id: 4,
    fileName: 'Icon_dlc_passage.png',
    text: 'the-passage',
    seasonPass: 1,
    available: true,
  },
  {
    id: 5,
    fileName: '',
    text: 'land-of-lions',
    seasonPass: 2,
    available: false,
  },
  {
    id: 6,
    fileName: '',
    text: 'seat-of-power',
    seasonPass: 2,
    available: false,
  },
  {
    id: 7,
    fileName: '',
    text: 'bright-harvest',
    seasonPass: 2,
    available: false,
  },
]

const seasonPasses = [
  {
    id: 1,
    available: true,
  },
  {
    id: 2,
    available: false,
  },
]

const addons = {dlcs, seasonPasses}

export default addons