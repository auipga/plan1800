export default [
  {
    name: 'wiesl-rekord',
    settings: {
      'seed': 975,
      'DLCs': [ // alle
        'The Anarchist',
        'Sunken Treasures',
        'Botanica',
        'The Passage',
      ],
      'NPC': [
        'Eli Bleakworth',
      ],
      'KI': [
        'Prinzessin Qing',  // div. Items für Tourismus-Engine
        'Dr. Hugo Mercier', // Item 'Proklamation der Ritterschaft' und andere
        'Artur Gasparov',   // Item 'Elise 'Die Nase' Bouquet'
      ],
      'Startweltgroesse'   : 'Groß',
      'Inselgroesse'       : 'Mehrheitlich Groß',
      'Inselschwierigkeit' : 'Normal',
      'Fruchtbarkeiten'    : 'Reichlich',
      'Ressourcen'         : 'Spärlich',
      'Art der Karte'      : 'Ecken',
    },
    result: {
      world1: {
        islands: [
          {slot: 1, island: 'AW_large_3', rotation: 90, hasRiver: undefined},
          {slot: 2, island: 'AW_large_7', rotation: -90, hasRiver: undefined},
          {slot: 3, island: 'AW_medium_4', rotation: 90, hasRiver: undefined},

          {slot: 0, island: 'AW_large_5', rotation: 180, hasRiver: undefined}, // ziemlich rechts
        ]
      }
    }
  }
]