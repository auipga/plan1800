export const all = [
  /*
  regex ->
  "(\w*)":
  $1:

  hasSubgroups: true
  find: {GUID: 19
  */
  {
    GUID: 6000018,
    Name: "Alle Produktionsgebäude", //"all production",
    target_: "produktion",
    TargetPool: [
      {GUID: 1010262, Name: "Getreidefarm"},
      {GUID: 1010263, Name: "Rinderfarm"},
      {GUID: 1010264, Name: "Hopfenplantage"},
      {GUID: 1010265, Name: "Kartoffelhof"},
      {GUID: 1010266, Name: "Holzfällerhütte"},
      {GUID: 1010267, Name: "Schäferei"},
      {GUID: 1010269, Name: "Schweinezucht"},
      {GUID: 1010558, Name: "Jagdhütte"},
      {GUID: 100655, Name: "Weinberg"},
      {GUID: 100654, Name: "Paprikafarm"},
      {GUID: 1010278, Name: "Fischerei"},
      {GUID: 1010310, Name: "Salpeterwerk"},
      {GUID: 1010560, Name: "Quarzgrube"},
      {GUID: 1010280, Name: "Betonwerk"},
      {GUID: 1010281, Name: "Siederei"},
      {GUID: 100451, Name: "Sägewerk"},
      {GUID: 1010283, Name: "Ziegelei"},
      {GUID: 1010284, Name: "Nähmaschinenfabrik"},
      {GUID: 1010286, Name: "Glühbirnenfabrik"},
      {GUID: 1010285, Name: "Fensterfabrik"},
      {GUID: 1010288, Name: "Segelweberei"},
      {GUID: 1010289, Name: "Kutschen-Werkhalle"},
      {GUID: 100416, Name: "Lehmgrube"},
      {GUID: 1010291, Name: "Bäckerei"},
      {GUID: 1010292, Name: "Brauerei"},
      {GUID: 1010293, Name: "Großküche"},
      {GUID: 1010295, Name: "Konservenfabrik"},
      {GUID: 1010294, Name: "Schnapsbrennerei"},
      {GUID: 1010316, Name: "Metzgerei"},
      {GUID: 100659, Name: "Sektkellerei"},
      {GUID: 1010296, Name: "Stahlwerk"},
      {GUID: 1010297, Name: "Hochofen"},
      {GUID: 1010298, Name: "Köhlerei"},
      {GUID: 1010299, Name: "Kanonengießerei"},
      {GUID: 1010301, Name: "Geschützfabrik"},
      {GUID: 1010302, Name: "Motorenfabrik"},
      {GUID: 1010303, Name: "Dampfwagenfabrik"},
      {GUID: 1010282, Name: "Messinghütte"},
      {GUID: 101331, Name: "Ölraffinerie"},
      {GUID: 1010304, Name: "Kohlemine"},
      {GUID: 1010305, Name: "Eisenmine"},
      {GUID: 1010307, Name: "Zinkmine"},
      {GUID: 1010308, Name: "Kupfermine"},
      {GUID: 1010309, Name: "Zementmine"},
      {GUID: 1010311, Name: "Goldmine"},
      {GUID: 1010312, Name: "Wasenmeisterei"},
      {GUID: 1010313, Name: "Mühle"},
      {GUID: 1010314, Name: "Mälzerei"},
      {GUID: 1010315, Name: "Weberei"},
      {GUID: 1010300, Name: "Dynamitfabrik"},
      {GUID: 1010319, Name: "Glashütte"},
      {GUID: 1010320, Name: "Kunstschreinerei"},
      {GUID: 1010321, Name: "Glühfadenfabrik"},
      {GUID: 1010323, Name: "Hochrad-Werkhalle"},
      {GUID: 1010324, Name: "Uhrenwerkstatt"},
      {GUID: 1010325, Name: "Schneiderei"},
      {GUID: 1010326, Name: "Phonographenfabrik"},
      {GUID: 1010327, Name: "Goldschmelze"},
      {GUID: 1010328, Name: "Goldschmiede"},
      {GUID: 101250, Name: "Brillenfabrik"},
      {GUID: 1010329, Name: "Zuckerrohrplantage"},
      {GUID: 1010330, Name: "Tabakplantage"},
      {GUID: 1010331, Name: "Baumwollplantage"},
      {GUID: 1010332, Name: "Kakaoplantage"},
      {GUID: 1010333, Name: "Kautschuckplantage"},
      {GUID: 101260, Name: "Holzfällerhütte"},
      {GUID: 101251, Name: "Kaffeeplantage"},
      {GUID: 101263, Name: "Bananenplantage"},
      {GUID: 101269, Name: "Rinderfarm"},
      {GUID: 101270, Name: "Maisplantage"},
      {GUID: 101272, Name: "Alpakafarm"},
      {GUID: 1010342, Name: "Zigarren-Manufaktur"},
      {GUID: 1010339, Name: "Perlenfarm"},
      {GUID: 101262, Name: "Fischölfabrik"},
      {GUID: 101303, Name: "Salpeterwerk"},
      {GUID: 101261, Name: "Sägewerk"},
      {GUID: 101265, Name: "Segelweberei"},
      {GUID: 1010318, Name: "Baumwollweberei"},
      {GUID: 101267, Name: "Lehmgrube"},
      {GUID: 101268, Name: "Ziegelei"},
      {GUID: 101415, Name: "Filzfabrik"},
      {GUID: 101273, Name: "Hutmacherei"},
      {GUID: 1010340, Name: "Rumbrennerei"},
      {GUID: 1010341, Name: "Schokoladenfabrik"},
      {GUID: 101252, Name: "Kaffeerösterei"},
      {GUID: 101264, Name: "Küche"},
      {GUID: 101271, Name: "Tortilla-Bäckerei"},
      {GUID: 1010561, Name: "Ölraffinerie"},
      {GUID: 1010317, Name: "Zuckerraffinerie"},
      {GUID: 101266, Name: "Ponchoweberei"},
      {GUID: 101296, Name: "Kunstschreinerei"},
      {GUID: 1010342, Name: "Zigarren-Manufaktur"},
      {GUID: 100780, Name: "Kraftwerk"},
      {GUID: 101311, Name: "Goldmine"}
    ],
  },
  {
    GUID: 190011,
    Name: "_all farms", //"all farms",
    target_: "produktion",
    TargetPool: [
      {GUID: 1010262, Name: "Getreidefarm"},
      {GUID: 1010263, Name: "Rinderfarm"},
      {GUID: 1010264, Name: "Hopfenplantage"},
      {GUID: 1010265, Name: "Kartoffelhof"},
      {GUID: 1010266, Name: "Holzfällerhütte"},
      {GUID: 1010267, Name: "Schäferei"},
      {GUID: 1010269, Name: "Schweinezucht"},
      {GUID: 1010558, Name: "Jagdhütte"},
      {GUID: 100655, Name: "Weinberg"},
      {GUID: 100654, Name: "Paprikafarm"},
      {GUID: 1010329, Name: "Zuckerrohrplantage"},
      {GUID: 1010330, Name: "Tabakplantage"},
      {GUID: 1010331, Name: "Baumwollplantage"},
      {GUID: 1010332, Name: "Kakaoplantage"},
      {GUID: 1010333, Name: "Kautschuckplantage"},
      {GUID: 101260, Name: "Holzfällerhütte"},
      {GUID: 101251, Name: "Kaffeeplantage"},
      {GUID: 101263, Name: "Bananenplantage"},
      {GUID: 101269, Name: "Rinderfarm"},
      {GUID: 101270, Name: "Maisplantage"},
      {GUID: 101272, Name: "Alpakafarm"}
    ],
  },
  {
    GUID: 190041,
    Name: "Alle Wohngebäude der Alten Welt", //"all residences in EU",
    target_: "wohngebäude",
    TargetPool: [
      {GUID: 1010343, Name: "Bauernhaus"},
      {GUID: 1010344, Name: "Arbeiterhaus"},
      {GUID: 1010345, Name: "Handwerkerhaus"},
      {GUID: 1010346, Name: "Ingenieurshaus"},
      {GUID: 1010347, Name: "Investorenhaus"}
    ],
  },
  {
    GUID: 190136,
    Name: "Alle öffentlichen Gebäude", //"all public",
    target_: "öffentlich",
    TargetPool: [
      {GUID: 1010372, Name: "Marktplatz"},
      {GUID: 1010358, Name: "Wirtshaus"},
      {GUID: 1010359, Name: "Kirche"},
      {GUID: 1010360, Name: "Schule"},
      {GUID: 1010361, Name: "Varieté"},
      {GUID: 1010362, Name: "Universität"},
      {GUID: 1010364, Name: "Clubhaus"},
      {GUID: 1010365, Name: "Bankhaus"},
      {GUID: 100780, Name: "Kraftwerk"},
      {GUID: 117547, Name: "Gasbetriebenes Kraftwerk"}
    ],
  },
  {
    GUID: 190604,
    Name: "_all trade ships", //"all trade ships",
    target_: "schiffe",
    TargetPool: [
      {GUID: 100438, Name: "Schoner"},
      {GUID: 100441, Name: "Klipper"},
      {GUID: 1010062, Name: "Frachtschiff"},
      {GUID: 101121, Name: "Flaggschiff"},
      {GUID: 100853, Name: "Öltanker"},
      {GUID: 102455, Name: "Extravaganter Dampfer"},
      {GUID: 102437, Name: "Imperiales Flaggschiff"}
    ],
  },
  {
    GUID: 190608,
    Name: "_all military units", //"all military units",
    target_: "schiffe",
    TargetPool: [
      {GUID: 101121, Name: "Flaggschiff"},
      {GUID: 100437, Name: "Kanonenboot"},
      {GUID: 100439, Name: "Fregatte"},
      {GUID: 100440, Name: "Linienschiff"},
      {GUID: 100442, Name: "Schlachtkreuzer"},
      {GUID: 100443, Name: "Monitor"},
      {GUID: 1010522, Name: "Geschützstellung"},
      {GUID: 1010523, Name: "Kanonenturm"},
      {GUID: 1010524, Name: "Dicke Berta"},
      {GUID: 102420, Name: "Piraten-Kanonenboot"},
      {GUID: 102421, Name: "Piraten-Fregatte"},
      {GUID: 102419, Name: "Piraten-Linienschiff"},
      {GUID: 102422, Name: "Piraten-Monitor"},
      {GUID: 102423, Name: "Pyrphorischer Monitor"},
      {GUID: 102425, Name: "Pyrphorischer Schlachtkreuzer"},
      {GUID: 102428, Name: "Pyrphorisches Kriegsschiff"},
      {GUID: 102427, Name: "Königliches Linienschiff"},
      {GUID: 101563, Name: "Geschützstellung"},
      {GUID: 101570, Name: "Kanonenturm"},
      {GUID: 101571, Name: "Dicke Berta"},
      {GUID: 190797, Name: "Alle Kontore"},
      {GUID: 102437, Name: "Imperiales Flaggschiff"}
    ],
    hasSubgroups: true,
  },
  {
    GUID: 190609,
    Name: "_all zoo and museum", //"all zoo and museum",
    target_: "culture",
    TargetPool: [
      {GUID: 1010470, Name: "Zoo"},
      {GUID: 1010471, Name: "Museum"},
      {GUID: 102282, Name: "Zoo"},
      {GUID: 102283, Name: "Museum"}
    ],
  },
  {
    GUID: 190611,
    Name: "Alle Gebäude mit Unterhaltskosten", //"all buildings with maintenance",
    target_: "mixed",
    TargetPool: [
      {GUID: 1010262, Name: "Getreidefarm"},
      {GUID: 1010263, Name: "Rinderfarm"},
      {GUID: 1010264, Name: "Hopfenplantage"},
      {GUID: 1010265, Name: "Kartoffelhof"},
      {GUID: 1010266, Name: "Holzfällerhütte"},
      {GUID: 1010267, Name: "Schäferei"},
      {GUID: 1010269, Name: "Schweinezucht"},
      {GUID: 1010558, Name: "Jagdhütte"},
      {GUID: 100655, Name: "Weinberg"},
      {GUID: 100654, Name: "Paprikafarm"},
      {GUID: 1010278, Name: "Fischerei"},
      {GUID: 1010310, Name: "Salpeterwerk"},
      {GUID: 1010560, Name: "Quarzgrube"},
      {GUID: 1010280, Name: "Betonwerk"},
      {GUID: 1010281, Name: "Siederei"},
      {GUID: 100451, Name: "Sägewerk"},
      {GUID: 1010283, Name: "Ziegelei"},
      {GUID: 1010284, Name: "Nähmaschinenfabrik"},
      {GUID: 1010285, Name: "Fensterfabrik"},
      {GUID: 1010286, Name: "Glühbirnenfabrik"},
      {GUID: 1010288, Name: "Segelweberei"},
      {GUID: 1010289, Name: "Kutschen-Werkhalle"},
      {GUID: 1010291, Name: "Bäckerei"},
      {GUID: 1010292, Name: "Brauerei"},
      {GUID: 1010293, Name: "Großküche"},
      {GUID: 1010295, Name: "Konservenfabrik"},
      {GUID: 1010294, Name: "Schnapsbrennerei"},
      {GUID: 1010316, Name: "Metzgerei"},
      {GUID: 100659, Name: "Sektkellerei"},
      {GUID: 1010296, Name: "Stahlwerk"},
      {GUID: 1010297, Name: "Hochofen"},
      {GUID: 1010298, Name: "Köhlerei"},
      {GUID: 1010299, Name: "Kanonengießerei"},
      {GUID: 1010301, Name: "Geschützfabrik"},
      {GUID: 1010302, Name: "Motorenfabrik"},
      {GUID: 1010303, Name: "Dampfwagenfabrik"},
      {GUID: 1010282, Name: "Messinghütte"},
      {GUID: 1010304, Name: "Kohlemine"},
      {GUID: 1010305, Name: "Eisenmine"},
      {GUID: 100416, Name: "Lehmgrube"},
      {GUID: 1010307, Name: "Zinkmine"},
      {GUID: 1010308, Name: "Kupfermine"},
      {GUID: 1010309, Name: "Zementmine"},
      {GUID: 1010311, Name: "Goldmine"},
      {GUID: 1010312, Name: "Wasenmeisterei"},
      {GUID: 1010313, Name: "Mühle"},
      {GUID: 1010314, Name: "Mälzerei"},
      {GUID: 1010315, Name: "Weberei"},
      {GUID: 1010300, Name: "Dynamitfabrik"},
      {GUID: 1010319, Name: "Glashütte"},
      {GUID: 1010320, Name: "Kunstschreinerei"},
      {GUID: 1010321, Name: "Glühfadenfabrik"},
      {GUID: 1010323, Name: "Hochrad-Werkhalle"},
      {GUID: 1010324, Name: "Uhrenwerkstatt"},
      {GUID: 1010325, Name: "Schneiderei"},
      {GUID: 1010326, Name: "Phonographenfabrik"},
      {GUID: 1010327, Name: "Goldschmelze"},
      {GUID: 1010328, Name: "Goldschmiede"},
      {GUID: 1010329, Name: "Zuckerrohrplantage"},
      {GUID: 1010330, Name: "Tabakplantage"},
      {GUID: 1010331, Name: "Baumwollplantage"},
      {GUID: 1010332, Name: "Kakaoplantage"},
      {GUID: 1010333, Name: "Kautschuckplantage"},
      {GUID: 1010339, Name: "Perlenfarm"},
      {GUID: 1010340, Name: "Rumbrennerei"},
      {GUID: 1010341, Name: "Schokoladenfabrik"},
      {GUID: 1010561, Name: "Ölraffinerie"},
      {GUID: 1010317, Name: "Zuckerraffinerie"},
      {GUID: 1010318, Name: "Baumwollweberei"},
      {GUID: 1010342, Name: "Zigarren-Manufaktur"},
      {GUID: 1010516, Name: "Handelskammer"},
      {GUID: 100415, Name: "Rathaus"},
      {GUID: 100586, Name: "Hafenmeisterei"},
      {GUID: 1010522, Name: "Geschützstellung"},
      {GUID: 1010523, Name: "Kanonenturm"},
      {GUID: 1010524, Name: "Dicke Berta"},
      {GUID: 1010358, Name: "Wirtshaus"},
      {GUID: 1010360, Name: "Schule"},
      {GUID: 1010365, Name: "Bankhaus"},
      {GUID: 1010359, Name: "Kirche"},
      {GUID: 1010361, Name: "Varieté"},
      {GUID: 1010362, Name: "Universität"},
      {GUID: 1010364, Name: "Clubhaus"},
      {GUID: 1010462, Name: "Polizeiwache"},
      {GUID: 1010463, Name: "Feuerwache"},
      {GUID: 1010464, Name: "Hospital"},
      {GUID: 1010372, Name: "Marktplatz"},
      {GUID: 1010371, Name: "Lagerhaus"},
      {GUID: 100516, Name: "Lagerhalle"},
      {GUID: 100517, Name: "Magazin"},
      {GUID: 1010470, Name: "Zoo"},
      {GUID: 1010471, Name: "Museum"},
      {GUID: 100779, Name: "Kohlekraftwerk"},
      {GUID: 100780, Name: "Kraftwerk"},
      {GUID: 1010517, Name: "Kleines Kontor"},
      {GUID: 100510, Name: "Mittleres Kontor"},
      {GUID: 100511, Name: "Großes Kontor"},
      {GUID: 1010540, Name: "[AssetData(1010517) Text]"},
      {GUID: 100514, Name: "Mittleres Kontor"},
      {GUID: 100515, Name: "Großes Kontor"},
      {GUID: 1010519, Name: "Depot"},
      {GUID: 1010525, Name: "Reparaturkran"},
      {GUID: 100519, Name: "Anlegestelle"},
      {GUID: 1010489, Name: "Weltausstellung: Fundament"},
      {GUID: 1010490, Name: "Weltausstellung: Hochbau"},
      {GUID: 1010491, Name: "Weltausstellung: Infrastruktur"},
      {GUID: 1010492, Name: "Weltausstellung"},
      {GUID: 190783, Name: "Schiffswerften"},
      {GUID: 114703, Name: "Holzfällerhütte"},
      {GUID: 112667, Name: "Rentier-Jagdhütte"},
      {GUID: 112676, Name: "Gänsefarm"},
      {GUID: 112673, Name: "Bären-Jagdhütte"},
      {GUID: 112682, Name: "Huskyfarm"},
      {GUID: 116034, Name: "Meisterhafte Jagdhütte"},
      {GUID: 114705, Name: "Köhlerei"},
      {GUID: 112666, Name: "Walfängerei"},
      {GUID: 112674, Name: "Robbenfängerei"},
      {GUID: 114704, Name: "Sägewerk"},
      {GUID: 112675, Name: "Schlafsackfabrik"},
      {GUID: 112679, Name: "Öllampenfabrik"},
      {GUID: 112672, Name: "Parkaschneiderei"},
      {GUID: 112681, Name: "Schlittenmanufaktur"},
      {GUID: 112680, Name: "Hundeschlitten-Station"},
      {GUID: 112668, Name: "Pemmikan-Räucherei"},
      {GUID: 112690, Name: "Gasförderstätte"},
      {GUID: 116029, Name: "Tiefe Goldmine"},
      {GUID: 114889, Name: "Kantine"},
      {GUID: 112684, Name: "Postamt"},
      {GUID: 112669, Name: "Polarwacht"},
      {GUID: 112656, Name: "Lagerhaus"},
      {GUID: 112657, Name: "Lagerhalle"},
      {GUID: 112658, Name: "Magazin"},
      {GUID: 112689, Name: "Luftschiff-Hangar"},
      {GUID: 114751, Name: "Heizofen"},
      {GUID: 117547, Name: "Gasbetriebenes Kraftwerk"},
      {GUID: 112670, Name: "Depot"},
      {GUID: 112671, Name: "Kanonenturm"},
      {GUID: 116030, Name: "Anlegestelle"},
      {GUID: 112678, Name: "Quartier"}
    ],
    hasSubgroups: true,
  },
  {
    GUID: 190762,
    Name: "Wohngebäude", //"all residences EU & SA",
    target_: "wohngebäude",
    TargetPool: [
      {GUID: 1010343, Name: "Bauernhaus"},
      {GUID: 1010344, Name: "Arbeiterhaus"},
      {GUID: 1010345, Name: "Handwerkerhaus"},
      {GUID: 1010346, Name: "Ingenieurshaus"},
      {GUID: 1010347, Name: "Investorenhaus"},
      {GUID: 101254, Name: "Jornalero-Haus"},
      {GUID: 101255, Name: "Obrero-Haus"}
    ],
  },
  {
    GUID: 190775,
    Name: "Feuerwachen", //"all fire stations",
    target_: "öffentlich",
    TargetPool: [
      {GUID: 1010463, Name: "Feuerwache"},
      {GUID: 101275, Name: "Feuerwache"}
    ],
  },
  {
    GUID: 190776,
    Name: "Polizeireviere", //"all police stations",
    target_: "öffentlich",
    TargetPool: [
      {GUID: 1010462, Name: "Polizeiwache"},
      {GUID: 101274, Name: "Polizeirevier"}
    ],
  },
  {
    GUID: 190777,
    Name: "Krankenhäuser", //"all hospitals",
    target_: "öffentlich",
    TargetPool: [
      {GUID: 1010464, Name: "Hospital"},
      {GUID: 101276, Name: "Hospital"}
    ],
  },
  {
    GUID: 190778,
    Name: "Holzfällerhütten", //"all timber yards",
    target_: "produktion",
    TargetPool: [
      {GUID: 1010266, Name: "Holzfällerhütte"},
      {GUID: 101260, Name: "Holzfällerhütte"}
    ],
  },
  {
    GUID: 190779,
    Name: "Fischereien", //"all fisheries",
    target_: "produktion",
    TargetPool: [
      {GUID: 1010278, Name: "Fischerei"},
      {GUID: 101262, Name: "Fischölfabrik"}
    ],
  },
  {
    GUID: 190781,
    Name: "Rathäuser", //"all town halls",
    target_: "öffentlich",
    TargetPool: [
      {GUID: 100415, Name: "Rathaus"},
      {GUID: 101285, Name: "Rathaus"}
    ],
  },
  {
    GUID: 190782,
    Name: "Wirtshäuser", //"all pubs",
    target_: "öffentlich",
    TargetPool: [
      {GUID: 1010358, Name: "Wirtshaus"}
    ],
  },
  {
    GUID: 190783,
    Name: "Schiffswerften", //"all shipyards",
    target_: "schiffbau",
    TargetPool: [
      {GUID: 1010520, Name: "Segelschiffswerft"},
      {GUID: 1010521, Name: "Dampfschiffswerft"},
      {GUID: 101277, Name: "Segelschiffswerft"}
    ],
  },
  {
    GUID: 190784,
    Name: "Kirchen", //"all churches",
    target_: "öffentlich",
    TargetPool: [
      {GUID: 1010359, Name: "Kirche"},
      {GUID: 101258, Name: "Kapelle"}
    ],
  },
  {
    GUID: 190785,
    Name: "Kartoffelhöfe", //"all potato farms",
    target_: "produktion",
    TargetPool: [
      {GUID: 1010265, Name: "Kartoffelhof"},
      {GUID: 101263, Name: "Bananenplantage"}
    ],
  },
  {
    GUID: 190786,
    Name: "Alle Minen und Steinbrüche", //"all mines",
    target_: "produktion",
    TargetPool: [
      {GUID: 1010304, Name: "Kohlemine"},
      {GUID: 1010305, Name: "Eisenmine"},
      {GUID: 1010307, Name: "Zinkmine"},
      {GUID: 1010308, Name: "Kupfermine"},
      {GUID: 1010309, Name: "Zementmine"},
      {GUID: 1010311, Name: "Goldmine"},
      {GUID: 101311, Name: "Goldmine"}
    ],
  },
  {
    GUID: 191297,
    Name: "_Alle Kontore der Alten Welt", //"all moderate kontors",
    target_: "öffentlich",
    TargetPool: [
      {GUID: 1010517, Name: "Kleines Kontor"},
      {GUID: 100510, Name: "Mittleres Kontor"},
      {GUID: 100511, Name: "Großes Kontor"},
      {GUID: 1010540, Name: "[AssetData(1010517) Text]"},
      {GUID: 100514, Name: "Mittleres Kontor"},
      {GUID: 100515, Name: "Großes Kontor"}
    ],
  },
  {
    GUID: 191298,
    Name: "_Alle Kontore der Neuen Welt", //"all colony kontors",
    target_: "öffentlich",
    TargetPool: [
      {GUID: 101290, Name: "Kleines Kontor"},
      {GUID: 101291, Name: "Mittleres Kontor"},
      {GUID: 101292, Name: "Großes Kontor"},
      {GUID: 101293, Name: "[AssetData(1010517) Text]"},
      {GUID: 101294, Name: "[(AssetData(100510) Text)]"},
      {GUID: 101295, Name: "[(AssetData(100511) Text)]"}
    ],
  },
  {
    GUID: 190797,
    Name: "Alle Kontore", //"all kontors",
    target_: "öffentlich",
    TargetPool: [
      {GUID: 191297, Name: "Alle Kontore"},
      {GUID: 191298, Name: "Alle Kontore"}
    ],
    hasSubgroups: true,
  },
  {
    GUID: 190842,
    Name: "Alle Eisenhütten und Schmieden", //"All Ironworks and Foundry",
    target_: "produktion",
    TargetPool: [
      {GUID: 1010296, Name: "Stahlwerk"},
      {GUID: 1010297, Name: "Hochofen"},
      {GUID: 1010298, Name: "Köhlerei"},
      {GUID: 1010299, Name: "Kanonengießerei"},
      {GUID: 1010301, Name: "Geschützfabrik"},
      {GUID: 1010302, Name: "Motorenfabrik"},
      {GUID: 1010282, Name: "Messinghütte"},
      {GUID: 1010303, Name: "Dampfwagenfabrik"},
      {GUID: 101331, Name: "Ölraffinerie"},
      {GUID: 1010561, Name: "Ölraffinerie"}
    ],
  },
  {
    GUID: 190846,
    Name: "_Industrial Processing", //"Industrial Processing",
    target_: "produktion",
    TargetPool: [
      {GUID: 1010284, Name: "Nähmaschinenfabrik"},
      {GUID: 1010295, Name: "Konservenfabrik"},
      {GUID: 1010323, Name: "Hochrad-Werkhalle"}
    ],
  },
  {
    GUID: 190865,
    Name: "Getreidefarmen", //"All crops farms",
    target_: "produktion",
    TargetPool: [
      {GUID: 1010262, Name: "Getreidefarm"},
      {GUID: 1010264, Name: "Hopfenplantage"},
      {GUID: 1010265, Name: "Kartoffelhof"},
      {GUID: 100655, Name: "Weinberg"},
      {GUID: 100654, Name: "Paprikafarm"},
      {GUID: 1010329, Name: "Zuckerrohrplantage"},
      {GUID: 1010330, Name: "Tabakplantage"},
      {GUID: 1010331, Name: "Baumwollplantage"},
      {GUID: 1010332, Name: "Kakaoplantage"},
      {GUID: 1010333, Name: "Kautschuckplantage"},
      {GUID: 101251, Name: "Kaffeeplantage"},
      {GUID: 101263, Name: "Bananenplantage"},
      {GUID: 101270, Name: "Maisplantage"}
    ],
  },
  {
    GUID: 190872,
    Name: "Tierhöfe", //"All animals farms",
    target_: "produktion",
    TargetPool: [
      {GUID: 1010263, Name: "Rinderfarm"},
      {GUID: 1010267, Name: "Schäferei"},
      {GUID: 1010269, Name: "Schweinezucht"},
      {GUID: 101269, Name: "Rinderfarm"},
      {GUID: 101272, Name: "Alpakafarm"}
    ],
  },
  {
    GUID: 190882,
    Name: "Alle Bergminen", //"All subsurface mines",
    target_: "produktion",
    TargetPool: [
      {GUID: 1010304, Name: "Kohlemine"},
      {GUID: 1010305, Name: "Eisenmine"},
      {GUID: 1010307, Name: "Zinkmine"},
      {GUID: 1010308, Name: "Kupfermine"},
      {GUID: 1010311, Name: "Goldmine"},
      {GUID: 101311, Name: "Goldmine"}
    ],
  },
  {
    GUID: 190886,
    Name: "Steinbrüche", //"All quarries",
    target_: "produktion",
    TargetPool: [
      {GUID: 1010310, Name: "Salpeterwerk"},
      {GUID: 1010560, Name: "Quarzgrube"},
      {GUID: 100416, Name: "Lehmgrube"},
      {GUID: 1010309, Name: "Zementmine"},
      {GUID: 101303, Name: "Salpeterwerk"},
      {GUID: 101267, Name: "Lehmgrube"}
    ],
  },
  {
    GUID: 190890,
    Name: "Alle Tuchschneidereien", //"All cloth industries",
    target_: "produktion",
    TargetPool: [
      {GUID: 1010288, Name: "Segelweberei"},
      {GUID: 1010315, Name: "Weberei"},
      {GUID: 1010325, Name: "Schneiderei"},
      {GUID: 101265, Name: "Segelweberei"},
      {GUID: 101266, Name: "Ponchoweberei"},
      {GUID: 1010318, Name: "Baumwollweberei"}
    ],
  },
  {
    GUID: 190897,
    Name: "Alle Nahrungsmittelerzeuger", //"All food productions",
    target_: "produktion",
    TargetPool: [
      {GUID: 1010291, Name: "Bäckerei"},
      {GUID: 1010293, Name: "Großküche"},
      {GUID: 1010316, Name: "Metzgerei"},
      {GUID: 1010341, Name: "Schokoladenfabrik"},
      {GUID: 101264, Name: "Küche"},
      {GUID: 101271, Name: "Tortilla-Bäckerei"},
      {GUID: 1010317, Name: "Zuckerraffinerie"},
      {GUID: 1010295, Name: "Konservenfabrik"}
    ],
  },
  {
    GUID: 190901,
    Name: "Alle Brauereien", //"All breweries",
    target_: "produktion",
    TargetPool: [
      {GUID: 1010292, Name: "Brauerei"},
      {GUID: 1010294, Name: "Schnapsbrennerei"},
      {GUID: 100659, Name: "Sektkellerei"},
      {GUID: 1010314, Name: "Mälzerei"},
      {GUID: 101252, Name: "Kaffeerösterei"},
      {GUID: 1010340, Name: "Rumbrennerei"}
    ],
  },
  {
    GUID: 190914,
    Name: "Alle Schreinereien", //"All carpentry works",
    target_: "produktion",
    TargetPool: [
      {GUID: 100451, Name: "Sägewerk"},
      {GUID: 1010285, Name: "Fensterfabrik"},
      {GUID: 1010289, Name: "Kutschen-Werkhalle"},
      {GUID: 1010320, Name: "Kunstschreinerei"},
      {GUID: 1010326, Name: "Phonographenfabrik"},
      {GUID: 101261, Name: "Sägewerk"},
      {GUID: 101296, Name: "Kunstschreinerei"}
    ],
  },
  {
    GUID: 190918,
    Name: "Alle Ziegeleien", //"All bricks factories",
    target_: "produktion",
    TargetPool: [
      {GUID: 1010283, Name: "Ziegelei"},
      {GUID: 101268, Name: "Ziegelei"}
    ],
  },
  {
    GUID: 191042,
    Name: "Bohrtürme", //"all oil wells",
    target_: "produktion",
    TargetPool: [
      {GUID: 101331, Name: "Ölraffinerie"},
      {GUID: 1010561, Name: "Ölraffinerie"}
    ],
  },
  {
    GUID: 191443,
    Name: "Abwehrgeschütze", //"all military buildings",
    target_: "sonstige",
    TargetPool: [
      {GUID: 1010522, Name: "Geschützstellung"},
      {GUID: 1010523, Name: "Kanonenturm"},
      {GUID: 1010524, Name: "Dicke Berta"},
      {GUID: 101563, Name: "Geschützstellung"},
      {GUID: 101570, Name: "Kanonenturm"},
      {GUID: 101571, Name: "Dicke Berta"}
    ],
  },
  {
    GUID: 191454,
    Name: "_all ships", //"all ships",
    target_: "schiffe",
    TargetPool: [
      {GUID: 101121, Name: "Flaggschiff"},
      {GUID: 100437, Name: "Kanonenboot"},
      {GUID: 100438, Name: "Schoner"},
      {GUID: 100439, Name: "Fregatte"},
      {GUID: 100440, Name: "Linienschiff"},
      {GUID: 100441, Name: "Klipper"},
      {GUID: 100442, Name: "Schlachtkreuzer"},
      {GUID: 100443, Name: "Monitor"},
      {GUID: 1010062, Name: "Frachtschiff"},
      {GUID: 100853, Name: "Öltanker"},
      {GUID: 101236, Name: "Flaggschiff"},
      {GUID: 101373, Name: "Die Great Eastern"}
    ],
  },
  {
    GUID: 191455,
    Name: "_all sailships", //"all sailships",
    target_: "schiffe",
    TargetPool: [
      {GUID: 101121, Name: "Flaggschiff"},
      {GUID: 100437, Name: "Kanonenboot"},
      {GUID: 100438, Name: "Schoner"},
      {GUID: 100439, Name: "Fregatte"},
      {GUID: 100440, Name: "Linienschiff"},
      {GUID: 100441, Name: "Klipper"},
      {GUID: 101236, Name: "Flaggschiff"}
    ],
  },
  {
    GUID: 191456,
    Name: "_all steamships", //"all steamships",
    target_: "schiffe",
    TargetPool: [
      {GUID: 100442, Name: "Schlachtkreuzer"},
      {GUID: 100443, Name: "Monitor"},
      {GUID: 1010062, Name: "Frachtschiff"},
      {GUID: 100853, Name: "Öltanker"},
      {GUID: 101373, Name: "Die Great Eastern"}
    ],
  },
  {
    GUID: 191457,
    Name: "_all tradeships", //"all tradeships",
    target_: "schiffe",
    TargetPool: [
      {GUID: 101121, Name: "Flaggschiff"},
      {GUID: 100438, Name: "Schoner"},
      {GUID: 100441, Name: "Klipper"},
      {GUID: 1010062, Name: "Frachtschiff"},
      {GUID: 100853, Name: "Öltanker"}
    ],
  },
  {
    GUID: 191458,
    Name: "_all warships", //"all warships",
    target_: "schiffe",
    TargetPool: [
      {GUID: 100437, Name: "Kanonenboot"},
      {GUID: 100439, Name: "Fregatte"},
      {GUID: 100440, Name: "Linienschiff"},
      {GUID: 100442, Name: "Schlachtkreuzer"},
      {GUID: 100443, Name: "Monitor"},
      {GUID: 101121, Name: "Flaggschiff"},
      {GUID: 102437, Name: "Imperiales Flaggschiff"},
      {GUID: 102420, Name: "Piraten-Kanonenboot"},
      {GUID: 102421, Name: "Piraten-Fregatte"},
      {GUID: 102419, Name: "Piraten-Linienschiff"},
      {GUID: 102422, Name: "Piraten-Monitor"},
      {GUID: 102423, Name: "Pyrphorischer Monitor"},
      {GUID: 102425, Name: "Pyrphorischer Schlachtkreuzer"},
      {GUID: 102428, Name: "Pyrphorisches Kriegsschiff"},
      {GUID: 102427, Name: "Königliches Linienschiff"}
    ],
  },
  {
    GUID: 191471,
    Name: "Alle Nutzpflanzen-Farmen der Alten Welt", //"all eu farms",
    target_: "produktion",
    TargetPool: [
      {GUID: 1010262, Name: "Getreidefarm"},
      {GUID: 1010264, Name: "Hopfenplantage"},
      {GUID: 1010265, Name: "Kartoffelhof"},
      {GUID: 100655, Name: "Weinberg"},
      {GUID: 100654, Name: "Paprikafarm"}
    ],
  },
  {
    GUID: 191472,
    Name: "Alle Nutzpflanzen-Farmen der Neuen Welt", //"all sa farms",
    target_: "produktion",
    TargetPool: [
      {GUID: 1010329, Name: "Zuckerrohrplantage"},
      {GUID: 1010330, Name: "Tabakplantage"},
      {GUID: 1010331, Name: "Baumwollplantage"},
      {GUID: 1010332, Name: "Kakaoplantage"},
      {GUID: 1010333, Name: "Kautschuckplantage"},
      {GUID: 101251, Name: "Kaffeeplantage"},
      {GUID: 101263, Name: "Bananenplantage"},
      {GUID: 101270, Name: "Maisplantage"}
    ],
  },
  {
    GUID: 191501,
    Name: "Öffentliche Dienste", //"all public services",
    target_: "öffentlich",
    TargetPool: [
      {GUID: 1010358, Name: "Wirtshaus"},
      {GUID: 1010360, Name: "Schule"},
      {GUID: 1010365, Name: "Bankhaus"},
      {GUID: 1010359, Name: "Kirche"},
      {GUID: 1010361, Name: "Varieté"},
      {GUID: 1010362, Name: "Universität"},
      {GUID: 1010364, Name: "Clubhaus"},
      {GUID: 101257, Name: "Marktplatz"},
      {GUID: 101258, Name: "Kapelle"},
      {GUID: 101259, Name: "Boxkampfarena"},
      {GUID: 1010372, Name: "Marktplatz"}
    ],
  },
  {
    GUID: 191508,
    Name: "Hafengebäude", //"all harbour buildings",
    target_: "mixed",
    TargetPool: [
      {GUID: 190779, Name: "Fischereien"},
      {GUID: 190783, Name: "Schiffswerften"},
      {GUID: 190797, Name: "Alle Kontore"},
      {GUID: 191443, Name: "Abwehrgeschütze"},
      {GUID: 100586, Name: "Hafenmeisterei"},
      {GUID: 1010519, Name: "Depot"},
      {GUID: 1010525, Name: "Reparaturkran"},
      {GUID: 100519, Name: "Anlegestelle"},
      {GUID: 100429, Name: "Besucherkai"},
      {GUID: 100783, Name: "Kleiner Ölhafen"},
      {GUID: 101403, Name: "Mittlerer Ölhafen"},
      {GUID: 101404, Name: "Großer Ölhafen"},
      {GUID: 100784, Name: "Öldepot"},
      {GUID: 101642, Name: "Pendlerkai"},
      {GUID: 1010310, Name: "Salpeterwerk"},
      {GUID: 1010560, Name: "Quarzgrube"},
      {GUID: 101286, Name: "Hafenmeisterei"},
      {GUID: 101278, Name: "Depot"},
      {GUID: 101573, Name: "Reparaturkran"},
      {GUID: 101344, Name: "Anlegestelle"},
      {GUID: 101329, Name: "Kleiner Ölhafen"},
      {GUID: 101405, Name: "Mittlerer Ölhafen"},
      {GUID: 101406, Name: "Großer Ölhafen"},
      {GUID: 101330, Name: "Öllager"},
      {GUID: 1010339, Name: "Perlenfarm"},
      {GUID: 101262, Name: "Fischölfabrik"},
      {GUID: 101303, Name: "Salpeterwerk"},
      {GUID: 102284, Name: "Besucherhafen"}
    ],
    hasSubgroups: true,
  },
  {
    GUID: 191540,
    Name: "Marktplätze", //"all marketplaces",
    target_: "öffentlich",
    TargetPool: [
      {GUID: 101257, Name: "Marktplatz"},
      {GUID: 1010372, Name: "Marktplatz"}
    ],
  },
  {
    GUID: 191561,
    Name: "Zoologische Gärten", //"all zoo",
    target_: "culture",
    TargetPool: [
      {GUID: 1010470, Name: "Zoo"},
      {GUID: 102282, Name: "Zoo"}
    ],
  },
  {
    GUID: 191562,
    Name: "Museen", //"all museums",
    target_: "culture",
    TargetPool: [
      {GUID: 1010471, Name: "Museum"},
      {GUID: 102283, Name: "Museum"}
    ],
  },
  {
    GUID: 191563,
    Name: "Besucherhäfen", //"all visitors piers",
    target_: "culture",
    TargetPool: [
      {GUID: 100429, Name: "Besucherkai"},
      {GUID: 102284, Name: "Besucherhafen"}
    ],
  },
  {
    GUID: 191592,
    Name: "Lehmgruben", //"all clay",
    target_: "produktion",
    TargetPool: [
      {GUID: 100416, Name: "Lehmgrube"},
      {GUID: 101267, Name: "Lehmgrube"}
    ],
  },
  {
    GUID: 191593,
    Name: "Salpeterwerke", //"all niter",
    target_: "produktion",
    TargetPool: [
      {GUID: 101303, Name: "Salpeterwerk"},
      {GUID: 1010310, Name: "Salpeterwerk"}
    ],
  },
  {
    GUID: 191887,
    Name: "Reparaturkräne", //"all repair cranes",
    target_: "sonstige",
    TargetPool: [
      {GUID: 1010525, Name: "Reparaturkran"},
      {GUID: 101573, Name: "Reparaturkran"}
    ],
  },
  {
    GUID: 192179,
    Name: "Alle Gebäude", //"all residences public buildings EU & SA",
    target_: "mixed",
    TargetPool: [
      {GUID: 190762, Name: "Wohngebäude"},
      {GUID: 191501, Name: "Öffentliche Dienste"}
    ],
    hasSubgroups: true,
  },
  {
    GUID: 192408,
    Name: "_Framework Knitters and Fur Dealer", //"Framework Knitters and Fur Dealer",
    target_: "produktion",
    TargetPool: [
      {GUID: 1010325, Name: "Schneiderei"},
      {GUID: 1010315, Name: "Weberei"}
    ],
  },
  {
    GUID: 192418,
    Name: "_Pubs and Boxing Arena", //"Pubs and Boxing Arena",
    target_: "öffentlich",
    TargetPool: [
      {GUID: 1010358, Name: "Wirtshaus"},
      {GUID: 101259, Name: "Boxkampfarena"}
    ],
  },
  {
    GUID: 192423,
    Name: "_Engineer Buildings", //"Engineer Buildings",
    target_: "produktion", //+ Kraftwerk
    TargetPool: [
      {GUID: 1010280, Name: "Betonwerk"},
      {GUID: 1010286, Name: "Glühbirnenfabrik"},
      {GUID: 1010289, Name: "Kutschen-Werkhalle"},
      {GUID: 1010301, Name: "Geschützfabrik"},
      {GUID: 1010302, Name: "Motorenfabrik"},
      {GUID: 1010303, Name: "Dampfwagenfabrik"},
      {GUID: 1010300, Name: "Dynamitfabrik"},
      {GUID: 1010320, Name: "Kunstschreinerei"},
      {GUID: 1010321, Name: "Glühfadenfabrik"},
      {GUID: 1010323, Name: "Hochrad-Werkhalle"},
      {GUID: 1010324, Name: "Uhrenwerkstatt"},
      {GUID: 1010326, Name: "Phonographenfabrik"},
      {GUID: 1010327, Name: "Goldschmelze"},
      {GUID: 101250, Name: "Brillenfabrik"},
      {GUID: 100780, Name: "Kraftwerk"}
    ],
  },
  {
    GUID: 192435,
    Name: "_Beer production chain", //"Beer production chain",
    target_: "produktion",
    TargetPool: [
      {GUID: 1010262, Name: "Getreidefarm"},
      {GUID: 1010264, Name: "Hopfenplantage"},
      {GUID: 1010292, Name: "Brauerei"},
      {GUID: 1010314, Name: "Mälzerei"}
    ],
  },
  {
    GUID: 192436,
    Name: "Kanonenproduktionskette", //"weapons production chains",
    target_: "produktion",
    TargetPool: [
      {GUID: 1010269, Name: "Schweinezucht"},
      {GUID: 1010312, Name: "Wasenmeisterei"},
      {GUID: 1010310, Name: "Salpeterwerk"},
      {GUID: 1010297, Name: "Hochofen"},
      {GUID: 1010298, Name: "Köhlerei"},
      {GUID: 1010304, Name: "Kohlemine"},
      {GUID: 1010305, Name: "Eisenmine"},
      {GUID: 1010300, Name: "Dynamitfabrik"},
      {GUID: 1010299, Name: "Kanonengießerei"},
      {GUID: 1010301, Name: "Geschützfabrik"}
    ],
  },
  {
    GUID: 192445,
    Name: "Bauern- und Arbeiterhäuser", //"Farmers and Workers residences",
    target_: "wohngebäude",
    TargetPool: [
      {GUID: 1010343, Name: "Bauernhaus"},
      {GUID: 1010344, Name: "Arbeiterhaus"}
    ],
  },
  {
    GUID: 192446,
    Name: "Investoren- und Obrerohäuser", //"Investors and obreros",
    target_: "wohngebäude",
    TargetPool: [
      {GUID: 1010347, Name: "Investorenhaus"},
      {GUID: 101255, Name: "Obrero-Haus"}
    ],
  },
  {
    GUID: 192466,
    Name: "Segelschiffswerften", //"all sailing shipyards",
    target_: "schiffbau",
    TargetPool: [
      {GUID: 1010520, Name: "Segelschiffswerft"},
      {GUID: 101277, Name: "Segelschiffswerft"}
    ],
  },
  {
    GUID: 192566,
    Name: "Alkoholproduktionskette", //"Alcohol production chains",
    target_: "produktion",
    TargetPool: [
      {GUID: 1010262, Name: "Getreidefarm"},
      {GUID: 1010264, Name: "Hopfenplantage"},
      {GUID: 1010292, Name: "Brauerei"},
      {GUID: 1010314, Name: "Mälzerei"},
      {GUID: 1010265, Name: "Kartoffelhof"},
      {GUID: 1010294, Name: "Schnapsbrennerei"},
      {GUID: 1010266, Name: "Holzfällerhütte"},
      {GUID: 1010329, Name: "Zuckerrohrplantage"},
      {GUID: 1010340, Name: "Rumbrennerei"},
      {GUID: 1010560, Name: "Quarzgrube"},
      {GUID: 1010319, Name: "Glashütte"},
      {GUID: 100659, Name: "Sektkellerei"},
      {GUID: 100655, Name: "Weinberg"}
    ],
  },
  {
    GUID: 193400,
    Name: "Alle Produktionsgebäude an der Küste", //"all harbour production",
    target_: "produktion",
    TargetPool: [
      {GUID: 1010278, Name: "Fischerei"},
      {GUID: 1010310, Name: "Salpeterwerk"},
      {GUID: 1010560, Name: "Quarzgrube"},
      {GUID: 1010339, Name: "Perlenfarm"},
      {GUID: 101262, Name: "Fischölfabrik"},
      {GUID: 101303, Name: "Salpeterwerk"}
    ],
  },
  {
    GUID: 193480,
    Name: "_all loading time buildings", //"all loading time buildings",
    target_: "sonstige",
    TargetPool: [
      {GUID: 190797, Name: "Alle Kontore"},
      {GUID: 100519, Name: "Anlegestelle"},
      {GUID: 100783, Name: "Kleiner Ölhafen"},
      {GUID: 101403, Name: "Mittlerer Ölhafen"},
      {GUID: 101404, Name: "Großer Ölhafen"},
      {GUID: 101344, Name: "Anlegestelle"},
      {GUID: 101329, Name: "Kleiner Ölhafen"},
      {GUID: 101405, Name: "Mittlerer Ölhafen"},
      {GUID: 101406, Name: "Großer Ölhafen"}
    ],
    hasSubgroups: true,
  },
  {
    GUID: 193666,
    Name: "Kulturelle Gebäude", //"all culture",
    target_: "culture",
    TargetPool: [
      {GUID: 1010470, Name: "Zoo"},
      {GUID: 1010471, Name: "Museum"},
      {GUID: 102282, Name: "Zoo"},
      {GUID: 102283, Name: "Museum"},
      {GUID: 110935, Name: "Botanischer Garten"},
      {GUID: 114141, Name: "Botanischer Garten"}
    ],
  },
  {
    GUID: 193667,
    Name: "Botanischer Garten", //"all botanical gardens",
    target_: "culture",
    TargetPool: [
      {GUID: 110935, Name: "Botanischer Garten"},
      {GUID: 114141, Name: "Botanischer Garten"}
    ],
  },
  {
    GUID: 193770,
    Name: "Alle arktischen Produktionsgebäude", //"all arctic production",
    target_: "produktion",
    TargetPool: [
      {GUID: 114703, Name: "Holzfällerhütte"},
      {GUID: 112667, Name: "Rentier-Jagdhütte"},
      {GUID: 112676, Name: "Gänsefarm"},
      {GUID: 112673, Name: "Bären-Jagdhütte"},
      {GUID: 112682, Name: "Huskyfarm"},
      {GUID: 116034, Name: "Meisterhafte Jagdhütte"},
      {GUID: 114705, Name: "Köhlerei"},
      {GUID: 112666, Name: "Walfängerei"},
      {GUID: 112674, Name: "Robbenfängerei"},
      {GUID: 114704, Name: "Sägewerk"},
      {GUID: 112675, Name: "Schlafsackfabrik"},
      {GUID: 112679, Name: "Öllampenfabrik"},
      {GUID: 112672, Name: "Parkaschneiderei"},
      {GUID: 112681, Name: "Schlittenmanufaktur"},
      {GUID: 112680, Name: "Hundeschlitten-Station"},
      {GUID: 112668, Name: "Pemmikan-Räucherei"},
      {GUID: 112690, Name: "Gasförderstätte"},
      {GUID: 116029, Name: "Tiefe Goldmine"}
    ],
  },
  {
    GUID: 193771,
    Name: "Alle Schwerindustrien", //"all heavy production",
    target_: "produktion",
    TargetPool: [
      {GUID: 1010296, Name: "Stahlwerk"},
      {GUID: 1010297, Name: "Hochofen"},
      {GUID: 1010298, Name: "Köhlerei"},
      {GUID: 1010299, Name: "Kanonengießerei"},
      {GUID: 1010301, Name: "Geschützfabrik"},
      {GUID: 1010302, Name: "Motorenfabrik"},
      {GUID: 1010303, Name: "Dampfwagenfabrik"},
      {GUID: 1010282, Name: "Messinghütte"},
      {GUID: 101331, Name: "Ölraffinerie"}
    ],
  },
  {
    GUID: 193778,
    Name: "Alle Gebäude zur Getränkeherstellung", //"all drinks production",
    target_: "produktion",
    TargetPool: [
      {GUID: 1010292, Name: "Brauerei"},
      {GUID: 1010294, Name: "Schnapsbrennerei"},
      {GUID: 100659, Name: "Sektkellerei"},
      {GUID: 1010340, Name: "Rumbrennerei"},
      {GUID: 101252, Name: "Kaffeerösterei"}
    ],
  },
  {
    GUID: 193856,
    Name: "_all production except powerplant", //"all production except powerplant",
    target_: "produktion",
    TargetPool: [
      {GUID: 1010262, Name: "Getreidefarm"},
      {GUID: 1010263, Name: "Rinderfarm"},
      {GUID: 1010264, Name: "Hopfenplantage"},
      {GUID: 1010265, Name: "Kartoffelhof"},
      {GUID: 1010266, Name: "Holzfällerhütte"},
      {GUID: 1010267, Name: "Schäferei"},
      {GUID: 1010269, Name: "Schweinezucht"},
      {GUID: 1010558, Name: "Jagdhütte"},
      {GUID: 100655, Name: "Weinberg"},
      {GUID: 100654, Name: "Paprikafarm"},
      {GUID: 1010278, Name: "Fischerei"},
      {GUID: 1010310, Name: "Salpeterwerk"},
      {GUID: 1010560, Name: "Quarzgrube"},
      {GUID: 1010280, Name: "Betonwerk"},
      {GUID: 1010281, Name: "Siederei"},
      {GUID: 100451, Name: "Sägewerk"},
      {GUID: 1010283, Name: "Ziegelei"},
      {GUID: 1010284, Name: "Nähmaschinenfabrik"},
      {GUID: 1010286, Name: "Glühbirnenfabrik"},
      {GUID: 1010285, Name: "Fensterfabrik"},
      {GUID: 1010288, Name: "Segelweberei"},
      {GUID: 1010289, Name: "Kutschen-Werkhalle"},
      {GUID: 100416, Name: "Lehmgrube"},
      {GUID: 1010291, Name: "Bäckerei"},
      {GUID: 1010292, Name: "Brauerei"},
      {GUID: 1010293, Name: "Großküche"},
      {GUID: 1010295, Name: "Konservenfabrik"},
      {GUID: 1010294, Name: "Schnapsbrennerei"},
      {GUID: 1010316, Name: "Metzgerei"},
      {GUID: 100659, Name: "Sektkellerei"},
      {GUID: 1010296, Name: "Stahlwerk"},
      {GUID: 1010297, Name: "Hochofen"},
      {GUID: 1010298, Name: "Köhlerei"},
      {GUID: 1010299, Name: "Kanonengießerei"},
      {GUID: 1010301, Name: "Geschützfabrik"},
      {GUID: 1010302, Name: "Motorenfabrik"},
      {GUID: 1010303, Name: "Dampfwagenfabrik"},
      {GUID: 1010282, Name: "Messinghütte"},
      {GUID: 101331, Name: "Ölraffinerie"},
      {GUID: 1010304, Name: "Kohlemine"},
      {GUID: 1010305, Name: "Eisenmine"},
      {GUID: 1010307, Name: "Zinkmine"},
      {GUID: 1010308, Name: "Kupfermine"},
      {GUID: 1010309, Name: "Zementmine"},
      {GUID: 1010311, Name: "Goldmine"},
      {GUID: 1010312, Name: "Wasenmeisterei"},
      {GUID: 1010313, Name: "Mühle"},
      {GUID: 1010314, Name: "Mälzerei"},
      {GUID: 1010315, Name: "Weberei"},
      {GUID: 1010300, Name: "Dynamitfabrik"},
      {GUID: 1010319, Name: "Glashütte"},
      {GUID: 1010320, Name: "Kunstschreinerei"},
      {GUID: 1010321, Name: "Glühfadenfabrik"},
      {GUID: 1010323, Name: "Hochrad-Werkhalle"},
      {GUID: 1010324, Name: "Uhrenwerkstatt"},
      {GUID: 1010325, Name: "Schneiderei"},
      {GUID: 1010326, Name: "Phonographenfabrik"},
      {GUID: 1010327, Name: "Goldschmelze"},
      {GUID: 1010328, Name: "Goldschmiede"},
      {GUID: 101250, Name: "Brillenfabrik"},
      {GUID: 1010329, Name: "Zuckerrohrplantage"},
      {GUID: 1010330, Name: "Tabakplantage"},
      {GUID: 1010331, Name: "Baumwollplantage"},
      {GUID: 1010332, Name: "Kakaoplantage"},
      {GUID: 1010333, Name: "Kautschuckplantage"},
      {GUID: 101260, Name: "Holzfällerhütte"},
      {GUID: 101251, Name: "Kaffeeplantage"},
      {GUID: 101263, Name: "Bananenplantage"},
      {GUID: 101269, Name: "Rinderfarm"},
      {GUID: 101270, Name: "Maisplantage"},
      {GUID: 101272, Name: "Alpakafarm"},
      {GUID: 1010342, Name: "Zigarren-Manufaktur"},
      {GUID: 1010339, Name: "Perlenfarm"},
      {GUID: 101262, Name: "Fischölfabrik"},
      {GUID: 101303, Name: "Salpeterwerk"},
      {GUID: 101261, Name: "Sägewerk"},
      {GUID: 101265, Name: "Segelweberei"},
      {GUID: 1010318, Name: "Baumwollweberei"},
      {GUID: 101267, Name: "Lehmgrube"},
      {GUID: 101268, Name: "Ziegelei"},
      {GUID: 101415, Name: "Filzfabrik"},
      {GUID: 101273, Name: "Hutmacherei"},
      {GUID: 1010340, Name: "Rumbrennerei"},
      {GUID: 1010341, Name: "Schokoladenfabrik"},
      {GUID: 101252, Name: "Kaffeerösterei"},
      {GUID: 101264, Name: "Küche"},
      {GUID: 101271, Name: "Tortilla-Bäckerei"},
      {GUID: 1010561, Name: "Ölraffinerie"},
      {GUID: 1010317, Name: "Zuckerraffinerie"},
      {GUID: 101266, Name: "Ponchoweberei"},
      {GUID: 101296, Name: "Kunstschreinerei"},
      {GUID: 1010342, Name: "Zigarren-Manufaktur"},
      {GUID: 101311, Name: "Goldmine"}
    ]
  },
  {
    GUID: 193859,
    Name: "all oil harbours",//?
    target_: "hafen",
    TargetPool: [
      {GUID: 100783, Name: "Kleiner Ölhafen"},
      {GUID: 101403, Name: "Mittlerer Ölhafen"},
      {GUID: 101404, Name: "Großer Ölhafen"}
    ]
  },
  {
    GUID: 193860,
    Name: "_all trade unions", //"all trade unions"
    target_: "boost",
    TargetPool: [
      {GUID: 1010516, Name: "Handelskammer"}
    ]
  },
  {
    GUID: 193861,
    Name: "_all engineer residences", //"all engineer residences"
    target_: "wohngebäude",
    TargetPool: [
      {GUID: 1010346, Name: "Ingenieurshaus"}
    ]
  },
  {
    GUID: 193862,
    Name: "_all artisan residences", //"all artisan residences"
    target_: "wohngebäude",
    TargetPool: [
      {GUID: 1010345, Name: "Handwerkerhaus"}
    ]
  },
  {
    GUID: 193863,
    Name: "_all variety theatres", //"all variety theatres"
    target_: "öffentlich",
    TargetPool: [
      {GUID: 1010361, Name: "Varieté"}
    ]
  },
  {
    GUID: 193864,
    Name: "_all power plants", //"all power plants"
    target_: "kraftwerk",
    TargetPool: [
      {GUID: 100780, Name: "Kraftwerk"},
      {GUID: 117547, Name: "Gasbetriebenes Kraftwerk"}
    ]
  },
  {
    GUID: 193865,
    Name: "_all harbourmaster's offices", //"all harbourmaster's offices"
    target_: "boost",
    TargetPool: [
      {GUID: 100586, Name: "Hafenmeisterei"}
    ]
  },
  {
    GUID: 193866,
    Name: "_all depots", //"all depots"
    target_: "hafen",
    TargetPool: [
      {GUID: 1010519, Name: "Depot"}
    ]
  },
  {
    GUID: 193867,
    Name: "_all oil storages", //"all oil storages"
    target_: "hafen",
    TargetPool: [
      {GUID: 100784, Name: "Öldepot"}
    ]
  },
  {
    GUID: 193868,
    Name: "_all pubs", //"all pubs"
    target_: "öffentlich",
    TargetPool: [
      {GUID: 1010358, Name: "Wirtshaus"}
    ]
  },
  {
    GUID: 193869,
    Name: "_all members clubs", //"all members clubs"
    target_: "öffentlich",
    TargetPool: [
      {GUID: 1010364, Name: "Clubhaus"}
    ]
  },
  {
    GUID: 193871,
    Name: "_all banks", //"all banks"
    target_: "öffentlich",
    TargetPool: [
      {GUID: 1010365, Name: "Bankhaus"}
    ]
  },
  {
    GUID: 193872,
    Name: "_all universities", //"all universities"
    target_: "öffentlich",
    TargetPool: [
      {GUID: 1010362, Name: "Universität"}
    ]
  },
  {
    GUID: 193875,
    Name: "_all production boosted by electricity", //"all production boosted by electricity"
    target_: "produktion",
    TargetPool: [
      {GUID: 1010310, Name: "Salpeterwerk"},
      {GUID: 1010560, Name: "Quarzgrube"},
      {GUID: 1010280, Name: "Betonwerk"},
      {GUID: 1010281, Name: "Siederei"},
      {GUID: 100451, Name: "Sägewerk"},
      {GUID: 1010283, Name: "Ziegelei"},
      {GUID: 1010284, Name: "Nähmaschinenfabrik"},
      {GUID: 1010286, Name: "Glühbirnenfabrik"},
      {GUID: 1010285, Name: "Fensterfabrik"},
      {GUID: 1010288, Name: "Segelweberei"},
      {GUID: 1010289, Name: "Kutschen-Werkhalle"},
      {GUID: 100416, Name: "Lehmgrube"},
      {GUID: 1010291, Name: "Bäckerei"},
      {GUID: 1010292, Name: "Brauerei"},
      {GUID: 1010293, Name: "Großküche"},
      {GUID: 1010295, Name: "Konservenfabrik"},
      {GUID: 1010294, Name: "Schnapsbrennerei"},
      {GUID: 1010316, Name: "Metzgerei"},
      {GUID: 100659, Name: "Sektkellerei"},
      {GUID: 1010296, Name: "Stahlwerk"},
      {GUID: 1010297, Name: "Hochofen"},
      {GUID: 1010298, Name: "Köhlerei"},
      {GUID: 1010299, Name: "Kanonengießerei"},
      {GUID: 1010301, Name: "Geschützfabrik"},
      {GUID: 1010302, Name: "Motorenfabrik"},
      {GUID: 1010303, Name: "Dampfwagenfabrik"},
      {GUID: 1010282, Name: "Messinghütte"},
      {GUID: 101331, Name: "Ölraffinerie"},
      {GUID: 1010304, Name: "Kohlemine"},
      {GUID: 1010305, Name: "Eisenmine"},
      {GUID: 1010307, Name: "Zinkmine"},
      {GUID: 1010308, Name: "Kupfermine"},
      {GUID: 1010309, Name: "Zementmine"},
      {GUID: 1010311, Name: "Goldmine"},
      {GUID: 1010312, Name: "Wasenmeisterei"},
      {GUID: 1010313, Name: "Mühle"},
      {GUID: 1010314, Name: "Mälzerei"},
      {GUID: 1010315, Name: "Weberei"},
      {GUID: 1010300, Name: "Dynamitfabrik"},
      {GUID: 1010319, Name: "Glashütte"},
      {GUID: 1010320, Name: "Kunstschreinerei"},
      {GUID: 1010321, Name: "Glühfadenfabrik"},
      {GUID: 1010323, Name: "Hochrad-Werkhalle"},
      {GUID: 1010324, Name: "Uhrenwerkstatt"},
      {GUID: 1010325, Name: "Schneiderei"},
      {GUID: 1010326, Name: "Phonographenfabrik"},
      {GUID: 1010327, Name: "Goldschmelze"},
      {GUID: 1010328, Name: "Goldschmiede"},
      {GUID: 101250, Name: "Brillenfabrik"}
    ]
  }

  // ,{
  //   GUID: 2_2,
  //   Name: "Alle Wohngebäude der Neuen Welt", //"TODO",
  //   target_: "wohngebäude",
  //   TargetPool: [
  //     {GUID: 101254, Name: "Jornalero-Haus"},
  //     {GUID: 101255, Name: "Obrero-Haus"},
  //   ],
  // }
  // ,{
  //   GUID: 2_4,
  //   Name: "Alle Wohngebäude der Arktis", //"TODO",
  //   target_: "wohngebäude",
  //   TargetPool: [
  //     {GUID: 112091, Name: "Entdecker-Behausung"},
  //     {GUID: 112652, Name: "Techniker-Behausung"},
  //   ],
  // }

]

export const residenceItemTargetGUIDs = (worldtypeId) => {
  switch (worldtypeId) {
    case 1:
      return [
        192445, /* 1-2 Bauern- und Arbeiterhäuser */
        192446, /* 5,7 Investoren- und Obrerohäuser */
        190041, /* 1-5 Alle Wohngebäude der Alten Welt */ ...resolveTargetGUIDs([190041]),
        190762, /* 1-7 Wohngebäude */
      ];
    case 2:
      return [
        101254, /* 6 Jornalero-Haus */
        101255, /* 7 Obrero-Haus */
        192446, /* 5,7 Investoren- und Obrerohäuser */
        190762, /* 1-7 Wohngebäude */
      ];
    case 3:
      return [
        112091, /* 8 Entdecker-Behausung*/
        112652, /* 9 Techniker-Behausung*/
      ];
    default:
      return []
  }
}

export const isInPool = (producerGUID, targetPoolId, deep = false) => {
  const pool = all.find(tp => tp.GUID === targetPoolId)
  if (!pool) return undefined

  return undefined !== pool.TargetPool.find(tp => tp.GUID === producerGUID)
}

export const findPools = (producerGUID, target) => {
  // eslint-disable-next-line no-unused-vars
  const skip = [
    6000018,  // Alle Produktionsgebäude
    193856,   // _all production except powerplant
    190611,   // Alle Gebäude mit Unterhaltskosten
    191508,   // Hafengebäude
  ]

  return all.filter(group =>
    // !skip.includes(group.GUID) &&
    // group.target_ === target &&
    group.TargetPool.find(TP =>
      TP.GUID === producerGUID
    )
  )
}

export const findAllGUIDs = producerGUID => {
  const self = producerGUID
  const applicablePools = findPools(producerGUID)

  return [
    self,
    ...applicablePools.map(tp => tp.GUID)
  ]
}

export const resolveTargets = mixedGUIDs => {
  const isPool = mGUID => mGUID === 6000018 || (mGUID > 190011 && mGUID < 194000)

  return mixedGUIDs.reduce((arr, mGUID) => {
    if (isPool(mGUID)) {
      const pool = all.find(pool => pool.GUID === mGUID)
      if (pool) {
        if (pool.hasSubgroups) {
          return pool.TargetPool.map(target => {
            if (isPool(target.GUID)) {
              return [...arr, ...resolveTargetGUIDs([mGUID])]
            }
            return [...arr, target]
          })
        } else {
          return [...arr, ...pool.TargetPool]
        }
      }
    }
    return [...arr, {GUID: mGUID, Name: '-kein Pool'}]
  }, [])
}

export const resolveTargetGUIDs = mixedGUIDs => {
  return Array.from(new Set(
    resolveTargets(mixedGUIDs).map(target => target.GUID)
  ))
}

export default {all, findPools, findAllGUIDs}