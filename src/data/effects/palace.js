/*
249976: "Ministeriumseffekt",
249978: "Richtlinien",
269125: "Umfunktionierung der Kellerräume",
269129: "Freigeisterreform",
269130: "Rathausreform",
269141: "Verbesserung der Finanzen",
269142: "Förderung der Künste",
269143: "Stadtweites Netz",
269144: "Wohlfahrt der Arbeiter",
269145: "Verlängerte Ausschankzeiten",
269172: "Umfunktionierung der Kellerräume",
269173: "Kreative Kulinarik",
269174: "Wissenschaftsmessen",
269175: "Freigeisterreform",
269176: "Rathausreform",
269178: "Wissenschaftsmessen",
269179: "Kulturaustausch",
269180: "Kulturerbe",
269181: "Naturschutz",
269182: "Privatsammlungen",
269183: "Expertenprogramm",
269189: "Privatsammlungen",
269193: "Landbesitzreform",
269194: "Fabrikinspektionen",
269195: "Qualifizierte Arbeitskräfte",
269196: "Förderung des Galvanismus",
269197: "Gewerkschaftsförderung",
269199: "Fabrikinspektionen",
269201: "Förderung des Galvanismus",
269202: "Gewerkschaftsförderung",
269207: "Küstenreformen",
269208: "Hafenbevorratung",
269209: "Brennstoffreserven",
269210: "Hafenverwaltung",
269211: "Marinelogistik",
269247: "Zusatzbelohnungen",
269251: "Attraktivität pro vollständigem Set",
269364: "Zusätzliche Sockel",
269366: "Landbesitzreform",
269373: "Ministerium für Verwaltung",
269374: "Ministerium für Verwaltung",
269385: "Ministerium für Verwaltung",
269386: "Ministerium für Verwaltung",
269399: "Qualifizierte Arbeitskräfte",
269407: "Kreative Kulinarik",
269453: "Verlängerte Ausschankzeiten",
269465: "Ministerium für Verwaltung",
269466: "Ministerium für Verwaltung",
269467: "Ministerium für Verwaltung",
269468: "Ministerium für Verwaltung",
269469: "Ministerium für Verwaltung",
269470: "Ministerium für Verwaltung",
269482: "Ministerium für Arbeit",
269483: "Ministerium für Arbeit",
269484: "Ministerium für Arbeit",
269485: "Ministerium für Arbeit",
269486: "Ministerium für Arbeit",
269487: "Ministerium für Arbeit",
269488: "Ministerium für Arbeit",
269489: "Ministerium für Arbeit",
269490: "Ministerium für Arbeit",
269491: "Ministerium für Arbeit",
269567: "Öffentliche Gebäude",
269570: "VIP-​Spezialisten",
269602: "Regionalministerium",
269652: "Ministerium für Verwaltung",
269653: "Ministerium für Verwaltung",
269654: "Ministerium für Verwaltung",
269655: "Ministerium für Verwaltung",
269656: "Ministerium für Verwaltung",
269657: "Ministerium für Verwaltung",
269658: "Ministerium für Verwaltung",
269659: "Ministerium für Verwaltung",
269660: "Ministerium für Verwaltung",
269661: "Ministerium für Verwaltung",
269662: "Ministerium für Verwaltung",
269663: "Ministerium für Verwaltung",
269664: "Ministerium für Verwaltung",
269665: "Ministerium für Verwaltung",
269666: "Ministerium für Verwaltung",
269686: "Ministerium für Arbeit",
269687: "Ministerium für Arbeit",
269688: "Ministerium für Arbeit",
269689: "Ministerium für Arbeit",
269690: "Ministerium für Arbeit",
269691: "Ministerium für Arbeit",
269692: "Ministerium für Arbeit",
269693: "Ministerium für Arbeit",
269694: "Ministerium für Arbeit",
269695: "Ministerium für Arbeit",
269696: "Ministerium für Arbeit",
269697: "Ministerium für Arbeit",
269698: "Ministerium für Arbeit",
269699: "Ministerium für Arbeit",
269700: "Ministerium für Arbeit",
269730: "Ministerium für Wohlfahrt",
*/

export default [
  {
    GUID: 249973, //; 249967 GuildhouseBuff
    _name: "Ministerium für Arbeit",
    FileName: "3dicons/palace/icon_department_industry_technology_0.png",
    effectsToProducers: [
      {
        targetGUIDs: [193856], // Alle Produktionsgebäude außer Kraftwerke
        Productivity: +10,
      },
      {
        targetGUIDs: [193856], // Alle Produktionsgebäude außer Kraftwerke
        // Productivity: +2,
        ProductivityPerPalaceLevel: +2,
        perPalaceLevel: true,
      },
    ],
    // effectsToResidences: [],
    policies: [
      {
        GUID: 269193, //EffectContainer; 269366 GuildhouseBuff
        _name: "Landbesitzreform",
        FileName: "3dicons/palace/icon_agricultural_subsidy_0.png",
        effectsToProducers: [
          {
            targetGUIDs_: [/*190011 I have no targetPools for that*/], // Alle landwirtschaftlichen Produktionsstätten
            targetGUIDs: [
              // 191471, // Alle Nutzpflanzen-Farmen der Alten Welt: [1010262, 1010264, 1010265, 100655, 100654],
              1010262, // Getreidefarm
              1010264, // Hopfenplantage
              1010265, // Kartoffelhof
              100655, // Weinberg
              100654, // Paprikafarm

              1010267, // Schäferei
              1010269, // Schweinezucht
              1010263, // Rinderfarm eu
            ],
            AdditionalOutput: [
              {Product: 'OutputProduct', Cycle: 2, Amount: 1},
            ]
          },
        ],
        effectsToProducers__long_version: [
          {
            GUID: 269191,
            targetGUIDs: [1010262], // Getreidefarm
            AdditionalOutput: [
              {Product: 1010192, Cycle: 2, Amount: 1},
            ]
          },
          {
            GUID: 269254,
            targetGUIDs: [1010264], // Hopfenplantage
            AdditionalOutput: [
              {Product: 1010194, Cycle: 2, Amount: 1},
            ]
          },
          {
            GUID: 269255,
            targetGUIDs: [1010265], // Kartoffelhof
            AdditionalOutput: [
              {Product: 1010195, Cycle: 2, Amount: 1},
            ]
          },
          {
            GUID: 269256,
            targetGUIDs: [100654], // Paprikafarm
            AdditionalOutput: [
              {Product: 1010198, Cycle: 2, Amount: 1},
            ]
          },
          {
            GUID: 269257,
            targetGUIDs: [100655], // Weinberg
            AdditionalOutput: [
              {Product: 120014, Cycle: 2, Amount: 1},
            ]
          },
          {
            GUID: 269564,
            targetGUIDs: [1010267], // Schäferei
            AdditionalOutput: [
              {Product: 1010197, Cycle: 2, Amount: 1},
            ]
          },
          {
            GUID: 269565,
            targetGUIDs: [1010269], // Schweinezucht
            AdditionalOutput: [
              {Product: 1010199, Cycle: 2, Amount: 1},
            ]
          },
          {
            GUID: 269566,
            targetGUIDs: [1010263], // Rinderfarm eu
            AdditionalOutput: [
              {Product: 1010193, Cycle: 2, Amount: 1},
            ]
          },
        ],
        // effectsToResidences: [],
      },
      {
        GUID: 269195, //oder 269397? EffectContainer; 269399 GuildhouseBuff
        _name: "Qualifizierte Arbeitskräfte",
        FileName: "3dicons/palace/icon_manufacturing_reform_0.png",
        effectsToProducers: [
          {
            targetGUIDs: [193771], // Alle Schwerindustrien
            AdditionalOutput: [
              {Product: 'OutputProduct', Cycle: 3, Amount: 1},
            ],
          },
        ],
        effectsToProducers__long_version: [
          {
            effectGUID: 269200,
            targetGUIDs: [1010296], // Stahlwerk
            AdditionalOutput: [
              {Product: 1010218, Cycle: 3, Amount: 1}, // Stahlträger
            ]
          },
          {
            effectGUID: 269275,
            targetGUIDs: [1010297], // Hochofen
            AdditionalOutput: [
              {Product: 1010219, Cycle: 3, Amount: 1}, // Stahl
            ]
          },
          {
            effectGUID: 269276,
            targetGUIDs: [1010298], // Köhlerei
            AdditionalOutput: [
              {Product: 1010226, Cycle: 3, Amount: 1}, // Kohle
            ]
          },
          {
            effectGUID: 269277,
            targetGUIDs: [1010299], // Kanonengießerei
            AdditionalOutput: [
              {Product: 1010221, Cycle: 3, Amount: 1}, // Kanonen
            ]
          },
          {
            effectGUID: 269278,
            targetGUIDs: [1010301], // Geschützfabrik
            AdditionalOutput: [
              {Product: 1010223, Cycle: 3, Amount: 1}, // Schwere Geschütze
            ]
          },
          {
            effectGUID: 269279,
            targetGUIDs: [1010302], // Motorenfabrik
            AdditionalOutput: [
              {Product: 1010224, Cycle: 3, Amount: 1}, // Dampfmaschinen
            ]
          },
          {
            effectGUID: 269280,
            targetGUIDs: [1010303], // Dampfwagenfabrik
            AdditionalOutput: [
              {Product: 1010225, Cycle: 3, Amount: 1}, // Dampfwagen
            ]
          },
          {
            effectGUID: 269281,
            targetGUIDs: [1010282], // Messinghütte
            AdditionalOutput: [
              {Product: 1010204, Cycle: 3, Amount: 1}, // Messing
            ]
          },
          {
            effectGUID: 269282,
            targetGUIDs: [101331], // Ölraffinerie
            AdditionalOutput: [
              {Product: 1010566, Cycle: 3, Amount: 1}, // Öl
            ]
          },
        ],
        // effectsToResidences: [],
      },
    ],
  },
  {
    GUID: 249971,
    _name: "Ministerium für Verwaltung",
    FileName: "3dicons/palace/icon_department_civic_affairs_0.png",
    // effectsToProducers: [],
    // effectsToResidences: [],
    policies: [
      {
        // wrong GUID, it should be 273691 or maybe 269410 but I choose this for a working translation
        GUID: 269407, //EffectContainer; 269407 TownhallBuff
        _name: "Kreative Kulinarik",
        //todo: angeschlossene
        // EffectTargets: [
        //   190781, // Rathäuser       {GUID: 100415, Name: "Rathaus"},
        //                              {GUID: 101285, Name: "Rathaus"}
        // ],

        FileName: "3dicons/palace/icon_sustainable_eating_0.png",
        // effectsToProducers: [],
        effectsToResidences: [
          {
            targetGUIDs: [190762], // Wohngebäude
            GoodConsumptionUpgrade: [
              {ProvidedNeed: 1010200, AmountInPercent: -30}, // Fische
              {ProvidedNeed: 1010238, AmountInPercent: -30}, // Wurst
              {ProvidedNeed: 1010213, AmountInPercent: -30}, // Brot
              {ProvidedNeed: 1010217, AmountInPercent: -30}, // Fleischkonserven
              {ProvidedNeed: 1010258, AmountInPercent: -30}, // Schokolade
              {ProvidedNeed: 114410,  AmountInPercent: -30}, // Meeresfrüchte-Eintopf
            ],
          }
        ],
      },
    ],
  },
  {
    GUID: 249974,
    _name: "Ministerium für Wohlfahrt",
    FileName: "3dicons/palace/icon_department_domestic_affairs_0.png",
    // effectsToProducers: [],
    // effectsToResidences: [],
    policies: [
      {
        // wrong GUID, it should be 273694 but I choose this for a working translation 269145
        GUID: 269453, //EffectContainer; 269453 TownhallBuff
        _name: "Verlängerte Ausschankzeiten",
        //todo: angeschlossene
        // EffectTargets: [
        //   193868, // Wirtshäuser:    {GUID: 1010358, Name: "Wirtshaus"}
        //   193863, // Varietétheater: {GUID: 1010361, Name: "Varieté"}
        //   193869, // Clubs:          {GUID: 1010364, Name: "Clubhaus"}
        //   118736, // Funkturm
        // ],
        FileName: "3dicons/palace/icon_common_spirits_act_0.png",
        // effectsToProducers: [],
        effectsToResidences: [
          {
            targetGUIDs: [190762], // Wohngebäude
            GoodConsumptionUpgrade: [
              {ProvidedNeed: 1010216, AmountInPercent: -20}, // Schnaps
              {ProvidedNeed: 1010214, AmountInPercent: -20}, // Bier
              {ProvidedNeed: 1010257, AmountInPercent: -20}, // Rum
              {ProvidedNeed: 120032,  AmountInPercent: -20}, // Kaffee
              {ProvidedNeed: 120016,  AmountInPercent: -20}, // Sekt
            ],
          },
        ],
      },
    ],
  },
  {
    GUID: 249972,
    _name: "Ministerium für Kultur",
    FileName: "3dicons/palace/icon_department_culture_tourism_0.png",
    // effectsToProducers: [],
    // effectsToResidences: [],
    policies: [],
  },
  {
    GUID: 249975,
    _name: "Ministerium für Handel",
    FileName: "3dicons/palace/icon_department_maritime_affairs_0.png",
    // effectsToProducers: [],
    // effectsToResidences: [],
    policies: [
      {
        GUID: 269207, //EffectContainer; 269212 HarbourOfficeBuff
        //todo: angeschlossene
        // EffectTargets: [
        //   193865, // Hafenmeistereien
        // ],
        _name: "Küstenreformen",
        FileName: "3dicons/palace/icon_maritime_exploitation_program_0.png",
        effectsToProducers: [
          {
            targetGUIDs: [193400], // Alle Produktionsgebäude an der Küste
            Productivity: +300,
          }
        ],
        // effectsToResidences: [],
      }
    ],
  },
]
