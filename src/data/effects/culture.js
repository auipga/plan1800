export const festivals = [
  {
    GUID: 142453,// zumindest der Text
    filename: 'Arts_Festival.png',
    name: "Kunstfest",//"Arts Festival",
    effectsToIsland: [
      {
        Attractiveness: +400,
      },
      {
        target: "public services",
        Maintenance: -50,
        Attractiveness: +5,
      },
      {
        target: "Zoos and Museums",
        Maintenance: -100,
        Attractiveness: +5,
      },
    ]
  },
  {
    GUID: 141896,
    filename: 'Beer_Festival.png',
    name: "Bierfest",//"Beer Festival",
    effectsToIsland: [
      {
        Attractiveness: +250,
        Happiness: +25,
      },
    ],
    effectsToResidences: [ // like TownHall, ArticLodge
      {
        targetGUIDs: [190762],
        attribute: 'GoodConsumptionUpgrade',
        GoodConsumptionUpgrade: [
          {ProvidedNeed: 1010214, AmountInPercent: -100}, //schnapps
          {ProvidedNeed: 1010216, AmountInPercent: -100}, //beer
          {ProvidedNeed: 1010257, AmountInPercent: -100}, //rum
          {ProvidedNeed: 120016,  AmountInPercent: -100}, //champagne
        ],
      }
    ],
    effectsToProducers: [ // like TradeUnion, HarbourMasters, ArticLodge
      {
        targetGUIDs: [192566],//Alkoholproduktionskette
        Productivity: +50,
        Workforce_Needed: -25,
      },
    ]
  },
  {
    GUID: 142456,
    filename: 'Commemoration_Day.png',
    name: "Gedenkfeiertag",// "Commemoration Day",
    effectsToIsland: [
      {
        target: "island",
        attribute: "Attractiveness",
        value: +250,
      },
      {
        target: "island",
        attribute: "Happiness",
        value: +10,
      },
    ],
    effectsToResidences: [
      {
        target: "island / residences_all",
        attribute: "workforce",
        value: +15,
      },
    ],
    effectsToProducers: [
      {
        targetGUIDs: [192436, 190783],// Kanonenproduktionskette, Schiffswerften
        Productivity: +300,
        Maintenance: -50,
      },
    ]
  },
  {
    GUID: 142451,
    filename: 'Harvest_Festival.png',
    name: "Erntedankfest",//"Harvest Festival",
    effectsToIsland: [
      {
        AttractiveNess: +250,
        Happiness: +10,
      },
    ],
    effectsToResidences: [
      {
        target: "island / all residences",
        taxes: +10,
      },
    ],
    effectsToProducers: [
      {
        targetGUIDs: [190865],
        Productivity: 50,
        Maintenance: -100,
        AdditionalOutput: [
          {Product: 1010257, Cycle: 8, Amount: 1}, //rum
          {Product:  120016, Cycle: 9, Amount: 1}, //champagne
          {Product: 1010259, Cycle: 10, Amount: 1}, //cigars
          {Product: 1010258, Cycle: 11, Amount: 1}, //chocolate
        ],
      },
    ]
  },
  {
    GUID: 20110, // 20106 ?
    filename: 'Town_Carnival.png',
    name: "Städtischer Karneval", //"Town Carnival",
    effectsToIsland: [
      {
        AttractiveNess: +250,
        Happiness: +40,
      },
      {
        target: "island / besucherkai",
        attribute: "chance of specialists",
        value: +100,
      },
    ],
    // effectsToResidences: [
    //   {
    //     targetGUIDs: [190762], //"wohngebäude? = residences_all"
    //     attribute: 'GoodConsumptionUpgrade',
    //     GoodConsumptionUpgrade: [
    //       {ProvidedNeed: 1010237, AmountInPercent: -100}, // work clothes
    //       {ProvidedNeed: 1010247, AmountInPercent: -100}, // fur coats
    //       {ProvidedNeed: 1010250, AmountInPercent: -100}, // jewellery
    //       {ProvidedNeed: 120030, AmountInPercent: -100}, // glasses
    //       {ProvidedNeed: 120043, AmountInPercent: -100}, // ponchos
    //       {ProvidedNeed: 120037, AmountInPercent: -100}, // bowler hats
    //     ],
    //   },
    // ],
  },
  {
    GUID: 111831,
    filename: 'Festival_of_Reason.png',
    name: "Das Fest der Vernunft", //"Festival of Reason",
    effectsToIsland: [
      {
        Attractiveness: +250,
        Happiness: +25,
      },
    ],
    effectsToResidences: [ // like TownHall, ArticLodge
      {
        targetGUIDs: [190762],
        attribute: 'GoodConsumptionUpgrade',
        GoodConsumptionUpgrade: [
          {ProvidedNeed: 1010214, AmountInPercent: -100}, //schnapps
          {ProvidedNeed: 1010216, AmountInPercent: -100}, //beer
          {ProvidedNeed: 1010257, AmountInPercent: -100}, //rum
          {ProvidedNeed: 120016,  AmountInPercent: -100}, //champagne
        ],
      }
    ],
    effectsToProducers: [ // like TradeUnion, HarbourMasters, ArticLodge
      {
        targetGUIDs: ['alle'],//
        Productivity: +20,
        Maintenance: -10,
      },
    ]
  },
]

// https://www.youtube.com/watch?v=hsCXSd7fP38
// Tiere, 4 relevant
export const zoo = [
  {
    GUID: 191114,
    name: "Kordilleren",//029
    //Arbeitskräfte + 10%
    //Einkommen pro Haus +10%
    effects: [

    ],
  },
  {
    GUID: 191115,
    name: "Taigawald",//
    FileName: "3dicons/animals/icon_moose_0.png",
    effectsToResidences: [
      {
        targetGUIDs: [190762],
        attribute: 'GoodConsumptionUpgrade',
        GoodConsumptionUpgrade: [
          {ProvidedNeed: 1010200, AmountInPercent: -5}, // Fisch
          {ProvidedNeed: 1010213, AmountInPercent: -5}, // Brot
          {ProvidedNeed: 1010217, AmountInPercent: -5}, // Fleischkonserven
          {ProvidedNeed: 1010238, AmountInPercent: -5}, // Wurst
          {ProvidedNeed: 1010258, AmountInPercent: -5}, // Schokolade
          {ProvidedNeed:  120033, AmountInPercent: -5}, // Gebackene Bananen
          {ProvidedNeed:  120035, AmountInPercent: -5}, // Tortillas
          {ProvidedNeed:  114471, AmountInPercent: -5}, // Wat-Küche
        ],
      },
    ],
  },
  {
    GUID: 191122,
    name: "Räuber der Meere",//
    FileName: "3dicons/animals/icon_swordfish_0.png",
    effectsToProducers: [
      {
        targetGUIDs: [190779, 1010339, 101262],
        Productivity: +5,
        Maintenance: -10,
        Workforce: -10,
      },
    ],
  },
  {
    GUID: 191116,
    name: "Ausgestorbene Arten",//
    //    +5% Attraktivität von Zoogehegen.
    effects: [

    ],
  },
  {
    GUID: 191121,
    name: "Nutztiere",//
    FileName: "3dicons/animals/icon_sheep_0.png",
    effectsToProducers: [
      {
        targetGUIDs: [190872],
        Productivity: +5,
        Maintenance: -10,
      },
    ],
  },
  {
    GUID: 191118,
    name: "Regenwald",//
    //    +5% Attraktivität für alle öffentlichen Einrichtungen.
    effects: [

    ],
  },
  {
    GUID: 191120,
    name: "Dschungel des Ostens",//
    //Hafenaktivität +100%. Jedes Mal, wenn passiv gehandelt wird, gibt es eine Chance auf 5t von
    //Kaffeebohnen, Zuckerrohr, Tabak, Baumwolle, Kakao, Perlen, Schokolade, Kaffee, Gebackene Bananen, Tortillas, Zucker.
    effects: [

    ],
  },
  {
    GUID: 191117,
    name: "Großes Korallenriff",//
    // +2 Zufriedenheit für Arbeiter-, Handwerker- und Obrero-Häuser.
    effects: [

    ],
  },
  // { angeblich? siehe https://anno.skotschir.de/index.php?title=Tiere#Gesunkene_Sch.C3.A4tze
  //   name: "Schneeflocken",//
  //   // -50% Unterhaltskosten, +10% Attraktivität für Zoogehege.
  // },

  //DLC gesunkene schätze
  {
    GUID: 193403,
    name: "Leuchtkreaturen",//
    // attraktivität +3
    //Pub, Variete, Clubhaus
    effects: [

    ],
  },
  {
    GUID: 193401,
    name: "Abgründige Tiefen",//
    //Bergungsschiff:
    // erhöhte Chance, Tiere zu finden
    effects: [

    ],
  },
  //DLC Passage
  {
    GUID: 193773,
    name: "Arktische Tundra",//alles bei kahina kaufbar
    // besucherhäfen:
    //Attraktivität +100
    //Mehr Besuche +5%
    effects: [

    ],
  },
  {
    GUID: 191119,
    name: "Polarkreis",//
    FileName: "3dicons/animals/icon_polar_bear_0.png",
    effectsToProducers: [
      {
        targetGUIDs: [1010325, 1010315, 101273, 101266, 118734],
        Productivity: +25,
        Maintenance: -25,
      },
    ],
  },
  //DLC Land der Löwen
  {
    GUID: 124197,
    name: "Wilde Seen",//
    FileName: "3dicons/animals/icon_flamingo_0.png",
    effectsToProducers: [
      {
        targetGUIDs: [193400],
        Productivity: +20,
      },
    ],
  },
];

// https://www.youtube.com/watch?v=hsCXSd7fP38
//Artefakte, 1 relevant
export const museum = [
  {
    GUID: 191130,
    name: "Adlerreich",
    effects: [

    ],
    // +1% erhöhtes Einkommen von Häusern.
    // 10% verringerte Chance auf Feuer, Krankheiten, Aufstände und Explosionen bei Häusern.
  },
  {
    GUID: 191127,
    name: "Huaca aus der neuen Welt",
    effects: [

    ],
    // Erhöht die Chance, dass ein Spezialist die Insel besucht um 5%.
    //Mehr Besucher +5%
  },
  {
    GUID: 191129,
    name: "Ursprung der Menschheit",
    FileName: "3dicons/museum/icon_museum_neanderthaler_0.png",
    effectsToProducers: [
      {
        targetGUIDs: [190779, 190865, 190872, 1010558], //Fischereien, Getreidefarmen, Tierhöfe und Jagdhütten
        Productivity: +5,
        Workforce: -5,
      },
    ],
  },
  {
    GUID: 191128,
    name: "Totenkopf",
    effects: [

    ],
    // für alle Kriegsschiffe.
    // +3% erhöhte Geschwindigkeit, -5% Unterhaltungskosten und 10% verringerter Schaden
  },
  {
    GUID: 191124,
    name: "Kulturen der Ägäis",
    effects: [

    ],
    // für Varietées und Museen.
    // +5 Attraktivität und
    // 20% reduzierte Unterhaltskosten
    // Varietées haben einen neuen Tooltip der anzeigt, welches Stück gerade aufgeführt wird.
  },
  {
    GUID: 191126,
    name: "Versunkene Städte",
    effects: [

    ],
    // Hafenaktivität +100%.
    // Jedes Mal, wenn ein passiver Handel am Kontor getätigt wird, besteht die Chance auf 5t
    // Golderz, Goldbarren oder Schmuck.
  },
  {
    GUID: 191131,
    name: "Nordische Sagen",
    effects: [

    ],
    // für alle Kriegsschiffe.
    // +5% maximale Trefferpunkte und
    // +3% erhöhter Schaden
  },
  {
    GUID: 191125,
    name: "Jura",
    effects: [

    ],
    // für alle Häuser.
    // +2% Einkommen und +2 Zufriedenheit
  },
  {
    GUID: 191123,
    name: "Bronzezeit",
    effects: [

    ],
    // für Holzfällerhütten, Jagdhütten und Steinbrüche.
    // +2 Attraktivität
  },

  //DLC gesunkene schätze
  {
    GUID: 193408,
    name: "Trelawney-Schlacht",//
    // kriegsschiffe:
    // schaden an Segelschiffen +20%
    // unerschütterlich
    effects: [

    ],
  },
  {
    GUID: 193405,
    name: "Atlantis",//
    //Bergungsschiff:
    // erhöhte Chance, Artefakte zu finden
    effects: [

    ],
  },
  //DLC Passage
  {
    GUID: 193776,
    name: "Eingefroren",//alles bei kahina kaufbar
    // alle Nahrungsmittelerzeuger und Getränkeherstellung:
    // unterhalt -20%
    effects: [

    ],
  },
  {
    GUID: 193774,
    name: "Relikte von Thule",//
    //Kulturelle Gebäude:
    //+20% attraktivität auf Items bestimmter Sets
    effects: [

    ],
  },
];

// https://www.youtube.com/watch?v=EOEFbJ5o8UM
// Pflanzen?, 6x fertility relevant
export const botanica = [
/*  {
    GUID: -1,
    name: "[TEST] alles +50%",
    effectsToProducers: [
      {
        targetGUIDs: [193856],
        Productivity: +50,
      },
    ],
  },*/
  // alle fertility auch +25% Produktivität
  {
    GUID: 193665,
    name: "Anden",
    FileName: "3dicons/plants/icon_frailejones_0.png",
    effectsToProducers: [
      {
        targetGUIDs: [1010262, 101251],// Getreide, Kaffee
        Productivity: +25,
      },
    ],
    AddedFertility: 1010571,
  },
  {
    GUID: 193662,
    name: "Subalpin",
    FileName: "3dicons/plants/icon_rocky_mountain_fir_0.png",
    effectsToProducers: [
      {
        targetGUIDs: [1010558, 1010333],// Furs x2?, Coutchouc
        Productivity: +25,
      },
    ],
    AddedFertility: 1010581,
  },
  {
    GUID: 193657,
    name: "Sumpfgebiet",
    FileName: "3dicons/plants/icon_lilies_0.png",
    effects: [

    ],
    // happiness +2
    // illness -50%
  },
  {
    GUID: 193670,
    name: "Heilend", //Kräutergarten
    FileName: "3dicons/plants/icon_dandelion_0.png",
    // Krankenhäuser:
    // einheitenbewegungsrate +15%
    // ärzte +2
    effects: [

    ],
  },
  {
    GUID: 193653,
    name: "Amazonas",
    FileName: "3dicons/plants/icon_lianas_0.png",
    effectsToProducers: [
      {
        targetGUIDs: [100655, 101263],// Grapes, Bananen
        Productivity: +25,
        Fertility: true
      },
    ],
    "AddedFertility_eu": 120013,
    "AddedFertility_sa": 120040
  },
  {
    GUID: 193655,
    name: "Sargassosee",
    FileName: "3dicons/plants/icon_great_star_coral_0.png",
    effects: [

    ],
    // Besuchenhafen:
    // Attraktivität +50
    // Mehr Besucher +10%
  },
  {
    GUID: 193660,
    name: "Heilig",
    FileName: "3dicons/plants/icon_sacred_lotus_0.png",
    effects: [

    ],
    // Alle Kontore
    // passiver Handel, Chance auf 5t von 8 Gütern
    // https://youtu.be/EOEFbJ5o8UM?t=308
  },
  {
    GUID: 193658,
    name: "Nahost",
    FileName: "3dicons/plants/icon_blue_lotus_0.png",
    effectsToProducers: [
      {
        targetGUIDs: [100654, 1010329],// Red_peppers, Sugar_cane
        Productivity: +25,
      },
    ],
    "AddedFertility_eu": 1010570,
    "AddedFertility_sa": 1010573
  },
  {
    GUID: 193672,
    name: "Verwunschen",
    FileName: "3dicons/plants/icon_jujube_0.png",
    effectsToProducers: [
      {
        targetGUIDs: [1010264, 1010330],// Hops, Tabbaco
        Productivity: +25,
      },
    ],
    "AddedFertility_eu": 1010572,
    "AddedFertility_sa": 1010577
  },
];

const culture = {festivals, zoo, museum, botanica}

export const all = [...festivals, ...zoo, ...museum, ...botanica]

export default culture