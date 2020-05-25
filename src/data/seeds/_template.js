export default [
  {
    name: '',
    settings: {
      'seed': 0,
      'DLCs': [
        // 'The Anarchist',
        // 'Sunken Treasures',
        // 'Botanica',
        // 'The Passage',
      ],
      'NPC': [
        // 'Eli Bleakworth',
      ],
      'KI': [
        // 'Prinzessin Qing',  // div. Items für Tourismus-Engine
        // 'Dr. Hugo Mercier', // Item 'Proklamation der Ritterschaft' und andere
        // 'Artur Gasparov',   // Item 'Elise 'Die Nase' Bouquet'
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
          // hasRiver: nur bei large und medium
          {slot: 0, island: '', rotation: 0, hasRiver: false},
          
          // Beispiel:
          {
            slot: 1,
            island: 'AW_large_7',
            rotation: -90,
            hasRiver: true,
          },
          {
            slot: 2,
            island: 'AW_small_3',
            rotation: 180,
            hasRiver: undefined,
          },
        ]
      }
    }
  }
]