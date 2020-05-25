export default [
// https://anno1800.fandom.com/wiki/Influence#Investment_in_one_category

  /*
    Propaganda
    Trade
        Trading ships
        Charter routes
        Airships (The Passage DLC)
    Military
        Warships
        Defences
    Optimisation
        Harbourmaster’s Offices
        Town Halls
        Trade Unions
    Culture
        Zoo
        Museum
        Botanical Garden (Botanica DLC)
    Expansion
        Islands
        Commuter Piers
        Shares
  */

  {
    type: undefined,
    comment: 'levels of invested influence',
    steps: [50, 150, 300],
  },
  {
    type: 'Propaganda',
    effect: 'newspaper effectiveness',
    percents: [+7, +15, +25],
  },
  {
    type: 'Optimisation',
    effect: 'maintenance',
    strengthPerInvest: [-3, -6, -10],
  },
  {
    type: 'Expansion',
    effect: 'Additional workforce of every tier on every island',
    number: [+50, +100, +200],
    //Islands: 1 Influence per 1000 tiles, first 100 free
  },




]
