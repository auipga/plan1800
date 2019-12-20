// exp arch 1/3 rede glaube heil       flag 36   schoner 22+10     kanonen 32     klipper 22+50      linien 52+20
// exp arch 1/3 rede heil navi         flag 51   schoner 42+10     kanonen 52     klipper 42+50      linien 52+20
// piraten  1/3 gefecht kampf heil     flag 56   schoner 22+10     kanonen 42     klipper 22+50      linien 100
// exp arch 2/3 rede kampf glaube      flag  9    schoner  8     kanonen  8     klipper 18      linien 18
// exp zoo  3/3 Jagd navi heil         flag  6    schoner  6     kanonen  6     klipper 11      linien  9
// exp arch 1/3 rede geschick jagd  *   flag 36   schoner 22+10     kanonen 32     klipper 22+50      linien 52+20


export const types = [
  "expedition_generic",
  "expedition_exploration", // Discovery
  "expedition_rescue_mission",
  "expedition_wildlife", // Zoological
  "expedition_archeology", // Archeological
  "expedition_botanical", // Botanical
  "pirate_hunt",
]

export const skills = [
  "Crafting",
  "Diplomacy",
  "Faith",
  "Force",
  "Hunting",
  "Medicine",
  "Might",
  "Navigation",
]

export const advises = [
  // höchst wahrscheinlich, wahrscheinlich, möglicherweise
  // daten aus https://youtu.be/dr2ELYVjxtw?t=1539
  "Extra_rations",
  ...skills
]

export const bonusTypes = [
  "Base_morale",
  "Skill_bonus",
  ...advises
]

export const explorationStates = {
  "locked": {
    /*kein Icon, oder Schloss overlay*/
    img: '',
    alt: '',
  },
  "expedition_planable": {
    /*alle goods, ships "frei"schalten*/
    img: '',
    alt: 'plannable',
  },
  "expedition_planned": {
    /*volle kiste, disabled*/
    img: '',
    alt: '',
  },
  "expedition_preparable": {
    /*nur aktuelles Inventar nutzen*/
    img: '',
    alt: ' (explorable!)',
  },
  "expedition_prepared": {
    /*volle kiste*/
    img: '',
    alt: '',
  },
  "expedition_started": {
    /*zeit oder sanduhren*/
    img: '',
    alt: '',
  },
  "expedition_event_decition": {
    /*fragezeichen*/ /*das zu verlierende Item ist geliehen von HK xy, es ist optional/essenziell*/
    img: '',
    alt: '',
  },
}
