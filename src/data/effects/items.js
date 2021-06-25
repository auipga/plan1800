/*
Source: annolayouts.de/data/items.json

Modification: Regex search and replace the following:

\"(\w*)\":
$1:

\[\{
\[\n\{

\}, \{
\},\n\{

Ctrl-Alt-L (reformat code)

\{\n *(\w*): "(\w*)",\n *(\w*): (-?\d+)\n *\}
{$1: "$2", $3: $4}

\{\n *(\w*): (-?\d+)\n *\}
{$1: $2}

\{\n *(\w*): (-?\d+),\n *(\w*): (-?\d+),\n *(\w*): (-?\d+)\n *}
{$1: $2, $3: $4, $5: $6}

\{\n *(\w*): (-?\d+),\n *(\w*): (-?\d+)\n *}
{$1: $2, $3: $4}

data/ui/2kimages/main/

,\n *LastChange: ".*"


,\n *ExclusiveGroup: ".*"


,\n *RarityValue: \d+

remove all items with Type=ItemWithUI, ActiveItem

remove or comment out: 190654 (seems untrue)
*/
export default [
  {
    GUID: 191057,
    Type: "CultureItem",
    Name: "Hauskatze",
    FileName: "3dicons/animals/icon_cat.png",
    Rarity: "Common",
    RarityValue: 0,
    AttractiveNess: 10,
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Faith", Amount: -5}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191058,
    Type: "CultureItem",
    Name: "Rind",
    FileName: "3dicons/animals/icon_cattle.png",
    Rarity: "Common",
    RarityValue: 0,
    AttractiveNess: 10,
    ItemSet: 191121,
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191059,
    Type: "CultureItem",
    Name: "Huhn",
    FileName: "3dicons/animals/icon_chicken.png",
    Rarity: "Common",
    RarityValue: 0,
    AttractiveNess: 10,
    ItemSet: 191121,
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190447,
    Type: "CultureItem",
    Name: "Rotwild",
    FileName: "3dicons/animals/icon_deer.png",
    Rarity: "Common",
    RarityValue: 0,
    AttractiveNess: 10,
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191060,
    Type: "CultureItem",
    Name: "Haushund",
    FileName: "3dicons/animals/icon_dog.png",
    Rarity: "Common",
    RarityValue: 0,
    AttractiveNess: 10,
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Hunting", Amount: 20}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191061,
    Type: "CultureItem",
    Name: "Esel",
    FileName: "3dicons/animals/icon_donkey.png",
    Rarity: "Common",
    RarityValue: 0,
    AttractiveNess: 10,
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Crafting", Amount: 10}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191053,
    Type: "CultureItem",
    Name: "Adler",
    FileName: "3dicons/animals/icon_eagle.png",
    Rarity: "Common",
    RarityValue: 0,
    AttractiveNess: 10,
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Hunting", Amount: 15}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191062,
    Type: "CultureItem",
    Name: "Ziege",
    FileName: "3dicons/animals/icon_goat.png",
    Rarity: "Common",
    RarityValue: 0,
    AttractiveNess: 10,
    ItemSet: 191121,
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191063,
    Type: "CultureItem",
    Name: "Pferd",
    FileName: "3dicons/animals/icon_horse.png",
    Rarity: "Common",
    RarityValue: 0,
    AttractiveNess: 10,
    ItemSet: 191121,
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Melee", Amount: 10},
        {Attribute: "Hunting", Amount: 10}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191064,
    Type: "CultureItem",
    Name: "Ochse",
    FileName: "3dicons/animals/icon_oxen.png",
    Rarity: "Common",
    RarityValue: 0,
    AttractiveNess: 10,
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Crafting", Amount: 5}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191065,
    Type: "CultureItem",
    Name: "Hausschwein",
    FileName: "3dicons/animals/icon_pigs.png",
    Rarity: "Common",
    RarityValue: 0,
    AttractiveNess: 10,
    ItemSet: 191121,
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191054,
    Type: "CultureItem",
    Name: "Taube",
    FileName: "3dicons/animals/icon_pigeon.png",
    Rarity: "Common",
    RarityValue: 0,
    AttractiveNess: 10,
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Faith", Amount: 5}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191068,
    Type: "CultureItem",
    Name: "Rotfuchs",
    FileName: "3dicons/animals/icon_fox.png",
    Rarity: "Common",
    RarityValue: 0,
    AttractiveNess: 10,
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190467,
    Type: "CultureItem",
    Name: "Ratten",
    FileName: "3dicons/animals/icon_rodents.png",
    Rarity: "Common",
    RarityValue: 0,
    AttractiveNess: 10,
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190006,
    Type: "CultureItem",
    Name: "Möwe",
    FileName: "3dicons/animals/icon_seagull.png",
    Rarity: "Common",
    RarityValue: 0,
    AttractiveNess: 10,
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Navigation", Amount: 15}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191066,
    Type: "CultureItem",
    Name: "Schaf",
    FileName: "3dicons/animals/icon_sheep.png",
    Rarity: "Common",
    RarityValue: 0,
    AttractiveNess: 10,
    ItemSet: 191121,
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191056,
    Type: "CultureItem",
    Name: "Storch",
    FileName: "3dicons/animals/icon_storck.png",
    Rarity: "Common",
    RarityValue: 0,
    AttractiveNess: 10,
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Faith", Amount: 10}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191067,
    Type: "CultureItem",
    Name: "Schwan",
    FileName: "3dicons/animals/icon_swan.png",
    Rarity: "Common",
    RarityValue: 0,
    AttractiveNess: 10,
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Faith", Amount: 10}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191055,
    Type: "CultureItem",
    Name: "Mauersegler",
    FileName: "3dicons/animals/icon_swift.png",
    Rarity: "Common",
    RarityValue: 0,
    AttractiveNess: 10,
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190466,
    Type: "CultureItem",
    Name: "Grüne Meeresschildkröte",
    FileName: "3dicons/animals/icon_turtle.png",
    Rarity: "Common",
    RarityValue: 0,
    AttractiveNess: 10,
    ItemSet: 191117,
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190446,
    Type: "CultureItem",
    Name: "Grauer Wolf",
    FileName: "3dicons/animals/icon_wolf.png",
    Rarity: "Common",
    RarityValue: 0,
    AttractiveNess: 10,
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Hunting", Amount: 15}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191113,
    Type: "CultureItem",
    Name: "Alpaka",
    FileName: "3dicons/animals/icon_alpacca.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    AttractiveNess: 20,
    ItemSet: 191114,
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Crafting", Amount: 10}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191072,
    Type: "CultureItem",
    Name: "Schwarzbär",
    FileName: "3dicons/animals/icon_black_bear.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    AttractiveNess: 20,
    ItemSet: 191115,
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Melee", Amount: 20}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191078,
    Type: "CultureItem",
    Name: "Klippenfuchs",
    FileName: "3dicons/animals/icon_blanfords_fox.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    AttractiveNess: 20,
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191052,
    Type: "CultureItem",
    Name: "Braunbär",
    FileName: "3dicons/animals/icon_brown_bear.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    AttractiveNess: 20,
    ItemSet: 191115,
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Melee", Amount: 20}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190454,
    Type: "CultureItem",
    Name: "Schmetterlinge",
    FileName: "3dicons/animals/icon_butterflies.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    AttractiveNess: 20,
    ExpeditionAttribute: {
      BaseMorale: 15,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191071,
    Type: "CultureItem",
    Name: "Silbermöwe",
    FileName: "3dicons/animals/icon_california_gull.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    AttractiveNess: 20,
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Navigation", Amount: 20}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191073,
    Type: "CultureItem",
    Name: "Axishirsch",
    FileName: "3dicons/animals/icon_chital.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    AttractiveNess: 20,
    ItemSet: 191120,
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191069,
    Type: "CultureItem",
    Name: "Kondor",
    FileName: "3dicons/animals/icon_vulture_ver2.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    AttractiveNess: 20,
    ItemSet: 191114,
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Faith", Amount: -10}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191506,
    Type: "CultureItem",
    Name: "Krokodil",
    FileName: "3dicons/animals/icon_crocodile.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    AttractiveNess: 20,
    ItemSet: 191120,
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Melee", Amount: 10}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190453,
    Type: "CultureItem",
    Name: "Qualle",
    FileName: "3dicons/animals/icon_jellyfish.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    AttractiveNess: 20,
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190462,
    Type: "CultureItem",
    Name: "Rotfeuerfisch",
    FileName: "3dicons/animals/icon_lionfish.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    AttractiveNess: 20,
    ItemSet: 191117,
    ExpeditionAttribute: {
      BaseMorale: 20,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190456,
    Type: "CultureItem",
    Name: "Geckos",
    FileName: "3dicons/animals/icon_lizard.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    AttractiveNess: 20,
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190463,
    Type: "CultureItem",
    Name: "Mantarochen",
    FileName: "3dicons/animals/icon_mantaray.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    AttractiveNess: 20,
    ItemSet: 191117,
    ExpeditionAttribute: {
      BaseMorale: 15,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191070,
    Type: "CultureItem",
    Name: "Dominikanermöwe",
    FileName: "3dicons/animals/icon_pacific_gull.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    AttractiveNess: 20,
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Navigation", Amount: 20}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190007,
    Type: "CultureItem",
    Name: "Papagei",
    FileName: "3dicons/icon_parrot.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    AttractiveNess: 20,
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Faith", Amount: 15}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191079,
    Type: "CultureItem",
    Name: "Pfau",
    FileName: "3dicons/animals/icon_peacock.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    AttractiveNess: 20,
    ItemSet: 191120,
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Faith", Amount: 15}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190458,
    Type: "CultureItem",
    Name: "Seepferdchen",
    FileName: "3dicons/animals/icon_seahorses.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    AttractiveNess: 20,
    ItemSet: 191117,
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191077,
    Type: "CultureItem",
    Name: "Bison",
    FileName: "3dicons/animals/icon_bison.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    AttractiveNess: 20,
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 193190,
    Type: "CultureItem",
    Name: "Wilder Wasserbüffel",
    FileName: "3dicons/animals/icon_waterbuffalo.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    AttractiveNess: 20,
    ItemSet: 191120,
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-06-05T12:14:19.000Z"
  },
  {
    GUID: 190464,
    Type: "CultureItem",
    Name: "Kugelfisch",
    FileName: "3dicons/animals/icon_balloonfish.png",
    Rarity: "Rare",
    RarityValue: 2,
    AttractiveNess: 30,
    ItemSet: 191117,
    ExpeditionAttribute: {
      BaseMorale: 15,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191091,
    Type: "CultureItem",
    Name: "Schwarzer Kaiman",
    FileName: "3dicons/animals/icon_black_caiman.png",
    Rarity: "Rare",
    RarityValue: 2,
    AttractiveNess: 30,
    ItemSet: 191118,
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Melee", Amount: 15}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190449,
    Type: "CultureItem",
    Name: "Großer Tümmler",
    FileName: "3dicons/animals/icon_dolphin.png",
    Rarity: "Rare",
    RarityValue: 2,
    AttractiveNess: 30,
    ItemSet: 191117,
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Navigation", Amount: 15},
        {Attribute: "Faith", Amount: 5}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191083,
    Type: "CultureItem",
    Name: "Elch",
    FileName: "3dicons/animals/icon_moose.png",
    Rarity: "Rare",
    RarityValue: 2,
    AttractiveNess: 30,
    ItemSet: 191115,
    ExpeditionAttribute: {
      BaseMorale: 15,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191081,
    Type: "CultureItem",
    Name: "Braunkopfkakadu",
    FileName: "3dicons/animals/icon_black_cockatoo.png",
    Rarity: "Rare",
    RarityValue: 2,
    AttractiveNess: 30,
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Faith", Amount: 15}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190451,
    Type: "CultureItem",
    Name: "Gorilla",
    FileName: "3dicons/icon_gorilla.png",
    Rarity: "Rare",
    RarityValue: 2,
    AttractiveNess: 30,
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Melee", Amount: 15}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191090,
    Type: "CultureItem",
    Name: "Jaguar",
    FileName: "3dicons/animals/icon_jaguar.png",
    Rarity: "Rare",
    RarityValue: 2,
    AttractiveNess: 30,
    ItemSet: 191118,
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Might", Amount: 20}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190459,
    Type: "CultureItem",
    Name: "Eisvogel",
    FileName: "3dicons/animals/icon_smallbirds.png",
    Rarity: "Rare",
    RarityValue: 2,
    AttractiveNess: 30,
    ExpeditionAttribute: {
      BaseMorale: 15,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191089,
    Type: "CultureItem",
    Name: "Puma",
    FileName: "3dicons/animals/icon_puma.png",
    Rarity: "Rare",
    RarityValue: 2,
    AttractiveNess: 30,
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Melee", Amount: 20}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190450,
    Type: "CultureItem",
    Name: "Orka",
    FileName: "3dicons/animals/icon_killerwhale.png",
    Rarity: "Rare",
    RarityValue: 2,
    AttractiveNess: 30,
    ItemSet: 191122,
    ExpeditionAttribute: {
      BaseMorale: 25,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191080,
    Type: "CultureItem",
    Name: "Pelikan",
    FileName: "3dicons/animals/icon_pelican.png",
    Rarity: "Rare",
    RarityValue: 2,
    AttractiveNess: 30,
    ItemSet: 191118,
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Faith", Amount: 20}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191087,
    Type: "CultureItem",
    Name: "Schwertfisch",
    FileName: "3dicons/animals/icon_swordfish.png",
    Rarity: "Rare",
    RarityValue: 2,
    AttractiveNess: 30,
    ItemSet: 191122,
    ExpeditionAttribute: {
      BaseMorale: 15,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191088,
    Type: "CultureItem",
    Name: "Tiger",
    FileName: "3dicons/animals/icon_tiger.png",
    Rarity: "Rare",
    RarityValue: 2,
    AttractiveNess: 30,
    ItemSet: 191120,
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Melee", Amount: 20}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190962,
    Type: "CultureItem",
    Name: "Amazonasdelfin",
    FileName: "3dicons/animals/icon_amazonas_dolphin.png",
    Rarity: "Epic",
    RarityValue: 3,
    AttractiveNess: 40,
    ItemSet: 191118,
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Navigation", Amount: 20},
        {Attribute: "Faith", Amount: 10}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191112,
    Type: "CultureItem",
    Name: "Elefant",
    FileName: "3dicons/animals/icon_asian_elephant.png",
    Rarity: "Epic",
    RarityValue: 3,
    AttractiveNess: 40,
    ItemSet: 191120,
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Melee", Amount: 25}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191093,
    Type: "CultureItem",
    Name: "Paradiesvogel",
    FileName: "3dicons/animals/icon_bird_of_paradise.png",
    Rarity: "Epic",
    RarityValue: 3,
    AttractiveNess: 40,
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Faith", Amount: 20}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190004,
    Type: "CultureItem",
    Name: "Schwarzer Jaguar",
    FileName: "3dicons/animals/icon_black_panther.png",
    Rarity: "Epic",
    RarityValue: 3,
    AttractiveNess: 40,
    ItemSet: 191118,
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Melee", Amount: 20}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191507,
    Type: "CultureItem",
    Name: "Albino-Alligator",
    FileName: "3dicons/animals/icon_albino_crocodile.png",
    Rarity: "Epic",
    RarityValue: 3,
    AttractiveNess: 40,
    ItemSet: 193193,
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Melee", Amount: 20}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191095,
    Type: "CultureItem",
    Name: "Schwarzdelfin",
    FileName: "3dicons/animals/icon_dusky_dolphin.png",
    Rarity: "Epic",
    RarityValue: 3,
    AttractiveNess: 40,
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Navigation", Amount: 20},
        {Attribute: "Faith", Amount: 10}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191100,
    Type: "CultureItem",
    Name: "Kleiner Schwertwal",
    FileName: "3dicons/animals/icon_false_killer_whale.png",
    Rarity: "Epic",
    RarityValue: 3,
    AttractiveNess: 40,
    ExpeditionAttribute: {
      BaseMorale: 20,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191101,
    Type: "CultureItem",
    Name: "Orang-Utan",
    FileName: "3dicons/animals/icon_orangutan.png",
    Rarity: "Epic",
    RarityValue: 3,
    AttractiveNess: 40,
    ExpeditionAttribute: {
      BaseMorale: 20,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191092,
    Type: "CultureItem",
    Name: "Iguaca",
    FileName: "3dicons/animals/icon_puerto_rican_amazon.png",
    Rarity: "Epic",
    RarityValue: 3,
    AttractiveNess: 40,
    ItemSet: 191118,
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Faith", Amount: 20}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191097,
    Type: "CultureItem",
    Name: "Zwerggrindwal",
    FileName: "3dicons/animals/icon_pygmy_killer_whale.png",
    Rarity: "Epic",
    RarityValue: 3,
    AttractiveNess: 40,
    ExpeditionAttribute: {
      BaseMorale: 20,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191102,
    Type: "CultureItem",
    Name: "Silberrückengorilla",
    FileName: "3dicons/animals/icon_gorilla_silverback.png",
    Rarity: "Epic",
    RarityValue: 3,
    AttractiveNess: 40,
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Melee", Amount: 20}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191094,
    Type: "CultureItem",
    Name: "Brillenbär",
    FileName: "3dicons/animals/icon_spectacled_bear.png",
    Rarity: "Epic",
    RarityValue: 3,
    AttractiveNess: 40,
    ItemSet: 191114,
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Melee", Amount: 15}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191098,
    Type: "CultureItem",
    Name: "Pottwal",
    FileName: "3dicons/animals/icon_sperm_whale.png",
    Rarity: "Epic",
    RarityValue: 3,
    AttractiveNess: 40,
    ExpeditionAttribute: {
      BaseMorale: 20,
      ExpeditionAttributes: []
    },
    LastChange: "2019-12-10T17:46:12.000Z"
  },
  {
    GUID: 191096,
    Type: "CultureItem",
    Name: "Schlankdelfin",
    FileName: "3dicons/animals/icon_spotted_dolphin.png",
    Rarity: "Epic",
    RarityValue: 3,
    AttractiveNess: 40,
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Navigation", Amount: 20},
        {Attribute: "Faith", Amount: 10}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191099,
    Type: "CultureItem",
    Name: "Weißer Hai",
    FileName: "3dicons/animals/icon_shark.png",
    Rarity: "Epic",
    RarityValue: 3,
    AttractiveNess: 40,
    ItemSet: 191122,
    ExpeditionAttribute: {
      BaseMorale: 20,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 192326,
    Type: "CultureItem",
    Name: "Vom Aussterben bedrohte Schmetterlinge",
    FileName: "3dicons/animals/icon_butterflies.png",
    Rarity: "Epic",
    RarityValue: 3,
    AttractiveNess: 40,
    ExpeditionAttribute: {
      BaseMorale: 20,
      ExpeditionAttributes: []
    },
    LastChange: "2019-06-05T12:14:19.000Z"
  },
  {
    GUID: 192331,
    Type: "CultureItem",
    Name: "Mathilde, der Papagei",
    FileName: "3dicons/animals/icon_puerto_rican_amazon.png",
    Rarity: "Epic",
    RarityValue: 3,
    AttractiveNess: 40,
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Faith", Amount: 25}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191106,
    Type: "CultureItem",
    Name: "Albino-Fennek",
    FileName: "3dicons/animals/icon_albinos_fennec.png",
    Rarity: "Legendary",
    RarityValue: 4,
    AttractiveNess: 50,
    ItemSet: 193193,
    ExpeditionAttribute: {
      BaseMorale: 25,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191111,
    Type: "CultureItem",
    Name: "See-Orang-Utan",
    FileName: "3dicons/animals/icon_bornean_orangutan.png",
    Rarity: "Legendary",
    RarityValue: 4,
    AttractiveNess: 50,
    ExpeditionAttribute: {
      BaseMorale: 25,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191107,
    Type: "CultureItem",
    Name: "Schattenwolf",
    FileName: "3dicons/animals/icon_dire_wolf.png",
    Rarity: "Legendary",
    RarityValue: 4,
    AttractiveNess: 50,
    ItemSet: 191116,
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Hunting", Amount: 30}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191105,
    Type: "CultureItem",
    Name: "Megaloceros",
    FileName: "3dicons/animals/icon_giant_deer.png",
    Rarity: "Legendary",
    RarityValue: 4,
    AttractiveNess: 50,
    ItemSet: 191116,
    ExpeditionAttribute: {
      BaseMorale: 25,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191104,
    Type: "CultureItem",
    Name: "Kolponomos",
    FileName: "3dicons/animals/icon_kolponomos.png",
    Rarity: "Legendary",
    RarityValue: 4,
    AttractiveNess: 50,
    ItemSet: 191116,
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Melee", Amount: 15}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191103,
    Type: "CultureItem",
    Name: "Großer Waldpapagei",
    FileName: "3dicons/animals/icon_norfolk_kaka.png",
    Rarity: "Legendary",
    RarityValue: 4,
    AttractiveNess: 50,
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Faith", Amount: 30}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191109,
    Type: "CultureItem",
    Name: "Schweinswal",
    FileName: "3dicons/animals/icon_vaquita.png",
    Rarity: "Legendary",
    RarityValue: 4,
    AttractiveNess: 50,
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Navigation", Amount: 25},
        {Attribute: "Faith", Amount: 10}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191108,
    Type: "CultureItem",
    Name: "Baiji",
    FileName: "3dicons/animals/icon_white_flag_dolphin.png",
    Rarity: "Legendary",
    RarityValue: 4,
    AttractiveNess: 50,
    ItemSet: 193193,
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Navigation", Amount: 25},
        {Attribute: "Faith", Amount: 10}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190452,
    Type: "CultureItem",
    Name: "Weißer Tiger",
    FileName: "3dicons/animals/icon_snow_tiger.png",
    Rarity: "Legendary",
    RarityValue: 4,
    AttractiveNess: 50,
    ItemSet: 193193,
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Melee", Amount: 30}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191110,
    Type: "CultureItem",
    Name: "Küstenleopard",
    FileName: "3dicons/animals/icon_zanzibar_leopard.png",
    Rarity: "Legendary",
    RarityValue: 4,
    AttractiveNess: 50,
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Melee", Amount: 25}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 193191,
    Type: "CultureItem",
    Name: "Weißer Pfau",
    FileName: "3dicons/animals/icon_albino_peacock.png",
    Rarity: "Legendary",
    RarityValue: 4,
    AttractiveNess: 50,
    ItemSet: 193193,
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Melee", Amount: 30}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 193192,
    Type: "CultureItem",
    Name: "Albino-Gorilla",
    FileName: "3dicons/animals/icon_albino_gorilla.png",
    Rarity: "Legendary",
    RarityValue: 4,
    AttractiveNess: 50,
    ItemSet: 193193,
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Melee", Amount: 30}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190482,
    Type: "CultureItem",
    Name: "Alte Frachtliste",
    FileName: "3dicons/museum/icon_scroll_common.png",
    Rarity: "Common",
    RarityValue: 0,
    AttractiveNess: 10,
    Allocation: "Museum",
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190520,
    Type: "CultureItem",
    Name: "Volkserzählungen",
    FileName: "3dicons/museum/icon_book_comon.png",
    Rarity: "Common",
    RarityValue: 0,
    AttractiveNess: 10,
    Allocation: "Museum",
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190525,
    Type: "CultureItem",
    Name: "Beschädigte Statue",
    FileName: "3dicons/museum/icon_statue_stone.png",
    Rarity: "Common",
    RarityValue: 0,
    AttractiveNess: 10,
    Allocation: "Museum",
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190523,
    Type: "CultureItem",
    Name: "Bronzehelm",
    FileName: "3dicons/museum/icon_museum_helmet_common.png",
    Rarity: "Common",
    RarityValue: 0,
    AttractiveNess: 10,
    Allocation: "Museum",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Melee", Amount: 10}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190526,
    Type: "CultureItem",
    Name: "Bronzeschwert",
    FileName: "3dicons/museum/icon_museum_sword_common.png",
    Rarity: "Common",
    RarityValue: 0,
    AttractiveNess: 10,
    Allocation: "Museum",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Melee", Amount: 10}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190521,
    Type: "CultureItem",
    Name: "Rostige Sesterzen",
    FileName: "3dicons/museum/icon_coin_common.png",
    Rarity: "Common",
    RarityValue: 0,
    AttractiveNess: 10,
    Allocation: "Museum",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Faith", Amount: 5}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190522,
    Type: "CultureItem",
    Name: "Quarzkristalle",
    FileName: "3dicons/museum/icon_gem_quartz.png",
    Rarity: "Common",
    RarityValue: 0,
    AttractiveNess: 10,
    Allocation: "Museum",
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190492,
    Type: "CultureItem",
    Name: "Schlichte Kette",
    FileName: "3dicons/museum/icon_necklace_common.png",
    Rarity: "Common",
    RarityValue: 0,
    AttractiveNess: 10,
    Allocation: "Museum",
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190469,
    Type: "CultureItem",
    Name: "Primitiver Schleier",
    FileName: "3dicons/museum/icon_fabric_comon.png",
    Rarity: "Common",
    RarityValue: 0,
    AttractiveNess: 10,
    Allocation: "Museum",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Medicine", Amount: 10}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190494,
    Type: "CultureItem",
    Name: "Hölzerner Ring",
    FileName: "3dicons/museum/icon_wooden_ring.png",
    Rarity: "Common",
    RarityValue: 0,
    AttractiveNess: 10,
    Allocation: "Museum",
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190524,
    Type: "CultureItem",
    Name: "Hölzerner Schild",
    FileName: "3dicons/museum/icon_museum_shield_common.png",
    Rarity: "Common",
    RarityValue: 0,
    AttractiveNess: 10,
    Allocation: "Museum",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Melee", Amount: 5}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 192364,
    Type: "CultureItem",
    Name: "Schaukelpferd",
    FileName: "3dicons/museum/icon_statue_stone.png",
    Rarity: "Common",
    RarityValue: 0,
    AttractiveNess: 10,
    Allocation: "Museum",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Faith", Amount: 10}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190478,
    Type: "CultureItem",
    Name: "Antiker Roman",
    FileName: "3dicons/museum/icon_book_uncommon.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    AttractiveNess: 20,
    Allocation: "Museum",
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190528,
    Type: "CultureItem",
    Name: "Farbenfrohes Banner",
    FileName: "3dicons/museum/icon_fabric_uncommon.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    AttractiveNess: 20,
    Allocation: "Museum",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Medicine", Amount: 15}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190553,
    Type: "CultureItem",
    Name: "Kupferring",
    FileName: "3dicons/museum/icon_ring_uncommon.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    AttractiveNess: 20,
    Allocation: "Museum",
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190529,
    Type: "CultureItem",
    Name: "Eisenhelm",
    FileName: "3dicons/museum/icon_museum_helmet_uncommon.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    AttractiveNess: 20,
    Allocation: "Museum",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Melee", Amount: 10}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190533,
    Type: "CultureItem",
    Name: "Eisenschild",
    FileName: "3dicons/museum/icon_museum_shield_uncommon.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    AttractiveNess: 20,
    Allocation: "Museum",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Melee", Amount: 10}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190535,
    Type: "CultureItem",
    Name: "Eisenschwert",
    FileName: "3dicons/museum/icon_museum_sword_uncommon.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    AttractiveNess: 20,
    Allocation: "Museum",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Melee", Amount: 10}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190481,
    Type: "CultureItem",
    Name: "Bemalte Steine",
    FileName: "3dicons/museum/icon_lined_stone.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    AttractiveNess: 20,
    Allocation: "Museum",
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190471,
    Type: "CultureItem",
    Name: "Mumienbandagen",
    FileName: "3dicons/museum/icon_mummy_uncommon.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    AttractiveNess: 20,
    Allocation: "Museum",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Faith", Amount: -10}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190532,
    Type: "CultureItem",
    Name: "Erleuchtetes Manuskript",
    FileName: "3dicons/museum/icon_scroll_uncommon.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    AttractiveNess: 20,
    Allocation: "Museum",
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190487,
    Type: "CultureItem",
    Name: "Pyritkristalle",
    FileName: "3dicons/museum/icon_gem_pyrite.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    AttractiveNess: 20,
    Allocation: "Museum",
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-06-05T12:14:19.000Z"
  },
  {
    GUID: 190527,
    Type: "CultureItem",
    Name: "Angelaufene Silbermünzen",
    FileName: "3dicons/museum/icon_coin_uncommon.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    AttractiveNess: 20,
    Allocation: "Museum",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Faith", Amount: 10}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190530,
    Type: "CultureItem",
    Name: "Silberkette",
    FileName: "3dicons/museum/icon_necklace_uncommon.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    AttractiveNess: 20,
    Allocation: "Museum",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Diplomacy", Amount: 10}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190534,
    Type: "CultureItem",
    Name: "Steinerne Statue",
    FileName: "3dicons/museum/icon_statue_broken.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    AttractiveNess: 20,
    Allocation: "Museum",
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 192359,
    Type: "CultureItem",
    Name: "Der von-Malching-Famlilienwimpel",
    FileName: "3dicons/narative_item/icon_fabric_recolor.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    AttractiveNess: 20,
    Allocation: "Museum",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Medicine", Amount: 15}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 192360,
    Type: "CultureItem",
    Name: "Gasparovs Truhe der Schande",
    FileName: "3dicons/monument_event_rewards/icon_reward_4.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    AttractiveNess: 20,
    Allocation: "Museum",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Crafting", Amount: 10}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 192415,
    Type: "CultureItem",
    Name: "Unvorteilhaftes Porträt von Artur",
    FileName: "3dicons/narative_item/icon_gasparovs_portrait.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    AttractiveNess: 20,
    Allocation: "Museum",
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-06-05T12:14:19.000Z"
  },
  {
    GUID: 192404,
    Type: "CultureItem",
    Name: "Register des Sklavenbesitzers",
    FileName: "3dicons/icon_journal.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    AttractiveNess: 20,
    Allocation: "Museum",
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-06-05T12:14:19.000Z"
  },
  {
    GUID: 190539,
    Type: "CultureItem",
    Name: "Tara-Brosche",
    FileName: "3dicons/museum/icon_necklace_rare.png",
    Rarity: "Rare",
    RarityValue: 2,
    AttractiveNess: 30,
    ItemSet: 191123,
    Allocation: "Museum",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Diplomacy", Amount: 10}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190472,
    Type: "CultureItem",
    Name: "Verrottende Mumie",
    FileName: "3dicons/museum/icon_mummy_rare.png",
    Rarity: "Rare",
    RarityValue: 2,
    AttractiveNess: 30,
    Allocation: "Museum",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Faith", Amount: -10}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190483,
    Type: "CultureItem",
    Name: "Ammoniten",
    FileName: "3dicons/museum/icon_fossils.png",
    Rarity: "Rare",
    RarityValue: 2,
    AttractiveNess: 30,
    ItemSet: 191125,
    Allocation: "Museum",
    ExpeditionAttribute: {
      BaseMorale: 15,
      ExpeditionAttributes: []
    },
    LastChange: "2019-06-05T12:14:19.000Z"
  },
  {
    GUID: 190536,
    Type: "CultureItem",
    Name: "Aureus-Münzen",
    FileName: "3dicons/museum/icon_coin_rare.png",
    Rarity: "Rare",
    RarityValue: 2,
    AttractiveNess: 30,
    Allocation: "Museum",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Faith", Amount: 15}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190489,
    Type: "CultureItem",
    Name: "Jade-Perle",
    FileName: "3dicons/museum/icon_gem_rare.png",
    Rarity: "Rare",
    RarityValue: 2,
    AttractiveNess: 30,
    Allocation: "Museum",
    ExpeditionAttribute: {
      BaseMorale: 15,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190282,
    Type: "CultureItem",
    Name: "Affenzahnamulett",
    FileName: "3dicons/museum/icon_monkey_amulet.png",
    Rarity: "Rare",
    RarityValue: 2,
    AttractiveNess: 30,
    ItemSet: 191127,
    Allocation: "Museum",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Faith", Amount: 30}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190468,
    Type: "CultureItem",
    Name: "Die Kunst der Medizin",
    FileName: "3dicons/museum/icon_book_rare.png",
    Rarity: "Rare",
    RarityValue: 2,
    AttractiveNess: 30,
    Allocation: "Museum",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Medicine", Amount: 30}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190537,
    Type: "CultureItem",
    Name: "Seidenstoff",
    FileName: "3dicons/museum/icon_fabric_rare.png",
    Rarity: "Rare",
    RarityValue: 2,
    AttractiveNess: 30,
    Allocation: "Museum",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Medicine", Amount: 20}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190543,
    Type: "CultureItem",
    Name: "Enosichthon-Statue",
    FileName: "3dicons/museum/icon_statue_marble_statue.png",
    Rarity: "Rare",
    RarityValue: 2,
    AttractiveNess: 30,
    ItemSet: 191124,
    Allocation: "Museum",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Faith", Amount: 15}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190540,
    Type: "CultureItem",
    Name: "Heimskringla",
    FileName: "3dicons/museum/icon_ragnarsdrapa.png",
    Rarity: "Rare",
    RarityValue: 2,
    AttractiveNess: 30,
    ItemSet: 191131,
    Allocation: "Museum",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Faith", Amount: 10}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190538,
    Type: "CultureItem",
    Name: "Silberhelm",
    FileName: "3dicons/museum/icon_museum_helmet_rare.png",
    Rarity: "Rare",
    RarityValue: 2,
    AttractiveNess: 30,
    Allocation: "Museum",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Melee", Amount: 5}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190541,
    Type: "CultureItem",
    Name: "Silberring",
    FileName: "3dicons/museum/icon_ring_rare.png",
    Rarity: "Rare",
    RarityValue: 2,
    AttractiveNess: 30,
    Allocation: "Museum",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Diplomacy", Amount: 5}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190542,
    Type: "CultureItem",
    Name: "Silberschild",
    FileName: "3dicons/museum/icon_museum_shield_rare.png",
    Rarity: "Rare",
    RarityValue: 2,
    AttractiveNess: 30,
    Allocation: "Museum",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Melee", Amount: 5}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190544,
    Type: "CultureItem",
    Name: "Silberschwert",
    FileName: "3dicons/museum/icon_museum_sword_rare.png",
    Rarity: "Rare",
    RarityValue: 2,
    AttractiveNess: 30,
    Allocation: "Museum",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Melee", Amount: 5}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 192405,
    Type: "CultureItem",
    Name: "Familienerbstück der Harlowes",
    FileName: "3dicons/narative_item/icon_necklace_harlow_family_heirloom.png",
    Rarity: "Rare",
    RarityValue: 2,
    AttractiveNess: 30,
    Allocation: "Museum",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Faith", Amount: 10},
        {Attribute: "Diplomacy", Amount: 5}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190546,
    Type: "CultureItem",
    Name: "Leichentuch des Großen Königs",
    FileName: "3dicons/museum/icon_fabric_epic.png",
    Rarity: "Epic",
    RarityValue: 3,
    AttractiveNess: 40,
    Allocation: "Museum",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Faith", Amount: 25}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190545,
    Type: "CultureItem",
    Name: "Verschollener Schatz von Ben Sahid",
    FileName: "3dicons/museum/icon_coin_epic.png",
    Rarity: "Epic",
    RarityValue: 3,
    AttractiveNess: 40,
    ItemSet: 191128,
    Allocation: "Museum",
    ExpeditionAttribute: {
      BaseMorale: 20,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190519,
    Type: "CultureItem",
    Name: "Goidelischer Steinknoten",
    FileName: "3dicons/museum/icon_celtic_carving.png",
    Rarity: "Epic",
    RarityValue: 3,
    AttractiveNess: 40,
    ItemSet: 191123,
    Allocation: "Museum",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Faith", Amount: 20}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190513,
    Type: "CultureItem",
    Name: "Dionysisches Mosaik",
    FileName: "3dicons/museum/icon_corinthian_mosaik.png",
    Rarity: "Epic",
    RarityValue: 3,
    AttractiveNess: 40,
    ItemSet: 191124,
    Allocation: "Museum",
    ExpeditionAttribute: {
      BaseMorale: 20,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190547,
    Type: "CultureItem",
    Name: "Diamant",
    FileName: "3dicons/museum/icon_gem_diamond.png",
    Rarity: "Epic",
    RarityValue: 3,
    AttractiveNess: 40,
    Allocation: "Museum",
    ExpeditionAttribute: {
      BaseMorale: 20,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190549,
    Type: "CultureItem",
    Name: "Protoceratops-Eier",
    FileName: "3dicons/museum/icon_dinosaur_egg.png",
    Rarity: "Epic",
    RarityValue: 3,
    AttractiveNess: 40,
    ItemSet: 191125,
    Allocation: "Museum",
    ExpeditionAttribute: {
      BaseMorale: 20,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190515,
    Type: "CultureItem",
    Name: "Brón-Dolmen",
    FileName: "3dicons/museum/icon_celtic_dolmen.png",
    Rarity: "Epic",
    RarityValue: 3,
    AttractiveNess: 40,
    ItemSet: 191123,
    Allocation: "Museum",
    ExpeditionAttribute: {
      BaseMorale: 20,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190518,
    Type: "CultureItem",
    Name: "Drachenboot-Schnitzerei",
    FileName: "3dicons/museum/icon_viking_drakkar_carving.png",
    Rarity: "Epic",
    RarityValue: 3,
    AttractiveNess: 40,
    ItemSet: 191131,
    Allocation: "Museum",
    ExpeditionAttribute: {
      BaseMorale: 20,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190548,
    Type: "CultureItem",
    Name: "Goldener Kriegshelm",
    FileName: "3dicons/museum/icon_museum_helmet_epic.png",
    Rarity: "Epic",
    RarityValue: 3,
    AttractiveNess: 40,
    Allocation: "Museum",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Melee", Amount: 5}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190550,
    Type: "CultureItem",
    Name: "Königlicher Goldring",
    FileName: "3dicons/museum/icon_ring_epic.png",
    Rarity: "Epic",
    RarityValue: 3,
    AttractiveNess: 40,
    Allocation: "Museum",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Diplomacy", Amount: 15}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190500,
    Type: "CultureItem",
    Name: "Mesoanische Glyphen",
    FileName: "3dicons/museum/icon_mayan_glyphs.png",
    Rarity: "Epic",
    RarityValue: 3,
    AttractiveNess: 40,
    ItemSet: 191126,
    Allocation: "Museum",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Faith", Amount: 15}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190497,
    Type: "CultureItem",
    Name: "Mesoanisches Haus",
    FileName: "3dicons/museum/icon_mayan_house.png",
    Rarity: "Epic",
    RarityValue: 3,
    AttractiveNess: 40,
    ItemSet: 191126,
    Allocation: "Museum",
    ExpeditionAttribute: {
      BaseMorale: 20,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190517,
    Type: "CultureItem",
    Name: "Menhire",
    FileName: "3dicons/museum/icon_celtic_menhirs.png",
    Rarity: "Epic",
    RarityValue: 3,
    AttractiveNess: 40,
    ItemSet: 191123,
    Allocation: "Museum",
    ExpeditionAttribute: {
      BaseMorale: 20,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190473,
    Type: "CultureItem",
    Name: "Juanita die Mumie",
    FileName: "3dicons/museum/icon_mummy_nazcan.png",
    Rarity: "Epic",
    RarityValue: 3,
    AttractiveNess: 40,
    ItemSet: 191127,
    Allocation: "Museum",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Faith", Amount: -10}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190496,
    Type: "CultureItem",
    Name: "Nazca-Grab",
    FileName: "3dicons/museum/icon_nascan_tomb.png",
    Rarity: "Epic",
    RarityValue: 3,
    AttractiveNess: 40,
    ItemSet: 191127,
    Allocation: "Museum",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Faith", Amount: -10}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190508,
    Type: "CultureItem",
    Name: "Olympiatempel",
    FileName: "3dicons/museum/icon_corinthian_olympean_remain.png",
    Rarity: "Epic",
    RarityValue: 3,
    AttractiveNess: 40,
    ItemSet: 191124,
    Allocation: "Museum",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Faith", Amount: 20}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190551,
    Type: "CultureItem",
    Name: "Braunbarts Entermesser",
    FileName: "3dicons/museum/icon_museum_sword_pirate_epic.png",
    Rarity: "Epic",
    RarityValue: 3,
    AttractiveNess: 40,
    ItemSet: 191128,
    Allocation: "Museum",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Melee", Amount: 5}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190474,
    Type: "CultureItem",
    Name: "Takals Halskette",
    FileName: "3dicons/museum/icon_necklace_epic.png",
    Rarity: "Epic",
    RarityValue: 3,
    AttractiveNess: 40,
    ItemSet: 191126,
    Allocation: "Museum",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Diplomacy", Amount: 15}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190506,
    Type: "CultureItem",
    Name: "Altamira-Höhlenmalereien",
    FileName: "3dicons/museum/icon_lascaux_painting.png",
    Rarity: "Epic",
    RarityValue: 3,
    AttractiveNess: 40,
    ItemSet: 191129,
    Allocation: "Museum",
    ExpeditionAttribute: {
      BaseMorale: 20,
      ExpeditionAttributes: []
    },
    LastChange: "2019-09-10T09:33:30.000Z"
  },
  {
    GUID: 190476,
    Type: "CultureItem",
    Name: "Barbarossas Knochen",
    FileName: "3dicons/museum/icon_museum_readbeard_skeletton.png",
    Rarity: "Epic",
    RarityValue: 3,
    AttractiveNess: 40,
    ItemSet: 191128,
    Allocation: "Museum",
    ExpeditionAttribute: {
      BaseMorale: 20,
      ExpeditionAttributes: []
    },
    LastChange: "2019-06-05T12:14:19.000Z"
  },
  {
    GUID: 190512,
    Type: "CultureItem",
    Name: "Imperiumsadler-Mosaik",
    FileName: "3dicons/museum/icon_corinthian_mosaik_1.png",
    Rarity: "Epic",
    RarityValue: 3,
    AttractiveNess: 40,
    ItemSet: 191130,
    Allocation: "Museum",
    ExpeditionAttribute: {
      BaseMorale: 20,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190510,
    Type: "CultureItem",
    Name: "Minerva-Heiligtum",
    FileName: "3dicons/museum/icon_roman_sanctuary.png",
    Rarity: "Epic",
    RarityValue: 3,
    AttractiveNess: 40,
    ItemSet: 191130,
    Allocation: "Museum",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Faith", Amount: 20}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190503,
    Type: "CultureItem",
    Name: "Stegosaurus",
    FileName: "3dicons/museum/icon_museum_stegosaurus.png",
    Rarity: "Epic",
    RarityValue: 3,
    AttractiveNess: 40,
    ItemSet: 191125,
    Allocation: "Museum",
    ExpeditionAttribute: {
      BaseMorale: 20,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190485,
    Type: "CultureItem",
    Name: "Die Odyssee",
    FileName: "3dicons/museum/icon_scroll_odyssey.png",
    Rarity: "Epic",
    RarityValue: 3,
    AttractiveNess: 40,
    ItemSet: 191124,
    Allocation: "Museum",
    ExpeditionAttribute: {
      BaseMorale: 20,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190484,
    Type: "CultureItem",
    Name: "Die Ilias",
    FileName: "3dicons/museum/icon_scroll_anthology_myths.png",
    Rarity: "Epic",
    RarityValue: 3,
    AttractiveNess: 40,
    ItemSet: 191124,
    Allocation: "Museum",
    ExpeditionAttribute: {
      BaseMorale: 20,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 192355,
    Type: "CultureItem",
    Name: "Die verfluchte Mumie von Cabot",
    FileName: "3dicons/narative_item/icon_cursedmummy.png",
    Rarity: "Epic",
    RarityValue: 3,
    AttractiveNess: 40,
    Allocation: "Museum",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Faith", Amount: -10}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 192356,
    Type: "CultureItem",
    Name: "Schneidezahn des verrückten Affens",
    FileName: "3dicons/narative_item/icon_monkeytalisman.png",
    Rarity: "Epic",
    RarityValue: 3,
    AttractiveNess: 40,
    Allocation: "Museum",
    ExpeditionAttribute: {
      BaseMorale: 20,
      ExpeditionAttributes: []
    },
    LastChange: "2019-06-05T12:14:19.000Z"
  },
  {
    GUID: 192361,
    Type: "CultureItem",
    Name: "Wertvolle Kronjuwelen",
    FileName: "3dicons/museum/icon_ring_epic.png",
    Rarity: "Epic",
    RarityValue: 3,
    AttractiveNess: 40,
    Allocation: "Museum",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Diplomacy", Amount: 20}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 192312,
    Type: "CultureItem",
    Name: "Ein altes Medaillon",
    FileName: "3dicons/museum/icon_gem_pyrite.png",
    Rarity: "Epic",
    RarityValue: 3,
    AttractiveNess: 40,
    Allocation: "Museum",
    ExpeditionAttribute: {
      BaseMorale: 20,
      ExpeditionAttributes: []
    },
    LastChange: "2019-06-05T12:14:19.000Z"
  },
  {
    GUID: 192336,
    Type: "CultureItem",
    Name: "Ein schimmernder Stein",
    FileName: "3dicons/museum/icon_gem_diamond.png",
    Rarity: "Epic",
    RarityValue: 3,
    AttractiveNess: 40,
    Allocation: "Museum",
    ExpeditionAttribute: {
      BaseMorale: 20,
      ExpeditionAttributes: []
    },
    LastChange: "2019-06-05T12:14:19.000Z"
  },
  {
    GUID: 192948,
    Type: "CultureItem",
    Name: "Zwanzigtausend Tage um die Mitte der Erde herum",
    FileName: "3dicons/museum/icon_book_uncommon.png",
    Rarity: "Epic",
    RarityValue: 3,
    AttractiveNess: 40,
    Allocation: "Museum",
    ExpeditionAttribute: {
      BaseMorale: 20,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 192949,
    Type: "CultureItem",
    Name: "Die Ringe der Könige",
    FileName: "3dicons/narative_item/icon_salpeter.png",
    Rarity: "Epic",
    RarityValue: 3,
    AttractiveNess: 40,
    Allocation: "Museum",
    ExpeditionAttribute: {
      BaseMorale: 20,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190552,
    Type: "CultureItem",
    Name: "Weißzahn, das Schwert von Rhydderch",
    FileName: "3dicons/museum/icon_museum_celts_dyrnwyn.png",
    Rarity: "Legendary",
    RarityValue: 4,
    AttractiveNess: 50,
    ItemSet: 191123,
    Allocation: "Museum",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Faith", Amount: 30}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190480,
    Type: "CultureItem",
    Name: "Sæmundar-Edda",
    FileName: "3dicons/museum/icon_museum_viking_edda.png",
    Rarity: "Legendary",
    RarityValue: 4,
    AttractiveNess: 50,
    ItemSet: 191131,
    Allocation: "Museum",
    ExpeditionAttribute: {
      BaseMorale: 25,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190511,
    Type: "CultureItem",
    Name: "Augustus-Forum",
    FileName: "3dicons/museum/icon_roman_forum_remains.png",
    Rarity: "Legendary",
    RarityValue: 4,
    AttractiveNess: 50,
    ItemSet: 191130,
    Allocation: "Museum",
    ExpeditionAttribute: {
      BaseMorale: 25,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190507,
    Type: "CultureItem",
    Name: "Höhlenmalereien von Valojoulx",
    FileName: "3dicons/museum/icon_prehistorical_painting.png",
    Rarity: "Legendary",
    RarityValue: 4,
    AttractiveNess: 50,
    ItemSet: 191129,
    Allocation: "Museum",
    ExpeditionAttribute: {
      BaseMorale: 25,
      ExpeditionAttributes: []
    },
    LastChange: "2019-09-10T09:33:30.000Z"
  },
  {
    GUID: 190501,
    Type: "CultureItem",
    Name: "Mesoanischer Kalender",
    FileName: "3dicons/museum/icon_mayan_calendar.png",
    Rarity: "Legendary",
    RarityValue: 4,
    AttractiveNess: 50,
    ItemSet: 191126,
    Allocation: "Museum",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Navigation", Amount: 30}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190498,
    Type: "CultureItem",
    Name: "Mesoanischer Hafen",
    FileName: "3dicons/museum/icon_mayan_seaport.png",
    Rarity: "Legendary",
    RarityValue: 4,
    AttractiveNess: 50,
    ItemSet: 191126,
    Allocation: "Museum",
    ExpeditionAttribute: {
      BaseMorale: 25,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190499,
    Type: "CultureItem",
    Name: "Mesoanischer Tempel",
    FileName: "3dicons/museum/icon_mayan_temple.png",
    Rarity: "Legendary",
    RarityValue: 4,
    AttractiveNess: 50,
    ItemSet: 191126,
    Allocation: "Museum",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Faith", Amount: 30}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190505,
    Type: "CultureItem",
    Name: "Mosasaurus-Fossil",
    FileName: "3dicons/museum/icon_museum_mosasaurus.png",
    Rarity: "Legendary",
    RarityValue: 4,
    AttractiveNess: 50,
    ItemSet: 191125,
    Allocation: "Museum",
    ExpeditionAttribute: {
      BaseMorale: 25,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190475,
    Type: "CultureItem",
    Name: "Neanderthaler-Skelett",
    FileName: "3dicons/museum/icon_museum_neanderthaler.png",
    Rarity: "Legendary",
    RarityValue: 4,
    AttractiveNess: 50,
    ItemSet: 191129,
    Allocation: "Museum",
    ExpeditionAttribute: {
      BaseMorale: 25,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190493,
    Type: "CultureItem",
    Name: "Ring der Libenungen",
    FileName: "3dicons/museum/icon_museum_viking_nibelungen_ring.png",
    Rarity: "Legendary",
    RarityValue: 4,
    AttractiveNess: 50,
    ItemSet: 191131,
    Allocation: "Museum",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Faith", Amount: 20}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190504,
    Type: "CultureItem",
    Name: "Apatosaurus",
    FileName: "3dicons/museum/icon_museum_sauropodon.png",
    Rarity: "Legendary",
    RarityValue: 4,
    AttractiveNess: 50,
    ItemSet: 191125,
    Allocation: "Museum",
    ExpeditionAttribute: {
      BaseMorale: 25,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190514,
    Type: "CultureItem",
    Name: "Goidelischer Steinkreis",
    FileName: "3dicons/museum/icon_museum_celts_stonehenge.png",
    Rarity: "Legendary",
    RarityValue: 4,
    AttractiveNess: 50,
    ItemSet: 191123,
    Allocation: "Museum",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Faith", Amount: 30}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190509,
    Type: "CultureItem",
    Name: "Tempel des Poseidon",
    FileName: "3dicons/museum/icon_corinthian_temple_of_posseidon.png",
    Rarity: "Legendary",
    RarityValue: 4,
    AttractiveNess: 50,
    ItemSet: 191124,
    Allocation: "Museum",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Faith", Amount: 30}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190502,
    Type: "CultureItem",
    Name: "Tyrannosaurus Rex",
    FileName: "3dicons/museum/icon_museum_t_rex.png",
    Rarity: "Legendary",
    RarityValue: 4,
    AttractiveNess: 50,
    ItemSet: 191125,
    Allocation: "Museum",
    ExpeditionAttribute: {
      BaseMorale: 25,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190516,
    Type: "CultureItem",
    Name: "Altar von Uppsidaisi",
    FileName: "3dicons/museum/icon_viking_uppsala_altar.png",
    Rarity: "Legendary",
    RarityValue: 4,
    AttractiveNess: 50,
    ItemSet: 191131,
    Allocation: "Museum",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Faith", Amount: 30}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190470,
    Type: "CultureItem",
    Name: "Walkürenhelm",
    FileName: "3dicons/museum/icon_museum_viking_valkyrie_helmet.png",
    Rarity: "Legendary",
    RarityValue: 4,
    AttractiveNess: 50,
    ItemSet: 191131,
    Allocation: "Museum",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Faith", Amount: 15}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 192947,
    Type: "CultureItem",
    Name: "Morticromicron",
    FileName: "3dicons/museum/icon_tablet.png",
    Rarity: "Legendary",
    RarityValue: 4,
    AttractiveNess: 50,
    Allocation: "Museum",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Melee", Amount: 50},
        {Attribute: "Faith", Amount: -30}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190284,
    Type: "TownhallItem",
    Name: "Königliche Erlaubnis",
    FileName: "3dicons/icon_settlement_rights_1.png",
    Rarity: "Common",
    RarityValue: 0,
    Allocation: "None",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190615,
    Type: "GuildhouseItem",
    Name: "Fischerin",
    FileName: "3dicons/specialists/systemic/icon_fisher_401.png",
    Rarity: "Common",
    RarityValue: 0,
    Productivity: 10,
    Allocation: "HarborOffice",
    EffectTargets: [
      {GUID: 190779}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Hunting", Amount: 10}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190616,
    Type: "GuildhouseItem",
    Name: "Taucher",
    FileName: "3dicons/specialists/systemic/icon_pearl_diver_102.png",
    Rarity: "Common",
    RarityValue: 0,
    Productivity: 10,
    Allocation: "HarborOffice",
    EffectTargets: [
      {GUID: 1010339}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Hunting", Amount: 10},
        {Attribute: "PerkFormerPirate", Amount: 1}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190617,
    Type: "GuildhouseItem",
    Name: "Angler",
    FileName: "3dicons/specialists/systemic/icon_fisherman_101_b.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    MaintenanceUpgrade: -75,
    Allocation: "HarborOffice",
    EffectTargets: [
      {GUID: 190779}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Hunting", Amount: 20}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190618,
    Type: "GuildhouseItem",
    Name: "Perlentaucher",
    FileName: "3dicons/specialists/systemic/icon_pearl_diver_101.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    Workforce: -50,
    Allocation: "HarborOffice",
    EffectTargets: [
      {GUID: 1010339}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Hunting", Amount: 20},
        {Attribute: "PerkDiver", Amount: 1}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190619,
    Type: "GuildhouseItem",
    Name: "Alter Walfänger",
    FileName: "3dicons/specialists/systemic/icon_fisherman_102.png",
    Rarity: "Rare",
    RarityValue: 2,
    MaintenanceUpgrade: -25,
    Allocation: "HarborOffice",
    EffectTargets: [
      {GUID: 190779}
    ],
    AdditionalOutput: [
      {Product: 1010234, Cycle: 5, Amount: 1}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Hunting", Amount: 30},
        {Attribute: "Navigation", Amount: 10},
        {Attribute: "PerkDiver", Amount: 1}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190620,
    Type: "GuildhouseItem",
    Name: "Wagemutiger Tiefseetaucher",
    FileName: "3dicons/specialists/systemic/icon_pearl_diver_201.png",
    Rarity: "Rare",
    RarityValue: 2,
    Productivity: 30,
    Allocation: "HarborOffice",
    EffectTargets: [
      {GUID: 1010339}
    ],
    AdditionalOutput: [
      {Product: 120042, Cycle: 5, Amount: 1}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Hunting", Amount: 30},
        {Attribute: "Navigation", Amount: 10},
        {Attribute: "PerkDiver", Amount: 1}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190621,
    Type: "GuildhouseItem",
    Name: "Perlenmutter",
    FileName: "3dicons/specialists/systemic/icon_worker_414.png",
    Rarity: "Epic",
    RarityValue: 3,
    Productivity: 40,
    Allocation: "HarborOffice",
    EffectTargets: [
      {GUID: 190779},
      {GUID: 1010339}
    ],
    AdditionalOutput: [
      {Product: 1010234, Cycle: 4, Amount: 1}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Hunting", Amount: 40},
        {Attribute: "Crafting", Amount: 20},
        {Attribute: "PerkDiver", Amount: 1}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190622,
    Type: "GuildhouseItem",
    Name: "Kapitän Moby, der alte Seebär",
    FileName: "3dicons/specialists/systemic/icon_navigator_102.png",
    Rarity: "Legendary",
    RarityValue: 4,
    Productivity: 50,
    Allocation: "HarborOffice",
    EffectTargets: [
      {GUID: 190779},
      {GUID: 1010339}
    ],
    AdditionalOutput: [
      {Product: 1010234, Cycle: 5, Amount: 1},
      {Product: 1010249, Cycle: 7, Amount: 1}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Hunting", Amount: 50},
        {Attribute: "Navigation", Amount: 30},
        {Attribute: "Might", Amount: 10},
        {Attribute: "PerkZoologist", Amount: 1}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190623,
    Type: "GuildhouseItem",
    Name: "Juwelier",
    FileName: "3dicons/specialists/systemic/icon_normal_dressed_106.png",
    Rarity: "Common",
    RarityValue: 0,
    Productivity: 10,
    EffectTargets: [
      {GUID: 1010328}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Crafting", Amount: 10}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190624,
    Type: "GuildhouseItem",
    Name: "Edelsteinschleiferin",
    FileName: "3dicons/specialists/systemic/icon_normal_dressed_401.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    Productivity: 10,
    MaintenanceUpgrade: -5,
    EffectTargets: [
      {GUID: 1010328}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Crafting", Amount: 20}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190625,
    Type: "GuildhouseItem",
    Name: "Illustrer Gemmologe",
    FileName: "3dicons/specialists/systemic/icon_normal_dressed_206.png",
    Rarity: "Rare",
    RarityValue: 2,
    AttractiveNess: 3,
    EffectTargets: [
      {GUID: 1010328}
    ],
    ReplaceInputs: [
      {OldInput: 1010249, NewInput: 1010233}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Crafting", Amount: 30},
        {Attribute: "Diplomacy", Amount: 10}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190626,
    Type: "GuildhouseItem",
    Name: "Goldschmied Gilbert",
    FileName: "3dicons/specialists/systemic/icon_normal_dressed_201_c.png",
    Rarity: "Epic",
    RarityValue: 3,
    AttractiveNess: 5,
    EffectTargets: [
      {GUID: 1010328}
    ],
    ReplaceInputs: [
      {OldInput: 1010249, NewInput: 1010233}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Crafting", Amount: 40},
        {Attribute: "Diplomacy", Amount: 20}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190627,
    Type: "GuildhouseItem",
    Name: "François Strindberg, Juwelier der Krone",
    FileName: "3dicons/specialists/systemic/icon_well_dressed_106.png",
    Rarity: "Legendary",
    RarityValue: 4,
    Productivity: 50,
    EffectTargets: [
      {GUID: 1010328}
    ],
    AdditionalOutput: [
      {Product: 1010246, Cycle: 4, Amount: 1}
    ],
    InputAmountUpgrade: [
      {Product: 1010256, Amount: -1}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Crafting", Amount: 50},
        {Attribute: "Diplomacy", Amount: 30}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190628,
    Type: "GuildhouseItem",
    Name: "Bäcker",
    FileName: "3dicons/specialists/systemic/icon_baker_101.png",
    Rarity: "Common",
    RarityValue: 0,
    EffectTargets: [
      {GUID: 1010291}
    ],
    ReplaceInputs: [
      {OldInput: 1010235, NewInput: 1010192}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Crafting", Amount: 10}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190629,
    Type: "GuildhouseItem",
    Name: "Konditor",
    FileName: "3dicons/specialists/systemic/icon_baker_202_b.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    MaintenanceUpgrade: -50,
    EffectTargets: [
      {GUID: 1010291}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Crafting", Amount: 20}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190630,
    Type: "GuildhouseItem",
    Name: "Tortenkünstlerin",
    FileName: "3dicons/specialists/systemic/icon_baker_401_b.png",
    Rarity: "Rare",
    RarityValue: 2,
    Productivity: 30,
    EffectTargets: [
      {GUID: 1010291}
    ],
    AdditionalOutput: [
      {Product: 1010258, Cycle: 5, Amount: 1}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Crafting", Amount: 30},
        {Attribute: "Faith", Amount: 10}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190631,
    Type: "GuildhouseItem",
    Name: "Pâtissier Patrice",
    FileName: "3dicons/specialists/systemic/icon_baker_201.png",
    Rarity: "Epic",
    RarityValue: 3,
    Productivity: 40,
    AttractiveNess: 5,
    EffectTargets: [
      {GUID: 1010291}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Crafting", Amount: 40},
        {Attribute: "Melee", Amount: 20}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190632,
    Type: "GuildhouseItem",
    Name: "Marie-Antoine, Pâtissier Royale",
    FileName: "3dicons/specialists/systemic/icon_baker_102.png",
    Rarity: "Legendary",
    RarityValue: 4,
    Productivity: 50,
    EffectTargets: [
      {GUID: 1010291}
    ],
    AdditionalOutput: [
      {Product: 120014, Cycle: 6, Amount: 1},
      {Product: 1010258, Cycle: 5, Amount: 1}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Crafting", Amount: 50},
        {Attribute: "Diplomacy", Amount: 20}
      ]
    },
    LastChange: "2020-06-02T12:37:16.000Z"
  },
  {
    GUID: 190639,
    Type: "GuildhouseItem",
    Name: "Roller",
    FileName: "3dicons/specialists/systemic/icon_torcedor_709.png",
    Rarity: "Common",
    RarityValue: 0,
    Productivity: 10,
    EffectTargets: [
      {GUID: 1010342},
      {GUID: 101260},
      {GUID: 101296},
      {GUID: 1010330}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Crafting", Amount: 10}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190640,
    Type: "GuildhouseItem",
    Name: "Tabakblender",
    FileName: "3dicons/specialists/systemic/icon_torcedor_511.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    MaintenanceUpgrade: -30,
    EffectTargets: [
      {GUID: 1010342}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Crafting", Amount: 20}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190641,
    Type: "GuildhouseItem",
    Name: "Zigarrenkenner",
    FileName: "3dicons/specialists/systemic/icon_torcedor_703.png",
    Rarity: "Rare",
    RarityValue: 2,
    Productivity: 30,
    Workforce: -30,
    EffectTargets: [
      {GUID: 1010342}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Crafting", Amount: 30}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190642,
    Type: "GuildhouseItem",
    Name: "Torcedor Lucia",
    FileName: "3dicons/specialists/systemic/icon_teacher_805.png",
    Rarity: "Epic",
    RarityValue: 3,
    Productivity: 40,
    EffectTargets: [
      {GUID: 1010342}
    ],
    ReplaceInputs: [
      {OldInput: 1010242, NewInput: 1010196}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Crafting", Amount: 40},
        {Attribute: "Medicine", Amount: 10}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190643,
    Type: "GuildhouseItem",
    Name: "Victor Perfecto, Vater der Zigarren",
    FileName: "3dicons/specialists/systemic/icon_torcedor_512.png",
    Rarity: "Legendary",
    RarityValue: 4,
    MaintenanceUpgrade: -100,
    AttractiveNess: 7,
    ReplaceWorkforce: 1010366,
    EffectTargets: [
      {GUID: 1010342}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Crafting", Amount: 50},
        {Attribute: "Hunting", Amount: 20}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190644,
    Type: "GuildhouseItem",
    Name: "Rumbrennerin",
    FileName: "3dicons/specialists/systemic/icon_worker_406.png",
    Rarity: "Common",
    RarityValue: 0,
    Productivity: 10,
    EffectTargets: [
      {GUID: 1010340},
      {GUID: 101260},
      {GUID: 1010329},
      {GUID: 124737}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Medicine", Amount: 10}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 190645,
    Type: "GuildhouseItem",
    Name: "Kellermeister",
    FileName: "3dicons/specialists/systemic/icon_sommelier_101.png",
    Rarity: "Common",
    RarityValue: 0,
    Workforce: -25,
    EffectTargets: [
      {GUID: 100659}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Medicine", Amount: 10}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190646,
    Type: "GuildhouseItem",
    Name: "Rumblender",
    FileName: "3dicons/specialists/systemic/icon_well_dressed_203.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    MaintenanceUpgrade: -10,
    EffectTargets: [
      {GUID: 1010340},
      {GUID: 124737}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Medicine", Amount: 20}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 190647,
    Type: "GuildhouseItem",
    Name: "Sektverkoster",
    FileName: "3dicons/specialists/systemic/icon_sommelier_201.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    Productivity: 20,
    EffectTargets: [
      {GUID: 100659}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Medicine", Amount: 20}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190648,
    Type: "GuildhouseItem",
    Name: "Angesehene Önologin",
    FileName: "3dicons/specialists/systemic/icon_sommelier_401.png",
    Rarity: "Rare",
    RarityValue: 2,
    Productivity: 20,
    MaintenanceUpgrade: -15,
    AttractiveNess: 3,
    EffectTargets: [
      {GUID: 100659},
      {GUID: 1010340},
      {GUID: 124737}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Medicine", Amount: 30},
        {Attribute: "Diplomacy", Amount: 10}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 190649,
    Type: "GuildhouseItem",
    Name: "Sommelier Raymond",
    FileName: "3dicons/specialists/systemic/icon_sommelier_318.png",
    Rarity: "Epic",
    RarityValue: 3,
    Productivity: 40,
    AttractiveNess: 5,
    EffectTargets: [
      {GUID: 100659},
      {GUID: 1010340},
      {GUID: 124737}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Medicine", Amount: 40}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 190650,
    Type: "GuildhouseItem",
    Name: "Mme. Elise „die Nase“ Bouquet",
    FileName: "3dicons/specialists/systemic/icon_sommelier_824.png",
    Rarity: "Legendary",
    RarityValue: 4,
    Productivity: 50,
    AttractiveNess: 7,
    EffectTargets: [
      {GUID: 100659},
      {GUID: 1010340},
      {GUID: 124737}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Medicine", Amount: 50},
        {Attribute: "Crafting", Amount: 10},
        {Attribute: "Faith", Amount: 10}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 190651,
    Type: "GuildhouseItem",
    Name: "Wasserträgerin",
    FileName: "3dicons/specialists/systemic/icon_firebrigade_401.png",
    Rarity: "Common",
    RarityValue: 0,
    IncidentFireIncreaseUpgrade: -2,
    Allocation: "TownHall",
    EffectTargets: [
      {GUID: 190762}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Medicine", Amount: 5}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190652,
    Type: "GuildhouseItem",
    Name: "Freiwilliger Feuerwehrmann",
    FileName: "3dicons/specialists/systemic/icon_fireman_101.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    AdditionalHappiness: 5,
    Allocation: "TownHall",
    EffectTargets: [
      {GUID: 190762}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Medicine", Amount: 10}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190653,
    Type: "TownhallItem",
    Name: "Erfahrener Feuerwehrmann",
    FileName: "3dicons/specialists/systemic/icon_fireman_102.png",
    Rarity: "Rare",
    RarityValue: 2,
    ResolverUnitMovementSpeedUpgrade: 10,
    EffectTargets: [
      {GUID: 190775}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Medicine", Amount: 15},
        {Attribute: "Melee", Amount: 5}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190656,
    Type: "GuildhouseItem",
    Name: "Brandmeister Mills",
    FileName: "3dicons/specialists/systemic/icon_fireman_104.png",
    Rarity: "Epic",
    RarityValue: 3,
    ResolverUnitCountUpgrade: 1,
    Allocation: "TownHall",
    EffectTargets: [
      {GUID: 190775}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Medicine", Amount: 20},
        {Attribute: "Melee", Amount: 10}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190658,
    Type: "GuildhouseItem",
    Name: "Feuerwehrchef George „Drachenfeuer“ Doughty",
    FileName: "3dicons/specialists/systemic/icon_fireman_105.png",
    Rarity: "Legendary",
    RarityValue: 4,
    ResidentsUpgrade: 10,
    AdditionalHappiness: 10,
    IncidentFireIncreaseUpgrade: -5,
    Allocation: "TownHall",
    EffectTargets: [
      {GUID: 193957}
    ],
    InputBenefitModifier: [
      {Product: 120020},
      {Product: 1010213},
      {Product: 1010206},
      {Product: 1010353},
      {Product: 120030},
      {Product: 1010208},
      {Product: 120016},
      {Product: 1010225},
      {Product: 1010258}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Medicine", Amount: 25},
        {Attribute: "Melee", Amount: 10},
        {Attribute: "Crafting", Amount: 10}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 190664,
    Type: "HarborOfficeItem",
    Name: "Rabauke",
    FileName: "3dicons/specialists/systemic/icon_custom_officer_101.png",
    Rarity: "Common",
    RarityValue: 0,
    EffectTargets: [
      {GUID: 193897}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Diplomacy", Amount: 10}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 190665,
    Type: "HarborOfficeItem",
    Name: "Betrüger",
    FileName: "3dicons/specialists/systemic/icon_custom_officer_201.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    EffectTargets: [
      {GUID: 193897}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Diplomacy", Amount: 20}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 190666,
    Type: "HarborOfficeItem",
    Name: "Ausgebuffte Zollbeamtin",
    FileName: "3dicons/specialists/systemic/icon_custom_officer.png",
    Rarity: "Rare",
    RarityValue: 2,
    EffectTargets: [
      {GUID: 193897}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Diplomacy", Amount: 30},
        {Attribute: "Melee", Amount: 10}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 190667,
    Type: "HarborOfficeItem",
    Name: "Tim der Steuereintreiber",
    FileName: "3dicons/specialists/systemic/icon_custom_officer_103.png",
    Rarity: "Epic",
    RarityValue: 3,
    EffectTargets: [
      {GUID: 190797}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Diplomacy", Amount: 40},
        {Attribute: "Melee", Amount: 20}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190668,
    Type: "HarborOfficeItem",
    Name: "Lady Banes, Verfechterin des Protektionismus",
    FileName: "3dicons/specialists/systemic/icon_captain_401_b.png",
    Rarity: "Legendary",
    RarityValue: 4,
    EffectTargets: [
      {GUID: 190797}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Diplomacy", Amount: 55},
        {Attribute: "Melee", Amount: 25}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190669,
    Type: "TownhallItem",
    Name: "Schankwirt",
    FileName: "3dicons/specialists/systemic/icon_worker_104.png",
    Rarity: "Common",
    RarityValue: 0,
    AdditionalHappiness: 3,
    EffectTargets: [
      {GUID: 190762}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Diplomacy", Amount: 10}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190671,
    Type: "TownhallItem",
    Name: "Wirtin",
    FileName: "3dicons/specialists/systemic/icon_bartender_323.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    PublicServiceFullSatisfactionDistance: 12,
    PublicServiceNoSatisfactionDistance: 12,
    PublicServiceDistance: 12,
    EffectTargets: [
      {GUID: 190782}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Diplomacy", Amount: 20}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190672,
    Type: "TownhallItem",
    Name: "Großzügiger Gastwirt",
    FileName: "3dicons/specialists/systemic/icon_normal_dressed_201_b.png",
    Rarity: "Rare",
    RarityValue: 2,
    EffectTargets: [
      {GUID: 190762}
    ],
    InputBenefitModifier: [
      {Product: 1010358, AdditionalMoney: 2}
    ],
    NeedProvideNeedUpgrade: [
      {ProvidedNeed: 1010350, SubstituteNeed: 1010349}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Diplomacy", Amount: 20},
        {Attribute: "Melee", Amount: 15}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190673,
    Type: "TownhallItem",
    Name: "Bierstubenwirt Mertens",
    FileName: "3dicons/specialists/systemic/icon_normal_dressed_206_b.png",
    Rarity: "Epic",
    RarityValue: 3,
    EffectTargets: [
      {GUID: 190762}
    ],
    NeedProvideNeedUpgrade: [
      {ProvidedNeed: 1010238, SubstituteNeed: 1010349},
      {ProvidedNeed: 1010213, SubstituteNeed: 1010349},
      {ProvidedNeed: 1010214, SubstituteNeed: 1010349},
      {ProvidedNeed: 1010350, SubstituteNeed: 1010349}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Diplomacy", Amount: 25},
        {Attribute: "Navigation", Amount: 15}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190674,
    Type: "TownhallItem",
    Name: "Franck von Lewenstein, Gastronom",
    FileName: "3dicons/specialists/systemic/icon_well_dressed_201.png",
    Rarity: "Legendary",
    RarityValue: 4,
    EffectTargets: [
      {GUID: 190762}
    ],
    InputBenefitModifier: [
      {Product: 1010349, AdditionalHappiness: 5, AdditionalMoney: 5}
    ],
    NeedProvideNeedUpgrade: [
      {ProvidedNeed: 1010214, SubstituteNeed: 1010349}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Diplomacy", Amount: 30},
        {Attribute: "Hunting", Amount: 25}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190675,
    Type: "TownhallItem",
    Name: "Kamerad",
    FileName: "3dicons/specialists/systemic/icon_professor_710.png",
    Rarity: "Common",
    RarityValue: 0,
    TaxModifierInPercent: 5,
    EffectTargets: [
      {GUID: 190762}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Diplomacy", Amount: 10}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190676,
    Type: "TownhallItem",
    Name: "Gelehrte",
    FileName: "3dicons/specialists/systemic/icon_well_dressed_407.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    WorkforceModifierInPercent: 10,
    EffectTargets: [
      {GUID: 190762}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Diplomacy", Amount: 20},
        {Attribute: "PerkZoologist", Amount: 1}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190677,
    Type: "TownhallItem",
    Name: "Dozentin",
    FileName: "3dicons/specialists/systemic/icon_normal_dressed_404.png",
    Rarity: "Rare",
    RarityValue: 2,
    WorkforceModifierInPercent: 15,
    EffectTargets: [
      {GUID: 190762}
    ],
    NeedProvideNeedUpgrade: [
      {ProvidedNeed: 1010352, SubstituteNeed: 1010353}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Diplomacy", Amount: 30},
        {Attribute: "Medicine", Amount: 10},
        {Attribute: "PerkArcheologist", Amount: 1}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190678,
    Type: "TownhallItem",
    Name: "Professor Razzaq",
    FileName: "3dicons/specialists/systemic/icon_normal_dressed_205.png",
    Rarity: "Epic",
    RarityValue: 3,
    AttractiveNess: 15,
    PublicServiceFullSatisfactionDistance: 17,
    PublicServiceNoSatisfactionDistance: 17,
    PublicServiceDistance: 17,
    EffectTargets: [
      {GUID: 1010362}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Diplomacy", Amount: 40},
        {Attribute: "Medicine", Amount: 20},
        {Attribute: "PerkAnthropologist", Amount: 1}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190679,
    Type: "TownhallItem",
    Name: "Prof. Iwa Ebashi, Pionier des Radioaktiven",
    FileName: "3dicons/specialists/systemic/icon_normal_dressed_405.png",
    Rarity: "Legendary",
    RarityValue: 4,
    IncidentIllnessIncreaseUpgrade: -5,
    EffectTargets: [
      {GUID: 190762}
    ],
    InputBenefitModifier: [
      {Product: 1010353, AdditionalHappiness: 5, AdditionalMoney: 5}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Diplomacy", Amount: 50},
        {Attribute: "Medicine", Amount: 30}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190680,
    Type: "HarborOfficeItem",
    Name: "Fremdenführerin",
    FileName: "3dicons/specialists/systemic/icon_normal_dressed_401.png",
    Rarity: "Common",
    RarityValue: 0,
    AttractiveNess: 15,
    EffectTargets: [
      {GUID: 191563}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Navigation", Amount: 10}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190681,
    Type: "HarborOfficeItem",
    Name: "Souvenirverkäuferin",
    FileName: "3dicons/specialists/systemic/icon_normaldress_303.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    MaintenanceUpgrade: -25,
    AttractiveNess: 15,
    EffectTargets: [
      {GUID: 191563}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Diplomacy", Amount: 20}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190682,
    Type: "HarborOfficeItem",
    Name: "Reiseveranstalterin",
    FileName: "3dicons/specialists/systemic/icon_travelagent_827.png",
    Rarity: "Rare",
    RarityValue: 2,
    AttractiveNess: 20,
    VisitorSpawnProbability: 7,
    EffectTargets: [
      {GUID: 191563}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Navigation", Amount: 30},
        {Attribute: "Diplomacy", Amount: 10}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190683,
    Type: "HarborOfficeItem",
    Name: "Jaafan der Kreuzfahrt-Impresario",
    FileName: "3dicons/specialists/systemic/icon_travelagent_712.png",
    Rarity: "Epic",
    RarityValue: 3,
    MaintenanceUpgrade: -50,
    VisitorSpawnProbability: 10,
    EffectTargets: [
      {GUID: 191563}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Navigation", Amount: 40},
        {Attribute: "Diplomacy", Amount: 20}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190684,
    Type: "HarborOfficeItem",
    Name: "Thomasina Langton, Promoter der Extraklasse!",
    FileName: "3dicons/specialists/systemic/icon_travelagent_829.png",
    Rarity: "Legendary",
    RarityValue: 4,
    MaintenanceUpgrade: -100,
    AttractiveNess: 25,
    VisitorSpawnProbability: 15,
    EffectTargets: [
      {GUID: 191563}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Diplomacy", Amount: 50},
        {Attribute: "Navigation", Amount: 30}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190686,
    Type: "GuildhouseItem",
    Name: "Pflückerin",
    FileName: "3dicons/specialists/systemic/icon_bartender_813.png",
    Rarity: "Common",
    RarityValue: 0,
    Productivity: 7,
    EffectTargets: [
      {GUID: 1010332},
      {GUID: 1010333},
      {GUID: 1010331},
      {GUID: 101251},
      {GUID: 101263}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Crafting", Amount: 10}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190685,
    Type: "GuildhouseItem",
    Name: "Erntearbeiter",
    FileName: "3dicons/specialists/systemic/icon_mason_718.png",
    Rarity: "Common",
    RarityValue: 0,
    Productivity: 7,
    EffectTargets: [
      {GUID: 1010329},
      {GUID: 1010330},
      {GUID: 101270}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Crafting", Amount: 10}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190687,
    Type: "GuildhouseItem",
    Name: "Ackerbäuerin",
    FileName: "3dicons/specialists/systemic/icon_farmer_818.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    Productivity: 12,
    EffectTargets: [
      {GUID: 1010329},
      {GUID: 1010330},
      {GUID: 101270}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Crafting", Amount: 20}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190688,
    Type: "GuildhouseItem",
    Name: "Baumchirurg",
    FileName: "3dicons/specialists/systemic/icon_farmer_106.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    Productivity: 12,
    EffectTargets: [
      {GUID: 1010332},
      {GUID: 1010333},
      {GUID: 1010331},
      {GUID: 101251},
      {GUID: 101263}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Crafting", Amount: 20}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190689,
    Type: "GuildhouseItem",
    Name: "Bodenkundler",
    FileName: "3dicons/specialists/systemic/icon_farmer_201.png",
    Rarity: "Rare",
    RarityValue: 2,
    Productivity: 15,
    EffectTargets: [
      {GUID: 1010329},
      {GUID: 1010330},
      {GUID: 101270}
    ],
    AdditionalOutput: [
      {Product: 1010254, Cycle: 5, Amount: 1}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Crafting", Amount: 30}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190690,
    Type: "GuildhouseItem",
    Name: "Baumpflegerin",
    FileName: "3dicons/specialists/systemic/icon_farmer_403.png",
    Rarity: "Rare",
    RarityValue: 2,
    Productivity: 15,
    ModuleLimit: -10,
    EffectTargets: [
      {GUID: 1010332},
      {GUID: 1010333},
      {GUID: 1010331},
      {GUID: 101251},
      {GUID: 101263}
    ],
    AdditionalOutput: [
      {Product: 1010252, Cycle: 5, Amount: 1}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Crafting", Amount: 30}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190691,
    Type: "GuildhouseItem",
    Name: "Mrs. Brown die Landwirtin",
    FileName: "3dicons/specialists/systemic/icon_normaldress_308.png",
    Rarity: "Epic",
    RarityValue: 3,
    Productivity: 20,
    EffectTargets: [
      {GUID: 1010329},
      {GUID: 1010330},
      {GUID: 101270}
    ],
    AdditionalOutput: [
      {Product: 1010254, Cycle: 11, Amount: 1},
      {Product: 1010255, Cycle: 12, Amount: 1},
      {Product: 1010253, Cycle: 13, Amount: 1}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Crafting", Amount: 40}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190692,
    Type: "GuildhouseItem",
    Name: "Gartenbauer Hermann",
    FileName: "3dicons/specialists/systemic/icon_farmer_105.png",
    Rarity: "Epic",
    RarityValue: 3,
    Productivity: 20,
    ModuleLimit: -20,
    EffectTargets: [
      {GUID: 1010332},
      {GUID: 1010333},
      {GUID: 1010331},
      {GUID: 101251},
      {GUID: 101263}
    ],
    AdditionalOutput: [
      {Product: 1010198, Cycle: 12, Amount: 1},
      {Product: 1010195, Cycle: 11, Amount: 1},
      {Product: 120014, Cycle: 13, Amount: 1}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Crafting", Amount: 40}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190693,
    Type: "GuildhouseItem",
    Name: "Dr. Ali Al-Zahir, Botanischer Direktor",
    FileName: "3dicons/specialists/systemic/icon_farmer_102_b.png",
    Rarity: "Legendary",
    RarityValue: 4,
    Productivity: 30,
    AttractiveNess: 7,
    EffectTargets: [
      {GUID: 191472}
    ],
    AdditionalOutput: [
      {Product: 1010198, Cycle: 16, Amount: 1},
      {Product: 1010195, Cycle: 13, Amount: 1},
      {Product: 120014, Cycle: 17, Amount: 1},
      {Product: 1010192, Cycle: 14, Amount: 1},
      {Product: 1010194, Cycle: 15, Amount: 1}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Crafting", Amount: 50}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190694,
    Type: "HarborOfficeItem",
    Name: "Zimmermann",
    FileName: "3dicons/specialists/systemic/icon_carpenter_722.png",
    Rarity: "Common",
    RarityValue: 0,
    MaintenanceUpgrade: -25,
    EffectTargets: [
      {GUID: 190783}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Crafting", Amount: 10}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190695,
    Type: "HarborOfficeItem",
    Name: "Schiffsbauer",
    FileName: "3dicons/specialists/systemic/icon_worker_205.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    Workforce: -30,
    EffectTargets: [
      {GUID: 190783}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Crafting", Amount: 20}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190696,
    Type: "HarborOfficeItem",
    Name: "Schiffsbaumeister",
    FileName: "3dicons/specialists/systemic/icon_worker_206.png",
    Rarity: "Rare",
    RarityValue: 2,
    MaintenanceUpgrade: -50,
    EffectTargets: [
      {GUID: 190783}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Crafting", Amount: 30},
        {Attribute: "Navigation", Amount: 10}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190697,
    Type: "HarborOfficeItem",
    Name: "Mr. Swell der Hydrodynamiker",
    FileName: "3dicons/specialists/systemic/icon_normal_dressed_107.png",
    Rarity: "Epic",
    RarityValue: 3,
    Workforce: -40,
    EffectTargets: [
      {GUID: 190783}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Crafting", Amount: 40},
        {Attribute: "Navigation", Amount: 20}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190698,
    Type: "HarborOfficeItem",
    Name: "Rohit Bhargava der Schiffsbaumeister",
    FileName: "3dicons/specialists/systemic/icon_architect_501.png",
    Rarity: "Legendary",
    RarityValue: 4,
    Workforce: -50,
    MaintenanceUpgrade: -80,
    EffectTargets: [
      {GUID: 190783}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Crafting", Amount: 50},
        {Attribute: "Navigation", Amount: 30}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 192457,
    Type: "HarborOfficeItem",
    Name: "Gideon Small, Guru der Piraten-Kanonenboote",
    FileName: "3dicons/specialists/pirates/icon_pirate_gunboat_151.png",
    Rarity: "Legendary",
    RarityValue: 4,
    EffectTargets: [
      {GUID: 192466}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Crafting", Amount: 50},
        {Attribute: "Navigation", Amount: 30}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 192458,
    Type: "HarborOfficeItem",
    Name: "Petra Piper, Schöpferin von Piraten-Fregatten",
    FileName: "3dicons/specialists/pirates/icon_petra_651.png",
    Rarity: "Legendary",
    RarityValue: 4,
    EffectTargets: [
      {GUID: 192466}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Crafting", Amount: 50},
        {Attribute: "Navigation", Amount: 30}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 192459,
    Type: "HarborOfficeItem",
    Name: "Shih Yang, Erbauer von Piraten-Linienschiffen",
    FileName: "3dicons/specialists/pirates/icon_shih_yang_150.png",
    Rarity: "Legendary",
    RarityValue: 4,
    EffectTargets: [
      {GUID: 192466}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Crafting", Amount: 50},
        {Attribute: "Navigation", Amount: 30}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 192460,
    Type: "HarborOfficeItem",
    Name: "Maria Pizarro, Herstellerin von Piraten-Monitoren",
    FileName: "3dicons/specialists/pirates/icon_maria_351.png",
    Rarity: "Legendary",
    RarityValue: 4,
    EffectTargets: [
      {GUID: 1010521}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Crafting", Amount: 50},
        {Attribute: "Navigation", Amount: 30}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 192461,
    Type: "HarborOfficeItem",
    Name: "Stilton Snood, Vater pyrphorischer Monitore",
    FileName: "3dicons/specialists/pirates/icon_stilton_252.png",
    Rarity: "Legendary",
    RarityValue: 4,
    EffectTargets: [
      {GUID: 1010521}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Crafting", Amount: 50},
        {Attribute: "Navigation", Amount: 30}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 192462,
    Type: "HarborOfficeItem",
    Name: "Suspicia Slyhood, Anfertigerin pyrphorischer Schlachtkreuzer",
    FileName: "3dicons/specialists/pirates/icon_suspicia_650.png",
    Rarity: "Legendary",
    RarityValue: 4,
    EffectTargets: [
      {GUID: 1010521}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Crafting", Amount: 50},
        {Attribute: "Navigation", Amount: 30}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 192463,
    Type: "HarborOfficeItem",
    Name: "Slinky Sinistra, Erfinder pyrphorischer Kriegsschiffe",
    FileName: "3dicons/specialists/pirates/icon_sinistra_250.png",
    Rarity: "Legendary",
    RarityValue: 4,
    EffectTargets: [
      {GUID: 1010521}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Crafting", Amount: 50},
        {Attribute: "Navigation", Amount: 30}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 192464,
    Type: "HarborOfficeItem",
    Name: "Sir Milfoy Credenza-Belfry-Guscott, Schiffsbauer Ihrer Majestät",
    FileName: "3dicons/specialists/pirates/icon_guscott_251.png",
    Rarity: "Legendary",
    RarityValue: 4,
    EffectTargets: [
      {GUID: 192466}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Crafting", Amount: 50},
        {Attribute: "Navigation", Amount: 30}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 192465,
    Type: "HarborOfficeItem",
    Name: "Anna Union, Ingenieurin extravaganter Dampfer",
    FileName: "3dicons/specialists/pirates/icon_anna_350.png",
    Rarity: "Legendary",
    RarityValue: 4,
    EffectTargets: [
      {GUID: 1010521}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Crafting", Amount: 50},
        {Attribute: "Navigation", Amount: 30}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190699,
    Type: "GuildhouseItem",
    Name: "Kesselmacher",
    FileName: "3dicons/specialists/icon_craftsman_common.png",
    Rarity: "Common",
    RarityValue: 0,
    MaintenanceUpgrade: -30,
    EffectTargets: [
      {GUID: 1010296}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Crafting", Amount: 10}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190700,
    Type: "GuildhouseItem",
    Name: "Schweißerin",
    FileName: "3dicons/specialists/systemic/icon_worker_401.png",
    Rarity: "Common",
    RarityValue: 0,
    MaintenanceUpgrade: -30,
    EffectTargets: [
      {GUID: 1010299},
      {GUID: 1010301}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Crafting", Amount: 10}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190701,
    Type: "GuildhouseItem",
    Name: "Eisengießer",
    FileName: "3dicons/specialists/systemic/icon_worker_208.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    Productivity: 20,
    EffectTargets: [
      {GUID: 1010296},
      {GUID: 1010305},
      {GUID: 1010304},
      {GUID: 1010298},
      {GUID: 1010297}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Crafting", Amount: 20}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190702,
    Type: "GuildhouseItem",
    Name: "Eisenschmied",
    FileName: "3dicons/specialists/systemic/icon_worker_210.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    Productivity: 20,
    EffectTargets: [
      {GUID: 1010299},
      {GUID: 1010301}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Crafting", Amount: 20}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190703,
    Type: "GuildhouseItem",
    Name: "Stahläugiger Stahlschmied",
    FileName: "3dicons/specialists/systemic/icon_worker_203.png",
    Rarity: "Rare",
    RarityValue: 2,
    Productivity: 30,
    MaintenanceUpgrade: 50,
    AttractiveNess: -50,
    AttractiveNessPercental: 1,
    EffectTargets: [
      {GUID: 1010296},
      {GUID: 1010299},
      {GUID: 1010301}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Crafting", Amount: 30},
        {Attribute: "Melee", Amount: 10}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190704,
    Type: "GuildhouseItem",
    Name: "Meisterin der Schmieden",
    FileName: "3dicons/specialists/systemic/icon_worker_410.png",
    Rarity: "Epic",
    RarityValue: 3,
    Productivity: 40,
    Workforce: -25,
    EffectTargets: [
      {GUID: 1010296},
      {GUID: 1010299},
      {GUID: 1010301}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Crafting", Amount: 40},
        {Attribute: "Melee", Amount: 10}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190705,
    Type: "GuildhouseItem",
    Name: "Henri Zanchi, Mann des Stahls",
    FileName: "3dicons/specialists/systemic/icon_well_dressed_111.png",
    Rarity: "Legendary",
    RarityValue: 4,
    Productivity: 50,
    Workforce: -25,
    MaintenanceUpgrade: -75,
    AttractiveNess: -50,
    AttractiveNessPercental: 1,
    EffectTargets: [
      {GUID: 1010296},
      {GUID: 1010299},
      {GUID: 1010301}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Crafting", Amount: 50},
        {Attribute: "Melee", Amount: 15},
        {Attribute: "PerkMilitaryShip", Amount: 1}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190711,
    Type: "GuildhouseItem",
    Name: "Abbé",
    FileName: "3dicons/specialists/systemic/icon_priest_201.png",
    Rarity: "Common",
    RarityValue: 0,
    PublicServiceFullSatisfactionDistance: 10,
    PublicServiceNoSatisfactionDistance: 10,
    PublicServiceDistance: 10,
    Allocation: "TownHall",
    EffectTargets: [
      {GUID: 190784}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Faith", Amount: 10}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190712,
    Type: "GuildhouseItem",
    Name: "Priester",
    FileName: "3dicons/specialists/systemic/icon_priest_517.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    MaintenanceUpgrade: -100,
    Allocation: "TownHall",
    EffectTargets: [
      {GUID: 190784}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Faith", Amount: 20}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190716,
    Type: "GuildhouseItem",
    Name: "Barmherzige Bischöfin",
    FileName: "3dicons/specialists/systemic/icon_priest_401.png",
    Rarity: "Rare",
    RarityValue: 2,
    AttractiveNess: 7,
    PublicServiceFullSatisfactionDistance: 15,
    PublicServiceNoSatisfactionDistance: 15,
    PublicServiceDistance: 15,
    Allocation: "TownHall",
    EffectTargets: [
      {GUID: 190784}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Faith", Amount: 30},
        {Attribute: "Medicine", Amount: 10}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190717,
    Type: "GuildhouseItem",
    Name: "Erz-Erzbischof Archibald",
    FileName: "3dicons/specialists/systemic/icon_priest_715.png",
    Rarity: "Epic",
    RarityValue: 3,
    Allocation: "TownHall",
    EffectTargets: [
      {GUID: 190762}
    ],
    NeedProvideNeedUpgrade: [
      {ProvidedNeed: 1010216, SubstituteNeed: 1010350},
      {ProvidedNeed: 1010349, SubstituteNeed: 1010350},
      {ProvidedNeed: 1010214, SubstituteNeed: 1010350}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Faith", Amount: 40},
        {Attribute: "Melee", Amount: 20},
        {Attribute: "PerkHypnotist", Amount: 1}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190719,
    Type: "TownhallItem",
    Name: "Papst Lucius IV., „der Visionär“",
    FileName: "3dicons/specialists/icon_priest_epic.png",
    Rarity: "Legendary",
    RarityValue: 4,
    AdditionalHappiness: 10,
    EffectTargets: [
      {GUID: 190762}
    ],
    NeedProvideNeedUpgrade: [
      {ProvidedNeed: 1010257, SubstituteNeed: 1010350}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Faith", Amount: 50},
        {Attribute: "Diplomacy", Amount: 30},
        {Attribute: "PerkHypnotist", Amount: 1}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190193,
    Type: "TownhallItem",
    Name: "Saint D'Artois, Aura der Erkenntnis",
    FileName: "3dicons/specialists/icon_priest_legendary.png",
    Rarity: "Legendary",
    RarityValue: 4,
    ResidentsUpgrade: 20,
    IncidentRiotIncreaseUpgrade: -5,
    IncidentIllnessIncreaseUpgrade: -5,
    EffectTargets: [
      {GUID: 193957}
    ],
    InputBenefitModifier: [
      {Product: 1010200},
      {Product: 1010213},
      {Product: 1010217},
      {Product: 1010353},
      {Product: 120032},
      {Product: 1010208},
      {Product: 120016},
      {Product: 1010225},
      {Product: 1010258},
      {Product: 120033}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Faith", Amount: 50},
        {Attribute: "Medicine", Amount: 30},
        {Attribute: "PerkHypnotist", Amount: 1}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 190720,
    Type: "GuildhouseItem",
    Name: "Schwester",
    FileName: "3dicons/specialists/systemic/icon_doctor_802.png",
    Rarity: "Common",
    RarityValue: 0,
    IncidentIllnessIncreaseUpgrade: -2,
    Allocation: "TownHall",
    EffectTargets: [
      {GUID: 190762}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Medicine", Amount: 15}
      ]
    },
    LastChange: "2019-09-10T09:33:30.000Z"
  },
  {
    GUID: 190725,
    Type: "GuildhouseItem",
    Name: "Hausärztin",
    FileName: "3dicons/specialists/icon_doctor_native.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    MaintenanceUpgrade: -100,
    Allocation: "TownHall",
    EffectTargets: [
      {GUID: 190777}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Medicine", Amount: 25}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190722,
    Type: "TownhallItem",
    Name: "Pedantische Medizinerin",
    FileName: "3dicons/specialists/icon_doctor_common.png",
    Rarity: "Rare",
    RarityValue: 2,
    ResolverUnitMovementSpeedUpgrade: 10,
    EffectTargets: [
      {GUID: 190777}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Medicine", Amount: 35},
        {Attribute: "Diplomacy", Amount: 10}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190723,
    Type: "GuildhouseItem",
    Name: "Dr. Salvador",
    FileName: "3dicons/specialists/systemic/icon_doctor_717.png",
    Rarity: "Epic",
    RarityValue: 3,
    ResolverUnitCountUpgrade: 1,
    ResolverUnitMovementSpeedUpgrade: 15,
    Allocation: "TownHall",
    EffectTargets: [
      {GUID: 190777}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Medicine", Amount: 45},
        {Attribute: "Crafting", Amount: 20},
        {Attribute: "PerkHypnotist", Amount: 1}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190410,
    Type: "TownhallItem",
    Name: "Dr. Maurice Slim, ehemaliger Leiter von Promise Trust",
    FileName: "3dicons/specialists/icon_doctor_james_barry.png",
    Rarity: "Legendary",
    RarityValue: 4,
    ResolverUnitCountUpgrade: 1,
    EffectTargets: [
      {GUID: 190777}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Medicine", Amount: 55},
        {Attribute: "Melee", Amount: 30},
        {Attribute: "PerkHypnotist", Amount: 1}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190724,
    Type: "TownhallItem",
    Name: "Dr. Pierre Dupont der Pionier",
    FileName: "3dicons/specialists/systemic/icon_well_dressed_109.png",
    Rarity: "Legendary",
    RarityValue: 4,
    ResidentsUpgrade: 10,
    AdditionalHappiness: 10,
    IncidentIllnessIncreaseUpgrade: -5,
    EffectTargets: [
      {GUID: 193957}
    ],
    InputBenefitModifier: [
      {Product: 120020},
      {Product: 1010213},
      {Product: 1010206},
      {Product: 1010353},
      {Product: 120030},
      {Product: 1010208},
      {Product: 120016},
      {Product: 1010225},
      {Product: 1010258}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Medicine", Amount: 55},
        {Attribute: "Crafting", Amount: 30},
        {Attribute: "PerkAnthropologist", Amount: 1}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 190726,
    Type: "TownhallItem",
    Name: "Narr",
    FileName: "3dicons/specialists/systemic/icon_entertainer_503.png",
    Rarity: "Common",
    RarityValue: 0,
    EffectTargets: [
      {GUID: 190762}
    ],
    GoodConsumptionUpgrade: [
      {ProvidedNeed: 1010352, AmountInPercent: -100}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Diplomacy", Amount: 10}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190727,
    Type: "TownhallItem",
    Name: "Komödiantin",
    FileName: "3dicons/specialists/systemic/icon_entertainer_401.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    MaintenanceUpgrade: -75,
    EffectTargets: [
      {GUID: 1010361}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Diplomacy", Amount: 20}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190728,
    Type: "TownhallItem",
    Name: "Schauspielerin",
    FileName: "3dicons/specialists/systemic/icon_entertainer_801.png",
    Rarity: "Rare",
    RarityValue: 2,
    AdditionalHappiness: 3,
    EffectTargets: [
      {GUID: 190041}
    ],
    NeedProvideNeedUpgrade: [
      {ProvidedNeed: 1010257, SubstituteNeed: 1010352},
      {ProvidedNeed: 1010217, SubstituteNeed: 1010352}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Diplomacy", Amount: 20},
        {Attribute: "Faith", Amount: 20}
      ]
    },
    LastChange: "2019-07-30T11:05:12.000Z"
  },
  {
    GUID: 190731,
    Type: "TownhallItem",
    Name: "Gefeierte Darstellerin",
    FileName: "3dicons/specialists/systemic/icon_entertainer_828.png",
    Rarity: "Epic",
    RarityValue: 3,
    AdditionalHappiness: 7,
    EffectTargets: [
      {GUID: 190041}
    ],
    GoodConsumptionUpgrade: [
      {ProvidedNeed: 1010352, AmountInPercent: -100}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Diplomacy", Amount: 30},
        {Attribute: "Faith", Amount: 30}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190732,
    Type: "TownhallItem",
    Name: "Sarah Bartok, das Goldkehlchen",
    FileName: "3dicons/specialists/systemic/icon_well_dressed_602.png",
    Rarity: "Legendary",
    RarityValue: 4,
    MaintenanceUpgrade: -50,
    AttractiveNess: 7,
    PublicServiceFullSatisfactionDistance: 25,
    PublicServiceNoSatisfactionDistance: 25,
    PublicServiceDistance: 25,
    EffectTargets: [
      {GUID: 1010361}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Diplomacy", Amount: 40},
        {Attribute: "Faith", Amount: 40},
        {Attribute: "PerkHypnotist", Amount: 1}
      ]
    },
    LastChange: "2020-03-24T13:25:41.000Z"
  },
  {
    GUID: 190733,
    Type: "GuildhouseItem",
    Name: "Holzfäller",
    FileName: "3dicons/specialists/systemic/icon_worker_104.png",
    Rarity: "Common",
    RarityValue: 0,
    Productivity: 10,
    EffectTargets: [
      {GUID: 190778}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Crafting", Amount: 10}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190740,
    Type: "GuildhouseItem",
    Name: "Köhler",
    FileName: "3dicons/specialists/systemic/icon_worker_211.png",
    Rarity: "Common",
    RarityValue: 0,
    Productivity: 10,
    EffectTargets: [
      {GUID: 1010298}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Crafting", Amount: 10}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190734,
    Type: "GuildhouseItem",
    Name: "Wilderer",
    FileName: "3dicons/specialists/systemic/icon_shepherd_507.png",
    Rarity: "Common",
    RarityValue: 0,
    Productivity: 10,
    EffectTargets: [
      {GUID: 1010558}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Hunting", Amount: 15}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190735,
    Type: "GuildhouseItem",
    Name: "Förster",
    FileName: "3dicons/specialists/systemic/icon_farmer_201_b.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    AttractiveNess: 3,
    EffectTargets: [
      {GUID: 190778}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Crafting", Amount: 20}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190741,
    Type: "GuildhouseItem",
    Name: "Köhlerin",
    FileName: "3dicons/specialists/systemic/icon_worker_404.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    AttractiveNess: -100,
    AttractiveNessPercental: 1,
    EffectTargets: [
      {GUID: 1010298}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Crafting", Amount: 20}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190736,
    Type: "GuildhouseItem",
    Name: "Fallensteller",
    FileName: "3dicons/specialists/systemic/icon_shepherd_514.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    MaintenanceUpgrade: -40,
    EffectTargets: [
      {GUID: 1010558}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Hunting", Amount: 25}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190742,
    Type: "GuildhouseItem",
    Name: "Parkhüter",
    FileName: "3dicons/specialists/systemic/icon_explorer_716.png",
    Rarity: "Rare",
    RarityValue: 2,
    Productivity: 30,
    EffectTargets: [
      {GUID: 1010298}
    ],
    AdditionalOutput: [
      {Product: 1010255, Cycle: 5, Amount: 1}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Hunting", Amount: 30},
        {Attribute: "Navigation", Amount: 10}
      ]
    },
    LastChange: "2019-06-05T12:14:19.000Z"
  },
  {
    GUID: 190737,
    Type: "GuildhouseItem",
    Name: "Erfahrene Jägerin",
    FileName: "3dicons/specialists/icon_hunter_native.png",
    Rarity: "Rare",
    RarityValue: 2,
    Productivity: 30,
    EffectTargets: [
      {GUID: 1010558}
    ],
    AdditionalOutput: [
      {Product: 1010197, Cycle: 5, Amount: 1}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Hunting", Amount: 35},
        {Attribute: "Melee", Amount: 10}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190738,
    Type: "GuildhouseItem",
    Name: "Miss Rodriguez die Naturschützerin",
    FileName: "3dicons/specialists/systemic/icon_forester_401.png",
    Rarity: "Epic",
    RarityValue: 3,
    Productivity: 40,
    EffectTargets: [
      {GUID: 190778},
      {GUID: 1010298}
    ],
    AdditionalOutput: [
      {Product: 1010253, Cycle: 4, Amount: 1}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Crafting", Amount: 40},
        {Attribute: "Hunting", Amount: 20}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190743,
    Type: "GuildhouseItem",
    Name: "Steen, der wilde Grenzer",
    FileName: "3dicons/specialists/icon_hunter_common.png",
    Rarity: "Epic",
    RarityValue: 3,
    Productivity: 40,
    EffectTargets: [
      {GUID: 1010558}
    ],
    AdditionalOutput: [
      {Product: 1010193, Cycle: 4, Amount: 1}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Hunting", Amount: 45},
        {Attribute: "Melee", Amount: 20}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190739,
    Type: "GuildhouseItem",
    Name: "Ursula Green, Hüterin der Wälder",
    FileName: "3dicons/specialists/systemic/icon_hunter_300.png",
    Rarity: "Legendary",
    RarityValue: 4,
    Productivity: 50,
    NeededArea: -10,
    AttractiveNess: 8,
    EffectTargets: [
      {GUID: 190778},
      {GUID: 1010298},
      {GUID: 1010558}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Crafting", Amount: 45},
        {Attribute: "Hunting", Amount: 35},
        {Attribute: "Navigation", Amount: 25}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190744,
    Type: "GuildhouseItem",
    Name: "Ackermann",
    FileName: "3dicons/specialists/systemic/icon_farmer_204.png",
    Rarity: "Common",
    RarityValue: 0,
    Productivity: 10,
    EffectTargets: [
      {GUID: 1010265},
      {GUID: 1010264}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Crafting", Amount: 10}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 190745,
    Type: "GuildhouseItem",
    Name: "Anbauerin",
    FileName: "3dicons/specialists/systemic/icon_worker_405.png",
    Rarity: "Common",
    RarityValue: 0,
    Productivity: 10,
    EffectTargets: [
      {GUID: 1010262},
      {GUID: 100654}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Crafting", Amount: 10}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190753,
    Type: "GuildhouseItem",
    Name: "Winzerin",
    FileName: "3dicons/specialists/systemic/icon_farmer_402.png",
    Rarity: "Common",
    RarityValue: 0,
    Productivity: 10,
    EffectTargets: [
      {GUID: 100655}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Crafting", Amount: 10}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190746,
    Type: "GuildhouseItem",
    Name: "Landwirt",
    FileName: "3dicons/specialists/systemic/icon_worker_106.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    MaintenanceUpgrade: -75,
    EffectTargets: [
      {GUID: 1010265},
      {GUID: 1010264}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Crafting", Amount: 20}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 190747,
    Type: "GuildhouseItem",
    Name: "Gemüsezüchterin",
    FileName: "3dicons/specialists/systemic/icon_worker_416.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    MaintenanceUpgrade: -50,
    EffectTargets: [
      {GUID: 1010262},
      {GUID: 100654}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Crafting", Amount: 20}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190754,
    Type: "GuildhouseItem",
    Name: "Weinbauer",
    FileName: "3dicons/specialists/systemic/icon_farmer_101.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    MaintenanceUpgrade: -25,
    EffectTargets: [
      {GUID: 100655}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Crafting", Amount: 20}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190748,
    Type: "GuildhouseItem",
    Name: "Sonnige Siedlerin",
    FileName: "3dicons/specialists/systemic/icon_farmer_313.png",
    Rarity: "Rare",
    RarityValue: 2,
    Productivity: 50,
    ModuleLimit: 25,
    EffectTargets: [
      {GUID: 1010265},
      {GUID: 1010264}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Crafting", Amount: 30}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 190749,
    Type: "GuildhouseItem",
    Name: "Erfahrener Pflanzer",
    FileName: "3dicons/specialists/systemic/icon_farmer_104.png",
    Rarity: "Rare",
    RarityValue: 2,
    Productivity: 50,
    ModuleLimit: 25,
    EffectTargets: [
      {GUID: 1010262},
      {GUID: 100654},
      {GUID: 100655}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Crafting", Amount: 30}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190750,
    Type: "GuildhouseItem",
    Name: "Yvonne die Freisassin",
    FileName: "3dicons/specialists/systemic/icon_farmer_302.png",
    Rarity: "Epic",
    RarityValue: 3,
    Productivity: 40,
    EffectTargets: [
      {GUID: 1010265},
      {GUID: 1010264}
    ],
    AdditionalOutput: [
      {Product: 1010216, Cycle: 4, Amount: 1}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Crafting", Amount: 40},
        {Attribute: "Faith", Amount: 20}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 190751,
    Type: "GuildhouseItem",
    Name: "Preisgekrönter Produzent",
    FileName: "3dicons/specialists/systemic/icon_normal_dressed_105.png",
    Rarity: "Epic",
    RarityValue: 3,
    Productivity: 40,
    EffectTargets: [
      {GUID: 1010262},
      {GUID: 100654},
      {GUID: 100655}
    ],
    AdditionalOutput: [
      {Product: 120016, Cycle: 8, Amount: 1}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Crafting", Amount: 40},
        {Attribute: "Medicine", Amount: 20}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190752,
    Type: "GuildhouseItem",
    Name: "Cosmo Castelli, Wegbereiter der Agrarwissenschaft",
    FileName: "3dicons/specialists/systemic/icon_well_dressed_107.png",
    Rarity: "Legendary",
    RarityValue: 4,
    Productivity: 70,
    Workforce: -80,
    ModuleLimit: 35,
    EffectTargets: [
      {GUID: 191471}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Crafting", Amount: 50},
        {Attribute: "Diplomacy", Amount: 30}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190755,
    Type: "GuildhouseItem",
    Name: "Bergmann",
    FileName: "3dicons/specialists/systemic/icon_miner_101_b.png",
    Rarity: "Common",
    RarityValue: 0,
    Productivity: 20,
    EffectTargets: [
      {GUID: 190786}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Crafting", Amount: 10}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190756,
    Type: "GuildhouseItem",
    Name: "Schürfer",
    FileName: "3dicons/specialists/systemic/icon_miner_102.png",
    Rarity: "Common",
    RarityValue: 0,
    MaintenanceUpgrade: -50,
    EffectTargets: [
      {GUID: 191042}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Crafting", Amount: 10}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190757,
    Type: "GuildhouseItem",
    Name: "Belüfter",
    FileName: "3dicons/specialists/systemic/icon_miner_201.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    Workforce: -50,
    EffectTargets: [
      {GUID: 190786}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Crafting", Amount: 20}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190758,
    Type: "GuildhouseItem",
    Name: "Veredlerin",
    FileName: "3dicons/specialists/systemic/icon_worker_411.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    Productivity: 20,
    EffectTargets: [
      {GUID: 191042}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Crafting", Amount: 20}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190759,
    Type: "GuildhouseItem",
    Name: "Erstklassiger Sappeur",
    FileName: "3dicons/specialists/systemic/icon_worker_107.png",
    Rarity: "Rare",
    RarityValue: 2,
    Productivity: 50,
    Workforce: -75,
    EffectTargets: [
      {GUID: 190786}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Crafting", Amount: 30},
        {Attribute: "Melee", Amount: 10}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190760,
    Type: "GuildhouseItem",
    Name: "Micaela die Bergbauingenieurin",
    FileName: "3dicons/specialists/systemic/icon_miner_401.png",
    Rarity: "Epic",
    RarityValue: 3,
    Workforce: -100,
    MaintenanceUpgrade: -100,
    EffectTargets: [
      {GUID: 190786}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Crafting", Amount: 40},
        {Attribute: "Melee", Amount: 20}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190761,
    Type: "GuildhouseItem",
    Name: "Jörg von Malching, Augur des Aurum",
    FileName: "3dicons/specialists/systemic/icon_well_dressed_104.png",
    Rarity: "Legendary",
    RarityValue: 4,
    Productivity: 70,
    EffectTargets: [
      {GUID: 190786}
    ],
    AdditionalOutput: [
      {Product: 1010233, Cycle: 6, Amount: 1},
      {Product: 1010566, Cycle: 1, Amount: 1}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Crafting", Amount: 50},
        {Attribute: "Melee", Amount: 30}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191006,
    Type: "TownhallItem",
    Name: "Wachtmeister",
    FileName: "3dicons/specialists/icon_police_officer_uncommon.png",
    Rarity: "Common",
    RarityValue: 0,
    IncidentRiotIncreaseUpgrade: -2,
    EffectTargets: [
      {GUID: 190762}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Melee", Amount: 15}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191007,
    Type: "TownhallItem",
    Name: "Inspektorin",
    FileName: "3dicons/specialists/systemic/icon_police_officer.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    MaintenanceUpgrade: -100,
    EffectTargets: [
      {GUID: 190776}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Melee", Amount: 25}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191008,
    Type: "TownhallItem",
    Name: "Kommissar",
    FileName: "3dicons/specialists/systemic/icon_police_officer_101_b.png",
    Rarity: "Rare",
    RarityValue: 2,
    ResolverUnitMovementSpeedUpgrade: 10,
    EffectTargets: [
      {GUID: 190776}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Melee", Amount: 35},
        {Attribute: "Diplomacy", Amount: 5}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 192363,
    Type: "TownhallItem",
    Name: "Vicentes Informant",
    FileName: "3dicons/specialists/systemic/icon_worker_603.png",
    Rarity: "Epic",
    RarityValue: 3,
    AdditionalHappiness: 8,
    IncidentRiotIncreaseUpgrade: -4,
    EffectTargets: [
      {GUID: 190762}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Hunting", Amount: 20},
        {Attribute: "Diplomacy", Amount: 10},
        {Attribute: "Navigation", Amount: 5}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191009,
    Type: "TownhallItem",
    Name: "Oberkommissar Clifford",
    FileName: "3dicons/specialists/systemic/icon_police_officer_202.png",
    Rarity: "Epic",
    RarityValue: 3,
    ResolverUnitCountUpgrade: 1,
    ResolverUnitMovementSpeedUpgrade: 15,
    EffectTargets: [
      {GUID: 190776}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Melee", Amount: 45},
        {Attribute: "Diplomacy", Amount: 15}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191010,
    Type: "TownhallItem",
    Name: "Sir Charles Rafferty, Metropolitan Commissioner",
    FileName: "3dicons/specialists/icon_police_officer_legendary.png",
    Rarity: "Legendary",
    RarityValue: 4,
    ResolverUnitCountUpgrade: 1,
    EffectTargets: [
      {GUID: 190776}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Melee", Amount: 55},
        {Attribute: "Diplomacy", Amount: 25},
        {Attribute: "PerkHypnotist", Amount: 1}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190269,
    Type: "TownhallItem",
    Name: "Detektiv Nicolas Gabriel die Spürnase",
    FileName: "3dicons/specialists/icon_police_officer_angel.png",
    Rarity: "Legendary",
    RarityValue: 4,
    AdditionalHappiness: 10,
    TaxModifierInPercent: 10,
    IncidentRiotIncreaseUpgrade: -5,
    EffectTargets: [
      {GUID: 190762}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Melee", Amount: 55},
        {Attribute: "Diplomacy", Amount: 25}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191306,
    Type: "GuildhouseItem",
    Name: "Brillenmacherin",
    FileName: "3dicons/specialists/systemic/icon_worker_401.png",
    Rarity: "Common",
    RarityValue: 0,
    MaintenanceUpgrade: -10,
    EffectTargets: [
      {GUID: 101250}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Crafting", Amount: 10}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191307,
    Type: "GuildhouseItem",
    Name: "Optiker",
    FileName: "3dicons/specialists/systemic/icon_normal_dressed_102.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    Workforce: -20,
    EffectTargets: [
      {GUID: 101250}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Crafting", Amount: 20}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191308,
    Type: "GuildhouseItem",
    Name: "Linsendesignerin",
    FileName: "3dicons/specialists/systemic/icon_well_dressed_408.png",
    Rarity: "Rare",
    RarityValue: 2,
    Productivity: 30,
    AttractiveNess: 3,
    EffectTargets: [
      {GUID: 101250}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Crafting", Amount: 30},
        {Attribute: "Medicine", Amount: 10}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191309,
    Type: "GuildhouseItem",
    Name: "Optometrist Otto",
    FileName: "3dicons/specialists/systemic/icon_travelagent_723.png",
    Rarity: "Epic",
    RarityValue: 3,
    Productivity: 40,
    EffectTargets: [
      {GUID: 101250}
    ],
    AdditionalOutput: [
      {Product: 1010241, Cycle: 4, Amount: 1}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Crafting", Amount: 40},
        {Attribute: "Medicine", Amount: 20}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191310,
    Type: "GuildhouseItem",
    Name: "Gerhard Fuchs, vom patentierten Augenglas",
    FileName: "3dicons/specialists/systemic/icon_well_dressed_206.png",
    Rarity: "Legendary",
    RarityValue: 4,
    Productivity: 50,
    EffectTargets: [
      {GUID: 101250}
    ],
    ReplaceInputs: [
      {OldInput: 1010204, NewInput: 120008}
    ],
    AdditionalOutput: [
      {Product: 1010246, Cycle: 3, Amount: 1}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Crafting", Amount: 50},
        {Attribute: "Medicine", Amount: 30}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191315,
    Type: "GuildhouseItem",
    Name: "Kerzenmacher",
    FileName: "3dicons/specialists/systemic/icon_worker_209.png",
    Rarity: "Common",
    RarityValue: 0,
    MaintenanceUpgrade: -20,
    EffectTargets: [
      {GUID: 1010281}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Crafting", Amount: 10}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191316,
    Type: "GuildhouseItem",
    Name: "Seifensiederin",
    FileName: "3dicons/specialists/systemic/icon_bartender_314.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    Productivity: 20,
    EffectTargets: [
      {GUID: 1010281},
      {GUID: 1010269},
      {GUID: 1010312}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Crafting", Amount: 20}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191317,
    Type: "GuildhouseItem",
    Name: "Herbalhygieniker",
    FileName: "3dicons/specialists/systemic/icon_grocer724.png",
    Rarity: "Rare",
    RarityValue: 2,
    Productivity: 30,
    MaintenanceUpgrade: -60,
    EffectTargets: [
      {GUID: 1010281}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Crafting", Amount: 30},
        {Attribute: "Medicine", Amount: 10}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191318,
    Type: "GuildhouseItem",
    Name: "Parfümeurin Prunella",
    FileName: "3dicons/specialists/systemic/icon_worker_418.png",
    Rarity: "Epic",
    RarityValue: 3,
    AttractiveNess: -100,
    AttractiveNessPercental: 1,
    EffectTargets: [
      {GUID: 1010281}
    ],
    ReplaceInputs: [
      {OldInput: 1010234, NewInput: 120008}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Crafting", Amount: 40},
        {Attribute: "Medicine", Amount: 20}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191319,
    Type: "GuildhouseItem",
    Name: "Hervé Savonne, Erfinder der Zahnpasta",
    FileName: "3dicons/specialists/systemic/icon_well_dressed_206.png",
    Rarity: "Legendary",
    RarityValue: 4,
    Productivity: 50,
    Workforce: -50,
    EffectTargets: [
      {GUID: 1010281}
    ],
    AdditionalOutput: [
      {Product: 1010222, Cycle: 3, Amount: 1}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Crafting", Amount: 50},
        {Attribute: "Medicine", Amount: 30}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191320,
    Type: "GuildhouseItem",
    Name: "Taschenuhrmacher",
    FileName: "3dicons/specialists/systemic/icon_worker_106.png",
    Rarity: "Common",
    RarityValue: 0,
    Workforce: -10,
    EffectTargets: [
      {GUID: 1010324}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Crafting", Amount: 10}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191321,
    Type: "GuildhouseItem",
    Name: "Uhrmacher",
    FileName: "3dicons/specialists/systemic/icon_worker_202.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    MaintenanceUpgrade: -20,
    EffectTargets: [
      {GUID: 1010324}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Crafting", Amount: 20}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191322,
    Type: "GuildhouseItem",
    Name: "Präzisionshorologin",
    FileName: "3dicons/specialists/systemic/icon_worker_407.png",
    Rarity: "Rare",
    RarityValue: 2,
    Productivity: 30,
    MaintenanceUpgrade: -30,
    EffectTargets: [
      {GUID: 1010324}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Crafting", Amount: 30}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191323,
    Type: "GuildhouseItem",
    Name: "Chronometrikerin Chiara",
    FileName: "3dicons/specialists/systemic/icon_well_dressed_407.png",
    Rarity: "Epic",
    RarityValue: 3,
    MaintenanceUpgrade: -40,
    EffectTargets: [
      {GUID: 1010324}
    ],
    ReplaceInputs: [
      {OldInput: 1010249, NewInput: 1010204}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Crafting", Amount: 40}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191324,
    Type: "GuildhouseItem",
    Name: "Hans Klein, der alte Großvater Zeit",
    FileName: "3dicons/specialists/systemic/icon_well_dressed_108.png",
    Rarity: "Legendary",
    RarityValue: 4,
    Productivity: 50,
    ReplaceWorkforce: 1010115,
    EffectTargets: [
      {GUID: 1010324}
    ],
    AdditionalOutput: [
      {Product: 1010250, Cycle: 3, Amount: 1}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Crafting", Amount: 50},
        {Attribute: "PerkHypnotist", Amount: 1}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191325,
    Type: "GuildhouseItem",
    Name: "Weberin",
    FileName: "3dicons/specialists/systemic/icon_worker_413.png",
    Rarity: "Common",
    RarityValue: 0,
    Productivity: 10,
    EffectTargets: [
      {GUID: 1010315},
      {GUID: 1010267},
      {GUID: 114441},
      {GUID: 114466}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Crafting", Amount: 5}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 191336,
    Type: "GuildhouseItem",
    Name: "Gerber",
    FileName: "3dicons/specialists/systemic/icon_worker_204.png",
    Rarity: "Common",
    RarityValue: 0,
    Productivity: 10,
    EffectTargets: [
      {GUID: 1010325}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Crafting", Amount: 5}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191326,
    Type: "GuildhouseItem",
    Name: "Schneiderin",
    FileName: "3dicons/specialists/systemic/icon_worker_329.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    MaintenanceUpgrade: -50,
    EffectTargets: [
      {GUID: 1010315},
      {GUID: 114466},
      {GUID: 118734}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Crafting", Amount: 15}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 191337,
    Type: "GuildhouseItem",
    Name: "Damenschneiderin",
    FileName: "3dicons/specialists/systemic/icon_worker_325.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    MaintenanceUpgrade: -20,
    EffectTargets: [
      {GUID: 1010325},
      {GUID: 118734}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Crafting", Amount: 15}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 191327,
    Type: "GuildhouseItem",
    Name: "Couturière",
    FileName: "3dicons/specialists/systemic/icon_normaldress_304.png",
    Rarity: "Rare",
    RarityValue: 2,
    Workforce: -30,
    EffectTargets: [
      {GUID: 1010315}
    ],
    AdditionalOutput: [
      {Product: 1010210, Cycle: 4, Amount: 1}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Crafting", Amount: 25}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191348,
    Type: "GuildhouseItem",
    Name: "Kostümbildnerin",
    FileName: "3dicons/specialists/systemic/icon_well_dressed_409.png",
    Rarity: "Rare",
    RarityValue: 2,
    ReplaceWorkforce: 1010115,
    EffectTargets: [
      {GUID: 1010325}
    ],
    ReplaceInputs: [
      {OldInput: 1010240, NewInput: 1010197}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Crafting", Amount: 25},
        {Attribute: "Faith", Amount: 15}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191328,
    Type: "GuildhouseItem",
    Name: "Lily die Modeschöpferin",
    FileName: "3dicons/specialists/systemic/icon_well_dressed_401.png",
    Rarity: "Epic",
    RarityValue: 3,
    Workforce: -40,
    EffectTargets: [
      {GUID: 1010315},
      {GUID: 1010325},
      {GUID: 118734}
    ],
    AdditionalOutput: [
      {Product: 120043, Cycle: 4, Amount: 1}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Crafting", Amount: 35},
        {Attribute: "Medicine", Amount: 25}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 192039,
    Type: "GuildhouseItem",
    Name: "Franke, der Modeguru",
    FileName: "3dicons/specialists/icon_boris_franke.png",
    Rarity: "Epic",
    RarityValue: 3,
    Productivity: 40,
    EffectTargets: [
      {GUID: 1010325}
    ],
    ReplaceInputs: [
      {OldInput: 1010209, NewInput: 1010227},
      {OldInput: 1010240, NewInput: 1010197}
    ],
    AdditionalOutput: [
      {Product: 120043, Cycle: 12, Amount: 1},
      {Product: 1010237, Cycle: 12, Amount: 1},
      {Product: 120037, Cycle: 12, Amount: 1}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Crafting", Amount: 45},
        {Attribute: "Navigation", Amount: 20}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191329,
    Type: "GuildhouseItem",
    Name: "Lady Jane Smythe, Königin der Haute Couture",
    FileName: "3dicons/specialists/systemic/icon_normaldress_810.png",
    Rarity: "Legendary",
    RarityValue: 4,
    Productivity: 50,
    AttractiveNess: 8,
    EffectTargets: [
      {GUID: 1010315},
      {GUID: 1010325}
    ],
    AdditionalOutput: [
      {Product: 120043, Cycle: 6, Amount: 1},
      {Product: 120037, Cycle: 6, Amount: 1}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Crafting", Amount: 45},
        {Attribute: "Diplomacy", Amount: 25},
        {Attribute: "PerkAnthropologist", Amount: 1}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191341,
    Type: "GuildhouseItem",
    Name: "Strickerin",
    FileName: "3dicons/specialists/systemic/icon_worker_604.png",
    Rarity: "Common",
    RarityValue: 0,
    Productivity: 10,
    EffectTargets: [
      {GUID: 101266},
      {GUID: 101272}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Crafting", Amount: 5}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191342,
    Type: "GuildhouseItem",
    Name: "Putzmacher",
    FileName: "3dicons/specialists/systemic/icon_carpenter_721.png",
    Rarity: "Common",
    RarityValue: 0,
    Productivity: 10,
    EffectTargets: [
      {GUID: 101273},
      {GUID: 101272},
      {GUID: 1010331},
      {GUID: 1010318},
      {GUID: 101415}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Crafting", Amount: 5}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191343,
    Type: "GuildhouseItem",
    Name: "Näherin",
    FileName: "3dicons/specialists/systemic/icon_worker_821.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    MaintenanceUpgrade: -100,
    EffectTargets: [
      {GUID: 101266}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Crafting", Amount: 15}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191344,
    Type: "GuildhouseItem",
    Name: "Hutmacher",
    FileName: "3dicons/specialists/systemic/icon_shepherd_519.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    Workforce: -50,
    EffectTargets: [
      {GUID: 101273}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Crafting", Amount: 15}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191345,
    Type: "GuildhouseItem",
    Name: "Modistin",
    FileName: "3dicons/specialists/systemic/icon_normal_dressed_601.png",
    Rarity: "Rare",
    RarityValue: 2,
    Workforce: -50,
    EffectTargets: [
      {GUID: 101266}
    ],
    AdditionalOutput: [
      {Product: 1010210, Cycle: 4, Amount: 1}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Crafting", Amount: 25},
        {Attribute: "Medicine", Amount: 15}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191349,
    Type: "GuildhouseItem",
    Name: "Hutmeister",
    FileName: "3dicons/specialists/systemic/icon_entertainer_508.png",
    Rarity: "Rare",
    RarityValue: 2,
    ReplaceWorkforce: 1010366,
    EffectTargets: [
      {GUID: 101273}
    ],
    ReplaceInputs: [
      {OldInput: 120044, NewInput: 120036}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Crafting", Amount: 25},
        {Attribute: "Diplomacy", Amount: 15}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191346,
    Type: "GuildhouseItem",
    Name: "Mariana die Meisterstilistin",
    FileName: "3dicons/specialists/systemic/icon_well_dressed_602.png",
    Rarity: "Epic",
    RarityValue: 3,
    Productivity: 40,
    EffectTargets: [
      {GUID: 101266},
      {GUID: 101273},
      {GUID: 118733}
    ],
    AdditionalOutput: [
      {Product: 1010237, Cycle: 3, Amount: 1}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Crafting", Amount: 35},
        {Attribute: "Faith", Amount: 25}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 191347,
    Type: "GuildhouseItem",
    Name: "Cristobal Taffeta, Zar der Mode",
    FileName: "3dicons/specialists/systemic/icon_teacher_515.png",
    Rarity: "Legendary",
    RarityValue: 4,
    Productivity: 50,
    AttractiveNess: 8,
    EffectTargets: [
      {GUID: 101266},
      {GUID: 101273}
    ],
    AdditionalOutput: [
      {Product: 1010237, Cycle: 2, Amount: 1},
      {Product: 1010247, Cycle: 3, Amount: 1}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Crafting", Amount: 45},
        {Attribute: "Diplomacy", Amount: 35}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191330,
    Type: "GuildhouseItem",
    Name: "Zuckerbäckerin",
    FileName: "3dicons/specialists/systemic/icon_worker_821.png",
    Rarity: "Common",
    RarityValue: 0,
    Productivity: 10,
    EffectTargets: [
      {GUID: 1010341},
      {GUID: 1010332},
      {GUID: 1010329},
      {GUID: 1010317}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Crafting", Amount: 10}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191312,
    Type: "GuildhouseItem",
    Name: "Konditorin",
    FileName: "3dicons/specialists/systemic/icon_farmer_818.png",
    Rarity: "Common",
    RarityValue: 0,
    MaintenanceUpgrade: -60,
    EffectTargets: [
      {GUID: 101264}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Crafting", Amount: 10}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191331,
    Type: "GuildhouseItem",
    Name: "Chocolatier",
    FileName: "3dicons/specialists/systemic/icon_baker_101.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    ReplaceWorkforce: 1010366,
    EffectTargets: [
      {GUID: 1010341}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Crafting", Amount: 20}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191313,
    Type: "GuildhouseItem",
    Name: "Gelatiere",
    FileName: "3dicons/specialists/systemic/icon_blacksmith_317.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    Productivity: 20,
    EffectTargets: [
      {GUID: 101264}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Crafting", Amount: 20}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191332,
    Type: "GuildhouseItem",
    Name: "Qualitätschocolatier",
    FileName: "3dicons/specialists/systemic/icon_baker_202_b.png",
    Rarity: "Rare",
    RarityValue: 2,
    EffectTargets: [
      {GUID: 1010341}
    ],
    ReplaceInputs: [
      {OldInput: 1010239, NewInput: 120031}
    ],
    AdditionalOutput: [
      {Product: 120032, Cycle: 3, Amount: 1}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Crafting", Amount: 30}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191356,
    Type: "GuildhouseItem",
    Name: "Meisterkonditor",
    FileName: "3dicons/specialists/systemic/icon_baker_201.png",
    Rarity: "Rare",
    RarityValue: 2,
    EffectTargets: [
      {GUID: 101264}
    ],
    ReplaceInputs: [
      {OldInput: 120042, NewInput: 1010254}
    ],
    AdditionalOutput: [
      {Product: 1010258, Cycle: 3, Amount: 1}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Crafting", Amount: 30}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191333,
    Type: "GuildhouseItem",
    Name: "Charlotte die Schokoholikerin",
    FileName: "3dicons/specialists/systemic/icon_baker_401.png",
    Rarity: "Epic",
    RarityValue: 3,
    Productivity: 40,
    EffectTargets: [
      {GUID: 1010341},
      {GUID: 101264}
    ],
    AdditionalOutput: [
      {Product: 1010239, Cycle: 4, Amount: 1}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Crafting", Amount: 40}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191334,
    Type: "GuildhouseItem",
    Name: "Gennaro Garibaldi, Chocolatier Ihrer Majestät",
    FileName: "3dicons/specialists/systemic/icon_baker_102.png",
    Rarity: "Legendary",
    RarityValue: 4,
    Productivity: 50,
    AttractiveNess: 8,
    EffectTargets: [
      {GUID: 1010341},
      {GUID: 101264}
    ],
    AdditionalOutput: [
      {Product: 1010239, Cycle: 4, Amount: 1},
      {Product: 1010257, Cycle: 5, Amount: 1}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Crafting", Amount: 50}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191351,
    Type: "GuildhouseItem",
    Name: "Elektriker",
    FileName: "3dicons/specialists/systemic/icon_worker_104.png",
    Rarity: "Common",
    RarityValue: 0,
    Workforce: -20,
    EffectTargets: [
      {GUID: 1010286}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Crafting", Amount: 10}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191372,
    Type: "GuildhouseItem",
    Name: "Techniker",
    FileName: "3dicons/specialists/systemic/icon_worker_102_b.png",
    Rarity: "Common",
    RarityValue: 0,
    Workforce: -20,
    EffectTargets: [
      {GUID: 1010326}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Crafting", Amount: 10}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191373,
    Type: "GuildhouseItem",
    Name: "Leitungsmonteur",
    FileName: "3dicons/specialists/systemic/icon_mason_720.png",
    Rarity: "Common",
    RarityValue: 0,
    MaintenanceUpgrade: -15,
    EffectTargets: [
      {GUID: 100780}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Crafting", Amount: 10}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191352,
    Type: "GuildhouseItem",
    Name: "Physiker",
    FileName: "3dicons/specialists/systemic/icon_mason_718.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    Productivity: 20,
    EffectTargets: [
      {GUID: 1010286}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Crafting", Amount: 20}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191374,
    Type: "GuildhouseItem",
    Name: "Grammophonist",
    FileName: "3dicons/specialists/systemic/icon_worker_103.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    MaintenanceUpgrade: -10,
    EffectTargets: [
      {GUID: 1010326}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Crafting", Amount: 20}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191375,
    Type: "GuildhouseItem",
    Name: "Magnetiker",
    FileName: "3dicons/specialists/systemic/icon_normal_dressed_106.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    EffectTargets: [
      {GUID: 100780}
    ],
    AdditionalOutput: [
      {Product: 1010566, Cycle: 5, Amount: 1}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Crafting", Amount: 20}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191353,
    Type: "GuildhouseItem",
    Name: "Wissenschaftsgenie",
    FileName: "3dicons/specialists/systemic/icon_normal_dressed_401.png",
    Rarity: "Rare",
    RarityValue: 2,
    ReplaceWorkforce: 1010115,
    EffectTargets: [
      {GUID: 1010286},
      {GUID: 1010326}
    ],
    AdditionalOutput: [
      {Product: 1010243, Cycle: 5, Amount: 1}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Crafting", Amount: 30}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191376,
    Type: "GuildhouseItem",
    Name: "Führender Elektroingenieur",
    FileName: "3dicons/specialists/systemic/icon_worker_109.png",
    Rarity: "Rare",
    RarityValue: 2,
    IncidentFireIncreaseUpgrade: -9,
    EffectTargets: [
      {GUID: 100780}
    ],
    AdditionalOutput: [
      {Product: 1010566, Cycle: 3, Amount: 1}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Crafting", Amount: 30},
        {Attribute: "Navigation", Amount: 10}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191354,
    Type: "GuildhouseItem",
    Name: "Johan der Erfinder",
    FileName: "3dicons/specialists/systemic/icon_normal_dressed_202.png",
    Rarity: "Epic",
    RarityValue: 3,
    Productivity: 40,
    EffectTargets: [
      {GUID: 1010326}
    ],
    ReplaceInputs: [
      {OldInput: 1010242, NewInput: 1010196}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Crafting", Amount: 40},
        {Attribute: "Diplomacy", Amount: 20}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191377,
    Type: "GuildhouseItem",
    Name: "Fenja die Temperamentvolle",
    FileName: "3dicons/specialists/systemic/icon_well_dressed_408.png",
    Rarity: "Epic",
    RarityValue: 3,
    Workforce: -80,
    MaintenanceUpgrade: -25,
    IncidentFireIncreaseUpgrade: -10,
    IncidentExplosionIncreaseUpgrade: -10,
    EffectTargets: [
      {GUID: 100780}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Crafting", Amount: 40},
        {Attribute: "Might", Amount: 20}
      ]
    },
    LastChange: "2019-12-10T17:46:12.000Z"
  },
  {
    GUID: 191355,
    Type: "GuildhouseItem",
    Name: "Prof. Ram Devi, Leiter des Stroms",
    FileName: "3dicons/specialists/systemic/icon_normal_dressed_102.png",
    Rarity: "Legendary",
    RarityValue: 4,
    Productivity: 50,
    ProvideElectricity: 1,
    EffectTargets: [
      {GUID: 1010286},
      {GUID: 1010326}
    ],
    AdditionalOutput: [
      {Product: 1010246, Cycle: 16, Amount: 1},
      {Product: 120030, Cycle: 14, Amount: 1},
      {Product: 1010245, Cycle: 15, Amount: 1},
      {Product: 1010225, Cycle: 17, Amount: 1},
      {Product: 1010206, Cycle: 13, Amount: 1}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Crafting", Amount: 55},
        {Attribute: "Diplomacy", Amount: 25}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190237,
    Type: "GuildhouseItem",
    Name: "Angela „Meg“ Iver, Meisterin der Improvisation",
    FileName: "3dicons/specialists/icon_craftsman_maciver.png",
    Rarity: "Legendary",
    RarityValue: 4,
    Workforce: -20,
    ProvideElectricity: 1,
    EffectTargets: [
      {GUID: 6000018}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Crafting", Amount: 55},
        {Attribute: "Medicine", Amount: 25},
        {Attribute: "PerkDiver", Amount: 1}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191367,
    Type: "GuildhouseItem",
    Name: "Bohnensortiererin",
    FileName: "3dicons/specialists/systemic/icon_farmer_601.png",
    Rarity: "Common",
    RarityValue: 0,
    Workforce: -20,
    EffectTargets: [
      {GUID: 101252},
      {GUID: 124738}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Diplomacy", Amount: 5}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 191368,
    Type: "GuildhouseItem",
    Name: "Röster",
    FileName: "3dicons/specialists/systemic/icon_worker_203.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    MaintenanceUpgrade: -20,
    EffectTargets: [
      {GUID: 101252},
      {GUID: 124738}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Diplomacy", Amount: 10}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 191369,
    Type: "GuildhouseItem",
    Name: "Bohnenmahler",
    FileName: "3dicons/specialists/systemic/icon_normaldress_815.png",
    Rarity: "Rare",
    RarityValue: 2,
    Productivity: 30,
    Workforce: -50,
    ReplaceWorkforce: 1010366,
    EffectTargets: [
      {GUID: 101252}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Diplomacy", Amount: 15}
      ]
    },
    LastChange: "2019-12-10T17:46:12.000Z"
  },
  {
    GUID: 191370,
    Type: "GuildhouseItem",
    Name: "Cecilia die Kaffeessieurin",
    FileName: "3dicons/specialists/systemic/icon_welldress_812.png",
    Rarity: "Epic",
    RarityValue: 3,
    Productivity: 40,
    EffectTargets: [
      {GUID: 101252},
      {GUID: 124738}
    ],
    AdditionalOutput: [
      {Product: 1010258, Cycle: 4, Amount: 1}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Diplomacy", Amount: 20}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 191371,
    Type: "GuildhouseItem",
    Name: "Marco de la Mocha, Sommelier des Kaffees",
    FileName: "3dicons/specialists/systemic/icon_curator_702.png",
    Rarity: "Legendary",
    RarityValue: 4,
    Productivity: 50,
    AttractiveNess: 10,
    EffectTargets: [
      {GUID: 101252},
      {GUID: 124738}
    ],
    AdditionalOutput: [
      {Product: 120031, Cycle: 2, Amount: 1}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Diplomacy", Amount: 25}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 191379,
    Type: "GuildhouseItem",
    Name: "Schwarzbrennerin",
    FileName: "3dicons/specialists/systemic/icon_worker_417.png",
    Rarity: "Common",
    RarityValue: 0,
    Productivity: 10,
    EffectTargets: [
      {GUID: 1010294},
      {GUID: 1010292},
      {GUID: 1010265},
      {GUID: 1010264},
      {GUID: 1010262},
      {GUID: 1010314}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Medicine", Amount: 5},
        {Attribute: "Diplomacy", Amount: 5}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191380,
    Type: "GuildhouseItem",
    Name: "Destillateur",
    FileName: "3dicons/specialists/systemic/icon_worker_108.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    MaintenanceUpgrade: -20,
    EffectTargets: [
      {GUID: 1010294},
      {GUID: 1010292}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Medicine", Amount: 10},
        {Attribute: "Diplomacy", Amount: 10}
      ]
    },
    LastChange: "2019-12-10T17:46:12.000Z"
  },
  {
    GUID: 191381,
    Type: "GuildhouseItem",
    Name: "Preisgekrönter Brauer",
    FileName: "3dicons/specialists/systemic/icon_well_dressed_203.png",
    Rarity: "Rare",
    RarityValue: 2,
    Workforce: -30,
    AttractiveNess: 3,
    EffectTargets: [
      {GUID: 1010294},
      {GUID: 1010292}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Medicine", Amount: 15},
        {Attribute: "Diplomacy", Amount: 15}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191382,
    Type: "GuildhouseItem",
    Name: "Braumeister Bill",
    FileName: "3dicons/specialists/systemic/icon_normal_dressed_201_c.png",
    Rarity: "Epic",
    RarityValue: 3,
    ProvideElectricity: 1,
    IncidentRiotIncreaseUpgrade: -100,
    EffectTargets: [
      {GUID: 1010294},
      {GUID: 1010292}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Medicine", Amount: 20},
        {Attribute: "Diplomacy", Amount: 20}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191383,
    Type: "GuildhouseItem",
    Name: "Bruder Hilarius, Meister der Braukunst",
    FileName: "3dicons/specialists/icon_priest_uncommon.png",
    Rarity: "Legendary",
    RarityValue: 4,
    Productivity: 50,
    Workforce: -50,
    EffectTargets: [
      {GUID: 1010294},
      {GUID: 1010292}
    ],
    AdditionalOutput: [
      {Product: 1010257, Cycle: 3, Amount: 1}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Medicine", Amount: 25},
        {Attribute: "Diplomacy", Amount: 25},
        {Attribute: "Faith", Amount: 25}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191396,
    Type: "GuildhouseItem",
    Name: "Küchenhilfe",
    FileName: "3dicons/specialists/systemic/icon_worker_416.png",
    Rarity: "Common",
    RarityValue: 0,
    Productivity: 10,
    EffectTargets: [
      {GUID: 101271},
      {GUID: 101269},
      {GUID: 101270}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Medicine", Amount: 5}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191385,
    Type: "GuildhouseItem",
    Name: "Tortillera",
    FileName: "3dicons/specialists/systemic/icon_bartender_813.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    MaintenanceUpgrade: -40,
    EffectTargets: [
      {GUID: 101271}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Medicine", Amount: 10}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191386,
    Type: "GuildhouseItem",
    Name: "Mole-Meister",
    FileName: "3dicons/specialists/systemic/icon_baker_202_b.png",
    Rarity: "Rare",
    RarityValue: 2,
    Productivity: 30,
    EffectTargets: [
      {GUID: 101271}
    ],
    ReplaceInputs: [
      {OldInput: 1010193, NewInput: 120042}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Medicine", Amount: 15}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191387,
    Type: "GuildhouseItem",
    Name: "Kantyi von der Quinoa",
    FileName: "3dicons/specialists/systemic/icon_farmer_602.png",
    Rarity: "Epic",
    RarityValue: 3,
    Workforce: -40,
    ReplaceWorkforce: 1010366,
    EffectTargets: [
      {GUID: 101271}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Medicine", Amount: 20}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191402,
    Type: "GuildhouseItem",
    Name: "Tlayolotl Savor, Maiskönig",
    FileName: "3dicons/specialists/systemic/icon_entertainer_508.png",
    Rarity: "Legendary",
    RarityValue: 4,
    Productivity: 50,
    EffectTargets: [
      {GUID: 101271}
    ],
    ReplaceInputs: [
      {OldInput: 120034, NewInput: 120041}
    ],
    AdditionalOutput: [
      {Product: 120033, Cycle: 3, Amount: 1}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Medicine", Amount: 25},
        {Attribute: "Diplomacy", Amount: 25},
        {Attribute: "PerkPolyglot", Amount: 1}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191384,
    Type: "GuildhouseItem",
    Name: "Metzger",
    FileName: "3dicons/specialists/systemic/icon_worker_101.png",
    Rarity: "Common",
    RarityValue: 0,
    Workforce: -20,
    EffectTargets: [
      {GUID: 1010316}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Melee", Amount: 5}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191397,
    Type: "GuildhouseItem",
    Name: "Schlachter",
    FileName: "3dicons/specialists/systemic/icon_worker_103.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    Productivity: 20,
    EffectTargets: [
      {GUID: 1010316},
      {GUID: 1010269}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Melee", Amount: 10}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191403,
    Type: "GuildhouseItem",
    Name: "Fleischermeister",
    FileName: "3dicons/specialists/systemic/icon_baker_101.png",
    Rarity: "Rare",
    RarityValue: 2,
    MaintenanceUpgrade: -30,
    EffectTargets: [
      {GUID: 1010316}
    ],
    AdditionalOutput: [
      {Product: 1010234, Cycle: 4, Amount: 1}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Melee", Amount: 15},
        {Attribute: "Medicine", Amount: 5}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191401,
    Type: "GuildhouseItem",
    Name: "Chantelle die Feinschmeckerin",
    FileName: "3dicons/specialists/systemic/icon_baker_402.png",
    Rarity: "Epic",
    RarityValue: 3,
    Productivity: 40,
    EffectTargets: [
      {GUID: 1010316}
    ],
    AdditionalOutput: [
      {Product: 1010234, Cycle: 3, Amount: 1}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Melee", Amount: 20},
        {Attribute: "Medicine", Amount: 10}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191388,
    Type: "GuildhouseItem",
    Name: "Maxime Graves, Delicatesseur Extraordinaire",
    FileName: "3dicons/specialists/systemic/icon_baker_102.png",
    Rarity: "Legendary",
    RarityValue: 4,
    Productivity: 50,
    EffectTargets: [
      {GUID: 1010316}
    ],
    ReplaceInputs: [
      {OldInput: 1010199, NewInput: 1010193}
    ],
    AdditionalOutput: [
      {Product: 1010215, Cycle: 2, Amount: 1}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Melee", Amount: 25},
        {Attribute: "Medicine", Amount: 15}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191394,
    Type: "GuildhouseItem",
    Name: "Konservenverarbeiterin",
    FileName: "3dicons/specialists/systemic/icon_worker_417.png",
    Rarity: "Common",
    RarityValue: 0,
    Workforce: -20,
    EffectTargets: [
      {GUID: 1010295}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Crafting", Amount: 5}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191398,
    Type: "GuildhouseItem",
    Name: "Küchenmädchen",
    FileName: "3dicons/specialists/systemic/icon_worker_402.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    Productivity: 20,
    EffectTargets: [
      {GUID: 1010295},
      {GUID: 1010305},
      {GUID: 1010263},
      {GUID: 100654},
      {GUID: 1010293}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Crafting", Amount: 10}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191404,
    Type: "GuildhouseItem",
    Name: "Kaltmamsell",
    FileName: "3dicons/specialists/systemic/icon_baker_401_c.png",
    Rarity: "Rare",
    RarityValue: 2,
    Productivity: 30,
    ReplaceWorkforce: 1010115,
    EffectTargets: [
      {GUID: 1010295}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Crafting", Amount: 15},
        {Attribute: "Melee", Amount: 15}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191406,
    Type: "GuildhouseItem",
    Name: "Michel der Sternekoch",
    FileName: "3dicons/specialists/systemic/icon_baker_201.png",
    Rarity: "Epic",
    RarityValue: 3,
    EffectTargets: [
      {GUID: 1010295}
    ],
    ReplaceInputs: [
      {OldInput: 1010215, NewInput: 1010199}
    ],
    AdditionalOutput: [
      {Product: 1010238, Cycle: 2, Amount: 1}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Crafting", Amount: 20},
        {Attribute: "Melee", Amount: 20}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191407,
    Type: "GuildhouseItem",
    Name: "Mrs. Mayson, Koryphäe der Hauswirtschaft",
    FileName: "3dicons/specialists/systemic/icon_well_dressed_401.png",
    Rarity: "Legendary",
    RarityValue: 4,
    Productivity: 50,
    EffectTargets: [
      {GUID: 1010295}
    ],
    ReplaceInputs: [
      {OldInput: 1010227, NewInput: 1010235}
    ],
    AdditionalOutput: [
      {Product: 120035, Cycle: 3, Amount: 1}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Crafting", Amount: 25},
        {Attribute: "Diplomacy", Amount: 25},
        {Attribute: "Faith", Amount: 25}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191395,
    Type: "GuildhouseItem",
    Name: "Püriererin",
    FileName: "3dicons/specialists/systemic/icon_worker_329.png",
    Rarity: "Common",
    RarityValue: 0,
    MaintenanceUpgrade: -20,
    EffectTargets: [
      {GUID: 1010293}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Medicine", Amount: 5}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191399,
    Type: "GuildhouseItem",
    Name: "Suppenköchin",
    FileName: "3dicons/specialists/systemic/icon_bartender_314.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    Workforce: -40,
    EffectTargets: [
      {GUID: 1010293}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Medicine", Amount: 10}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191400,
    Type: "GuildhouseItem",
    Name: "Rezeptarchivarin",
    FileName: "3dicons/specialists/systemic/icon_baker_401.png",
    Rarity: "Rare",
    RarityValue: 2,
    Productivity: 30,
    EffectTargets: [
      {GUID: 1010293}
    ],
    ReplaceInputs: [
      {OldInput: 1010193, NewInput: 1010199}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Medicine", Amount: 15},
        {Attribute: "Crafting", Amount: 15}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191405,
    Type: "GuildhouseItem",
    Name: "Tatiana die Geschmackstesterin",
    FileName: "3dicons/specialists/systemic/icon_normal_dressed_401.png",
    Rarity: "Epic",
    RarityValue: 3,
    Productivity: 40,
    ReplaceWorkforce: 1010115,
    EffectTargets: [
      {GUID: 1010293}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Medicine", Amount: 20},
        {Attribute: "Crafting", Amount: 20}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191408,
    Type: "GuildhouseItem",
    Name: "Marcel Forcas, Koch für Berühmtheiten",
    FileName: "3dicons/specialists/systemic/icon_well_dressed_201.png",
    Rarity: "Legendary",
    RarityValue: 4,
    Productivity: 100,
    EffectTargets: [
      {GUID: 1010293}
    ],
    ReplaceInputs: [
      {OldInput: 1010193, NewInput: 1010199}
    ],
    AdditionalOutput: [
      {Product: 1010238, Cycle: 5, Amount: 1}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Medicine", Amount: 25},
        {Attribute: "Crafting", Amount: 25},
        {Attribute: "Diplomacy", Amount: 25}
      ]
    },
    LastChange: "2019-06-05T12:14:19.000Z"
  },
  {
    GUID: 191413,
    Type: "GuildhouseItem",
    Name: "Mechaniker",
    FileName: "3dicons/specialists/systemic/icon_worker_102_b.png",
    Rarity: "Common",
    RarityValue: 0,
    Workforce: -20,
    EffectTargets: [
      {GUID: 1010323}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Crafting", Amount: 15}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191412,
    Type: "GuildhouseItem",
    Name: "Stellmacher",
    FileName: "3dicons/specialists/systemic/icon_worker_104.png",
    Rarity: "Common",
    RarityValue: 0,
    Workforce: -15,
    EffectTargets: [
      {GUID: 1010303}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Crafting", Amount: 15}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191414,
    Type: "GuildhouseItem",
    Name: "Handwerkerin",
    FileName: "3dicons/specialists/systemic/icon_worker_401.png",
    Rarity: "Common",
    RarityValue: 0,
    Workforce: -20,
    EffectTargets: [
      {GUID: 1010284}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Crafting", Amount: 15}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191415,
    Type: "GuildhouseItem",
    Name: "Velozipedistin",
    FileName: "3dicons/specialists/systemic/icon_worker_404.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    Productivity: 20,
    EffectTargets: [
      {GUID: 1010323}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Crafting", Amount: 25}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191416,
    Type: "GuildhouseItem",
    Name: "Maschinist",
    FileName: "3dicons/specialists/systemic/icon_worker_106.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    Productivity: 20,
    EffectTargets: [
      {GUID: 1010303}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Crafting", Amount: 25}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191417,
    Type: "GuildhouseItem",
    Name: "Reparateur",
    FileName: "3dicons/specialists/systemic/icon_worker_105.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    Productivity: 20,
    EffectTargets: [
      {GUID: 1010284}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Crafting", Amount: 25}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191418,
    Type: "GuildhouseItem",
    Name: "Dampfingenieur",
    FileName: "3dicons/specialists/systemic/icon_worker_206.png",
    Rarity: "Rare",
    RarityValue: 2,
    MaintenanceUpgrade: -20,
    EffectTargets: [
      {GUID: 1010303}
    ],
    AdditionalOutput: [
      {Product: 1010245, Cycle: 5, Amount: 1}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Crafting", Amount: 35},
        {Attribute: "PerkFormerPirate", Amount: 1}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191419,
    Type: "GuildhouseItem",
    Name: "Zeichnerin",
    FileName: "3dicons/specialists/systemic/icon_normal_dressed_401.png",
    Rarity: "Rare",
    RarityValue: 2,
    Productivity: 30,
    ReplaceWorkforce: 1010115,
    EffectTargets: [
      {GUID: 1010323},
      {GUID: 1010284}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Crafting", Amount: 35}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191420,
    Type: "GuildhouseItem",
    Name: "Susannah die Dampfingenieurin",
    FileName: "3dicons/specialists/systemic/icon_well_dressed_406.png",
    Rarity: "Epic",
    RarityValue: 3,
    EffectTargets: [
      {GUID: 1010303}
    ],
    ReplaceInputs: [
      {OldInput: 1010224, NewInput: 1010243}
    ],
    AdditionalOutput: [
      {Product: 1010208, Cycle: 4, Amount: 1}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Crafting", Amount: 45}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191424,
    Type: "GuildhouseItem",
    Name: "Dario der Maschinenbauer",
    FileName: "3dicons/specialists/systemic/icon_normal_dressed_202.png",
    Rarity: "Epic",
    RarityValue: 3,
    EffectTargets: [
      {GUID: 1010323},
      {GUID: 1010284}
    ],
    ReplaceInputs: [
      {OldInput: 1010219, NewInput: 1010227}
    ],
    AdditionalOutput: [
      {Product: 1010246, Cycle: 8, Amount: 1},
      {Product: 1010248, Cycle: 8, Amount: 1}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Crafting", Amount: 45}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191422,
    Type: "GuildhouseItem",
    Name: "Bruno Ironbright, Ingenieurstitan",
    FileName: "3dicons/specialists/systemic/icon_well_dressed_205.png",
    Rarity: "Legendary",
    RarityValue: 4,
    Productivity: 50,
    EffectTargets: [
      {GUID: 1010323},
      {GUID: 1010284},
      {GUID: 1010303}
    ],
    AdditionalOutput: [
      {Product: 1010223, Cycle: 3, Amount: 1},
      {Product: 1010224, Cycle: 3, Amount: 1}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Crafting", Amount: 55},
        {Attribute: "Diplomacy", Amount: 25}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191425,
    Type: "GuildhouseItem",
    Name: "Zimmermann",
    FileName: "3dicons/specialists/systemic/icon_carpenter_721.png",
    Rarity: "Common",
    RarityValue: 0,
    EffectTargets: [
      {GUID: 190914}
    ],
    AdditionalOutput: [
      {Product: 120008, Cycle: 3, Amount: 1}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Crafting", Amount: 15}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191426,
    Type: "GuildhouseItem",
    Name: "Glasbläser",
    FileName: "3dicons/specialists/systemic/icon_carpenter_722.png",
    Rarity: "Common",
    RarityValue: 0,
    Productivity: 10,
    EffectTargets: [
      {GUID: 1010285}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Crafting", Amount: 15}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191427,
    Type: "GuildhouseItem",
    Name: "Schreinerin",
    FileName: "3dicons/specialists/systemic/icon_worker_413.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    Productivity: 20,
    EffectTargets: [
      {GUID: 190914},
      {GUID: 190778}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Crafting", Amount: 25}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 192358,
    Type: "GuildhouseItem",
    Name: "Beryls Schützling",
    FileName: "3dicons/specialists/systemic/icon_worker_413.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    Productivity: 50,
    EffectTargets: [
      {GUID: 190914},
      {GUID: 190778}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Crafting", Amount: 20}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191428,
    Type: "GuildhouseItem",
    Name: "Glasmacher",
    FileName: "3dicons/specialists/systemic/icon_worker_204.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    EffectTargets: [
      {GUID: 1010285}
    ],
    ReplaceInputs: [
      {OldInput: 1010241, NewInput: 1010228}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Crafting", Amount: 25}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191429,
    Type: "GuildhouseItem",
    Name: "Möbeltischler",
    FileName: "3dicons/specialists/systemic/icon_worker_106.png",
    Rarity: "Rare",
    RarityValue: 2,
    Productivity: 30,
    Workforce: -60,
    EffectTargets: [
      {GUID: 190914},
      {GUID: 1010285}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Crafting", Amount: 35},
        {Attribute: "Melee", Amount: 10}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191430,
    Type: "GuildhouseItem",
    Name: "Morris der Handwerksmeister",
    FileName: "3dicons/specialists/systemic/icon_worker_202.png",
    Rarity: "Epic",
    RarityValue: 3,
    MaintenanceUpgrade: -80,
    EffectTargets: [
      {GUID: 190914},
      {GUID: 1010285}
    ],
    AdditionalOutput: [
      {Product: 1010256, Cycle: 4, Amount: 1}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Crafting", Amount: 45},
        {Attribute: "Melee", Amount: 20}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191431,
    Type: "GuildhouseItem",
    Name: "Elias Papadikas, Dekorateur der Schaufenster",
    FileName: "3dicons/specialists/systemic/icon_well_dressed_107.png",
    Rarity: "Legendary",
    RarityValue: 4,
    Productivity: 50,
    ProvideElectricity: 1,
    EffectTargets: [
      {GUID: 190914},
      {GUID: 1010285}
    ],
    AdditionalOutput: [
      {Product: 1010242, Cycle: 3, Amount: 1}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Crafting", Amount: 55},
        {Attribute: "Melee", Amount: 30}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191432,
    Type: "HarborOfficeItem",
    Name: "Richtschütze",
    FileName: "3dicons/specialists/systemic/icon_uniform_707.png",
    Rarity: "Common",
    RarityValue: 0,
    MaxHitpointsUpgrade: 200,
    EffectTargets: [
      {GUID: 191443}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Might", Amount: 15},
        {Attribute: "Melee", Amount: 5}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191433,
    Type: "HarborOfficeItem",
    Name: "Artilleristin",
    FileName: "3dicons/specialists/systemic/icon_artillerist_401.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    SelfHealUpgrade: 300,
    EffectTargets: [
      {GUID: 191443}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Might", Amount: 25},
        {Attribute: "Melee", Amount: 10}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191434,
    Type: "HarborOfficeItem",
    Name: "Kanonier",
    FileName: "3dicons/specialists/systemic/icon_artillerist_201.png",
    Rarity: "Rare",
    RarityValue: 2,
    BaseDamageUpgrade: 15,
    MaxHitpointsUpgrade: 600,
    EffectTargets: [
      {GUID: 191443}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Might", Amount: 35},
        {Attribute: "Melee", Amount: 15}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191435,
    Type: "HarborOfficeItem",
    Name: "Colonnello Barzagli",
    FileName: "3dicons/specialists/systemic/icon_artillerist_202.png",
    Rarity: "Epic",
    RarityValue: 3,
    MaintenanceUpgrade: -75,
    EffectTargets: [
      {GUID: 191443}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Might", Amount: 45},
        {Attribute: "Melee", Amount: 20}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191436,
    Type: "HarborOfficeItem",
    Name: "Feldmarschall Matravers, Armeeführer",
    FileName: "3dicons/specialists/systemic/icon_captain_103.png",
    Rarity: "Legendary",
    RarityValue: 4,
    SelfHealUpgrade: 100,
    EffectTargets: [
      {GUID: 191443}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Might", Amount: 55},
        {Attribute: "Melee", Amount: 25},
        {Attribute: "Diplomacy", Amount: 25}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191442,
    Type: "HarborOfficeItem",
    Name: "General Ewing Thomson der Flaggenhisser",
    FileName: "3dicons/specialists/systemic/icon_uniformed_101.png",
    Rarity: "Legendary",
    RarityValue: 4,
    AttackRangeUpgrade: 10,
    LineOfSightRangeUpgrade: 10,
    HitpointDamage: 1.6,
    DamageReceiveFactorNormal: 0.75,
    EffectTargets: [
      {GUID: 191443}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Might", Amount: 55},
        {Attribute: "Melee", Amount: 25},
        {Attribute: "Diplomacy", Amount: 25}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191444,
    Type: "ShipSpecialist",
    Name: "Matrose",
    FileName: "3dicons/specialists/systemic/icon_navigator_704.png",
    Rarity: "Common",
    RarityValue: 0,
    ForwardSpeedUpgrade: 5,
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Navigation", Amount: 10},
        {Attribute: "Melee", Amount: 5}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191445,
    Type: "ShipSpecialist",
    Name: "Maat",
    FileName: "3dicons/specialists/systemic/icon_worker_412.png",
    Rarity: "Common",
    RarityValue: 0,
    SelfHealUpgrade: 100,
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Navigation", Amount: 10},
        {Attribute: "Melee", Amount: 5}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191446,
    Type: "ShipSpecialist",
    Name: "Seekadett",
    FileName: "3dicons/specialists/systemic/icon_worker_411.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    ForwardSpeedUpgrade: 10,
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Navigation", Amount: 20},
        {Attribute: "Melee", Amount: 10},
        {Attribute: "Might", Amount: 5}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191447,
    Type: "ShipSpecialist",
    Name: "Bootsfrau",
    FileName: "3dicons/specialists/systemic/icon_worker_413.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    IgnoreDamageFactorUpgrade: 40,
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Navigation", Amount: 20},
        {Attribute: "Melee", Amount: 10},
        {Attribute: "Might", Amount: 5}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191448,
    Type: "ShipSpecialist",
    Name: "Schleppermatrose",
    FileName: "3dicons/specialists/icon_captain_common.png",
    Rarity: "Rare",
    RarityValue: 2,
    MaxHitpointsUpgrade: 600,
    SelfHealUpgrade: 300,
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Navigation", Amount: 30},
        {Attribute: "Melee", Amount: 15},
        {Attribute: "Might", Amount: 5}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191449,
    Type: "ShipSpecialist",
    Name: "Lotse",
    FileName: "3dicons/specialists/systemic/icon_captain_101.png",
    Rarity: "Rare",
    RarityValue: 2,
    ForwardSpeedUpgrade: 15,
    IgnoreDamageFactorUpgrade: 60,
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Navigation", Amount: 30},
        {Attribute: "Melee", Amount: 15},
        {Attribute: "Might", Amount: 5}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190766,
    Type: "ShipSpecialist",
    Name: "Kapitän Ibrahim",
    FileName: "3dicons/specialists/systemic/icon_captain_201.png",
    Rarity: "Epic",
    RarityValue: 3,
    DamageReceiveFactorNormal: 0.8,
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Navigation", Amount: 40},
        {Attribute: "Melee", Amount: 20},
        {Attribute: "Might", Amount: 10}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191450,
    Type: "ShipSpecialist",
    Name: "Kapitän Kadjah",
    FileName: "3dicons/specialists/systemic/icon_captain_402.png",
    Rarity: "Epic",
    RarityValue: 3,
    ForwardSpeedUpgrade: 20,
    SelfHealUpgrade: 400,
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Navigation", Amount: 40},
        {Attribute: "Melee", Amount: 20},
        {Attribute: "Might", Amount: 10}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191451,
    Type: "ShipSpecialist",
    Name: "Kapitän Felicity Phoenix, aus der Asche",
    FileName: "3dicons/specialists/systemic/icon_captain_401.png",
    Rarity: "Legendary",
    RarityValue: 4,
    IgnoreDamageFactorUpgrade: 100,
    MaxHitpointsUpgrade: 1000,
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Navigation", Amount: 50},
        {Attribute: "Melee", Amount: 30},
        {Attribute: "Might", Amount: 10}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191452,
    Type: "ShipSpecialist",
    Name: "Kapitän Richard Moses, Skipper der Schoner",
    FileName: "3dicons/specialists/icon_captain_rare.png",
    Rarity: "Legendary",
    RarityValue: 4,
    ForwardSpeedUpgrade: 25,
    SelfHealUpgrade: 500,
    DamageReceiveFactorTorpedo: 0.25,
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Navigation", Amount: 50},
        {Attribute: "Melee", Amount: 30},
        {Attribute: "Might", Amount: 10},
        {Attribute: "PerkFormerPirate", Amount: 1}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191453,
    Type: "ShipSpecialist",
    Name: "Kapitän Smith, Titan der Meere",
    FileName: "3dicons/specialists/icon_doctor_pirate.png",
    Rarity: "Legendary",
    RarityValue: 4,
    ForwardSpeedUpgrade: 25,
    MaxHitpointsUpgrade: 1000,
    DamageReceiveFactorNormal: 0.75,
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Navigation", Amount: 50},
        {Attribute: "Melee", Amount: 30},
        {Attribute: "Might", Amount: 10}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191459,
    Type: "GuildhouseItem",
    Name: "Gießer",
    FileName: "3dicons/specialists/systemic/icon_mason_718.png",
    Rarity: "Common",
    RarityValue: 0,
    Productivity: 10,
    EffectTargets: [
      {GUID: 190918},
      {GUID: 191592}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Crafting", Amount: 10}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191460,
    Type: "GuildhouseItem",
    Name: "Maurerin",
    FileName: "3dicons/specialists/systemic/icon_worker_415.png",
    Rarity: "Common",
    RarityValue: 0,
    MaintenanceUpgrade: -20,
    EffectTargets: [
      {GUID: 1010280}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Crafting", Amount: 10}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191461,
    Type: "GuildhouseItem",
    Name: "Ziegelmacherin",
    FileName: "3dicons/specialists/systemic/icon_worker_603.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    MaintenanceUpgrade: -100,
    EffectTargets: [
      {GUID: 190918}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Crafting", Amount: 20}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191462,
    Type: "GuildhouseItem",
    Name: "Zementierer",
    FileName: "3dicons/specialists/systemic/icon_worker_205.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    EffectTargets: [
      {GUID: 1010280}
    ],
    ReplaceInputs: [
      {OldInput: 1010231, NewInput: 1010201}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Crafting", Amount: 20}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191463,
    Type: "GuildhouseItem",
    Name: "Polier",
    FileName: "3dicons/specialists/systemic/icon_worker_109.png",
    Rarity: "Rare",
    RarityValue: 2,
    Workforce: -60,
    EffectTargets: [
      {GUID: 190918},
      {GUID: 1010280}
    ],
    AdditionalOutput: [
      {Product: 1010218, Cycle: 5, Amount: 1}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Crafting", Amount: 30},
        {Attribute: "Melee", Amount: 5}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191464,
    Type: "GuildhouseItem",
    Name: "Gerhard der Architekt",
    FileName: "3dicons/specialists/systemic/icon_normal_dressed_106.png",
    Rarity: "Epic",
    RarityValue: 3,
    Productivity: 40,
    ProvideElectricity: 1,
    EffectTargets: [
      {GUID: 190918},
      {GUID: 1010280}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Crafting", Amount: 40},
        {Attribute: "Melee", Amount: 10}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191465,
    Type: "GuildhouseItem",
    Name: "François Thorne, Magnat der Bauindustrie",
    FileName: "3dicons/specialists/systemic/icon_well_dressed_103.png",
    Rarity: "Legendary",
    RarityValue: 4,
    Productivity: 50,
    AttractiveNess: 8,
    ReplaceWorkforce: 1010052,
    EffectTargets: [
      {GUID: 1010283},
      {GUID: 1010280}
    ],
    AdditionalOutput: [
      {Product: 1010242, Cycle: 2, Amount: 1}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Crafting", Amount: 50},
        {Attribute: "Melee", Amount: 15}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 191466,
    Type: "TownhallItem",
    Name: "Krämerin",
    FileName: "3dicons/specialists/systemic/icon_bartender_813.png",
    Rarity: "Common",
    RarityValue: 0,
    EffectTargets: [
      {GUID: 190762}
    ],
    GoodConsumptionUpgrade: [
      {ProvidedNeed: 120020, AmountInPercent: -100}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Diplomacy", Amount: 5}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191467,
    Type: "TownhallItem",
    Name: "Hausierer",
    FileName: "3dicons/specialists/systemic/icon_grocer724.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    PublicServiceFullSatisfactionDistance: 20,
    PublicServiceNoSatisfactionDistance: 20,
    PublicServiceDistance: 20,
    EffectTargets: [
      {GUID: 191540}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Diplomacy", Amount: 10}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191468,
    Type: "TownhallItem",
    Name: "Verkaufsberaterin",
    FileName: "3dicons/specialists/systemic/icon_normaldress_811.png",
    Rarity: "Rare",
    RarityValue: 2,
    AttractiveNess: 10,
    PublicServiceFullSatisfactionDistance: 40,
    PublicServiceNoSatisfactionDistance: 40,
    PublicServiceDistance: 40,
    EffectTargets: [
      {GUID: 191540}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Diplomacy", Amount: 15}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191469,
    Type: "TownhallItem",
    Name: "Gordon der Meisterkrämer",
    FileName: "3dicons/specialists/systemic/icon_well_dressed_202.png",
    Rarity: "Epic",
    RarityValue: 3,
    AdditionalHappiness: 5,
    EffectTargets: [
      {GUID: 190762}
    ],
    GoodConsumptionUpgrade: [
      {ProvidedNeed: 1010214, AmountInPercent: -100}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Diplomacy", Amount: 20}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191470,
    Type: "TownhallItem",
    Name: "Aristelia Bataille, Traiteur für Feinkost",
    FileName: "3dicons/specialists/systemic/icon_well_dressed_402.png",
    Rarity: "Legendary",
    RarityValue: 4,
    AdditionalHappiness: 10,
    EffectTargets: [
      {GUID: 190762}
    ],
    GoodConsumptionUpgrade: [
      {ProvidedNeed: 120016, AmountInPercent: -100}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Diplomacy", Amount: 25}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191564,
    Type: "TownhallItem",
    Name: "Gouvernante",
    FileName: "3dicons/specialists/systemic/icon_worker_408.png",
    Rarity: "Common",
    RarityValue: 0,
    EffectTargets: [
      {GUID: 190762}
    ],
    GoodConsumptionUpgrade: [
      {ProvidedNeed: 1010351, AmountInPercent: -100}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Faith", Amount: 5}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191565,
    Type: "TownhallItem",
    Name: "Schullehrerin",
    FileName: "3dicons/specialists/systemic/icon_worker_804.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    EffectTargets: [
      {GUID: 190762}
    ],
    InputBenefitModifier: [
      {Product: 1010351, AdditionalMoney: 1}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Medicine", Amount: 10}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191566,
    Type: "TownhallItem",
    Name: "Rektorin",
    FileName: "3dicons/specialists/systemic/icon_worker_407.png",
    Rarity: "Rare",
    RarityValue: 2,
    IncidentIllnessIncreaseUpgrade: -2,
    EffectTargets: [
      {GUID: 190762}
    ],
    InputBenefitModifier: [
      {Product: 1010351, AdditionalMoney: 2}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Diplomacy", Amount: 15}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191567,
    Type: "TownhallItem",
    Name: "Ernest der Erzieher",
    FileName: "3dicons/specialists/systemic/icon_well_dressed_108.png",
    Rarity: "Epic",
    RarityValue: 3,
    WorkforceModifierInPercent: 10,
    EffectTargets: [
      {GUID: 190762}
    ],
    InputBenefitModifier: [
      {Product: 1010351, AdditionalHappiness: 5}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Crafting", Amount: 20}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191568,
    Type: "TownhallItem",
    Name: "Anne Kenyatta, Pädagogin für Förderschulung",
    FileName: "3dicons/specialists/systemic/icon_teacher_823.png",
    Rarity: "Legendary",
    RarityValue: 4,
    MaintenanceUpgrade: -100,
    AttractiveNess: 12,
    PublicServiceFullSatisfactionDistance: 25,
    PublicServiceNoSatisfactionDistance: 25,
    PublicServiceDistance: 25,
    EffectTargets: [
      {GUID: 1010360}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Faith", Amount: 25}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191569,
    Type: "TownhallItem",
    Name: "Hausmädchen",
    FileName: "3dicons/specialists/systemic/icon_worker_821.png",
    Rarity: "Common",
    RarityValue: 0,
    EffectTargets: [
      {GUID: 190762}
    ],
    GoodConsumptionUpgrade: [
      {ProvidedNeed: 1010355, AmountInPercent: -100}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Melee", Amount: 5},
        {Attribute: "Medicine", Amount: 5}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191570,
    Type: "TownhallItem",
    Name: "Diener",
    FileName: "3dicons/specialists/systemic/icon_sommelier_101.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    EffectTargets: [
      {GUID: 1010347}
    ],
    InputBenefitModifier: [
      {Product: 1010355, AdditionalMoney: 2}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Melee", Amount: 10},
        {Attribute: "Medicine", Amount: 10}
      ]
    },
    LastChange: "2019-07-30T11:05:12.000Z"
  },
  {
    GUID: 191571,
    Type: "TownhallItem",
    Name: "Haushofmeister",
    FileName: "3dicons/specialists/systemic/icon_normal_dressed_204.png",
    Rarity: "Rare",
    RarityValue: 2,
    AttractiveNess: 8,
    PublicServiceFullSatisfactionDistance: 15,
    PublicServiceNoSatisfactionDistance: 15,
    PublicServiceDistance: 15,
    EffectTargets: [
      {GUID: 1010364}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Melee", Amount: 15},
        {Attribute: "Medicine", Amount: 15}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191572,
    Type: "TownhallItem",
    Name: "Miles der Meisterbutler",
    FileName: "3dicons/specialists/systemic/icon_well_dressed_102.png",
    Rarity: "Epic",
    RarityValue: 3,
    AdditionalHappiness: 8,
    IncidentRiotIncreaseUpgrade: -3,
    EffectTargets: [
      {GUID: 190762}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Melee", Amount: 20},
        {Attribute: "Medicine", Amount: 20}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191573,
    Type: "TownhallItem",
    Name: "Joseph Beaumont, Gründer des Reform Clubs",
    FileName: "3dicons/specialists/systemic/icon_well_dressed_103.png",
    Rarity: "Legendary",
    RarityValue: 4,
    EffectTargets: [
      {GUID: 190762}
    ],
    InputBenefitModifier: [
      {Product: 1010355, AdditionalMoney: 5}
    ],
    NeedProvideNeedUpgrade: [
      {ProvidedNeed: 1010259, SubstituteNeed: 1010355}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Melee", Amount: 25},
        {Attribute: "Medicine", Amount: 25}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191575,
    Type: "TownhallItem",
    Name: "Geldverleiher",
    FileName: "3dicons/specialists/systemic/icon_normal_dressed_103.png",
    Rarity: "Common",
    RarityValue: 0,
    EffectTargets: [
      {GUID: 190762}
    ],
    GoodConsumptionUpgrade: [
      {ProvidedNeed: 1010356, AmountInPercent: -100}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Diplomacy", Amount: 5}
      ]
    },
    LastChange: "2019-07-30T11:05:12.000Z"
  },
  {
    GUID: 191576,
    Type: "TownhallItem",
    Name: "Bankier",
    FileName: "3dicons/specialists/systemic/icon_normal_dressed_101.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    EffectTargets: [
      {GUID: 190762}
    ],
    InputBenefitModifier: [
      {Product: 1010356, AdditionalHappiness: 5, AdditionalMoney: 5}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Diplomacy", Amount: 10}
      ]
    },
    LastChange: "2019-06-05T12:14:19.000Z"
  },
  {
    GUID: 191577,
    Type: "TownhallItem",
    Name: "Postbankierin",
    FileName: "3dicons/specialists/systemic/icon_welldress_319.png",
    Rarity: "Rare",
    RarityValue: 2,
    EffectTargets: [
      {GUID: 190762}
    ],
    InputBenefitModifier: [
      {Product: 1010356, AdditionalHappiness: 5, AdditionalMoney: 5}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Diplomacy", Amount: 15}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191578,
    Type: "TownhallItem",
    Name: "Eduardo der Börsenmakler",
    FileName: "3dicons/specialists/systemic/icon_normal_dressed_102.png",
    Rarity: "Epic",
    RarityValue: 3,
    MaintenanceUpgrade: -100,
    AttractiveNess: 20,
    EffectTargets: [
      {GUID: 1010365}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Diplomacy", Amount: 20},
        {Attribute: "Faith", Amount: 20}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191579,
    Type: "TownhallItem",
    Name: "Jakob Sokow, Bankier mit Herz",
    FileName: "3dicons/specialists/systemic/icon_well_dressed_110.png",
    Rarity: "Legendary",
    RarityValue: 4,
    ResidentsUpgrade: 10,
    TaxModifierInPercent: 2,
    EffectTargets: [
      {GUID: 193957}
    ],
    InputBenefitModifier: [
      {Product: 120020},
      {Product: 1010213},
      {Product: 1010206},
      {Product: 1010353},
      {Product: 120030},
      {Product: 1010208},
      {Product: 120016},
      {Product: 1010225},
      {Product: 1010258}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Diplomacy", Amount: 25},
        {Attribute: "Navigation", Amount: 25}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 191580,
    Type: "GuildhouseItem",
    Name: "Schäfer",
    FileName: "3dicons/specialists/systemic/icon_farmer_201_b.png",
    Rarity: "Common",
    RarityValue: 0,
    Productivity: 10,
    EffectTargets: [
      {GUID: 190872}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Hunting", Amount: 10}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191581,
    Type: "GuildhouseItem",
    Name: "Viehhirt",
    FileName: "3dicons/specialists/systemic/icon_shepherd_705.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    Workforce: -40,
    EffectTargets: [
      {GUID: 190872}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Hunting", Amount: 20}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191582,
    Type: "GuildhouseItem",
    Name: "Viehbäuerin",
    FileName: "3dicons/specialists/systemic/icon_welldress_307.png",
    Rarity: "Rare",
    RarityValue: 2,
    Productivity: 30,
    Workforce: -60,
    EffectTargets: [
      {GUID: 190872}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Hunting", Amount: 30},
        {Attribute: "Medicine", Amount: 10}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191583,
    Type: "GuildhouseItem",
    Name: "Rodrigo der Ranchero",
    FileName: "3dicons/specialists/systemic/icon_shepherd_519.png",
    Rarity: "Epic",
    RarityValue: 3,
    MaintenanceUpgrade: -80,
    EffectTargets: [
      {GUID: 190872}
    ],
    AdditionalOutput: [
      {Product: 1010193, Cycle: 4, Amount: 1}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Hunting", Amount: 40},
        {Attribute: "Navigation", Amount: 20}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191584,
    Type: "GuildhouseItem",
    Name: "Mark van der Mark, Züchter von Schäferhunden",
    FileName: "3dicons/specialists/systemic/icon_normal_dressed_207.png",
    Rarity: "Legendary",
    RarityValue: 4,
    Productivity: 100,
    ModuleLimit: 100,
    EffectTargets: [
      {GUID: 190872}
    ],
    AdditionalOutput: [
      {Product: 120036, Cycle: 3, Amount: 1}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Hunting", Amount: 50},
        {Attribute: "Diplomacy", Amount: 30}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191585,
    Type: "GuildhouseItem",
    Name: "Bohrhauer",
    FileName: "3dicons/specialists/systemic/icon_carpenter_721.png",
    Rarity: "Common",
    RarityValue: 0,
    Productivity: 10,
    EffectTargets: [
      {GUID: 1010560},
      {GUID: 191593}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Melee", Amount: 5},
        {Attribute: "Crafting", Amount: 5}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191586,
    Type: "GuildhouseItem",
    Name: "Hauerin",
    FileName: "3dicons/specialists/systemic/icon_worker_413.png",
    Rarity: "Common",
    RarityValue: 0,
    Productivity: 10,
    EffectTargets: [
      {GUID: 191592},
      {GUID: 1010309}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Melee", Amount: 5},
        {Attribute: "Crafting", Amount: 5}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191587,
    Type: "GuildhouseItem",
    Name: "Ausschachterin",
    FileName: "3dicons/specialists/systemic/icon_farmer_401.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    Workforce: -100,
    EffectTargets: [
      {GUID: 1010560},
      {GUID: 191593},
      {GUID: 117743}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Melee", Amount: 10},
        {Attribute: "Crafting", Amount: 10}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 191588,
    Type: "GuildhouseItem",
    Name: "Steinhauer",
    FileName: "3dicons/specialists/systemic/icon_worker_104.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    Workforce: -100,
    EffectTargets: [
      {GUID: 191592},
      {GUID: 1010309}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Melee", Amount: 10},
        {Attribute: "Crafting", Amount: 10}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191589,
    Type: "GuildhouseItem",
    Name: "Steinbruchmeister",
    FileName: "3dicons/specialists/systemic/icon_grocer724.png",
    Rarity: "Rare",
    RarityValue: 2,
    Productivity: 30,
    MaintenanceUpgrade: -50,
    EffectTargets: [
      {GUID: 191592},
      {GUID: 191593},
      {GUID: 1010560},
      {GUID: 1010309},
      {GUID: 117743}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Melee", Amount: 15},
        {Attribute: "Crafting", Amount: 15}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 191590,
    Type: "GuildhouseItem",
    Name: "Grigor der Geologe",
    FileName: "3dicons/specialists/systemic/icon_normal_dressed_106.png",
    Rarity: "Epic",
    RarityValue: 3,
    ProvideElectricity: 1,
    EffectTargets: [
      {GUID: 191592},
      {GUID: 191593},
      {GUID: 1010560},
      {GUID: 1010309}
    ],
    AdditionalOutput: [
      {Product: 1010256, Cycle: 4, Amount: 1}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Melee", Amount: 20},
        {Attribute: "Crafting", Amount: 20}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191591,
    Type: "GuildhouseItem",
    Name: "Steven MacLeod, geologischer Landvermesser",
    FileName: "3dicons/specialists/systemic/icon_well_dressed_204.png",
    Rarity: "Legendary",
    RarityValue: 4,
    Productivity: 50,
    EffectTargets: [
      {GUID: 191592},
      {GUID: 191593},
      {GUID: 1010560},
      {GUID: 1010309},
      {GUID: 117743}
    ],
    AdditionalOutput: [
      {Product: 1010256, Cycle: 3, Amount: 1},
      {Product: 1010233, Cycle: 3, Amount: 1}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Melee", Amount: 25},
        {Attribute: "Crafting", Amount: 25},
        {Attribute: "Diplomacy", Amount: 25}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 191596,
    Type: "ShipSpecialist",
    Name: "Fähnrich",
    FileName: "3dicons/specialists/systemic/icon_custom_officer_101.png",
    Rarity: "Common",
    RarityValue: 0,
    DamageFactorSailShip: 1.1,
    Allocation: "Warship",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Might", Amount: 15},
        {Attribute: "Navigation", Amount: 5}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191597,
    Type: "ShipSpecialist",
    Name: "Waffenschmied",
    FileName: "3dicons/specialists/systemic/icon_custom_officer_102.png",
    Rarity: "Common",
    RarityValue: 0,
    Allocation: "Warship",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Might", Amount: 15},
        {Attribute: "Navigation", Amount: 5}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191598,
    Type: "ShipSpecialist",
    Name: "Ehemaliger Pirat",
    FileName: "3dicons/specialists/systemic/icon_navigator_102.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    BaseDamageUpgrade: 10,
    Allocation: "Warship",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Might", Amount: 25},
        {Attribute: "Navigation", Amount: 10},
        {Attribute: "PerkFormerPirate", Amount: 1}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191599,
    Type: "ShipSpecialist",
    Name: "Wachtmeister",
    FileName: "3dicons/specialists/systemic/icon_custom_officer_104.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    Allocation: "Warship",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Might", Amount: 25},
        {Attribute: "Navigation", Amount: 10}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191600,
    Type: "ShipSpecialist",
    Name: "Captain der Marines",
    FileName: "3dicons/specialists/systemic/icon_custom_officer_103.png",
    Rarity: "Rare",
    RarityValue: 2,
    DamageFactorBuilding: 1.3,
    DamageReceiveFactorNormal: 0.85,
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Might", Amount: 35},
        {Attribute: "Navigation", Amount: 15}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191601,
    Type: "ShipSpecialist",
    Name: "Ehemaliger Korsar",
    FileName: "3dicons/specialists/systemic/icon_navigator_102_b.png",
    Rarity: "Rare",
    RarityValue: 2,
    DamageReceiveFactorNormal: 0.85,
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Might", Amount: 35},
        {Attribute: "Navigation", Amount: 15},
        {Attribute: "PerkFormerPirate", Amount: 1}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191602,
    Type: "ShipSpecialist",
    Name: "Schiffskaplan",
    FileName: "3dicons/specialists/systemic/icon_admiral_708.png",
    Rarity: "Rare",
    RarityValue: 2,
    DamageFactorSailShip: 1.3,
    DamageReceiveFactorNormal: 0.85,
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Might", Amount: 35},
        {Attribute: "Faith", Amount: 25},
        {Attribute: "Navigation", Amount: 15}
      ]
    },
    LastChange: "2020-06-02T12:37:16.000Z"
  },
  {
    GUID: 191603,
    Type: "ShipSpecialist",
    Name: "Vizeadmiral Adams",
    FileName: "3dicons/specialists/systemic/icon_captain_103.png",
    Rarity: "Epic",
    RarityValue: 3,
    MaxHitpointsUpgrade: 800,
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Might", Amount: 45},
        {Attribute: "Navigation", Amount: 20}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191604,
    Type: "ShipSpecialist",
    Name: "Vizeadmiral Romanow",
    FileName: "3dicons/specialists/icon_specialist_captain_legendary_female.png",
    Rarity: "Epic",
    RarityValue: 3,
    AttackRangeUpgrade: 10,
    LineOfSightRangeUpgrade: 10,
    BaseDamageUpgrade: 20,
    Allocation: "Warship",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Might", Amount: 45},
        {Attribute: "Navigation", Amount: 20}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191605,
    Type: "ShipSpecialist",
    Name: "Vize-Almirante Gonçalves",
    FileName: "3dicons/specialists/systemic/icon_uniform_504.png",
    Rarity: "Epic",
    RarityValue: 3,
    ForwardSpeedUpgrade: 15,
    AttackRangeUpgrade: 10,
    LineOfSightRangeUpgrade: 10,
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Might", Amount: 45},
        {Attribute: "Navigation", Amount: 20}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191606,
    Type: "ShipSpecialist",
    Name: "Vize-Almirante Paulista",
    FileName: "3dicons/specialists/systemic/icon_admiral_513.png",
    Rarity: "Epic",
    RarityValue: 3,
    AttackRangeUpgrade: 10,
    LineOfSightRangeUpgrade: 10,
    Allocation: "Warship",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Might", Amount: 45},
        {Attribute: "Navigation", Amount: 20}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191607,
    Type: "ShipSpecialist",
    Name: "Wilma die Wilde, Mitglied der Barrakudas",
    FileName: "3dicons/specialists/icon_navigator_pirate.png",
    Rarity: "Legendary",
    RarityValue: 4,
    HitpointDamage: 1.6,
    Allocation: "Warship",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Might", Amount: 55},
        {Attribute: "Navigation", Amount: 25},
        {Attribute: "Melee", Amount: 25},
        {Attribute: "PerkFormerPirate", Amount: 1}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191608,
    Type: "ShipSpecialist",
    Name: "Lord Admiral Nadasky, Meister des Scharfsinns",
    FileName: "3dicons/specialists/systemic/icon_captain_102.png",
    Rarity: "Legendary",
    RarityValue: 4,
    ForwardSpeedUpgrade: 20,
    DamageFactorSailShip: 1.5,
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Might", Amount: 55},
        {Attribute: "Navigation", Amount: 25},
        {Attribute: "Melee", Amount: 25}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191609,
    Type: "ShipSpecialist",
    Name: "Georgina Duffy, Schrecken der Meere",
    FileName: "3dicons/specialists/icon_specialist_captain_legendary_pirate.png",
    Rarity: "Legendary",
    RarityValue: 4,
    DamageFactorSailShip: 1.5,
    DamageReceiveFactorNormal: 0.75,
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Might", Amount: 55},
        {Attribute: "Navigation", Amount: 25},
        {Attribute: "Melee", Amount: 25},
        {Attribute: "PerkFormerPirate", Amount: 1}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191610,
    Type: "ShipSpecialist",
    Name: "Admiral Haynes, Erforscher neuer Horizonte",
    FileName: "3dicons/specialists/systemic/icon_admiral_701.png",
    Rarity: "Legendary",
    RarityValue: 4,
    AttackRangeUpgrade: 15,
    LineOfSightRangeUpgrade: 15,
    DamageFactorBuilding: 1.5,
    MaxHitpointsUpgrade: 1000,
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Might", Amount: 55},
        {Attribute: "Navigation", Amount: 25},
        {Attribute: "Melee", Amount: 25}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191611,
    Type: "ShipSpecialist",
    Name: "Commodore Stephen Drake, Hüter des Embargos",
    FileName: "3dicons/specialists/icon_police_officer_rare.png",
    Rarity: "Legendary",
    RarityValue: 4,
    DamageReceiveFactorTorpedo: 0.2,
    DamageReceiveFactorCannon: 0.2,
    DamageReceiveFactorBigBertha: 0.2,
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Might", Amount: 55},
        {Attribute: "Navigation", Amount: 25},
        {Attribute: "Melee", Amount: 25}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191615,
    Type: "ShipSpecialist",
    Name: "Beladerin",
    FileName: "3dicons/specialists/systemic/icon_bartender_813.png",
    Rarity: "Common",
    RarityValue: 0,
    LoadingSpeedUpgrade: 15,
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Diplomacy", Amount: 5}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191616,
    Type: "ShipSpecialist",
    Name: "Schieber",
    FileName: "3dicons/specialists/systemic/icon_normal_dressed_105.png",
    Rarity: "Common",
    RarityValue: 0,
    IgnoreWeightFactorUpgrade: 20,
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Diplomacy", Amount: 5}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191617,
    Type: "ShipSpecialist",
    Name: "Kauffrau",
    FileName: "3dicons/specialists/systemic/icon_normaldress_308.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    MaintainanceUpgradeVehicle: -40,
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Diplomacy", Amount: 10}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191618,
    Type: "ShipSpecialist",
    Name: "Spediteur",
    FileName: "3dicons/specialists/systemic/icon_normal_dressed_107.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    LoadingSpeedUpgrade: 30,
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Diplomacy", Amount: 10}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191619,
    Type: "ShipSpecialist",
    Name: "Geschäftsmann",
    FileName: "3dicons/specialists/systemic/icon_well_dressed_104.png",
    Rarity: "Rare",
    RarityValue: 2,
    ForwardSpeedUpgrade: 10,
    IgnoreWeightFactorUpgrade: 60,
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Diplomacy", Amount: 15}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191620,
    Type: "ShipSpecialist",
    Name: "Händlerin",
    FileName: "3dicons/specialists/systemic/icon_normaldress_303.png",
    Rarity: "Rare",
    RarityValue: 2,
    ActiveTradePriceInPercent: 95,
    LoadingSpeedUpgrade: 45,
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Diplomacy", Amount: 15}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191621,
    Type: "ShipSpecialist",
    Name: "Itsuko die Exporteurin",
    FileName: "3dicons/specialists/systemic/icon_well_dressed_404.png",
    Rarity: "Epic",
    RarityValue: 3,
    IgnoreWeightFactorUpgrade: 80,
    ActiveTradePriceInPercent: 90,
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Diplomacy", Amount: 20}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191622,
    Type: "ShipSpecialist",
    Name: "Salima die Imorteurin",
    FileName: "3dicons/specialists/systemic/icon_normaldress_815.png",
    Rarity: "Epic",
    RarityValue: 3,
    ActiveTradePriceInPercent: 90,
    LoadingSpeedUpgrade: 60,
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Diplomacy", Amount: 20}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191623,
    Type: "ShipSpecialist",
    Name: "Delores die Diplomatin",
    FileName: "3dicons/specialists/systemic/icon_welldress_806.png",
    Rarity: "Epic",
    RarityValue: 3,
    MaintainanceUpgradeVehicle: -80,
    ActiveTradePriceInPercent: 90,
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Diplomacy", Amount: 20}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191624,
    Type: "ShipSpecialist",
    Name: "Ermenegilda Di Mercante, Expertin für Export",
    FileName: "3dicons/specialists/systemic/icon_well_dressed_402.png",
    Rarity: "Legendary",
    RarityValue: 4,
    ForwardSpeedUpgrade: 20,
    IgnoreWeightFactorUpgrade: 100,
    LoadingSpeedUpgrade: 75,
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Diplomacy", Amount: 25}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191625,
    Type: "ShipSpecialist",
    Name: "Lalla Mazigh, Verfechterin des freien Marktes",
    FileName: "3dicons/specialists/systemic/icon_entertainer_828.png",
    Rarity: "Legendary",
    RarityValue: 4,
    ForwardSpeedUpgrade: 20,
    MaintainanceUpgradeVehicle: -100,
    ActiveTradePriceInPercent: 85,
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Diplomacy", Amount: 25}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191626,
    Type: "ShipSpecialist",
    Name: "Hans Eichendorf, Meister der Logistik",
    FileName: "3dicons/specialists/systemic/icon_well_dressed_111.png",
    Rarity: "Legendary",
    RarityValue: 4,
    IgnoreWeightFactorUpgrade: 100,
    ActiveTradePriceInPercent: 85,
    LoadingSpeedUpgrade: 75,
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Diplomacy", Amount: 25}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 192438,
    Type: "TownhallItem",
    Name: "Maxime Renard, Unterhalter der Massen",
    FileName: "3dicons/specialists/influencer/icon_influencer_amixem.png",
    Rarity: "Epic",
    RarityValue: 3,
    AdditionalHappiness: 7,
    EffectTargets: [
      {GUID: 190041}
    ],
    GoodConsumptionUpgrade: [
      {ProvidedNeed: 1010352, AmountInPercent: -100}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Diplomacy", Amount: 30}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 192441,
    Type: "TownhallItem",
    Name: "Dennis Brammen, Kritiker der Gastronomie",
    FileName: "3dicons/specialists/influencer/icon_influencer_br4mm3n.png",
    Rarity: "Epic",
    RarityValue: 3,
    EffectTargets: [
      {GUID: 192445}
    ],
    InputBenefitModifier: [
      {Product: 1010349, AdditionalHappiness: 5, AdditionalMoney: 5}
    ],
    NeedProvideNeedUpgrade: [
      {ProvidedNeed: 1010213, SubstituteNeed: 1010349},
      {ProvidedNeed: 1010238, SubstituteNeed: 1010349},
      {ProvidedNeed: 1010200, SubstituteNeed: 1010349}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Diplomacy", Amount: 30}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 192440,
    Type: "TownhallItem",
    Name: "Arek Lisowski, Architekt der Oberschicht",
    FileName: "3dicons/specialists/influencer/icon_influencer_keralis_2.png",
    Rarity: "Epic",
    RarityValue: 3,
    AttractiveNess: 2,
    TaxModifierInPercent: 10,
    EffectTargets: [
      {GUID: 192446}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Diplomacy", Amount: 30},
        {Attribute: "PerkFormerPirate", Amount: 1}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 192443,
    Type: "GuildhouseItem",
    Name: "Sir Lewis Brindley, Chemiker mit Verstand",
    FileName: "3dicons/specialists/influencer/icon_influencer_lewis_2.png",
    Rarity: "Epic",
    RarityValue: 3,
    Productivity: 100,
    EffectTargets: [
      {GUID: 1010294}
    ],
    AdditionalOutput: [
      {Product: 1010257, Cycle: 3, Amount: 1}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Melee", Amount: 20},
        {Attribute: "Might", Amount: 20}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 192450,
    Type: "GuildhouseItem",
    Name: "Feras Alsarami, Meister der Hypnose",
    FileName: "3dicons/specialists/influencer/icon_influencer_realferas_2.png",
    Rarity: "Epic",
    RarityValue: 3,
    Productivity: 50,
    Workforce: -10,
    MaintenanceUpgrade: -10,
    IncidentRiotIncreaseUpgrade: -20,
    EffectTargets: [
      {GUID: 193856}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Diplomacy", Amount: 20},
        {Attribute: "PerkHypnotist", Amount: 1}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 192444,
    Type: "ShipSpecialist",
    Name: "Drew Durnil, Gelehrter spekulativer Geschichte",
    FileName: "3dicons/specialists/influencer/icon_influencer_drew_durnil_2.png",
    Rarity: "Epic",
    RarityValue: 3,
    ForwardSpeedUpgrade: 15,
    ActiveTradePriceInPercent: 85,
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Diplomacy", Amount: 45}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 192449,
    Type: "ShipSpecialist",
    Name: "Ladi Lu, Pirat der Entourage",
    FileName: "3dicons/specialists/influencer/icon_influencer_lady_lu.png",
    Rarity: "Epic",
    RarityValue: 3,
    MaxHitpointsUpgrade: 800,
    SelfHealUpgrade: 200,
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Medicine", Amount: 45},
        {Attribute: "PerkFormerPirate", Amount: 1}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 192468,
    Type: "TownhallItem",
    Name: "Elliot „Blitz“, Ingenieur für Sicherheit",
    FileName: "3dicons/specialists/influencer/icon_influencer_blitz.png",
    Rarity: "Epic",
    RarityValue: 3,
    AdditionalHappiness: 10,
    IncidentRiotIncreaseUpgrade: -2,
    IncidentIllnessIncreaseUpgrade: -2,
    IncidentFireIncreaseUpgrade: -2,
    EffectTargets: [
      {GUID: 190762}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Crafting", Amount: 30}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 193187,
    Type: "GuildhouseItem",
    Name: "Alexander Hancock, Vater der Kartoffel",
    FileName: "3dicons/specialists/influencer/icon_influencer_alex_hancock.png",
    Rarity: "Epic",
    RarityValue: 3,
    Productivity: 80,
    ModuleLimit: 35,
    EffectTargets: [
      {GUID: 191471}
    ],
    AdditionalOutput: [
      {Product: 1010195, Cycle: 8, Amount: 1}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Faith", Amount: 25},
        {Attribute: "Medicine", Amount: 20},
        {Attribute: "PerkHypnotist", Amount: 1}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 193188,
    Type: "ShipSpecialist",
    Name: "Drae von Gast, Händler ohne Skrupel",
    FileName: "3dicons/specialists/influencer/icon_influencer_draegast.png",
    Rarity: "Epic",
    RarityValue: 3,
    ActiveTradePriceInPercent: 85,
    DamageFactorBuilding: 1.5,
    Allocation: "Warship",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Diplomacy", Amount: 25},
        {Attribute: "Might", Amount: 20},
        {Attribute: "PerkFormerPirate", Amount: 1}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190818,
    Type: "GuildhouseItem",
    Name: "Eisengerüst",
    FileName: "3dicons/machine_items/icon_steel_framing_1.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    IncidentFireIncreaseUpgrade: -3,
    EffectTargets: [
      {GUID: 6000018}
    ],
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190819,
    Type: "GuildhouseItem",
    Name: "Doppelgerüst",
    FileName: "3dicons/machine_items/icon_steel_framing_2.png",
    Rarity: "Rare",
    RarityValue: 2,
    AttractiveNess: 2,
    IncidentFireIncreaseUpgrade: -4,
    EffectTargets: [
      {GUID: 6000018}
    ],
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190820,
    Type: "GuildhouseItem",
    Name: "Eisen-Glas-Gerüst",
    FileName: "3dicons/machine_items/icon_steel_framing_3.png",
    Rarity: "Epic",
    RarityValue: 3,
    AttractiveNess: 3,
    IncidentFireIncreaseUpgrade: -5,
    EffectTargets: [
      {GUID: 6000018}
    ],
    ExpeditionAttribute: {
      BaseMorale: 15,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190824,
    Type: "GuildhouseItem",
    Name: "Alte Werksglocke",
    FileName: "3dicons/machine_items/icon_factory_bell_1.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    Workforce: -20,
    MaintenanceUpgrade: 10,
    EffectTargets: [
      {GUID: 6000018}
    ],
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190825,
    Type: "GuildhouseItem",
    Name: "Eiserne Werksglocke",
    FileName: "3dicons/machine_items/icon_factory_bell_2.png",
    Rarity: "Rare",
    RarityValue: 2,
    Workforce: -30,
    EffectTargets: [
      {GUID: 6000018}
    ],
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190826,
    Type: "GuildhouseItem",
    Name: "Oxfords Elektroglocke",
    FileName: "3dicons/machine_items/icon_factory_bell_3.png",
    Rarity: "Epic",
    RarityValue: 3,
    Workforce: -40,
    MaintenanceUpgrade: -20,
    EffectTargets: [
      {GUID: 6000018}
    ],
    ExpeditionAttribute: {
      BaseMorale: 15,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 192305,
    Type: "GuildhouseItem",
    Name: "Extrem laute Glocke",
    FileName: "3dicons/machine_items/icon_factory_bell_2.png",
    Rarity: "Epic",
    RarityValue: 3,
    Workforce: -50,
    MaintenanceUpgrade: -25,
    EffectTargets: [
      {GUID: 6000018}
    ],
    ExpeditionAttribute: {
      BaseMorale: 15,
      ExpeditionAttributes: []
    },
    LastChange: "2019-06-05T12:14:19.000Z"
  },
  {
    GUID: 190827,
    Type: "GuildhouseItem",
    Name: "Dynamo",
    FileName: "3dicons/machine_items/icon_turbine_3.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    MaintenanceUpgrade: 100,
    ProvideElectricity: 1,
    IncidentExplosionIncreaseUpgrade: 7,
    EffectTargets: [
      {GUID: 6000018}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Crafting", Amount: 30}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190828,
    Type: "GuildhouseItem",
    Name: "Dampfturbine",
    FileName: "3dicons/machine_items/icon_turbine_2.png",
    Rarity: "Rare",
    RarityValue: 2,
    MaintenanceUpgrade: 75,
    ProvideElectricity: 1,
    IncidentExplosionIncreaseUpgrade: 5,
    EffectTargets: [
      {GUID: 6000018}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Crafting", Amount: 45}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190829,
    Type: "GuildhouseItem",
    Name: "Pertwees Turbo-Generator",
    FileName: "3dicons/machine_items/icon_turbine_1.png",
    Rarity: "Epic",
    RarityValue: 3,
    MaintenanceUpgrade: 50,
    ProvideElectricity: 1,
    EffectTargets: [
      {GUID: 6000018}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Crafting", Amount: 60}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190830,
    Type: "GuildhouseItem",
    Name: "Kalzinierofen",
    FileName: "3dicons/machine_items/icon_calciner_1.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    Productivity: 40,
    AttractiveNess: -3,
    IncidentFireIncreaseUpgrade: 5,
    EffectTargets: [
      {GUID: 190842}
    ],
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190831,
    Type: "GuildhouseItem",
    Name: "Flammenofen",
    FileName: "3dicons/machine_items/icon_calciner_2.png",
    Rarity: "Rare",
    RarityValue: 2,
    Productivity: 50,
    AttractiveNess: -2,
    IncidentFireIncreaseUpgrade: 3,
    EffectTargets: [
      {GUID: 190842}
    ],
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190832,
    Type: "GuildhouseItem",
    Name: "Bechamelbirne",
    FileName: "3dicons/machine_items/icon_calciner_3.png",
    Rarity: "Epic",
    RarityValue: 3,
    Productivity: 60,
    Workforce: -50,
    AttractiveNess: -1,
    EffectTargets: [
      {GUID: 190842}
    ],
    ExpeditionAttribute: {
      BaseMorale: 15,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190839,
    Type: "GuildhouseItem",
    Name: "Hobelmaschine",
    FileName: "3dicons/machine_items/icon_metall_planer_1.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    Productivity: 30,
    MaintenanceUpgrade: 10,
    EffectTargets: [
      {GUID: 1010284},
      {GUID: 1010295},
      {GUID: 1010323},
      {GUID: 114464}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Crafting", Amount: 10}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 190840,
    Type: "GuildhouseItem",
    Name: "Fräsmaschine",
    FileName: "3dicons/machine_items/icon_metall_planer_2.png",
    Rarity: "Rare",
    RarityValue: 2,
    Productivity: 35,
    EffectTargets: [
      {GUID: 1010284},
      {GUID: 1010295},
      {GUID: 1010323},
      {GUID: 114464}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Crafting", Amount: 15}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 190841,
    Type: "GuildhouseItem",
    Name: "„The Cutting Edge“",
    FileName: "3dicons/machine_items/icon_metall_planer_3.png",
    Rarity: "Epic",
    RarityValue: 3,
    Productivity: 40,
    Workforce: -50,
    EffectTargets: [
      {GUID: 1010284},
      {GUID: 1010295},
      {GUID: 1010323},
      {GUID: 114464}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Crafting", Amount: 20}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 190843,
    Type: "GuildhouseItem",
    Name: "Mühlstein",
    FileName: "3dicons/machine_items/icon_millstone_1.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    Productivity: 25,
    EffectTargets: [
      {GUID: 1010342},
      {GUID: 1010313},
      {GUID: 114459},
      {GUID: 117744}
    ],
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 190844,
    Type: "GuildhouseItem",
    Name: "Burrstein",
    FileName: "3dicons/machine_items/icon_millstone_2.png",
    Rarity: "Rare",
    RarityValue: 2,
    Productivity: 35,
    Workforce: -25,
    EffectTargets: [
      {GUID: 1010342},
      {GUID: 1010313},
      {GUID: 114459},
      {GUID: 117744}
    ],
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 190845,
    Type: "GuildhouseItem",
    Name: "Mahlmaschine Lovelyman",
    FileName: "3dicons/machine_items/icon_millstone_3.png",
    Rarity: "Epic",
    RarityValue: 3,
    Productivity: 40,
    Workforce: -50,
    EffectTargets: [
      {GUID: 1010342},
      {GUID: 1010313},
      {GUID: 114459},
      {GUID: 117744}
    ],
    ExpeditionAttribute: {
      BaseMorale: 15,
      ExpeditionAttributes: []
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 190847,
    Type: "GuildhouseItem",
    Name: "Quecksilberthermometer",
    FileName: "3dicons/machine_items/icon_thermometer_1.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    Productivity: 25,
    EffectTargets: [
      {GUID: 1010281},
      {GUID: 1010312},
      {GUID: 1010300}
    ],
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190848,
    Type: "GuildhouseItem",
    Name: "Schmelzpunktbestimmungsapparat",
    FileName: "3dicons/machine_items/icon_thermometer_2.png",
    Rarity: "Rare",
    RarityValue: 2,
    Productivity: 35,
    EffectTargets: [
      {GUID: 1010281},
      {GUID: 1010312},
      {GUID: 1010300}
    ],
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190849,
    Type: "GuildhouseItem",
    Name: "Schmelzpunktbestimmungsapparat nach Thielmann",
    FileName: "3dicons/machine_items/icon_thermometer_3.png",
    Rarity: "Epic",
    RarityValue: 3,
    Productivity: 50,
    EffectTargets: [
      {GUID: 1010281},
      {GUID: 1010312},
      {GUID: 1010300}
    ],
    ExpeditionAttribute: {
      BaseMorale: 15,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190850,
    Type: "GuildhouseItem",
    Name: "Bogensäge",
    FileName: "3dicons/machine_items/icon_dragsaw_.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    Productivity: 25,
    EffectTargets: [
      {GUID: 190778}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Crafting", Amount: 10}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190851,
    Type: "GuildhouseItem",
    Name: "Zwei-Mann-Säge",
    FileName: "3dicons/machine_items/icon_dragsaw_2.png",
    Rarity: "Rare",
    RarityValue: 2,
    Productivity: 35,
    EffectTargets: [
      {GUID: 190778}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Crafting", Amount: 15}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190852,
    Type: "GuildhouseItem",
    Name: "Vincent-Sägemaschine",
    FileName: "3dicons/machine_items/icon_dragsaw_3.png",
    Rarity: "Epic",
    RarityValue: 3,
    Productivity: 50,
    EffectTargets: [
      {GUID: 190778}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Crafting", Amount: 20}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190853,
    Type: "GuildhouseItem",
    Name: "Falle",
    FileName: "3dicons/machine_items/icon_trap_1.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    Productivity: 25,
    EffectTargets: [
      {GUID: 1010558}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Hunting", Amount: 20}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190854,
    Type: "GuildhouseItem",
    Name: "Fangeisen",
    FileName: "3dicons/icon_bear_trap.png",
    Rarity: "Rare",
    RarityValue: 2,
    Productivity: 35,
    Workforce: -25,
    EffectTargets: [
      {GUID: 1010558}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Hunting", Amount: 30}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190855,
    Type: "GuildhouseItem",
    Name: "Marderverstümmler",
    FileName: "3dicons/machine_items/icon_trap_3.png",
    Rarity: "Epic",
    RarityValue: 3,
    Productivity: 40,
    Workforce: -50,
    EffectTargets: [
      {GUID: 1010558}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Hunting", Amount: 40}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190856,
    Type: "GuildhouseItem",
    Name: "Industrielle Hippe",
    FileName: "3dicons/machine_items/icon_pruning_material_1.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    Productivity: 20,
    NeededArea: -10,
    EffectTargets: [
      {GUID: 190778},
      {GUID: 1010298},
      {GUID: 1010558},
      {GUID: 122963}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Crafting", Amount: 10}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 190857,
    Type: "GuildhouseItem",
    Name: "Druidensichel",
    FileName: "3dicons/machine_items/icon_pruning_material_2.png",
    Rarity: "Rare",
    RarityValue: 2,
    Productivity: 30,
    NeededArea: -20,
    EffectTargets: [
      {GUID: 190778},
      {GUID: 1010298},
      {GUID: 1010558},
      {GUID: 122963}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Crafting", Amount: 15}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 190858,
    Type: "GuildhouseItem",
    Name: "Teutonisch-technisches Schneidewerkzeug",
    FileName: "3dicons/machine_items/icon_pruning_material_3.png",
    Rarity: "Epic",
    RarityValue: 3,
    Productivity: 40,
    NeededArea: -30,
    EffectTargets: [
      {GUID: 190778},
      {GUID: 1010298},
      {GUID: 1010558},
      {GUID: 122963}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Crafting", Amount: 20}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 190859,
    Type: "GuildhouseItem",
    Name: "Scharpflug",
    FileName: "3dicons/machine_items/icon_plough_1.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    Productivity: 25,
    EffectTargets: [
      {GUID: 190865}
    ],
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190860,
    Type: "GuildhouseItem",
    Name: "Kipppflug",
    FileName: "3dicons/machine_items/icon_plough_2.png",
    Rarity: "Rare",
    RarityValue: 2,
    Productivity: 35,
    EffectTargets: [
      {GUID: 190865}
    ],
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190861,
    Type: "GuildhouseItem",
    Name: "Patentierte stählerne Sämaschine",
    FileName: "3dicons/machine_items/icon_plough_3.png",
    Rarity: "Epic",
    RarityValue: 3,
    Productivity: 40,
    Workforce: -50,
    EffectTargets: [
      {GUID: 190865}
    ],
    ExpeditionAttribute: {
      BaseMorale: 15,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 192299,
    Type: "GuildhouseItem",
    Name: "Stählerner Wunderpflug",
    FileName: "3dicons/machine_items/icon_plough_1.png",
    Rarity: "Epic",
    RarityValue: 3,
    Productivity: 50,
    Workforce: -50,
    MaintenanceUpgrade: -50,
    EffectTargets: [
      {GUID: 190865}
    ],
    ExpeditionAttribute: {
      BaseMorale: 15,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190862,
    Type: "GuildhouseItem",
    Name: "Holzasche",
    FileName: "3dicons/machine_items/icon_fertilizer_1.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    Productivity: 30,
    ModuleLimit: 15,
    EffectTargets: [
      {GUID: 190865}
    ],
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190863,
    Type: "GuildhouseItem",
    Name: "Kunstdünger",
    FileName: "3dicons/machine_items/icon_fertilizer_2.png",
    Rarity: "Rare",
    RarityValue: 2,
    Productivity: 50,
    ModuleLimit: 25,
    EffectTargets: [
      {GUID: 190865}
    ],
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190864,
    Type: "GuildhouseItem",
    Name: "Superphosphat-Dünger",
    FileName: "3dicons/machine_items/icon_fertilizer_3.png",
    Rarity: "Epic",
    RarityValue: 3,
    Productivity: 70,
    ModuleLimit: 35,
    EffectTargets: [
      {GUID: 190865}
    ],
    ExpeditionAttribute: {
      BaseMorale: 15,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190866,
    Type: "GuildhouseItem",
    Name: "Vitaminergänzungen",
    FileName: "3dicons/machine_items/icon_vitamin_supplement_1.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    Productivity: 20,
    EffectTargets: [
      {GUID: 190872}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Medicine", Amount: 15}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190867,
    Type: "GuildhouseItem",
    Name: "Tier-Antibiotika",
    FileName: "3dicons/machine_items/icon_vitamin_supplement_2.png",
    Rarity: "Rare",
    RarityValue: 2,
    Productivity: 30,
    EffectTargets: [
      {GUID: 190872}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Medicine", Amount: 25}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190868,
    Type: "GuildhouseItem",
    Name: "Himmlischer Milzbrand-Impfstoff",
    FileName: "3dicons/machine_items/icon_vitamin_supplement_3.png",
    Rarity: "Epic",
    RarityValue: 3,
    Productivity: 40,
    EffectTargets: [
      {GUID: 190872}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Medicine", Amount: 35}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 192362,
    Type: "GuildhouseItem",
    Name: "Eine Abhilfe",
    FileName: "3dicons/narative_item/icon_bottle.png",
    Rarity: "Epic",
    RarityValue: 3,
    Productivity: 40,
    EffectTargets: [
      {GUID: 190872}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Medicine", Amount: 40}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190869,
    Type: "GuildhouseItem",
    Name: "Futterplatz",
    FileName: "3dicons/machine_items/icon_feedlots_1.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    Productivity: 70,
    MaintenanceUpgrade: 50,
    EffectTargets: [
      {GUID: 190872}
    ],
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190870,
    Type: "GuildhouseItem",
    Name: "Schöner Futterplatz",
    FileName: "3dicons/machine_items/icon_feedlots_2.png",
    Rarity: "Rare",
    RarityValue: 2,
    Productivity: 70,
    MaintenanceUpgrade: 35,
    EffectTargets: [
      {GUID: 190872}
    ],
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190871,
    Type: "GuildhouseItem",
    Name: "Fabelhafter Futterplatz",
    FileName: "3dicons/machine_items/icon_feedlots_3.png",
    Rarity: "Epic",
    RarityValue: 3,
    Productivity: 70,
    MaintenanceUpgrade: 20,
    EffectTargets: [
      {GUID: 190872}
    ],
    ExpeditionAttribute: {
      BaseMorale: 15,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190873,
    Type: "GuildhouseItem",
    Name: "Jauchetank",
    FileName: "3dicons/machine_items/icon_waste_management_1.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    MaintenanceUpgrade: 30,
    AttractiveNess: -25,
    AttractiveNessPercental: 1,
    EffectTargets: [
      {GUID: 1010269},
      {GUID: 1010312},
      {GUID: 1010281},
      {GUID: 1010316}
    ],
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190874,
    Type: "GuildhouseItem",
    Name: "Jauchegrube",
    FileName: "3dicons/machine_items/icon_waste_management_2.png",
    Rarity: "Rare",
    RarityValue: 2,
    MaintenanceUpgrade: 20,
    AttractiveNess: -50,
    AttractiveNessPercental: 1,
    EffectTargets: [
      {GUID: 1010269},
      {GUID: 1010312},
      {GUID: 1010281},
      {GUID: 1010316}
    ],
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190875,
    Type: "GuildhouseItem",
    Name: "Moderner Güllesilo",
    FileName: "3dicons/machine_items/icon_waste_management_3.png",
    Rarity: "Epic",
    RarityValue: 3,
    MaintenanceUpgrade: 10,
    AttractiveNess: -75,
    AttractiveNessPercental: 1,
    EffectTargets: [
      {GUID: 1010269},
      {GUID: 1010312},
      {GUID: 1010281},
      {GUID: 1010316}
    ],
    ExpeditionAttribute: {
      BaseMorale: 15,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190876,
    Type: "GuildhouseItem",
    Name: "Förderkorb",
    FileName: "3dicons/machine_items/icon_elevator_1.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    Productivity: 25,
    MaintenanceUpgrade: -15,
    IncidentExplosionIncreaseUpgrade: 5,
    EffectTargets: [
      {GUID: 190882}
    ],
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190877,
    Type: "GuildhouseItem",
    Name: "Sicherheits-Seilfahrt",
    FileName: "3dicons/machine_items/icon_elevator_2.png",
    Rarity: "Rare",
    RarityValue: 2,
    Productivity: 35,
    MaintenanceUpgrade: -25,
    IncidentExplosionIncreaseUpgrade: 3,
    EffectTargets: [
      {GUID: 190882}
    ],
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190878,
    Type: "GuildhouseItem",
    Name: "Simmons elektrische Seilfahrt",
    FileName: "3dicons/machine_items/icon_elevator_3.png",
    Rarity: "Epic",
    RarityValue: 3,
    Productivity: 40,
    MaintenanceUpgrade: -35,
    EffectTargets: [
      {GUID: 190882}
    ],
    ExpeditionAttribute: {
      BaseMorale: 15,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190879,
    Type: "GuildhouseItem",
    Name: "Bohrer",
    FileName: "3dicons/machine_items/icon_drill_1.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    Productivity: 25,
    MaintenanceUpgrade: 25,
    EffectTargets: [
      {GUID: 191592},
      {GUID: 191593},
      {GUID: 1010560},
      {GUID: 1010309},
      {GUID: 191042}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Crafting", Amount: 15}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190880,
    Type: "GuildhouseItem",
    Name: "Mechanischer Bohrer",
    FileName: "3dicons/machine_items/icon_drill_2.png",
    Rarity: "Rare",
    RarityValue: 2,
    Productivity: 35,
    MaintenanceUpgrade: 15,
    EffectTargets: [
      {GUID: 191592},
      {GUID: 191593},
      {GUID: 1010560},
      {GUID: 1010309},
      {GUID: 191042}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Crafting", Amount: 25}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190881,
    Type: "GuildhouseItem",
    Name: "Schöner Elektro-Handbohrer",
    FileName: "3dicons/machine_items/icon_drill_3.png",
    Rarity: "Epic",
    RarityValue: 3,
    Productivity: 40,
    Workforce: -20,
    EffectTargets: [
      {GUID: 191592},
      {GUID: 191593},
      {GUID: 1010560},
      {GUID: 1010309},
      {GUID: 191042}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Crafting", Amount: 35}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190883,
    Type: "GuildhouseItem",
    Name: "Mechanischer Webstuhl",
    FileName: "3dicons/machine_items/icon_loom_1.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    Productivity: 25,
    EffectTargets: [
      {GUID: 190890}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Crafting", Amount: 10}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190884,
    Type: "GuildhouseItem",
    Name: "Webmaschine",
    FileName: "3dicons/machine_items/icon_loom_2.png",
    Rarity: "Rare",
    RarityValue: 2,
    Productivity: 35,
    EffectTargets: [
      {GUID: 190890}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Crafting", Amount: 15}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190885,
    Type: "GuildhouseItem",
    Name: "Hopedale-Webmaschine",
    FileName: "3dicons/machine_items/icon_loom_3.png",
    Rarity: "Epic",
    RarityValue: 3,
    Productivity: 40,
    Workforce: -25,
    EffectTargets: [
      {GUID: 190890}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Crafting", Amount: 20}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 192319,
    Type: "GuildhouseItem",
    Name: "Optimierter automatischer Webstuhl",
    FileName: "3dicons/machine_items/icon_loom_2.png",
    Rarity: "Epic",
    RarityValue: 3,
    Productivity: 50,
    Workforce: -25,
    MaintenanceUpgrade: -20,
    EffectTargets: [
      {GUID: 190890}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190887,
    Type: "GuildhouseItem",
    Name: "Fließband",
    FileName: "3dicons/machine_items/icon_conveyor_1.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    Productivity: 40,
    IncidentFireIncreaseUpgrade: 7,
    EffectTargets: [
      {GUID: 1010303}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Crafting", Amount: 10}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190888,
    Type: "GuildhouseItem",
    Name: "Montageband",
    FileName: "3dicons/machine_items/icon_conveyor_2.png",
    Rarity: "Rare",
    RarityValue: 2,
    Productivity: 50,
    IncidentFireIncreaseUpgrade: 5,
    EffectTargets: [
      {GUID: 1010303}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Crafting", Amount: 15}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190889,
    Type: "GuildhouseItem",
    Name: "Porthampton-Massenmontageband",
    FileName: "3dicons/machine_items/icon_conveyor_3.png",
    Rarity: "Epic",
    RarityValue: 3,
    Productivity: 60,
    Workforce: -20,
    IncidentFireIncreaseUpgrade: 3,
    EffectTargets: [
      {GUID: 1010303}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Crafting", Amount: 20}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190891,
    Type: "GuildhouseItem",
    Name: "Eiserner Ofen",
    FileName: "3dicons/machine_items/icon_stove_1.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    Productivity: 20,
    MaintenanceUpgrade: 10,
    IncidentFireIncreaseUpgrade: -1,
    EffectTargets: [
      {GUID: 190897}
    ],
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190892,
    Type: "GuildhouseItem",
    Name: "Gusseiserner Ofen",
    FileName: "3dicons/machine_items/icon_stove_2.png",
    Rarity: "Rare",
    RarityValue: 2,
    Productivity: 30,
    IncidentFireIncreaseUpgrade: -2,
    EffectTargets: [
      {GUID: 190897}
    ],
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190893,
    Type: "GuildhouseItem",
    Name: "Elmers elektrischer Ofen",
    FileName: "3dicons/machine_items/icon_stove_3.png",
    Rarity: "Epic",
    RarityValue: 3,
    Productivity: 40,
    Workforce: -25,
    IncidentFireIncreaseUpgrade: -3,
    EffectTargets: [
      {GUID: 190897}
    ],
    ExpeditionAttribute: {
      BaseMorale: 15,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190894,
    Type: "GuildhouseItem",
    Name: "Kupferdestille",
    FileName: "3dicons/machine_items/icon_brewing_machine_1.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    Productivity: 30,
    IncidentFireIncreaseUpgrade: 4,
    EffectTargets: [
      {GUID: 190901}
    ],
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190895,
    Type: "GuildhouseItem",
    Name: "Dampfgetriebene Braumaschine",
    FileName: "3dicons/machine_items/icon_brewing_machine_2.png",
    Rarity: "Rare",
    RarityValue: 2,
    Productivity: 40,
    IncidentFireIncreaseUpgrade: 2,
    EffectTargets: [
      {GUID: 190901}
    ],
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190896,
    Type: "GuildhouseItem",
    Name: "Grandiose Kupferdestille",
    FileName: "3dicons/machine_items/icon_brewing_machine_3.png",
    Rarity: "Epic",
    RarityValue: 3,
    Productivity: 50,
    MaintenanceUpgrade: -25,
    EffectTargets: [
      {GUID: 190901}
    ],
    ExpeditionAttribute: {
      BaseMorale: 15,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190898,
    Type: "GuildhouseItem",
    Name: "Vergrößernde Brille",
    FileName: "3dicons/machine_items/icon_precision_instruments_1.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    Productivity: 25,
    EffectTargets: [
      {GUID: 1010324},
      {GUID: 1010328},
      {GUID: 101250}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Crafting", Amount: 10}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190899,
    Type: "GuildhouseItem",
    Name: "Vergrößerungsglas",
    FileName: "3dicons/machine_items/icon_precision_instruments_2.png",
    Rarity: "Rare",
    RarityValue: 2,
    Productivity: 35,
    EffectTargets: [
      {GUID: 1010324},
      {GUID: 1010328},
      {GUID: 101250}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Crafting", Amount: 15}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190900,
    Type: "GuildhouseItem",
    Name: "Uhrmacherlupe",
    FileName: "3dicons/machine_items/icon_precision_instruments_3.png",
    Rarity: "Epic",
    RarityValue: 3,
    Productivity: 40,
    MaintenanceUpgrade: -10,
    EffectTargets: [
      {GUID: 1010324},
      {GUID: 1010328},
      {GUID: 101250}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Crafting", Amount: 20}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190902,
    Type: "GuildhouseItem",
    Name: "Feines Fischernetz",
    FileName: "3dicons/machine_items/icon_fishernet_1.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    Productivity: 25,
    Allocation: "HarborOffice",
    EffectTargets: [
      {GUID: 190779},
      {GUID: 1010339}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Hunting", Amount: 15}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190903,
    Type: "GuildhouseItem",
    Name: "Treibnetz",
    FileName: "3dicons/machine_items/icon_fishernet_2.png",
    Rarity: "Rare",
    RarityValue: 2,
    Productivity: 35,
    Allocation: "HarborOffice",
    EffectTargets: [
      {GUID: 190779},
      {GUID: 1010339}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Hunting", Amount: 25}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190904,
    Type: "GuildhouseItem",
    Name: "Tiefgang-Schleppnetz",
    FileName: "3dicons/machine_items/icon_fishernet_3.png",
    Rarity: "Epic",
    RarityValue: 3,
    Productivity: 40,
    Workforce: -50,
    Allocation: "HarborOffice",
    EffectTargets: [
      {GUID: 190779},
      {GUID: 1010339}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Hunting", Amount: 35}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190905,
    Type: "GuildhouseItem",
    Name: "Glasmacherpfeife",
    FileName: "3dicons/machine_items/icon_glass_working_1.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    Productivity: 30,
    IncidentFireIncreaseUpgrade: 3,
    EffectTargets: [
      {GUID: 1010319},
      {GUID: 1010286},
      {GUID: 114464}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Crafting", Amount: 10}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 190906,
    Type: "GuildhouseItem",
    Name: "Mechanische Glaspresse",
    FileName: "3dicons/machine_items/icon_glass_working_2.png",
    Rarity: "Rare",
    RarityValue: 2,
    Productivity: 35,
    EffectTargets: [
      {GUID: 1010319},
      {GUID: 1010286},
      {GUID: 114464}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Crafting", Amount: 15}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 190907,
    Type: "GuildhouseItem",
    Name: "Owens vollautomatische Glasblasmaschine",
    FileName: "3dicons/machine_items/icon_glass_working_3.png",
    Rarity: "Epic",
    RarityValue: 3,
    Productivity: 40,
    IncidentFireIncreaseUpgrade: -3,
    EffectTargets: [
      {GUID: 1010319},
      {GUID: 1010286},
      {GUID: 114464}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Crafting", Amount: 20}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 190908,
    Type: "GuildhouseItem",
    Name: "Kreissäge",
    FileName: "3dicons/machine_items/icon_circular_saw_1.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    Productivity: 30,
    IncidentFireIncreaseUpgrade: 3,
    EffectTargets: [
      {GUID: 190914},
      {GUID: 122963}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Crafting", Amount: 20}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 190909,
    Type: "GuildhouseItem",
    Name: "Längskreissäge",
    FileName: "3dicons/machine_items/icon_circular_saw_2.png",
    Rarity: "Rare",
    RarityValue: 2,
    Productivity: 40,
    IncidentFireIncreaseUpgrade: 2,
    EffectTargets: [
      {GUID: 190914},
      {GUID: 122963}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Crafting", Amount: 30}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 190910,
    Type: "GuildhouseItem",
    Name: "Harkers elektrische Drechselbank",
    FileName: "3dicons/machine_items/icon_circular_saw_3.png",
    Rarity: "Epic",
    RarityValue: 3,
    Productivity: 50,
    Workforce: -25,
    EffectTargets: [
      {GUID: 190914},
      {GUID: 122963}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Crafting", Amount: 40}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 190911,
    Type: "GuildhouseItem",
    Name: "Hölzerne Gussformen",
    FileName: "3dicons/machine_items/icon_mould_1.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    Productivity: 25,
    EffectTargets: [
      {GUID: 190918},
      {GUID: 1010280}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Crafting", Amount: 10}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190912,
    Type: "GuildhouseItem",
    Name: "Stählerne Gussformen",
    FileName: "3dicons/machine_items/icon_mould_2.png",
    Rarity: "Rare",
    RarityValue: 2,
    Productivity: 35,
    EffectTargets: [
      {GUID: 190918},
      {GUID: 1010280}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Crafting", Amount: 15}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190913,
    Type: "GuildhouseItem",
    Name: "Mickletons hydraulische Formmaschine",
    FileName: "3dicons/machine_items/icon_mould_3.png",
    Rarity: "Epic",
    RarityValue: 3,
    Productivity: 40,
    Workforce: -25,
    EffectTargets: [
      {GUID: 190918},
      {GUID: 1010280}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Crafting", Amount: 20}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190915,
    Type: "GuildhouseItem",
    Name: "Getreidesaatgut",
    FileName: "3dicons/fertilities/icon_seeds_grain.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    Productivity: -15,
    AddedFertility: 1010571,
    EffectTargets: [
      {GUID: 1010262}
    ],
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190916,
    Type: "GuildhouseItem",
    Name: "Qualitäts-Getreidesaatgut",
    FileName: "3dicons/fertilities/icon_seeds_grain.png",
    Rarity: "Rare",
    RarityValue: 2,
    AddedFertility: 1010571,
    EffectTargets: [
      {GUID: 1010262}
    ],
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190917,
    Type: "GuildhouseItem",
    Name: "Gekreuztes Getreidesaatgut",
    FileName: "3dicons/fertilities/icon_seeds_grain.png",
    Rarity: "Epic",
    RarityValue: 3,
    Productivity: 25,
    AddedFertility: 1010571,
    EffectTargets: [
      {GUID: 1010262}
    ],
    ExpeditionAttribute: {
      BaseMorale: 15,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190919,
    Type: "GuildhouseItem",
    Name: "Hopfensaatgut",
    FileName: "3dicons/fertilities/icon_seeds_hops.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    Productivity: -15,
    AddedFertility: 1010572,
    EffectTargets: [
      {GUID: 1010264}
    ],
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190920,
    Type: "GuildhouseItem",
    Name: "Qualitäts-Hopfensaatgut",
    FileName: "3dicons/fertilities/icon_seeds_hops.png",
    Rarity: "Rare",
    RarityValue: 2,
    AddedFertility: 1010572,
    EffectTargets: [
      {GUID: 1010264}
    ],
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190921,
    Type: "GuildhouseItem",
    Name: "Gekreuztes Hopfensaatgut",
    FileName: "3dicons/fertilities/icon_seeds_hops.png",
    Rarity: "Epic",
    RarityValue: 3,
    Productivity: 25,
    AddedFertility: 1010572,
    EffectTargets: [
      {GUID: 1010264}
    ],
    ExpeditionAttribute: {
      BaseMorale: 15,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190922,
    Type: "GuildhouseItem",
    Name: "Kartoffelkeimlinge",
    FileName: "3dicons/fertilities/icon_seeds_potatoe.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    Productivity: -15,
    AddedFertility: 1010569,
    EffectTargets: [
      {GUID: 1010265}
    ],
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190923,
    Type: "GuildhouseItem",
    Name: "Qualitäts-Kartoffelkeimlinge",
    FileName: "3dicons/fertilities/icon_seeds_potatoe.png",
    Rarity: "Rare",
    RarityValue: 2,
    AddedFertility: 1010569,
    EffectTargets: [
      {GUID: 1010265}
    ],
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190924,
    Type: "GuildhouseItem",
    Name: "Gekreuzte Kartoffelkeimlinge",
    FileName: "3dicons/fertilities/icon_seeds_potatoe.png",
    Rarity: "Epic",
    RarityValue: 3,
    Productivity: 25,
    AddedFertility: 1010569,
    EffectTargets: [
      {GUID: 1010265}
    ],
    ExpeditionAttribute: {
      BaseMorale: 15,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190925,
    Type: "GuildhouseItem",
    Name: "Weinreben",
    FileName: "3dicons/fertilities/icon_seeds_grapes.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    Productivity: -15,
    AddedFertility: 120013,
    EffectTargets: [
      {GUID: 100655}
    ],
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190926,
    Type: "GuildhouseItem",
    Name: "Qualitäts-Weinreben",
    FileName: "3dicons/fertilities/icon_seeds_grapes.png",
    Rarity: "Rare",
    RarityValue: 2,
    AddedFertility: 120013,
    EffectTargets: [
      {GUID: 100655}
    ],
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190927,
    Type: "GuildhouseItem",
    Name: "Gekreuzte Weinreben",
    FileName: "3dicons/fertilities/icon_seeds_grapes.png",
    Rarity: "Epic",
    RarityValue: 3,
    Productivity: 25,
    AddedFertility: 120013,
    EffectTargets: [
      {GUID: 100655}
    ],
    ExpeditionAttribute: {
      BaseMorale: 15,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190928,
    Type: "GuildhouseItem",
    Name: "Paprikasaatgut",
    FileName: "3dicons/fertilities/icon_seeds_pepper.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    Productivity: -15,
    AddedFertility: 1010570,
    EffectTargets: [
      {GUID: 100654}
    ],
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190929,
    Type: "GuildhouseItem",
    Name: "Qualitäts-Paprikasaatgut",
    FileName: "3dicons/fertilities/icon_seeds_pepper.png",
    Rarity: "Rare",
    RarityValue: 2,
    AddedFertility: 1010570,
    EffectTargets: [
      {GUID: 100654}
    ],
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190930,
    Type: "GuildhouseItem",
    Name: "Gekreuztes Paprikasaatgut",
    FileName: "3dicons/fertilities/icon_seeds_pepper.png",
    Rarity: "Epic",
    RarityValue: 3,
    Productivity: 25,
    AddedFertility: 1010570,
    EffectTargets: [
      {GUID: 100654}
    ],
    ExpeditionAttribute: {
      BaseMorale: 15,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190931,
    Type: "GuildhouseItem",
    Name: "Zuckerrohrsetzlinge",
    FileName: "3dicons/fertilities/icon_seeds_sugar.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    Productivity: -15,
    AddedFertility: 1010573,
    EffectTargets: [
      {GUID: 1010329}
    ],
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190932,
    Type: "GuildhouseItem",
    Name: "Qualitäts-Zuckerrohrsetzlinge",
    FileName: "3dicons/fertilities/icon_seeds_sugar.png",
    Rarity: "Rare",
    RarityValue: 2,
    AddedFertility: 1010573,
    EffectTargets: [
      {GUID: 1010329}
    ],
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190933,
    Type: "GuildhouseItem",
    Name: "Gekreuzte Zuckerrohrsetzlinge",
    FileName: "3dicons/fertilities/icon_seeds_sugar.png",
    Rarity: "Epic",
    RarityValue: 3,
    Productivity: 25,
    AddedFertility: 1010573,
    EffectTargets: [
      {GUID: 1010329}
    ],
    ExpeditionAttribute: {
      BaseMorale: 15,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190934,
    Type: "GuildhouseItem",
    Name: "Tabaksaatgut",
    FileName: "3dicons/fertilities/icon_seeds_tobacco.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    Productivity: -15,
    AddedFertility: 1010577,
    EffectTargets: [
      {GUID: 1010330}
    ],
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190935,
    Type: "GuildhouseItem",
    Name: "Qualitäts-Tabaksaatgut",
    FileName: "3dicons/fertilities/icon_seeds_tobacco.png",
    Rarity: "Rare",
    RarityValue: 2,
    AddedFertility: 1010577,
    EffectTargets: [
      {GUID: 1010330}
    ],
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190936,
    Type: "GuildhouseItem",
    Name: "Gekreuztes Tabaksaatgut",
    FileName: "3dicons/fertilities/icon_seeds_tobacco.png",
    Rarity: "Epic",
    RarityValue: 3,
    Productivity: 25,
    AddedFertility: 1010577,
    EffectTargets: [
      {GUID: 1010330}
    ],
    ExpeditionAttribute: {
      BaseMorale: 15,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190937,
    Type: "GuildhouseItem",
    Name: "Baumwollsamen",
    FileName: "3dicons/fertilities/icon_seeds_cotton.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    Productivity: -15,
    AddedFertility: 1010576,
    EffectTargets: [
      {GUID: 1010331}
    ],
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190938,
    Type: "GuildhouseItem",
    Name: "Qualitäts-Baumwollsamen",
    FileName: "3dicons/fertilities/icon_seeds_cotton.png",
    Rarity: "Rare",
    RarityValue: 2,
    AddedFertility: 1010576,
    EffectTargets: [
      {GUID: 1010331}
    ],
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190939,
    Type: "GuildhouseItem",
    Name: "Gekreuzte Baumwollsamen",
    FileName: "3dicons/fertilities/icon_seeds_cotton.png",
    Rarity: "Epic",
    RarityValue: 3,
    Productivity: 25,
    AddedFertility: 1010576,
    EffectTargets: [
      {GUID: 1010331}
    ],
    ExpeditionAttribute: {
      BaseMorale: 15,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190940,
    Type: "GuildhouseItem",
    Name: "Kakaobohnen",
    FileName: "3dicons/fertilities/icon_seeds_cocoa.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    Productivity: -15,
    AddedFertility: 1010575,
    EffectTargets: [
      {GUID: 1010332}
    ],
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190941,
    Type: "GuildhouseItem",
    Name: "Qualitäts-Kakaobohnen",
    FileName: "3dicons/fertilities/icon_seeds_cocoa.png",
    Rarity: "Rare",
    RarityValue: 2,
    AddedFertility: 1010575,
    EffectTargets: [
      {GUID: 1010332}
    ],
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190942,
    Type: "GuildhouseItem",
    Name: "Gekreuzte Kakaobohnen",
    FileName: "3dicons/fertilities/icon_seeds_cocoa.png",
    Rarity: "Epic",
    RarityValue: 3,
    Productivity: 25,
    AddedFertility: 1010575,
    EffectTargets: [
      {GUID: 1010332}
    ],
    ExpeditionAttribute: {
      BaseMorale: 15,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190943,
    Type: "GuildhouseItem",
    Name: "Kautschuksetzlinge",
    FileName: "3dicons/fertilities/icon_seeds_rubber.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    Productivity: -15,
    AddedFertility: 1010574,
    EffectTargets: [
      {GUID: 1010333}
    ],
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190944,
    Type: "GuildhouseItem",
    Name: "Qualitäts-Kautschuksetzlinge",
    FileName: "3dicons/fertilities/icon_seeds_rubber.png",
    Rarity: "Rare",
    RarityValue: 2,
    AddedFertility: 1010574,
    EffectTargets: [
      {GUID: 1010333}
    ],
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190945,
    Type: "GuildhouseItem",
    Name: "Gekreuzte Kautschuksetzlinge",
    FileName: "3dicons/fertilities/icon_seeds_rubber.png",
    Rarity: "Epic",
    RarityValue: 3,
    Productivity: 25,
    AddedFertility: 1010574,
    EffectTargets: [
      {GUID: 1010333}
    ],
    ExpeditionAttribute: {
      BaseMorale: 15,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190946,
    Type: "GuildhouseItem",
    Name: "Kaffeebohnen",
    FileName: "3dicons/fertilities/icon_seeds_coffee.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    Productivity: -15,
    AddedFertility: 120039,
    EffectTargets: [
      {GUID: 101251}
    ],
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190947,
    Type: "GuildhouseItem",
    Name: "Qualitäts-Kaffeebohnen",
    FileName: "3dicons/fertilities/icon_seeds_coffee.png",
    Rarity: "Rare",
    RarityValue: 2,
    AddedFertility: 120039,
    EffectTargets: [
      {GUID: 101251}
    ],
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190948,
    Type: "GuildhouseItem",
    Name: "Gekreuzte Kaffeebohnen",
    FileName: "3dicons/fertilities/icon_seeds_coffee.png",
    Rarity: "Epic",
    RarityValue: 3,
    Productivity: 25,
    AddedFertility: 120039,
    EffectTargets: [
      {GUID: 101251}
    ],
    ExpeditionAttribute: {
      BaseMorale: 15,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190949,
    Type: "GuildhouseItem",
    Name: "Maissaatgut",
    FileName: "3dicons/fertilities/icon_seeds_corn.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    Productivity: -15,
    AddedFertility: 120038,
    EffectTargets: [
      {GUID: 101270}
    ],
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190950,
    Type: "GuildhouseItem",
    Name: "Qualitäts-Maissaatgut",
    FileName: "3dicons/fertilities/icon_seeds_corn.png",
    Rarity: "Rare",
    RarityValue: 2,
    AddedFertility: 120038,
    EffectTargets: [
      {GUID: 101270}
    ],
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190951,
    Type: "GuildhouseItem",
    Name: "Gekreuztes Maissaatgut",
    FileName: "3dicons/fertilities/icon_seeds_corn.png",
    Rarity: "Epic",
    RarityValue: 3,
    Productivity: 25,
    AddedFertility: 120038,
    EffectTargets: [
      {GUID: 101270}
    ],
    ExpeditionAttribute: {
      BaseMorale: 15,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191824,
    Type: "VehicleItem",
    Name: "Rahsegel",
    FileName: "3dicons/icon_sail.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    ForwardSpeedUpgrade: 7,
    Allocation: "SailShip",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Navigation", Amount: 20}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191013,
    Type: "VehicleItem",
    Name: "Lateinersegel",
    FileName: "3dicons/icon_lateen_sails.png",
    Rarity: "Rare",
    RarityValue: 2,
    ForwardSpeedUpgrade: 10,
    IgnoreWeightFactorUpgrade: 25,
    Allocation: "SailShip",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Navigation", Amount: 30}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191825,
    Type: "VehicleItem",
    Name: "Schratsegel",
    FileName: "3dicons/icon_sail.png",
    Rarity: "Epic",
    RarityValue: 3,
    ForwardSpeedUpgrade: 15,
    IgnoreWeightFactorUpgrade: 50,
    IgnoreDamageFactorUpgrade: 50,
    Allocation: "SailShip",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Navigation", Amount: 40}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191829,
    Type: "VehicleItem",
    Name: "Langer Schraubenpropeller",
    FileName: "3dicons/machine_items/icon_screw_propeller_1.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    ForwardSpeedUpgrade: 7,
    Allocation: "SteamShip",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Navigation", Amount: 10}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191830,
    Type: "VehicleItem",
    Name: "Kurzer Schraubenpropeller",
    FileName: "3dicons/machine_items/icon_screw_propeller_2.png",
    Rarity: "Rare",
    RarityValue: 2,
    ForwardSpeedUpgrade: 10,
    IgnoreWeightFactorUpgrade: 25,
    Allocation: "SteamShip",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Navigation", Amount: 20}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191831,
    Type: "VehicleItem",
    Name: "Verstellbarer Propeller",
    FileName: "3dicons/machine_items/icon_screw_propeller_3.png",
    Rarity: "Epic",
    RarityValue: 3,
    ForwardSpeedUpgrade: 15,
    IgnoreWeightFactorUpgrade: 50,
    IgnoreDamageFactorUpgrade: 50,
    Allocation: "SteamShip",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Navigation", Amount: 30}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191838,
    Type: "VehicleItem",
    Name: "Gutes Fernglas",
    FileName: "3dicons/consumables/icon_telescope_1.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    AttackRangeUpgrade: 5,
    LineOfSightRangeUpgrade: 5,
    ExclusiveGroup: "Telescopes",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Navigation", Amount: 20},
        {Attribute: "Hunting", Amount: 10}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191839,
    Type: "VehicleItem",
    Name: "Stark vergrößerndes Teleskop",
    FileName: "3dicons/consumables/icon_telescope_2.png",
    Rarity: "Rare",
    RarityValue: 2,
    AttackRangeUpgrade: 10,
    LineOfSightRangeUpgrade: 10,
    ExclusiveGroup: "Telescopes",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Navigation", Amount: 30},
        {Attribute: "Hunting", Amount: 15}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191840,
    Type: "VehicleItem",
    Name: "Telemobiloskop",
    FileName: "3dicons/consumables/icon_telescope_3.png",
    Rarity: "Epic",
    RarityValue: 3,
    AttackRangeUpgrade: 15,
    LineOfSightRangeUpgrade: 15,
    ExclusiveGroup: "Telescopes",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Navigation", Amount: 40},
        {Attribute: "Hunting", Amount: 20}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191848,
    Type: "VehicleItem",
    Name: "Guter hölzerner Rumpf",
    FileName: "3dicons/consumables/icon_hull_1.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    ForwardSpeedUpgrade: -10,
    MaxHitpointsUpgrade: 20,
    MaxHitpointsPercental: 1,
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Might", Amount: 10}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191849,
    Type: "VehicleItem",
    Name: "Guter stählerner Rumpf",
    FileName: "3dicons/consumables/icon_hull_2.png",
    Rarity: "Rare",
    RarityValue: 2,
    ForwardSpeedUpgrade: -5,
    MaxHitpointsUpgrade: 30,
    MaxHitpointsPercental: 1,
    DamageReceiveFactorCannon: 0.85,
    DamageReceiveFactorBigBertha: 0.85,
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Might", Amount: 25}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191850,
    Type: "VehicleItem",
    Name: "Verstärkte Schotten",
    FileName: "3dicons/consumables/icon_hull_3.png",
    Rarity: "Epic",
    RarityValue: 3,
    MaxHitpointsUpgrade: 40,
    MaxHitpointsPercental: 1,
    DamageReceiveFactorCannon: 0.75,
    DamageReceiveFactorBigBertha: 0.75,
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Might", Amount: 35}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191851,
    Type: "VehicleItem",
    Name: "Singhs stählerne Doppelhülle",
    FileName: "3dicons/consumables/icon_hull_4.png",
    Rarity: "Legendary",
    RarityValue: 4,
    MaxHitpointsUpgrade: 50,
    MaxHitpointsPercental: 1,
    DamageReceiveFactorTorpedo: 0.85,
    DamageReceiveFactorCannon: 0.75,
    DamageReceiveFactorBigBertha: 0.75,
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Might", Amount: 50}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191852,
    Type: "VehicleItem",
    Name: "Congravesche Rakete",
    FileName: "3dicons/consumables/icon_cannon_0.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    BaseDamageUpgrade: 10,
    Allocation: "Warship",
    ExclusiveGroup: "Canons",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Might", Amount: 20}
      ]
    },
    LastChange: "2019-07-30T11:05:12.000Z"
  },
  {
    GUID: 191853,
    Type: "VehicleItem",
    Name: "18-Pfünder",
    FileName: "3dicons/consumables/icon_cannon_1.png",
    Rarity: "Rare",
    RarityValue: 2,
    BaseDamageUpgrade: 15,
    Allocation: "Warship",
    ExclusiveGroup: "Canons",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Might", Amount: 30}
      ]
    },
    LastChange: "2019-07-30T11:05:12.000Z"
  },
  {
    GUID: 191854,
    Type: "VehicleItem",
    Name: "Bombenkanone",
    FileName: "3dicons/consumables/icon_cannon_2.png",
    Rarity: "Epic",
    RarityValue: 3,
    BaseDamageUpgrade: 25,
    Allocation: "Warship",
    ExclusiveGroup: "Canons",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Might", Amount: 40}
      ]
    },
    LastChange: "2019-07-30T11:05:12.000Z"
  },
  {
    GUID: 191855,
    Type: "VehicleItem",
    Name: "Strongarms Verschwindlafette",
    FileName: "3dicons/consumables/icon_cannon_4.png",
    Rarity: "Legendary",
    RarityValue: 4,
    BaseDamageUpgrade: 35,
    Allocation: "Warship",
    ExclusiveGroup: "Canons",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Might", Amount: 50}
      ]
    },
    LastChange: "2019-07-30T11:05:12.000Z"
  },
  {
    GUID: 191856,
    Type: "VehicleItem",
    Name: "Lüfter",
    FileName: "3dicons/machine_items/icon_heatexchanger_1.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    IgnoreDamageFactorUpgrade: 35,
    Allocation: "SteamShip",
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191857,
    Type: "VehicleItem",
    Name: "Wärmetauscher",
    FileName: "3dicons/machine_items/icon_heatexchanger_2.png",
    Rarity: "Rare",
    RarityValue: 2,
    IgnoreDamageFactorUpgrade: 50,
    MaxHitpointsUpgrade: 15,
    MaxHitpointsPercental: 1,
    Allocation: "SteamShip",
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191858,
    Type: "VehicleItem",
    Name: "Plattenwärmetauscher",
    FileName: "3dicons/machine_items/icon_heatexchanger_3.png",
    Rarity: "Epic",
    RarityValue: 3,
    IgnoreDamageFactorUpgrade: 100,
    MaxHitpointsUpgrade: 30,
    MaxHitpointsPercental: 1,
    Allocation: "SteamShip",
    ExpeditionAttribute: {
      BaseMorale: 15,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191878,
    Type: "VehicleItem",
    Name: "Weiße Flagge",
    FileName: "3dicons/icon_white_flag.png",
    Rarity: "Epic",
    RarityValue: 3,
    ExclusiveGroup: "Flag",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Diplomacy", Amount: 10}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191991,
    Type: "VehicleItem",
    Name: "Große weiße Flagge",
    FileName: "3dicons/consumables/icon_white_flag_2.png",
    Rarity: "Legendary",
    RarityValue: 4,
    ActiveTradePriceInPercent: 85,
    ExclusiveGroup: "Flag",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Diplomacy", Amount: 20}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191879,
    Type: "HarborOfficeItem",
    Name: "Werftwerkzeugkiste",
    FileName: "3dicons/military_items/ico_repair_toolset.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    MaintenanceUpgrade: 15,
    SelfHealUpgrade: 50,
    EffectTargets: [
      {GUID: 191508}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Crafting", Amount: 20}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191880,
    Type: "HarborOfficeItem",
    Name: "Werftwerkzeugtruhe",
    FileName: "3dicons/military_items/ico_repair_toolset.png",
    Rarity: "Rare",
    RarityValue: 2,
    SelfHealUpgrade: 75,
    EffectTargets: [
      {GUID: 191508}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Crafting", Amount: 30}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191881,
    Type: "HarborOfficeItem",
    Name: "Werftwerkzeugsystem",
    FileName: "3dicons/consumables/icon_building_repair_1.png",
    Rarity: "Epic",
    RarityValue: 3,
    SelfHealUpgrade: 100,
    EffectTargets: [
      {GUID: 191508}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Crafting", Amount: 40}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191882,
    Type: "HarborOfficeItem",
    Name: "Dekes unentbehrliche Werftkiste",
    FileName: "3dicons/consumables/icon_building_repair_2.png",
    Rarity: "Legendary",
    RarityValue: 4,
    MaintenanceUpgrade: -25,
    SelfHealUpgrade: 150,
    EffectTargets: [
      {GUID: 191508}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Crafting", Amount: 50}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191883,
    Type: "HarborOfficeItem",
    Name: "Hölzerner Reparaturkran",
    FileName: "3dicons/consumables/icon_construction_crane_1.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    EffectTargets: [
      {GUID: 191887}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Crafting", Amount: 20}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191884,
    Type: "HarborOfficeItem",
    Name: "Portal-Reparaturkran",
    FileName: "3dicons/consumables/icon_construction_crane_2.png",
    Rarity: "Rare",
    RarityValue: 2,
    EffectTargets: [
      {GUID: 191887}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Crafting", Amount: 30}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191885,
    Type: "HarborOfficeItem",
    Name: "Schienen-Reparaturkran",
    FileName: "3dicons/consumables/icon_construction_crane_3.png",
    Rarity: "Epic",
    RarityValue: 3,
    EffectTargets: [
      {GUID: 191887}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Crafting", Amount: 40}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191886,
    Type: "HarborOfficeItem",
    Name: "Hydraulischer Reparaturkran",
    FileName: "3dicons/consumables/icon_construction_crane_4.png",
    Rarity: "Legendary",
    RarityValue: 4,
    EffectTargets: [
      {GUID: 191887}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Crafting", Amount: 50}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191888,
    Type: "HarborOfficeItem",
    Name: "Megaphon",
    FileName: "3dicons/consumables/icon_loudspeaker_1.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    MaintenanceUpgrade: 15,
    EffectTargets: [
      {GUID: 191443}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Melee", Amount: 10}
      ]
    },
    LastChange: "2019-06-05T12:14:19.000Z"
  },
  {
    GUID: 191889,
    Type: "HarborOfficeItem",
    Name: "Auxetophon",
    FileName: "3dicons/consumables/icon_loudspeaker_2.png",
    Rarity: "Rare",
    RarityValue: 2,
    EffectTargets: [
      {GUID: 191443}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Melee", Amount: 15}
      ]
    },
    LastChange: "2019-06-05T12:14:19.000Z"
  },
  {
    GUID: 191890,
    Type: "HarborOfficeItem",
    Name: "Dynamischer Lautsprecher",
    FileName: "3dicons/military_items/icon_loudspeaker.png",
    Rarity: "Epic",
    RarityValue: 3,
    EffectTargets: [
      {GUID: 191443}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Melee", Amount: 20}
      ]
    },
    LastChange: "2019-06-05T12:14:19.000Z"
  },
  {
    GUID: 192177,
    Type: "HarborOfficeItem",
    Name: "Dröhnender Lautsprecherverbund",
    FileName: "3dicons/consumables/icon_loudspeaker_3.png",
    Rarity: "Legendary",
    RarityValue: 4,
    EffectTargets: [
      {GUID: 191443}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Melee", Amount: 25}
      ]
    },
    LastChange: "2019-06-05T12:14:19.000Z"
  },
  {
    GUID: 191894,
    Type: "HarborOfficeItem",
    Name: "Holzkran",
    FileName: "3dicons/consumables/icon_repair_crane_1.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    IncidentFireIncreaseUpgrade: 4,
    EffectTargets: [
      {GUID: 190783}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Crafting", Amount: 20}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191895,
    Type: "HarborOfficeItem",
    Name: "Portalkran",
    FileName: "3dicons/consumables/icon_repair_crane_1.png",
    Rarity: "Rare",
    RarityValue: 2,
    IncidentFireIncreaseUpgrade: 2,
    EffectTargets: [
      {GUID: 190783}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Crafting", Amount: 30}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191896,
    Type: "HarborOfficeItem",
    Name: "Schienenkran",
    FileName: "3dicons/consumables/icon_repair_crane_2.png",
    Rarity: "Epic",
    RarityValue: 3,
    EffectTargets: [
      {GUID: 190783}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Crafting", Amount: 40}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 192036,
    Type: "HarborOfficeItem",
    Name: "Hydraulischer Kran",
    FileName: "3dicons/consumables/icon_repair_crane_3.png",
    Rarity: "Legendary",
    RarityValue: 4,
    Workforce: -50,
    EffectTargets: [
      {GUID: 190783}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Crafting", Amount: 50}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191897,
    Type: "GuildhouseItem",
    Name: "Bananensetzlinge",
    FileName: "3dicons/fertilities/icon_fertility_banana.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    Productivity: -15,
    AddedFertility: 120040,
    EffectTargets: [
      {GUID: 101263}
    ],
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191898,
    Type: "GuildhouseItem",
    Name: "Qualitäts-Bananensetzlinge",
    FileName: "3dicons/fertilities/icon_fertility_banana.png",
    Rarity: "Rare",
    RarityValue: 2,
    AddedFertility: 120040,
    EffectTargets: [
      {GUID: 101263}
    ],
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191899,
    Type: "GuildhouseItem",
    Name: "Gekreuzte Bananensetzlinge",
    FileName: "3dicons/fertilities/icon_fertility_banana.png",
    Rarity: "Epic",
    RarityValue: 3,
    Productivity: 25,
    AddedFertility: 120040,
    EffectTargets: [
      {GUID: 101263}
    ],
    ExpeditionAttribute: {
      BaseMorale: 15,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191900,
    Type: "GuildhouseItem",
    Name: "Austernlaich",
    FileName: "3dicons/fertilities/icon_fertility_pearl.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    Productivity: -15,
    AddedFertility: 120018,
    Allocation: "HarborOffice",
    EffectTargets: [
      {GUID: 1010339}
    ],
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191901,
    Type: "GuildhouseItem",
    Name: "Qualitäts-Austernlaich",
    FileName: "3dicons/fertilities/icon_fertility_pearl.png",
    Rarity: "Rare",
    RarityValue: 2,
    AddedFertility: 120018,
    Allocation: "HarborOffice",
    EffectTargets: [
      {GUID: 1010339}
    ],
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191902,
    Type: "GuildhouseItem",
    Name: "Gekreuzter Austernlaich",
    FileName: "3dicons/fertilities/icon_fertility_pearl.png",
    Rarity: "Epic",
    RarityValue: 3,
    Productivity: 25,
    AddedFertility: 120018,
    Allocation: "HarborOffice",
    EffectTargets: [
      {GUID: 1010339}
    ],
    ExpeditionAttribute: {
      BaseMorale: 15,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191675,
    Type: "GuildhouseItem",
    Name: "Inspektionszertifikat",
    FileName: "3dicons/museum/icon_book_comon.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    MaintenanceUpgrade: -10,
    IncidentFireIncreaseUpgrade: 2,
    ExclusiveGroup: "FactoryAct",
    EffectTargets: [
      {GUID: 6000018}
    ],
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191676,
    Type: "GuildhouseItem",
    Name: "Zertifizierter Industriestandard",
    FileName: "3dicons/museum/icon_book_uncommon.png",
    Rarity: "Rare",
    RarityValue: 2,
    MaintenanceUpgrade: -25,
    IncidentFireIncreaseUpgrade: 3,
    ExclusiveGroup: "FactoryAct",
    EffectTargets: [
      {GUID: 6000018}
    ],
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191677,
    Type: "GuildhouseItem",
    Name: "Von Malchings Arbeitergesetzesvorhaben",
    FileName: "3dicons/museum/icon_book_rare.png",
    Rarity: "Epic",
    RarityValue: 3,
    MaintenanceUpgrade: -50,
    IncidentFireIncreaseUpgrade: 4,
    ExclusiveGroup: "FactoryAct",
    EffectTargets: [
      {GUID: 6000018}
    ],
    ExpeditionAttribute: {
      BaseMorale: 15,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191681,
    Type: "GuildhouseItem",
    Name: "Brandschutzplakat",
    FileName: "3dicons/museum/icon_book_comon.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    MaintenanceUpgrade: 5,
    IncidentFireIncreaseUpgrade: -3,
    ExclusiveGroup: "FactoryAct",
    EffectTargets: [
      {GUID: 6000018}
    ],
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191682,
    Type: "GuildhouseItem",
    Name: "Brandschutzdirektive",
    FileName: "3dicons/museum/icon_book_uncommon.png",
    Rarity: "Rare",
    RarityValue: 2,
    MaintenanceUpgrade: 10,
    IncidentFireIncreaseUpgrade: -5,
    ExclusiveGroup: "FactoryAct",
    EffectTargets: [
      {GUID: 6000018}
    ],
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191683,
    Type: "GuildhouseItem",
    Name: "Fizgigs Fabelhafte Feuerschutz-Fehlervermeidung",
    FileName: "3dicons/museum/icon_book_rare.png",
    Rarity: "Epic",
    RarityValue: 3,
    MaintenanceUpgrade: 15,
    IncidentFireIncreaseUpgrade: -7,
    ExclusiveGroup: "FactoryAct",
    EffectTargets: [
      {GUID: 6000018}
    ],
    ExpeditionAttribute: {
      BaseMorale: 15,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191684,
    Type: "GuildhouseItem",
    Name: "Kohlennutzungsgenehmigung",
    FileName: "3dicons/museum/icon_book_comon.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    Productivity: 25,
    AttractiveNess: 20,
    AttractiveNessPercental: 1,
    ExclusiveGroup: "CleanAirAct",
    EffectTargets: [
      {GUID: 190842}
    ],
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191685,
    Type: "GuildhouseItem",
    Name: "Umfassende Kohlennutzungsgenehmigung",
    FileName: "3dicons/museum/icon_book_uncommon.png",
    Rarity: "Rare",
    RarityValue: 2,
    Productivity: 40,
    AttractiveNess: 40,
    AttractiveNessPercental: 1,
    ExclusiveGroup: "CleanAirAct",
    EffectTargets: [
      {GUID: 190842}
    ],
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191686,
    Type: "GuildhouseItem",
    Name: "Lord Footprints „Gigantische Schlote“-Verordnung",
    FileName: "3dicons/museum/icon_book_rare.png",
    Rarity: "Epic",
    RarityValue: 3,
    Productivity: 55,
    AttractiveNess: 60,
    AttractiveNessPercental: 1,
    ExclusiveGroup: "CleanAirAct",
    EffectTargets: [
      {GUID: 190842}
    ],
    ExpeditionAttribute: {
      BaseMorale: 15,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191687,
    Type: "GuildhouseItem",
    Name: "Nachtverschmutzungs-Statut",
    FileName: "3dicons/museum/icon_book_comon.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    Productivity: -10,
    AttractiveNess: -40,
    AttractiveNessPercental: 1,
    ExclusiveGroup: "CleanAirAct",
    EffectTargets: [
      {GUID: 190842}
    ],
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191688,
    Type: "GuildhouseItem",
    Name: "Tag-und-Nachtverschmutzungs-Statut",
    FileName: "3dicons/museum/icon_book_uncommon.png",
    Rarity: "Rare",
    RarityValue: 2,
    Productivity: -20,
    AttractiveNess: -60,
    AttractiveNessPercental: 1,
    ExclusiveGroup: "CleanAirAct",
    EffectTargets: [
      {GUID: 190842}
    ],
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191689,
    Type: "GuildhouseItem",
    Name: "Greens Gesetz zur Aufschiebung der Apokalypse",
    FileName: "3dicons/museum/icon_book_rare.png",
    Rarity: "Epic",
    RarityValue: 3,
    Productivity: -30,
    AttractiveNess: -80,
    AttractiveNessPercental: 1,
    ExclusiveGroup: "CleanAirAct",
    EffectTargets: [
      {GUID: 190842}
    ],
    ExpeditionAttribute: {
      BaseMorale: 15,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191690,
    Type: "TownhallItem",
    Name: "Schlaglochverfügung",
    FileName: "3dicons/museum/icon_book_comon.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    MaintenanceUpgrade: 5,
    PublicServiceFullSatisfactionDistance: 15,
    PublicServiceNoSatisfactionDistance: 15,
    PublicServiceDistance: 15,
    ExclusiveGroup: "AdministrationAct",
    EffectTargets: [
      {GUID: 191501}
    ],
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191691,
    Type: "TownhallItem",
    Name: "Stadtplanverordnung",
    FileName: "3dicons/museum/icon_book_uncommon.png",
    Rarity: "Rare",
    RarityValue: 2,
    MaintenanceUpgrade: 10,
    PublicServiceFullSatisfactionDistance: 25,
    PublicServiceNoSatisfactionDistance: 25,
    PublicServiceDistance: 25,
    ExclusiveGroup: "AdministrationAct",
    EffectTargets: [
      {GUID: 191501}
    ],
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191692,
    Type: "TownhallItem",
    Name: "Monsieur Fontaines Straßenschild-Statuten",
    FileName: "3dicons/museum/icon_book_rare.png",
    Rarity: "Epic",
    RarityValue: 3,
    MaintenanceUpgrade: 15,
    PublicServiceFullSatisfactionDistance: 35,
    PublicServiceNoSatisfactionDistance: 35,
    PublicServiceDistance: 35,
    ExclusiveGroup: "AdministrationAct",
    EffectTargets: [
      {GUID: 191501}
    ],
    ExpeditionAttribute: {
      BaseMorale: 15,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191693,
    Type: "TownhallItem",
    Name: "Verordnung zur Mittagsschließung",
    FileName: "3dicons/museum/icon_book_comon.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    MaintenanceUpgrade: -10,
    PublicServiceFullSatisfactionDistance: -5,
    PublicServiceNoSatisfactionDistance: -5,
    PublicServiceDistance: -5,
    ExclusiveGroup: "AdministrationAct",
    EffectTargets: [
      {GUID: 191501}
    ],
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191694,
    Type: "TownhallItem",
    Name: "Verordnung zur frühen Schließung",
    FileName: "3dicons/museum/icon_book_uncommon.png",
    Rarity: "Rare",
    RarityValue: 2,
    MaintenanceUpgrade: -25,
    PublicServiceFullSatisfactionDistance: -10,
    PublicServiceNoSatisfactionDistance: -10,
    PublicServiceDistance: -10,
    ExclusiveGroup: "AdministrationAct",
    EffectTargets: [
      {GUID: 191501}
    ],
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191695,
    Type: "TownhallItem",
    Name: "Eagerlys Jeder-fünfte-Tag-ein-halber-Tag-Verordnung",
    FileName: "3dicons/museum/icon_book_rare.png",
    Rarity: "Epic",
    RarityValue: 3,
    MaintenanceUpgrade: -50,
    PublicServiceFullSatisfactionDistance: -15,
    PublicServiceNoSatisfactionDistance: -15,
    PublicServiceDistance: -15,
    ExclusiveGroup: "AdministrationAct",
    EffectTargets: [
      {GUID: 191501}
    ],
    ExpeditionAttribute: {
      BaseMorale: 15,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191696,
    Type: "TownhallItem",
    Name: "Alleinunterhalter-Reklametafel",
    FileName: "3dicons/posters/icon_culture_flyer_01.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    MaintenanceUpgrade: 5,
    AttractiveNess: 5,
    EffectTargets: [
      {GUID: 190782},
      {GUID: 1010361}
    ],
    LastChange: "2019-07-30T11:05:12.000Z"
  },
  {
    GUID: 191697,
    Type: "TownhallItem",
    Name: "Klavierkonzert-Reklametafel",
    FileName: "3dicons/posters/icon_culture_flyer_02.png",
    Rarity: "Rare",
    RarityValue: 2,
    MaintenanceUpgrade: 10,
    AttractiveNess: 7,
    EffectTargets: [
      {GUID: 190782},
      {GUID: 1010361}
    ],
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2020-03-24T13:25:41.000Z"
  },
  {
    GUID: 191698,
    Type: "TownhallItem",
    Name: "Reklametafel für La Condesa Del Amors majestätischen Tanz",
    FileName: "3dicons/posters/icon_culture_flyer_03.png",
    Rarity: "Epic",
    RarityValue: 3,
    MaintenanceUpgrade: 15,
    AttractiveNess: 10,
    EffectTargets: [
      {GUID: 190782},
      {GUID: 1010361}
    ],
    ExpeditionAttribute: {
      BaseMorale: 15,
      ExpeditionAttributes: []
    },
    LastChange: "2020-03-24T13:25:41.000Z"
  },
  {
    GUID: 191702,
    Type: "TownhallItem",
    Name: "„Seltene Artefakte“-Broschüre",
    FileName: "3dicons/posters/icon_culture_flyer_01.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    MaintenanceUpgrade: 5,
    AttractiveNess: 5,
    EffectTargets: [
      {GUID: 1010362},
      {GUID: 1010364}
    ],
    LastChange: "2019-07-30T11:05:12.000Z"
  },
  {
    GUID: 191703,
    Type: "TownhallItem",
    Name: "Kuriositätenkabinett-Broschüre",
    FileName: "3dicons/posters/icon_culture_flyer_02.png",
    Rarity: "Rare",
    RarityValue: 2,
    MaintenanceUpgrade: 10,
    AttractiveNess: 7,
    EffectTargets: [
      {GUID: 1010362},
      {GUID: 1010364}
    ],
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2020-03-24T13:25:41.000Z"
  },
  {
    GUID: 191704,
    Type: "TownhallItem",
    Name: "Das „Tal des Todes“ - Ein Traktat über die oberen Königreiche",
    FileName: "3dicons/posters/icon_culture_flyer_03.png",
    Rarity: "Epic",
    RarityValue: 3,
    MaintenanceUpgrade: 15,
    AttractiveNess: 10,
    EffectTargets: [
      {GUID: 1010362},
      {GUID: 1010364}
    ],
    ExpeditionAttribute: {
      BaseMorale: 15,
      ExpeditionAttributes: []
    },
    LastChange: "2020-03-24T13:25:41.000Z"
  },
  {
    GUID: 191705,
    Type: "TownhallItem",
    Name: "Kuchenverkauf-Flugblatt",
    FileName: "3dicons/posters/icon_culture_flyer_01.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    MaintenanceUpgrade: 5,
    AttractiveNess: 5,
    EffectTargets: [
      {GUID: 1010360},
      {GUID: 1010359},
      {GUID: 101258}
    ],
    LastChange: "2019-07-30T11:05:12.000Z"
  },
  {
    GUID: 191706,
    Type: "TownhallItem",
    Name: "Knabenchor-Flugblatt",
    FileName: "3dicons/posters/icon_culture_flyer_02.png",
    Rarity: "Rare",
    RarityValue: 2,
    MaintenanceUpgrade: 10,
    AttractiveNess: 7,
    EffectTargets: [
      {GUID: 1010360},
      {GUID: 1010359},
      {GUID: 101258}
    ],
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2020-03-24T13:25:41.000Z"
  },
  {
    GUID: 191707,
    Type: "TownhallItem",
    Name: "Crimbles' Chorgesellschafts-Plakat",
    FileName: "3dicons/posters/icon_culture_flyer_03.png",
    Rarity: "Epic",
    RarityValue: 3,
    MaintenanceUpgrade: 15,
    AttractiveNess: 10,
    EffectTargets: [
      {GUID: 1010360},
      {GUID: 1010359},
      {GUID: 101258}
    ],
    ExpeditionAttribute: {
      BaseMorale: 15,
      ExpeditionAttributes: []
    },
    LastChange: "2020-03-24T13:25:41.000Z"
  },
  {
    GUID: 191708,
    Type: "TownhallItem",
    Name: "Erntedankfest-Flugblatt",
    FileName: "3dicons/posters/icon_culture_flyer_01.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    MaintenanceUpgrade: 5,
    AttractiveNess: 5,
    EffectTargets: [
      {GUID: 191540},
      {GUID: 1010365}
    ],
    LastChange: "2019-07-30T11:05:12.000Z"
  },
  {
    GUID: 191709,
    Type: "TownhallItem",
    Name: "Handwerkermarkt-Plakat",
    FileName: "3dicons/posters/icon_culture_flyer_02.png",
    Rarity: "Rare",
    RarityValue: 2,
    MaintenanceUpgrade: 10,
    AttractiveNess: 7,
    EffectTargets: [
      {GUID: 191540},
      {GUID: 1010365}
    ],
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2020-03-24T13:25:41.000Z"
  },
  {
    GUID: 191710,
    Type: "TownhallItem",
    Name: "Reklametafel für Inmas internationale Handelsmesse",
    FileName: "3dicons/posters/icon_culture_flyer_03.png",
    Rarity: "Epic",
    RarityValue: 3,
    MaintenanceUpgrade: 15,
    AttractiveNess: 10,
    EffectTargets: [
      {GUID: 191540},
      {GUID: 1010365}
    ],
    ExpeditionAttribute: {
      BaseMorale: 15,
      ExpeditionAttributes: []
    },
    LastChange: "2020-03-24T13:25:41.000Z"
  },
  {
    GUID: 191714,
    Type: "TownhallItem",
    Name: "Der Segen des Herrn",
    FileName: "3dicons/museum/icon_book_comon.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    MaintenanceUpgrade: 5,
    PublicServiceFullSatisfactionDistance: 15,
    PublicServiceNoSatisfactionDistance: 15,
    PublicServiceDistance: 15,
    ExclusiveGroup: "EntertainmentAct",
    EffectTargets: [
      {GUID: 190782},
      {GUID: 1010361}
    ],
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191715,
    Type: "TownhallItem",
    Name: "Gesetz zur Sabbat-Abschaffung",
    FileName: "3dicons/museum/icon_book_uncommon.png",
    Rarity: "Rare",
    RarityValue: 2,
    MaintenanceUpgrade: 10,
    PublicServiceFullSatisfactionDistance: 25,
    PublicServiceNoSatisfactionDistance: 25,
    PublicServiceDistance: 25,
    ExclusiveGroup: "EntertainmentAct",
    EffectTargets: [
      {GUID: 190782},
      {GUID: 1010361}
    ],
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191716,
    Type: "TownhallItem",
    Name: "Timothys verschwommenes Gesetz der äußersten Verdorbenheit",
    FileName: "3dicons/museum/icon_book_rare.png",
    Rarity: "Epic",
    RarityValue: 3,
    MaintenanceUpgrade: 15,
    PublicServiceFullSatisfactionDistance: 35,
    PublicServiceNoSatisfactionDistance: 35,
    PublicServiceDistance: 35,
    ExclusiveGroup: "EntertainmentAct",
    EffectTargets: [
      {GUID: 190782},
      {GUID: 1010361}
    ],
    ExpeditionAttribute: {
      BaseMorale: 15,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 192357,
    Type: "TownhallItem",
    Name: "Wibble Soc. Club der Hexenmeister-Mitgliedschaft und Tarotkarten",
    FileName: "3dicons/narative_item/icon_membership.png",
    Rarity: "Epic",
    RarityValue: 3,
    MaintenanceUpgrade: 15,
    PublicServiceFullSatisfactionDistance: 35,
    PublicServiceNoSatisfactionDistance: 35,
    PublicServiceDistance: 35,
    ExclusiveGroup: "EntertainmentAct",
    EffectTargets: [
      {GUID: 190782},
      {GUID: 1010361}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Diplomacy", Amount: 15}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191717,
    Type: "TownhallItem",
    Name: "Mitternächtlicher Zapfenstreich",
    FileName: "3dicons/museum/icon_book_comon.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    MaintenanceUpgrade: -10,
    PublicServiceFullSatisfactionDistance: -5,
    PublicServiceNoSatisfactionDistance: -5,
    PublicServiceDistance: -5,
    ExclusiveGroup: "EntertainmentAct",
    EffectTargets: [
      {GUID: 190782},
      {GUID: 1010361}
    ],
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191718,
    Type: "TownhallItem",
    Name: "Abendlicher Zapfenstreich",
    FileName: "3dicons/museum/icon_book_uncommon.png",
    Rarity: "Rare",
    RarityValue: 2,
    MaintenanceUpgrade: -25,
    PublicServiceFullSatisfactionDistance: -10,
    PublicServiceNoSatisfactionDistance: -10,
    PublicServiceDistance: -10,
    ExclusiveGroup: "EntertainmentAct",
    EffectTargets: [
      {GUID: 190782},
      {GUID: 1010361}
    ],
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191719,
    Type: "TownhallItem",
    Name: "Erzbischofs Stipwicks früher Zapfenstreich",
    FileName: "3dicons/museum/icon_book_rare.png",
    Rarity: "Epic",
    RarityValue: 3,
    MaintenanceUpgrade: -50,
    PublicServiceFullSatisfactionDistance: -15,
    PublicServiceNoSatisfactionDistance: -15,
    PublicServiceDistance: -15,
    ExclusiveGroup: "EntertainmentAct",
    EffectTargets: [
      {GUID: 190782},
      {GUID: 1010361}
    ],
    ExpeditionAttribute: {
      BaseMorale: 15,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191720,
    Type: "TownhallItem",
    Name: "Journal landläufigen Gedankenguts",
    FileName: "3dicons/museum/icon_book_comon.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    MaintenanceUpgrade: 5,
    PublicServiceFullSatisfactionDistance: 15,
    PublicServiceNoSatisfactionDistance: 15,
    PublicServiceDistance: 15,
    ExclusiveGroup: "ResearchAct",
    EffectTargets: [
      {GUID: 1010362},
      {GUID: 1010364}
    ],
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191721,
    Type: "TownhallItem",
    Name: "Journal populären Gedankenguts",
    FileName: "3dicons/museum/icon_book_uncommon.png",
    Rarity: "Rare",
    RarityValue: 2,
    MaintenanceUpgrade: 10,
    PublicServiceFullSatisfactionDistance: 25,
    PublicServiceNoSatisfactionDistance: 25,
    PublicServiceDistance: 25,
    ExclusiveGroup: "ResearchAct",
    EffectTargets: [
      {GUID: 1010362},
      {GUID: 1010364}
    ],
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191722,
    Type: "TownhallItem",
    Name: "Die vierteljährliche kaleidoskopische Rundschau",
    FileName: "3dicons/museum/icon_book_rare.png",
    Rarity: "Epic",
    RarityValue: 3,
    MaintenanceUpgrade: 15,
    PublicServiceFullSatisfactionDistance: 35,
    PublicServiceNoSatisfactionDistance: 35,
    PublicServiceDistance: 35,
    ExclusiveGroup: "ResearchAct",
    EffectTargets: [
      {GUID: 1010362},
      {GUID: 1010364}
    ],
    ExpeditionAttribute: {
      BaseMorale: 15,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191723,
    Type: "TownhallItem",
    Name: "Hochschulgesetzesvorlage",
    FileName: "3dicons/museum/icon_book_comon.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    MaintenanceUpgrade: -10,
    PublicServiceFullSatisfactionDistance: -5,
    PublicServiceNoSatisfactionDistance: -5,
    PublicServiceDistance: -5,
    ExclusiveGroup: "ResearchAct",
    EffectTargets: [
      {GUID: 1010362},
      {GUID: 1010364}
    ],
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191724,
    Type: "TownhallItem",
    Name: "„Hohe Gebühren“-Gesetz",
    FileName: "3dicons/museum/icon_book_uncommon.png",
    Rarity: "Rare",
    RarityValue: 2,
    MaintenanceUpgrade: -25,
    PublicServiceFullSatisfactionDistance: -10,
    PublicServiceNoSatisfactionDistance: -10,
    PublicServiceDistance: -10,
    ExclusiveGroup: "ResearchAct",
    EffectTargets: [
      {GUID: 1010362},
      {GUID: 1010364}
    ],
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191725,
    Type: "TownhallItem",
    Name: "Bertie Pinkie-Toffs Elitismus-Edikt",
    FileName: "3dicons/museum/icon_book_rare.png",
    Rarity: "Epic",
    RarityValue: 3,
    MaintenanceUpgrade: -50,
    PublicServiceFullSatisfactionDistance: -15,
    PublicServiceNoSatisfactionDistance: -15,
    PublicServiceDistance: -15,
    ExclusiveGroup: "ResearchAct",
    EffectTargets: [
      {GUID: 1010362},
      {GUID: 1010364}
    ],
    ExpeditionAttribute: {
      BaseMorale: 15,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191726,
    Type: "TownhallItem",
    Name: "Schuldisziplin-Charta",
    FileName: "3dicons/museum/icon_book_comon.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    AttractiveNess: -2,
    PublicServiceFullSatisfactionDistance: 15,
    PublicServiceNoSatisfactionDistance: 15,
    PublicServiceDistance: 15,
    ExclusiveGroup: "EducationAct",
    EffectTargets: [
      {GUID: 1010360}
    ],
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191727,
    Type: "TownhallItem",
    Name: "Schulleiter-Charta",
    FileName: "3dicons/museum/icon_book_uncommon.png",
    Rarity: "Rare",
    RarityValue: 2,
    AttractiveNess: -3,
    PublicServiceFullSatisfactionDistance: 25,
    PublicServiceNoSatisfactionDistance: 25,
    PublicServiceDistance: 25,
    ExclusiveGroup: "EducationAct",
    EffectTargets: [
      {GUID: 1010360}
    ],
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191728,
    Type: "TownhallItem",
    Name: "Lady Dumbedownss Kolossale-Klassengrößen-Charta",
    FileName: "3dicons/museum/icon_book_rare.png",
    Rarity: "Epic",
    RarityValue: 3,
    AttractiveNess: -4,
    PublicServiceFullSatisfactionDistance: 35,
    PublicServiceNoSatisfactionDistance: 35,
    PublicServiceDistance: 35,
    ExclusiveGroup: "EducationAct",
    EffectTargets: [
      {GUID: 1010360}
    ],
    ExpeditionAttribute: {
      BaseMorale: 15,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191729,
    Type: "TownhallItem",
    Name: "Religionsunterrichts-Charta",
    FileName: "3dicons/museum/icon_book_comon.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    AttractiveNess: 5,
    PublicServiceFullSatisfactionDistance: -5,
    PublicServiceNoSatisfactionDistance: -5,
    PublicServiceDistance: -5,
    ExclusiveGroup: "EducationAct",
    EffectTargets: [
      {GUID: 1010360}
    ],
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191730,
    Type: "TownhallItem",
    Name: "Spartanische-Schulen-Charta",
    FileName: "3dicons/museum/icon_book_uncommon.png",
    Rarity: "Rare",
    RarityValue: 2,
    AttractiveNess: 10,
    PublicServiceFullSatisfactionDistance: -10,
    PublicServiceNoSatisfactionDistance: -10,
    PublicServiceDistance: -10,
    ExclusiveGroup: "EducationAct",
    EffectTargets: [
      {GUID: 1010360}
    ],
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191731,
    Type: "TownhallItem",
    Name: "Lady Cerebellums Klitzekleine-Klassenräume-Charta",
    FileName: "3dicons/museum/icon_book_rare.png",
    Rarity: "Epic",
    RarityValue: 3,
    AttractiveNess: 15,
    PublicServiceFullSatisfactionDistance: -15,
    PublicServiceNoSatisfactionDistance: -15,
    PublicServiceDistance: -15,
    ExclusiveGroup: "EducationAct",
    EffectTargets: [
      {GUID: 1010360}
    ],
    ExpeditionAttribute: {
      BaseMorale: 15,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191738,
    Type: "TownhallItem",
    Name: "Sonntagskleidungsgesetz",
    FileName: "3dicons/museum/icon_book_comon.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    ExclusiveGroup: "Ordinance",
    EffectTargets: [
      {GUID: 190762}
    ],
    InputBenefitModifier: [
      {Product: 1010350, AdditionalHappiness: -1},
      {Product: 120050, AdditionalHappiness: -1}
    ],
    GoodConsumptionUpgrade: [
      {ProvidedNeed: 1010350, AmountInPercent: -20},
      {ProvidedNeed: 120050, AmountInPercent: -20}
    ],
    LastChange: "2019-12-10T17:46:12.000Z"
  },
  {
    GUID: 191739,
    Type: "TownhallItem",
    Name: "Obligatorische-Messengesetz",
    FileName: "3dicons/museum/icon_book_uncommon.png",
    Rarity: "Rare",
    RarityValue: 2,
    ExclusiveGroup: "Ordinance",
    EffectTargets: [
      {GUID: 190762}
    ],
    InputBenefitModifier: [
      {Product: 1010350, AdditionalHappiness: -2},
      {Product: 120050, AdditionalHappiness: -2}
    ],
    GoodConsumptionUpgrade: [
      {ProvidedNeed: 1010350, AmountInPercent: -40},
      {ProvidedNeed: 120050, AmountInPercent: -40}
    ],
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-12-10T17:46:12.000Z"
  },
  {
    GUID: 191740,
    Type: "TownhallItem",
    Name: "Patriarch Grigors Kalender der heiligen Tage",
    FileName: "3dicons/museum/icon_book_rare.png",
    Rarity: "Epic",
    RarityValue: 3,
    ExclusiveGroup: "Ordinance",
    EffectTargets: [
      {GUID: 190762}
    ],
    InputBenefitModifier: [
      {Product: 1010350, AdditionalHappiness: -3},
      {Product: 120050, AdditionalHappiness: -3}
    ],
    GoodConsumptionUpgrade: [
      {ProvidedNeed: 1010350, AmountInPercent: -60},
      {ProvidedNeed: 120050, AmountInPercent: -60}
    ],
    ExpeditionAttribute: {
      BaseMorale: 15,
      ExpeditionAttributes: []
    },
    LastChange: "2019-12-10T17:46:12.000Z"
  },
  {
    GUID: 191741,
    Type: "TownhallItem",
    Name: "Pfarrgemeindesteuergesetz",
    FileName: "3dicons/museum/icon_book_comon.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    MaintenanceUpgrade: -30,
    PublicServiceFullSatisfactionDistance: -5,
    PublicServiceNoSatisfactionDistance: -5,
    PublicServiceDistance: -5,
    ExclusiveGroup: "Ordinance",
    EffectTargets: [
      {GUID: 1010359},
      {GUID: 101258}
    ],
    LastChange: "2019-12-10T17:46:12.000Z"
  },
  {
    GUID: 191742,
    Type: "TownhallItem",
    Name: "Kirchensteuergesetz",
    FileName: "3dicons/museum/icon_book_uncommon.png",
    Rarity: "Rare",
    RarityValue: 2,
    MaintenanceUpgrade: -60,
    PublicServiceFullSatisfactionDistance: -10,
    PublicServiceNoSatisfactionDistance: -10,
    PublicServiceDistance: -10,
    ExclusiveGroup: "Ordinance",
    EffectTargets: [
      {GUID: 1010359},
      {GUID: 101258}
    ],
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-12-10T17:46:12.000Z"
  },
  {
    GUID: 191743,
    Type: "TownhallItem",
    Name: "Hieromonk Bedes „dreistes kleines Zehnt“-Gesetz",
    FileName: "3dicons/museum/icon_book_rare.png",
    Rarity: "Epic",
    RarityValue: 3,
    MaintenanceUpgrade: -100,
    PublicServiceFullSatisfactionDistance: -15,
    PublicServiceNoSatisfactionDistance: -15,
    PublicServiceDistance: -15,
    ExclusiveGroup: "Ordinance",
    EffectTargets: [
      {GUID: 1010359},
      {GUID: 101258}
    ],
    ExpeditionAttribute: {
      BaseMorale: 15,
      ExpeditionAttributes: []
    },
    LastChange: "2019-12-10T17:46:12.000Z"
  },
  {
    GUID: 191732,
    Type: "TownhallItem",
    Name: "Einfuhrzoll-Verminderungsverordnung",
    FileName: "3dicons/museum/icon_book_comon.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    MaintenanceUpgrade: 5,
    PublicServiceFullSatisfactionDistance: 15,
    PublicServiceNoSatisfactionDistance: 15,
    PublicServiceDistance: 15,
    ExclusiveGroup: "EconomyAct",
    EffectTargets: [
      {GUID: 191540},
      {GUID: 1010365}
    ],
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191733,
    Type: "TownhallItem",
    Name: "Warenabgaben-Verminderungsverordnung",
    FileName: "3dicons/museum/icon_book_uncommon.png",
    Rarity: "Rare",
    RarityValue: 2,
    MaintenanceUpgrade: 10,
    PublicServiceFullSatisfactionDistance: 25,
    PublicServiceNoSatisfactionDistance: 25,
    PublicServiceDistance: 25,
    ExclusiveGroup: "EconomyAct",
    EffectTargets: [
      {GUID: 191540},
      {GUID: 1010365}
    ],
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191734,
    Type: "TownhallItem",
    Name: "Sir Archies staatliches Gelddruck-Dings",
    FileName: "3dicons/museum/icon_book_rare.png",
    Rarity: "Epic",
    RarityValue: 3,
    MaintenanceUpgrade: 15,
    PublicServiceFullSatisfactionDistance: 35,
    PublicServiceNoSatisfactionDistance: 35,
    PublicServiceDistance: 35,
    ExclusiveGroup: "EconomyAct",
    EffectTargets: [
      {GUID: 191540},
      {GUID: 1010365}
    ],
    ExpeditionAttribute: {
      BaseMorale: 15,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191735,
    Type: "TownhallItem",
    Name: "Gebühren- und Leihzinserhöhung",
    FileName: "3dicons/museum/icon_book_comon.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    MaintenanceUpgrade: -10,
    PublicServiceFullSatisfactionDistance: -5,
    PublicServiceNoSatisfactionDistance: -5,
    PublicServiceDistance: -5,
    ExclusiveGroup: "EconomyAct",
    EffectTargets: [
      {GUID: 191540},
      {GUID: 1010365}
    ],
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191736,
    Type: "TownhallItem",
    Name: "Geldwechselgebührenerhöhung",
    FileName: "3dicons/museum/icon_book_uncommon.png",
    Rarity: "Rare",
    RarityValue: 2,
    MaintenanceUpgrade: -25,
    PublicServiceFullSatisfactionDistance: -10,
    PublicServiceNoSatisfactionDistance: -10,
    PublicServiceDistance: -10,
    ExclusiveGroup: "EconomyAct",
    EffectTargets: [
      {GUID: 191540},
      {GUID: 1010365}
    ],
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191737,
    Type: "TownhallItem",
    Name: "Lord Stringers stringente Zinswuchergesetze",
    FileName: "3dicons/museum/icon_book_rare.png",
    Rarity: "Epic",
    RarityValue: 3,
    MaintenanceUpgrade: -50,
    PublicServiceFullSatisfactionDistance: -15,
    PublicServiceNoSatisfactionDistance: -15,
    PublicServiceDistance: -15,
    ExclusiveGroup: "EconomyAct",
    EffectTargets: [
      {GUID: 191540},
      {GUID: 1010365}
    ],
    ExpeditionAttribute: {
      BaseMorale: 15,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191744,
    Type: "TownhallItem",
    Name: "Friedhofsumsiedlungsmaßnahmen",
    FileName: "3dicons/museum/icon_book_comon.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    TaxModifierInPercent: -5,
    IncidentIllnessIncreaseUpgrade: -2,
    ExclusiveGroup: "PublicHealthAct",
    EffectTargets: [
      {GUID: 190762}
    ],
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191745,
    Type: "TownhallItem",
    Name: "„Sauberes Wasser“-Gesetz",
    FileName: "3dicons/museum/icon_book_uncommon.png",
    Rarity: "Rare",
    RarityValue: 2,
    TaxModifierInPercent: -10,
    IncidentIllnessIncreaseUpgrade: -4,
    ExclusiveGroup: "PublicHealthAct",
    EffectTargets: [
      {GUID: 190762}
    ],
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191746,
    Type: "TownhallItem",
    Name: "Mr. Slipperys ausgezeichnetes Abwasserabkommen",
    FileName: "3dicons/museum/icon_book_rare.png",
    Rarity: "Epic",
    RarityValue: 3,
    TaxModifierInPercent: -15,
    IncidentIllnessIncreaseUpgrade: -6,
    ExclusiveGroup: "PublicHealthAct",
    EffectTargets: [
      {GUID: 190762}
    ],
    ExpeditionAttribute: {
      BaseMorale: 15,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191747,
    Type: "TownhallItem",
    Name: "Verseifungssteuer",
    FileName: "3dicons/museum/icon_book_comon.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    TaxModifierInPercent: 10,
    IncidentIllnessIncreaseUpgrade: 1,
    ExclusiveGroup: "PublicHealthAct",
    EffectTargets: [
      {GUID: 190762}
    ],
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191748,
    Type: "TownhallItem",
    Name: "Gesetz zur laxen Wasserbehandlung",
    FileName: "3dicons/museum/icon_book_uncommon.png",
    Rarity: "Rare",
    RarityValue: 2,
    TaxModifierInPercent: 25,
    IncidentIllnessIncreaseUpgrade: 2,
    ExclusiveGroup: "PublicHealthAct",
    EffectTargets: [
      {GUID: 190762}
    ],
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191749,
    Type: "TownhallItem",
    Name: "Mrs. Beetles abscheuliches Seuchengesetz",
    FileName: "3dicons/museum/icon_book_rare.png",
    Rarity: "Epic",
    RarityValue: 3,
    TaxModifierInPercent: 40,
    IncidentIllnessIncreaseUpgrade: 3,
    ExclusiveGroup: "PublicHealthAct",
    EffectTargets: [
      {GUID: 190762}
    ],
    ExpeditionAttribute: {
      BaseMorale: 15,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191750,
    Type: "TownhallItem",
    Name: "Sichere-Dächer-Etat",
    FileName: "3dicons/museum/icon_book_comon.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    TaxModifierInPercent: -5,
    IncidentFireIncreaseUpgrade: -2,
    ExclusiveGroup: "FirePreventionAct",
    EffectTargets: [
      {GUID: 190762}
    ],
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191751,
    Type: "TownhallItem",
    Name: "Kaminfeger-Charta",
    FileName: "3dicons/museum/icon_book_uncommon.png",
    Rarity: "Rare",
    RarityValue: 2,
    TaxModifierInPercent: -10,
    IncidentFireIncreaseUpgrade: -4,
    ExclusiveGroup: "FirePreventionAct",
    EffectTargets: [
      {GUID: 190762}
    ],
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191752,
    Type: "TownhallItem",
    Name: "Arthur Ramshackles Pläne für große Wasserspeicher",
    FileName: "3dicons/museum/icon_book_rare.png",
    Rarity: "Epic",
    RarityValue: 3,
    TaxModifierInPercent: -15,
    IncidentFireIncreaseUpgrade: -6,
    ExclusiveGroup: "FirePreventionAct",
    EffectTargets: [
      {GUID: 190762}
    ],
    ExpeditionAttribute: {
      BaseMorale: 15,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191753,
    Type: "TownhallItem",
    Name: "Verordnung zur Erhaltung historischer Gebäude",
    FileName: "3dicons/museum/icon_book_comon.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    TaxModifierInPercent: 10,
    IncidentFireIncreaseUpgrade: 1,
    ExclusiveGroup: "FirePreventionAct",
    EffectTargets: [
      {GUID: 190762}
    ],
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191754,
    Type: "TownhallItem",
    Name: "Werbung für Kohleöfen",
    FileName: "3dicons/museum/icon_book_uncommon.png",
    Rarity: "Rare",
    RarityValue: 2,
    TaxModifierInPercent: 25,
    IncidentFireIncreaseUpgrade: 2,
    ExclusiveGroup: "FirePreventionAct",
    EffectTargets: [
      {GUID: 190762}
    ],
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191755,
    Type: "TownhallItem",
    Name: "Caprice GmbH, Das Monopol auf regionale Bauvorhaben",
    FileName: "3dicons/museum/icon_book_rare.png",
    Rarity: "Epic",
    RarityValue: 3,
    TaxModifierInPercent: 40,
    IncidentFireIncreaseUpgrade: 3,
    ExclusiveGroup: "FirePreventionAct",
    EffectTargets: [
      {GUID: 190762}
    ],
    ExpeditionAttribute: {
      BaseMorale: 15,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191756,
    Type: "TownhallItem",
    Name: "Verordnung zur Versammlungsfreiheit",
    FileName: "3dicons/museum/icon_book_comon.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    AdditionalHappiness: 4,
    IncidentRiotIncreaseUpgrade: 1,
    ExclusiveGroup: "PublicGatheringAct",
    EffectTargets: [
      {GUID: 190762}
    ],
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191757,
    Type: "TownhallItem",
    Name: "Verordnung über das Recht auf Protest",
    FileName: "3dicons/museum/icon_book_uncommon.png",
    Rarity: "Rare",
    RarityValue: 2,
    AdditionalHappiness: 8,
    IncidentRiotIncreaseUpgrade: 2,
    ExclusiveGroup: "PublicGatheringAct",
    EffectTargets: [
      {GUID: 190762}
    ],
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191758,
    Type: "TownhallItem",
    Name: "Pulltoddle-Verordnung zur Demonstrationsfreiheit",
    FileName: "3dicons/museum/icon_book_rare.png",
    Rarity: "Epic",
    RarityValue: 3,
    AdditionalHappiness: 12,
    IncidentRiotIncreaseUpgrade: 3,
    ExclusiveGroup: "PublicGatheringAct",
    EffectTargets: [
      {GUID: 190762}
    ],
    ExpeditionAttribute: {
      BaseMorale: 15,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191759,
    Type: "TownhallItem",
    Name: "Befehl zur Auflösung politischer Debattierclubs",
    FileName: "3dicons/museum/icon_book_comon.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    AdditionalHappiness: -1,
    IncidentRiotIncreaseUpgrade: -2,
    ExclusiveGroup: "PublicGatheringAct",
    EffectTargets: [
      {GUID: 190762}
    ],
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191760,
    Type: "TownhallItem",
    Name: "Demonstrationsverbot",
    FileName: "3dicons/museum/icon_book_uncommon.png",
    Rarity: "Rare",
    RarityValue: 2,
    AdditionalHappiness: -2,
    IncidentRiotIncreaseUpgrade: -4,
    ExclusiveGroup: "PublicGatheringAct",
    EffectTargets: [
      {GUID: 190762}
    ],
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191761,
    Type: "TownhallItem",
    Name: "Eine kraftvolle Kriegsrechtsverhängung",
    FileName: "3dicons/museum/icon_book_rare.png",
    Rarity: "Epic",
    RarityValue: 3,
    AdditionalHappiness: -3,
    IncidentRiotIncreaseUpgrade: -6,
    ExclusiveGroup: "PublicGatheringAct",
    EffectTargets: [
      {GUID: 190762}
    ],
    ExpeditionAttribute: {
      BaseMorale: 15,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191762,
    Type: "TownhallItem",
    Name: "Verordnung zum Mindestarbeitsalter von 8 Jahren",
    FileName: "3dicons/museum/icon_book_comon.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    AdditionalHappiness: -2,
    WorkforceModifierInPercent: 15,
    ExclusiveGroup: "ChildRightsAct",
    EffectTargets: [
      {GUID: 1010344},
      {GUID: 1010345}
    ],
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191763,
    Type: "TownhallItem",
    Name: "Verordnung zum Mindestarbeitsalter von 6 Jahren",
    FileName: "3dicons/museum/icon_book_uncommon.png",
    Rarity: "Rare",
    RarityValue: 2,
    AdditionalHappiness: -3,
    WorkforceModifierInPercent: 30,
    ExclusiveGroup: "ChildRightsAct",
    EffectTargets: [
      {GUID: 1010344},
      {GUID: 1010345}
    ],
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191764,
    Type: "TownhallItem",
    Name: "Von Malchings Vorschlag für ein Mindestarbeitsalter von 4 Jahren",
    FileName: "3dicons/museum/icon_book_rare.png",
    Rarity: "Epic",
    RarityValue: 3,
    AdditionalHappiness: -4,
    WorkforceModifierInPercent: 50,
    ExclusiveGroup: "ChildRightsAct",
    EffectTargets: [
      {GUID: 1010344},
      {GUID: 1010345}
    ],
    ExpeditionAttribute: {
      BaseMorale: 15,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191765,
    Type: "TownhallItem",
    Name: "Mindestschulpflichtverordnung",
    FileName: "3dicons/museum/icon_book_comon.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    AdditionalHappiness: 4,
    WorkforceModifierInPercent: -5,
    ExclusiveGroup: "ChildRightsAct",
    EffectTargets: [
      {GUID: 1010344},
      {GUID: 1010345}
    ],
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191766,
    Type: "TownhallItem",
    Name: "Vollzeitschulpflichtverordnung",
    FileName: "3dicons/museum/icon_book_uncommon.png",
    Rarity: "Rare",
    RarityValue: 2,
    AdditionalHappiness: 8,
    WorkforceModifierInPercent: -10,
    ExclusiveGroup: "ChildRightsAct",
    EffectTargets: [
      {GUID: 1010344},
      {GUID: 1010345}
    ],
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191767,
    Type: "TownhallItem",
    Name: "Miss Jorgensens exemplarischer „Schule-bis-16“-Vorschlag",
    FileName: "3dicons/museum/icon_book_rare.png",
    Rarity: "Epic",
    RarityValue: 3,
    AdditionalHappiness: 12,
    WorkforceModifierInPercent: -15,
    ExclusiveGroup: "ChildRightsAct",
    EffectTargets: [
      {GUID: 1010344},
      {GUID: 1010345}
    ],
    ExpeditionAttribute: {
      BaseMorale: 15,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191768,
    Type: "TownhallItem",
    Name: "Verordnung zur Glaubensfreiheit",
    FileName: "3dicons/museum/icon_book_comon.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    AdditionalHappiness: 4,
    IncidentRiotIncreaseUpgrade: 1,
    ExclusiveGroup: "HumanRightsAct",
    EffectTargets: [
      {GUID: 1010345},
      {GUID: 1010346}
    ],
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191769,
    Type: "TownhallItem",
    Name: "Verordnung zur Pressefreiheit",
    FileName: "3dicons/museum/icon_book_uncommon.png",
    Rarity: "Rare",
    RarityValue: 2,
    AdditionalHappiness: 8,
    IncidentRiotIncreaseUpgrade: 2,
    ExclusiveGroup: "HumanRightsAct",
    EffectTargets: [
      {GUID: 1010345},
      {GUID: 1010346}
    ],
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191770,
    Type: "TownhallItem",
    Name: "Traktat über die Redefreiheit",
    FileName: "3dicons/museum/icon_book_rare.png",
    Rarity: "Epic",
    RarityValue: 3,
    AdditionalHappiness: 12,
    IncidentRiotIncreaseUpgrade: 3,
    ExclusiveGroup: "HumanRightsAct",
    EffectTargets: [
      {GUID: 1010345},
      {GUID: 1010346}
    ],
    ExpeditionAttribute: {
      BaseMorale: 15,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191771,
    Type: "TownhallItem",
    Name: "Verordnung zur Bücherzensur",
    FileName: "3dicons/museum/icon_book_comon.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    AdditionalHappiness: -2,
    IncidentRiotIncreaseUpgrade: -2,
    ExclusiveGroup: "HumanRightsAct",
    EffectTargets: [
      {GUID: 1010345},
      {GUID: 1010346}
    ],
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191772,
    Type: "TownhallItem",
    Name: "Verordnung zum Bücherverbot",
    FileName: "3dicons/museum/icon_book_uncommon.png",
    Rarity: "Rare",
    RarityValue: 2,
    AdditionalHappiness: -3,
    IncidentRiotIncreaseUpgrade: -4,
    ExclusiveGroup: "HumanRightsAct",
    EffectTargets: [
      {GUID: 1010345},
      {GUID: 1010346}
    ],
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191773,
    Type: "TownhallItem",
    Name: "Lady Hunts Schweigegelübde",
    FileName: "3dicons/museum/icon_book_rare.png",
    Rarity: "Epic",
    RarityValue: 3,
    AdditionalHappiness: -4,
    IncidentRiotIncreaseUpgrade: -6,
    ExclusiveGroup: "HumanRightsAct",
    EffectTargets: [
      {GUID: 1010345},
      {GUID: 1010346}
    ],
    ExpeditionAttribute: {
      BaseMorale: 15,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191777,
    Type: "TownhallItem",
    Name: "Manifest der Abstinenzler",
    FileName: "3dicons/museum/icon_book_comon.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    AdditionalHappiness: -2,
    ExclusiveGroup: "AlcoholAct",
    EffectTargets: [
      {GUID: 190762}
    ],
    GoodConsumptionUpgrade: [
      {ProvidedNeed: 1010257, AmountInPercent: -20},
      {ProvidedNeed: 1010214, AmountInPercent: -20},
      {ProvidedNeed: 1010216, AmountInPercent: -20},
      {ProvidedNeed: 120016, AmountInPercent: -20}
    ],
    LastChange: "2019-12-10T17:46:12.000Z"
  },
  {
    GUID: 191778,
    Type: "TownhallItem",
    Name: "Verordnung zur Mäßigung",
    FileName: "3dicons/museum/icon_book_uncommon.png",
    Rarity: "Rare",
    RarityValue: 2,
    AdditionalHappiness: -3,
    ExclusiveGroup: "AlcoholAct",
    EffectTargets: [
      {GUID: 190762}
    ],
    GoodConsumptionUpgrade: [
      {ProvidedNeed: 1010257, AmountInPercent: -30},
      {ProvidedNeed: 1010214, AmountInPercent: -30},
      {ProvidedNeed: 1010216, AmountInPercent: -30},
      {ProvidedNeed: 120016, AmountInPercent: -30}
    ],
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-12-10T17:46:12.000Z"
  },
  {
    GUID: 191779,
    Type: "TownhallItem",
    Name: "Ms. Amelias wesentliche Prohibitionsmaßnahmen",
    FileName: "3dicons/museum/icon_book_rare.png",
    Rarity: "Epic",
    RarityValue: 3,
    AdditionalHappiness: -4,
    ExclusiveGroup: "AlcoholAct",
    EffectTargets: [
      {GUID: 190762}
    ],
    GoodConsumptionUpgrade: [
      {ProvidedNeed: 1010257, AmountInPercent: -40},
      {ProvidedNeed: 1010214, AmountInPercent: -40},
      {ProvidedNeed: 1010216, AmountInPercent: -40},
      {ProvidedNeed: 120016, AmountInPercent: -40}
    ],
    ExpeditionAttribute: {
      BaseMorale: 15,
      ExpeditionAttributes: []
    },
    LastChange: "2019-12-10T17:46:12.000Z"
  },
  {
    GUID: 191780,
    Type: "TownhallItem",
    Name: "Statuten zur Verringerung der Alkoholsteuer",
    FileName: "3dicons/museum/icon_book_comon.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    ExclusiveGroup: "AlcoholTaxesAct",
    EffectTargets: [
      {GUID: 190762}
    ],
    InputBenefitModifier: [
      {Product: 1010214, AdditionalHappiness: 2, AdditionalMoney: -1},
      {Product: 1010216, AdditionalHappiness: 2, AdditionalMoney: -1},
      {Product: 120016, AdditionalHappiness: 2, AdditionalMoney: -1},
      {Product: 1010257, AdditionalHappiness: 2, AdditionalMoney: -1}
    ],
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191781,
    Type: "TownhallItem",
    Name: "Verordnung zur Verringerung der Alkoholsteuer",
    FileName: "3dicons/museum/icon_book_uncommon.png",
    Rarity: "Rare",
    RarityValue: 2,
    ExclusiveGroup: "AlcoholTaxesAct",
    EffectTargets: [
      {GUID: 190762}
    ],
    InputBenefitModifier: [
      {Product: 1010214, AdditionalHappiness: 8, AdditionalMoney: -2},
      {Product: 1010216, AdditionalHappiness: 8, AdditionalMoney: -2},
      {Product: 120016, AdditionalHappiness: 8, AdditionalMoney: -2},
      {Product: 1010257, AdditionalHappiness: 8, AdditionalMoney: -2}
    ],
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191782,
    Type: "TownhallItem",
    Name: "Lord Farquahars Anpassung der Alkoholsteuer",
    FileName: "3dicons/museum/icon_book_rare.png",
    Rarity: "Epic",
    RarityValue: 3,
    ExclusiveGroup: "AlcoholTaxesAct",
    EffectTargets: [
      {GUID: 190762}
    ],
    InputBenefitModifier: [
      {Product: 1010214, AdditionalHappiness: 12, AdditionalMoney: -3},
      {Product: 1010216, AdditionalHappiness: 12, AdditionalMoney: -3},
      {Product: 120016, AdditionalHappiness: 12, AdditionalMoney: -3},
      {Product: 1010257, AdditionalHappiness: 12, AdditionalMoney: -3}
    ],
    ExpeditionAttribute: {
      BaseMorale: 15,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191783,
    Type: "TownhallItem",
    Name: "Geringe Alkoholsteuer",
    FileName: "3dicons/museum/icon_book_comon.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    ExclusiveGroup: "AlcoholTaxesAct",
    EffectTargets: [
      {GUID: 190762}
    ],
    InputBenefitModifier: [
      {Product: 1010214, AdditionalHappiness: -1, AdditionalMoney: 3},
      {Product: 1010216, AdditionalHappiness: -1, AdditionalMoney: 3},
      {Product: 120016, AdditionalHappiness: -1, AdditionalMoney: 3},
      {Product: 1010257, AdditionalHappiness: -1, AdditionalMoney: 3}
    ],
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191784,
    Type: "TownhallItem",
    Name: "Moderate Alkoholsteuer",
    FileName: "3dicons/museum/icon_book_uncommon.png",
    Rarity: "Rare",
    RarityValue: 2,
    ExclusiveGroup: "AlcoholTaxesAct",
    EffectTargets: [
      {GUID: 190762}
    ],
    InputBenefitModifier: [
      {Product: 1010214, AdditionalHappiness: -2, AdditionalMoney: 6},
      {Product: 1010216, AdditionalHappiness: -2, AdditionalMoney: 6},
      {Product: 120016, AdditionalHappiness: -2, AdditionalMoney: 6},
      {Product: 1010257, AdditionalHappiness: -2, AdditionalMoney: 6}
    ],
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191785,
    Type: "TownhallItem",
    Name: "Lord Wainthrops höchst strenge Schnapsbesteuerungsteuerung",
    FileName: "3dicons/museum/icon_book_rare.png",
    Rarity: "Epic",
    RarityValue: 3,
    ExclusiveGroup: "AlcoholTaxesAct",
    EffectTargets: [
      {GUID: 190762}
    ],
    InputBenefitModifier: [
      {Product: 1010214, AdditionalHappiness: -3, AdditionalMoney: 9},
      {Product: 1010216, AdditionalHappiness: -3, AdditionalMoney: 9},
      {Product: 120016, AdditionalHappiness: -3, AdditionalMoney: 9},
      {Product: 1010257, AdditionalHappiness: -3, AdditionalMoney: 9}
    ],
    ExpeditionAttribute: {
      BaseMorale: 15,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191788,
    Type: "TownhallItem",
    Name: "Zensur religiöser Symbole",
    FileName: "3dicons/museum/icon_book_comon.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    AdditionalHappiness: 4,
    IncidentRiotIncreaseUpgrade: 1,
    ExclusiveGroup: "SecularizationAct",
    EffectTargets: [
      {GUID: 190762}
    ],
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191789,
    Type: "TownhallItem",
    Name: "Statuten zur Säkularisierung",
    FileName: "3dicons/museum/icon_book_uncommon.png",
    Rarity: "Rare",
    RarityValue: 2,
    AdditionalHappiness: 8,
    IncidentRiotIncreaseUpgrade: 2,
    ExclusiveGroup: "SecularizationAct",
    EffectTargets: [
      {GUID: 190762}
    ],
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191790,
    Type: "TownhallItem",
    Name: "Merciers Anweisung zur Trennung von Kirche und Staat",
    FileName: "3dicons/museum/icon_book_rare.png",
    Rarity: "Epic",
    RarityValue: 3,
    AdditionalHappiness: 12,
    IncidentRiotIncreaseUpgrade: 3,
    ExclusiveGroup: "SecularizationAct",
    EffectTargets: [
      {GUID: 190762}
    ],
    ExpeditionAttribute: {
      BaseMorale: 15,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191791,
    Type: "TownhallItem",
    Name: "Evangeliumsverkündende Traktate",
    FileName: "3dicons/museum/icon_book_comon.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    AdditionalHappiness: -2,
    IncidentRiotIncreaseUpgrade: -2,
    ExclusiveGroup: "SecularizationAct",
    EffectTargets: [
      {GUID: 190762}
    ],
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191792,
    Type: "TownhallItem",
    Name: "Exkommunizierungsverordnung",
    FileName: "3dicons/museum/icon_book_uncommon.png",
    Rarity: "Rare",
    RarityValue: 2,
    AdditionalHappiness: -3,
    IncidentRiotIncreaseUpgrade: -4,
    ExclusiveGroup: "SecularizationAct",
    EffectTargets: [
      {GUID: 190762}
    ],
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191793,
    Type: "TownhallItem",
    Name: "Lucius' lange Verschollene Glaubensdoktrin",
    FileName: "3dicons/museum/icon_book_rare.png",
    Rarity: "Epic",
    RarityValue: 3,
    AdditionalHappiness: -4,
    IncidentRiotIncreaseUpgrade: -6,
    ExclusiveGroup: "SecularizationAct",
    EffectTargets: [
      {GUID: 190762}
    ],
    ExpeditionAttribute: {
      BaseMorale: 15,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191794,
    Type: "TownhallItem",
    Name: "Geringe Anpassung der Einkommensteuer",
    FileName: "3dicons/museum/icon_book_comon.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    AdditionalHappiness: -2,
    TaxModifierInPercent: 10,
    ExclusiveGroup: "TaxesManagementAct",
    EffectTargets: [
      {GUID: 190762}
    ],
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191795,
    Type: "TownhallItem",
    Name: "Größere Anpassung der Einkommensteuer",
    FileName: "3dicons/museum/icon_book_uncommon.png",
    Rarity: "Rare",
    RarityValue: 2,
    AdditionalHappiness: -3,
    TaxModifierInPercent: 25,
    ExclusiveGroup: "TaxesManagementAct",
    EffectTargets: [
      {GUID: 190762}
    ],
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191796,
    Type: "TownhallItem",
    Name: "Brutale Steuergesetzgebung des Geizigen Georgs",
    FileName: "3dicons/museum/icon_book_rare.png",
    Rarity: "Epic",
    RarityValue: 3,
    AdditionalHappiness: -4,
    TaxModifierInPercent: 40,
    ExclusiveGroup: "TaxesManagementAct",
    EffectTargets: [
      {GUID: 190762}
    ],
    ExpeditionAttribute: {
      BaseMorale: 15,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191797,
    Type: "TownhallItem",
    Name: "Steuernachlässe",
    FileName: "3dicons/museum/icon_book_comon.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    AdditionalHappiness: 4,
    TaxModifierInPercent: -5,
    ExclusiveGroup: "TaxesManagementAct",
    EffectTargets: [
      {GUID: 190762}
    ],
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191798,
    Type: "TownhallItem",
    Name: "Steuersenkungsgesetze",
    FileName: "3dicons/museum/icon_book_uncommon.png",
    Rarity: "Rare",
    RarityValue: 2,
    AdditionalHappiness: 8,
    TaxModifierInPercent: -10,
    ExclusiveGroup: "TaxesManagementAct",
    EffectTargets: [
      {GUID: 190762}
    ],
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191799,
    Type: "TownhallItem",
    Name: "Mrs. O'Maras wunderbare Steuersenkungsvorschriften",
    FileName: "3dicons/museum/icon_book_rare.png",
    Rarity: "Epic",
    RarityValue: 3,
    AdditionalHappiness: 12,
    TaxModifierInPercent: -15,
    ExclusiveGroup: "TaxesManagementAct",
    EffectTargets: [
      {GUID: 190762}
    ],
    ExpeditionAttribute: {
      BaseMorale: 15,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191800,
    Type: "TownhallItem",
    Name: "Feiertags-Verfügung",
    FileName: "3dicons/museum/icon_book_comon.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    AdditionalHappiness: 4,
    WorkforceModifierInPercent: -5,
    ExclusiveGroup: "WorkingConditionsAct",
    EffectTargets: [
      {GUID: 190762}
    ],
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191801,
    Type: "TownhallItem",
    Name: "Verfügung zum Geburtstag der Königin",
    FileName: "3dicons/museum/icon_book_uncommon.png",
    Rarity: "Rare",
    RarityValue: 2,
    AdditionalHappiness: 8,
    WorkforceModifierInPercent: -10,
    ExclusiveGroup: "WorkingConditionsAct",
    EffectTargets: [
      {GUID: 190762}
    ],
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191802,
    Type: "TownhallItem",
    Name: "Bente Jorgensens Verordnung zum bezahlten Urlaub",
    FileName: "3dicons/museum/icon_book_rare.png",
    Rarity: "Epic",
    RarityValue: 3,
    AdditionalHappiness: 12,
    WorkforceModifierInPercent: -15,
    ExclusiveGroup: "WorkingConditionsAct",
    EffectTargets: [
      {GUID: 190762}
    ],
    ExpeditionAttribute: {
      BaseMorale: 15,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191803,
    Type: "TownhallItem",
    Name: "Gesetzlich vorgeschriebene Nachtarbeit",
    FileName: "3dicons/museum/icon_book_comon.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    AdditionalHappiness: -2,
    WorkforceModifierInPercent: 15,
    ExclusiveGroup: "WorkingConditionsAct",
    EffectTargets: [
      {GUID: 190762}
    ],
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191804,
    Type: "TownhallItem",
    Name: "Gesetzlich vorgeschriebener Zwölfstundentag",
    FileName: "3dicons/museum/icon_book_uncommon.png",
    Rarity: "Rare",
    RarityValue: 2,
    AdditionalHappiness: -3,
    WorkforceModifierInPercent: 30,
    ExclusiveGroup: "WorkingConditionsAct",
    EffectTargets: [
      {GUID: 190762}
    ],
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191805,
    Type: "TownhallItem",
    Name: "Malchings Fahrplan zurück zur Leibeigenschaft",
    FileName: "3dicons/museum/icon_book_rare.png",
    Rarity: "Epic",
    RarityValue: 3,
    AdditionalHappiness: -4,
    WorkforceModifierInPercent: 50,
    ExclusiveGroup: "WorkingConditionsAct",
    EffectTargets: [
      {GUID: 190762}
    ],
    ExpeditionAttribute: {
      BaseMorale: 15,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191809,
    Type: "TownhallItem",
    Name: "Gesetz zur Amnestie für Aufständische",
    FileName: "3dicons/museum/icon_book_comon.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    TaxModifierInPercent: -5,
    IncidentRiotIncreaseUpgrade: -2,
    ExclusiveGroup: "AmnestyEdict",
    EffectTargets: [
      {GUID: 190762}
    ],
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191810,
    Type: "TownhallItem",
    Name: "Verordnung zur Immunität für Aufständische",
    FileName: "3dicons/museum/icon_book_uncommon.png",
    Rarity: "Rare",
    RarityValue: 2,
    TaxModifierInPercent: -10,
    IncidentRiotIncreaseUpgrade: -4,
    ExclusiveGroup: "AmnestyEdict",
    EffectTargets: [
      {GUID: 190762}
    ],
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191811,
    Type: "TownhallItem",
    Name: "George Smiths Statut für universelle Zusammenarbeit",
    FileName: "3dicons/museum/icon_book_rare.png",
    Rarity: "Epic",
    RarityValue: 3,
    TaxModifierInPercent: -15,
    IncidentRiotIncreaseUpgrade: -6,
    ExclusiveGroup: "AmnestyEdict",
    EffectTargets: [
      {GUID: 190762}
    ],
    ExpeditionAttribute: {
      BaseMorale: 15,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191812,
    Type: "HarborOfficeItem",
    Name: "Kleiner Tourismus-Werbefeldzug",
    FileName: "3dicons/museum/icon_book_comon.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    MaintenanceUpgrade: 35,
    AttractiveNess: 20,
    VisitorSpawnProbability: 10,
    ExclusiveGroup: "TourismAdCampaign",
    EffectTargets: [
      {GUID: 191563}
    ],
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191813,
    Type: "HarborOfficeItem",
    Name: "Großer Tourismus-Werbefeldzug",
    FileName: "3dicons/museum/icon_book_uncommon.png",
    Rarity: "Rare",
    RarityValue: 2,
    MaintenanceUpgrade: 70,
    AttractiveNess: 35,
    VisitorSpawnProbability: 15,
    ExclusiveGroup: "TourismAdCampaign",
    EffectTargets: [
      {GUID: 191563}
    ],
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191814,
    Type: "HarborOfficeItem",
    Name: "Madame Kahinas exklusiver Tourismus-Anstoß",
    FileName: "3dicons/museum/icon_book_rare.png",
    Rarity: "Epic",
    RarityValue: 3,
    MaintenanceUpgrade: 100,
    AttractiveNess: 50,
    VisitorSpawnProbability: 20,
    ExclusiveGroup: "TourismAdCampaign",
    EffectTargets: [
      {GUID: 191563}
    ],
    ExpeditionAttribute: {
      BaseMorale: 15,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191815,
    Type: "TownhallItem",
    Name: "Interruptus-Gesetzeszusatz",
    FileName: "3dicons/museum/icon_book_comon.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    ResidentsUpgrade: 10,
    AdditionalHappiness: -2,
    ExclusiveGroup: "NatalityRegulationEdict",
    EffectTargets: [
      {GUID: 193957}
    ],
    InputBenefitModifier: [
      {Product: 1010200},
      {Product: 1010213},
      {Product: 1010217},
      {Product: 1010353},
      {Product: 120032},
      {Product: 1010208},
      {Product: 120016},
      {Product: 1010225},
      {Product: 1010258},
      {Product: 120033}
    ],
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 191816,
    Type: "TownhallItem",
    Name: "Vorschriften zur Empfängnisverhütung",
    FileName: "3dicons/museum/icon_book_uncommon.png",
    Rarity: "Rare",
    RarityValue: 2,
    ResidentsUpgrade: 20,
    AdditionalHappiness: -3,
    ExclusiveGroup: "NatalityRegulationEdict",
    EffectTargets: [
      {GUID: 193957}
    ],
    InputBenefitModifier: [
      {Product: 1010200},
      {Product: 1010213},
      {Product: 1010217},
      {Product: 1010353},
      {Product: 120032},
      {Product: 1010208},
      {Product: 120016},
      {Product: 1010225},
      {Product: 1010258},
      {Product: 120033}
    ],
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 191817,
    Type: "TownhallItem",
    Name: "Päpstliches Papier zur pränatalen Präservation",
    FileName: "3dicons/museum/icon_book_rare.png",
    Rarity: "Epic",
    RarityValue: 3,
    ResidentsUpgrade: 30,
    AdditionalHappiness: -4,
    ExclusiveGroup: "NatalityRegulationEdict",
    EffectTargets: [
      {GUID: 193957}
    ],
    InputBenefitModifier: [
      {Product: 1010200},
      {Product: 1010213},
      {Product: 1010217},
      {Product: 1010353},
      {Product: 120032},
      {Product: 1010208},
      {Product: 120016},
      {Product: 1010225},
      {Product: 1010258},
      {Product: 120033}
    ],
    ExpeditionAttribute: {
      BaseMorale: 15,
      ExpeditionAttributes: []
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 192482,
    Type: "TownhallItem",
    Name: "Das Ausgeliefertsein der Frau",
    FileName: "3dicons/museum/icon_book_comon.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    AdditionalHappiness: 6,
    WorkforceModifierInPercent: 5,
    IncidentRiotIncreaseUpgrade: -1,
    ExclusiveGroup: "WomenRightsAct",
    EffectTargets: [
      {GUID: 190762}
    ],
    InputBenefitModifier: [
      {Product: 1010351, AdditionalHappiness: 5, AdditionalMoney: 5},
      {Product: 1010353, AdditionalHappiness: 5, AdditionalMoney: 5}
    ],
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 192483,
    Type: "TownhallItem",
    Name: "Streitschrift zum Frauenwahlrecht",
    FileName: "3dicons/museum/icon_book_uncommon.png",
    Rarity: "Rare",
    RarityValue: 2,
    AdditionalHappiness: 12,
    WorkforceModifierInPercent: 10,
    IncidentRiotIncreaseUpgrade: -2,
    ExclusiveGroup: "WomenRightsAct",
    EffectTargets: [
      {GUID: 190762}
    ],
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 192484,
    Type: "TownhallItem",
    Name: "Millicents Manifest der Suffragette",
    FileName: "3dicons/museum/icon_book_rare.png",
    Rarity: "Epic",
    RarityValue: 3,
    AdditionalHappiness: 18,
    WorkforceModifierInPercent: 15,
    IncidentRiotIncreaseUpgrade: -3,
    ExclusiveGroup: "WomenRightsAct",
    EffectTargets: [
      {GUID: 190762}
    ],
    ExpeditionAttribute: {
      BaseMorale: 15,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191821,
    Type: "TownhallItem",
    Name: "Eine Studie für Männer",
    FileName: "3dicons/museum/icon_book_comon.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    AdditionalHappiness: 6,
    WorkforceModifierInPercent: -5,
    IncidentRiotIncreaseUpgrade: 1,
    ExclusiveGroup: "WomenRightsAct",
    EffectTargets: [
      {GUID: 190762}
    ],
    LastChange: "2019-12-10T17:46:12.000Z"
  },
  {
    GUID: 191822,
    Type: "TownhallItem",
    Name: "Ausführung zur Natur des Weiblichen",
    FileName: "3dicons/museum/icon_book_uncommon.png",
    Rarity: "Rare",
    RarityValue: 2,
    AdditionalHappiness: 12,
    WorkforceModifierInPercent: -10,
    IncidentRiotIncreaseUpgrade: 2,
    ExclusiveGroup: "WomenRightsAct",
    EffectTargets: [
      {GUID: 190762}
    ],
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-12-10T17:46:12.000Z"
  },
  {
    GUID: 191823,
    Type: "TownhallItem",
    Name: "Lady Hunts Loblied auf die Geduldige Ehefrau",
    FileName: "3dicons/museum/icon_book_rare.png",
    Rarity: "Epic",
    RarityValue: 3,
    AdditionalHappiness: 18,
    WorkforceModifierInPercent: -15,
    IncidentRiotIncreaseUpgrade: 3,
    ExclusiveGroup: "WomenRightsAct",
    EffectTargets: [
      {GUID: 190762}
    ],
    ExpeditionAttribute: {
      BaseMorale: 15,
      ExpeditionAttributes: []
    },
    LastChange: "2019-12-10T17:46:12.000Z"
  },
  {
    GUID: 192074,
    Type: "ShipSpecialist",
    Name: "Jack of all Traits",
    FileName: "3dicons/specialists/icon_craftsman_common.png",
    Rarity: "Legendary",
    RarityValue: 4,
    ExpeditionAttribute: {
      BaseMorale: 500,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "PerkAnthropologist", Amount: 1},
        {Attribute: "PerkZoologist", Amount: 1},
        {Attribute: "PerkHypnotist", Amount: 1},
        {Attribute: "PerkFormerPirate", Amount: 1},
        {Attribute: "PerkDiver", Amount: 1},
        {Attribute: "PerkEntertainer", Amount: 1},
        {Attribute: "PerkArcheologist", Amount: 1},
        {Attribute: "PerkPolyglot", Amount: 1},
        {Attribute: "Diplomacy", Amount: 100},
        {Attribute: "Melee", Amount: 100},
        {Attribute: "Might", Amount: 100},
        {Attribute: "Navigation", Amount: 100},
        {Attribute: "Medicine", Amount: 100},
        {Attribute: "Faith", Amount: 100},
        {Attribute: "Crafting", Amount: 100},
        {Attribute: "Hunting", Amount: 100}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190161,
    Type: "VehicleItem",
    Name: "Test Quest Item",
    FileName: "3dicons/icon_ship.png",
    Rarity: "Quest",
    RarityValue: -1,
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190288,
    Type: "TownhallItem",
    Name: "Medizin",
    FileName: "3dicons/icon_schnapps_3.png",
    Rarity: "Common",
    RarityValue: 0,
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: [
        {Attribute: "Medicine", Amount: 10}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190072,
    Type: "GuildhouseItem",
    Name: "Handvoll Kartoffelkeimlinge",
    FileName: "3dicons/icon_potatoes.png",
    Rarity: "Common",
    RarityValue: 0,
    ItemSet: 193399,
    LastChange: "2019-07-30T11:05:12.000Z"
  },
  {
    GUID: 190074,
    Type: "GuildhouseItem",
    Name: "Handvoll Getreidesaatgut",
    FileName: "3dicons/icon_cereals_2.png",
    Rarity: "Common",
    RarityValue: 0,
    ItemSet: 193399,
    LastChange: "2019-07-30T11:05:12.000Z"
  },
  {
    GUID: 190075,
    Type: "GuildhouseItem",
    Name: "Handvoll Hopfensaatgut",
    FileName: "3dicons/icon_hops.png",
    Rarity: "Common",
    RarityValue: 0,
    ItemSet: 193399,
    LastChange: "2019-07-30T11:05:12.000Z"
  },
  {
    GUID: 190076,
    Type: "GuildhouseItem",
    Name: "Handvoll Zuckerrohrsetzlinge",
    FileName: "3dicons/icon_cane_sugar_1.png",
    Rarity: "Common",
    RarityValue: 0,
    ItemSet: 193399,
    LastChange: "2019-07-30T11:05:12.000Z"
  },
  {
    GUID: 190077,
    Type: "GuildhouseItem",
    Name: "Handvoll Kautschuksetzlinge",
    FileName: "3dicons/icon_caoutchouc.png",
    Rarity: "Common",
    RarityValue: 0,
    ItemSet: 193399,
    LastChange: "2019-07-30T11:05:12.000Z"
  },
  {
    GUID: 190078,
    Type: "GuildhouseItem",
    Name: "Handvoll Kakaobohnen",
    FileName: "3dicons/icon_cocoa.png",
    Rarity: "Common",
    RarityValue: 0,
    ItemSet: 193399,
    LastChange: "2019-07-30T11:05:12.000Z"
  },
  {
    GUID: 190079,
    Type: "GuildhouseItem",
    Name: "Handvoll Baumwollsamen",
    FileName: "3dicons/icon_cotton.png",
    Rarity: "Common",
    RarityValue: 0,
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190080,
    Type: "GuildhouseItem",
    Name: "Handvoll Tabaksaatgut",
    FileName: "3dicons/icon_tobacco.png",
    Rarity: "Common",
    RarityValue: 0,
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190082,
    Type: "GuildhouseItem",
    Name: "Sack voll Kartoffelkeimlinge",
    FileName: "3dicons/icon_potatoes.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190083,
    Type: "GuildhouseItem",
    Name: "Sack voll Getreidesaatgut",
    FileName: "3dicons/icon_cereals_2.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190084,
    Type: "GuildhouseItem",
    Name: "Sack voll Hopfensaatgut",
    FileName: "3dicons/icon_hops.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190085,
    Type: "GuildhouseItem",
    Name: "Sack voll Zuckerrohrsetzlinge",
    FileName: "3dicons/icon_cane_sugar_1.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190086,
    Type: "GuildhouseItem",
    Name: "Sack voll Kautschuksetzlinge",
    FileName: "3dicons/icon_caoutchouc.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190087,
    Type: "GuildhouseItem",
    Name: "Sack voll Kakaobohnen",
    FileName: "3dicons/icon_cocoa.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190089,
    Type: "GuildhouseItem",
    Name: "Sack voll Baumwollsamen",
    FileName: "3dicons/icon_tobacco.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190088,
    Type: "GuildhouseItem",
    Name: "Sack voll Tabaksaatgut",
    FileName: "3dicons/icon_cotton.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190090,
    Type: "GuildhouseItem",
    Name: "Sack voll Tiersamen",
    FileName: "3dicons/icon_game.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190026,
    Type: "GuildhouseItem",
    Name: "Kartoffelkeimlinge",
    FileName: "3dicons/icon_potatoes.png",
    Rarity: "Rare",
    RarityValue: 2,
    EffectTargets: [
      {GUID: 190785}
    ],
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190027,
    Type: "GuildhouseItem",
    Name: "Getreidesaatgut",
    FileName: "3dicons/icon_cereals_2.png",
    Rarity: "Rare",
    RarityValue: 2,
    EffectTargets: [
      {GUID: 1010262}
    ],
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190028,
    Type: "GuildhouseItem",
    Name: "Hopfensaatgut",
    FileName: "3dicons/icon_hops.png",
    Rarity: "Rare",
    RarityValue: 2,
    EffectTargets: [
      {GUID: 1010264}
    ],
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190369,
    Type: "GuildhouseItem",
    Name: "Paprikasaatgut",
    FileName: "3dicons/icon_pepper.png",
    Rarity: "Rare",
    RarityValue: 2,
    EffectTargets: [
      {GUID: 100654}
    ],
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190031,
    Type: "GuildhouseItem",
    Name: "Kakaobohnen",
    FileName: "3dicons/icon_cocoa.png",
    Rarity: "Rare",
    RarityValue: 2,
    EffectTargets: [
      {GUID: 1010332}
    ],
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190029,
    Type: "GuildhouseItem",
    Name: "Zuckerrohrsetzlinge",
    FileName: "3dicons/icon_cane_sugar_1.png",
    Rarity: "Rare",
    RarityValue: 2,
    EffectTargets: [
      {GUID: 1010329}
    ],
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190030,
    Type: "GuildhouseItem",
    Name: "Kautschuksetzlinge",
    FileName: "3dicons/icon_caoutchouc.png",
    Rarity: "Rare",
    RarityValue: 2,
    EffectTargets: [
      {GUID: 1010333}
    ],
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190370,
    Type: "GuildhouseItem",
    Name: "Weinreben",
    FileName: "3dicons/icon_grapes.png",
    Rarity: "Rare",
    RarityValue: 2,
    EffectTargets: [
      {GUID: 100655}
    ],
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190034,
    Type: "GuildhouseItem",
    Name: "Tiersamen",
    FileName: "3dicons/icon_fur.png",
    Rarity: "Rare",
    RarityValue: 2,
    EffectTargets: [
      {GUID: 1010558}
    ],
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190033,
    Type: "GuildhouseItem",
    Name: "Tabaksaatgut",
    FileName: "3dicons/icon_tobacco.png",
    Rarity: "Rare",
    RarityValue: 2,
    EffectTargets: [
      {GUID: 1010330}
    ],
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190032,
    Type: "GuildhouseItem",
    Name: "Baumwollsamen",
    FileName: "3dicons/icon_cotton.png",
    Rarity: "Rare",
    RarityValue: 2,
    EffectTargets: [
      {GUID: 1010331}
    ],
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190045,
    Type: "GuildhouseItem",
    Name: "Verbesserte Kartoffelkeimlinge",
    FileName: "3dicons/icon_potatoes.png",
    Rarity: "Epic",
    RarityValue: 3,
    Productivity: 25,
    EffectTargets: [
      {GUID: 190785}
    ],
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190046,
    Type: "GuildhouseItem",
    Name: "Verbessertes Getreidesaatgut",
    FileName: "3dicons/icon_cereals_2.png",
    Rarity: "Epic",
    RarityValue: 3,
    Productivity: 25,
    EffectTargets: [
      {GUID: 1010262}
    ],
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190047,
    Type: "GuildhouseItem",
    Name: "Verbessertes Hopfensaatgut",
    FileName: "3dicons/icon_hops.png",
    Rarity: "Epic",
    RarityValue: 3,
    Productivity: 25,
    EffectTargets: [
      {GUID: 1010264}
    ],
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190371,
    Type: "GuildhouseItem",
    Name: "Verbessertes Paprikasaatgut",
    FileName: "3dicons/icon_pepper.png",
    Rarity: "Epic",
    RarityValue: 3,
    Productivity: 25,
    EffectTargets: [
      {GUID: 100654}
    ],
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190050,
    Type: "GuildhouseItem",
    Name: "Verbesserte Kakaobohnen",
    FileName: "3dicons/icon_cocoa.png",
    Rarity: "Epic",
    RarityValue: 3,
    Productivity: 25,
    EffectTargets: [
      {GUID: 1010332}
    ],
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190048,
    Type: "GuildhouseItem",
    Name: "Verbesserte Zuckerrohrsetzlinge",
    FileName: "3dicons/icon_cane_sugar_1.png",
    Rarity: "Epic",
    RarityValue: 3,
    Productivity: 25,
    EffectTargets: [
      {GUID: 1010329}
    ],
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190049,
    Type: "GuildhouseItem",
    Name: "Verbesserte Kautschuksetzlinge",
    FileName: "3dicons/icon_caoutchouc.png",
    Rarity: "Epic",
    RarityValue: 3,
    Productivity: 25,
    EffectTargets: [
      {GUID: 1010333}
    ],
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190372,
    Type: "GuildhouseItem",
    Name: "Verbesserte Weinreben",
    FileName: "3dicons/icon_grapes.png",
    Rarity: "Epic",
    RarityValue: 3,
    Productivity: 25,
    EffectTargets: [
      {GUID: 100655}
    ],
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190053,
    Type: "GuildhouseItem",
    Name: "Verbesserte Tiersamen",
    FileName: "3dicons/icon_fur.png",
    Rarity: "Epic",
    RarityValue: 3,
    Productivity: 25,
    EffectTargets: [
      {GUID: 1010558}
    ],
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190052,
    Type: "GuildhouseItem",
    Name: "Verbessertes Tabaksaatgut",
    FileName: "3dicons/icon_tobacco.png",
    Rarity: "Epic",
    RarityValue: 3,
    Productivity: 25,
    EffectTargets: [
      {GUID: 1010330}
    ],
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190051,
    Type: "GuildhouseItem",
    Name: "Verbesserte Baumwollsamen",
    FileName: "3dicons/icon_cotton.png",
    Rarity: "Epic",
    RarityValue: 3,
    Productivity: 25,
    EffectTargets: [
      {GUID: 1010331}
    ],
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190063,
    Type: "GuildhouseItem",
    Name: "Kartoffel-Superkeimlinge",
    FileName: "3dicons/icon_potatoes.png",
    Rarity: "Legendary",
    RarityValue: 4,
    Productivity: 50,
    EffectTargets: [
      {GUID: 190785}
    ],
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190064,
    Type: "GuildhouseItem",
    Name: "Getreide-Supersaatgut",
    FileName: "3dicons/icon_cereals_2.png",
    Rarity: "Legendary",
    RarityValue: 4,
    Productivity: 50,
    EffectTargets: [
      {GUID: 1010262}
    ],
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190065,
    Type: "GuildhouseItem",
    Name: "Hopfen-Supersaatgut",
    FileName: "3dicons/icon_hops.png",
    Rarity: "Legendary",
    RarityValue: 4,
    Productivity: 50,
    EffectTargets: [
      {GUID: 1010264}
    ],
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190373,
    Type: "GuildhouseItem",
    Name: "Paprika-Supersaatgut",
    FileName: "3dicons/icon_pepper.png",
    Rarity: "Legendary",
    RarityValue: 4,
    Productivity: 50,
    EffectTargets: [
      {GUID: 100654}
    ],
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190068,
    Type: "GuildhouseItem",
    Name: "Kakao-Superbohnen",
    FileName: "3dicons/icon_cocoa.png",
    Rarity: "Legendary",
    RarityValue: 4,
    Productivity: 50,
    EffectTargets: [
      {GUID: 1010332}
    ],
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190066,
    Type: "GuildhouseItem",
    Name: "Zuckerrohr-Supersetzlinge",
    FileName: "3dicons/icon_cane_sugar_1.png",
    Rarity: "Legendary",
    RarityValue: 4,
    Productivity: 50,
    EffectTargets: [
      {GUID: 1010329}
    ],
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190067,
    Type: "GuildhouseItem",
    Name: "Kautschuk-Supersetzlinge",
    FileName: "3dicons/icon_caoutchouc.png",
    Rarity: "Legendary",
    RarityValue: 4,
    Productivity: 50,
    EffectTargets: [
      {GUID: 1010333}
    ],
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190374,
    Type: "GuildhouseItem",
    Name: "Wein-Superreben",
    FileName: "3dicons/icon_grapes.png",
    Rarity: "Legendary",
    RarityValue: 4,
    Productivity: 50,
    EffectTargets: [
      {GUID: 100655}
    ],
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190071,
    Type: "GuildhouseItem",
    Name: "Tier-Supersaatgut",
    FileName: "3dicons/icon_fur.png",
    Rarity: "Legendary",
    RarityValue: 4,
    Productivity: 50,
    EffectTargets: [
      {GUID: 1010558}
    ],
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190070,
    Type: "GuildhouseItem",
    Name: "Tabak-Supersaatgut",
    FileName: "3dicons/icon_tobacco.png",
    Rarity: "Legendary",
    RarityValue: 4,
    Productivity: 50,
    EffectTargets: [
      {GUID: 1010330}
    ],
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190069,
    Type: "GuildhouseItem",
    Name: "Baumwoll-Supersamen",
    FileName: "3dicons/icon_cotton.png",
    Rarity: "Legendary",
    RarityValue: 4,
    Productivity: 50,
    EffectTargets: [
      {GUID: 1010331}
    ],
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190024,
    Type: "VehicleItem",
    Name: "Miese Segel",
    FileName: "3dicons/icon_sail.png",
    Rarity: "Common",
    RarityValue: 0,
    ForwardSpeedUpgrade: 25,
    Allocation: "SailShip",
    ExclusiveGroup: "Sail",
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: [
        {Attribute: "Navigation", Amount: 10}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190025,
    Type: "VehicleItem",
    Name: "Miese Dampfmaschine",
    FileName: "icons/icon_forward.png",
    Rarity: "Common",
    RarityValue: 0,
    ForwardSpeedUpgrade: 25,
    Allocation: "SteamShip",
    ExclusiveGroup: "Motor",
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: [
        {Attribute: "Navigation", Amount: 10}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191475,
    Type: "HarborOfficeItem",
    Name: "Loudspeaker",
    FileName: "3dicons/military_items/icon_loudspeaker.png",
    Rarity: "Common",
    RarityValue: 0,
    EffectTargets: [
      {GUID: 191443}
    ],
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191484,
    Type: "HarborOfficeItem",
    Name: "Shipyard Cranes",
    FileName: "3dicons/military_items/icon_repair_crane.png",
    Rarity: "Legendary",
    RarityValue: 4,
    EffectTargets: [
      {GUID: 190783}
    ],
    ExpeditionAttribute: {
      BaseMorale: 30,
      ExpeditionAttributes: [
        {Attribute: "Crafting", Amount: 60}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191498,
    Type: "HarborOfficeItem",
    Name: "Artillerist",
    FileName: "3dicons/specialists/systemic/icon_artillerist_202.png",
    Rarity: "Epic",
    RarityValue: 3,
    MaxHitpointsUpgrade: 10,
    MaxHitpointsPercental: 1,
    EffectTargets: [
      {GUID: 191508}
    ],
    ExpeditionAttribute: {
      BaseMorale: 25,
      ExpeditionAttributes: [
        {Attribute: "Might", Amount: 40},
        {Attribute: "Melee", Amount: 20},
        {Attribute: "PerkDiver", Amount: 1}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191653,
    Type: "GuildhouseItem",
    Name: "Taschenuhrmacher",
    FileName: "3dicons/specialists/systemic/icon_worker_106.png",
    Rarity: "Common",
    RarityValue: 0,
    EffectTargets: [
      {GUID: 1010324}
    ],
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191654,
    Type: "GuildhouseItem",
    Name: "Uhrmacher",
    FileName: "3dicons/specialists/systemic/icon_worker_202.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    EffectTargets: [
      {GUID: 1010324}
    ],
    ExpeditionAttribute: {
      BaseMorale: 15,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191655,
    Type: "GuildhouseItem",
    Name: "Präzisionshorologin",
    FileName: "3dicons/specialists/systemic/icon_worker_407.png",
    Rarity: "Rare",
    RarityValue: 2,
    EffectTargets: [
      {GUID: 1010324}
    ],
    ExpeditionAttribute: {
      BaseMorale: 20,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191656,
    Type: "GuildhouseItem",
    Name: "Chronometrikerin Chiara",
    FileName: "3dicons/specialists/systemic/icon_well_dressed_407.png",
    Rarity: "Epic",
    RarityValue: 3,
    EffectTargets: [
      {GUID: 1010324}
    ],
    ExpeditionAttribute: {
      BaseMorale: 25,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191657,
    Type: "GuildhouseItem",
    Name: "Hans Graf vom zeitlosen Zeitmesser",
    FileName: "3dicons/specialists/systemic/icon_well_dressed_108.png",
    Rarity: "Legendary",
    RarityValue: 4,
    EffectTargets: [
      {GUID: 1010324}
    ],
    ExpeditionAttribute: {
      BaseMorale: 30,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191658,
    Type: "GuildhouseItem",
    Name: "Taschenuhrmacher",
    FileName: "3dicons/specialists/systemic/icon_worker_106.png",
    Rarity: "Common",
    RarityValue: 0,
    EffectTargets: [
      {GUID: 1010324}
    ],
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191659,
    Type: "GuildhouseItem",
    Name: "Uhrmacher",
    FileName: "3dicons/specialists/systemic/icon_worker_202.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    EffectTargets: [
      {GUID: 1010324}
    ],
    ExpeditionAttribute: {
      BaseMorale: 15,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191660,
    Type: "GuildhouseItem",
    Name: "Präzisionshorologin",
    FileName: "3dicons/specialists/systemic/icon_worker_407.png",
    Rarity: "Rare",
    RarityValue: 2,
    EffectTargets: [
      {GUID: 1010324}
    ],
    ExpeditionAttribute: {
      BaseMorale: 20,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191661,
    Type: "GuildhouseItem",
    Name: "Chronometrikerin Chiara",
    FileName: "3dicons/specialists/systemic/icon_well_dressed_407.png",
    Rarity: "Epic",
    RarityValue: 3,
    EffectTargets: [
      {GUID: 1010324}
    ],
    ExpeditionAttribute: {
      BaseMorale: 25,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191662,
    Type: "GuildhouseItem",
    Name: "Hans Graf vom zeitlosen Zeitmesser",
    FileName: "3dicons/specialists/systemic/icon_well_dressed_108.png",
    Rarity: "Legendary",
    RarityValue: 4,
    EffectTargets: [
      {GUID: 1010324}
    ],
    ExpeditionAttribute: {
      BaseMorale: 30,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 6000004,
    Type: "VehicleItem",
    Name: "SimpleTestItem",
    FileName: "3dicons/icon_ship.png",
    Rarity: "Common",
    RarityValue: 0,
    IgnoreWeightFactorUpgrade: 100,
    IgnoreDamageFactorUpgrade: 50,
    DamageFactorBuilding: 2,
    HitpointDamage: 10,
    Allocation: "SailShip",
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 6000027,
    Type: "GuildhouseItem",
    Name: "Grain Seeds",
    FileName: "3dicons/icon_cereals_2.png",
    Rarity: "Common",
    RarityValue: 0,
    EffectTargets: [
      {GUID: 6000018}
    ],
    CraftingCosts: [
      {Product: 1010196, Amount: 10},
      {Product: 1010218, Amount: 5}
    ],
    LastChange: "2019-07-30T11:05:12.000Z"
  },
  {
    GUID: 6000037,
    Type: "TownhallItem",
    Name: "State-directed Administration",
    FileName: "3dicons/icon_tools.png",
    Rarity: "Common",
    RarityValue: 0,
    Workforce: -50,
    MaintenanceUpgrade: -50,
    PublicServiceFullSatisfactionDistance: 25,
    PublicServiceNoSatisfactionDistance: 25,
    PublicServiceDistance: 25,
    ItemSet: 190108,
    EffectTargets: [
      {GUID: 190136}
    ],
    CraftingCosts: [
      {Product: 1010200, Amount: 10}
    ],
    LastChange: "2019-07-30T11:05:12.000Z"
  },
  {
    GUID: 190039,
    Type: "GuildhouseItem",
    Name: "Zoo Enhancer",
    FileName: "icons/icon_zoo_2D.png",
    Rarity: "Common",
    RarityValue: 0,
    AttractiveNess: 200,
    AttractiveNessPercental: 1,
    EffectTargets: [
      {GUID: 1010470}
    ],
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190040,
    Type: "TownhallItem",
    Name: "National Housing Market",
    FileName: "icons/icon_attractiveness_house_big.png",
    Rarity: "Common",
    RarityValue: 0,
    ResidentsUpgrade: 5,
    ItemSet: 190108,
    EffectTargets: [
      {GUID: 190041}
    ],
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190042,
    Type: "TownhallItem",
    Name: "Public Workforce",
    FileName: "3dicons/icon_time.png",
    Rarity: "Common",
    RarityValue: 0,
    ItemSet: 190108,
    EffectTargets: [
      {GUID: 190041}
    ],
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190043,
    Type: "GuildhouseItem",
    Name: "Timed Grain Seeds",
    FileName: "3dicons/icon_cereals_2.png",
    Rarity: "Common",
    RarityValue: 0,
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190105,
    Type: "ShipSpecialist",
    Name: "Dr Snuggles",
    FileName: "icons/icon_resource_worker_2.png",
    Rarity: "Common",
    RarityValue: 0,
    LoadingSpeedUpgrade: 50,
    MaxHitpointsUpgrade: 200,
    MaxHitpointsPercental: 1,
    SelfHealUpgrade: 15,
    ExclusiveGroup: "Specialist",
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190138,
    Type: "VehicleItem",
    Name: "one time equip Sails",
    FileName: "icons/icon_shipsymbol.png",
    Rarity: "Epic",
    RarityValue: 3,
    ForwardSpeedUpgrade: 25,
    Allocation: "SailShip",
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190178,
    Type: "CultureItem",
    Name: "Rotwild",
    FileName: "3dicons/animals/icon_deer.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    AttractiveNess: 300,
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190586,
    Type: "GuildhouseItem",
    Name: "Pollution Filter",
    FileName: "3dicons/icon_tools.png",
    Rarity: "Common",
    RarityValue: 0,
    AttractiveNess: -100,
    AttractiveNessPercental: 1,
    EffectTargets: [
      {GUID: 6000018}
    ],
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190587,
    Type: "GuildhouseItem",
    Name: "Super oven",
    FileName: "3dicons/icon_cereals_2.png",
    Rarity: "Common",
    RarityValue: 0,
    EffectTargets: [
      {GUID: 1010291}
    ],
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190588,
    Type: "GuildhouseItem",
    Name: "Firefighter Recruitment",
    FileName: "3dicons/icon_coal_burn.png",
    Rarity: "Common",
    RarityValue: 0,
    ResolverUnitCountUpgrade: 1,
    ResolverUnitMovementSpeedUpgrade: 2,
    Allocation: "RadiusBuilding",
    EffectTargets: [
      {GUID: 1010463}
    ],
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190590,
    Type: "HarborOfficeItem",
    Name: "Military Enhancer",
    FileName: "3dicons/icon_potatoes.png",
    Rarity: "Common",
    RarityValue: 0,
    AttackRangeUpgrade: 200,
    LineOfSightRangeUpgrade: 200,
    BaseDamageUpgrade: 300,
    EffectTargets: [
      {GUID: 1010522},
      {GUID: 1010523},
      {GUID: 1010524}
    ],
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190591,
    Type: "VehicleItem",
    Name: "Ship Mechanic",
    FileName: "icons/icon_repair_crane_2d.png",
    Rarity: "Epic",
    RarityValue: 3,
    MaintainanceUpgradeVehicle: -100,
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190592,
    Type: "VehicleItem",
    Name: "Spyglass",
    FileName: "icons/ship_info/icon_accuracy.png",
    Rarity: "Legendary",
    RarityValue: 4,
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190593,
    Type: "GuildhouseItem",
    Name: "Super fields",
    FileName: "3dicons/icon_cereals_2.png",
    Rarity: "Common",
    RarityValue: 0,
    ModuleLimit: -25,
    EffectTargets: [
      {GUID: 1010262},
      {GUID: 1010265}
    ],
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190594,
    Type: "GuildhouseItem",
    Name: "Electric Potato Collector 2000",
    FileName: "3dicons/icon_chassis.png",
    Rarity: "Legendary",
    RarityValue: 4,
    ModuleLimit: -50,
    EffectTargets: [
      {GUID: 1010265}
    ],
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190595,
    Type: "GuildhouseItem",
    Name: "Electric Glass Producer",
    FileName: "3dicons/icon_meat_sausage.png",
    Rarity: "Legendary",
    RarityValue: 4,
    Productivity: 50,
    EffectTargets: [
      {GUID: 1010319}
    ],
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190600,
    Type: "GuildhouseItem",
    Name: "Incident Reducer",
    FileName: "3dicons/icon_beer.png",
    Rarity: "Legendary",
    RarityValue: 4,
    EffectTargets: [
      {GUID: 1010463}
    ],
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190601,
    Type: "GuildhouseItem",
    Name: "PlaqueItem",
    FileName: "3dicons/icon_gorilla.png",
    Rarity: "Legendary",
    RarityValue: 4,
    IncidentRiotIncreaseUpgrade: 100,
    IncidentIllnessIncreaseUpgrade: 100,
    IncidentFireIncreaseUpgrade: 100,
    EffectTargets: [
      {GUID: 190041}
    ],
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190602,
    Type: "GuildhouseItem",
    Name: "Unregulated Steel Production",
    FileName: "3dicons/icon_steel.png",
    Rarity: "Legendary",
    RarityValue: 4,
    Productivity: 50,
    IncidentFireIncreaseUpgrade: 10,
    EffectTargets: [
      {GUID: 1010297}
    ],
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190612,
    Type: "GuildhouseItem",
    Name: "Shitty fields",
    FileName: "3dicons/icon_coal_2.png",
    Rarity: "Legendary",
    RarityValue: 4,
    ModuleLimit: 25,
    EffectTargets: [
      {GUID: 1010262},
      {GUID: 1010265}
    ],
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190613,
    Type: "GuildhouseItem",
    Name: "Fish over Schnapps",
    FileName: "3dicons/icon_pirate_flag.png",
    Rarity: "Legendary",
    RarityValue: 4,
    AdditionalHappiness: 20,
    EffectTargets: [
      {GUID: 190041}
    ],
    NeedProvideNeedUpgrade: [
      {ProvidedNeed: 1010216, SubstituteNeed: 1010200}
    ],
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190634,
    Type: "GuildhouseItem",
    Name: "Structured Workplace",
    FileName: "3dicons/icon_castaway.png",
    Rarity: "Legendary",
    RarityValue: 4,
    Workforce: -50,
    EffectTargets: [
      {GUID: 6000018}
    ],
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190635,
    Type: "TownhallItem",
    Name: "Reduced Schnapps Consumption",
    FileName: "3dicons/icon_diving_helmet.png",
    Rarity: "Legendary",
    RarityValue: 4,
    EffectTargets: [
      {GUID: 190041}
    ],
    GoodConsumptionUpgrade: [
      {ProvidedNeed: 1010216, AmountInPercent: -100}
    ],
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190636,
    Type: "HarborOfficeItem",
    Name: "Military Enhancer",
    FileName: "3dicons/icon_visitor_harbour.png",
    Rarity: "Common",
    RarityValue: 0,
    EffectTargets: [
      {GUID: 100415},
      {GUID: 191563}
    ],
    LastChange: "2020-03-24T13:25:41.000Z"
  },
  /*
  {
    GUID: 190654,
    Type: "GuildhouseItem",
    Name: "Yukon Gold Potato Farm",
    FileName: "3dicons/museum/icon_coin_rare.png",
    Rarity: "Legendary",
    RarityValue: 4,
    EffectTargets: [
      {GUID: 1010265}
    ],
    AdditionalOutput: [
      {Product: 1010233, Cycle: 2, Amount: 1},
      {Product: 1010208, Cycle: 2, Amount: 200},
      {Product: 120016, Cycle: 2, Amount: 200},
      {Product: 1010225, Cycle: 2, Amount: 200},
      {Product: 120030, Cycle: 2, Amount: 200},
      {Product: 1010258, Cycle: 2, Amount: 200},
      {Product: 120032, Cycle: 2, Amount: 200},
      {Product: 1010259, Cycle: 2, Amount: 200},
      {Product: 1010250, Cycle: 3, Amount: 200},
      {Product: 1010248, Cycle: 3, Amount: 200},
      {Product: 1010246, Cycle: 3, Amount: 200},
      {Product: 1010245, Cycle: 3, Amount: 200}
    ],
    LastChange: "2020-03-24T13:25:41.000Z"
  },
  */
  {
    GUID: 190655,
    Type: "GuildhouseItem",
    Name: "Farmer in a top hat",
    FileName: "3dicons/icon_residence_big_dummy.png",
    Rarity: "Legendary",
    RarityValue: 4,
    ReplaceWorkforce: 1010128,
    EffectTargets: [
      {GUID: 1010265}
    ],
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190670,
    Type: "GuildhouseItem",
    Name: "2205 Battery",
    FileName: "3dicons/icon_light_bulb.png",
    Rarity: "Legendary",
    RarityValue: 4,
    ProvideElectricity: 1,
    EffectTargets: [
      {GUID: 6000018}
    ],
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190763,
    Type: "GuildhouseItem",
    Name: "Glassless light bulbs",
    FileName: "3dicons/icon_parrot.png",
    Rarity: "Legendary",
    RarityValue: 4,
    EffectTargets: [
      {GUID: 1010286}
    ],
    InputAmountUpgrade: [],
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190764,
    Type: "GuildhouseItem",
    Name: "190764",
    FileName: "3dicons/icon_white_tiger.png",
    Rarity: "Legendary",
    RarityValue: 4,
    EffectTargets: [
      {GUID: 1010286},
      {GUID: 1010278},
      {GUID: 1010339},
      {GUID: 1010291},
      {GUID: 1010328},
      {GUID: 1010342}
    ],
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190795,
    Type: "TownhallItem",
    Name: "1 fish 2 fish red fish blue fish",
    FileName: "3dicons/icon_fish.png",
    Rarity: "Legendary",
    RarityValue: 4,
    EffectTargets: [
      {GUID: 190041}
    ],
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190796,
    Type: "HarborOfficeItem",
    Name: "We don't have a goods pool",
    FileName: "3dicons/icon_brass.png",
    Rarity: "Legendary",
    RarityValue: 4,
    EffectTargets: [
      {GUID: 190797}
    ],
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190799,
    Type: "GuildhouseItem",
    Name: "Stale Bread",
    FileName: "3dicons/icon_bread.png",
    Rarity: "Legendary",
    RarityValue: 4,
    EffectTargets: [
      {GUID: 1010283}
    ],
    ReplaceInputs: [
      {OldInput: 1010201, NewInput: 1010213}
    ],
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190800,
    Type: "ShipSpecialist",
    Name: "Schiffskapitän",
    FileName: "3dicons/specialists/icon_captain_epic.png",
    Rarity: "Epic",
    RarityValue: 3,
    ActiveTradePriceInPercent: 80,
    ExclusiveGroup: "Captain",
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190801,
    Type: "TownhallItem",
    Name: "Dr. Chaos",
    FileName: "3dicons/specialists/icon_police_officer_epic.png",
    Rarity: "Epic",
    RarityValue: 3,
    ExclusiveGroup: "Police",
    EffectTargets: [
      {GUID: 190762}
    ],
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190806,
    Type: "TownhallItem",
    Name: "Mr. Geldsack",
    FileName: "3dicons/specialists/icon_diplomat_legendary.png",
    Rarity: "Legendary",
    RarityValue: 4,
    ExclusiveGroup: "Diplomat",
    EffectTargets: [
      {GUID: 190762}
    ],
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190810,
    Type: "HarborOfficeItem",
    Name: "Betsy the Mechanic",
    FileName: "3dicons/icon_cattle.png",
    Rarity: "Legendary",
    RarityValue: 4,
    EffectTargets: [
      {GUID: 190783}
    ],
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190811,
    Type: "TownhallItem",
    Name: "Happy Fish",
    FileName: "3dicons/icon_fish.png",
    Rarity: "Legendary",
    RarityValue: 4,
    EffectTargets: [
      {GUID: 1010343},
      {GUID: 1010345}
    ],
    InputBenefitModifier: [
      {Product: 1010200, AdditionalHappiness: 200, AdditionalMoney: 200},
      {Product: 1010216, AdditionalHappiness: 100, AdditionalMoney: 100}
    ],
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 190963,
    Type: "TownhallItem",
    Name: "Basement Generator",
    FileName: "3dicons/icon_electric_works_coal.png",
    Rarity: "Legendary",
    RarityValue: 4,
    EffectTargets: [
      {GUID: 190041}
    ],
    GoodConsumptionUpgrade: [
      {ProvidedNeed: 1010354, AmountInPercent: -100}
    ],
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191485,
    Type: "HarborOfficeItem",
    Name: "Happy Fish",
    FileName: "3dicons/icon_fish.png",
    Rarity: "Legendary",
    RarityValue: 4,
    EffectTargets: [
      {GUID: 190611}
    ],
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191493,
    Type: "HarborOfficeItem",
    Name: "Scotties Tool",
    FileName: "3dicons/icon_tools.png",
    Rarity: "Legendary",
    RarityValue: 4,
    EffectTargets: [
      {GUID: 1010525}
    ],
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 191495,
    Type: "GuildhouseItem",
    Name: "Forest Tolerance",
    FileName: "3dicons/icon_wood.png",
    Rarity: "Legendary",
    RarityValue: 4,
    NeededArea: -50,
    EffectTargets: [
      {GUID: 1010266}
    ],
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 192086,
    Type: "VehicleItem",
    Name: "Einfacher Kanonen-Ausbau",
    FileName: "3dicons/icon_weapons.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    BaseDamageUpgrade: 10,
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 192087,
    Type: "VehicleItem",
    Name: "Kanonen-Ausbau",
    FileName: "3dicons/icon_weapons.png",
    Rarity: "Rare",
    RarityValue: 2,
    BaseDamageUpgrade: 10,
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 192088,
    Type: "VehicleItem",
    Name: "Fortgeschrittene Kanonen",
    FileName: "3dicons/icon_advanced_weaponry.png",
    Rarity: "Epic",
    RarityValue: 3,
    BaseDamageUpgrade: 20,
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 192089,
    Type: "VehicleItem",
    Name: "Hochmoderne Kanonen",
    FileName: "3dicons/icon_advanced_weaponry.png",
    Rarity: "Legendary",
    RarityValue: 4,
    BaseDamageUpgrade: 30,
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 192093,
    Type: "ShipSpecialist",
    Name: "Piratenkadett",
    FileName: "3dicons/specialists/systemic/icon_navigator_102.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    ForwardSpeedUpgrade: 30,
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Might", Amount: 25},
        {Attribute: "Melee", Amount: 10},
        {Attribute: "PerkFormerPirate", Amount: 1}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 192092,
    Type: "ShipSpecialist",
    Name: "Willma von Tegetthoff",
    FileName: "3dicons/specialists/icon_navigator_pirate.png",
    Rarity: "Rare",
    RarityValue: 2,
    ForwardSpeedUpgrade: 30,
    MaintainanceUpgradeVehicle: -50,
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Might", Amount: 35},
        {Attribute: "Melee", Amount: 20},
        {Attribute: "PerkFormerPirate", Amount: 1}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 192090,
    Type: "ShipSpecialist",
    Name: "Kapitän Moby, der alte Seebär",
    FileName: "3dicons/specialists/systemic/icon_captain_103.png",
    Rarity: "Epic",
    RarityValue: 3,
    ForwardSpeedUpgrade: 30,
    MaintainanceUpgradeVehicle: -50,
    MaxHitpointsUpgrade: 500,
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Might", Amount: 45},
        {Attribute: "Melee", Amount: 30},
        {Attribute: "PerkFormerPirate", Amount: 1}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 192091,
    Type: "ShipSpecialist",
    Name: "Geordy Duff",
    FileName: "3dicons/specialists/icon_specialist_captain_legendary_pirate.png",
    Rarity: "Legendary",
    RarityValue: 4,
    ForwardSpeedUpgrade: 30,
    MaintainanceUpgradeVehicle: -50,
    IgnoreDamageFactorUpgrade: -100,
    MaxHitpointsUpgrade: 1000,
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Might", Amount: 55},
        {Attribute: "Melee", Amount: 40},
        {Attribute: "PerkFormerPirate", Amount: 1}
      ]
    },
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 192112,
    Type: "VehicleItem",
    Name: "Segelschiff-Vernichter",
    FileName: "3dicons/ship_military/icon_pucklegun.png",
    Rarity: "Epic",
    RarityValue: 3,
    DamageFactorSailShip: 1.5,
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 192113,
    Type: "VehicleItem",
    Name: "Dampfschiff-Vernichter",
    FileName: "3dicons/ship_military/icon_pucklegun.png",
    Rarity: "Epic",
    RarityValue: 3,
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 192114,
    Type: "VehicleItem",
    Name: "Gebäude-Vernichter",
    FileName: "3dicons/ship_military/icon_pucklegun.png",
    Rarity: "Legendary",
    RarityValue: 4,
    DamageFactorBuilding: 2,
    LastChange: "2019-04-12T16:42:07.000Z"
  },
  {
    GUID: 112144,
    Type: "TownhallItem",
    Name: "Plakat vom Anführer",
    FileName: "3dicons/newspaper/icon_mercier_newspaper.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    AdditionalHappiness: 2,
    WorkforceModifierInPercent: 25,
    TaxModifierInPercent: -20,
    ExclusiveGroup: "Propaganda",
    EffectTargets: [
      {GUID: 190762}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: []
    },
    LastChange: "2019-07-30T11:05:12.000Z"
  },
  {
    GUID: 110936,
    Type: "GuildhouseItem",
    Name: "Schreibmaschine",
    FileName: "3dicons/machine_items/icon_writing_machine.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    Workforce: -20,
    MaintenanceUpgrade: 10,
    EffectTargets: [
      {GUID: 6000018}
    ],
    LastChange: "2019-06-05T12:14:19.000Z"
  },
  {
    GUID: 110937,
    Type: "GuildhouseItem",
    Name: "Heliogravüre",
    FileName: "3dicons/machine_items/icon_copperplate_printer.png",
    Rarity: "Rare",
    RarityValue: 2,
    Workforce: -30,
    EffectTargets: [
      {GUID: 6000018}
    ],
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-06-05T12:14:19.000Z"
  },
  {
    GUID: 110938,
    Type: "GuildhouseItem",
    Name: "Innovative Druckerpresse",
    FileName: "3dicons/machine_items/icon_printing_press.png",
    Rarity: "Epic",
    RarityValue: 3,
    Productivity: 25,
    Workforce: -40,
    EffectTargets: [
      {GUID: 193856}
    ],
    ExpeditionAttribute: {
      BaseMorale: 15,
      ExpeditionAttributes: []
    },
    LastChange: "2019-06-05T12:14:19.000Z"
  },
  {
    GUID: 110942,
    Type: "GuildhouseItem",
    Name: "Halle der Gemeinschaft",
    FileName: "3dicons/machine_items/icon_collective_property_hall.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    Productivity: -10,
    MaintenanceUpgrade: -15,
    EffectTargets: [
      {GUID: 6000018}
    ],
    LastChange: "2019-06-05T12:14:19.000Z"
  },
  {
    GUID: 110943,
    Type: "GuildhouseItem",
    Name: "Kammer der Genossenschaft",
    FileName: "3dicons/machine_items/icon_cooperative_office.png",
    Rarity: "Rare",
    RarityValue: 2,
    MaintenanceUpgrade: -20,
    EffectTargets: [
      {GUID: 6000018}
    ],
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-06-05T12:14:19.000Z"
  },
  {
    GUID: 110944,
    Type: "GuildhouseItem",
    Name: "Saal der Symbiosen",
    FileName: "3dicons/machine_items/icon_mutualism_management_hall.png",
    Rarity: "Epic",
    RarityValue: 3,
    Workforce: -40,
    MaintenanceUpgrade: -25,
    EffectTargets: [
      {GUID: 6000018}
    ],
    ExpeditionAttribute: {
      BaseMorale: 15,
      ExpeditionAttributes: []
    },
    LastChange: "2019-06-05T12:14:19.000Z"
  },
  {
    GUID: 110948,
    Type: "TownhallItem",
    Name: "Volksgerichtshof",
    FileName: "3dicons/machine_items/icon_juries_assembly.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    WorkforceModifierInPercent: -10,
    IncidentRiotIncreaseUpgrade: -3,
    EffectTargets: [
      {GUID: 190762}
    ],
    LastChange: "2019-06-05T12:14:19.000Z"
  },
  {
    GUID: 110949,
    Type: "TownhallItem",
    Name: "Völkisches Kammergericht",
    FileName: "3dicons/machine_items/icon_community_assembly.png",
    Rarity: "Rare",
    RarityValue: 2,
    IncidentRiotIncreaseUpgrade: -4,
    EffectTargets: [
      {GUID: 190762}
    ],
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-06-05T12:14:19.000Z"
  },
  {
    GUID: 110950,
    Type: "TownhallItem",
    Name: "Tribunal der Arbeiterschaft",
    FileName: "3dicons/machine_items/icon_popular_court.png",
    Rarity: "Epic",
    RarityValue: 3,
    AdditionalHappiness: 10,
    IncidentRiotIncreaseUpgrade: -6,
    EffectTargets: [
      {GUID: 190762}
    ],
    ExpeditionAttribute: {
      BaseMorale: 15,
      ExpeditionAttributes: []
    },
    LastChange: "2019-06-05T12:14:19.000Z"
  },
  {
    GUID: 111002,
    Type: "TownhallItem",
    Name: "Le Tocsin",
    FileName: "3dicons/newspaper/icon_anarchist_newspaper_01.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    AdditionalHappiness: -2,
    TaxModifierInPercent: 20,
    IncidentFireIncreaseUpgrade: 2,
    ExclusiveGroup: "Newspaper",
    EffectTargets: [
      {GUID: 1010346},
      {GUID: 1010347}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Crafting", Amount: 10}
      ]
    },
    LastChange: "2019-06-05T12:14:19.000Z"
  },
  {
    GUID: 111003,
    Type: "TownhallItem",
    Name: "La Tribune Libre",
    FileName: "3dicons/newspaper/icon_anarchist_newspaper_02.png",
    Rarity: "Rare",
    RarityValue: 2,
    TaxModifierInPercent: 30,
    IncidentFireIncreaseUpgrade: 5,
    ExclusiveGroup: "Newspaper",
    EffectTargets: [
      {GUID: 1010346},
      {GUID: 1010347}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Crafting", Amount: 15},
        {Attribute: "Melee", Amount: 5}
      ]
    },
    LastChange: "2019-06-05T12:14:19.000Z"
  },
  {
    GUID: 111004,
    Type: "TownhallItem",
    Name: "Die Aufwiegler und die Freien",
    FileName: "3dicons/newspaper/icon_anarchist_newspaper_03.png",
    Rarity: "Epic",
    RarityValue: 3,
    AdditionalHappiness: 10,
    WorkforceModifierInPercent: 20,
    TaxModifierInPercent: 40,
    IncidentFireIncreaseUpgrade: 10,
    ExclusiveGroup: "Newspaper",
    EffectTargets: [
      {GUID: 1010346},
      {GUID: 1010347}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Crafting", Amount: 30},
        {Attribute: "Melee", Amount: 15}
      ]
    },
    LastChange: "2019-06-05T12:14:19.000Z"
  },
  {
    GUID: 111012,
    Type: "TownhallItem",
    Name: "Der Kapitalist",
    FileName: "3dicons/newspaper/icon_antianarchist_newspaper_01.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    AdditionalHappiness: -2,
    TaxModifierInPercent: 20,
    IncidentRiotIncreaseUpgrade: 2,
    ExclusiveGroup: "Newspaper",
    EffectTargets: [
      {GUID: 1010343},
      {GUID: 1010344}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Diplomacy", Amount: 10}
      ]
    },
    LastChange: "2019-06-05T12:14:19.000Z"
  },
  {
    GUID: 111013,
    Type: "TownhallItem",
    Name: "Exquisit",
    FileName: "3dicons/newspaper/icon_antianarchist_newspaper_02.png",
    Rarity: "Rare",
    RarityValue: 2,
    AdditionalHappiness: -4,
    TaxModifierInPercent: 30,
    ExclusiveGroup: "Newspaper",
    EffectTargets: [
      {GUID: 1010343},
      {GUID: 1010344}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Diplomacy", Amount: 20}
      ]
    },
    LastChange: "2019-06-05T12:14:19.000Z"
  },
  {
    GUID: 111014,
    Type: "TownhallItem",
    Name: "Die Kunst des Regierens",
    FileName: "3dicons/newspaper/icon_antianarchist_newspaper_03.png",
    Rarity: "Epic",
    RarityValue: 3,
    AdditionalHappiness: -8,
    WorkforceModifierInPercent: 20,
    TaxModifierInPercent: 40,
    ExclusiveGroup: "Newspaper",
    EffectTargets: [
      {GUID: 1010343},
      {GUID: 1010344}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Diplomacy", Amount: 30}
      ]
    },
    LastChange: "2019-06-05T12:14:19.000Z"
  },
  {
    GUID: 111018,
    Type: "TownhallItem",
    Name: "„Freiheit für alle“ Plakat",
    FileName: "3dicons/posters/icon_anarchy_poster_01.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    TaxModifierInPercent: -10,
    IncidentRiotIncreaseUpgrade: -2,
    ExclusiveGroup: "Propaganda",
    EffectTargets: [
      {GUID: 190762}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Diplomacy", Amount: 5}
      ]
    },
    LastChange: "2019-06-05T12:14:19.000Z"
  },
  {
    GUID: 111019,
    Type: "TownhallItem",
    Name: "Ikonographie des menschlichen Geistes",
    FileName: "3dicons/posters/icon_anarchy_poster_02.png",
    Rarity: "Rare",
    RarityValue: 2,
    TaxModifierInPercent: -15,
    IncidentRiotIncreaseUpgrade: -5,
    ExclusiveGroup: "Propaganda",
    EffectTargets: [
      {GUID: 190762}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Diplomacy", Amount: 15}
      ]
    },
    LastChange: "2019-06-05T12:14:19.000Z"
  },
  {
    GUID: 111020,
    Type: "TownhallItem",
    Name: "Dr. Merciers Anarchie-Plakat",
    FileName: "3dicons/posters/icon_anarchy_poster_03.png",
    Rarity: "Epic",
    RarityValue: 3,
    WorkforceModifierInPercent: 25,
    TaxModifierInPercent: -20,
    IncidentRiotIncreaseUpgrade: -10,
    ExclusiveGroup: "Propaganda",
    EffectTargets: [
      {GUID: 190762}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Diplomacy", Amount: 20}
      ]
    },
    LastChange: "2019-06-05T12:14:19.000Z"
  },
  {
    GUID: 111024,
    Type: "TownhallItem",
    Name: "Proklamation der Ritterschaft",
    FileName: "3dicons/books/icon_knighthood_edict.png",
    Rarity: "Legendary",
    RarityValue: 4,
    AttractiveNess: 10,
    AttractiveNessPercental: 1,
    VisitorSpawnProbability: 10,
    EffectTargets: [
      {GUID: 191561},
      {GUID: 191562},
      {GUID: 191563},
      {GUID: 193667}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Diplomacy", Amount: 75}
      ]
    },
    LastChange: "2019-09-10T09:33:30.000Z"
  },
  {
    GUID: 111026,
    Type: "TownhallItem",
    Name: "Industriekapitäne, Band IV",
    FileName: "3dicons/books/icon_capitalist_economic_doctrine_01.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    WorkforceModifierInPercent: 15,
    IncidentIllnessIncreaseUpgrade: 2,
    ExclusiveGroup: "EconomicDoctrine",
    EffectTargets: [
      {GUID: 190762}
    ],
    LastChange: "2019-06-05T12:14:19.000Z"
  },
  {
    GUID: 111027,
    Type: "TownhallItem",
    Name: "Industriekapitäne, Band XVI",
    FileName: "3dicons/books/icon_capitalist_economic_doctrine_02.png",
    Rarity: "Rare",
    RarityValue: 2,
    WorkforceModifierInPercent: 25,
    TaxModifierInPercent: 20,
    IncidentIllnessIncreaseUpgrade: 4,
    ExclusiveGroup: "EconomicDoctrine",
    EffectTargets: [
      {GUID: 190762}
    ],
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-06-05T12:14:19.000Z"
  },
  {
    GUID: 111028,
    Type: "TownhallItem",
    Name: "Industriekapitäne, Band XXXI",
    FileName: "3dicons/books/icon_capitalist_economic_doctrine_03.png",
    Rarity: "Epic",
    RarityValue: 3,
    WorkforceModifierInPercent: 40,
    TaxModifierInPercent: 40,
    IncidentIllnessIncreaseUpgrade: 6,
    ExclusiveGroup: "EconomicDoctrine",
    EffectTargets: [
      {GUID: 190762}
    ],
    ExpeditionAttribute: {
      BaseMorale: 15,
      ExpeditionAttributes: []
    },
    LastChange: "2019-06-05T12:14:19.000Z"
  },
  {
    GUID: 111032,
    Type: "TownhallItem",
    Name: "Aufsätze über die Freiheit zu lieben",
    FileName: "3dicons/books/icon_anarchist_economic_doctrine_01.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    AdditionalHappiness: 5,
    WorkforceModifierInPercent: -10,
    IncidentRiotIncreaseUpgrade: -2,
    ExclusiveGroup: "EconomicDoctrine",
    EffectTargets: [
      {GUID: 190762}
    ],
    LastChange: "2019-06-05T12:14:19.000Z"
  },
  {
    GUID: 111033,
    Type: "TownhallItem",
    Name: "Ein Aufsatz über Gleichberechtigung",
    FileName: "3dicons/books/icon_anarchist_economic_doctrine_02.png",
    Rarity: "Rare",
    RarityValue: 2,
    AdditionalHappiness: 7,
    WorkforceModifierInPercent: -15,
    IncidentRiotIncreaseUpgrade: -5,
    ExclusiveGroup: "EconomicDoctrine",
    EffectTargets: [
      {GUID: 190762}
    ],
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-06-05T12:14:19.000Z"
  },
  {
    GUID: 111034,
    Type: "TownhallItem",
    Name: "Das Patriarchat - Die Wurzel des Klassenkampfes",
    FileName: "3dicons/books/icon_anarchist_economic_doctrine_03.png",
    Rarity: "Epic",
    RarityValue: 3,
    AdditionalHappiness: 10,
    WorkforceModifierInPercent: -20,
    IncidentRiotIncreaseUpgrade: -10,
    ExclusiveGroup: "EconomicDoctrine",
    EffectTargets: [
      {GUID: 190762}
    ],
    ExpeditionAttribute: {
      BaseMorale: 15,
      ExpeditionAttributes: []
    },
    LastChange: "2019-06-05T12:14:19.000Z"
  },
  {
    GUID: 111038,
    Type: "TownhallItem",
    Name: "Ziviler Ungehorsam",
    FileName: "3dicons/books/icon_anarchy_essay_01.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    AdditionalHappiness: 5,
    WorkforceModifierInPercent: 15,
    TaxModifierInPercent: -5,
    ExclusiveGroup: "AnarchyEssay",
    EffectTargets: [
      {GUID: 190762}
    ],
    LastChange: "2019-06-05T12:14:19.000Z"
  },
  {
    GUID: 111039,
    Type: "TownhallItem",
    Name: "Selbstporträt eines Anarchisten",
    FileName: "3dicons/books/icon_anarchy_essay_02.png",
    Rarity: "Rare",
    RarityValue: 2,
    AdditionalHappiness: 10,
    WorkforceModifierInPercent: 25,
    TaxModifierInPercent: -10,
    ExclusiveGroup: "AnarchyEssay",
    EffectTargets: [
      {GUID: 190762}
    ],
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-06-05T12:14:19.000Z"
  },
  {
    GUID: 111040,
    Type: "TownhallItem",
    Name: "Sophismen der doktrinären Schule des Kommunismus",
    FileName: "3dicons/books/icon_anarchy_essay_03.png",
    Rarity: "Epic",
    RarityValue: 3,
    AdditionalHappiness: 15,
    WorkforceModifierInPercent: 40,
    TaxModifierInPercent: -15,
    ExclusiveGroup: "AnarchyEssay",
    EffectTargets: [
      {GUID: 190762}
    ],
    ExpeditionAttribute: {
      BaseMorale: 15,
      ExpeditionAttributes: []
    },
    LastChange: "2019-06-05T12:14:19.000Z"
  },
  {
    GUID: 111044,
    Type: "TownhallItem",
    Name: "Kleines Forum: Landwirtschaft",
    FileName: "3dicons/posters/icon_cyclideon_agriculture.png",
    Rarity: "Rare",
    RarityValue: 2,
    AttractiveNess: 30,
    EffectTargets: [
      {GUID: 190781}
    ],
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-06-05T12:14:19.000Z"
  },
  {
    GUID: 111045,
    Type: "TownhallItem",
    Name: "Kleines Forum: Industrie",
    FileName: "3dicons/posters/icon_cyclideon_industry.png",
    Rarity: "Rare",
    RarityValue: 2,
    AttractiveNess: 30,
    EffectTargets: [
      {GUID: 190781}
    ],
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-06-05T12:14:19.000Z"
  },
  {
    GUID: 111046,
    Type: "TownhallItem",
    Name: "Großes Forum: Wissenschaft",
    FileName: "3dicons/posters/icon_cyclideon_science.png",
    Rarity: "Epic",
    RarityValue: 3,
    AttractiveNess: 40,
    EffectTargets: [
      {GUID: 190781}
    ],
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-06-05T12:14:19.000Z"
  },
  {
    GUID: 111047,
    Type: "TownhallItem",
    Name: "Großes Forum: Literatur",
    FileName: "3dicons/posters/icon_cyclideon_literature.png",
    Rarity: "Epic",
    RarityValue: 3,
    AttractiveNess: 40,
    EffectTargets: [
      {GUID: 190781}
    ],
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-06-05T12:14:19.000Z"
  },
  {
    GUID: 111048,
    Type: "TownhallItem",
    Name: "Das Internationale Liberale Kunst- und Handwerksforum",
    FileName: "3dicons/posters/icon_cyclideon_artsarchitecture.png",
    Rarity: "Legendary",
    RarityValue: 4,
    AttractiveNess: 50,
    EffectTargets: [
      {GUID: 190781}
    ],
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-06-05T12:14:19.000Z"
  },
  {
    GUID: 111126,
    Type: "ShipSpecialist",
    Name: "Aufrührer",
    FileName: "3dicons/specialists/systemic/icon_worker_206.png",
    Rarity: "Common",
    RarityValue: 0,
    AttackRangeUpgrade: -50,
    LineOfSightRangeUpgrade: -50,
    BaseDamageUpgrade: -40,
    Allocation: "Warship",
    ExclusiveGroup: "AutoAttackProjectile",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Melee", Amount: 10}
      ]
    },
    LastChange: "2019-06-05T12:14:19.000Z"
  },
  {
    GUID: 111127,
    Type: "ShipSpecialist",
    Name: "Brandstifter",
    FileName: "3dicons/specialists/systemic/icon_anarchist_401.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    AttackRangeUpgrade: -50,
    LineOfSightRangeUpgrade: -45,
    BaseDamageUpgrade: -35,
    Allocation: "Warship",
    ExclusiveGroup: "AutoAttackProjectile",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Melee", Amount: 20}
      ]
    },
    LastChange: "2019-06-05T12:14:19.000Z"
  },
  {
    GUID: 111128,
    Type: "ShipSpecialist",
    Name: "Hektische Pyromanin",
    FileName: "3dicons/specialists/systemic/icon_anarchist_402.png",
    Rarity: "Rare",
    RarityValue: 2,
    ActiveTradePriceInPercent: 90,
    AttackRangeUpgrade: -50,
    LineOfSightRangeUpgrade: -40,
    BaseDamageUpgrade: -30,
    Allocation: "Warship",
    ExclusiveGroup: "AutoAttackProjectile",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Melee", Amount: 30}
      ]
    },
    LastChange: "2019-06-05T12:14:19.000Z"
  },
  {
    GUID: 111129,
    Type: "ShipSpecialist",
    Name: "Vacco der wilde Anarchist",
    FileName: "3dicons/specialists/systemic/icon_anarchist_vanzetti_b.png",
    Rarity: "Epic",
    RarityValue: 3,
    ForwardSpeedUpgrade: 25,
    IgnoreDamageFactorUpgrade: 100,
    MaxHitpointsUpgrade: 1000,
    Allocation: "Warship",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Melee", Amount: 40},
        {Attribute: "Might", Amount: 20}
      ]
    },
    LastChange: "2019-06-05T12:14:19.000Z"
  },
  {
    GUID: 111131,
    Type: "ShipSpecialist",
    Name: "Sacchetti der wilde Anarchist",
    FileName: "3dicons/specialists/systemic/icon_anarchist_sacco_b.png",
    Rarity: "Epic",
    RarityValue: 3,
    AttackRangeUpgrade: 15,
    BaseDamageUpgrade: 25,
    DamageFactorSailShip: 1.5,
    DamageFactorBuilding: 1.5,
    Allocation: "Warship",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Might", Amount: 40},
        {Attribute: "Melee", Amount: 20}
      ]
    },
    LastChange: "2019-06-05T12:14:19.000Z"
  },
  {
    GUID: 111130,
    Type: "ShipSpecialist",
    Name: "Ella Golden, Koryphäe der Anarchie",
    FileName: "3dicons/specialists/systemic/icon_anarchist_golden_b.png",
    Rarity: "Legendary",
    RarityValue: 4,
    DamageReceiveFactorTorpedo: 0.5,
    DamageReceiveFactorCannon: 0.5,
    DamageReceiveFactorBigBertha: 0.5,
    Allocation: "Warship",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Melee", Amount: 50},
        {Attribute: "Diplomacy", Amount: 30},
        {Attribute: "Faith", Amount: 10}
      ]
    },
    LastChange: "2019-06-05T12:14:19.000Z"
  },
  {
    GUID: 111161,
    Type: "TownhallItem",
    Name: "Berauscherin",
    FileName: "3dicons/specialists/systemic/icon_bartender_324.png",
    Rarity: "Common",
    RarityValue: 0,
    EffectTargets: [
      {GUID: 1010343},
      {GUID: 1010344}
    ],
    NeedProvideNeedUpgrade: [
      {ProvidedNeed: 1010216, SubstituteNeed: 1010349}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Diplomacy", Amount: 10}
      ]
    },
    LastChange: "2019-06-05T12:14:19.000Z"
  },
  {
    GUID: 111162,
    Type: "TownhallItem",
    Name: "Prediger der Bourgeoisie",
    FileName: "3dicons/specialists/systemic/icon_priest_102.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    EffectTargets: [
      {GUID: 1010344},
      {GUID: 1010345}
    ],
    InputBenefitModifier: [
      {Product: 1010350, AdditionalMoney: 5}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Faith", Amount: 20}
      ]
    },
    LastChange: "2019-06-05T12:14:19.000Z"
  },
  {
    GUID: 111163,
    Type: "TownhallItem",
    Name: "Autorin kapitalistischer Bühnenstücke",
    FileName: "3dicons/specialists/systemic/icon_well_dressed_404.png",
    Rarity: "Rare",
    RarityValue: 2,
    EffectTargets: [
      {GUID: 1010345},
      {GUID: 1010346}
    ],
    InputBenefitModifier: [
      {Product: 1010352, AdditionalMoney: 3},
      {Product: 1010214, AdditionalMoney: 3},
      {Product: 1010257, AdditionalMoney: 3},
      {Product: 1010245, AdditionalMoney: 3},
      {Product: 1010246, AdditionalMoney: 3}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Diplomacy", Amount: 30},
        {Attribute: "Faith", Amount: 15}
      ]
    },
    LastChange: "2019-06-05T12:14:19.000Z"
  },
  {
    GUID: 111167,
    Type: "TownhallItem",
    Name: "Mr. Garrick, Gründer des Tycoon Club's",
    FileName: "3dicons/specialists/systemic/icon_normal_dressed_203.png",
    Rarity: "Epic",
    RarityValue: 3,
    EffectTargets: [
      {GUID: 1010346},
      {GUID: 1010347}
    ],
    InputBenefitModifier: [
      {Product: 1010356, AdditionalMoney: 5}
    ],
    NeedProvideNeedUpgrade: [
      {ProvidedNeed: 1010246, SubstituteNeed: 1010356},
      {ProvidedNeed: 1010250, SubstituteNeed: 1010356}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Diplomacy", Amount: 40}
      ]
    },
    LastChange: "2019-06-05T12:14:19.000Z"
  },
  {
    GUID: 111169,
    Type: "TownhallItem",
    Name: "Eduardo Bernal, Vater der Pressearbeit",
    FileName: "3dicons/specialists/systemic/icon_well_dressed_111.png",
    Rarity: "Legendary",
    RarityValue: 4,
    IncidentRiotIncreaseUpgrade: -10,
    EffectTargets: [
      {GUID: 190041}
    ],
    InputBenefitModifier: [
      {Product: 1010216, AdditionalHappiness: 2, AdditionalMoney: 3},
      {Product: 1010214, AdditionalHappiness: 2, AdditionalMoney: 3},
      {Product: 1010257, AdditionalHappiness: 2, AdditionalMoney: 3},
      {Product: 1010245, AdditionalHappiness: 2, AdditionalMoney: 3},
      {Product: 1010246, AdditionalHappiness: 2, AdditionalMoney: 3},
      {Product: 1010250, AdditionalHappiness: 2, AdditionalMoney: 3},
      {Product: 1010248, AdditionalHappiness: 2, AdditionalMoney: 3}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Diplomacy", Amount: 50},
        {Attribute: "Faith", Amount: 20}
      ]
    },
    LastChange: "2019-06-05T12:14:19.000Z"
  },
  {
    GUID: 111175,
    Type: "TownhallItem",
    Name: "Anarchist",
    FileName: "3dicons/specialists/systemic/icon_anarchist_manager__201.png",
    Rarity: "Common",
    RarityValue: 0,
    AdditionalHappiness: 3,
    EffectTargets: [
      {GUID: 1010343},
      {GUID: 1010344}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Diplomacy", Amount: 10}
      ]
    },
    LastChange: "2019-06-05T12:14:19.000Z"
  },
  {
    GUID: 111176,
    Type: "TownhallItem",
    Name: "Antiklerikale Dozentin",
    FileName: "3dicons/specialists/systemic/icon_anarchist_manager__202.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    EffectTargets: [
      {GUID: 1010344},
      {GUID: 1010345}
    ],
    NeedProvideNeedUpgrade: [
      {ProvidedNeed: 1010350, SubstituteNeed: 1010351},
      {ProvidedNeed: 1010350, SubstituteNeed: 1010353}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Faith", Amount: 20}
      ]
    },
    LastChange: "2019-06-05T12:14:19.000Z"
  },
  {
    GUID: 111177,
    Type: "TownhallItem",
    Name: "Gewählte Ministerin",
    FileName: "3dicons/specialists/systemic/icon_anarchist_manager_404.png",
    Rarity: "Rare",
    RarityValue: 2,
    AdditionalHappiness: 5,
    IncidentRiotIncreaseUpgrade: -4,
    EffectTargets: [
      {GUID: 1010343},
      {GUID: 1010344},
      {GUID: 1010345}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Diplomacy", Amount: 30}
      ]
    },
    LastChange: "2019-06-05T12:14:19.000Z"
  },
  {
    GUID: 111178,
    Type: "TownhallItem",
    Name: "Krapotkin der Evolutionist",
    FileName: "3dicons/specialists/systemic/icon_anarchist_krapotkin.png",
    Rarity: "Epic",
    RarityValue: 3,
    WorkforceModifierInPercent: 40,
    EffectTargets: [
      {GUID: 1010344},
      {GUID: 1010345}
    ],
    InputBenefitModifier: [
      {Product: 1010351, AdditionalHappiness: 3},
      {Product: 1010353, AdditionalHappiness: 3}
    ],
    NeedProvideNeedUpgrade: [
      {ProvidedNeed: 1010350, SubstituteNeed: 1010351},
      {ProvidedNeed: 1010350, SubstituteNeed: 1010353}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Diplomacy", Amount: 40},
        {Attribute: "Faith", Amount: 20}
      ]
    },
    LastChange: "2019-06-05T12:14:19.000Z"
  },
  {
    GUID: 111179,
    Type: "GuildhouseItem",
    Name: "Bekonin der Freigeist",
    FileName: "3dicons/specialists/systemic/icon_anarchist_bekoin.png",
    Rarity: "Epic",
    RarityValue: 3,
    Productivity: 25,
    Workforce: -25,
    MaintenanceUpgrade: -20,
    EffectTargets: [
      {GUID: 193856}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Diplomacy", Amount: 50}
      ]
    },
    LastChange: "2019-06-05T12:14:19.000Z"
  },
  {
    GUID: 111180,
    Type: "TownhallItem",
    Name: "Pietro Jonah Proud, Philosoph des öffentlichen Wohls",
    FileName: "3dicons/specialists/systemic/icon_anarchist_proud.png",
    Rarity: "Legendary",
    RarityValue: 4,
    ResidentsUpgrade: 10,
    EffectTargets: [
      {GUID: 1010343},
      {GUID: 1010344},
      {GUID: 1010345},
      {GUID: 1010346},
      {GUID: 1010347}
    ],
    InputBenefitModifier: [
      {Product: 120020, AdditionalMoney: 1},
      {Product: 1010213, AdditionalMoney: 1},
      {Product: 1010206, AdditionalMoney: 1},
      {Product: 1010353, AdditionalMoney: 1},
      {Product: 120030, AdditionalMoney: 1},
      {Product: 1010208, AdditionalMoney: 1},
      {Product: 120016, AdditionalMoney: 1},
      {Product: 1010225, AdditionalMoney: 1},
      {Product: 1010258, AdditionalMoney: 1}
    ],
    NeedProvideNeedUpgrade: [
      {ProvidedNeed: 1010356, SubstituteNeed: 1010354},
      {ProvidedNeed: 1010355, SubstituteNeed: 1010354}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Diplomacy", Amount: 60},
        {Attribute: "Faith", Amount: 30}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 112813,
    Type: "CultureItem",
    Name: "Blobfisch",
    FileName: "3dicons/animals/icon_blob_fish.png",
    Rarity: "Rare",
    RarityValue: 2,
    AttractiveNess: 30,
    ItemSet: 193401,
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-09-10T09:33:30.000Z"
  },
  {
    GUID: 112815,
    Type: "CultureItem",
    Name: "Kronenqualle",
    FileName: "3dicons/animals/icon_helmet_jellyfish.png",
    Rarity: "Rare",
    RarityValue: 2,
    AttractiveNess: 30,
    ItemSet: 193401,
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-09-10T09:33:30.000Z"
  },
  {
    GUID: 112816,
    Type: "CultureItem",
    Name: "Drachenfisch der Tiefsee",
    FileName: "3dicons/animals/icon_glowfish_01.png",
    Rarity: "Rare",
    RarityValue: 2,
    AttractiveNess: 30,
    ItemSet: 193403,
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-09-10T09:33:30.000Z"
  },
  {
    GUID: 112817,
    Type: "CultureItem",
    Name: "Unbekannter Leuchtfisch",
    FileName: "3dicons/animals/icon_glowfish_02.png",
    Rarity: "Rare",
    RarityValue: 2,
    AttractiveNess: 30,
    ItemSet: 193403,
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-09-10T09:33:30.000Z"
  },
  {
    GUID: 113905,
    Type: "CultureItem",
    Name: "Leuchtkalmar",
    FileName: "3dicons/animals/icon_glowfish_03.png",
    Rarity: "Rare",
    RarityValue: 2,
    AttractiveNess: 30,
    ItemSet: 193403,
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-09-10T09:33:30.000Z"
  },
  {
    GUID: 113907,
    Type: "CultureItem",
    Name: "Alligatorhecht",
    FileName: "3dicons/animals/icon_aligatorgator.png",
    Rarity: "Rare",
    RarityValue: 2,
    AttractiveNess: 30,
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-09-10T09:33:30.000Z"
  },
  {
    GUID: 190465,
    Type: "CultureItem",
    Name: "Tiefsee-Anglerfisch",
    FileName: "3dicons/animals/icon_anglerfish.png",
    Rarity: "Epic",
    RarityValue: 3,
    AttractiveNess: 40,
    ItemSet: 193401,
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-09-10T09:33:30.000Z"
  },
  {
    GUID: 112811,
    Type: "CultureItem",
    Name: "Koboldhai",
    FileName: "3dicons/animals/icon_goblinshark.png",
    Rarity: "Epic",
    RarityValue: 3,
    AttractiveNess: 40,
    ItemSet: 193401,
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-09-10T09:33:30.000Z"
  },
  {
    GUID: 112812,
    Type: "CultureItem",
    Name: "Schwarzer Schlinger",
    FileName: "3dicons/animals/icon_blackswallower.png",
    Rarity: "Epic",
    RarityValue: 3,
    AttractiveNess: 40,
    ItemSet: 193401,
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-09-10T09:33:30.000Z"
  },
  {
    GUID: 112818,
    Type: "CultureItem",
    Name: "Gelbe Haarqualle",
    FileName: "3dicons/animals/icon_gigant_orange_jellyfish.png",
    Rarity: "Epic",
    RarityValue: 3,
    AttractiveNess: 40,
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-09-10T09:33:30.000Z"
  },
  {
    GUID: 112476,
    Type: "CultureItem",
    Name: "Der Krake",
    FileName: "3dicons/animals/icon_kraken.png",
    Rarity: "Legendary",
    RarityValue: 4,
    AttractiveNess: 50,
    ItemSet: 193401,
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Might", Amount: 50}
      ]
    },
    LastChange: "2019-07-30T11:05:12.000Z"
  },
  {
    GUID: 113469,
    Type: "CultureItem",
    Name: "Quastenflosser",
    FileName: "3dicons/animals/icon_coelacanth.png",
    Rarity: "Legendary",
    RarityValue: 4,
    AttractiveNess: 50,
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-09-10T09:33:30.000Z"
  },
  {
    GUID: 113535,
    Type: "CultureItem",
    Name: "Kommodoreorden",
    FileName: "3dicons/icon_security.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    AttractiveNess: 20,
    Allocation: "Museum",
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-09-10T09:33:30.000Z"
  },
  {
    GUID: 112825,
    Type: "CultureItem",
    Name: "Admiral Nadaskys Säbel",
    FileName: "3dicons/museum/icon_nadaskys_sword.png",
    Rarity: "Epic",
    RarityValue: 3,
    AttractiveNess: 40,
    ItemSet: 193408,
    Allocation: "Museum",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Melee", Amount: 30}
      ]
    },
    LastChange: "2019-09-10T09:33:30.000Z"
  },
  {
    GUID: 113472,
    Type: "CultureItem",
    Name: "Imperiale Galionsfigur",
    FileName: "3dicons/museum/icon_empire_figurehead.png",
    Rarity: "Epic",
    RarityValue: 3,
    AttractiveNess: 40,
    ItemSet: 193408,
    Allocation: "Museum",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Faith", Amount: 20}
      ]
    },
    LastChange: "2019-07-30T11:05:12.000Z"
  },
  {
    GUID: 113473,
    Type: "CultureItem",
    Name: "Nadaskys Orden",
    FileName: "3dicons/museum/icon_nadaskys_medal.png",
    Rarity: "Epic",
    RarityValue: 3,
    AttractiveNess: 40,
    ItemSet: 193408,
    Allocation: "Museum",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Faith", Amount: 30}
      ]
    },
    LastChange: "2019-07-30T11:05:12.000Z"
  },
  {
    GUID: 112478,
    Type: "CultureItem",
    Name: "Mauer von Atlantis",
    FileName: "3dicons/museum/icon_atlantis_wall.png",
    Rarity: "Legendary",
    RarityValue: 4,
    AttractiveNess: 50,
    ItemSet: 193405,
    Allocation: "Museum",
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-09-10T09:33:30.000Z"
  },
  {
    GUID: 112483,
    Type: "CultureItem",
    Name: "Tempel des Poseidon",
    FileName: "3dicons/museum/icon_temple_of_posseidon.png",
    Rarity: "Legendary",
    RarityValue: 4,
    AttractiveNess: 50,
    ItemSet: 193405,
    Allocation: "Museum",
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-09-10T09:33:30.000Z"
  },
  {
    GUID: 112484,
    Type: "CultureItem",
    Name: "Gerichtshof",
    FileName: "3dicons/museum/icon_colums_of_law.png",
    Rarity: "Legendary",
    RarityValue: 4,
    AttractiveNess: 50,
    ItemSet: 193405,
    Allocation: "Museum",
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-09-10T09:33:30.000Z"
  },
  {
    GUID: 112485,
    Type: "CultureItem",
    Name: "Oreichalkos-Statue",
    FileName: "3dicons/museum/icon_orichalk_statue.png",
    Rarity: "Legendary",
    RarityValue: 4,
    AttractiveNess: 50,
    ItemSet: 193405,
    Allocation: "Museum",
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-09-10T09:33:30.000Z"
  },
  {
    GUID: 112821,
    Type: "CultureItem",
    Name: "Gipfel von Atlantis",
    FileName: "3dicons/museum/icon_yonaguni_pyramid.png",
    Rarity: "Legendary",
    RarityValue: 4,
    AttractiveNess: 50,
    ItemSet: 193405,
    Allocation: "Museum",
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-09-10T09:33:30.000Z"
  },
  {
    GUID: 112824,
    Type: "CultureItem",
    Name: "Atlantische Tafel",
    FileName: "3dicons/museum/icon_tablet_1.png",
    Rarity: "Legendary",
    RarityValue: 4,
    AttractiveNess: 50,
    ItemSet: 193405,
    Allocation: "Museum",
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-09-10T09:33:30.000Z"
  },
  {
    GUID: 112548,
    Type: "VehicleItem",
    Name: "Geballastete Tauchglocke",
    FileName: "3dicons/machine_items/icon_diving_bell_3.png",
    Rarity: "Rare",
    RarityValue: 2,
    Allocation: "DivingVessel",
    RareWeight: 5,
    ExclusiveGroup: "DivingBell",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Navigation", Amount: 10}
      ]
    },
    CraftingCosts: [
      {Product: 112518, Amount: 10},
      {Product: 1010219, Amount: 5}
    ],
    LastChange: "2019-07-30T11:05:12.000Z"
  },
  {
    GUID: 112549,
    Type: "VehicleItem",
    Name: "Moonpool-Tauchglocke",
    FileName: "3dicons/machine_items/icon_diving_bell_2.png",
    Rarity: "Epic",
    RarityValue: 3,
    Allocation: "DivingVessel",
    RareWeight: 5,
    EpicWeight: 5,
    ExclusiveGroup: "DivingBell",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Navigation", Amount: 20}
      ]
    },
    CraftingCosts: [
      {Product: 112520, Amount: 20},
      {Product: 1010219, Amount: 10},
      {Product: 1010204, Amount: 10}
    ],
    LastChange: "2019-07-30T11:05:12.000Z"
  },
  {
    GUID: 112550,
    Type: "VehicleItem",
    Name: "„Spoondrift“ - Nathaniels Pressluft-Tauchglocke",
    FileName: "3dicons/machine_items/icon_diving_bell_1.png",
    Rarity: "Legendary",
    RarityValue: 4,
    Allocation: "DivingVessel",
    EpicWeight: 5,
    LegendaryWeight: 5,
    ExclusiveGroup: "DivingBell",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Navigation", Amount: 30}
      ]
    },
    CraftingCosts: [
      {Product: 112523, Amount: 15},
      {Product: 1010219, Amount: 15},
      {Product: 1010249, Amount: 10}
    ],
    LastChange: "2019-07-30T11:05:12.000Z"
  },
  {
    GUID: 112554,
    Type: "VehicleItem",
    Name: "Ballastschlauch",
    FileName: "3dicons/consumables/item_cable_01.png",
    Rarity: "Rare",
    RarityValue: 2,
    Allocation: "DivingVessel",
    ScrapAmountLevelUpgrade: 1,
    ExclusiveGroup: "Cables",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Navigation", Amount: 10}
      ]
    },
    CraftingCosts: [
      {Product: 112518, Amount: 10},
      {Product: 1010227, Amount: 10},
      {Product: 1010255, Amount: 5}
    ],
    LastChange: "2019-07-30T11:05:12.000Z"
  },
  {
    GUID: 112555,
    Type: "VehicleItem",
    Name: "Kautschukschlauch",
    FileName: "3dicons/consumables/item_cable_02.png",
    Rarity: "Epic",
    RarityValue: 3,
    Allocation: "DivingVessel",
    ScrapAmountLevelUpgrade: 2,
    ExclusiveGroup: "Cables",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Navigation", Amount: 20}
      ]
    },
    CraftingCosts: [
      {Product: 112520, Amount: 10},
      {Product: 1010227, Amount: 15},
      {Product: 1010255, Amount: 10}
    ],
    LastChange: "2019-07-30T11:05:12.000Z"
  },
  {
    GUID: 112556,
    Type: "VehicleItem",
    Name: "Fortschrittlicher Versorgungsschlauch",
    FileName: "3dicons/consumables/item_cable_03.png",
    Rarity: "Legendary",
    RarityValue: 4,
    Allocation: "DivingVessel",
    ScrapAmountLevelUpgrade: 3,
    ExclusiveGroup: "Cables",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Navigation", Amount: 30}
      ]
    },
    CraftingCosts: [
      {Product: 112523, Amount: 10},
      {Product: 1010227, Amount: 20},
      {Product: 1010255, Amount: 15},
      {Product: 1010196, Amount: 25}
    ],
    LastChange: "2019-07-30T11:05:12.000Z"
  },
  {
    GUID: 112365,
    Type: "GuildhouseItem",
    Name: "Hebehüne V1",
    FileName: "3dicons/machine_items/icon_forklift_truck_1.png",
    Rarity: "Rare",
    RarityValue: 2,
    Productivity: 15,
    EffectTargets: [
      {GUID: 193856}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Melee", Amount: 10}
      ]
    },
    CraftingCosts: [
      {Product: 112518, Amount: 10},
      {Product: 120008, Amount: 15},
      {Product: 1010211, Amount: 3}
    ],
    LastChange: "2019-07-30T11:05:12.000Z"
  },
  {
    GUID: 112366,
    Type: "GuildhouseItem",
    Name: "Hebehüne V2",
    FileName: "3dicons/machine_items/icon_forklift_truck_2.png",
    Rarity: "Epic",
    RarityValue: 3,
    Productivity: 25,
    EffectTargets: [
      {GUID: 193856}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Melee", Amount: 20}
      ]
    },
    CraftingCosts: [
      {Product: 112518, Amount: 20},
      {Product: 120008, Amount: 10},
      {Product: 1010211, Amount: 5},
      {Product: 1010255, Amount: 10}
    ],
    LastChange: "2019-07-30T11:05:12.000Z"
  },
  {
    GUID: 112367,
    Type: "GuildhouseItem",
    Name: "Hebehüne V3",
    FileName: "3dicons/machine_items/icon_forklift_truck_3.png",
    Rarity: "Legendary",
    RarityValue: 4,
    Productivity: 35,
    EffectTargets: [
      {GUID: 193856}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Melee", Amount: 30}
      ]
    },
    CraftingCosts: [
      {Product: 112520, Amount: 20},
      {Product: 1010196, Amount: 20},
      {Product: 1010211, Amount: 10},
      {Product: 1010224, Amount: 3}
    ],
    LastChange: "2019-07-30T11:05:12.000Z"
  },
  {
    GUID: 112371,
    Type: "GuildhouseItem",
    Name: "PersoNateur Nr. 531",
    FileName: "3dicons/machine_items/icon_automaton_1.png",
    Rarity: "Rare",
    RarityValue: 2,
    Workforce: -15,
    EffectTargets: [
      {GUID: 6000018}
    ],
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    CraftingCosts: [
      {Product: 112518, Amount: 15},
      {Product: 1010243, Amount: 10},
      {Product: 1010208, Amount: 3}
    ],
    LastChange: "2019-09-10T09:33:30.000Z"
  },
  {
    GUID: 112372,
    Type: "GuildhouseItem",
    Name: "SubordiNateur Nr. 360",
    FileName: "3dicons/machine_items/icon_automaton_2.png",
    Rarity: "Epic",
    RarityValue: 3,
    Workforce: -30,
    EffectTargets: [
      {GUID: 6000018}
    ],
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    CraftingCosts: [
      {Product: 112520, Amount: 15},
      {Product: 1010243, Amount: 15},
      {Product: 1010208, Amount: 5},
      {Product: 1010237, Amount: 5}
    ],
    LastChange: "2019-07-30T11:05:12.000Z"
  },
  {
    GUID: 112373,
    Type: "GuildhouseItem",
    Name: "Human-InkarNateur Nr. 9",
    FileName: "3dicons/machine_items/icon_automaton_3.png",
    Rarity: "Legendary",
    RarityValue: 4,
    Workforce: -50,
    EffectTargets: [
      {GUID: 6000018}
    ],
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    CraftingCosts: [
      {Product: 112523, Amount: 15},
      {Product: 1010243, Amount: 15},
      {Product: 1010208, Amount: 5},
      {Product: 1010237, Amount: 10}
    ],
    LastChange: "2019-09-10T09:33:30.000Z"
  },
  {
    GUID: 112374,
    Type: "GuildhouseItem",
    Name: "Nates simple Kraftmaschine",
    FileName: "3dicons/machine_items/icon_handmade_generator_1.png",
    Rarity: "Rare",
    RarityValue: 2,
    ProvideElectricity: 1,
    IncidentFireIncreaseUpgrade: 15,
    IncidentExplosionIncreaseUpgrade: 7,
    EffectTargets: [
      {GUID: 1010301},
      {GUID: 1010302},
      {GUID: 1010303},
      {GUID: 1010323},
      {GUID: 1010324},
      {GUID: 1010326}
    ],
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    CraftingCosts: [
      {Product: 112518, Amount: 15},
      {Product: 1010243, Amount: 10},
      {Product: 1010224, Amount: 5}
    ],
    LastChange: "2019-09-10T09:33:30.000Z"
  },
  {
    GUID: 112375,
    Type: "GuildhouseItem",
    Name: "Der TurbiNateur",
    FileName: "3dicons/machine_items/icon_handmade_generator_2.png",
    Rarity: "Epic",
    RarityValue: 3,
    ProvideElectricity: 1,
    IncidentFireIncreaseUpgrade: 10,
    IncidentExplosionIncreaseUpgrade: 5,
    EffectTargets: [
      {GUID: 1010301},
      {GUID: 1010302},
      {GUID: 1010303},
      {GUID: 1010323},
      {GUID: 1010324},
      {GUID: 1010326}
    ],
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    CraftingCosts: [
      {Product: 112520, Amount: 15},
      {Product: 1010243, Amount: 10},
      {Product: 1010224, Amount: 5},
      {Product: 1010208, Amount: 5}
    ],
    LastChange: "2019-07-30T11:05:12.000Z"
  },
  {
    GUID: 112376,
    Type: "GuildhouseItem",
    Name: "Nates ultimative Energiematrix",
    FileName: "3dicons/machine_items/icon_handmade_generator_3.png",
    Rarity: "Legendary",
    RarityValue: 4,
    ProvideElectricity: 1,
    IncidentFireIncreaseUpgrade: 5,
    IncidentExplosionIncreaseUpgrade: 3,
    EffectTargets: [
      {GUID: 1010301},
      {GUID: 1010302},
      {GUID: 1010303},
      {GUID: 1010323},
      {GUID: 1010324},
      {GUID: 1010326}
    ],
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    CraftingCosts: [
      {Product: 112523, Amount: 15},
      {Product: 1010243, Amount: 10},
      {Product: 1010224, Amount: 5},
      {Product: 1010255, Amount: 10}
    ],
    LastChange: "2019-09-10T09:33:30.000Z"
  },
  {
    GUID: 112386,
    Type: "HarborOfficeItem",
    Name: "TrepaNateur",
    FileName: "3dicons/machine_items/icon_rotating_rifle_1.png",
    Rarity: "Rare",
    RarityValue: 2,
    BaseDamageUpgrade: 10,
    EffectTargets: [
      {GUID: 191443}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Might", Amount: 20}
      ]
    },
    CraftingCosts: [
      {Product: 112518, Amount: 10},
      {Product: 1010221, Amount: 10},
      {Product: 1010232, Amount: 10}
    ],
    LastChange: "2019-07-30T11:05:12.000Z"
  },
  {
    GUID: 112387,
    Type: "HarborOfficeItem",
    Name: "AssassiNateur",
    FileName: "3dicons/machine_items/icon_rotating_rifle_2.png",
    Rarity: "Epic",
    RarityValue: 3,
    BaseDamageUpgrade: 15,
    EffectTargets: [
      {GUID: 191443}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Might", Amount: 30}
      ]
    },
    CraftingCosts: [
      {Product: 112520, Amount: 10},
      {Product: 1010221, Amount: 10},
      {Product: 1010232, Amount: 10}
    ],
    LastChange: "2019-07-30T11:05:12.000Z"
  },
  {
    GUID: 112388,
    Type: "HarborOfficeItem",
    Name: "Formidabler Vollstrecker",
    FileName: "3dicons/machine_items/icon_rotating_rifle_3.png",
    Rarity: "Legendary",
    RarityValue: 4,
    BaseDamageUpgrade: 25,
    EffectTargets: [
      {GUID: 191443}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Might", Amount: 40}
      ]
    },
    CraftingCosts: [
      {Product: 112523, Amount: 10},
      {Product: 1010223, Amount: 10},
      {Product: 1010232, Amount: 10}
    ],
    LastChange: "2019-07-30T11:05:12.000Z"
  },
  {
    GUID: 112380,
    Type: "GuildhouseItem",
    Name: "Schmutzige Hände",
    FileName: "3dicons/machine_items/icon_power_shovel_1.png",
    Rarity: "Rare",
    RarityValue: 2,
    Productivity: 15,
    Allocation: "HarborOffice",
    EffectTargets: [
      {GUID: 193400}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Melee", Amount: 10}
      ]
    },
    CraftingCosts: [
      {Product: 112518, Amount: 20},
      {Product: 1010196, Amount: 10},
      {Product: 1010211, Amount: 10}
    ],
    LastChange: "2019-07-30T11:05:12.000Z"
  },
  {
    GUID: 112381,
    Type: "GuildhouseItem",
    Name: "Gierige Griffel",
    FileName: "3dicons/machine_items/icon_power_shovel_2.png",
    Rarity: "Epic",
    RarityValue: 3,
    Productivity: 25,
    Allocation: "HarborOffice",
    EffectTargets: [
      {GUID: 193400}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Melee", Amount: 20}
      ]
    },
    CraftingCosts: [
      {Product: 112520, Amount: 20},
      {Product: 1010219, Amount: 10},
      {Product: 1010211, Amount: 10}
    ],
    LastChange: "2019-07-30T11:05:12.000Z"
  },
  {
    GUID: 112382,
    Type: "GuildhouseItem",
    Name: "Zackige Abzwack-Zangen",
    FileName: "3dicons/machine_items/icon_power_shovel_3.png",
    Rarity: "Legendary",
    RarityValue: 4,
    Productivity: 35,
    Allocation: "HarborOffice",
    EffectTargets: [
      {GUID: 193400}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Melee", Amount: 30}
      ]
    },
    CraftingCosts: [
      {Product: 112523, Amount: 20},
      {Product: 1010219, Amount: 10},
      {Product: 1010211, Amount: 10},
      {Product: 1010224, Amount: 10}
    ],
    LastChange: "2019-07-30T11:05:12.000Z"
  },
  {
    GUID: 112383,
    Type: "GuildhouseItem",
    Name: "Wasserkraftrad",
    FileName: "3dicons/machine_items/icon_hydraulic_network_1.png",
    Rarity: "Rare",
    RarityValue: 2,
    ProvideElectricity: 1,
    IncidentFireIncreaseUpgrade: 15,
    IncidentExplosionIncreaseUpgrade: 7,
    Allocation: "HarborOffice",
    EffectTargets: [
      {GUID: 193400},
      {GUID: 190783}
    ],
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    CraftingCosts: [
      {Product: 112518, Amount: 15},
      {Product: 1010211, Amount: 5},
      {Product: 1010243, Amount: 10}
    ],
    LastChange: "2019-09-10T09:33:30.000Z"
  },
  {
    GUID: 112384,
    Type: "GuildhouseItem",
    Name: "Rostfreie Wasserkraftanlage",
    FileName: "3dicons/machine_items/icon_hydraulic_network_2.png",
    Rarity: "Epic",
    RarityValue: 3,
    ProvideElectricity: 1,
    IncidentFireIncreaseUpgrade: 10,
    IncidentExplosionIncreaseUpgrade: 5,
    Allocation: "HarborOffice",
    EffectTargets: [
      {GUID: 193400},
      {GUID: 190783}
    ],
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    CraftingCosts: [
      {Product: 112520, Amount: 15},
      {Product: 1010211, Amount: 5},
      {Product: 1010243, Amount: 10},
      {Product: 1010255, Amount: 10}
    ],
    LastChange: "2019-07-30T11:05:12.000Z"
  },
  {
    GUID: 112385,
    Type: "GuildhouseItem",
    Name: "Revolvierendes Riesenrad",
    FileName: "3dicons/machine_items/icon_hydraulic_network_3.png",
    Rarity: "Legendary",
    RarityValue: 4,
    ProvideElectricity: 1,
    IncidentFireIncreaseUpgrade: 5,
    IncidentExplosionIncreaseUpgrade: 3,
    Allocation: "HarborOffice",
    EffectTargets: [
      {GUID: 193400},
      {GUID: 190783}
    ],
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    CraftingCosts: [
      {Product: 112523, Amount: 20},
      {Product: 1010211, Amount: 10},
      {Product: 1010243, Amount: 10},
      {Product: 1010255, Amount: 10}
    ],
    LastChange: "2019-09-10T09:33:30.000Z"
  },
  {
    GUID: 112368,
    Type: "VehicleItem",
    Name: "AutoelimiNateur",
    FileName: "3dicons/ship_military/icon_double_barreled_cannon_1.png",
    Rarity: "Rare",
    RarityValue: 2,
    BaseDamageUpgrade: 10,
    Allocation: "Warship",
    ExclusiveGroup: "Canons",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Might", Amount: 20}
      ]
    },
    CraftingCosts: [
      {Product: 112518, Amount: 15},
      {Product: 1010221, Amount: 10},
      {Product: 1010232, Amount: 10}
    ],
    LastChange: "2019-07-30T11:05:12.000Z"
  },
  {
    GUID: 112369,
    Type: "VehicleItem",
    Name: "ExtermiNateur",
    FileName: "3dicons/ship_military/icon_double_barreled_cannon_2.png",
    Rarity: "Epic",
    RarityValue: 3,
    BaseDamageUpgrade: 15,
    Allocation: "Warship",
    ExclusiveGroup: "Canons",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Might", Amount: 30}
      ]
    },
    CraftingCosts: [
      {Product: 112520, Amount: 10},
      {Product: 1010221, Amount: 10},
      {Product: 1010232, Amount: 10}
    ],
    LastChange: "2019-07-30T11:05:12.000Z"
  },
  {
    GUID: 112370,
    Type: "VehicleItem",
    Name: "DomiNateur",
    FileName: "3dicons/ship_military/icon_double_barreled_cannon_3.png",
    Rarity: "Legendary",
    RarityValue: 4,
    BaseDamageUpgrade: 20,
    Allocation: "Warship",
    ExclusiveGroup: "Canons",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Might", Amount: 40}
      ]
    },
    CraftingCosts: [
      {Product: 112523, Amount: 10},
      {Product: 1010223, Amount: 10},
      {Product: 1010232, Amount: 10}
    ],
    LastChange: "2019-07-30T11:05:12.000Z"
  },
  {
    GUID: 112377,
    Type: "VehicleItem",
    Name: "Schiffspropeller - „Sturmbö“",
    FileName: "3dicons/ship_military/icon_hydrojet_1.png",
    Rarity: "Rare",
    RarityValue: 2,
    ForwardSpeedUpgrade: 10,
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Navigation", Amount: 10}
      ]
    },
    CraftingCosts: [
      {Product: 112518, Amount: 20},
      {Product: 1010219, Amount: 10},
      {Product: 1010224, Amount: 3}
    ],
    LastChange: "2019-07-30T11:05:12.000Z"
  },
  {
    GUID: 112378,
    Type: "VehicleItem",
    Name: "Schiffspropeller - „Zyklon“",
    FileName: "3dicons/ship_military/icon_hydrojet_2.png",
    Rarity: "Epic",
    RarityValue: 3,
    ForwardSpeedUpgrade: 15,
    IgnoreWeightFactorUpgrade: 50,
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Navigation", Amount: 20}
      ]
    },
    CraftingCosts: [
      {Product: 112520, Amount: 20},
      {Product: 1010219, Amount: 20},
      {Product: 1010224, Amount: 5}
    ],
    LastChange: "2019-07-30T11:05:12.000Z"
  },
  {
    GUID: 112379,
    Type: "VehicleItem",
    Name: "Schiffspropeller - „Hurrikan“",
    FileName: "3dicons/ship_military/icon_hydrojet_3.png",
    Rarity: "Legendary",
    RarityValue: 4,
    ForwardSpeedUpgrade: 25,
    IgnoreWeightFactorUpgrade: 100,
    IgnoreDamageFactorUpgrade: 100,
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Navigation", Amount: 30}
      ]
    },
    CraftingCosts: [
      {Product: 112523, Amount: 15},
      {Product: 1010219, Amount: 20},
      {Product: 1010224, Amount: 10}
    ],
    LastChange: "2019-07-30T11:05:12.000Z"
  },
  {
    GUID: 112389,
    Type: "TownhallItem",
    Name: "Geheimnisvoller Warenautomat",
    FileName: "3dicons/machine_items/icon_automated_kiosk_1.png",
    Rarity: "Rare",
    RarityValue: 2,
    TaxModifierInPercent: 15,
    EffectTargets: [
      {GUID: 190762}
    ],
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    CraftingCosts: [
      {Product: 112518, Amount: 15},
      {Product: 1010196, Amount: 10},
      {Product: 1010217, Amount: 10}
    ],
    LastChange: "2019-09-10T09:33:30.000Z"
  },
  {
    GUID: 112390,
    Type: "TownhallItem",
    Name: "Kiosk des flüchtigen Glücks",
    FileName: "3dicons/machine_items/icon_automated_kiosk_2.png",
    Rarity: "Epic",
    RarityValue: 3,
    TaxModifierInPercent: 20,
    EffectTargets: [
      {GUID: 190762}
    ],
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    CraftingCosts: [
      {Product: 112520, Amount: 20},
      {Product: 1010196, Amount: 15},
      {Product: 1010238, Amount: 10},
      {Product: 1010214, Amount: 10}
    ],
    LastChange: "2019-07-30T11:05:12.000Z"
  },
  {
    GUID: 112391,
    Type: "TownhallItem",
    Name: "Schicksalhafte Tombola unerklärlicher Neugierde",
    FileName: "3dicons/machine_items/icon_automated_kiosk_3.png",
    Rarity: "Legendary",
    RarityValue: 4,
    TaxModifierInPercent: 30,
    EffectTargets: [
      {GUID: 190762}
    ],
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    CraftingCosts: [
      {Product: 112523, Amount: 20},
      {Product: 1010242, Amount: 15},
      {Product: 1010214, Amount: 10},
      {Product: 1010257, Amount: 10}
    ],
    LastChange: "2019-09-10T09:33:30.000Z"
  },
  {
    GUID: 112392,
    Type: "TownhallItem",
    Name: "Nates experimentelles Lichterspiel",
    FileName: "3dicons/machine_items/icon_experimental_firework_machine_1.png",
    Rarity: "Rare",
    RarityValue: 2,
    AttractiveNess: 1,
    AdditionalHappiness: 5,
    EffectTargets: [
      {GUID: 190762}
    ],
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    CraftingCosts: [
      {Product: 112518, Amount: 10},
      {Product: 1010232, Amount: 5},
      {Product: 1010197, Amount: 10}
    ],
    LastChange: "2019-09-10T09:33:30.000Z"
  },
  {
    GUID: 112393,
    Type: "TownhallItem",
    Name: "Nates astrographische Amüsier-Raketen",
    FileName: "3dicons/machine_items/icon_experimental_firework_machine_3.png",
    Rarity: "Epic",
    RarityValue: 3,
    AttractiveNess: 1,
    AdditionalHappiness: 7,
    EffectTargets: [
      {GUID: 190762}
    ],
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    CraftingCosts: [
      {Product: 112520, Amount: 10},
      {Product: 1010232, Amount: 10},
      {Product: 1010197, Amount: 15},
      {Product: 1010222, Amount: 5}
    ],
    LastChange: "2019-07-30T11:05:12.000Z"
  },
  {
    GUID: 112394,
    Type: "TownhallItem",
    Name: "Raketenset Tschingderassabum",
    FileName: "3dicons/machine_items/icon_experimental_firework_machine_3-1.png",
    Rarity: "Legendary",
    RarityValue: 4,
    AttractiveNess: 1,
    AdditionalHappiness: 10,
    EffectTargets: [
      {GUID: 190762}
    ],
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    CraftingCosts: [
      {Product: 112523, Amount: 10},
      {Product: 1010232, Amount: 10},
      {Product: 1010222, Amount: 5},
      {Product: 1010230, Amount: 5}
    ],
    LastChange: "2019-09-10T09:33:30.000Z"
  },
  {
    GUID: 113353,
    Type: "VehicleItem",
    Name: "Berühmter Ausgräber",
    FileName: "3dicons/specialists/systemic/icon_farmer_102_b.png",
    Rarity: "Rare",
    RarityValue: 2,
    Allocation: "DivingVessel",
    RareWeight: 5,
    ArtefactWeight: 10,
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Hunting", Amount: 30}
      ]
    },
    LastChange: "2019-07-30T11:05:12.000Z"
  },
  {
    GUID: 113354,
    Type: "VehicleItem",
    Name: "Audrey, die Meeresarchäologin",
    FileName: "3dicons/specialists/systemic/icon_normal_dressed_602.png",
    Rarity: "Epic",
    RarityValue: 3,
    Allocation: "DivingVessel",
    RareWeight: 5,
    EpicWeight: 10,
    ArtefactWeight: 20,
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Diplomacy", Amount: 30},
        {Attribute: "Hunting", Amount: 20}
      ]
    },
    LastChange: "2019-07-30T11:05:12.000Z"
  },
  {
    GUID: 113355,
    Type: "VehicleItem",
    Name: "Peter Flinders, Artefaktrestaurator",
    FileName: "3dicons/specialists/systemic/icon_archaeologist_100.png",
    Rarity: "Legendary",
    RarityValue: 4,
    Allocation: "DivingVessel",
    RareWeight: 5,
    EpicWeight: 10,
    LegendaryWeight: 5,
    ArtefactWeight: 30,
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Diplomacy", Amount: 50},
        {Attribute: "Hunting", Amount: 30}
      ]
    },
    LastChange: "2019-07-30T11:05:12.000Z"
  },
  {
    GUID: 113356,
    Type: "VehicleItem",
    Name: "Meeresbiologe",
    FileName: "3dicons/specialists/systemic/icon_zoologist_700.png",
    Rarity: "Rare",
    RarityValue: 2,
    Allocation: "DivingVessel",
    RareWeight: 5,
    AnimalWeight: 10,
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Hunting", Amount: 30}
      ]
    },
    LastChange: "2019-07-30T11:05:12.000Z"
  },
  {
    GUID: 113357,
    Type: "VehicleItem",
    Name: "Scara, die Meeresbiologin",
    FileName: "3dicons/specialists/systemic/icon_zoologist_411.png",
    Rarity: "Epic",
    RarityValue: 3,
    Allocation: "DivingVessel",
    RareWeight: 5,
    EpicWeight: 10,
    AnimalWeight: 20,
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Hunting", Amount: 40}
      ]
    },
    LastChange: "2019-07-30T11:05:12.000Z"
  },
  {
    GUID: 113358,
    Type: "VehicleItem",
    Name: "Orvette Charles, von der Königlichen Ozeanographengesellschaft",
    FileName: "3dicons/specialists/systemic/icon_archaeologist_801.png",
    Rarity: "Legendary",
    RarityValue: 4,
    Allocation: "DivingVessel",
    RareWeight: 5,
    EpicWeight: 10,
    LegendaryWeight: 5,
    AnimalWeight: 30,
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Hunting", Amount: 50},
        {Attribute: "Diplomacy", Amount: 20}
      ]
    },
    LastChange: "2019-07-30T11:05:12.000Z"
  },
  {
    GUID: 113359,
    Type: "VehicleItem",
    Name: "Freizeittaucher",
    FileName: "3dicons/specialists/systemic/icon_worker_412.png",
    Rarity: "Rare",
    RarityValue: 2,
    Allocation: "DivingVessel",
    RareWeight: 5,
    MachinesWeight: 10,
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Hunting", Amount: 20},
        {Attribute: "Melee", Amount: 10},
        {Attribute: "PerkDiver", Amount: 1}
      ]
    },
    LastChange: "2019-09-10T09:33:30.000Z"
  },
  {
    GUID: 113360,
    Type: "VehicleItem",
    Name: "Nadia, die Entdeckerin",
    FileName: "3dicons/specialists/systemic/icon_adventurer_400.png",
    Rarity: "Epic",
    RarityValue: 3,
    Allocation: "DivingVessel",
    RareWeight: 5,
    EpicWeight: 10,
    MachinesWeight: 20,
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Crafting", Amount: 40},
        {Attribute: "Navigation", Amount: 20},
        {Attribute: "PerkDiver", Amount: 1}
      ]
    },
    LastChange: "2019-09-10T09:33:30.000Z"
  },
  {
    GUID: 113361,
    Type: "VehicleItem",
    Name: "Anthony Anchovy, Retter der versunkenen Ölwannen",
    FileName: "3dicons/specialists/systemic/icon_treasure_hunter_200.png",
    Rarity: "Legendary",
    RarityValue: 4,
    Allocation: "DivingVessel",
    RareWeight: 5,
    EpicWeight: 10,
    LegendaryWeight: 5,
    MachinesWeight: 30,
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Navigation", Amount: 50},
        {Attribute: "Might", Amount: 20},
        {Attribute: "Melee", Amount: 10}
      ]
    },
    LastChange: "2019-07-30T11:05:12.000Z"
  },
  {
    GUID: 113362,
    Type: "VehicleItem",
    Name: "Schatzsucherin",
    FileName: "3dicons/specialists/systemic/icon_worker_411.png",
    Rarity: "Rare",
    RarityValue: 2,
    Allocation: "DivingVessel",
    RareWeight: 5,
    ScrapAmountLevelUpgrade: 1,
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Hunting", Amount: 30},
        {Attribute: "Faith", Amount: 10}
      ]
    },
    LastChange: "2019-07-30T11:05:12.000Z"
  },
  {
    GUID: 113363,
    Type: "VehicleItem",
    Name: "Lamie, der wehmütige Pirat",
    FileName: "3dicons/specialists/systemic/icon_treasure_hunter_100.png",
    Rarity: "Epic",
    RarityValue: 3,
    Allocation: "DivingVessel",
    RareWeight: 5,
    EpicWeight: 10,
    ScrapAmountLevelUpgrade: 2,
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Might", Amount: 40},
        {Attribute: "Hunting", Amount: 10}
      ]
    },
    LastChange: "2019-07-30T11:05:12.000Z"
  },
  {
    GUID: 113364,
    Type: "VehicleItem",
    Name: "Mai Kalan, Entdeckerin glänzender Juwelen",
    FileName: "3dicons/specialists/systemic/icon_zoologist_800.png",
    Rarity: "Legendary",
    RarityValue: 4,
    Allocation: "DivingVessel",
    RareWeight: 5,
    EpicWeight: 10,
    LegendaryWeight: 5,
    ScrapAmountLevelUpgrade: 3,
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Hunting", Amount: 50},
        {Attribute: "Melee", Amount: 20},
        {Attribute: "Faith", Amount: 10}
      ]
    },
    LastChange: "2019-07-30T11:05:12.000Z"
  },
  {
    GUID: 113792,
    Type: "HarborOfficeItem",
    Name: "Hogarth der Hafenmeister, Veteran von Trelawney",
    FileName: "3dicons/specialists/systemic/sunken_treasure_rewards/icon_guildhouse_specialist_200.png",
    Rarity: "Legendary",
    RarityValue: 4,
    EffectTargets: [
      {GUID: 193480}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Diplomacy", Amount: 50}
      ]
    },
    LastChange: "2019-07-30T11:05:12.000Z"
  },
  {
    GUID: 113799,
    Type: "GuildhouseItem",
    Name: "Susannah Brightwoman, bringt Licht ins Dunkel",
    FileName: "3dicons/specialists/systemic/sunken_treasure_rewards/icon_coffee_specialist_800.png",
    Rarity: "Legendary",
    RarityValue: 4,
    AttractiveNess: 8,
    EffectTargets: [
      {GUID: 1010324},
      {GUID: 1010328}
    ],
    AdditionalOutput: [
      {Product: 1010249, Cycle: 5, Amount: 1}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Crafting", Amount: 50}
      ]
    },
    LastChange: "2019-07-30T11:05:12.000Z"
  },
  {
    GUID: 113800,
    Type: "TownhallItem",
    Name: "Fernando de Faro, Kaffeeliebhaber und durch und durch ein Schuft",
    FileName: "3dicons/specialists/systemic/sunken_treasure_rewards/icon_habour_master_700.png",
    Rarity: "Legendary",
    RarityValue: 4,
    AdditionalHappiness: 10,
    EffectTargets: [
      {GUID: 190762}
    ],
    GoodConsumptionUpgrade: [
      {ProvidedNeed: 120032, AmountInPercent: -100}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Diplomacy", Amount: 50}
      ]
    },
    LastChange: "2019-07-30T11:05:12.000Z"
  },
  {
    GUID: 193397,
    Type: "VehicleItem",
    Name: "Depressuriser",
    FileName: "3dicons/icon_tools.png",
    Rarity: "Common",
    RarityValue: 0,
    RareWeight: 10,
    AnimalWeight: 10,
    ScrapAmountLevelUpgrade: 2,
    LastChange: "2019-07-30T11:05:12.000Z"
  },
  {
    GUID: 114540,
    Type: "CultureItem",
    Name: "Heidelbeere",
    FileName: "3dicons/plants/item_blueberry.png",
    Rarity: "Common",
    RarityValue: 0,
    AttractiveNess: 10,
    Allocation: "BotanicGarden",
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-09-10T09:33:30.000Z"
  },
  {
    GUID: 114539,
    Type: "CultureItem",
    Name: "Löwenzahn",
    FileName: "3dicons/plants/icon_dandelion.png",
    Rarity: "Common",
    RarityValue: 0,
    AttractiveNess: 10,
    ItemSet: 193670,
    Allocation: "BotanicGarden",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Medicine", Amount: 5}
      ]
    },
    LastChange: "2019-09-10T09:33:30.000Z"
  },
  {
    GUID: 114541,
    Type: "CultureItem",
    Name: "Holunder",
    FileName: "3dicons/plants/icon_elderberry.png",
    Rarity: "Common",
    RarityValue: 0,
    AttractiveNess: 10,
    Allocation: "BotanicGarden",
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-09-10T09:33:30.000Z"
  },
  {
    GUID: 114538,
    Type: "CultureItem",
    Name: "Roter Fingerhut",
    FileName: "3dicons/plants/icon_foxglove.png",
    Rarity: "Common",
    RarityValue: 0,
    AttractiveNess: 10,
    ItemSet: 193670,
    Allocation: "BotanicGarden",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Medicine", Amount: 5}
      ]
    },
    LastChange: "2019-09-10T09:33:30.000Z"
  },
  {
    GUID: 114543,
    Type: "CultureItem",
    Name: "Hanf",
    FileName: "3dicons/plants/icon_hemp.png",
    Rarity: "Common",
    RarityValue: 0,
    AttractiveNess: 10,
    ItemSet: 193672,
    Allocation: "BotanicGarden",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Faith", Amount: 5}
      ]
    },
    LastChange: "2019-09-10T09:33:30.000Z"
  },
  {
    GUID: 114661,
    Type: "CultureItem",
    Name: "Mohn",
    FileName: "3dicons/plants/icon_poppy.png",
    Rarity: "Common",
    RarityValue: 0,
    AttractiveNess: 10,
    ItemSet: 193672,
    Allocation: "BotanicGarden",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Faith", Amount: 5}
      ]
    },
    LastChange: "2019-09-10T09:33:30.000Z"
  },
  {
    GUID: 114542,
    Type: "CultureItem",
    Name: "Pfefferminze",
    FileName: "3dicons/plants/icon_peppermint.png",
    Rarity: "Common",
    RarityValue: 0,
    AttractiveNess: 10,
    ItemSet: 193670,
    Allocation: "BotanicGarden",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Medicine", Amount: 5}
      ]
    },
    LastChange: "2019-09-10T09:33:30.000Z"
  },
  {
    GUID: 111112,
    Type: "CultureItem",
    Name: "Schilfrohr",
    FileName: "3dicons/plants/icon_reeds.png",
    Rarity: "Common",
    RarityValue: 0,
    AttractiveNess: 10,
    ItemSet: 193657,
    Allocation: "BotanicGarden",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Medicine", Amount: 5}
      ]
    },
    LastChange: "2019-09-10T09:33:30.000Z"
  },
  {
    GUID: 111118,
    Type: "CultureItem",
    Name: "Felsengebirgs-Tanne",
    FileName: "3dicons/plants/icon_rocky_mountain_fir.png",
    Rarity: "Common",
    RarityValue: 0,
    AttractiveNess: 10,
    ItemSet: 193662,
    Allocation: "BotanicGarden",
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-09-10T09:33:30.000Z"
  },
  {
    GUID: 114657,
    Type: "CultureItem",
    Name: "Ackerwinde",
    FileName: "3dicons/plants/icon_vines.png",
    Rarity: "Common",
    RarityValue: 0,
    AttractiveNess: 10,
    ItemSet: 193658,
    Allocation: "BotanicGarden",
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-09-10T09:33:30.000Z"
  },
  {
    GUID: 111115,
    Type: "CultureItem",
    Name: "Japanische Blütenkirsche",
    FileName: "3dicons/plants/icon_cherry_blossom.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    AttractiveNess: 20,
    ItemSet: 193660,
    Allocation: "BotanicGarden",
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-09-10T09:33:30.000Z"
  },
  {
    GUID: 111121,
    Type: "CultureItem",
    Name: "Kokospalme",
    FileName: "3dicons/plants/icon_coco_tree.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    AttractiveNess: 20,
    ItemSet: 193655,
    Allocation: "BotanicGarden",
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-09-10T09:33:30.000Z"
  },
  {
    GUID: 114387,
    Type: "CultureItem",
    Name: "Sternjasmin",
    FileName: "3dicons/plants/icon_downy_jasmine.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    AttractiveNess: 20,
    ItemSet: 193660,
    Allocation: "BotanicGarden",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Faith", Amount: 10}
      ]
    },
    LastChange: "2019-09-10T09:33:30.000Z"
  },
  {
    GUID: 111120,
    Type: "CultureItem",
    Name: "Kautschukbaum",
    FileName: "3dicons/plants/icon_hevea.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    AttractiveNess: 20,
    ItemSet: 193653,
    Allocation: "BotanicGarden",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: []
    },
    LastChange: "2019-09-10T09:33:30.000Z"
  },
  {
    GUID: 111111,
    Type: "CultureItem",
    Name: "Seerose",
    FileName: "3dicons/plants/icon_lilies.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    AttractiveNess: 20,
    ItemSet: 193657,
    Allocation: "BotanicGarden",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Medicine", Amount: 10}
      ]
    },
    LastChange: "2019-09-10T09:33:30.000Z"
  },
  {
    GUID: 114388,
    Type: "CultureItem",
    Name: "Champaka",
    FileName: "3dicons/plants/icon_magnolia_champaca.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    AttractiveNess: 20,
    ItemSet: 193660,
    Allocation: "BotanicGarden",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Faith", Amount: 10}
      ]
    },
    LastChange: "2019-09-10T09:33:30.000Z"
  },
  {
    GUID: 111122,
    Type: "CultureItem",
    Name: "Königspalme",
    FileName: "3dicons/plants/icon_palm_tree.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    AttractiveNess: 20,
    ItemSet: 193655,
    Allocation: "BotanicGarden",
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-09-10T09:33:30.000Z"
  },
  {
    GUID: 112735,
    Type: "CultureItem",
    Name: "Papyrus",
    FileName: "3dicons/plants/item_papyrus.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    AttractiveNess: 20,
    ItemSet: 193658,
    Allocation: "BotanicGarden",
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-09-10T09:33:30.000Z"
  },
  {
    GUID: 112732,
    Type: "CultureItem",
    Name: "Kandelaberkoralle",
    FileName: "3dicons/plants/icon_pillar_coral.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    AttractiveNess: 20,
    ItemSet: 193655,
    Allocation: "BotanicGarden",
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-09-10T09:33:30.000Z"
  },
  {
    GUID: 111123,
    Type: "CultureItem",
    Name: "Rhododendron",
    FileName: "3dicons/plants/icon_rhododendron.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    AttractiveNess: 20,
    ItemSet: 193658,
    Allocation: "BotanicGarden",
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-09-10T09:33:30.000Z"
  },
  {
    GUID: 114662,
    Type: "CultureItem",
    Name: "Wiesensalbei",
    FileName: "3dicons/plants/icon_salvia.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    AttractiveNess: 20,
    ItemSet: 193672,
    Allocation: "BotanicGarden",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Faith", Amount: 10}
      ]
    },
    LastChange: "2019-09-10T09:33:30.000Z"
  },
  {
    GUID: 111116,
    Type: "CultureItem",
    Name: "Zweiblütiger Steinbrech",
    FileName: "3dicons/plants/icon_saxifraga.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    AttractiveNess: 20,
    ItemSet: 193662,
    Allocation: "BotanicGarden",
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-09-10T09:33:30.000Z"
  },
  {
    GUID: 114656,
    Type: "CultureItem",
    Name: "Strandflieder",
    FileName: "3dicons/plants/icon_sea_lavender.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    AttractiveNess: 20,
    ItemSet: 193655,
    Allocation: "BotanicGarden",
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-09-10T09:33:30.000Z"
  },
  {
    GUID: 111113,
    Type: "CultureItem",
    Name: "Geweihkoralle",
    FileName: "3dicons/plants/icon_staghorn_coral.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    AttractiveNess: 20,
    ItemSet: 193655,
    Allocation: "BotanicGarden",
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-09-10T09:33:30.000Z"
  },
  {
    GUID: 114670,
    Type: "CultureItem",
    Name: "Strand-Grasnelke",
    FileName: "3dicons/plants/icon_thrift.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    AttractiveNess: 20,
    Allocation: "BotanicGarden",
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-09-10T09:33:30.000Z"
  },
  {
    GUID: 114389,
    Type: "CultureItem",
    Name: "Indisches Basilikum",
    FileName: "3dicons/plants/icon_tulsi.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    AttractiveNess: 20,
    ItemSet: 193660,
    Allocation: "BotanicGarden",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Faith", Amount: 10}
      ]
    },
    LastChange: "2019-09-10T09:33:30.000Z"
  },
  {
    GUID: 112736,
    Type: "CultureItem",
    Name: "Wasserhyazinthe",
    FileName: "3dicons/plants/item_water_hyacinth.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    AttractiveNess: 20,
    ItemSet: 193658,
    Allocation: "BotanicGarden",
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-09-10T09:33:30.000Z"
  },
  {
    GUID: 114383,
    Type: "CultureItem",
    Name: "Espeletia",
    FileName: "3dicons/plants/icon_frailejones.png",
    Rarity: "Rare",
    RarityValue: 2,
    AttractiveNess: 30,
    ItemSet: 193665,
    Allocation: "BotanicGarden",
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-09-10T09:33:30.000Z"
  },
  {
    GUID: 112612,
    Type: "CultureItem",
    Name: "Riesenseerose",
    FileName: "3dicons/plants/icon_giant_water_lily.png",
    Rarity: "Rare",
    RarityValue: 2,
    AttractiveNess: 30,
    ItemSet: 193653,
    Allocation: "BotanicGarden",
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-09-10T09:33:30.000Z"
  },
  {
    GUID: 111107,
    Type: "CultureItem",
    Name: "Steinkoralle",
    FileName: "3dicons/plants/icon_great_star_coral.png",
    Rarity: "Rare",
    RarityValue: 2,
    AttractiveNess: 30,
    ItemSet: 193655,
    Allocation: "BotanicGarden",
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-09-10T09:33:30.000Z"
  },
  {
    GUID: 111119,
    Type: "CultureItem",
    Name: "Guayacán de Manizales",
    FileName: "3dicons/plants/icon_guayacan_de_manizales.png",
    Rarity: "Rare",
    RarityValue: 2,
    AttractiveNess: 20,
    ItemSet: 193665,
    Allocation: "BotanicGarden",
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-09-10T09:33:30.000Z"
  },
  {
    GUID: 114667,
    Type: "CultureItem",
    Name: "Gungurru",
    FileName: "3dicons/plants/icon_gunguru.png",
    Rarity: "Rare",
    RarityValue: 2,
    AttractiveNess: 30,
    Allocation: "BotanicGarden",
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-09-10T09:33:30.000Z"
  },
  {
    GUID: 114669,
    Type: "CultureItem",
    Name: "Strauchiges Brandkraut",
    FileName: "3dicons/plants/icon_jerusalem_sage.png",
    Rarity: "Rare",
    RarityValue: 2,
    AttractiveNess: 30,
    Allocation: "BotanicGarden",
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-09-10T09:33:30.000Z"
  },
  {
    GUID: 114658,
    Type: "CultureItem",
    Name: "Affenleiter",
    FileName: "3dicons/plants/icon_lianas.png",
    Rarity: "Rare",
    RarityValue: 2,
    AttractiveNess: 30,
    ItemSet: 193653,
    Allocation: "BotanicGarden",
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-09-10T09:33:30.000Z"
  },
  {
    GUID: 112733,
    Type: "CultureItem",
    Name: "Echter Eibisch",
    FileName: "3dicons/plants/item_marsh_mallow.png",
    Rarity: "Rare",
    RarityValue: 2,
    AttractiveNess: 30,
    ItemSet: 193657,
    Allocation: "BotanicGarden",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Medicine", Amount: 30}
      ]
    },
    LastChange: "2019-09-10T09:33:30.000Z"
  },
  {
    GUID: 112731,
    Type: "CultureItem",
    Name: "Metaxya-Farn",
    FileName: "3dicons/plants/item_metaxya.png",
    Rarity: "Rare",
    RarityValue: 2,
    AttractiveNess: 30,
    ItemSet: 193653,
    Allocation: "BotanicGarden",
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-09-10T09:33:30.000Z"
  },
  {
    GUID: 114665,
    Type: "CultureItem",
    Name: "Mondorchidee",
    FileName: "3dicons/plants/icon_orchids.png",
    Rarity: "Rare",
    RarityValue: 2,
    AttractiveNess: 30,
    Allocation: "BotanicGarden",
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-09-10T09:33:30.000Z"
  },
  {
    GUID: 114668,
    Type: "CultureItem",
    Name: "Pinker Zuckerbusch",
    FileName: "3dicons/plants/icon_protea.png",
    Rarity: "Rare",
    RarityValue: 2,
    AttractiveNess: 30,
    Allocation: "BotanicGarden",
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-09-10T09:33:30.000Z"
  },
  {
    GUID: 114381,
    Type: "CultureItem",
    Name: "Rote Schlauchpflanze",
    FileName: "3dicons/plants/icon_purple_pitcher.png",
    Rarity: "Rare",
    RarityValue: 2,
    AttractiveNess: 30,
    ItemSet: 193653,
    Allocation: "BotanicGarden",
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-09-10T09:33:30.000Z"
  },
  {
    GUID: 114385,
    Type: "CultureItem",
    Name: "Riesenbromelie",
    FileName: "3dicons/plants/icon_queen_of_andes.png",
    Rarity: "Rare",
    RarityValue: 2,
    AttractiveNess: 30,
    ItemSet: 193665,
    Allocation: "BotanicGarden",
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-09-10T09:33:30.000Z"
  },
  {
    GUID: 112734,
    Type: "CultureItem",
    Name: "Schnee-Eukalyptus",
    FileName: "3dicons/plants/icon_snow_gum.png",
    Rarity: "Rare",
    RarityValue: 2,
    AttractiveNess: 30,
    ItemSet: 193662,
    Allocation: "BotanicGarden",
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2020-06-02T12:37:16.000Z"
  },
  {
    GUID: 111110,
    Type: "CultureItem",
    Name: "Amerikanische Lotusblume",
    FileName: "3dicons/plants/icon_star_bright_lotus.png",
    Rarity: "Rare",
    RarityValue: 2,
    AttractiveNess: 30,
    ItemSet: 193672,
    Allocation: "BotanicGarden",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Faith", Amount: 30}
      ]
    },
    LastChange: "2019-09-10T09:33:30.000Z"
  },
  {
    GUID: 114666,
    Type: "CultureItem",
    Name: "Grannen-Schildfarn",
    FileName: "3dicons/plants/icon_tassel_ferns.png",
    Rarity: "Rare",
    RarityValue: 2,
    AttractiveNess: 30,
    Allocation: "BotanicGarden",
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-09-10T09:33:30.000Z"
  },
  {
    GUID: 111106,
    Type: "CultureItem",
    Name: "Blaue Lotusblume",
    FileName: "3dicons/plants/icon_blue_lotus.png",
    Rarity: "Epic",
    RarityValue: 3,
    AttractiveNess: 40,
    ItemSet: 193658,
    Allocation: "BotanicGarden",
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-09-10T09:33:30.000Z"
  },
  {
    GUID: 114673,
    Type: "CultureItem",
    Name: "Mezoischer Hornzapfen",
    FileName: "3dicons/plants/icon_mexican_horn_cone.png",
    Rarity: "Epic",
    RarityValue: 3,
    AttractiveNess: 40,
    Allocation: "BotanicGarden",
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-09-10T09:33:30.000Z"
  },
  {
    GUID: 114671,
    Type: "CultureItem",
    Name: "Bogenhanf",
    FileName: "3dicons/plants/icon_mother_in_law_tongue.png",
    Rarity: "Epic",
    RarityValue: 3,
    AttractiveNess: 40,
    Allocation: "BotanicGarden",
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-09-10T09:33:30.000Z"
  },
  {
    GUID: 112611,
    Type: "CultureItem",
    Name: "Indische Lotusblume",
    FileName: "3dicons/plants/icon_perrys_giant_sunburst.png",
    Rarity: "Epic",
    RarityValue: 3,
    AttractiveNess: 40,
    ItemSet: 193672,
    Allocation: "BotanicGarden",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Faith", Amount: 40}
      ]
    },
    LastChange: "2019-09-10T09:33:30.000Z"
  },
  {
    GUID: 114674,
    Type: "CultureItem",
    Name: "Madeira-Natternkopf",
    FileName: "3dicons/plants/icon_pride_of_madeira.png",
    Rarity: "Epic",
    RarityValue: 3,
    AttractiveNess: 40,
    Allocation: "BotanicGarden",
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-09-10T09:33:30.000Z"
  },
  {
    GUID: 111108,
    Type: "CultureItem",
    Name: "Lotusblume „Angel Wings“",
    FileName: "3dicons/plants/icon_sacred_lotus.png",
    Rarity: "Epic",
    RarityValue: 3,
    AttractiveNess: 40,
    ItemSet: 193660,
    Allocation: "BotanicGarden",
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-09-10T09:33:30.000Z"
  },
  {
    GUID: 111109,
    Type: "CultureItem",
    Name: "Roter Tigerlotus",
    FileName: "3dicons/plants/icon_tiger_lotus.png",
    Rarity: "Epic",
    RarityValue: 3,
    AttractiveNess: 40,
    ItemSet: 193658,
    Allocation: "BotanicGarden",
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-09-10T09:33:30.000Z"
  },
  {
    GUID: 114672,
    Type: "CultureItem",
    Name: "Stanhopea Insignis",
    FileName: "3dicons/plants/icon_spotted_stanhopea.png",
    Rarity: "Epic",
    RarityValue: 3,
    AttractiveNess: 40,
    Allocation: "BotanicGarden",
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-09-10T09:33:30.000Z"
  },
  {
    GUID: 112728,
    Type: "CultureItem",
    Name: "Banyan-Feige",
    FileName: "3dicons/plants/icon_banyan.png",
    Rarity: "Legendary",
    RarityValue: 4,
    AttractiveNess: 50,
    ItemSet: 193660,
    Allocation: "BotanicGarden",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Faith", Amount: 50}
      ]
    },
    LastChange: "2019-12-10T17:46:12.000Z"
  },
  {
    GUID: 114677,
    Type: "CultureItem",
    Name: "Magische Farnblüte",
    FileName: "3dicons/plants/icon_fern_flower.png",
    Rarity: "Legendary",
    RarityValue: 4,
    AttractiveNess: 50,
    Allocation: "BotanicGarden",
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-09-10T09:33:30.000Z"
  },
  {
    GUID: 112730,
    Type: "CultureItem",
    Name: "Paranussbaum",
    FileName: "3dicons/plants/icon_brazil_nut_tree.png",
    Rarity: "Legendary",
    RarityValue: 4,
    AttractiveNess: 50,
    ItemSet: 193653,
    Allocation: "BotanicGarden",
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-09-10T09:33:30.000Z"
  },
  {
    GUID: 114676,
    Type: "CultureItem",
    Name: "Wildprets Natternkopf",
    FileName: "3dicons/plants/icon_echium_wildpretii.png",
    Rarity: "Legendary",
    RarityValue: 4,
    AttractiveNess: 50,
    Allocation: "BotanicGarden",
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-09-10T09:33:30.000Z"
  },
  {
    GUID: 111117,
    Type: "CultureItem",
    Name: "Ziziphus",
    FileName: "3dicons/plants/icon_jujube.png",
    Rarity: "Legendary",
    RarityValue: 4,
    AttractiveNess: 50,
    ItemSet: 193672,
    Allocation: "BotanicGarden",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Faith", Amount: 50}
      ]
    },
    LastChange: "2019-09-10T09:33:30.000Z"
  },
  {
    GUID: 114678,
    Type: "CultureItem",
    Name: "Heilige Moly",
    FileName: "3dicons/plants/icon_moly.png",
    Rarity: "Legendary",
    RarityValue: 4,
    AttractiveNess: 50,
    Allocation: "BotanicGarden",
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-09-10T09:33:30.000Z"
  },
  {
    GUID: 114675,
    Type: "CultureItem",
    Name: "Titanwurz",
    FileName: "3dicons/plants/icon_titan_arum.png",
    Rarity: "Legendary",
    RarityValue: 4,
    AttractiveNess: 50,
    Allocation: "BotanicGarden",
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-09-10T09:33:30.000Z"
  },
  {
    GUID: 114679,
    Type: "CultureItem",
    Name: "Hades-Affodill",
    FileName: "3dicons/plants/icon_underworld_asphodelus.png",
    Rarity: "Legendary",
    RarityValue: 4,
    AttractiveNess: 50,
    Allocation: "BotanicGarden",
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-09-10T09:33:30.000Z"
  },
  {
    GUID: 114155,
    Type: "CultureItem",
    Name: "Partitur „Anno 1800“",
    FileName: "3dicons/music/icon_music_score_1800.png",
    Rarity: "Rare",
    RarityValue: 2,
    AttractiveNess: 30,
    Allocation: "Pavilion",
    ItemSetUpgrade: [
      {ItemSet: 191116, Attractiveness: 20},
      {ItemSet: 191130, Attractiveness: 20},
      {ItemSet: 191129, Attractiveness: 20},
      {ItemSet: 191124, Attractiveness: 20},
      {ItemSet: 191125, Attractiveness: 20},
      {ItemSet: 193670, Attractiveness: 20},
      {ItemSet: 193776, Attractiveness: 20}
    ],
    ExpeditionAttribute: {
      BaseMorale: 15,
      ExpeditionAttributes: []
    },
    LastChange: "2020-06-02T12:37:16.000Z"
  },
  {
    GUID: 114153,
    Type: "CultureItem",
    Name: "Partitur „Anno 2070“",
    FileName: "3dicons/music/icon_music_score_2070.png",
    Rarity: "Epic",
    RarityValue: 3,
    AttractiveNess: 40,
    Allocation: "Pavilion",
    ItemSetUpgrade: [
      {ItemSet: 191122, Attractiveness: 30},
      {ItemSet: 193401, Attractiveness: 30},
      {ItemSet: 191123, Attractiveness: 30},
      {ItemSet: 193405, Attractiveness: 30},
      {ItemSet: 193655, Attractiveness: 30},
      {ItemSet: 193774, Attractiveness: 30}
    ],
    ExpeditionAttribute: {
      BaseMorale: 15,
      ExpeditionAttributes: []
    },
    LastChange: "2020-06-02T12:37:16.000Z"
  },
  {
    GUID: 114154,
    Type: "CultureItem",
    Name: "Partitur „Anno 2205“",
    FileName: "3dicons/music/icon_music_score_2205.png",
    Rarity: "Epic",
    RarityValue: 3,
    AttractiveNess: 40,
    Allocation: "Pavilion",
    ItemSetUpgrade: [
      {ItemSet: 191115, Attractiveness: 30},
      {ItemSet: 193193, Attractiveness: 30},
      {ItemSet: 193403, Attractiveness: 30},
      {ItemSet: 191131, Attractiveness: 30},
      {ItemSet: 193662, Attractiveness: 30},
      {ItemSet: 191119, Attractiveness: 30},
      {ItemSet: 193773, Attractiveness: 30}
    ],
    ExpeditionAttribute: {
      BaseMorale: 15,
      ExpeditionAttributes: []
    },
    LastChange: "2020-06-02T12:37:16.000Z"
  },
  {
    GUID: 114152,
    Type: "CultureItem",
    Name: "Partitur „Anno 1404“",
    FileName: "3dicons/music/icon_music_score_1404.png",
    Rarity: "Legendary",
    RarityValue: 4,
    AttractiveNess: 50,
    Allocation: "Pavilion",
    ItemSetUpgrade: [
      {ItemSet: 191120, Attractiveness: 50},
      {ItemSet: 191117, Attractiveness: 50},
      {ItemSet: 191128, Attractiveness: 50},
      {ItemSet: 193658, Attractiveness: 50},
      {ItemSet: 193660, Attractiveness: 50},
      {ItemSet: 193672, Attractiveness: 50}
    ],
    ExpeditionAttribute: {
      BaseMorale: 15,
      ExpeditionAttributes: []
    },
    LastChange: "2019-09-10T09:33:30.000Z"
  },
  {
    GUID: 112487,
    Type: "CultureItem",
    Name: "Partitur „Anno 1701“",
    FileName: "3dicons/music/icon_music_score_1701.png",
    Rarity: "Legendary",
    RarityValue: 4,
    AttractiveNess: 50,
    Allocation: "Pavilion",
    ItemSetUpgrade: [
      {ItemSet: 191114, Attractiveness: 50},
      {ItemSet: 191118, Attractiveness: 50},
      {ItemSet: 191127, Attractiveness: 50},
      {ItemSet: 191126, Attractiveness: 50},
      {ItemSet: 193653, Attractiveness: 50},
      {ItemSet: 193665, Attractiveness: 50}
    ],
    ExpeditionAttribute: {
      BaseMorale: 15,
      ExpeditionAttributes: []
    },
    LastChange: "2019-09-10T09:33:30.000Z"
  },
  {
    GUID: 193851,
    Type: "TownhallItem",
    Name: "Schnapps=Heat",
    FileName: "3dicons/icon_heating_center.png",
    Rarity: "Common",
    RarityValue: 0,
    Allocation: "RadiusBuilding",
    EffectTargets: [
      {GUID: 112091},
      {GUID: 112652}
    ],
    InputBenefitModifier: [
      {Product: 1010216}
    ],
    LastChange: "2019-12-10T17:46:12.000Z"
  },
  {
    GUID: 191082,
    Type: "CultureItem",
    Name: "Elfenbeinmöwe",
    FileName: "3dicons/animals/icon_ivory_ygull.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    AttractiveNess: 20,
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: [
        {Attribute: "Navigation", Amount: 25}
      ]
    },
    LastChange: "2019-12-10T17:46:12.000Z"
  },
  {
    GUID: 115469,
    Type: "CultureItem",
    Name: "Polarfuchs",
    FileName: "3dicons/animals/icon_arctic_fox.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    AttractiveNess: 20,
    ItemSet: 191119,
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-12-10T17:46:12.000Z"
  },
  {
    GUID: 191084,
    Type: "CultureItem",
    Name: "Ringelrobbe",
    FileName: "3dicons/animals/icon_sealion.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    AttractiveNess: 20,
    ItemSet: 191119,
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2019-12-10T17:46:12.000Z"
  },
  {
    GUID: 191086,
    Type: "CultureItem",
    Name: "Polarwolf",
    FileName: "3dicons/animals/icon_arctic_wolf.png",
    Rarity: "Rare",
    RarityValue: 2,
    AttractiveNess: 30,
    ItemSet: 193773,
    ExpeditionAttribute: {
      BaseMorale: 15,
      ExpeditionAttributes: [
        {Attribute: "Melee", Amount: 20}
      ]
    },
    LastChange: "2019-12-10T17:46:12.000Z"
  },
  {
    GUID: 191076,
    Type: "CultureItem",
    Name: "Moschusochse",
    FileName: "3dicons/animals/icon_musk_oxen.png",
    Rarity: "Rare",
    RarityValue: 2,
    AttractiveNess: 30,
    ItemSet: 193773,
    ExpeditionAttribute: {
      BaseMorale: 15,
      ExpeditionAttributes: []
    },
    LastChange: "2019-12-10T17:46:12.000Z"
  },
  {
    GUID: 191075,
    Type: "CultureItem",
    Name: "Rentier",
    FileName: "3dicons/animals/icon_reindeer.png",
    Rarity: "Rare",
    RarityValue: 2,
    AttractiveNess: 30,
    ItemSet: 193773,
    ExpeditionAttribute: {
      BaseMorale: 15,
      ExpeditionAttributes: []
    },
    LastChange: "2019-12-10T17:46:12.000Z"
  },
  {
    GUID: 190448,
    Type: "CultureItem",
    Name: "Polarbär",
    FileName: "3dicons/animals/icon_polar_bear.png",
    Rarity: "Epic",
    RarityValue: 3,
    AttractiveNess: 40,
    ItemSet: 191119,
    ExpeditionAttribute: {
      BaseMorale: 20,
      ExpeditionAttributes: [
        {Attribute: "Melee", Amount: 30}
      ]
    },
    LastChange: "2019-12-10T17:46:12.000Z"
  },
  {
    GUID: 116040,
    Type: "CultureItem",
    Name: "Walross",
    FileName: "3dicons/animals/icon_walrus.png",
    Rarity: "Epic",
    RarityValue: 3,
    AttractiveNess: 40,
    ItemSet: 191119,
    ExpeditionAttribute: {
      BaseMorale: 20,
      ExpeditionAttributes: [
        {Attribute: "Navigation", Amount: 25}
      ]
    },
    LastChange: "2019-12-10T17:46:12.000Z"
  },
  {
    GUID: 115470,
    Type: "CultureItem",
    Name: "Riesenalk",
    FileName: "3dicons/animals/icon_great_auk.png",
    Rarity: "Legendary",
    RarityValue: 4,
    AttractiveNess: 50,
    ItemSet: 191119,
    ExpeditionAttribute: {
      BaseMorale: 25,
      ExpeditionAttributes: []
    },
    LastChange: "2019-12-10T17:46:12.000Z"
  },
  {
    GUID: 115273,
    Type: "CultureItem",
    Name: "Narwal",
    FileName: "3dicons/animals/icon_narwhale.png",
    Rarity: "Legendary",
    RarityValue: 4,
    AttractiveNess: 50,
    ItemSet: 191119,
    ExpeditionAttribute: {
      BaseMorale: 25,
      ExpeditionAttributes: []
    },
    LastChange: "2019-12-10T17:46:12.000Z"
  },
  {
    GUID: 115471,
    Type: "CultureItem",
    Name: "Gemeißelter Steinbär",
    FileName: "3dicons/museum/icon_flying_bear.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    AttractiveNess: 20,
    ItemSet: 193774,
    Allocation: "Museum",
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: [
        {Attribute: "Diplomacy", Amount: 10}
      ]
    },
    LastChange: "2019-12-10T17:46:12.000Z"
  },
  {
    GUID: 114796,
    Type: "CultureItem",
    Name: "Inunnguaq Inuksuk",
    FileName: "3dicons/museum/icon_inukshuk.png",
    Rarity: "Rare",
    RarityValue: 2,
    AttractiveNess: 30,
    ItemSet: 193774,
    Allocation: "Museum",
    ExpeditionAttribute: {
      BaseMorale: 15,
      ExpeditionAttributes: [
        {Attribute: "Diplomacy", Amount: 10}
      ]
    },
    LastChange: "2019-12-10T17:46:12.000Z"
  },
  {
    GUID: 114799,
    Type: "CultureItem",
    Name: "Pirujaqarvik Inuksuk",
    FileName: "3dicons/museum/icon_pirujaqarvik.png",
    Rarity: "Rare",
    RarityValue: 2,
    AttractiveNess: 30,
    ItemSet: 193774,
    Allocation: "Museum",
    ExpeditionAttribute: {
      BaseMorale: 15,
      ExpeditionAttributes: [
        {Attribute: "Diplomacy", Amount: 10}
      ]
    },
    LastChange: "2019-12-10T17:46:12.000Z"
  },
  {
    GUID: 115472,
    Type: "CultureItem",
    Name: "Spielzeug-Qamutiik",
    FileName: "3dicons/museum/icon_qamutiik_toy.png",
    Rarity: "Rare",
    RarityValue: 2,
    AttractiveNess: 30,
    ItemSet: 193774,
    Allocation: "Museum",
    ExpeditionAttribute: {
      BaseMorale: 15,
      ExpeditionAttributes: []
    },
    LastChange: "2019-12-10T17:46:12.000Z"
  },
  {
    GUID: 114637,
    Type: "CultureItem",
    Name: "Sammlung von Relikten der verschollenen Expedition",
    FileName: "3dicons/icon_security.png",
    Rarity: "Rare",
    RarityValue: 2,
    AttractiveNess: 30,
    ItemSet: 193776,
    Allocation: "Museum",
    ExpeditionAttribute: {
      BaseMorale: 15,
      ExpeditionAttributes: []
    },
    LastChange: "2019-12-10T17:46:12.000Z"
  },
  {
    GUID: 114798,
    Type: "CultureItem",
    Name: "Igluit",
    FileName: "3dicons/museum/icon_igluit.png",
    Rarity: "Epic",
    RarityValue: 3,
    AttractiveNess: 40,
    ItemSet: 193774,
    Allocation: "Museum",
    ExpeditionAttribute: {
      BaseMorale: 20,
      ExpeditionAttributes: []
    },
    LastChange: "2019-12-10T17:46:12.000Z"
  },
  {
    GUID: 115473,
    Type: "CultureItem",
    Name: "Uummannaq- Mumie",
    FileName: "3dicons/museum/icon_qilakitsoq_mummy.png",
    Rarity: "Epic",
    RarityValue: 3,
    AttractiveNess: 40,
    ItemSet: 193774,
    Allocation: "Museum",
    ExpeditionAttribute: {
      BaseMorale: 20,
      ExpeditionAttributes: [
        {Attribute: "Faith", Amount: 30}
      ]
    },
    LastChange: "2019-12-10T17:46:12.000Z"
  },
  {
    GUID: 115474,
    Type: "CultureItem",
    Name: "Wolfswelpen- Mumie",
    FileName: "3dicons/museum/icon_wolf_mummy.png",
    Rarity: "Epic",
    RarityValue: 3,
    AttractiveNess: 40,
    ItemSet: 193776,
    Allocation: "Museum",
    ExpeditionAttribute: {
      BaseMorale: 20,
      ExpeditionAttributes: [
        {Attribute: "Faith", Amount: 30}
      ]
    },
    LastChange: "2019-12-10T17:46:12.000Z"
  },
  {
    GUID: 114794,
    Type: "CultureItem",
    Name: "Eingefrorenes Wollhaarmammut",
    FileName: "3dicons/museum/icon_museum_mammoth.png",
    Rarity: "Legendary",
    RarityValue: 4,
    AttractiveNess: 50,
    ItemSet: 193776,
    Allocation: "Museum",
    ExpeditionAttribute: {
      BaseMorale: 25,
      ExpeditionAttributes: [
        {Attribute: "Faith", Amount: 40}
      ]
    },
    LastChange: "2019-12-10T17:46:12.000Z"
  },
  {
    GUID: 114795,
    Type: "CultureItem",
    Name: "Nachbildung der HMS Hades",
    FileName: "3dicons/museum/icon_hms_terror.png",
    Rarity: "Legendary",
    RarityValue: 4,
    AttractiveNess: 50,
    Allocation: "Museum",
    ExpeditionAttribute: {
      BaseMorale: 25,
      ExpeditionAttributes: []
    },
    LastChange: "2019-12-10T17:46:12.000Z"
  },
  {
    GUID: 116041,
    Type: "GuildhouseItem",
    Name: "Treibholz- Walwächter",
    FileName: "3dicons/machine_items/icon_fishing_boat_1.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    Productivity: 25,
    MaintenanceUpgrade: 25,
    Allocation: "Lodge",
    EffectTargets: [
      {GUID: 112666}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Hunting", Amount: 15}
      ]
    },
    LastChange: "2019-12-10T17:46:12.000Z"
  },
  {
    GUID: 116042,
    Type: "GuildhouseItem",
    Name: "Qajaq",
    FileName: "3dicons/machine_items/icon_fishing_boat_2.png",
    Rarity: "Rare",
    RarityValue: 2,
    Productivity: 35,
    Allocation: "Lodge",
    EffectTargets: [
      {GUID: 112666}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Hunting", Amount: 25}
      ]
    },
    LastChange: "2019-12-10T17:46:12.000Z"
  },
  {
    GUID: 116043,
    Type: "GuildhouseItem",
    Name: "Umiak",
    FileName: "3dicons/machine_items/icon_fishing_boat_3.png",
    Rarity: "Epic",
    RarityValue: 3,
    Productivity: 40,
    Workforce: -50,
    Allocation: "Lodge",
    EffectTargets: [
      {GUID: 112666}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Hunting", Amount: 35}
      ]
    },
    LastChange: "2019-12-10T17:46:12.000Z"
  },
  {
    GUID: 116069,
    Type: "GuildhouseItem",
    Name: "Nuyakpak",
    FileName: "3dicons/machine_items/icon_fishing_tool_1.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    MaintenanceUpgrade: -50,
    Allocation: "Lodge",
    EffectTargets: [
      {GUID: 112674}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Hunting", Amount: 15}
      ]
    },
    LastChange: "2019-12-10T17:46:12.000Z"
  },
  {
    GUID: 116070,
    Type: "GuildhouseItem",
    Name: "Unaaq",
    FileName: "3dicons/machine_items/icon_fishing_tool_2.png",
    Rarity: "Rare",
    RarityValue: 2,
    Productivity: 35,
    Allocation: "Lodge",
    EffectTargets: [
      {GUID: 112674}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Hunting", Amount: 25}
      ]
    },
    LastChange: "2019-12-10T17:46:12.000Z"
  },
  {
    GUID: 116071,
    Type: "GuildhouseItem",
    Name: "Sakku",
    FileName: "3dicons/machine_items/icon_fishing_tool_3.png",
    Rarity: "Epic",
    RarityValue: 3,
    Productivity: 40,
    Workforce: -50,
    Allocation: "Lodge",
    EffectTargets: [
      {GUID: 112674}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Hunting", Amount: 35}
      ]
    },
    LastChange: "2019-12-10T17:46:12.000Z"
  },
  {
    GUID: 116078,
    Type: "GuildhouseItem",
    Name: "Pititsi",
    FileName: "3dicons/machine_items/icon_bow_1.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    Productivity: 25,
    MaintenanceUpgrade: 25,
    Allocation: "Lodge",
    EffectTargets: [
      {GUID: 112667},
      {GUID: 112673}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Hunting", Amount: 15}
      ]
    },
    LastChange: "2019-12-10T17:46:12.000Z"
  },
  {
    GUID: 116079,
    Type: "GuildhouseItem",
    Name: "Verstärkter Bogen",
    FileName: "3dicons/machine_items/icon_bow_2.png",
    Rarity: "Rare",
    RarityValue: 2,
    Productivity: 35,
    Allocation: "Lodge",
    EffectTargets: [
      {GUID: 112667},
      {GUID: 112673}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Hunting", Amount: 25}
      ]
    },
    LastChange: "2019-12-10T17:46:12.000Z"
  },
  {
    GUID: 116080,
    Type: "GuildhouseItem",
    Name: "Bogen der Lnu",
    FileName: "3dicons/machine_items/icon_bow_3.png",
    Rarity: "Epic",
    RarityValue: 3,
    NeededArea: -15,
    MaintenanceUpgrade: -100,
    Allocation: "Lodge",
    EffectTargets: [
      {GUID: 112667},
      {GUID: 112673}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Hunting", Amount: 35}
      ]
    },
    LastChange: "2019-12-10T17:46:12.000Z"
  },
  {
    GUID: 116081,
    Type: "GuildhouseItem",
    Name: "Lehm-Kudlik",
    FileName: "3dicons/machine_items/icon_cooking_stove_1.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    Workforce: -30,
    MaintenanceUpgrade: 25,
    Allocation: "Lodge",
    EffectTargets: [
      {GUID: 112668}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Crafting", Amount: 15}
      ]
    },
    LastChange: "2019-12-10T17:46:12.000Z"
  },
  {
    GUID: 116082,
    Type: "GuildhouseItem",
    Name: "Speckstein-Kudlik",
    FileName: "3dicons/machine_items/icon_cooking_stove_2.png",
    Rarity: "Rare",
    RarityValue: 2,
    Productivity: 35,
    Allocation: "Lodge",
    EffectTargets: [
      {GUID: 112668}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Crafting", Amount: 25}
      ]
    },
    LastChange: "2019-12-10T17:46:12.000Z"
  },
  {
    GUID: 116083,
    Type: "GuildhouseItem",
    Name: "Elfenbein-Kudlik",
    FileName: "3dicons/machine_items/icon_cookng_stove_3.png",
    Rarity: "Epic",
    RarityValue: 3,
    Productivity: 40,
    MaintenanceUpgrade: -35,
    Allocation: "Lodge",
    EffectTargets: [
      {GUID: 112668}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Crafting", Amount: 35}
      ]
    },
    LastChange: "2019-12-10T17:46:12.000Z"
  },
  {
    GUID: 116087,
    Type: "GuildhouseItem",
    Name: "Tierhaut-Schaber",
    FileName: "3dicons/machine_items/icon_leather_tool_1.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    Productivity: 25,
    MaintenanceUpgrade: 25,
    Allocation: "Lodge",
    EffectTargets: [
      {GUID: 112672},
      {GUID: 112675}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Crafting", Amount: 15}
      ]
    },
    LastChange: "2019-12-10T17:46:12.000Z"
  },
  {
    GUID: 116088,
    Type: "GuildhouseItem",
    Name: "Kaputaq-Ahle",
    FileName: "3dicons/machine_items/icon_leather_tool_2.png",
    Rarity: "Rare",
    RarityValue: 2,
    Workforce: -40,
    Allocation: "Lodge",
    EffectTargets: [
      {GUID: 112672},
      {GUID: 112675}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Crafting", Amount: 25}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 116089,
    Type: "GuildhouseItem",
    Name: "Inuinnaq-Tasche",
    FileName: "3dicons/machine_items/icon_leather_tool_3.png",
    Rarity: "Epic",
    RarityValue: 3,
    Productivity: 40,
    MaintenanceUpgrade: -35,
    Allocation: "Lodge",
    EffectTargets: [
      {GUID: 112672},
      {GUID: 112675}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Crafting", Amount: 35}
      ]
    },
    LastChange: "2019-12-10T17:46:12.000Z"
  },
  {
    GUID: 116096,
    Type: "GuildhouseItem",
    Name: "Treibholz-Iggaak",
    FileName: "3dicons/machine_items/icon_snow_goggle_1.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    Productivity: 25,
    MaintenanceUpgrade: 25,
    Allocation: "Lodge",
    EffectTargets: [
      {GUID: 112676},
      {GUID: 112682}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Hunting", Amount: 15}
      ]
    },
    LastChange: "2019-12-10T17:46:12.000Z"
  },
  {
    GUID: 116097,
    Type: "GuildhouseItem",
    Name: "Geweih-Iggaak",
    FileName: "3dicons/machine_items/icon_snow_goggle_2.png",
    Rarity: "Rare",
    RarityValue: 2,
    MaintenanceUpgrade: -25,
    Allocation: "Lodge",
    EffectTargets: [
      {GUID: 112676},
      {GUID: 112682}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Hunting", Amount: 25}
      ]
    },
    LastChange: "2019-12-10T17:46:12.000Z"
  },
  {
    GUID: 116098,
    Type: "GuildhouseItem",
    Name: "Elfenbein-Iggaak",
    FileName: "3dicons/machine_items/icon_snow_goggle_3.png",
    Rarity: "Epic",
    RarityValue: 3,
    Productivity: 60,
    ModuleLimit: 35,
    Allocation: "Lodge",
    EffectTargets: [
      {GUID: 112676},
      {GUID: 112682}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Hunting", Amount: 35}
      ]
    },
    LastChange: "2019-12-10T17:46:12.000Z"
  },
  {
    GUID: 116099,
    Type: "GuildhouseItem",
    Name: "Ulu",
    FileName: "3dicons/machine_items/icon_axe_1.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    MaintenanceUpgrade: -15,
    Allocation: "Lodge",
    EffectTargets: [
      {GUID: 114703},
      {GUID: 114704},
      {GUID: 112681},
      {GUID: 112680}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Melee", Amount: 15}
      ]
    },
    LastChange: "2019-12-10T17:46:12.000Z"
  },
  {
    GUID: 116100,
    Type: "GuildhouseItem",
    Name: "Hölzerne Dechsel",
    FileName: "3dicons/machine_items/icon_axe_2.png",
    Rarity: "Rare",
    RarityValue: 2,
    Productivity: 35,
    Allocation: "Lodge",
    EffectTargets: [
      {GUID: 114703},
      {GUID: 114704},
      {GUID: 112681},
      {GUID: 112680}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Melee", Amount: 25}
      ]
    },
    LastChange: "2019-12-10T17:46:12.000Z"
  },
  {
    GUID: 116101,
    Type: "GuildhouseItem",
    Name: "Knöcherne Dechsel",
    FileName: "3dicons/machine_items/icon_axe_3.png",
    Rarity: "Epic",
    RarityValue: 3,
    Productivity: 40,
    Workforce: -50,
    Allocation: "Lodge",
    EffectTargets: [
      {GUID: 114703},
      {GUID: 114704},
      {GUID: 112681},
      {GUID: 112680}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Melee", Amount: 35}
      ]
    },
    LastChange: "2019-12-10T17:46:12.000Z"
  },
  {
    GUID: 116174,
    Type: "VehicleItem",
    Name: "Erfreulich flinker Flaschenzug",
    FileName: "3dicons/machine_items/icon_pulleys.png",
    Rarity: "Legendary",
    RarityValue: 4,
    ForwardSpeedUpgrade: 20,
    LoadingSpeedUpgrade: 100,
    Allocation: "AirShip",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Melee", Amount: 25}
      ]
    },
    LastChange: "2019-12-10T17:46:12.000Z"
  },
  {
    GUID: 116130,
    Type: "GuildhouseItem",
    Name: "Inuit-Näherin",
    FileName: "3dicons/specialists/systemic/icon_inuit_specialist_906_a.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    Workforce: -30,
    MaintenanceUpgrade: -20,
    Allocation: "Lodge",
    EffectTargets: [
      {GUID: 112672},
      {GUID: 112675}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Crafting", Amount: 20}
      ]
    },
    LastChange: "2019-12-10T17:46:12.000Z"
  },
  {
    GUID: 116132,
    Type: "GuildhouseItem",
    Name: "Geübter Inuit-Näher",
    FileName: "3dicons/specialists/systemic/icon_inuit_specialist_1000.png",
    Rarity: "Rare",
    RarityValue: 2,
    Productivity: 20,
    Allocation: "Lodge",
    EffectTargets: [
      {GUID: 112672},
      {GUID: 112675}
    ],
    AdditionalOutput: [
      {Product: 112696, Cycle: 4, Amount: 1}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Medicine", Amount: 30},
        {Attribute: "Diplomacy", Amount: 10}
      ]
    },
    LastChange: "2019-12-10T17:46:12.000Z"
  },
  {
    GUID: 116133,
    Type: "GuildhouseItem",
    Name: "Arnarunn, die Nahtlose",
    FileName: "3dicons/specialists/systemic/icon_inuit_specialist_905.png",
    Rarity: "Epic",
    RarityValue: 3,
    IncidentArcticIllnessIncreaseUpgrade: -4,
    Allocation: "Lodge",
    EffectTargets: [
      {GUID: 112091},
      {GUID: 112652}
    ],
    GoodConsumptionUpgrade: [
      {ProvidedNeed: 112701, AmountInPercent: -30}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Crafting", Amount: 40},
        {Attribute: "Faith", Amount: 20}
      ]
    },
    LastChange: "2019-12-10T17:46:12.000Z"
  },
  {
    GUID: 116142,
    Type: "GuildhouseItem",
    Name: "Hundezüchter",
    FileName: "3dicons/specialists/systemic/icon_inuit_specialist_1006_b.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    Productivity: 20,
    Allocation: "Lodge",
    EffectTargets: [
      {GUID: 112676},
      {GUID: 112682}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Crafting", Amount: 20}
      ]
    },
    LastChange: "2019-12-10T17:46:12.000Z"
  },
  {
    GUID: 116143,
    Type: "GuildhouseItem",
    Name: "Cleverer Hundezüchter",
    FileName: "3dicons/specialists/systemic/icon_inuit_specialist_1006_c.png",
    Rarity: "Rare",
    RarityValue: 2,
    Workforce: -50,
    MaintenanceUpgrade: -15,
    Allocation: "Lodge",
    EffectTargets: [
      {GUID: 112676},
      {GUID: 112682}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Medicine", Amount: 30},
        {Attribute: "Diplomacy", Amount: 10}
      ]
    },
    LastChange: "2019-12-10T17:46:12.000Z"
  },
  {
    GUID: 116144,
    Type: "GuildhouseItem",
    Name: "Taliriktug, die Huskyflüsterin",
    FileName: "3dicons/specialists/systemic/icon_inuit_specialist_901b.png",
    Rarity: "Epic",
    RarityValue: 3,
    Productivity: 40,
    Allocation: "Lodge",
    EffectTargets: [
      {GUID: 112676},
      {GUID: 112682}
    ],
    AdditionalOutput: [
      {Product: 112694, Cycle: 6, Amount: 1}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Crafting", Amount: 40},
        {Attribute: "Faith", Amount: 20}
      ]
    },
    LastChange: "2019-12-10T17:46:12.000Z"
  },
  {
    GUID: 116146,
    Type: "GuildhouseItem",
    Name: "Inuit-Jägerin",
    FileName: "3dicons/specialists/systemic/icon_inuit_specialist_903.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    Workforce: -25,
    Allocation: "Lodge",
    EffectTargets: [
      {GUID: 112666},
      {GUID: 112674},
      {GUID: 112667},
      {GUID: 112673}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Crafting", Amount: 20}
      ]
    },
    LastChange: "2019-12-10T17:46:12.000Z"
  },
  {
    GUID: 116149,
    Type: "GuildhouseItem",
    Name: "Geschickte Inuit-Jägerin",
    FileName: "3dicons/specialists/systemic/icon_inuit_specialist_902b.png",
    Rarity: "Rare",
    RarityValue: 2,
    Productivity: 30,
    MaintenanceUpgrade: -40,
    Allocation: "Lodge",
    EffectTargets: [
      {GUID: 112666},
      {GUID: 112674},
      {GUID: 112667},
      {GUID: 112673}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Medicine", Amount: 30},
        {Attribute: "Diplomacy", Amount: 10}
      ]
    },
    LastChange: "2019-12-10T17:46:12.000Z"
  },
  {
    GUID: 116152,
    Type: "GuildhouseItem",
    Name: "Toklo, der Fallensteller",
    FileName: "3dicons/specialists/systemic/icon_inuit_specialist_1005_b.png",
    Rarity: "Epic",
    RarityValue: 3,
    Productivity: 40,
    Allocation: "Lodge",
    EffectTargets: [
      {GUID: 112666},
      {GUID: 112674},
      {GUID: 112667},
      {GUID: 112673}
    ],
    AdditionalOutput: [
      {Product: 112697, Cycle: 7, Amount: 1}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Crafting", Amount: 40},
        {Attribute: "Faith", Amount: 20}
      ]
    },
    LastChange: "2019-12-10T17:46:12.000Z"
  },
  {
    GUID: 116147,
    Type: "GuildhouseItem",
    Name: "Schlittenbauer",
    FileName: "3dicons/specialists/systemic/icon_inuit_specialist_1002_a.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    MaintenanceUpgrade: -30,
    Allocation: "Lodge",
    EffectTargets: [
      {GUID: 114703},
      {GUID: 112681},
      {GUID: 112680}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Crafting", Amount: 20}
      ]
    },
    LastChange: "2019-12-10T17:46:12.000Z"
  },
  {
    GUID: 116150,
    Type: "GuildhouseItem",
    Name: "Scharfsinniger Schlittenbauer",
    FileName: "3dicons/specialists/systemic/icon_inuit_specialist_1001_a.png",
    Rarity: "Rare",
    RarityValue: 2,
    Productivity: 25,
    Workforce: -30,
    Allocation: "Lodge",
    EffectTargets: [
      {GUID: 114703},
      {GUID: 112681},
      {GUID: 112680}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Medicine", Amount: 30},
        {Attribute: "Diplomacy", Amount: 10}
      ]
    },
    LastChange: "2019-12-10T17:46:12.000Z"
  },
  {
    GUID: 116153,
    Type: "GuildhouseItem",
    Name: "Naaqtuuq, die Schlittenbauerin",
    FileName: "3dicons/specialists/systemic/icon_inuit_specialist_904.png",
    Rarity: "Epic",
    RarityValue: 3,
    Productivity: 40,
    Allocation: "Lodge",
    EffectTargets: [
      {GUID: 114703},
      {GUID: 112681},
      {GUID: 112680}
    ],
    AdditionalOutput: [
      {Product: 1010196, Cycle: 2, Amount: 1}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Crafting", Amount: 40},
        {Attribute: "Faith", Amount: 20}
      ]
    },
    LastChange: "2019-12-10T17:46:12.000Z"
  },
  {
    GUID: 116148,
    Type: "GuildhouseItem",
    Name: "Freiluftkoch",
    FileName: "3dicons/specialists/systemic/icon_inuit_specialist_1003_b.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    Workforce: -40,
    Allocation: "Lodge",
    EffectTargets: [
      {GUID: 112668}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Crafting", Amount: 20}
      ]
    },
    LastChange: "2019-12-10T17:46:12.000Z"
  },
  {
    GUID: 116151,
    Type: "GuildhouseItem",
    Name: "Robuster Freiluftkoch",
    FileName: "3dicons/specialists/systemic/icon_inuit_specialist_1007.png",
    Rarity: "Rare",
    RarityValue: 2,
    Allocation: "Lodge",
    EffectTargets: [
      {GUID: 112091},
      {GUID: 112652}
    ],
    GoodConsumptionUpgrade: [
      {ProvidedNeed: 112705, AmountInPercent: -30}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Medicine", Amount: 30},
        {Attribute: "Diplomacy", Amount: 10}
      ]
    },
    LastChange: "2019-12-10T17:46:12.000Z"
  },
  {
    GUID: 116154,
    Type: "GuildhouseItem",
    Name: "Sandro, der Küchenchef der Natur",
    FileName: "3dicons/specialists/systemic/icon_inuit_specialist_1004.png",
    Rarity: "Epic",
    RarityValue: 3,
    Workforce: -50,
    Allocation: "Lodge",
    EffectTargets: [
      {GUID: 112668}
    ],
    AdditionalOutput: [
      {Product: 112702, Cycle: 7, Amount: 1}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Crafting", Amount: 40},
        {Attribute: "Faith", Amount: 20}
      ]
    },
    LastChange: "2019-12-10T17:46:12.000Z"
  },
  {
    GUID: 116158,
    Type: "GuildhouseItem",
    Name: "Heizung",
    FileName: "3dicons/machine_items/icon_radiator.png",
    Rarity: "Rare",
    RarityValue: 2,
    WorkforceModifierInPercent: 15,
    IncidentArcticIllnessIncreaseUpgrade: -3,
    Allocation: "Lodge",
    EffectTargets: [
      {GUID: 112091},
      {GUID: 112652}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Medicine", Amount: 15}
      ]
    },
    CraftingCosts: [
      {Product: 115980, Amount: 10},
      {Product: 1010204, Amount: 10}
    ],
    LastChange: "2019-12-10T17:46:12.000Z"
  },
  {
    GUID: 116159,
    Type: "GuildhouseItem",
    Name: "Aspirin-Maschine",
    FileName: "3dicons/machine_items/icon_aspirin_machine.png",
    Rarity: "Rare",
    RarityValue: 2,
    ResolverUnitCountUpgrade: 1,
    Allocation: "Lodge",
    EffectTargets: [
      {GUID: 112669}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Medicine", Amount: 35}
      ]
    },
    CraftingCosts: [
      {Product: 115980, Amount: 10},
      {Product: 112699, Amount: 10}
    ],
    LastChange: "2019-12-10T17:46:12.000Z"
  },
  {
    GUID: 116160,
    Type: "GuildhouseItem",
    Name: "Spieluhr",
    FileName: "3dicons/machine_items/icon_music_box.png",
    Rarity: "Rare",
    RarityValue: 2,
    Productivity: 20,
    Allocation: "Lodge",
    EffectTargets: [
      {GUID: 193770}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Diplomacy", Amount: 25}
      ]
    },
    CraftingCosts: [
      {Product: 115980, Amount: 10},
      {Product: 1010196, Amount: 10}
    ],
    LastChange: "2019-12-10T17:46:12.000Z"
  },
  {
    GUID: 116161,
    Type: "GuildhouseItem",
    Name: "Freiluftgrill",
    FileName: "3dicons/machine_items/icon_grill.png",
    Rarity: "Epic",
    RarityValue: 3,
    IncidentArcticIllnessIncreaseUpgrade: -4,
    Allocation: "Lodge",
    EffectTargets: [
      {GUID: 112091},
      {GUID: 112652}
    ],
    GoodConsumptionUpgrade: [
      {ProvidedNeed: 112705, AmountInPercent: -30}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Crafting", Amount: 10}
      ]
    },
    CraftingCosts: [
      {Product: 115980, Amount: 25},
      {Product: 1010226, Amount: 10},
      {Product: 112694, Amount: 5}
    ],
    LastChange: "2019-12-10T17:46:12.000Z"
  },
  {
    GUID: 116162,
    Type: "GuildhouseItem",
    Name: "Kerzenform aus Kupfer",
    FileName: "3dicons/machine_items/icon_lamp_maker.png",
    Rarity: "Epic",
    RarityValue: 3,
    Productivity: 35,
    Allocation: "Lodge",
    EffectTargets: [
      {GUID: 112679}
    ],
    ReplaceInputs: [
      {OldInput: 1010204, NewInput: 1010230}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Crafting", Amount: 35}
      ]
    },
    CraftingCosts: [
      {Product: 115980, Amount: 25},
      {Product: 112699, Amount: 10},
      {Product: 1010204, Amount: 15}
    ],
    LastChange: "2019-12-10T17:46:12.000Z"
  },
  {
    GUID: 116163,
    Type: "GuildhouseItem",
    Name: "Knisternde Batterie Nr. 2205",
    FileName: "3dicons/machine_items/icon_electric_battery.png",
    Rarity: "Epic",
    RarityValue: 3,
    Allocation: "Lodge",
    EffectTargets: [
      {GUID: 114751}
    ],
    ReplaceInputs: [
      {OldInput: 1010226, NewInput: 120008}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Crafting", Amount: 35}
      ]
    },
    CraftingCosts: [
      {Product: 115980, Amount: 25},
      {Product: 1010226, Amount: 30}
    ],
    LastChange: "2019-12-10T17:46:12.000Z"
  },
  {
    GUID: 116164,
    Type: "GuildhouseItem",
    Name: "Gløgg-Spender",
    FileName: "3dicons/machine_items/icon_berries_press.png",
    Rarity: "Legendary",
    RarityValue: 4,
    Productivity: 50,
    Allocation: "Lodge",
    EffectTargets: [
      {GUID: 114703},
      {GUID: 114705}
    ],
    AdditionalOutput: [
      {Product: 1010216, Cycle: 5, Amount: 1}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Melee", Amount: 25}
      ]
    },
    CraftingCosts: [
      {Product: 115980, Amount: 50},
      {Product: 1010216, Amount: 25},
      {Product: 120014, Amount: 5},
      {Product: 1010198, Amount: 5}
    ],
    LastChange: "2019-12-10T17:46:12.000Z"
  },
  {
    GUID: 116165,
    Type: "GuildhouseItem",
    Name: "Die Konservendose für die Handtasche",
    FileName: "3dicons/machine_items/icon_canning_machine.png",
    Rarity: "Legendary",
    RarityValue: 4,
    Workforce: -50,
    Allocation: "Lodge",
    EffectTargets: [
      {GUID: 112668}
    ],
    AdditionalOutput: [
      {Product: 1010217, Cycle: 5, Amount: 1}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Crafting", Amount: 25}
      ]
    },
    CraftingCosts: [
      {Product: 115980, Amount: 50},
      {Product: 1010217, Amount: 20},
      {Product: 112694, Amount: 10},
      {Product: 112699, Amount: 5}
    ],
    LastChange: "2019-12-10T17:46:12.000Z"
  },
  {
    GUID: 116166,
    Type: "GuildhouseItem",
    Name: "Beheizte Termojacke mit extra Taschen",
    FileName: "3dicons/machine_items/icon_heated_jacket.png",
    Rarity: "Legendary",
    RarityValue: 4,
    IncidentArcticIllnessIncreaseUpgrade: -5,
    Allocation: "Lodge",
    EffectTargets: [
      {GUID: 112652}
    ],
    InputBenefitModifier: [
      {Product: 112700, AdditionalMoney: 8}
    ],
    GoodConsumptionUpgrade: [
      {ProvidedNeed: 112700, AmountInPercent: -30}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Medicine", Amount: 25}
      ]
    },
    CraftingCosts: [
      {Product: 115980, Amount: 50},
      {Product: 1010232, Amount: 10},
      {Product: 1010227, Amount: 5}
    ],
    LastChange: "2019-12-10T17:46:12.000Z"
  },
  {
    GUID: 116167,
    Type: "GuildhouseItem",
    Name: "Unverwüstliche Gaspumpe",
    FileName: "3dicons/machine_items/icon_gas_extractor.png",
    Rarity: "Legendary",
    RarityValue: 4,
    Productivity: 40,
    Allocation: "Lodge",
    EffectTargets: [
      {GUID: 112690}
    ],
    AdditionalOutput: [
      {Product: 1010229, Cycle: 2, Amount: 1},
      {Product: 1010230, Cycle: 2, Amount: 1}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Crafting", Amount: 25}
      ]
    },
    CraftingCosts: [
      {Product: 115980, Amount: 50},
      {Product: 112706, Amount: 20},
      {Product: 1010219, Amount: 10},
      {Product: 1010255, Amount: 5}
    ],
    LastChange: "2019-12-10T17:46:12.000Z"
  },
  {
    GUID: 116169,
    Type: "GuildhouseItem",
    Name: "Nates geliebter Wasserkessel",
    FileName: "3dicons/machine_items/icon_kettle.png",
    Rarity: "Legendary",
    RarityValue: 4,
    IncidentArcticIllnessIncreaseUpgrade: -5,
    Allocation: "Lodge",
    EffectTargets: [
      {GUID: 112652}
    ],
    InputBenefitModifier: [
      {Product: 120032, AdditionalMoney: 8}
    ],
    GoodConsumptionUpgrade: [
      {ProvidedNeed: 120032, AmountInPercent: -30}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Crafting", Amount: 15}
      ]
    },
    CraftingCosts: [
      {Product: 115980, Amount: 50},
      {Product: 1010226, Amount: 10},
      {Product: 120031, Amount: 15}
    ],
    LastChange: "2019-12-10T17:46:12.000Z"
  },
  {
    GUID: 116173,
    Type: "VehicleItem",
    Name: "Fjordbuster V6 Antriebsvorrichtung",
    FileName: "3dicons/machine_items/icon_fjordbuster.png",
    Rarity: "Epic",
    RarityValue: 3,
    ForwardSpeedUpgrade: 15,
    IgnoreWeightFactorUpgrade: 100,
    Allocation: "AirShip",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Crafting", Amount: 15}
      ]
    },
    CraftingCosts: [
      {Product: 115980, Amount: 25},
      {Product: 1010219, Amount: 15},
      {Product: 1010255, Amount: 10},
      {Product: 1010200, Amount: 10}
    ],
    LastChange: "2019-12-10T17:46:12.000Z"
  },
  {
    GUID: 116175,
    Type: "VehicleItem",
    Name: "Erste Briefmarke der Königlichen Luftschifffahrt",
    FileName: "3dicons/machine_items/icon_royal_stamp_machine.png",
    Rarity: "Epic",
    RarityValue: 3,
    MaintainanceUpgradeVehicle: -25,
    LoadingSpeedUpgrade: 50,
    Allocation: "AirShip",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Crafting", Amount: 25}
      ]
    },
    CraftingCosts: [
      {Product: 115980, Amount: 25},
      {Product: 1010198, Amount: 10},
      {Product: 1010204, Amount: 5},
      {Product: 1010196, Amount: 5}
    ],
    LastChange: "2019-12-10T17:46:12.000Z"
  },
  {
    GUID: 117302,
    Type: "VehicleItem",
    Name: "Sport-Gondel",
    FileName: "3dicons/machine_items/icon_sports_gondola.png",
    Rarity: "Epic",
    RarityValue: 3,
    ForwardSpeedUpgrade: 15,
    MaintainanceUpgradeVehicle: -25,
    Allocation: "AirShip",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Navigation", Amount: 10}
      ]
    },
    CraftingCosts: [
      {Product: 115980, Amount: 25},
      {Product: 1010204, Amount: 15},
      {Product: 120008, Amount: 10},
      {Product: 1010241, Amount: 5}
    ],
    LastChange: "2019-12-10T17:46:12.000Z"
  },
  {
    GUID: 117303,
    Type: "VehicleItem",
    Name: "Luftschiff-Hebewerk",
    FileName: "3dicons/machine_items/icon_airship_hoist.png",
    Rarity: "Epic",
    RarityValue: 3,
    IgnoreWeightFactorUpgrade: 100,
    LoadingSpeedUpgrade: 50,
    Allocation: "AirShip",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Navigation", Amount: 15}
      ]
    },
    CraftingCosts: [
      {Product: 115980, Amount: 25},
      {Product: 1010219, Amount: 10},
      {Product: 1010224, Amount: 5},
      {Product: 112706, Amount: 5}
    ],
    LastChange: "2019-12-10T17:46:12.000Z"
  },
  {
    GUID: 116176,
    Type: "GuildhouseItem",
    Name: "Wasserspender",
    FileName: "3dicons/machine_items/icon_water_dispenser.png",
    Rarity: "Rare",
    RarityValue: 2,
    Productivity: 30,
    MaintenanceUpgrade: -25,
    EffectTargets: [
      {GUID: 1010292},
      {GUID: 1010294},
      {GUID: 100659},
      {GUID: 1010340},
      {GUID: 101252},
      {GUID: 124738},
      {GUID: 124737},
      {GUID: 114468}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Crafting", Amount: 25}
      ]
    },
    CraftingCosts: [
      {Product: 115980, Amount: 10},
      {Product: 1010219, Amount: 5}
    ],
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 116177,
    Type: "GuildhouseItem",
    Name: "Rauchmelder",
    FileName: "3dicons/machine_items/icon_smoke_detector.png",
    Rarity: "Rare",
    RarityValue: 2,
    IncidentFireIncreaseUpgrade: -5,
    IncidentExplosionIncreaseUpgrade: -5,
    EffectTargets: [
      {GUID: 193771}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Crafting", Amount: 25}
      ]
    },
    CraftingCosts: [
      {Product: 115980, Amount: 25},
      {Product: 1010232, Amount: 10},
      {Product: 112706, Amount: 5}
    ],
    LastChange: "2019-12-10T17:46:12.000Z"
  },
  {
    GUID: 116178,
    Type: "GuildhouseItem",
    Name: "Kältekammer",
    FileName: "3dicons/machine_items/icon_first_fridge.png",
    Rarity: "Rare",
    RarityValue: 2,
    Allocation: "TownHall",
    EffectTargets: [
      {GUID: 190762}
    ],
    InputBenefitModifier: [
      {Product: 1010213, AdditionalHappiness: 2, AdditionalMoney: 2},
      {Product: 1010200, AdditionalHappiness: 2, AdditionalMoney: 2},
      {Product: 1010214, AdditionalHappiness: 2, AdditionalMoney: 2},
      {Product: 1010217, AdditionalHappiness: 2, AdditionalMoney: 2},
      {Product: 1010216, AdditionalHappiness: 2, AdditionalMoney: 2},
      {Product: 1010238, AdditionalHappiness: 2, AdditionalMoney: 2},
      {Product: 120016, AdditionalHappiness: 2, AdditionalMoney: 2},
      {Product: 1010257, AdditionalHappiness: 2, AdditionalMoney: 2},
      {Product: 1010258, AdditionalHappiness: 2, AdditionalMoney: 2},
      {Product: 120032, AdditionalHappiness: 2, AdditionalMoney: 2},
      {Product: 120033, AdditionalHappiness: 2, AdditionalMoney: 2},
      {Product: 120035, AdditionalHappiness: 2, AdditionalMoney: 2}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Crafting", Amount: 25}
      ]
    },
    CraftingCosts: [
      {Product: 115980, Amount: 10},
      {Product: 112706, Amount: 5}
    ],
    LastChange: "2019-12-10T17:46:12.000Z"
  },
  {
    GUID: 116179,
    Type: "GuildhouseItem",
    Name: "Jukebox",
    FileName: "3dicons/machine_items/icon_jukebox.png",
    Rarity: "Rare",
    RarityValue: 2,
    Allocation: "TownHall",
    EffectTargets: [
      {GUID: 190041}
    ],
    InputBenefitModifier: [
      {Product: 1010349, AdditionalHappiness: 4, AdditionalMoney: 4},
      {Product: 1010352, AdditionalHappiness: 4, AdditionalMoney: 4},
      {Product: 1010355, AdditionalHappiness: 4, AdditionalMoney: 4}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Diplomacy", Amount: 25}
      ]
    },
    CraftingCosts: [
      {Product: 115980, Amount: 10},
      {Product: 1010248, Amount: 5}
    ],
    LastChange: "2019-12-10T17:46:12.000Z"
  },
  {
    GUID: 116180,
    Type: "GuildhouseItem",
    Name: "Eismacher",
    FileName: "3dicons/machine_items/icon_icemaker.png",
    Rarity: "Rare",
    RarityValue: 2,
    Allocation: "TownHall",
    EffectTargets: [
      {GUID: 190762}
    ],
    InputBenefitModifier: [
      {Product: 1010214, AdditionalHappiness: 3, AdditionalMoney: 3},
      {Product: 1010216, AdditionalHappiness: 3, AdditionalMoney: 3},
      {Product: 120016, AdditionalHappiness: 3, AdditionalMoney: 3},
      {Product: 1010257, AdditionalHappiness: 3, AdditionalMoney: 3},
      {Product: 120032, AdditionalHappiness: 3, AdditionalMoney: 3}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Medicine", Amount: 10}
      ]
    },
    CraftingCosts: [
      {Product: 115980, Amount: 10},
      {Product: 1010241, Amount: 5}
    ],
    LastChange: "2019-12-10T17:46:12.000Z"
  },
  {
    GUID: 116181,
    Type: "TownhallItem",
    Name: "Grünlicher Billardtisch",
    FileName: "3dicons/machine_items/icon_billard_table.png",
    Rarity: "Epic",
    RarityValue: 3,
    MaintenanceUpgrade: -50,
    AttractiveNess: 5,
    PublicServiceFullSatisfactionDistance: 35,
    PublicServiceNoSatisfactionDistance: 35,
    PublicServiceDistance: 35,
    EffectTargets: [
      {GUID: 1010358},
      {GUID: 1010361},
      {GUID: 1010364}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Diplomacy", Amount: 35}
      ]
    },
    CraftingCosts: [
      {Product: 115980, Amount: 25},
      {Product: 120044, Amount: 5},
      {Product: 1010196, Amount: 5}
    ],
    LastChange: "2019-12-10T17:46:12.000Z"
  },
  {
    GUID: 116182,
    Type: "GuildhouseItem",
    Name: "Craft-Bier zum Mitnehmen",
    FileName: "3dicons/machine_items/icon_craft_beer_takeaway.png",
    Rarity: "Epic",
    RarityValue: 3,
    Allocation: "TownHall",
    EffectTargets: [
      {GUID: 1010344},
      {GUID: 1010345},
      {GUID: 101255}
    ],
    InputBenefitModifier: [
      {Product: 1010214, AdditionalMoney: 5}
    ],
    GoodConsumptionUpgrade: [
      {ProvidedNeed: 1010214, AmountInPercent: -30}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Medicine", Amount: 15}
      ]
    },
    CraftingCosts: [
      {Product: 115980, Amount: 25},
      {Product: 1010214, Amount: 10},
      {Product: 112706, Amount: 5}
    ],
    LastChange: "2019-12-10T17:46:12.000Z"
  },
  {
    GUID: 116183,
    Type: "GuildhouseItem",
    Name: "Automatischer Souvenir-Kiosk",
    FileName: "3dicons/machine_items/icon_souvenir_kiosk.png",
    Rarity: "Epic",
    RarityValue: 3,
    MaintenanceUpgrade: -25,
    AttractiveNess: 5,
    AttractiveNessPercental: 1,
    Allocation: "TownHall",
    EffectTargets: [
      {GUID: 193666}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Diplomacy", Amount: 15}
      ]
    },
    CraftingCosts: [
      {Product: 115980, Amount: 25},
      {Product: 112702, Amount: 10},
      {Product: 1010248, Amount: 10},
      {Product: 1010246, Amount: 10}
    ],
    LastChange: "2019-12-10T17:46:12.000Z"
  },
  {
    GUID: 116184,
    Type: "TownhallItem",
    Name: "Nates ultimativer EspressoNateur",
    FileName: "3dicons/machine_items/icon_hot_drinks_machine.png",
    Rarity: "Legendary",
    RarityValue: 4,
    EffectTargets: [
      {GUID: 1010346},
      {GUID: 1010347},
      {GUID: 101255}
    ],
    GoodConsumptionUpgrade: [
      {ProvidedNeed: 120032, AmountInPercent: -30}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Diplomacy", Amount: 15}
      ]
    },
    CraftingCosts: [
      {Product: 115980, Amount: 50},
      {Product: 120031, Amount: 30},
      {Product: 1010239, Amount: 10},
      {Product: 1010258, Amount: 10}
    ],
    LastChange: "2019-12-10T17:46:12.000Z"
  },
  {
    GUID: 116185,
    Type: "GuildhouseItem",
    Name: "Cola Mola Wola Maschine",
    FileName: "3dicons/machine_items/icon_cola_mola_machine.png",
    Rarity: "Legendary",
    RarityValue: 4,
    Productivity: 25,
    EffectTargets: [
      {GUID: 100659},
      {GUID: 1010340},
      {GUID: 124737}
    ],
    AdditionalOutput: [
      {Product: 120032, Cycle: 10, Amount: 1}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Diplomacy", Amount: 15}
      ]
    },
    CraftingCosts: [
      {Product: 115980, Amount: 50},
      {Product: 120032, Amount: 20},
      {Product: 1010239, Amount: 20},
      {Product: 112706, Amount: 10}
    ],
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 116186,
    Type: "TownhallItem",
    Name: "Heitere Party- Luftballonpumpe",
    FileName: "3dicons/machine_items/icon_balloons.png",
    Rarity: "Legendary",
    RarityValue: 4,
    AdditionalHappiness: 10,
    WorkforceModifierInPercent: 20,
    TaxModifierInPercent: 10,
    EffectTargets: [
      {GUID: 190762}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Medicine", Amount: 25}
      ]
    },
    CraftingCosts: [
      {Product: 115980, Amount: 50},
      {Product: 112706, Amount: 20},
      {Product: 1010255, Amount: 10},
      {Product: 1010239, Amount: 5}
    ],
    LastChange: "2019-12-10T17:46:12.000Z"
  },
  {
    GUID: 116187,
    Type: "GuildhouseItem",
    Name: "Der „Bauerntölpel“- Zigarrenroller",
    FileName: "3dicons/machine_items/icon_cigars_roller.png",
    Rarity: "Legendary",
    RarityValue: 4,
    Productivity: 25,
    EffectTargets: [
      {GUID: 190865}
    ],
    AdditionalOutput: [
      {Product: 1010259, Cycle: 25, Amount: 1}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Crafting", Amount: 15}
      ]
    },
    CraftingCosts: [
      {Product: 115980, Amount: 50},
      {Product: 1010252, Amount: 25},
      {Product: 1010196, Amount: 10}
    ],
    LastChange: "2019-12-10T17:46:12.000Z"
  },
  {
    GUID: 116188,
    Type: "TownhallItem",
    Name: "Bunte „Einen an der Waffel“- Eismaschine",
    FileName: "3dicons/machine_items/icon_ice_cream_maker.png",
    Rarity: "Legendary",
    RarityValue: 4,
    EffectTargets: [
      {GUID: 1010347}
    ],
    InputBenefitModifier: [
      {Product: 1010258, AdditionalHappiness: 3}
    ],
    GoodConsumptionUpgrade: [
      {ProvidedNeed: 1010258, AmountInPercent: -30}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Diplomacy", Amount: 10}
      ]
    },
    CraftingCosts: [
      {Product: 115980, Amount: 50},
      {Product: 120041, Amount: 10},
      {Product: 120014, Amount: 10},
      {Product: 1010258, Amount: 10}
    ],
    LastChange: "2019-12-10T17:46:12.000Z"
  },
  {
    GUID: 116189,
    Type: "GuildhouseItem",
    Name: "Der bizarre Ballon-MagNate",
    FileName: "3dicons/machine_items/icon_ballon_radar.png",
    Rarity: "Legendary",
    RarityValue: 4,
    EffectTargets: [
      {GUID: 190882}
    ],
    AdditionalOutput: [
      {Product: 1010227, Cycle: 1, Amount: 1}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Navigation", Amount: 35}
      ]
    },
    CraftingCosts: [
      {Product: 115980, Amount: 50},
      {Product: 112706, Amount: 10},
      {Product: 1010210, Amount: 10},
      {Product: 1010229, Amount: 5}
    ],
    LastChange: "2019-12-10T17:46:12.000Z"
  },
  {
    GUID: 116190,
    Type: "GuildhouseItem",
    Name: "Die goldene Kartoffel- Erntemaschine der Zukunft",
    FileName: "3dicons/machine_items/icon_electric_potato_harvester.png",
    Rarity: "Legendary",
    RarityValue: 4,
    Productivity: 25,
    EffectTargets: [
      {GUID: 190865}
    ],
    AdditionalOutput: [
      {Product: 1010233, Cycle: 25, Amount: 1}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Crafting", Amount: 25}
      ]
    },
    CraftingCosts: [
      {Product: 115980, Amount: 50},
      {Product: 1010249, Amount: 10},
      {Product: 112698, Amount: 10},
      {Product: 112703, Amount: 5}
    ],
    LastChange: "2019-12-10T17:46:12.000Z"
  },
  {
    GUID: 102328,
    Type: "ItemWithUI",
    Name: "Brief Ihrer Schwester",
    FileName: "3dicons/campaign/icon_letter_open.png",
    Rarity: "Common",
    RarityValue: 0,
    LastChange: "2020-06-02T16:52:40.000Z"
  },
  {
    GUID: 190443,
    Type: "ItemWithUI",
    Name: "Versiegeltes Dokument",
    FileName: "3dicons/campaign/icon_letter_closed.png",
    Rarity: "Common",
    RarityValue: 0,
    LastChange: "2020-06-02T16:52:40.000Z"
  },
  {
    GUID: 101638,
    Type: "ItemWithUI",
    Name: "Edvards Gerichtsurteil",
    FileName: "3dicons/campaign/icon_letter_open.png",
    Rarity: "Common",
    RarityValue: 0,
    LastChange: "2020-06-02T16:52:40.000Z"
  },
  {
    GUID: 101137,
    Type: "ItemWithUI",
    Name: "Tagebuch Ihres Vaters",
    FileName: "3dicons/campaign/icon_samuel_diary.png",
    Rarity: "Common",
    RarityValue: 0,
    LastChange: "2020-06-02T16:52:40.000Z"
  },
  {
    GUID: 191832,
    Type: "ActiveItem",
    Name: "Schiffsturbine",
    FileName: "3dicons/machine_items/icon_generator_3.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    Allocation: "SteamShip",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Navigation", Amount: 20}
      ]
    },
    LastChange: "2020-06-02T16:52:40.000Z"
  },
  {
    GUID: 191833,
    Type: "ActiveItem",
    Name: "Schiffskolbenantrieb",
    FileName: "3dicons/machine_items/icon_generator_2.png",
    Rarity: "Rare",
    RarityValue: 2,
    Allocation: "SteamShip",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Navigation", Amount: 30}
      ]
    },
    LastChange: "2020-06-02T16:52:40.000Z"
  },
  {
    GUID: 191834,
    Type: "ActiveItem",
    Name: "Verbund​dampfmaschine",
    FileName: "3dicons/machine_items/icon_generator_1.png",
    Rarity: "Epic",
    RarityValue: 3,
    Allocation: "SteamShip",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Navigation", Amount: 40}
      ]
    },
    LastChange: "2020-06-02T16:52:40.000Z"
  },
  {
    GUID: 192151,
    Type: "ActiveItem",
    Name: "Schiffswerkzeug​kiste",
    FileName: "3dicons/consumables/icon_ship_repair_1.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    Allocation: "Ship",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Crafting", Amount: 20}
      ]
    },
    LastChange: "2020-06-02T16:52:40.000Z"
  },
  {
    GUID: 192152,
    Type: "ActiveItem",
    Name: "Schiffswerkzeug​truhe",
    FileName: "3dicons/consumables/icon_ship_repair_1.png",
    Rarity: "Rare",
    RarityValue: 2,
    Allocation: "Ship",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Crafting", Amount: 30}
      ]
    },
    LastChange: "2020-06-02T16:52:40.000Z"
  },
  {
    GUID: 192153,
    Type: "ActiveItem",
    Name: "Schiffswerkzeug​wagen",
    FileName: "3dicons/consumables/icon_ship_repair_2.png",
    Rarity: "Epic",
    RarityValue: 3,
    Allocation: "Ship",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Crafting", Amount: 40}
      ]
    },
    LastChange: "2020-06-02T16:52:40.000Z"
  },
  {
    GUID: 192155,
    Type: "ActiveItem",
    Name: "Poppinjays selbstfahrender Reparaturwagen",
    FileName: "3dicons/consumables/icon_ship_repair_2.png",
    Rarity: "Legendary",
    RarityValue: 4,
    Allocation: "Ship",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Crafting", Amount: 50}
      ]
    },
    LastChange: "2020-06-02T16:52:40.000Z"
  },
  {
    GUID: 192173,
    Type: "ActiveItem",
    Name: "Schwarze Flagge",
    FileName: "3dicons/icon_pirate_flag.png",
    Rarity: "Epic",
    RarityValue: 3,
    Allocation: "Warship",
    ExclusiveGroup: "Flag",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Melee", Amount: 20}
      ]
    },
    LastChange: "2020-06-02T16:52:40.000Z"
  },
  {
    GUID: 192172,
    Type: "ActiveItem",
    Name: "Schwarze Flagge eines Piratenkapitäns",
    FileName: "3dicons/consumables/icon_pirate_flag_2.png",
    Rarity: "Legendary",
    RarityValue: 4,
    Allocation: "Warship",
    ExclusiveGroup: "Flag",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Melee", Amount: 25},
        {Attribute: "Might", Amount: 25}
      ]
    },
    LastChange: "2020-06-02T16:52:40.000Z"
  },
  {
    GUID: 191977,
    Type: "ActiveItem",
    Name: "Schiffswerkzeug",
    FileName: "3dicons/consumables/icon_ship_repair_1.png",
    Rarity: "Common",
    RarityValue: 0,
    Allocation: "Ship",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Crafting", Amount: 6}
      ]
    },
    LastChange: "2020-06-02T16:52:40.000Z"
  },
  {
    GUID: 191978,
    Type: "ActiveItem",
    Name: "Modernes Schiffswerkzeug",
    FileName: "3dicons/consumables/icon_ship_repair_2.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    Allocation: "Ship",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Crafting", Amount: 8}
      ]
    },
    LastChange: "2020-06-02T16:52:40.000Z"
  },
  {
    GUID: 192424,
    Type: "ItemWithUI",
    Name: "Geständnisbrief an Isabel",
    FileName: "3dicons/campaign/icon_letter_open.png",
    Rarity: "Common",
    RarityValue: 0,
    LastChange: "2020-06-02T16:52:40.000Z"
  },
  {
    GUID: 193903,
    Type: "ActiveItem",
    Name: "Piratenflagge",
    FileName: "3dicons/icon_pirate_flag.png",
    Rarity: "Epic",
    RarityValue: 3,
    Allocation: "Warship",
    ExclusiveGroup: "Flag",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: []
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 112551,
    Type: "ActiveItem",
    Name: "Echolot",
    FileName: "3dicons/machine_items/item_sonar_01.png",
    Rarity: "Rare",
    RarityValue: 2,
    Allocation: "DivingVessel",
    ExclusiveGroup: "Sonar",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Navigation", Amount: 10}
      ]
    },
    CraftingCosts: [
      {Product: 1010219, Amount: 5},
      {Product: 1010228, Amount: 5}
    ],
    LastChange: "2020-06-02T16:52:40.000Z"
  },
  {
    GUID: 112241,
    Type: "ItemWithUI",
    Name: "Nadaskys Tagebuch (unvollständig)",
    FileName: "3dicons/narative_item/icon_nadasky_journal.png",
    Rarity: "Common",
    RarityValue: 0,
    LastChange: "2020-06-02T16:52:40.000Z"
  },
  {
    GUID: 112242,
    Type: "ItemWithUI",
    Name: "Nadaskys Tagebuch (beinahe vollständig)",
    FileName: "3dicons/narative_item/icon_nadasky_journal.png",
    Rarity: "Common",
    RarityValue: 0,
    LastChange: "2020-06-02T16:52:40.000Z"
  },
  {
    GUID: 112243,
    Type: "ItemWithUI",
    Name: "Nadaskys Tagebuch",
    FileName: "3dicons/narative_item/icon_nadasky_journal.png",
    Rarity: "Common",
    RarityValue: 0,
    LastChange: "2020-06-02T16:52:40.000Z"
  },
  {
    GUID: 112255,
    Type: "ItemWithUI",
    Name: "Richardsons Logbuch",
    FileName: "3dicons/narative_item/icon_richardsons_log.png",
    Rarity: "Common",
    RarityValue: 0,
    LastChange: "2020-06-02T16:52:40.000Z"
  },
  {
    GUID: 112280,
    Type: "ItemWithUI",
    Name: "Vascos ehrenhafter Vertrag",
    FileName: "3dicons/narative_item/icon_vascos_contract.png",
    Rarity: "Common",
    RarityValue: 0,
    LastChange: "2020-06-02T16:52:40.000Z"
  },
  {
    GUID: 112933,
    Type: "ItemWithUI",
    Name: "Karte historischer Ruinen",
    FileName: "3dicons/treasure_map/item_treasuremap_oldworld_01.png",
    Rarity: "Rare",
    RarityValue: 2,
    LastChange: "2020-06-02T16:52:40.000Z"
  },
  {
    GUID: 112936,
    Type: "ItemWithUI",
    Name: "Karte eines entlegenen Kontors",
    FileName: "3dicons/treasure_map/item_treasuremap_newworld_01.png",
    Rarity: "Rare",
    RarityValue: 2,
    LastChange: "2020-06-02T16:52:40.000Z"
  },
  {
    GUID: 112937,
    Type: "ItemWithUI",
    Name: "Karte eines vergessenen Wracks",
    FileName: "3dicons/treasure_map/item_treasuremap_st_01.png",
    Rarity: "Rare",
    RarityValue: 2,
    LastChange: "2020-06-02T16:52:40.000Z"
  },
  {
    GUID: 112934,
    Type: "ItemWithUI",
    Name: "Karte eines verlorenen Tempels",
    FileName: "3dicons/treasure_map/item_treasuremap_oldworld_02.png",
    Rarity: "Epic",
    RarityValue: 3,
    LastChange: "2020-06-02T16:52:40.000Z"
  },
  {
    GUID: 112938,
    Type: "ItemWithUI",
    Name: "Karte einer Pyramide unterwasser",
    FileName: "3dicons/treasure_map/item_treasuremap_newworld_02.png",
    Rarity: "Epic",
    RarityValue: 3,
    LastChange: "2020-06-02T16:52:40.000Z"
  },
  {
    GUID: 112939,
    Type: "ItemWithUI",
    Name: "Karte einer versunkenen Stadt",
    FileName: "3dicons/treasure_map/item_treasuremap_st_02.png",
    Rarity: "Epic",
    RarityValue: 3,
    LastChange: "2020-06-02T16:52:40.000Z"
  },
  {
    GUID: 112935,
    Type: "ItemWithUI",
    Name: "Die Paläste von Baiea",
    FileName: "3dicons/treasure_map/item_treasuremap_oldworld_03.png",
    Rarity: "Legendary",
    RarityValue: 4,
    LastChange: "2020-06-02T16:52:40.000Z"
  },
  {
    GUID: 112940,
    Type: "ItemWithUI",
    Name: "Die Tore zu Paititi",
    FileName: "3dicons/treasure_map/item_treasuremap_newworld_03.png",
    Rarity: "Legendary",
    RarityValue: 4,
    LastChange: "2020-06-02T16:52:40.000Z"
  },
  {
    GUID: 112941,
    Type: "ItemWithUI",
    Name: "Das Tagebuch des Viehhirten",
    FileName: "3dicons/treasure_map/item_treasuremap_st_03.png",
    Rarity: "Legendary",
    RarityValue: 4,
    LastChange: "2020-06-02T16:52:40.000Z"
  },
  {
    GUID: 113188,
    Type: "ItemWithUI",
    Name: "Karte eines Seetangwaldes",
    FileName: "3dicons/treasure_map/item_treasuremap_oldworld_01.png",
    Rarity: "Rare",
    RarityValue: 2,
    LastChange: "2020-06-02T16:52:40.000Z"
  },
  {
    GUID: 113189,
    Type: "ItemWithUI",
    Name: "Karte einer Seegraswiese",
    FileName: "3dicons/treasure_map/item_treasuremap_newworld_01.png",
    Rarity: "Rare",
    RarityValue: 2,
    LastChange: "2020-06-02T16:52:40.000Z"
  },
  {
    GUID: 113190,
    Type: "ItemWithUI",
    Name: "Karte eines Korallengartens",
    FileName: "3dicons/treasure_map/item_treasuremap_st_01.png",
    Rarity: "Rare",
    RarityValue: 2,
    LastChange: "2020-06-02T16:52:40.000Z"
  },
  {
    GUID: 113191,
    Type: "ItemWithUI",
    Name: "Karte eines Tiefseegrabens",
    FileName: "3dicons/treasure_map/item_treasuremap_oldworld_02.png",
    Rarity: "Epic",
    RarityValue: 3,
    LastChange: "2020-06-02T16:52:40.000Z"
  },
  {
    GUID: 113192,
    Type: "ItemWithUI",
    Name: "Karte eines Wallriffs",
    FileName: "3dicons/treasure_map/item_treasuremap_newworld_02.png",
    Rarity: "Epic",
    RarityValue: 3,
    LastChange: "2020-06-02T16:52:40.000Z"
  },
  {
    GUID: 113193,
    Type: "ItemWithUI",
    Name: "Karte eines Abyssals",
    FileName: "3dicons/treasure_map/item_treasuremap_st_02.png",
    Rarity: "Epic",
    RarityValue: 3,
    LastChange: "2020-06-02T16:52:40.000Z"
  },
  {
    GUID: 113194,
    Type: "ItemWithUI",
    Name: "Jörmungandrs Versteck",
    FileName: "3dicons/treasure_map/item_treasuremap_oldworld_03.png",
    Rarity: "Legendary",
    RarityValue: 4,
    LastChange: "2020-06-02T16:52:40.000Z"
  },
  {
    GUID: 113195,
    Type: "ItemWithUI",
    Name: "Das Nest der Gukulmatz",
    FileName: "3dicons/treasure_map/item_treasuremap_newworld_03.png",
    Rarity: "Legendary",
    RarityValue: 4,
    LastChange: "2020-06-02T16:52:40.000Z"
  },
  {
    GUID: 113196,
    Type: "ItemWithUI",
    Name: "Die Grube des Kraken",
    FileName: "3dicons/treasure_map/item_treasuremap_st_03.png",
    Rarity: "Legendary",
    RarityValue: 4,
    LastChange: "2020-06-02T16:52:40.000Z"
  },
  {
    GUID: 113197,
    Type: "ItemWithUI",
    Name: "Karte eines inländischen Gefechts",
    FileName: "3dicons/treasure_map/item_treasuremap_oldworld_01.png",
    Rarity: "Rare",
    RarityValue: 2,
    LastChange: "2020-06-02T16:52:40.000Z"
  },
  {
    GUID: 113198,
    Type: "ItemWithUI",
    Name: "Karte eines Übergriffs von Rebellen",
    FileName: "3dicons/treasure_map/item_treasuremap_newworld_01.png",
    Rarity: "Rare",
    RarityValue: 2,
    LastChange: "2020-06-02T16:52:40.000Z"
  },
  {
    GUID: 113199,
    Type: "ItemWithUI",
    Name: "Karte eines Gefechts bei Trelawney",
    FileName: "3dicons/treasure_map/item_treasuremap_st_01.png",
    Rarity: "Rare",
    RarityValue: 2,
    LastChange: "2020-06-02T16:52:40.000Z"
  },
  {
    GUID: 113200,
    Type: "ItemWithUI",
    Name: "Karte eines gesunkenen königlichen Klippers",
    FileName: "3dicons/treasure_map/item_treasuremap_oldworld_02.png",
    Rarity: "Epic",
    RarityValue: 3,
    LastChange: "2020-06-02T16:52:40.000Z"
  },
  {
    GUID: 113201,
    Type: "ItemWithUI",
    Name: "Karte eines gesunkenen Versorgungsschiffs von Rebellen",
    FileName: "3dicons/treasure_map/item_treasuremap_newworld_02.png",
    Rarity: "Epic",
    RarityValue: 3,
    LastChange: "2020-06-02T16:52:40.000Z"
  },
  {
    GUID: 113202,
    Type: "ItemWithUI",
    Name: "Karte eines gesunkenen Klippers von La Corona",
    FileName: "3dicons/treasure_map/item_treasuremap_st_02.png",
    Rarity: "Epic",
    RarityValue: 3,
    LastChange: "2020-06-02T16:52:40.000Z"
  },
  {
    GUID: 113203,
    Type: "ItemWithUI",
    Name: "Karte von Willie Wibblesocks wundersamem Geheimlager",
    FileName: "3dicons/treasure_map/item_treasuremap_oldworld_03.png",
    Rarity: "Legendary",
    RarityValue: 4,
    LastChange: "2020-06-02T16:52:40.000Z"
  },
  {
    GUID: 113204,
    Type: "ItemWithUI",
    Name: "Karte von Isabel Sarmentos Notfall-​Höhle",
    FileName: "3dicons/treasure_map/item_treasuremap_newworld_03.png",
    Rarity: "Legendary",
    RarityValue: 4,
    LastChange: "2020-06-02T16:52:40.000Z"
  },
  {
    GUID: 113205,
    Type: "ItemWithUI",
    Name: "Karte von Vicente Silvas gesunkenem Linienschiff",
    FileName: "3dicons/treasure_map/item_treasuremap_st_03.png",
    Rarity: "Legendary",
    RarityValue: 4,
    LastChange: "2020-06-02T16:52:40.000Z"
  },
  {
    GUID: 113678,
    Type: "ItemWithUI",
    Name: "Obskure Schatzkarte",
    FileName: "3dicons/treasure_map/item_treasuremap_st_01.png",
    Rarity: "Common",
    RarityValue: 0,
    LastChange: "2020-06-02T16:52:40.000Z"
  },
  {
    GUID: 113679,
    Type: "ItemWithUI",
    Name: "Obskure Schatzkarte",
    FileName: "3dicons/treasure_map/item_treasuremap_st_01.png",
    Rarity: "Common",
    RarityValue: 0,
    LastChange: "2020-06-02T16:52:40.000Z"
  },
  {
    GUID: 114816,
    Type: "ItemWithUI",
    Name: "Iris-​Garten",
    FileName: "3dicons/ornaments/icon_botanica_purpleflower.png",
    Rarity: "Common",
    RarityValue: 0,
    Allocation: "BuildPermit",
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 114857,
    Type: "ItemWithUI",
    Name: "Kamelien-​Garten",
    FileName: "3dicons/ornaments/icon_botanica_pinkflower.png",
    Rarity: "Common",
    RarityValue: 0,
    Allocation: "BuildPermit",
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 114858,
    Type: "ItemWithUI",
    Name: "Gänseblümchen-​Garten",
    FileName: "3dicons/ornaments/icon_botanica_yellowflower.png",
    Rarity: "Common",
    RarityValue: 0,
    Allocation: "BuildPermit",
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 114859,
    Type: "ItemWithUI",
    Name: "Rot-​weißer Petunien-​Garten",
    FileName: "3dicons/ornaments/icon_botanica_redandwhiteflower.png",
    Rarity: "Common",
    RarityValue: 0,
    Allocation: "BuildPermit",
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 114860,
    Type: "ItemWithUI",
    Name: "Hibiskus-​Garten",
    FileName: "3dicons/ornaments/icon_botanica_darkpinkflower.png",
    Rarity: "Common",
    RarityValue: 0,
    Allocation: "BuildPermit",
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 114861,
    Type: "ItemWithUI",
    Name: "Enzian-​Garten",
    FileName: "3dicons/ornaments/icon_botanica_blueflower.png",
    Rarity: "Common",
    RarityValue: 0,
    Allocation: "BuildPermit",
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 114862,
    Type: "ItemWithUI",
    Name: "Lilien-​Garten",
    FileName: "3dicons/ornaments/icon_botanica_whiteflower.png",
    Rarity: "Common",
    RarityValue: 0,
    Allocation: "BuildPermit",
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 114863,
    Type: "ItemWithUI",
    Name: "Ringelblumen-​Garten",
    FileName: "3dicons/ornaments/icon_botanica_orangeflower.png",
    Rarity: "Common",
    RarityValue: 0,
    Allocation: "BuildPermit",
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 114864,
    Type: "ItemWithUI",
    Name: "Formschnitt-​Allee",
    FileName: "3dicons/ornaments/icon_botanica_hedgespath.png",
    Rarity: "Common",
    RarityValue: 0,
    Allocation: "BuildPermit",
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 114865,
    Type: "ItemWithUI",
    Name: "Heckenlabyrinth",
    FileName: "3dicons/ornaments/icon_botanica_labybrinth.png",
    Rarity: "Common",
    RarityValue: 0,
    Allocation: "BuildPermit",
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 114866,
    Type: "ItemWithUI",
    Name: "Formschnitt-​Garten",
    FileName: "3dicons/ornaments/icon_botanica_treesculptures.png",
    Rarity: "Common",
    RarityValue: 0,
    Allocation: "BuildPermit",
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 114867,
    Type: "ItemWithUI",
    Name: "Iris-​Garten",
    FileName: "3dicons/ornaments/icon_botanica_purpleflower.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    Allocation: "BuildPermit",
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 114869,
    Type: "ItemWithUI",
    Name: "Kamelien-​Garten",
    FileName: "3dicons/ornaments/icon_botanica_pinkflower.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    Allocation: "BuildPermit",
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 114871,
    Type: "ItemWithUI",
    Name: "Gänseblümchen-​Garten",
    FileName: "3dicons/ornaments/icon_botanica_yellowflower.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    Allocation: "BuildPermit",
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 114873,
    Type: "ItemWithUI",
    Name: "Rot-​weißer Petunien-​Garten",
    FileName: "3dicons/ornaments/icon_botanica_redandwhiteflower.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    Allocation: "BuildPermit",
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 114875,
    Type: "ItemWithUI",
    Name: "Hibiskus-​Garten",
    FileName: "3dicons/ornaments/icon_botanica_darkpinkflower.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    Allocation: "BuildPermit",
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 114877,
    Type: "ItemWithUI",
    Name: "Enzian-​Garten",
    FileName: "3dicons/ornaments/icon_botanica_blueflower.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    Allocation: "BuildPermit",
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 114879,
    Type: "ItemWithUI",
    Name: "Lilien-​Garten",
    FileName: "3dicons/ornaments/icon_botanica_whiteflower.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    Allocation: "BuildPermit",
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 114881,
    Type: "ItemWithUI",
    Name: "Ringelblumen-​Garten",
    FileName: "3dicons/ornaments/icon_botanica_orangeflower.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    Allocation: "BuildPermit",
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 114883,
    Type: "ItemWithUI",
    Name: "Formschnitt-​Allee",
    FileName: "3dicons/ornaments/icon_botanica_hedgespath.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    Allocation: "BuildPermit",
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 114885,
    Type: "ItemWithUI",
    Name: "Heckenlabyrinth",
    FileName: "3dicons/ornaments/icon_botanica_labybrinth.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    Allocation: "BuildPermit",
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 114887,
    Type: "ItemWithUI",
    Name: "Formschnitt-​Garten",
    FileName: "3dicons/ornaments/icon_botanica_treesculptures.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    Allocation: "BuildPermit",
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 114868,
    Type: "ItemWithUI",
    Name: "Iris-​Garten",
    FileName: "3dicons/ornaments/icon_botanica_purpleflower.png",
    Rarity: "Rare",
    RarityValue: 2,
    Allocation: "BuildPermit",
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 114870,
    Type: "ItemWithUI",
    Name: "Kamelien-​Garten",
    FileName: "3dicons/ornaments/icon_botanica_pinkflower.png",
    Rarity: "Rare",
    RarityValue: 2,
    Allocation: "BuildPermit",
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 114872,
    Type: "ItemWithUI",
    Name: "Gänseblümchen-​Garten",
    FileName: "3dicons/ornaments/icon_botanica_yellowflower.png",
    Rarity: "Rare",
    RarityValue: 2,
    Allocation: "BuildPermit",
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 114874,
    Type: "ItemWithUI",
    Name: "Rot-​weißer Petunien-​Garten",
    FileName: "3dicons/ornaments/icon_botanica_redandwhiteflower.png",
    Rarity: "Rare",
    RarityValue: 2,
    Allocation: "BuildPermit",
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 114876,
    Type: "ItemWithUI",
    Name: "Hibiskus-​Garten",
    FileName: "3dicons/ornaments/icon_botanica_darkpinkflower.png",
    Rarity: "Rare",
    RarityValue: 2,
    Allocation: "BuildPermit",
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 114878,
    Type: "ItemWithUI",
    Name: "Enzian-​Garten",
    FileName: "3dicons/ornaments/icon_botanica_blueflower.png",
    Rarity: "Rare",
    RarityValue: 2,
    Allocation: "BuildPermit",
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 114880,
    Type: "ItemWithUI",
    Name: "Lilien-​Garten",
    FileName: "3dicons/ornaments/icon_botanica_whiteflower.png",
    Rarity: "Rare",
    RarityValue: 2,
    Allocation: "BuildPermit",
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 114882,
    Type: "ItemWithUI",
    Name: "Ringelblumen-​Garten",
    FileName: "3dicons/ornaments/icon_botanica_orangeflower.png",
    Rarity: "Rare",
    RarityValue: 2,
    Allocation: "BuildPermit",
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 114884,
    Type: "ItemWithUI",
    Name: "Formschnitt-​Allee",
    FileName: "3dicons/ornaments/icon_botanica_hedgespath.png",
    Rarity: "Rare",
    RarityValue: 2,
    Allocation: "BuildPermit",
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 114886,
    Type: "ItemWithUI",
    Name: "Heckenlabyrinth",
    FileName: "3dicons/ornaments/icon_botanica_labybrinth.png",
    Rarity: "Rare",
    RarityValue: 2,
    Allocation: "BuildPermit",
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 114888,
    Type: "ItemWithUI",
    Name: "Formschnitt-​Garten",
    FileName: "3dicons/ornaments/icon_botanica_treesculptures.png",
    Rarity: "Rare",
    RarityValue: 2,
    Allocation: "BuildPermit",
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 116882,
    Type: "ItemWithUI",
    Name: "Zerfleddertes Forschertagebuch",
    FileName: "3dicons/narative_item/icon_ship_construction_plan.png",
    Rarity: "Common",
    RarityValue: 0,
    LastChange: "2020-06-02T16:52:40.000Z"
  },
  {
    GUID: 114376,
    Type: "ItemWithUI",
    Name: "Sir Johns Logbuch",
    FileName: "3dicons/narative_item/icon_sir_john_logbook.png",
    Rarity: "Common",
    RarityValue: 0,
    LastChange: "2020-06-02T16:52:40.000Z"
  },
  {
    GUID: 114424,
    Type: "ItemWithUI",
    Name: "Eisbrecher-​Brigade",
    FileName: "3dicons/resident/icon_explorers.png",
    Rarity: "Common",
    RarityValue: 0,
    LastChange: "2020-06-02T16:52:40.000Z"
  },
  {
    GUID: 114605,
    Type: "ItemWithUI",
    Name: "Sir Johns Logbucheinträge",
    FileName: "3dicons/narative_item/icon_sir_john_stacked_notes.png",
    Rarity: "Common",
    RarityValue: 0,
    LastChange: "2020-06-02T16:52:40.000Z"
  },
  {
    GUID: 115475,
    Type: "ItemWithUI",
    Name: "Karte von einem verlassenen Inuit-​Dorf",
    FileName: "3dicons/treasure_map/item_treasuremap_passage_01.png",
    Rarity: "Rare",
    RarityValue: 2,
    LastChange: "2020-06-02T16:52:40.000Z"
  },
  {
    GUID: 115476,
    Type: "ItemWithUI",
    Name: "Karte eines Kontors der Huddlesome Bay Company",
    FileName: "3dicons/treasure_map/item_treasuremap_passage_02.png",
    Rarity: "Epic",
    RarityValue: 3,
    LastChange: "2020-06-02T16:52:40.000Z"
  },
  {
    GUID: 115477,
    Type: "ItemWithUI",
    Name: "Das Portal nach Hyperborea",
    FileName: "3dicons/treasure_map/item_treasuremap_passage_03.png",
    Rarity: "Legendary",
    RarityValue: 4,
    LastChange: "2020-06-02T16:52:40.000Z"
  },
  {
    GUID: 115478,
    Type: "ItemWithUI",
    Name: "Karte einer Robben-​Futterstelle",
    FileName: "3dicons/treasure_map/item_treasuremap_passage_01.png",
    Rarity: "Rare",
    RarityValue: 2,
    LastChange: "2020-06-02T16:52:40.000Z"
  },
  {
    GUID: 115479,
    Type: "ItemWithUI",
    Name: "Karte eines arktischen Beckens",
    FileName: "3dicons/treasure_map/item_treasuremap_passage_02.png",
    Rarity: "Epic",
    RarityValue: 3,
    LastChange: "2020-06-02T16:52:40.000Z"
  },
  {
    GUID: 115480,
    Type: "ItemWithUI",
    Name: "Der Abgrund des Megalodon",
    FileName: "3dicons/treasure_map/item_treasuremap_passage_03.png",
    Rarity: "Legendary",
    RarityValue: 4,
    LastChange: "2020-06-02T16:52:40.000Z"
  },
  {
    GUID: 115481,
    Type: "ItemWithUI",
    Name: "Karte eines Inuit-​Konflikts",
    FileName: "3dicons/treasure_map/item_treasuremap_passage_01.png",
    Rarity: "Rare",
    RarityValue: 2,
    LastChange: "2020-06-02T16:52:40.000Z"
  },
  {
    GUID: 115482,
    Type: "ItemWithUI",
    Name: "Karte von der Sichtung eines Geisterschiffs",
    FileName: "3dicons/treasure_map/item_treasuremap_passage_02.png",
    Rarity: "Epic",
    RarityValue: 3,
    LastChange: "2020-06-02T16:52:40.000Z"
  },
  {
    GUID: 115483,
    Type: "ItemWithUI",
    Name: "Karte der Absturzstelle des Luftschiff-​Prototyps vom Alten Nate",
    FileName: "3dicons/treasure_map/item_treasuremap_passage_03.png",
    Rarity: "Legendary",
    RarityValue: 4,
    LastChange: "2020-06-02T16:52:40.000Z"
  },
  {
    GUID: 124041,
    Type: "CultureItem",
    Name: "Östliche Riesenschnecke",
    FileName: "3dicons/animals/icon_gigant_snail.png",
    Rarity: "Common",
    RarityValue: 0,
    AttractiveNess: 10,
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 124074,
    Type: "CultureItem",
    Name: "Weißbauchigel",
    FileName: "3dicons/animals/icon_pygmy_hedgehog.png",
    Rarity: "Common",
    RarityValue: 0,
    AttractiveNess: 10,
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 191505,
    Type: "CultureItem",
    Name: "Flamingo",
    FileName: "3dicons/animals/icon_flamingo.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    AttractiveNess: 20,
    ItemSet: 124197,
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: []
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 191503,
    Type: "CultureItem",
    Name: "Strauß",
    FileName: "3dicons/animals/icon_ostrich.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    AttractiveNess: 20,
    ItemSet: 124199,
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: []
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 190461,
    Type: "CultureItem",
    Name: "Kraushaar-Vogelspinne",
    FileName: "3dicons/animals/icon_spider.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    AttractiveNess: 20,
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 124075,
    Type: "CultureItem",
    Name: "Dromedar",
    FileName: "3dicons/animals/icon_dromedary.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    AttractiveNess: 20,
    ItemSet: 124196,
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Crafting", Amount: 5},
        {Attribute: "Melee", Amount: 5}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 124147,
    Type: "CultureItem",
    Name: "Enbesanischer Wolf",
    FileName: "3dicons/animals/icon_enbesan_wolf.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    AttractiveNess: 20,
    ItemSet: 124198,
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Hunting", Amount: 10}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 124148,
    Type: "CultureItem",
    Name: "Zweihornchamäleon",
    FileName: "3dicons/animals/icon_bale_two_horned_chameleon.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    AttractiveNess: 20,
    ItemSet: 124198,
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: []
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 124149,
    Type: "CultureItem",
    Name: "Grevyzebra",
    FileName: "3dicons/animals/icon_zebra.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    AttractiveNess: 20,
    ItemSet: 124199,
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: []
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 124150,
    Type: "CultureItem",
    Name: "Wildhund",
    FileName: "3dicons/animals/icon_wild_dog.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    AttractiveNess: 20,
    ItemSet: 124200,
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Might", Amount: 5},
        {Attribute: "Hunting", Amount: 5}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 190455,
    Type: "CultureItem",
    Name: "Fennek",
    FileName: "3dicons/animals/icon_fennec.png",
    Rarity: "Rare",
    RarityValue: 2,
    AttractiveNess: 30,
    ItemSet: 124196,
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 191085,
    Type: "CultureItem",
    Name: "Löffelfuchs",
    FileName: "3dicons/animals/icon_bat_eared_fennec.png",
    Rarity: "Rare",
    RarityValue: 2,
    AttractiveNess: 30,
    ExpeditionAttribute: {
      BaseMorale: 15,
      ExpeditionAttributes: []
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 190457,
    Type: "CultureItem",
    Name: "Kaiserskorpion",
    FileName: "3dicons/animals/icon_scorpion.png",
    Rarity: "Rare",
    RarityValue: 2,
    AttractiveNess: 30,
    ItemSet: 124196,
    ExpeditionAttribute: {
      BaseMorale: 15,
      ExpeditionAttributes: [
        {Attribute: "Melee", Amount: 5},
        {Attribute: "Medicine", Amount: 5}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 190460,
    Type: "CultureItem",
    Name: "Speikobra",
    FileName: "3dicons/animals/icon_snake.png",
    Rarity: "Rare",
    RarityValue: 2,
    AttractiveNess: 30,
    ExpeditionAttribute: {
      BaseMorale: 15,
      ExpeditionAttributes: [
        {Attribute: "Melee", Amount: 5},
        {Attribute: "Medicine", Amount: 10}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 124151,
    Type: "CultureItem",
    Name: "Grauhals-Kronenkranich",
    FileName: "3dicons/animals/icon_grey_crowned_crane.png",
    Rarity: "Rare",
    RarityValue: 2,
    AttractiveNess: 30,
    ItemSet: 124197,
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 124152,
    Type: "CultureItem",
    Name: "Bergnyala",
    FileName: "3dicons/animals/icon_mountain_nyala.png",
    Rarity: "Rare",
    RarityValue: 2,
    AttractiveNess: 30,
    ItemSet: 124198,
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 124153,
    Type: "CultureItem",
    Name: "Oryxantilope",
    FileName: "3dicons/animals/icon_oryx.png",
    Rarity: "Rare",
    RarityValue: 2,
    AttractiveNess: 30,
    ItemSet: 124198,
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 124154,
    Type: "CultureItem",
    Name: "Tüpfelhyäne",
    FileName: "3dicons/animals/icon_spotted_hyena.png",
    Rarity: "Rare",
    RarityValue: 2,
    AttractiveNess: 30,
    ItemSet: 124199,
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: [
        {Attribute: "Melee", Amount: 15},
        {Attribute: "Diplomacy", Amount: -5}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 124155,
    Type: "CultureItem",
    Name: "Gnu",
    FileName: "3dicons/animals/icon_wildebeest.png",
    Rarity: "Rare",
    RarityValue: 2,
    AttractiveNess: 30,
    ItemSet: 124199,
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 124156,
    Type: "CultureItem",
    Name: "Impala",
    FileName: "3dicons/animals/icon_impala.png",
    Rarity: "Rare",
    RarityValue: 2,
    AttractiveNess: 30,
    ItemSet: 124200,
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 124157,
    Type: "CultureItem",
    Name: "Karakal",
    FileName: "3dicons/animals/icon_caracal.png",
    Rarity: "Rare",
    RarityValue: 2,
    AttractiveNess: 30,
    ItemSet: 124200,
    ExpeditionAttribute: {
      BaseMorale: 15,
      ExpeditionAttributes: []
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 124060,
    Type: "CultureItem",
    Name: "Bartgeier",
    FileName: "3dicons/animals/icon_bearded_vulture.png",
    Rarity: "Epic",
    RarityValue: 3,
    AttractiveNess: 40,
    ItemSet: 124198,
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 124158,
    Type: "CultureItem",
    Name: "Flusspferd",
    FileName: "3dicons/animals/icon_hippotanamus.png",
    Rarity: "Epic",
    RarityValue: 3,
    AttractiveNess: 40,
    ItemSet: 124197,
    ExpeditionAttribute: {
      BaseMorale: 20,
      ExpeditionAttributes: [
        {Attribute: "Melee", Amount: 40}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 124159,
    Type: "CultureItem",
    Name: "Dschelada",
    FileName: "3dicons/animals/icon_gelada.png",
    Rarity: "Epic",
    RarityValue: 3,
    AttractiveNess: 40,
    ItemSet: 124198,
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 124160,
    Type: "CultureItem",
    Name: "Gepard",
    FileName: "3dicons/animals/icon_cheeta.png",
    Rarity: "Epic",
    RarityValue: 3,
    AttractiveNess: 40,
    ItemSet: 124199,
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: [
        {Attribute: "Hunting", Amount: 20}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 124161,
    Type: "CultureItem",
    Name: "Giraffe",
    FileName: "3dicons/animals/icon_giraffe.png",
    Rarity: "Epic",
    RarityValue: 3,
    AttractiveNess: 40,
    ItemSet: 124200,
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 124162,
    Type: "CultureItem",
    Name: "Löwe",
    FileName: "3dicons/animals/icon_lion.png",
    Rarity: "Legendary",
    RarityValue: 4,
    AttractiveNess: 50,
    ItemSet: 124199,
    ExpeditionAttribute: {
      BaseMorale: 20,
      ExpeditionAttributes: [
        {Attribute: "Melee", Amount: 30},
        {Attribute: "Diplomacy", Amount: 10}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 124163,
    Type: "CultureItem",
    Name: "Elefant",
    FileName: "3dicons/animals/icon_elephant.png",
    Rarity: "Legendary",
    RarityValue: 4,
    AttractiveNess: 50,
    ItemSet: 124200,
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: [
        {Attribute: "Crafting", Amount: 30},
        {Attribute: "Melee", Amount: 20}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 124164,
    Type: "CultureItem",
    Name: "Spitzmaulnashorn",
    FileName: "3dicons/animals/icon_black_rhino.png",
    Rarity: "Legendary",
    RarityValue: 4,
    AttractiveNess: 50,
    ItemSet: 124200,
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 124867,
    Type: "CultureItem",
    Name: "Ring aus Rinder-Elfenbein",
    FileName: "3dicons/museum/africa/icon_bovine_ivory_ring.png",
    Rarity: "Common",
    RarityValue: 0,
    AttractiveNess: 10,
    ItemSet: 124906,
    Allocation: "Museum",
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 118137,
    Type: "CultureItem",
    Name: "Arabesken-Schmuck",
    FileName: "3dicons/museum/icon_necklace_uncommon.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    AttractiveNess: 20,
    Allocation: "Museum",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Diplomacy", Amount: 10}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 124868,
    Type: "CultureItem",
    Name: "Bemalte Maske",
    FileName: "3dicons/museum/africa/icon_giwoyo_mask.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    AttractiveNess: 20,
    ItemSet: 124906,
    Allocation: "Museum",
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 124869,
    Type: "CultureItem",
    Name: "Tierfigur",
    FileName: "3dicons/museum/africa/icon_chiwara_figure.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    AttractiveNess: 20,
    ItemSet: 124906,
    Allocation: "Museum",
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 124870,
    Type: "CultureItem",
    Name: "Ruhm der Könige",
    FileName: "3dicons/museum/africa/icon_kebra_nagast.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    AttractiveNess: 20,
    ItemSet: 124907,
    Allocation: "Museum",
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 124871,
    Type: "CultureItem",
    Name: "Löwe von Selamawi",
    FileName: "3dicons/museum/africa/icon_lion_of_judah.png",
    Rarity: "Rare",
    RarityValue: 2,
    AttractiveNess: 30,
    ItemSet: 124907,
    Allocation: "Museum",
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 124873,
    Type: "CultureItem",
    Name: "Figur von Mutter und Kind",
    FileName: "3dicons/museum/africa/icon_phemba.png",
    Rarity: "Rare",
    RarityValue: 2,
    AttractiveNess: 30,
    ItemSet: 124906,
    Allocation: "Museum",
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 124874,
    Type: "CultureItem",
    Name: "Eindrucksvolle Terrakottafigur",
    FileName: "3dicons/museum/africa/icon_nuk_terracota_figure.png",
    Rarity: "Rare",
    RarityValue: 2,
    AttractiveNess: 30,
    ItemSet: 124906,
    Allocation: "Museum",
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 124875,
    Type: "CultureItem",
    Name: "Arksum-Obelisk",
    FileName: "3dicons/museum/africa/icon_obelixo_of_arksam.png",
    Rarity: "Rare",
    RarityValue: 2,
    AttractiveNess: 30,
    ItemSet: 124907,
    Allocation: "Museum",
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 124876,
    Type: "CultureItem",
    Name: "Schmuck von Masu Masu",
    FileName: "3dicons/museum/africa/icon_mansa_musas_souvenir.png",
    Rarity: "Rare",
    RarityValue: 2,
    AttractiveNess: 30,
    ItemSet: 124908,
    Allocation: "Museum",
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 124877,
    Type: "CultureItem",
    Name: "Masus Mappa mundi",
    FileName: "3dicons/museum/africa/icon_mappamundi.png",
    Rarity: "Rare",
    RarityValue: 2,
    AttractiveNess: 30,
    ItemSet: 124908,
    Allocation: "Museum",
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: [
        {Attribute: "Navigation", Amount: 10}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 124882,
    Type: "CultureItem",
    Name: "Verzierte Lehmfliese",
    FileName: "3dicons/museum/africa/icon_yarobu_carving.png",
    Rarity: "Rare",
    RarityValue: 2,
    AttractiveNess: 30,
    ItemSet: 124906,
    Allocation: "Museum",
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 124872,
    Type: "CultureItem",
    Name: "Bullenkopf-Trinkhorn",
    FileName: "3dicons/museum/africa/icon_bull_head_rhyton.png",
    Rarity: "Rare",
    RarityValue: 2,
    AttractiveNess: 30,
    Allocation: "Museum",
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: [
        {Attribute: "Diplomacy", Amount: 10}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 118148,
    Type: "CultureItem",
    Name: "Das Heilige Buch",
    FileName: "3dicons/museum/icon_book_uncommon.png",
    Rarity: "Epic",
    RarityValue: 3,
    AttractiveNess: 40,
    Allocation: "Museum",
    ExpeditionAttribute: {
      BaseMorale: 20,
      ExpeditionAttributes: [
        {Attribute: "Faith", Amount: 15}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 124879,
    Type: "CultureItem",
    Name: "Statue von Anubis",
    FileName: "3dicons/museum/africa/icon_anpu_statue.png",
    Rarity: "Epic",
    RarityValue: 3,
    AttractiveNess: 40,
    ItemSet: 124905,
    Allocation: "Museum",
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 124881,
    Type: "CultureItem",
    Name: "Tambakto-Diorama",
    FileName: "3dicons/museum/africa/icon_model_of_tambacto.png",
    Rarity: "Epic",
    RarityValue: 3,
    AttractiveNess: 40,
    ItemSet: 124908,
    Allocation: "Museum",
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 124884,
    Type: "CultureItem",
    Name: "Ghebbi-Diorama",
    FileName: "3dicons/museum/africa/icon_fasil_ghebbi.png",
    Rarity: "Epic",
    RarityValue: 3,
    AttractiveNess: 40,
    ItemSet: 124907,
    Allocation: "Museum",
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 124878,
    Type: "CultureItem",
    Name: "Hor-Statue",
    FileName: "3dicons/museum/africa/icon_hor_statue.png",
    Rarity: "Epic",
    RarityValue: 3,
    AttractiveNess: 40,
    ItemSet: 124905,
    Allocation: "Museum",
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 124885,
    Type: "CultureItem",
    Name: "Kidusisches Kirchen-Diorama",
    FileName: "3dicons/museum/africa/icon_church_kidusi_antoni.png",
    Rarity: "Epic",
    RarityValue: 3,
    AttractiveNess: 40,
    ItemSet: 124907,
    Allocation: "Museum",
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 118122,
    Type: "CultureItem",
    Name: "Schätze von Sile'Amidos",
    FileName: "3dicons/campaign/africa/icon_africa_kidusi_urn.png",
    Rarity: "Legendary",
    RarityValue: 4,
    AttractiveNess: 50,
    Allocation: "Museum",
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: [
        {Attribute: "Diplomacy", Amount: 10}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 118594,
    Type: "CultureItem",
    Name: "Phönix-Ei",
    FileName: "3dicons/museum/icon_dinosaur_egg.png",
    Rarity: "Legendary",
    RarityValue: 4,
    AttractiveNess: 50,
    Allocation: "Museum",
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 118634,
    Type: "CultureItem",
    Name: "Karte von Sile'Amidos",
    FileName: "3dicons/treasure_map/item_treasuremap_st_03.png",
    Rarity: "Legendary",
    RarityValue: 4,
    AttractiveNess: 50,
    Allocation: "Museum",
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: [
        {Attribute: "Navigation", Amount: 20}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 124694,
    Type: "CultureItem",
    Name: "Lanze von Selamawi",
    FileName: "3dicons/campaign/africa/icon_spear_of_the_salomonids_02.png",
    Rarity: "Legendary",
    RarityValue: 4,
    AttractiveNess: 50,
    Allocation: "Museum",
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: [
        {Attribute: "Melee", Amount: 10},
        {Attribute: "Faith", Amount: 15}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 124883,
    Type: "CultureItem",
    Name: "Die Bundeslade",
    FileName: "3dicons/museum/africa/icon_ark_of_the_covenant.png",
    Rarity: "Legendary",
    RarityValue: 4,
    AttractiveNess: 50,
    ItemSet: 124907,
    Allocation: "Museum",
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 124880,
    Type: "CultureItem",
    Name: "Tempel-von-Nafir-Diorama",
    FileName: "3dicons/museum/africa/icon_temple_of_nafir.png",
    Rarity: "Legendary",
    RarityValue: 4,
    AttractiveNess: 50,
    ItemSet: 124905,
    Allocation: "Museum",
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 129442,
    Type: "CultureItem",
    Name: "Vase von Sile'Amidos",
    FileName: "3dicons/campaign/africa/icon_africa_kidusi_urn.png",
    Rarity: "Legendary",
    RarityValue: 4,
    AttractiveNess: 50,
    Allocation: "Museum",
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: [
        {Attribute: "Melee", Amount: 10},
        {Attribute: "Faith", Amount: 15}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 130777,
    Type: "CultureItem",
    Name: "Alter Tabot von Waha Desher",
    FileName: "3dicons/campaign/africa/icon_africa_tabot.png",
    Rarity: "Legendary",
    RarityValue: 4,
    AttractiveNess: 50,
    Allocation: "Museum",
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: [
        {Attribute: "Melee", Amount: 10},
        {Attribute: "Faith", Amount: 15}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 118103,
    Type: "ShipSpecialist",
    Name: "Polyglotter Gelehrter Rahim",
    FileName: "3dicons/specialists/africa/icon_innkeeper_1a.png",
    Rarity: "Epic",
    RarityValue: 3,
    ForwardSpeedUpgrade: 10,
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 125112,
    Type: "GuildhouseItem",
    Name: "Weiden-Expertin",
    FileName: "3dicons/specialists/africa/icon_herder_1.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    Productivity: 10,
    EffectTargets: [
      {GUID: 114456},
      {GUID: 114439}
    ],
    AdditionalOutput: [
      {Product: 114371, Cycle: 4, Amount: 1}
    ],
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 125113,
    Type: "GuildhouseItem",
    Name: "Liebevoller Ziegenhirte",
    FileName: "3dicons/specialists/africa/icon_herder_2.png",
    Rarity: "Rare",
    RarityValue: 2,
    Productivity: 20,
    ModuleLimit: -20,
    EffectTargets: [
      {GUID: 114439}
    ],
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 125114,
    Type: "TownhallItem",
    Name: "Kaldi der Teeaufbrüher",
    FileName: "3dicons/specialists/africa/icon_herder_3a.png",
    Rarity: "Legendary",
    RarityValue: 4,
    EffectTargets: [
      {GUID: 114445}
    ],
    InputBenefitModifier: [
      {Product: 114390, AdditionalHappiness: 10, AdditionalResearch: 4}
    ],
    GoodConsumptionUpgrade: [
      {ProvidedNeed: 114390, AmountInPercent: -30}
    ],
    ExpeditionAttribute: {
      BaseMorale: 15,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Medicine", Amount: 45},
        {Attribute: "Hunting", Amount: 30},
        {Attribute: "PerkJackOfAllTraits", Amount: 1}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 125115,
    Type: "GuildhouseItem",
    Name: "Blumenmädchen",
    FileName: "3dicons/specialists/africa/icon_horticulturist_2b.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    Workforce: -50,
    EffectTargets: [
      {GUID: 114447},
      {GUID: 114451},
      {GUID: 114448}
    ],
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 125116,
    Type: "GuildhouseItem",
    Name: "Calla Lily aus der blühenden Wüste",
    FileName: "3dicons/specialists/africa/icon_horticulturist_2.png",
    Rarity: "Legendary",
    RarityValue: 4,
    AddedFertility: 114347,
    ModuleLimit: -10,
    EffectTargets: [
      {GUID: 193955}
    ],
    ExpeditionAttribute: {
      BaseMorale: 15,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Medicine", Amount: 45},
        {Attribute: "Diplomacy", Amount: 20},
        {Attribute: "PerkEntertainer", Amount: 1}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 125117,
    Type: "TownhallItem",
    Name: "Limonadenverkäufer",
    FileName: "3dicons/specialists/africa/icon_innkeeper_1a.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    EffectTargets: [
      {GUID: 125110}
    ],
    InputBenefitModifier: [
      {Product: 114371, AdditionalHappiness: 2},
      {Product: 114390, AdditionalHappiness: 2}
    ],
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Diplomacy", Amount: 5},
        {Attribute: "Crafting", Amount: 10}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 125118,
    Type: "GuildhouseItem",
    Name: "Tee-Experte",
    FileName: "3dicons/specialists/africa/icon_innkeeper_2.png",
    Rarity: "Rare",
    RarityValue: 2,
    Productivity: 20,
    EffectTargets: [
      {GUID: 114468}
    ],
    ReplaceInputs: [
      {OldInput: 114364, NewInput: 114365}
    ],
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 125119,
    Type: "TownhallItem",
    Name: "Shayi Shaah, Herrscherin über das Teehaus",
    FileName: "3dicons/specialists/africa/icon_innkeeper_3a.png",
    Rarity: "Epic",
    RarityValue: 3,
    EffectTargets: [
      {GUID: 125110}
    ],
    InputBenefitModifier: [
      {Product: 114390, AdditionalHappiness: 8}
    ],
    GoodConsumptionUpgrade: [
      {ProvidedNeed: 114371, AmountInPercent: -30}
    ],
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Diplomacy", Amount: 30},
        {Attribute: "PerkEntertainer", Amount: 1}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 125120,
    Type: "TownhallItem",
    Name: "Enthusiastischer Koch",
    FileName: "3dicons/specialists/africa/icon_enbesan_cook_1.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    EffectTargets: [
      {GUID: 125110}
    ],
    InputBenefitModifier: [
      {Product: 114359, AdditionalHappiness: 2},
      {Product: 114410, AdditionalHappiness: 2}
    ],
    ExpeditionAttribute: {
      BaseMorale: 15,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Diplomacy", Amount: 5}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 125121,
    Type: "TownhallItem",
    Name: "Bankett-Koch",
    FileName: "3dicons/specialists/africa/icon_enbesan_cook_2.png",
    Rarity: "Epic",
    RarityValue: 3,
    EffectTargets: [
      {GUID: 125110}
    ],
    InputBenefitModifier: [
      {Product: 114361, AdditionalMoney: 10}
    ],
    GoodConsumptionUpgrade: [
      {ProvidedNeed: 114359, AmountInPercent: -30}
    ],
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 125122,
    Type: "GuildhouseItem",
    Name: "Aaden Issack, weltberühmter enbesanischer Spitzenkoch",
    FileName: "3dicons/specialists/africa/icon_enbesan_cook_3b.png",
    Rarity: "Legendary",
    RarityValue: 4,
    MaintenanceUpgrade: -50,
    EffectTargets: [
      {GUID: 114471}
    ],
    ReplaceInputs: [
      {OldInput: 118728, NewInput: 114357}
    ],
    AdditionalOutput: [
      {Product: 114359, Cycle: 5, Amount: 1}
    ],
    ExpeditionAttribute: {
      BaseMorale: 20,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Diplomacy", Amount: 55},
        {Attribute: "Medicine", Amount: 20}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 125123,
    Type: "TownhallItem",
    Name: "Pater Dekama",
    FileName: "3dicons/specialists/africa/icon_ewahedo_faith_1.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    MaintenanceUpgrade: -20,
    PublicServiceFullSatisfactionDistance: 12,
    PublicServiceNoSatisfactionDistance: 12,
    PublicServiceDistance: 12,
    EffectTargets: [
      {GUID: 114520}
    ],
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 125124,
    Type: "GuildhouseItem",
    Name: "Enbesanischer Bischof",
    FileName: "3dicons/specialists/africa/icon_ewahedo_faith_2.png",
    Rarity: "Rare",
    RarityValue: 2,
    Productivity: 30,
    EffectTargets: [
      {GUID: 114464}
    ],
    ReplaceInputs: [
      {OldInput: 117701, NewInput: 1010208}
    ],
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Faith", Amount: 20}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 125125,
    Type: "TownhallItem",
    Name: "Patriarch Matteos X.",
    FileName: "3dicons/specialists/africa/icon_ewahedo_faith_3.png",
    Rarity: "Legendary",
    RarityValue: 4,
    IncidentRiotIncreaseUpgrade: -5,
    EffectTargets: [
      {GUID: 125110}
    ],
    GoodConsumptionUpgrade: [
      {ProvidedNeed: 117698, AmountInPercent: -30},
      {ProvidedNeed: 114362, AmountInPercent: -100}
    ],
    ExpeditionAttribute: {
      BaseMorale: 20,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Faith", Amount: 50},
        {Attribute: "Diplomacy", Amount: 30}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 125126,
    Type: "GuildhouseItem",
    Name: "Gewissenhafter Handwerker",
    FileName: "3dicons/specialists/africa/icon_traditional_handicraft_1.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    IncidentFireIncreaseUpgrade: -6,
    EffectTargets: [
      {GUID: 114469},
      {GUID: 118725},
      {GUID: 114472}
    ],
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 125127,
    Type: "TownhallItem",
    Name: "Emsige Stickerin",
    FileName: "3dicons/specialists/africa/icon_plants_adept_2.png",
    Rarity: "Rare",
    RarityValue: 2,
    EffectTargets: [
      {GUID: 125110}
    ],
    InputBenefitModifier: [
      {Product: 114404, AdditionalHappiness: 6}
    ],
    GoodConsumptionUpgrade: [
      {ProvidedNeed: 114404, AmountInPercent: -20}
    ],
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 125128,
    Type: "GuildhouseItem",
    Name: "Magan der Handwerksmeister",
    FileName: "3dicons/specialists/africa/icon_traditional_handcraft_3b.png",
    Rarity: "Epic",
    RarityValue: 3,
    Productivity: 40,
    ReplaceWorkforce: 114340,
    EffectTargets: [
      {GUID: 114469},
      {GUID: 118725}
    ],
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 125129,
    Type: "GuildhouseItem",
    Name: "Wahenoor der Papiermühlen-Experte",
    FileName: "3dicons/specialists/africa/icon_water_use_expert_1.png",
    Rarity: "Epic",
    RarityValue: 3,
    Productivity: 40,
    EffectTargets: [
      {GUID: 117744}
    ],
    ReplaceInputs: [
      {OldInput: 120008, NewInput: 114356}
    ],
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Crafting", Amount: 10}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 125130,
    Type: "TownhallItem",
    Name: "Ältester Selassy'e",
    FileName: "3dicons/specialists/africa/icon_politician.png",
    Rarity: "Rare",
    RarityValue: 2,
    AdditionalHappiness: 7,
    EffectTargets: [
      {GUID: 125110}
    ],
    GoodConsumptionUpgrade: [
      {ProvidedNeed: 114359, AmountInPercent: -20}
    ],
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 125131,
    Type: "GuildhouseItem",
    Name: "Meister der Gewürze",
    FileName: "3dicons/specialists/africa/icon_plants_adept_1.png",
    Rarity: "Rare",
    RarityValue: 2,
    Productivity: 20,
    AddedFertility: 114348,
    EffectTargets: [
      {GUID: 114452}
    ],
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 125132,
    Type: "TownhallItem",
    Name: "Aesop der legendäre Geschichtenerzähler",
    FileName: "3dicons/specialists/africa/icon_keeper_of_tradition_1.png",
    Rarity: "Legendary",
    RarityValue: 4,
    ResidentsUpgrade: 20,
    AdditionalHappiness: 10,
    IncidentRiotIncreaseUpgrade: -5,
    EffectTargets: [
      {GUID: 125110}
    ],
    InputBenefitModifier: [
      {Product: 120020},
      {Product: 117698}
    ],
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 125133,
    Type: "GuildhouseItem",
    Name: "Giorgis der angesehene Hymnenkomponist",
    FileName: "3dicons/specialists/africa/icon_keeper_of_tradition_2.png",
    Rarity: "Legendary",
    RarityValue: 4,
    Productivity: 50,
    EffectTargets: [
      {GUID: 114470}
    ],
    AdditionalOutput: [
      {Product: 117698, Cycle: 5, Amount: 1},
      {Product: 117699, Cycle: 10, Amount: 1}
    ],
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Diplomacy", Amount: 45},
        {Attribute: "Faith", Amount: 30}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 125134,
    Type: "TownhallItem",
    Name: "Mulatu der musikalische Maestro",
    FileName: "3dicons/specialists/africa/icon_keeper_of_tradition_3.png",
    Rarity: "Legendary",
    RarityValue: 4,
    ResidentsUpgrade: 20,
    AdditionalHappiness: 10,
    IncidentIllnessIncreaseUpgrade: -5,
    EffectTargets: [
      {GUID: 125110}
    ],
    InputBenefitModifier: [
      {Product: 114361},
      {Product: 114414}
    ],
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Diplomacy", Amount: 50},
        {Attribute: "PerkPolyglot", Amount: 1},
        {Attribute: "PerkJackOfAllTraits", Amount: 1}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 125135,
    Type: "GuildhouseItem",
    Name: "Erfahrener Salzsieder",
    FileName: "3dicons/specialists/africa/icon_sea_master_1.png",
    Rarity: "Rare",
    RarityValue: 2,
    Productivity: 30,
    MaintenanceUpgrade: -50,
    Allocation: "HarborOffice",
    EffectTargets: [
      {GUID: 114440},
      {GUID: 118729}
    ],
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 125136,
    Type: "GuildhouseItem",
    Name: "Hummerfischer",
    FileName: "3dicons/specialists/africa/icon_sea_master_2.png",
    Rarity: "Epic",
    RarityValue: 3,
    Productivity: 40,
    AddedFertility: 118727,
    Allocation: "HarborOffice",
    EffectTargets: [
      {GUID: 118729}
    ],
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Hunting", Amount: 30},
        {Attribute: "Navigation", Amount: 10}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 131387,
    Type: "GuildhouseItem",
    Name: "Enbesanischer Feuerbändiger",
    FileName: "3dicons/specialists/systemic/icon_firebrigade_401.png",
    Rarity: "Epic",
    RarityValue: 3,
    ResolverUnitMovementSpeedUpgrade: 20,
    Allocation: "TownHall",
    EffectTargets: [
      {GUID: 190775}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Crafting", Amount: 45},
        {Attribute: "Medicine", Amount: 20},
        {Attribute: "PerkZoologist", Amount: 1}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 125137,
    Type: "GuildhouseItem",
    Name: "Maßschneider",
    FileName: "3dicons/specialists/africa/icon_tailor_1.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    Workforce: -50,
    EffectTargets: [
      {GUID: 118733}
    ],
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 125138,
    Type: "GuildhouseItem",
    Name: "Paul Poiret, provokanter Modedesigner",
    FileName: "3dicons/specialists/africa/icon_tailor_2.png",
    Rarity: "Epic",
    RarityValue: 3,
    Productivity: 40,
    EffectTargets: [
      {GUID: 118734}
    ],
    AdditionalOutput: [
      {Product: 120037, Cycle: 10, Amount: 1}
    ],
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Crafting", Amount: 35},
        {Attribute: "Diplomacy", Amount: 15}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 125139,
    Type: "GuildhouseItem",
    Name: "Bumm Brimmell, der erste Dandy",
    FileName: "3dicons/specialists/africa/icon_tailor_3.png",
    Rarity: "Legendary",
    RarityValue: 4,
    AttractiveNess: 20,
    EffectTargets: [
      {GUID: 118733}
    ],
    ReplaceInputs: [
      {OldInput: 114357, NewInput: 1010199}
    ],
    AdditionalOutput: [
      {Product: 114430, Cycle: 8, Amount: 1}
    ],
    ExpeditionAttribute: {
      BaseMorale: 15,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Crafting", Amount: 10},
        {Attribute: "Diplomacy", Amount: 5},
        {Attribute: "PerkEntertainer", Amount: 1}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 129022,
    Type: "TownhallItem",
    Name: "Großartiger Modedesigner",
    FileName: "3dicons/specialists/africa/icon_amazing_tailor.png",
    Rarity: "Epic",
    RarityValue: 3,
    ResidentsUpgrade: 15,
    IncidentRiotIncreaseUpgrade: -4,
    EffectTargets: [
      {GUID: 114445}
    ],
    InputBenefitModifier: [
      {Product: 114430},
      {Product: 114428}
    ],
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 125140,
    Type: "TownhallItem",
    Name: "Leitungsmonteur",
    FileName: "3dicons/specialists/africa/icon_telecommunication_expert_2.png",
    Rarity: "Epic",
    RarityValue: 3,
    ResidentsUpgrade: 15,
    EffectTargets: [
      {GUID: 114445}
    ],
    InputBenefitModifier: [
      {Product: 114431, AdditionalHappiness: 4},
      {Product: 114425, AdditionalHappiness: 4}
    ],
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 125141,
    Type: "TownhallItem",
    Name: "Funkerin auf der richtigen Wellenlänge",
    FileName: "3dicons/specialists/africa/icon_telecommunications_expert_3.png",
    Rarity: "Rare",
    RarityValue: 2,
    AttractiveNess: 6,
    PublicServiceFullSatisfactionDistance: 15,
    PublicServiceNoSatisfactionDistance: 15,
    PublicServiceDistance: 15,
    EffectTargets: [
      {GUID: 118736}
    ],
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: [
        {Attribute: "PerkFemale", Amount: 1},
        {Attribute: "Diplomacy", Amount: 30},
        {Attribute: "Navigation", Amount: 50},
        {Attribute: "PerkPolyglot", Amount: 1}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 125142,
    Type: "TownhallItem",
    Name: "Lehrbeauftragter der Fakultät",
    FileName: "3dicons/specialists/africa/icon_dean_1.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    EffectTargets: [
      {GUID: 114445}
    ],
    InputBenefitModifier: [
      {Product: 1010353, AdditionalResearch: 1}
    ],
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 125143,
    Type: "TownhallItem",
    Name: "Dekan des Dekans der Dekanitischen Universität",
    FileName: "3dicons/specialists/africa/icon_dean_2.png",
    Rarity: "Legendary",
    RarityValue: 4,
    ResidentsUpgrade: 20,
    EffectTargets: [
      {GUID: 114445}
    ],
    InputBenefitModifier: [
      {Product: 1010353, AdditionalHappiness: 10, AdditionalResearch: 2}
    ],
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Diplomacy", Amount: 30},
        {Attribute: "PerkAnthropologist", Amount: 1},
        {Attribute: "PerkArcheologist", Amount: 1},
        {Attribute: "PerkPolyglot", Amount: 1}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 125144,
    Type: "TownhallItem",
    Name: "Djimon der wehmütige Auswanderer",
    FileName: "3dicons/specialists/africa/icon_enbesa_expatriate_1.png",
    Rarity: "Epic",
    RarityValue: 3,
    EffectTargets: [
      {GUID: 114445}
    ],
    InputBenefitModifier: [
      {Product: 114390, AdditionalResearch: 1},
      {Product: 114410, AdditionalResearch: 1},
      {Product: 114404, AdditionalResearch: 1},
      {Product: 114414, AdditionalResearch: 1}
    ],
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 125145,
    Type: "TownhallItem",
    Name: "Weiser enbesanischer Siedler",
    FileName: "3dicons/specialists/africa/icon_enbesa_expatriate_2.png",
    Rarity: "Rare",
    RarityValue: 2,
    AttractiveNess: 5,
    EffectTargets: [
      {GUID: 114445}
    ],
    InputBenefitModifier: [
      {Product: 114390, AdditionalHappiness: 3},
      {Product: 114410, AdditionalHappiness: 3}
    ],
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 125146,
    Type: "TownhallItem",
    Name: "Eshe die eifrige enbesanische Entrepreneurin",
    FileName: "3dicons/specialists/africa/icon_enbesa_expatriate_3.png",
    Rarity: "Epic",
    RarityValue: 3,
    EffectTargets: [
      {GUID: 114445}
    ],
    InputBenefitModifier: [
      {Product: 114404, AdditionalHappiness: 4},
      {Product: 114414, AdditionalHappiness: 4}
    ],
    GoodConsumptionUpgrade: [
      {ProvidedNeed: 114404, AmountInPercent: -20},
      {ProvidedNeed: 114414, AmountInPercent: -20}
    ],
    ExpeditionAttribute: {
      BaseMorale: 20,
      ExpeditionAttributes: [
        {Attribute: "PerkMale", Amount: 1},
        {Attribute: "Diplomacy", Amount: 50},
        {Attribute: "PerkJackOfAllTraits", Amount: 1}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 119987,
    Type: "ItemWithUI",
    Name: "Kyrias altes Tagebuch",
    FileName: "3dicons/narative_item/icon_kyrias_notebook.png",
    Rarity: "Common",
    RarityValue: 0,
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 119989,
    Type: "ItemWithUI",
    Name: "Register des IX. Regiments",
    FileName: "3dicons/narative_item/icon_military_list_lol.png",
    Rarity: "Common",
    RarityValue: 0,
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 129663,
    Type: "ItemWithUI",
    Name: "Kartographisches Skizzenbuch",
    FileName: "3dicons/narative_item/icon_kyrias_notebook.png",
    Rarity: "Common",
    RarityValue: 0,
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 119215,
    Type: "ItemWithUI",
    Name: "Lebenslauf und Bewerbungsschreiben des „Adligen“",
    FileName: "3dicons/campaign/icon_letter_closed.png",
    Rarity: "Common",
    RarityValue: 0,
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 119216,
    Type: "ItemWithUI",
    Name: "Lebenslauf und Bewerbungsschreiben des „Handwerksmeisters“",
    FileName: "3dicons/campaign/icon_letter_closed.png",
    Rarity: "Common",
    RarityValue: 0,
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 119217,
    Type: "ItemWithUI",
    Name: "Lebenslauf und Bewerbungsschreiben des „hochdekorierten Generals“",
    FileName: "3dicons/campaign/icon_letter_closed.png",
    Rarity: "Common",
    RarityValue: 0,
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 131014,
    Type: "GuildhouseItem",
    Name: "Ketemas Cousin",
    FileName: "3dicons/specialists/africa/icon_enbesan_cook_3a.png",
    Rarity: "Narrative",
    RarityValue: 5,
    Productivity: 10,
    Allocation: "HarborOffice",
    EffectTargets: [
      {GUID: 114440},
      {GUID: 118729}
    ],
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 120295,
    Type: "ItemWithUI",
    Name: "Waha Desher - Enbesa Treaty Restranscription",
    FileName: "3dicons/narative_item/icon_sir_john_stacked_notes.png",
    Rarity: "Common",
    RarityValue: 0,
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 124372,
    Type: "ItemWithUI",
    Name: "Hafenregister von Kidusi Anitoni",
    FileName: "3dicons/narative_item/icon_sir_john_stacked_notes.png",
    Rarity: "Common",
    RarityValue: 0,
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 124374,
    Type: "ItemWithUI",
    Name: "Hafenregister von Akdamot",
    FileName: "3dicons/narative_item/icon_sir_john_stacked_notes.png",
    Rarity: "Common",
    RarityValue: 0,
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 124464,
    Type: "ItemWithUI",
    Name: "Tagebuch von Mekdems Leibwächter",
    FileName: "3dicons/narative_item/icon_sir_john_stacked_notes.png",
    Rarity: "Common",
    RarityValue: 0,
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 124624,
    Type: "ItemWithUI",
    Name: "König Wags Testament",
    FileName: "3dicons/narative_item/icon_sir_john_stacked_notes.png",
    Rarity: "Common",
    RarityValue: 0,
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 130937,
    Type: "CultureItem",
    Name: "Chroniken von Enbesa",
    FileName: "3dicons/museum/africa/icon_kebra_nagast.png",
    Rarity: "Legendary",
    RarityValue: 4,
    AttractiveNess: 50,
    Allocation: "Museum",
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 130938,
    Type: "CultureItem",
    Name: "Chroniken von Enbesa",
    FileName: "3dicons/museum/africa/icon_kebra_nagast.png",
    Rarity: "Epic",
    RarityValue: 3,
    AttractiveNess: 40,
    Allocation: "Museum",
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 130939,
    Type: "CultureItem",
    Name: "Chroniken von Enbesa",
    FileName: "3dicons/museum/africa/icon_kebra_nagast.png",
    Rarity: "Rare",
    RarityValue: 2,
    AttractiveNess: 30,
    Allocation: "Museum",
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 130945,
    Type: "CultureItem",
    Name: "Chroniken von Enbesa",
    FileName: "3dicons/museum/africa/icon_kebra_nagast.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    AttractiveNess: 20,
    Allocation: "Museum",
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 121004,
    Type: "TownhallItem",
    Name: "Amadi Ilga, Ketemas Oberbauingenieur",
    FileName: "3dicons/specialists/systemic/icon_adventurer_700.png",
    Rarity: "Legendary",
    RarityValue: 4,
    ResidentsUpgrade: 20,
    AdditionalHappiness: 10,
    IncidentFireIncreaseUpgrade: -5,
    EffectTargets: [
      {GUID: 125110}
    ],
    InputBenefitModifier: [
      {Product: 114401},
      {Product: 117698}
    ],
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: [
        {Attribute: "Crafting", Amount: 45},
        {Attribute: "Medicine", Amount: 20}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 121020,
    Type: "HarborOfficeItem",
    Name: "Khadija Tsegaye, Angerebs Marktmeisterin",
    FileName: "3dicons/specialists/systemic/icon_archaeologist_801.png",
    Rarity: "Legendary",
    RarityValue: 4,
    EffectTargets: [
      {GUID: 193897}
    ],
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: [
        {Attribute: "Diplomacy", Amount: 45},
        {Attribute: "Crafting", Amount: 20}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 121022,
    Type: "HarborOfficeItem",
    Name: "Konteradmiral Richard B. Sharpe der Adleräugige",
    FileName: "3dicons/specialists/icon_captain_epic.png",
    Rarity: "Epic",
    RarityValue: 3,
    MaxHitpointsUpgrade: 800,
    EffectTargets: [
      {GUID: 191443}
    ],
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: [
        {Attribute: "Might", Amount: 40},
        {Attribute: "Melee", Amount: 15}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 121023,
    Type: "VehicleItem",
    Name: "Nautische Karte der südlichen Hemisphäre",
    FileName: "3dicons/museum/africa/icon_mappamundi.png",
    Rarity: "Legendary",
    RarityValue: 4,
    ForwardSpeedUpgrade: 35,
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: [
        {Attribute: "Navigation", Amount: 55}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 125043,
    Type: "GuildhouseItem",
    Name: "Enbesanischer Buchbinderei-Werkzeugsatz",
    FileName: "3dicons/machine_items/africa/icon_enbesan_bookbinding_kit.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    Productivity: 25,
    Workforce: 20,
    EffectTargets: [
      {GUID: 114470}
    ],
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 125044,
    Type: "GuildhouseItem",
    Name: "Buchbinderrahmen",
    FileName: "3dicons/machine_items/africa/icon_binding_sewing_frame.png",
    Rarity: "Rare",
    RarityValue: 2,
    Productivity: 35,
    EffectTargets: [
      {GUID: 114470}
    ],
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 125045,
    Type: "GuildhouseItem",
    Name: "Industrielle Bindemaschine",
    FileName: "3dicons/machine_items/africa/icon_industrial_binding_machine.png",
    Rarity: "Epic",
    RarityValue: 3,
    Productivity: 40,
    Workforce: -25,
    EffectTargets: [
      {GUID: 114470}
    ],
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 125046,
    Type: "GuildhouseItem",
    Name: "Bienenkorb-Räuchergerät",
    FileName: "3dicons/machine_items/africa/item_bee_smoker.png",
    Rarity: "Rare",
    RarityValue: 2,
    Workforce: -35,
    EffectTargets: [
      {GUID: 114453}
    ],
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 125047,
    Type: "GuildhouseItem",
    Name: "Queenby-Imkeranzug",
    FileName: "3dicons/machine_items/africa/item_full_bee_suit.png",
    Rarity: "Epic",
    RarityValue: 3,
    Productivity: 40,
    Workforce: -50,
    EffectTargets: [
      {GUID: 114453}
    ],
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 125048,
    Type: "GuildhouseItem",
    Name: "Fleisch-Guillotine",
    FileName: "3dicons/machine_items/africa/item_meat_slicing_guillotine.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    Productivity: 25,
    MaintenanceUpgrade: 20,
    EffectTargets: [
      {GUID: 114444}
    ],
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 125049,
    Type: "GuildhouseItem",
    Name: "Trockenkammer",
    FileName: "3dicons/machine_items/africa/item_curing_chamber.png",
    Rarity: "Rare",
    RarityValue: 2,
    Productivity: 35,
    EffectTargets: [
      {GUID: 114444}
    ],
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 125050,
    Type: "GuildhouseItem",
    Name: "Berkeley-Fleischschneider",
    FileName: "3dicons/machine_items/africa/item_meat_slicer.png",
    Rarity: "Epic",
    RarityValue: 3,
    Productivity: 40,
    Workforce: -35,
    EffectTargets: [
      {GUID: 114444}
    ],
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: [
        {Attribute: "Melee", Amount: 15}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 125051,
    Type: "GuildhouseItem",
    Name: "Schleuse",
    FileName: "3dicons/machine_items/africa/item_stop_gate.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    PipeCapacityUpgrade: 20,
    EffectTargets: [
      {GUID: 114544}
    ],
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 125052,
    Type: "GuildhouseItem",
    Name: "Fortschrittliches Schleusentor",
    FileName: "3dicons/machine_items/africa/item_sluice_gate.png",
    Rarity: "Rare",
    RarityValue: 2,
    MaintenanceUpgrade: -30,
    PipeCapacityUpgrade: 25,
    EffectTargets: [
      {GUID: 114544}
    ],
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 125053,
    Type: "GuildhouseItem",
    Name: "Biniams Schleusentor",
    FileName: "3dicons/machine_items/africa/item_flood_gate.png",
    Rarity: "Epic",
    RarityValue: 3,
    MaintenanceUpgrade: -50,
    PipeCapacityUpgrade: 30,
    EffectTargets: [
      {GUID: 114544}
    ],
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 125054,
    Type: "GuildhouseItem",
    Name: "Töpferscheibe",
    FileName: "3dicons/machine_items/africa/item_potters_wheel.png",
    Rarity: "Rare",
    RarityValue: 2,
    Productivity: 30,
    EffectTargets: [
      {GUID: 118725},
      {GUID: 114472}
    ],
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 125055,
    Type: "GuildhouseItem",
    Name: "Ketemas industrieller Brennofen",
    FileName: "3dicons/machine_items/africa/item_kilin.png",
    Rarity: "Epic",
    RarityValue: 3,
    Productivity: 40,
    Workforce: -35,
    EffectTargets: [
      {GUID: 118725},
      {GUID: 114472}
    ],
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 125056,
    Type: "GuildhouseItem",
    Name: "Netzfalle",
    FileName: "3dicons/machine_items/africa/item_net_lobster_trap.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    Productivity: 20,
    Allocation: "HarborOffice",
    EffectTargets: [
      {GUID: 118729}
    ],
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 125057,
    Type: "GuildhouseItem",
    Name: "Kapitän Ninevehs wunderbare Hummerfalle",
    FileName: "3dicons/machine_items/africa/item_miraculous_lobster_trap.png",
    Rarity: "Epic",
    RarityValue: 3,
    Productivity: 40,
    Workforce: -50,
    MaintenanceUpgrade: -50,
    Allocation: "HarborOffice",
    EffectTargets: [
      {GUID: 118729}
    ],
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 125058,
    Type: "GuildhouseItem",
    Name: "Vogelhaus",
    FileName: "3dicons/machine_items/africa/item_birdhouse.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    Productivity: 20,
    MaintenanceUpgrade: 20,
    EffectTargets: [
      {GUID: 125109}
    ],
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 125059,
    Type: "GuildhouseItem",
    Name: "Mückennetz",
    FileName: "3dicons/machine_items/africa/item_insect_proof_net.png",
    Rarity: "Rare",
    RarityValue: 2,
    Productivity: 25,
    EffectTargets: [
      {GUID: 125109}
    ],
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: [
        {Attribute: "Medicine", Amount: 20},
        {Attribute: "Hunting", Amount: 15}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 125060,
    Type: "GuildhouseItem",
    Name: "Yebebas robustes Gewächshaus",
    FileName: "3dicons/machine_items/africa/item_sturdy_greenhouse.png",
    Rarity: "Epic",
    RarityValue: 3,
    Productivity: 35,
    MaintenanceUpgrade: -50,
    EffectTargets: [
      {GUID: 125109}
    ],
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 125061,
    Type: "GuildhouseItem",
    Name: "Ersatzrad",
    FileName: "3dicons/machine_items/africa/item_water_wheel.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    Productivity: 30,
    MaintenanceUpgrade: 20,
    EffectTargets: [
      {GUID: 117743},
      {GUID: 117744}
    ],
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 125062,
    Type: "GuildhouseItem",
    Name: "Behäbige Freistrahlturbine",
    FileName: "3dicons/machine_items/africa/item_pelton_wheel.png",
    Rarity: "Epic",
    RarityValue: 3,
    Productivity: 45,
    MaintenanceUpgrade: -50,
    EffectTargets: [
      {GUID: 117743},
      {GUID: 117744}
    ],
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 125063,
    Type: "GuildhouseItem",
    Name: "Baumstammtrommel",
    FileName: "3dicons/machine_items/africa/item_kebero_drums.png",
    Rarity: "Rare",
    RarityValue: 2,
    PublicServiceFullSatisfactionDistance: 15,
    PublicServiceNoSatisfactionDistance: 15,
    PublicServiceDistance: 15,
    Allocation: "TownHall",
    EffectTargets: [
      {GUID: 114519},
      {GUID: 114520}
    ],
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: [
        {Attribute: "Diplomacy", Amount: 5}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 125064,
    Type: "GuildhouseItem",
    Name: "Zehnsaitige Krar",
    FileName: "3dicons/machine_items/africa/item_stringed_krar.png",
    Rarity: "Rare",
    RarityValue: 2,
    Allocation: "TownHall",
    EffectTargets: [
      {GUID: 125110}
    ],
    InputBenefitModifier: [
      {Product: 114361, AdditionalMoney: 8},
      {Product: 114362, AdditionalMoney: 8}
    ],
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: [
        {Attribute: "Diplomacy", Amount: 15}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 125065,
    Type: "GuildhouseItem",
    Name: "Trommel von Selamawi",
    FileName: "3dicons/machine_items/africa/item_negarit_drum.png",
    Rarity: "Epic",
    RarityValue: 3,
    MaintenanceUpgrade: -50,
    PublicServiceFullSatisfactionDistance: 17,
    PublicServiceNoSatisfactionDistance: 17,
    PublicServiceDistance: 17,
    Allocation: "TownHall",
    EffectTargets: [
      {GUID: 114519},
      {GUID: 114520}
    ],
    ExpeditionAttribute: {
      BaseMorale: 15,
      ExpeditionAttributes: [
        {Attribute: "Diplomacy", Amount: 30}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 125066,
    Type: "GuildhouseItem",
    Name: "Bewegliche Ankleidepuppe",
    FileName: "3dicons/machine_items/africa/item_mannequin.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    Productivity: 20,
    EffectTargets: [
      {GUID: 118734}
    ],
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 125067,
    Type: "GuildhouseItem",
    Name: "Blotherhithes Säummaschine",
    FileName: "3dicons/machine_items/africa/item_fusing_machine.png",
    Rarity: "Epic",
    RarityValue: 3,
    Productivity: 40,
    Workforce: -35,
    MaintenanceUpgrade: -35,
    EffectTargets: [
      {GUID: 118734}
    ],
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 125068,
    Type: "GuildhouseItem",
    Name: "Schusterleisten",
    FileName: "3dicons/machine_items/africa/item_shoemaking_tools.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    Productivity: 25,
    MaintenanceUpgrade: 20,
    EffectTargets: [
      {GUID: 118733}
    ],
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: [
        {Attribute: "Crafting", Amount: 5}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 125069,
    Type: "GuildhouseItem",
    Name: "Schnürlochmaschine",
    FileName: "3dicons/machine_items/africa/item_eyeleting_machine.png",
    Rarity: "Rare",
    RarityValue: 2,
    Productivity: 30,
    EffectTargets: [
      {GUID: 118733}
    ],
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 125070,
    Type: "GuildhouseItem",
    Name: "Sohlenhefter",
    FileName: "3dicons/machine_items/africa/item_sole_stitching_machine.png",
    Rarity: "Epic",
    RarityValue: 3,
    Productivity: 40,
    Workforce: -50,
    EffectTargets: [
      {GUID: 118733}
    ],
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: [
        {Attribute: "Crafting", Amount: 20}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 125071,
    Type: "GuildhouseItem",
    Name: "Telefonverstärker",
    FileName: "3dicons/machine_items/africa/item_landline_repeater.png",
    Rarity: "Rare",
    RarityValue: 2,
    Allocation: "TownHall",
    EffectTargets: [
      {GUID: 114445}
    ],
    GoodConsumptionUpgrade: [
      {ProvidedNeed: 114431, AmountInPercent: -25}
    ],
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 125072,
    Type: "GuildhouseItem",
    Name: "Rundfunk-Relaisstation",
    FileName: "3dicons/machine_items/africa/item_signal_amplifier.png",
    Rarity: "Epic",
    RarityValue: 3,
    MaintenanceUpgrade: -50,
    PublicServiceFullSatisfactionDistance: 17,
    PublicServiceNoSatisfactionDistance: 17,
    PublicServiceDistance: 17,
    Allocation: "TownHall",
    EffectTargets: [
      {GUID: 118736}
    ],
    ExpeditionAttribute: {
      BaseMorale: 15,
      ExpeditionAttributes: [
        {Attribute: "Diplomacy", Amount: 20},
        {Attribute: "Navigation", Amount: 40}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 129239,
    Type: "ItemWithUI",
    Name: "Karte zu einem vergessenen Hirtenlager",
    FileName: "3dicons/treasure_map/item_treasuremap_enbesa.png",
    Rarity: "Rare",
    RarityValue: 2,
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 129243,
    Type: "ItemWithUI",
    Name: "Karte zu einem versunkenen Anwesen",
    FileName: "3dicons/treasure_map/item_treasuremap_enbesa_02.png",
    Rarity: "Epic",
    RarityValue: 3,
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 129240,
    Type: "ItemWithUI",
    Name: "Karte eines alten Außenpostens",
    FileName: "3dicons/treasure_map/item_treasuremap_enbesa_03.png",
    Rarity: "Legendary",
    RarityValue: 4,
    ExpeditionAttribute: {
      BaseMorale: 40,
      ExpeditionAttributes: [
        {Attribute: "Navigation", Amount: 20}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 129237,
    Type: "ItemWithUI",
    Name: "Von kaiserlichen Seeleuten gefertigte Karte",
    FileName: "3dicons/treasure_map/item_treasuremap_enbesa.png",
    Rarity: "Rare",
    RarityValue: 2,
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 129222,
    Type: "ItemWithUI",
    Name: "Karte des Austragungsortes einer längst vergangenen Seeschlacht",
    FileName: "3dicons/treasure_map/item_treasuremap_enbesa_02.png",
    Rarity: "Epic",
    RarityValue: 3,
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 129238,
    Type: "ItemWithUI",
    Name: "Karte von Klippen",
    FileName: "3dicons/treasure_map/item_treasuremap_enbesa_03.png",
    Rarity: "Legendary",
    RarityValue: 4,
    ExpeditionAttribute: {
      BaseMorale: 40,
      ExpeditionAttributes: [
        {Attribute: "Navigation", Amount: 20}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 129236,
    Type: "ItemWithUI",
    Name: "Vom Gericht versiegelte Karte",
    FileName: "3dicons/treasure_map/item_treasuremap_enbesa.png",
    Rarity: "Rare",
    RarityValue: 2,
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 129249,
    Type: "ItemWithUI",
    Name: "Karte aus einem Versicherungsbericht",
    FileName: "3dicons/treasure_map/item_treasuremap_enbesa.png",
    Rarity: "Rare",
    RarityValue: 2,
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 129248,
    Type: "ItemWithUI",
    Name: "Karte eines kürzlich havarierten Schiffs",
    FileName: "3dicons/treasure_map/item_treasuremap_enbesa_02.png",
    Rarity: "Epic",
    RarityValue: 3,
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 129251,
    Type: "ItemWithUI",
    Name: "Karte des schiffbrüchigen Kapitäns",
    FileName: "3dicons/treasure_map/item_treasuremap_enbesa_03.png",
    Rarity: "Legendary",
    RarityValue: 4,
    ExpeditionAttribute: {
      BaseMorale: 40,
      ExpeditionAttributes: [
        {Attribute: "Navigation", Amount: 20}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 102487,
    Type: "ItemSpecialAction",
    Name: "Dynamit",
    FileName: "3dicons/icon_dynamite.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    Allocation: "Ship",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: []
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 191481,
    Type: "ItemSpecialAction",
    Name: "Mörser",
    FileName: "3dicons/ship_military/icon_mortar.png",
    Rarity: "Common",
    RarityValue: 0,
    Allocation: "Warship",
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: [
        {Attribute: "Might", Amount: 10}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 191474,
    Type: "ItemSpecialAction",
    Name: "Torpedo",
    FileName: "3dicons/military_items/icon_torpedo_rework.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    Allocation: "Warship",
    ExpeditionAttribute: {
      BaseMorale: 15,
      ExpeditionAttributes: [
        {Attribute: "Might", Amount: 20}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 192164,
    Type: "ItemSpecialAction",
    Name: "Schildzapfenmörser",
    FileName: "3dicons/consumables/icon_active_mortar_1.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    Allocation: "Warship",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Might", Amount: 20}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 192165,
    Type: "ItemSpecialAction",
    Name: "Gusseiserner Mörser",
    FileName: "3dicons/consumables/icon_active_mortar_1.png",
    Rarity: "Rare",
    RarityValue: 2,
    Allocation: "Warship",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Might", Amount: 30}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 192166,
    Type: "ItemSpecialAction",
    Name: "Gusseiserner Kartätschen-​Mörser",
    FileName: "3dicons/consumables/icon_active_mortar_2.png",
    Rarity: "Epic",
    RarityValue: 3,
    Allocation: "Warship",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Might", Amount: 40}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 192168,
    Type: "ItemSpecialAction",
    Name: "Mullivanns Mehrschuss-​Mörser",
    FileName: "3dicons/consumables/icon_active_mortar_3.png",
    Rarity: "Legendary",
    RarityValue: 4,
    Allocation: "Warship",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Might", Amount: 50}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 191867,
    Type: "ItemSpecialAction",
    Name: "Kleine Haubitze",
    FileName: "3dicons/consumables/icon_howitzer_1.png",
    Rarity: "Rare",
    RarityValue: 2,
    Allocation: "Warship",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Might", Amount: 30}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 191868,
    Type: "ItemSpecialAction",
    Name: "12-​Pfünder-​Haubitze",
    FileName: "3dicons/consumables/icon_howitzer_2.png",
    Rarity: "Epic",
    RarityValue: 3,
    Allocation: "Warship",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Might", Amount: 40}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 191869,
    Type: "ItemSpecialAction",
    Name: "Mulcher M1897",
    FileName: "3dicons/consumables/icon_howitzer_3.png",
    Rarity: "Legendary",
    RarityValue: 4,
    Allocation: "Warship",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Might", Amount: 50}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 192430,
    Type: "ItemSpecialAction",
    Name: "Flammensprüher",
    FileName: "3dicons/consumables/icon_flame_thrower_1.png",
    Rarity: "Rare",
    RarityValue: 2,
    Allocation: "Warship",
    ExclusiveGroup: "AutoAttackProjectile",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Might", Amount: 30}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 192433,
    Type: "ItemSpecialAction",
    Name: "Flammenwerfer",
    FileName: "3dicons/consumables/icon_flame_thrower_2.png",
    Rarity: "Epic",
    RarityValue: 3,
    Allocation: "Warship",
    ExclusiveGroup: "AutoAttackProjectile",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Might", Amount: 30}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 192434,
    Type: "ItemSpecialAction",
    Name: "Pyrphorischer Flammenwerfer",
    FileName: "3dicons/consumables/icon_flame_thrower_3.png",
    Rarity: "Legendary",
    RarityValue: 4,
    Allocation: "Warship",
    ExclusiveGroup: "AutoAttackProjectile",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Might", Amount: 30}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 191907,
    Type: "ItemSpecialAction",
    Name: "Antiseptika",
    FileName: "3dicons/consumables/icon_medicine_1.png",
    Rarity: "Common",
    RarityValue: 0,
    Allocation: "TownHall",
    EffectTargets: [
      {GUID: 192179}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Medicine", Amount: 4}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 191908,
    Type: "ItemSpecialAction",
    Name: "Penizillin",
    FileName: "3dicons/consumables/icon_medicine_2.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    Allocation: "TownHall",
    EffectTargets: [
      {GUID: 192179}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Medicine", Amount: 6}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 191909,
    Type: "ItemSpecialAction",
    Name: "Tollwutimpfstoff",
    FileName: "3dicons/consumables/icon_medicine_3.png",
    Rarity: "Rare",
    RarityValue: 2,
    Allocation: "TownHall",
    EffectTargets: [
      {GUID: 193957}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Medicine", Amount: 8}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 191913,
    Type: "ItemSpecialAction",
    Name: "Schaum-​Feuerlöscher",
    FileName: "3dicons/consumables/icon_fire_extinguisher_1.png",
    Rarity: "Common",
    RarityValue: 0,
    Allocation: "TownHall",
    EffectTargets: [
      {GUID: 192179}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Melee", Amount: 1}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 191914,
    Type: "ItemSpecialAction",
    Name: "Säure-​Basen-​Feuerlöscher",
    FileName: "3dicons/consumables/icon_fire_extinguisher_2.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    Allocation: "TownHall",
    EffectTargets: [
      {GUID: 192179}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Melee", Amount: 2}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 191915,
    Type: "ItemSpecialAction",
    Name: "Tetrachlorkohlenstoff-​Löscher",
    FileName: "3dicons/consumables/icon_fire_extinguisher_3.png",
    Rarity: "Rare",
    RarityValue: 2,
    Allocation: "TownHall",
    EffectTargets: [
      {GUID: 192179}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Melee", Amount: 3}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 191919,
    Type: "ItemSpecialAction",
    Name: "Handgeblasene Löschgranate",
    FileName: "3dicons/consumables/icon_extinguisher_grenade_1.png",
    Rarity: "Common",
    RarityValue: 0,
    Allocation: "GuildHouse",
    EffectTargets: [
      {GUID: 6000018}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Melee", Amount: 4}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 191920,
    Type: "ItemSpecialAction",
    Name: "Hängende Glas-​Löschgranate",
    FileName: "3dicons/consumables/icon_extinguisher_grenade_2.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    Allocation: "GuildHouse",
    EffectTargets: [
      {GUID: 6000018}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Melee", Amount: 5}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 191921,
    Type: "ItemSpecialAction",
    Name: "Hitzeaktivierte TCK-​Granate",
    FileName: "3dicons/consumables/icon_extinguisher_grenade_3.png",
    Rarity: "Rare",
    RarityValue: 2,
    Allocation: "GuildHouse",
    EffectTargets: [
      {GUID: 6000018}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Melee", Amount: 6}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 191922,
    Type: "ItemSpecialAction",
    Name: "Kiste mit Alkohol",
    FileName: "3dicons/consumables/icon_alcohol_bag_1.png",
    Rarity: "Common",
    RarityValue: 0,
    Allocation: "TownHall",
    EffectTargets: [
      {GUID: 190762}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Medicine", Amount: 3},
        {Attribute: "Diplomacy", Amount: 3}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 191923,
    Type: "ItemSpecialAction",
    Name: "Große Kiste mit Alkohol",
    FileName: "3dicons/consumables/icon_alcohol_bag_2.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    Allocation: "TownHall",
    EffectTargets: [
      {GUID: 190762}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Medicine", Amount: 1},
        {Attribute: "Diplomacy", Amount: 1}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 191924,
    Type: "ItemSpecialAction",
    Name: "Riesige Kiste mit Alkohol",
    FileName: "3dicons/consumables/icon_alcohol_bag_3.png",
    Rarity: "Rare",
    RarityValue: 2,
    Allocation: "TownHall",
    EffectTargets: [
      {GUID: 190762}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Medicine", Amount: 2},
        {Attribute: "Diplomacy", Amount: 2}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 191925,
    Type: "ItemSpecialAction",
    Name: "Geldbeutel",
    FileName: "3dicons/consumables/icon_moneybag_common.png",
    Rarity: "Common",
    RarityValue: 0,
    Allocation: "GuildHouse",
    EffectTargets: [
      {GUID: 6000018}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Diplomacy", Amount: 4}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 191926,
    Type: "ItemSpecialAction",
    Name: "Großer Geldbeutel",
    FileName: "3dicons/consumables/icon_moneybag_rare.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    Allocation: "GuildHouse",
    EffectTargets: [
      {GUID: 6000018}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Diplomacy", Amount: 5}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 191927,
    Type: "ItemSpecialAction",
    Name: "Riesiger Geldbeutel",
    FileName: "3dicons/consumables/icon_moneybag_epic.png",
    Rarity: "Rare",
    RarityValue: 2,
    Allocation: "GuildHouse",
    EffectTargets: [
      {GUID: 6000018}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Diplomacy", Amount: 6}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 192184,
    Type: "ItemSpecialAction",
    Name: "Torpedoprototyp",
    FileName: "3dicons/consumables/icon_torpedo_1.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    Allocation: "Warship",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Might", Amount: 6}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 192185,
    Type: "ItemSpecialAction",
    Name: "Hydrostatischer Torpedo",
    FileName: "3dicons/consumables/icon_torpedo_2.png",
    Rarity: "Rare",
    RarityValue: 2,
    Allocation: "Warship",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Might", Amount: 8}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 192186,
    Type: "ItemSpecialAction",
    Name: "Gyroskopischer Torpedo",
    FileName: "3dicons/consumables/icon_torpedo_3.png",
    Rarity: "Epic",
    RarityValue: 3,
    Allocation: "Warship",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Might", Amount: 10}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 191955,
    Type: "ItemSpecialAction",
    Name: "Stahlgranaten",
    FileName: "3dicons/consumables/icon_piercing_shell_1.png",
    Rarity: "Common",
    RarityValue: 0,
    Allocation: "Warship",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Might", Amount: 4}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 191958,
    Type: "ItemSpecialAction",
    Name: "Granaten gegen zementierten Stahl",
    FileName: "3dicons/consumables/icon_piercing_shell_2.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    Allocation: "Warship",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Might", Amount: 6}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 191962,
    Type: "ItemSpecialAction",
    Name: "Melinitgranaten",
    FileName: "3dicons/consumables/icon_explosive_shells_1.png",
    Rarity: "Common",
    RarityValue: 0,
    Allocation: "Warship",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Might", Amount: 4}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 191963,
    Type: "ItemSpecialAction",
    Name: "Dunnitgranaten",
    FileName: "3dicons/consumables/icon_explosive_shells_2.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    Allocation: "Warship",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Might", Amount: 6}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 191964,
    Type: "ItemSpecialAction",
    Name: "Kartätsche",
    FileName: "3dicons/consumables/icon_big_berta_1.png",
    Rarity: "Common",
    RarityValue: 0,
    Allocation: "Warship",
    ExclusiveGroup: "AutoAttackProjectile",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Might", Amount: 3}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 191965,
    Type: "ItemSpecialAction",
    Name: "Doppelkartätsche",
    FileName: "3dicons/consumables/icon_big_berta_2.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    Allocation: "Warship",
    ExclusiveGroup: "AutoAttackProjectile",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Might", Amount: 4}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 191979,
    Type: "ItemSpecialAction",
    Name: "Schreinerwerkzeug",
    FileName: "3dicons/consumables/icon_building_repair_1.png",
    Rarity: "Common",
    RarityValue: 0,
    Allocation: "HarborOffice",
    EffectTargets: [
      {GUID: 191508}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Crafting", Amount: 6}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 191980,
    Type: "ItemSpecialAction",
    Name: "Bauwerkzeug",
    FileName: "3dicons/consumables/icon_building_repair_2.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    Allocation: "HarborOffice",
    EffectTargets: [
      {GUID: 191508}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Crafting", Amount: 8}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 191987,
    Type: "ItemSpecialAction",
    Name: "Kaperbrief",
    FileName: "3dicons/consumables/icon_marque_letter_1.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    Allocation: "Warship",
    ExclusiveGroup: "Flag",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Diplomacy", Amount: 20}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 191993,
    Type: "ItemSpecialAction",
    Name: "Königlicher Kaperbrief",
    FileName: "3dicons/consumables/icon_marque_letter_2.png",
    Rarity: "Rare",
    RarityValue: 2,
    Allocation: "Warship",
    ExclusiveGroup: "Flag",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Diplomacy", Amount: 30}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 191986,
    Type: "ItemSpecialAction",
    Name: "Immunitätsbrief",
    FileName: "3dicons/consumables/icon_marque_letter_1.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    Allocation: "Ship",
    ExclusiveGroup: "Flag",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Diplomacy", Amount: 30}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 191992,
    Type: "ItemSpecialAction",
    Name: "Königlicher Immunitätsbrief",
    FileName: "3dicons/consumables/icon_marque_letter_3.png",
    Rarity: "Rare",
    RarityValue: 2,
    Allocation: "Ship",
    ExclusiveGroup: "Flag",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Diplomacy", Amount: 40}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 191999,
    Type: "ItemSpecialAction",
    Name: "Bombe",
    FileName: "3dicons/consumables/icon_suicide_bombs_1.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    Allocation: "Warship",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Might", Amount: 20}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 192000,
    Type: "ItemSpecialAction",
    Name: "TNT-​Bombe",
    FileName: "3dicons/consumables/icon_suicide_bombs_3.png",
    Rarity: "Rare",
    RarityValue: 2,
    Allocation: "Warship",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Might", Amount: 25}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 192001,
    Type: "ItemSpecialAction",
    Name: "Griechisches Feuer",
    FileName: "3dicons/consumables/icon_fire_bomb_1.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    Allocation: "Warship",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Might", Amount: 4}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 192002,
    Type: "ItemSpecialAction",
    Name: "Brandgranaten",
    FileName: "3dicons/consumables/icon_fire_bomb_2.png",
    Rarity: "Rare",
    RarityValue: 2,
    Allocation: "Warship",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Might", Amount: 5}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 192005,
    Type: "ItemSpecialAction",
    Name: "Kettenkugeln",
    FileName: "3dicons/consumables/icon_chainshot_1.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    Allocation: "Warship",
    ExclusiveGroup: "AutoAttackProjectile",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Might", Amount: 4}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 192006,
    Type: "ItemSpecialAction",
    Name: "Stangenkugeln",
    FileName: "3dicons/consumables/icon_chainshot_2.png",
    Rarity: "Rare",
    RarityValue: 2,
    Allocation: "Warship",
    ExclusiveGroup: "AutoAttackProjectile",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Might", Amount: 5}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 192007,
    Type: "ItemSpecialAction",
    Name: "Handels-​Charta",
    FileName: "3dicons/consumables/icon_tax_bill_1.png",
    Rarity: "Common",
    RarityValue: 0,
    Allocation: "Ship",
    ExclusiveGroup: "TradingTaxBill",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Diplomacy", Amount: 5}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 192008,
    Type: "ItemSpecialAction",
    Name: "Große Handels-​Charta",
    FileName: "3dicons/consumables/icon_tax_bill_2.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    Allocation: "Ship",
    ExclusiveGroup: "TradingTaxBill",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Diplomacy", Amount: 10}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 192012,
    Type: "ItemSpecialAction",
    Name: "Königliche Handels-​Charta",
    FileName: "3dicons/consumables/icon_tax_bill_3.png",
    Rarity: "Rare",
    RarityValue: 2,
    Allocation: "Ship",
    ExclusiveGroup: "TradingTaxBill",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Diplomacy", Amount: 15}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 192013,
    Type: "ItemSpecialAction",
    Name: "Dynamit",
    FileName: "3dicons/consumables/icon_dynamite_1.png",
    Rarity: "Common",
    RarityValue: 0,
    Allocation: "GuildHouse",
    EffectTargets: [
      {GUID: 190882}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Melee", Amount: 3},
        {Attribute: "Might", Amount: 2}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 192016,
    Type: "ItemSpecialAction",
    Name: "Große Kiste Dynamit",
    FileName: "3dicons/consumables/icon_dynamite_2.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    Allocation: "GuildHouse",
    EffectTargets: [
      {GUID: 190882}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Melee", Amount: 5},
        {Attribute: "Might", Amount: 4}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 192028,
    Type: "ItemSpecialAction",
    Name: "Armagnacflaschen",
    FileName: "3dicons/icon_rum.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    Allocation: "TownHall",
    EffectTargets: [
      {GUID: 190762}
    ],
    ExpeditionAttribute: {
      BaseMorale: 20,
      ExpeditionAttributes: []
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 192029,
    Type: "ItemSpecialAction",
    Name: "Kanne Milch",
    FileName: "3dicons/icon_sheep_milk.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    Allocation: "TownHall",
    EffectTargets: [
      {GUID: 190762}
    ],
    ExpeditionAttribute: {
      BaseMorale: 20,
      ExpeditionAttributes: []
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 192030,
    Type: "ItemSpecialAction",
    Name: "Großzügige Käseplatte",
    FileName: "3dicons/icon_sheep_cheese.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    Allocation: "TownHall",
    EffectTargets: [
      {GUID: 190762}
    ],
    ExpeditionAttribute: {
      BaseMorale: 20,
      ExpeditionAttributes: []
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 192031,
    Type: "ItemSpecialAction",
    Name: "Kessel Fischsuppe",
    FileName: "3dicons/icon_fish_stew.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    Allocation: "TownHall",
    EffectTargets: [
      {GUID: 190762}
    ],
    ExpeditionAttribute: {
      BaseMorale: 20,
      ExpeditionAttributes: []
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 192032,
    Type: "ItemSpecialAction",
    Name: "Sonntagsbraten",
    FileName: "3dicons/icon_beef_potatoes.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    Allocation: "TownHall",
    EffectTargets: [
      {GUID: 190762}
    ],
    ExpeditionAttribute: {
      BaseMorale: 20,
      ExpeditionAttributes: []
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 192033,
    Type: "ItemSpecialAction",
    Name: "Fahrradflickzeug",
    FileName: "3dicons/icon_tools.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    Allocation: "TownHall",
    EffectTargets: [
      {GUID: 190762}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Crafting", Amount: 5}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 192034,
    Type: "ItemSpecialAction",
    Name: "Nähgarn",
    FileName: "3dicons/icon_sheep_wool.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    Allocation: "TownHall",
    EffectTargets: [
      {GUID: 190762}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Crafting", Amount: 4}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 192035,
    Type: "ItemSpecialAction",
    Name: "Dosenfisch",
    FileName: "3dicons/icon_canned_food.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    Allocation: "TownHall",
    EffectTargets: [
      {GUID: 190762}
    ],
    ExpeditionAttribute: {
      BaseMorale: 20,
      ExpeditionAttributes: []
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 110955,
    Type: "ItemSpecialAction",
    Name: "Dr. Merciers Fahne der Freiheit",
    FileName: "3dicons/machine_items/icon_mercier_flag.png",
    Rarity: "Legendary",
    RarityValue: 4,
    Allocation: "Warship",
    EffectTargets: [
      {GUID: 191454}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Diplomacy", Amount: 50},
        {Attribute: "Faith", Amount: 30}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 110965,
    Type: "ItemSpecialAction",
    Name: "Anarchistisches Bomben-​Paket",
    FileName: "3dicons/consumables/icon_anarchist_bomb_pack_1.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    Allocation: "Warship",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Melee", Amount: 20}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 110966,
    Type: "ItemSpecialAction",
    Name: "Großes anarchistisches Bomben-​Paket",
    FileName: "3dicons/consumables/icon_anarchist_bomb_pack_2.png",
    Rarity: "Rare",
    RarityValue: 2,
    Allocation: "Warship",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Melee", Amount: 30}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 110982,
    Type: "ItemSpecialAction",
    Name: "Seemine",
    FileName: "3dicons/consumables/icon_seamine_1.png",
    Rarity: "Rare",
    RarityValue: 2,
    Allocation: "Warship",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Might", Amount: 30}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 110983,
    Type: "ItemSpecialAction",
    Name: "Haftmine",
    FileName: "3dicons/consumables/icon_seamine_2.png",
    Rarity: "Epic",
    RarityValue: 3,
    Allocation: "Warship",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Might", Amount: 40}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 110986,
    Type: "ItemSpecialAction",
    Name: "Anti-​Bourgeois Gasrohr",
    FileName: "3dicons/consumables/icon_gas_pipe_bomb.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    Allocation: "TownHall",
    EffectTargets: [
      {GUID: 1010346},
      {GUID: 1010347}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Melee", Amount: 10}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 110994,
    Type: "ItemSpecialAction",
    Name: "Anti-​Bourgeois Cocktail",
    FileName: "3dicons/consumables/icon_cocktail_bomb.png",
    Rarity: "Rare",
    RarityValue: 2,
    Allocation: "TownHall",
    EffectTargets: [
      {GUID: 1010346},
      {GUID: 1010347}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Melee", Amount: 30}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 110995,
    Type: "ItemSpecialAction",
    Name: "Anti-​Bourgeois Mitternachtsschlag",
    FileName: "3dicons/consumables/icon_midnight_call_bomb_2.png",
    Rarity: "Epic",
    RarityValue: 3,
    Allocation: "TownHall",
    EffectTargets: [
      {GUID: 1010346},
      {GUID: 1010347}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Melee", Amount: 40}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 110998,
    Type: "ItemSpecialAction",
    Name: "Leicht entzündliche Mischung",
    FileName: "3dicons/consumables/icon_bomb_recipe_1.png",
    Rarity: "Common",
    RarityValue: 0,
    Allocation: "GuildHouse",
    EffectTargets: [
      {GUID: 190882}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Crafting", Amount: 5}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 110999,
    Type: "ItemSpecialAction",
    Name: "Phosphor-Beschleuniger",
    FileName: "3dicons/consumables/icon_bomb_recipe_2.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    Allocation: "GuildHouse",
    EffectTargets: [
      {GUID: 190882}
    ],
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Crafting", Amount: 10},
        {Attribute: "Melee", Amount: 5}
      ]
    },
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 112558,
    Type: "ItemSpecialAction",
    Name: "Glas Würmer",
    FileName: "3dicons/consumables/item_fishbait_bocal.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    Allocation: "DivingVessel",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Hunting", Amount: 10}
      ]
    },
    CraftingCosts: [
      {Product: 112518, Amount: 5},
      {Product: 1010241, Amount: 5},
      {Product: 1010200, Amount: 10}
    ],
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 112559,
    Type: "ItemSpecialAction",
    Name: "Wanne sich windender Wattwürmer",
    FileName: "3dicons/consumables/item_fishbait_crate.png",
    Rarity: "Rare",
    RarityValue: 2,
    Allocation: "DivingVessel",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Hunting", Amount: 20}
      ]
    },
    CraftingCosts: [
      {Product: 112520, Amount: 15},
      {Product: 1010200, Amount: 10},
      {Product: 120042, Amount: 5}
    ],
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 112560,
    Type: "ItemSpecialAction",
    Name: "Kiste mit kriechendem Köder",
    FileName: "3dicons/consumables/item_fishbait_large_crate.png",
    Rarity: "Epic",
    RarityValue: 3,
    Allocation: "DivingVessel",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Hunting", Amount: 30}
      ]
    },
    CraftingCosts: [
      {Product: 112523, Amount: 10},
      {Product: 1010200, Amount: 20},
      {Product: 120042, Amount: 10},
      {Product: 1010193, Amount: 5}
    ],
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 112561,
    Type: "ItemSpecialAction",
    Name: "Kleiner MagNate",
    FileName: "3dicons/machine_items/icon_bigmagnet_01.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    Allocation: "DivingVessel",
    ExclusiveGroup: "Cables",
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    CraftingCosts: [
      {Product: 112518, Amount: 5},
      {Product: 1010227, Amount: 10},
      {Product: 1010197, Amount: 10}
    ],
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 112562,
    Type: "ItemSpecialAction",
    Name: "Großer MagNate",
    FileName: "3dicons/machine_items/icon_bigmagnet_02.png",
    Rarity: "Rare",
    RarityValue: 2,
    Allocation: "DivingVessel",
    ExclusiveGroup: "Cables",
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    CraftingCosts: [
      {Product: 112520, Amount: 5},
      {Product: 1010227, Amount: 15},
      {Product: 1010197, Amount: 20}
    ],
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 112563,
    Type: "ItemSpecialAction",
    Name: "Riesiger MagNate",
    FileName: "3dicons/machine_items/icon_bigmagnet_03.png",
    Rarity: "Epic",
    RarityValue: 3,
    Allocation: "DivingVessel",
    ExclusiveGroup: "Cables",
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    CraftingCosts: [
      {Product: 112523, Amount: 5},
      {Product: 1010227, Amount: 20},
      {Product: 1010219, Amount: 15}
    ],
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 112564,
    Type: "ItemSpecialAction",
    Name: "Kleines Beutenetz",
    FileName: "3dicons/consumables/item_filter_02.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    Allocation: "DivingVessel",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Hunting", Amount: 10}
      ]
    },
    CraftingCosts: [
      {Product: 112518, Amount: 20},
      {Product: 1010197, Amount: 5},
      {Product: 1010196, Amount: 10}
    ],
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 112565,
    Type: "ItemSpecialAction",
    Name: "Mittleres Beutenetz",
    FileName: "3dicons/consumables/item_filter_01.png",
    Rarity: "Rare",
    RarityValue: 2,
    Allocation: "DivingVessel",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Hunting", Amount: 20}
      ]
    },
    CraftingCosts: [
      {Product: 112520, Amount: 20},
      {Product: 1010197, Amount: 10},
      {Product: 1010196, Amount: 15}
    ],
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 112566,
    Type: "ItemSpecialAction",
    Name: "Großes Beutenetz",
    FileName: "3dicons/consumables/item_filter_3.png",
    Rarity: "Epic",
    RarityValue: 3,
    Allocation: "DivingVessel",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Hunting", Amount: 30}
      ]
    },
    CraftingCosts: [
      {Product: 112523, Amount: 20},
      {Product: 1010197, Amount: 20},
      {Product: 1010196, Amount: 25},
      {Product: 1010255, Amount: 20}
    ],
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 112567,
    Type: "ItemSpecialAction",
    Name: "Küstenbagger",
    FileName: "3dicons/consumables/icon_crane_01.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    Allocation: "DivingVessel",
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    CraftingCosts: [
      {Product: 112518, Amount: 10},
      {Product: 1010219, Amount: 5},
      {Product: 1010230, Amount: 10}
    ],
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 112568,
    Type: "ItemSpecialAction",
    Name: "Meeresbagger",
    FileName: "3dicons/consumables/icon_crane_02.png",
    Rarity: "Rare",
    RarityValue: 2,
    Allocation: "DivingVessel",
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    CraftingCosts: [
      {Product: 112520, Amount: 10},
      {Product: 1010219, Amount: 10},
      {Product: 1010230, Amount: 5}
    ],
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 112569,
    Type: "ItemSpecialAction",
    Name: "Tiefseegrabenbagger",
    FileName: "3dicons/consumables/icon_crane_03.png",
    Rarity: "Epic",
    RarityValue: 3,
    Allocation: "DivingVessel",
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    CraftingCosts: [
      {Product: 112523, Amount: 10},
      {Product: 1010219, Amount: 15},
      {Product: 1010230, Amount: 10},
      {Product: 1010229, Amount: 10}
    ],
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 112879,
    Type: "ItemSpecialAction",
    Name: "Mechanischer Wäscher",
    FileName: "3dicons/consumables/icon_gold_ore_finder_3.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    Allocation: "HarborOffice",
    EffectTargets: [
      {GUID: 1010560}
    ],
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    CraftingCosts: [
      {Product: 112518, Amount: 10},
      {Product: 1010219, Amount: 10},
      {Product: 1010255, Amount: 10}
    ],
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 112880,
    Type: "ItemSpecialAction",
    Name: "Gyroskopischer Goldwäscher",
    FileName: "3dicons/consumables/icon_gold_ore_finder_2.png",
    Rarity: "Rare",
    RarityValue: 2,
    Allocation: "HarborOffice",
    EffectTargets: [
      {GUID: 1010560}
    ],
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    CraftingCosts: [
      {Product: 112520, Amount: 10},
      {Product: 1010219, Amount: 5},
      {Product: 1010255, Amount: 10}
    ],
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 112881,
    Type: "ItemSpecialAction",
    Name: "Prospektor der Glücksseligkeit",
    FileName: "3dicons/consumables/icon_gold_ore_finder_1.png",
    Rarity: "Epic",
    RarityValue: 3,
    Allocation: "HarborOffice",
    EffectTargets: [
      {GUID: 1010560}
    ],
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    CraftingCosts: [
      {Product: 112523, Amount: 5},
      {Product: 1010219, Amount: 15},
      {Product: 1010255, Amount: 15}
    ],
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 112882,
    Type: "ItemSpecialAction",
    Name: "Erzexkavator",
    FileName: "3dicons/consumables/icon_ore_finder_3.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    Allocation: "GuildHouse",
    EffectTargets: [
      {GUID: 190882}
    ],
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    CraftingCosts: [
      {Product: 112518, Amount: 10},
      {Product: 1010219, Amount: 10}
    ],
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 112883,
    Type: "ItemSpecialAction",
    Name: "Extra-​Erzexkavator",
    FileName: "3dicons/consumables/icon_ore_finder_2.png",
    Rarity: "Rare",
    RarityValue: 2,
    Allocation: "GuildHouse",
    EffectTargets: [
      {GUID: 190882}
    ],
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    CraftingCosts: [
      {Product: 112520, Amount: 10},
      {Product: 1010219, Amount: 10},
      {Product: 1010224, Amount: 3}
    ],
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 112884,
    Type: "ItemSpecialAction",
    Name: "Ertragreicher Erzengel",
    FileName: "3dicons/consumables/icon_ore_finder_1.png",
    Rarity: "Epic",
    RarityValue: 3,
    Allocation: "GuildHouse",
    EffectTargets: [
      {GUID: 190882}
    ],
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    CraftingCosts: [
      {Product: 112523, Amount: 5},
      {Product: 1010219, Amount: 15},
      {Product: 1010224, Amount: 5}
    ],
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 112885,
    Type: "ItemSpecialAction",
    Name: "Ölsauger",
    FileName: "3dicons/consumables/icon_oil_extractor_3.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    Allocation: "GuildHouse",
    EffectTargets: [
      {GUID: 191042}
    ],
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    CraftingCosts: [
      {Product: 112518, Amount: 10},
      {Product: 1010219, Amount: 5}
    ],
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 112886,
    Type: "ItemSpecialAction",
    Name: "Super-​Ölsauger",
    FileName: "3dicons/consumables/icon_oil_extractor_2.png",
    Rarity: "Rare",
    RarityValue: 2,
    Allocation: "GuildHouse",
    EffectTargets: [
      {GUID: 191042}
    ],
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    CraftingCosts: [
      {Product: 112520, Amount: 10},
      {Product: 1010219, Amount: 10},
      {Product: 1010204, Amount: 5}
    ],
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 112887,
    Type: "ItemSpecialAction",
    Name: "Nativer Ölsauger",
    FileName: "3dicons/consumables/icon_oil_extractor_1.png",
    Rarity: "Epic",
    RarityValue: 3,
    Allocation: "GuildHouse",
    EffectTargets: [
      {GUID: 191042}
    ],
    ExpeditionAttribute: {
      BaseMorale: 10,
      ExpeditionAttributes: []
    },
    CraftingCosts: [
      {Product: 112523, Amount: 5},
      {Product: 1010219, Amount: 10},
      {Product: 1010204, Amount: 10},
      {Product: 1010249, Amount: 5}
    ],
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 112574,
    Type: "ItemSpecialAction",
    Name: "DetoNateur",
    FileName: "3dicons/ship_military/icon_seamine_4.png",
    Rarity: "Uncommon",
    RarityValue: 1,
    Allocation: "Ship",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Might", Amount: 20}
      ]
    },
    CraftingCosts: [
      {Product: 112518, Amount: 10},
      {Product: 1010222, Amount: 5},
      {Product: 1010232, Amount: 5}
    ],
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 112576,
    Type: "ItemSpecialAction",
    Name: "KarboNateur",
    FileName: "3dicons/ship_military/icon_seamine_5.png",
    Rarity: "Rare",
    RarityValue: 2,
    Allocation: "Ship",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Might", Amount: 30}
      ]
    },
    CraftingCosts: [
      {Product: 112520, Amount: 10},
      {Product: 1010222, Amount: 5},
      {Product: 1010232, Amount: 5},
      {Product: 1010216, Amount: 10}
    ],
    LastChange: "2020-10-22T14:08:37.000Z"
  },
  {
    GUID: 112578,
    Type: "ItemSpecialAction",
    Name: "Der Minotaurus",
    FileName: "3dicons/ship_military/icon_seamine_6.png",
    Rarity: "Epic",
    RarityValue: 3,
    Allocation: "Ship",
    ExpeditionAttribute: {
      BaseMorale: 0,
      ExpeditionAttributes: [
        {Attribute: "Might", Amount: 40}
      ]
    },
    CraftingCosts: [
      {Product: 112523, Amount: 10},
      {Product: 1010222, Amount: 5},
      {Product: 1010232, Amount: 5},
      {Product: 1010257, Amount: 10}
    ],
    LastChange: "2020-10-22T14:08:37.000Z"
  }
]
