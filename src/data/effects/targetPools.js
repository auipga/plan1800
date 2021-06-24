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
    FileName: "Icons/icon_arrowpoint_right.png",
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
      {GUID: 101311, Name: "Goldmine"},
      {GUID: 118571, Name: "Tankhof"},
      {GUID: 269840, Name: "Tankhof"},
      {GUID: 122963, Name: "Wanza-Holzfällerhütte"},
      {GUID: 114441, Name: "Leinenweberei"},
      {GUID: 114466, Name: "Stickerei"},
      {GUID: 114440, Name: "Saline"},
      {GUID: 114444, Name: "Trockenhaus"},
      {GUID: 114468, Name: "Teewürzerei"},
      {GUID: 117743, Name: "Lehmschöpferei"},
      {GUID: 114467, Name: "Lehmziegelei"},
      {GUID: 118725, Name: "Keramikwerkstatt"},
      {GUID: 114469, Name: "Teppichknüpferei"},
      {GUID: 114459, Name: "Tef-Mühle"},
      {GUID: 118729, Name: "Zuchtbecken"},
      {GUID: 114471, Name: "Wat-Küche"},
      {GUID: 114472, Name: "Pfeifenmacherei"},
      {GUID: 117744, Name: "Papiermühle"},
      {GUID: 114470, Name: "Buchmalerei"},
      {GUID: 114461, Name: "Kerzenzieherei"},
      {GUID: 114464, Name: "Laternenmacher"},
      {GUID: 118733, Name: "Schuster"},
      {GUID: 118734, Name: "Schneidergeschäft"},
      {GUID: 118735, Name: "Telefonfabrik"},
      {GUID: 124738, Name: "Fortschrittliche Kaffeerösterei"},
      {GUID: 124737, Name: "Fortschrittliche Rumbrennerei"},
      {GUID: 124739, Name: "Fortschrittliche Baumwollweberei"},
      {GUID: 119028, Name: "Tankhof"},
      {GUID: 114452, Name: "Gewürzfarm"},
      {GUID: 114450, Name: "Tef-Farm"},
      {GUID: 114447, Name: "Hibiskusfarm"},
      {GUID: 114451, Name: "Indigofarm"},
      {GUID: 114456, Name: "Ziegenfarm"},
      {GUID: 114448, Name: "Flachsfarm"},
      {GUID: 114439, Name: "Sanga-Farm"},
      {GUID: 114453, Name: "Imkerei"}
    ],
  },
  {
    GUID: 190011,
    Name: "_all farms", //"all farms",
    target_: "produktion",
    FileName: "Icons/icon_arrowpoint_right.png",
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
      {GUID: 101272, Name: "Alpakafarm"},
      {GUID: 114456, Name: "Ziegenfarm"},
      {GUID: 114439, Name: "Sanga-Farm"},
      {GUID: 122963, Name: "Wanza-Holzfällerhütte"},
      {GUID: 114448, Name: "Flachsfarm"},
      {GUID: 114447, Name: "Hibiskusfarm"},
      {GUID: 114450, Name: "Tef-Farm"},
      {GUID: 114451, Name: "Indigofarm"},
      {GUID: 114452, Name: "Gewürzfarm"},
      {GUID: 114453, Name: "Imkerei"}
    ],
  },
  {
    GUID: 190041,
    Name: "Alle Wohngebäude der Alten Welt", //"all residences in EU",
    target_: "wohngebäude",
    FileName: "Icons/icon_arrowpoint_right.png",
    TargetPool: [
      {GUID: 1010343, Name: "Bauernhaus"},
      {GUID: 1010344, Name: "Arbeiterhaus"},
      {GUID: 1010345, Name: "Handwerkerhaus"},
      {GUID: 1010346, Name: "Ingenieurshaus"},
      {GUID: 1010347, Name: "Investorenhaus"},
      {GUID: 114445, Name: "Gelehrtenhaus"}
    ],
  },
  {
    GUID: 190136,
    Name: "Alle öffentlichen Gebäude", //"all public",
    target_: "öffentlich",
    FileName: "3dicons/icon_market.png",
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
      {GUID: 117547, Name: "Gasbetriebenes Kraftwerk"},
      {GUID: 118736, Name: "Funkturm"}
    ]
  },
/*
  {
    GUID: 190604,
    Name: "_all trade ships DONT USE", //"all trade ships DONT USE"
    target_: "schiffe",
    FileName: "Icons/icon_arrowpoint_right.png",
    TargetPool: [
      {GUID: 100438, Name: "Schoner"},
      {GUID: 100441, Name: "Klipper"},
      {GUID: 1010062, Name: "Frachtschiff"},
      {GUID: 101121, Name: "Flaggschiff"},
      {GUID: 100853, Name: "Öltanker"},
      {GUID: 102455, Name: "Extravaganter Dampfer"},
      {GUID: 102437, Name: "Imperiales Flaggschiff"},
      {GUID: 118718, Name: "Die Great Eastern"}
    ]
  },
*/
/*
  {
    GUID: 190608,
    Name: "_all military units DONT USE", //"all military units DONT USE"
    target_: "schiffe",
    FileName: "Icons/icon_arrowpoint_right.png",
    TargetPool: [
      {GUID: 101121, Name: "Flaggschiff"},
      {GUID: 102437, Name: "Imperiales Flaggschiff"},
      {GUID: 100437, Name: "Kanonenboot"},
      {GUID: 100439, Name: "Fregatte"},
      {GUID: 100440, Name: "Linienschiff"},
      {GUID: 100442, Name: "Schlachtkreuzer"},
      {GUID: 119354, Name: "Schlachtkreuzer"},
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
      {GUID: 117861, Name: "Geschützstellung"},
      {GUID: 117863, Name: "Kanonenturm"}
    ],
    hasSubgroups: undefined,
  },
*/
  {
    GUID: 193986,
    Name: "_all military units NEW", //"all military units NEW"
    target_: "schiffe+",
    FileName: "Icons/icon_arrowpoint_right.png",
    TargetPool: [
      {GUID: 101121, Name: "Flaggschiff"},
      {GUID: 102437, Name: "Imperiales Flaggschiff"},
      {GUID: 100437, Name: "Kanonenboot"},
      {GUID: 100439, Name: "Fregatte"},
      {GUID: 100440, Name: "Linienschiff"},
      {GUID: 100442, Name: "Schlachtkreuzer"},
      {GUID: 119354, Name: "Schlachtkreuzer"},
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
      {GUID: 117861, Name: "Geschützstellung"},
      {GUID: 117863, Name: "Kanonenturm"},
      {GUID: 101432, Name: "Flaggschiff"},
      {GUID: 119856, Name: "Flaggschiff"},
      {GUID: 112671, Name: "Kanonenturm"},
      {GUID: 112659, Name: "Kleines Kontor"},
      {GUID: 112660, Name: "Mittleres Kontor"},
      {GUID: 112661, Name: "Großes Kontor"},
      {GUID: 112865, Name: "Kleines Kontor"},
      {GUID: 112866, Name: "Mittleres Kontor"},
      {GUID: 112867, Name: "Großes Kontor"}
    ],
  },
  {
    GUID: 190609,
    Name: "_all zoo and museum", //"all zoo and museum",
    target_: "culture",
    FileName: "Icons/icon_arrowpoint_right.png",
    TargetPool: [
      {GUID: 1010470, Name: "Zoo"},
      {GUID: 1010471, Name: "Museum"},
      {GUID: 102282, Name: "Zoo"},
      {GUID: 102283, Name: "Museum"}
    ]
  },
/*
  {
    GUID: 190611,
    Name: "Alle Gebäude mit Unterhaltskosten DONT USE", //"all buildings with maintenance DONT USE",
    target_: "mixed",
    FileName: "Icons/icon_arrowpoint_right.png",
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
      {GUID: 269867, Name: "Riesiges Kontor"},
      {GUID: 1010540, Name: "[AssetData(1010517) Text]"},
      {GUID: 100514, Name: "Mittleres Kontor"},
      {GUID: 100515, Name: "Großes Kontor"},
      {GUID: 269879, Name: "Riesiges Kontor"},
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
      {GUID: 112678, Name: "Quartier"},
      {GUID: 249947, Name: "Palast"},
      {GUID: 269602, Name: "Regionalministerium"},
      {GUID: 118571, Name: "Tankhof"},
      {GUID: 269840, Name: "Tankhof"},
      {GUID: 269869, Name: "Zentralmagazin"},
      {GUID: 101325, Name: "Magazin"}
    ],
    hasSubgroups: undefined,
  },
 */
  {
    GUID: 193879,
    Name: "_all buildings with maintenance NEW", //"all buildings with maintenance NEW"
    target_: "mixed",
    FileName: "Icons/icon_arrowpoint_right.png",
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
      {GUID: 100780, Name: "Kraftwerk"},
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
      {GUID: 112689, Name: "Luftschiff-​Hangar"},
      {GUID: 114751, Name: "Heizofen"},
      {GUID: 117547, Name: "Gasbetriebenes Kraftwerk"},
      {GUID: 112670, Name: "Depot"},
      {GUID: 112671, Name: "Kanonenturm"},
      {GUID: 116030, Name: "Anlegestelle"},
      {GUID: 112678, Name: "Quartier"},
      {GUID: 249947, Name: "Palast"},
      {GUID: 269602, Name: "Regionalministerium"},
      {GUID: 110935, Name: "Botanischer Garten"},
      {GUID: 114141, Name: "Botanischer Garten"},
      {GUID: 101260, Name: "Holzfällerhütte"},
      {GUID: 101251, Name: "Kaffeeplantage"},
      {GUID: 101263, Name: "Bananenplantage"},
      {GUID: 101269, Name: "Rinderfarm"},
      {GUID: 101270, Name: "Maisplantage"},
      {GUID: 101272, Name: "Alpakafarm"},
      {GUID: 101262, Name: "Fischölfabrik"},
      {GUID: 101303, Name: "Salpeterwerk"},
      {GUID: 101261, Name: "Sägewerk"},
      {GUID: 101265, Name: "Segelweberei"},
      {GUID: 101267, Name: "Lehmgrube"},
      {GUID: 101268, Name: "Ziegelei"},
      {GUID: 101415, Name: "Filzfabrik"},
      {GUID: 101273, Name: "Hutmacherei"},
      {GUID: 101252, Name: "Kaffeerösterei"},
      {GUID: 101264, Name: "Küche"},
      {GUID: 101271, Name: "Tortilla-Bäckerei"},
      {GUID: 101311, Name: "Goldmine"},
      {GUID: 101266, Name: "Ponchoweberei"},
      {GUID: 101296, Name: "Kunstschreinerei"},
      {GUID: 101257, Name: "Marktplatz"},
      {GUID: 101258, Name: "Kapelle"},
      {GUID: 101259, Name: "Boxkampfarena"},
      {GUID: 101274, Name: "Polizeirevier"},
      {GUID: 101275, Name: "Feuerwache"},
      {GUID: 101276, Name: "Hospital"},
      {GUID: 101323, Name: "Lagerhaus"},
      {GUID: 101324, Name: "Lagerhalle"},
      {GUID: 101325, Name: "Magazin"},
      {GUID: 102282, Name: "Zoo"},
      {GUID: 102283, Name: "Museum"},
      {GUID: 101284, Name: "Handelskammer"},
      {GUID: 101285, Name: "Rathaus"},
      {GUID: 101286, Name: "Hafenmeisterei"},
      {GUID: 101278, Name: "Depot"},
      {GUID: 101277, Name: "Segelschiffswerft"},
      {GUID: 101563, Name: "Geschützstellung"},
      {GUID: 101570, Name: "Kanonenturm"},
      {GUID: 101571, Name: "Dicke Berta"},
      {GUID: 101573, Name: "Reparaturkran"},
      {GUID: 101344, Name: "Anlegestelle"},
      {GUID: 101329, Name: "Kleiner Ölhafen"},
      {GUID: 101405, Name: "Mittlerer Ölhafen"},
      {GUID: 101406, Name: "Großer Ölhafen"},
      {GUID: 101330, Name: "Öllager"},
      {GUID: 102284, Name: "Besucherhafen"},
      {GUID: 118571, Name: "Tankhof"},
      {GUID: 269840, Name: "Tankhof"},
      {GUID: 269869, Name: "Zentralmagazin"},
      {GUID: 101325, Name: "Magazin"},
      {GUID: 119259, Name: "Riesiger Ölhafen"},
      {GUID: 119281, Name: "Riesiger Ölhafen"},
      {GUID: 114518, Name: "Marktplatz"},
      {GUID: 114509, Name: "Lagerhaus"},
      {GUID: 114537, Name: "Lagerhalle"},
      {GUID: 114635, Name: "Magazin"},
      {GUID: 114544, Name: "Wasserpumpe"},
      {GUID: 122963, Name: "Wanza-Holzfällerhütte"},
      {GUID: 114456, Name: "Ziegenfarm"},
      {GUID: 117870, Name: "Depot"},
      {GUID: 117860, Name: "Hafenmeisterei"},
      {GUID: 117864, Name: "Reparaturkran"},
      {GUID: 117861, Name: "Geschützstellung"},
      {GUID: 114450, Name: "Tef-Farm"},
      {GUID: 114441, Name: "Leinenweberei"},
      {GUID: 114466, Name: "Stickerei"},
      {GUID: 114519, Name: "Podium"},
      {GUID: 117858, Name: "Handelskammer"},
      {GUID: 119892, Name: "Feuerwache"},
      {GUID: 114439, Name: "Sanga-Farm"},
      {GUID: 114440, Name: "Saline"},
      {GUID: 114444, Name: "Trockenhaus"},
      {GUID: 114447, Name: "Hibiskusfarm"},
      {GUID: 114468, Name: "Teewürzerei"},
      {GUID: 117743, Name: "Lehmschöpferei"},
      {GUID: 114448, Name: "Flachsfarm"},
      {GUID: 114467, Name: "Lehmziegelei"},
      {GUID: 114451, Name: "Indigofarm"},
      {GUID: 118725, Name: "Keramikwerkstatt"},
      {GUID: 114469, Name: "Teppichknüpferei"},
      {GUID: 114508, Name: "Polizeiwache"},
      {GUID: 114452, Name: "Gewürzfarm"},
      {GUID: 114459, Name: "Tef-Mühle"},
      {GUID: 118729, Name: "Zuchtbecken"},
      {GUID: 114471, Name: "Wat-Küche"},
      {GUID: 114472, Name: "Pfeifenmacherei"},
      {GUID: 117859, Name: "Rathaus"},
      {GUID: 117744, Name: "Papiermühle"},
      {GUID: 114470, Name: "Buchmalerei"},
      {GUID: 119034, Name: "Öllager"},
      {GUID: 119033, Name: "Großer Ölhafen"},
      {GUID: 119032, Name: "Mittlerer Ölhafen"},
      {GUID: 119031, Name: "Kleiner Ölhafen"},
      {GUID: 270172, Name: "Riesiger Ölhafen"},
      {GUID: 119028, Name: "Tankhof"},
      {GUID: 117863, Name: "Kanonenturm"},
      {GUID: 118736, Name: "Funkturm"},
      {GUID: 114453, Name: "Imkerei"},
      {GUID: 114461, Name: "Kerzenzieherei"},
      {GUID: 114464, Name: "Laternenmacher"},
      {GUID: 114520, Name: "Kloster"},
      {GUID: 118733, Name: "Schuster"},
      {GUID: 118734, Name: "Schneidergeschäft"},
      {GUID: 118735, Name: "Telefonfabrik"},
      {GUID: 124738, Name: "Fortschrittliche Kaffeerösterei"},
      {GUID: 124737, Name: "Fortschrittliche Rumbrennerei"},
      {GUID: 124739, Name: "Fortschrittliche Baumwollweberei"},
      {GUID: 125193, Name: "Fortschrittliche Anlegestelle"},
      {GUID: 125028, Name: "Fortschrittliche Anlegestelle"},
      {GUID: 125191, Name: "Fortschrittliche Anlegestelle"},
      {GUID: 125192, Name: "Fortschrittliche Anlegestelle"},
      {GUID: 117871, Name: "Anlegestelle"}
    ],
  },
  {
    GUID: 193957,
    Name: "_all residences EU & SA without Africa & Scholar", //"all residences EU & SA without Africa & Scholar"
    target_: "wohngebäude",
    FileName: "Icons/icon_arrowpoint_right.png",
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
    GUID: 190762,
    Name: "Alle Wohngebäude", //"all residences EU & SA + Africa & Scholar",
    target_: "wohngebäude",
    FileName: "Icons/icon_arrowpoint_right.png",
    TargetPool: [
      {GUID: 1010343, Name: "Bauernhaus"},
      {GUID: 1010344, Name: "Arbeiterhaus"},
      {GUID: 1010345, Name: "Handwerkerhaus"},
      {GUID: 1010346, Name: "Ingenieurshaus"},
      {GUID: 1010347, Name: "Investorenhaus"},
      {GUID: 101254, Name: "Jornalero-Haus"},
      {GUID: 101255, Name: "Obrero-Haus"},
      {GUID: 114436, Name: "Hirtenhaus"},
      {GUID: 114437, Name: "Ältestenhaus"},
      {GUID: 114445, Name: "Gelehrtenhaus"}
    ],
  },
  {
    GUID: 190775,
    Name: "Feuerwachen", //"all fire stations",
    target_: "öffentlich",
    FileName: "Icons/icon_arrowpoint_right.png",
    TargetPool: [
      {GUID: 1010463, Name: "Feuerwache"},
      {GUID: 101275, Name: "Feuerwache"},
      {GUID: 119892, Name: "Feuerwache"}
    ],
  },
  {
    GUID: 190776,
    Name: "Polizeireviere", //"all police stations",
    target_: "öffentlich",
    FileName: "Icons/icon_arrowpoint_right.png",
    TargetPool: [
      {GUID: 1010462, Name: "Polizeiwache"},
      {GUID: 101274, Name: "Polizeirevier"},
      {GUID: 114508, Name: "Polizeiwache"}
    ],
  },
  {
    GUID: 190777,
    Name: "Krankenhäuser", //"all hospitals",
    target_: "öffentlich",
    FileName: "Icons/icon_arrowpoint_right.png",
    TargetPool: [
      {GUID: 1010464, Name: "Hospital"},
      {GUID: 101276, Name: "Hospital"},
      {GUID: 117668, Name: "Krankenhaus"}
    ],
  },
  {
    GUID: 190778,
    Name: "Holzfällerhütten", //"all timber yards",
    target_: "produktion",
    FileName: "3dicons/icon_wood_log.png",
    TargetPool: [
      {GUID: 1010266, Name: "Holzfällerhütte"},
      {GUID: 101260, Name: "Holzfällerhütte"},
      {GUID: 122963, Name: "Wanza-Holzfällerhütte"}
    ],
  },
  {
    GUID: 190779,
    Name: "Fischereien", //"all fisheries",
    target_: "produktion",
    FileName: "3dicons/icon_fish.png",
    TargetPool: [
      {GUID: 1010278, Name: "Fischerei"},
      {GUID: 101262, Name: "Fischölfabrik"},
      {GUID: 118729, Name: "Zuchtbecken"}
    ],
  },
  {
    GUID: 190781,
    Name: "Rathäuser", //"all town halls",
    target_: "öffentlich",
    FileName: "3dicons/icon_townhall.png",
    TargetPool: [
      {GUID: 100415, Name: "Rathaus"},
      {GUID: 101285, Name: "Rathaus"}
    ],
  },
  {
    GUID: 190782,
    Name: "Wirtshäuser", //"all pubs",
    target_: "öffentlich",
    FileName: "3dicons/icon_pub.png",
    TargetPool: [
      {GUID: 1010358, Name: "Wirtshaus"}
    ],
  },
  {
    GUID: 190783,
    Name: "Schiffswerften", //"all shipyards",
    target_: "schiffbau",
    FileName: "Icons/icon_arrowpoint_right.png",
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
    FileName: "Icons/icon_arrowpoint_right.png",
    TargetPool: [
      {GUID: 1010359, Name: "Kirche"},
      {GUID: 101258, Name: "Kapelle"}
    ],
  },
  {
    GUID: 190785,
    Name: "Kartoffelhöfe", //"all potato and banana farms",
    target_: "produktion",
    FileName: "3dicons/icon_potatoes.png",
    TargetPool: [
      {GUID: 1010265, Name: "Kartoffelhof"},
      {GUID: 101263, Name: "Bananenplantage"}
    ],
  },
  {
    GUID: 190786,
    Name: "Alle Minen und Steinbrüche", //"all mines",
    target_: "produktion",
    FileName: "Icons/icon_arrowpoint_right.png",
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
    FileName: "Icons/icon_arrowpoint_right.png",
    TargetPool: [
      {GUID: 1010517, Name: "Kleines Kontor"},
      {GUID: 100510, Name: "Mittleres Kontor"},
      {GUID: 100511, Name: "Großes Kontor"},
      {GUID: 269867, Name: "Riesiges Kontor"},
      {GUID: 1010540, Name: "[AssetData(1010517) Text]"},
      {GUID: 100514, Name: "Mittleres Kontor"},
      {GUID: 100515, Name: "Großes Kontor"},
      {GUID: 269879, Name: "Riesiges Kontor"}
    ],
  },
  {
    GUID: 191298,
    Name: "_Alle Kontore der Neuen Welt", //"all colony kontors",
    target_: "öffentlich",
    FileName: "Icons/icon_arrowpoint_right.png",
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
    Name: "Alle Kontore", //"all kontors EU & SA + Africa",
    target_: "öffentlich",
    FileName: "Icons/icon_arrowpoint_right.png",
    TargetPool: [
      {GUID: 191297, Name: "Alle Kontore"},
      {GUID: 191298, Name: "Alle Kontore"},
      {GUID: 114626, Name: "Kleines Kontor"},
      {GUID: 114627, Name: "Mittleres Kontor"},
      {GUID: 114628, Name: "Großes Kontor"},
      {GUID: 114629, Name: "Kleines Kontor"},
      {GUID: 114630, Name: "Mittleres Kontor"},
      {GUID: 114631, Name: "Großes Kontor"}
    ],
    hasSubgroups: true,
  },
  {
    GUID: 190842,
    Name: "Alle Eisenhütten und Schmieden", //"All Ironworks and Foundry",
    target_: "produktion",
    FileName: "",
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
    FileName: "",
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
    FileName: "",
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
      {GUID: 101270, Name: "Maisplantage"},
      {GUID: 114448, Name: "Flachsfarm"},
      {GUID: 114447, Name: "Hibiskusfarm"},
      {GUID: 114450, Name: "Tef-Farm"},
      {GUID: 114451, Name: "Indigofarm"},
      {GUID: 114452, Name: "Gewürzfarm"},
      {GUID: 114453, Name: "Imkerei"}
    ],
  },
  {
    GUID: 190872,
    Name: "Tierhöfe", //"All animals farms",
    target_: "produktion",
    FileName: "",
    TargetPool: [
      {GUID: 1010263, Name: "Rinderfarm"},
      {GUID: 1010267, Name: "Schäferei"},
      {GUID: 1010269, Name: "Schweinezucht"},
      {GUID: 101269, Name: "Rinderfarm"},
      {GUID: 101272, Name: "Alpakafarm"},
      {GUID: 114456, Name: "Ziegenfarm"},
      {GUID: 114439, Name: "Sanga-Farm"}
    ],
  },
  {
    GUID: 190882,
    Name: "Alle Bergminen", //"All subsurface mines",
    target_: "produktion",
    FileName: "",
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
    FileName: "",
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
    FileName: "",
    TargetPool: [
      {GUID: 1010288, Name: "Segelweberei"},
      {GUID: 1010315, Name: "Weberei"},
      {GUID: 1010325, Name: "Schneiderei"},
      {GUID: 101265, Name: "Segelweberei"},
      {GUID: 101266, Name: "Ponchoweberei"},
      {GUID: 1010318, Name: "Baumwollweberei"},
      {GUID: 114466, Name: "Stickerei"},
      {GUID: 114469, Name: "Teppichknüpferei"},
      {GUID: 118733, Name: "Schuster"},
      {GUID: 118734, Name: "Schneidergeschäft"},
      {GUID: 124739, Name: "Fortschrittliche Baumwollweberei"},
      {GUID: 114441, Name: "Leinenweberei"}
    ],
  },
  {
    GUID: 190897,
    Name: "Alle Nahrungsmittelerzeuger", //"All food productions",
    target_: "produktion",
    FileName: "",
    TargetPool: [
      {GUID: 1010291, Name: "Bäckerei"},
      {GUID: 1010293, Name: "Großküche"},
      {GUID: 1010316, Name: "Metzgerei"},
      {GUID: 1010341, Name: "Schokoladenfabrik"},
      {GUID: 101264, Name: "Küche"},
      {GUID: 101271, Name: "Tortilla-Bäckerei"},
      {GUID: 1010317, Name: "Zuckerraffinerie"},
      {GUID: 1010295, Name: "Konservenfabrik"},
      {GUID: 114444, Name: "Trockenhaus"},
      {GUID: 114471, Name: "Wat-Küche"}
    ],
  },
  {
    GUID: 190901,
    Name: "Alle Brauereien", //"All breweries",
    target_: "produktion",
    FileName: "",
    TargetPool: [
      {GUID: 1010292, Name: "Brauerei"},
      {GUID: 1010294, Name: "Schnapsbrennerei"},
      {GUID: 100659, Name: "Sektkellerei"},
      {GUID: 1010314, Name: "Mälzerei"},
      {GUID: 101252, Name: "Kaffeerösterei"},
      {GUID: 1010340, Name: "Rumbrennerei"},
      {GUID: 124737, Name: "Fortschrittliche Rumbrennerei"},
      {GUID: 124738, Name: "Fortschrittliche Kaffeerösterei"},
      {GUID: 114456, Name: "Ziegenfarm"},
      {GUID: 114468, Name: "Teewürzerei"}
    ],
  },
  {
    GUID: 190914,
    Name: "Alle Schreinereien", //"All carpentry works",
    target_: "produktion",
    FileName: "",
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
    FileName: "",
    TargetPool: [
      {GUID: 1010283, Name: "Ziegelei"},
      {GUID: 101268, Name: "Ziegelei"},
      {GUID: 114467, Name: "Lehmziegelei"}
    ],
  },
  {
    GUID: 191042,
    Name: "Bohrtürme", //"all oil wells",
    target_: "produktion",
    FileName: "",
    TargetPool: [
      {GUID: 101331, Name: "Ölraffinerie"},
      {GUID: 1010561, Name: "Ölraffinerie"}
    ],
  },
  {
    GUID: 191443,
    Name: "Abwehrgeschütze", //"all military buildings",
    target_: "sonstige",
    FileName: "Icons/icon_arrowpoint_right.png",
    TargetPool: [
      {GUID: 1010522, Name: "Geschützstellung"},
      {GUID: 1010523, Name: "Kanonenturm"},
      {GUID: 1010524, Name: "Dicke Berta"},
      {GUID: 101563, Name: "Geschützstellung"},
      {GUID: 101570, Name: "Kanonenturm"},
      {GUID: 101571, Name: "Dicke Berta"},
      {GUID: 117861, Name: "Geschützstellung"},
      {GUID: 117863, Name: "Kanonenturm"}
    ],
  },
  {
    GUID: 191454,
    Name: "_all ships", //"all ships",
    target_: "schiffe",
    FileName: "Icons/icon_arrowpoint_right.png",
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
      //{GUID: 101373, Name: "Die Great Eastern"}
      {GUID: 118718, Name: "Die Great Eastern"}
    ],
  },
  {
    GUID: 191455,
    Name: "_all sailships", //"all sailships",
    target_: "schiffe",
    FileName: "Icons/icon_arrowpoint_right.png",
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
    FileName: "Icons/icon_arrowpoint_right.png",
    TargetPool: [
      {GUID: 100442, Name: "Schlachtkreuzer"},
      {GUID: 119354, Name: "Schlachtkreuzer"},
      {GUID: 100443, Name: "Monitor"},
      {GUID: 1010062, Name: "Frachtschiff"},
      {GUID: 119360, Name: "Frachtschiff"},
      {GUID: 100853, Name: "Öltanker"},
      //{GUID: 101373, Name: "Die Great Eastern"}
      {GUID: 118718, Name: "Die Great Eastern"}
    ]
  },
/*
  {
    GUID: 191457,
    Name: "_all tradeships DONT USE", //"all tradeships DONT USE",
    target_: "schiffe",
    FileName: "Icons/icon_arrowpoint_right.png",
    TargetPool: [
      {GUID: 101121, Name: "Flaggschiff"},
      {GUID: 100438, Name: "Schoner"},
      {GUID: 100441, Name: "Klipper"},
      {GUID: 1010062, Name: "Frachtschiff"},
      {GUID: 100853, Name: "Öltanker"},
      {GUID: 118718, Name: "Die Great Eastern"}
    ]
  },
*/
/*
  {
    GUID: 193898,
    Name: "_all tradeships ALSO DONT USE ANYMORE", //"all tradeships ALSO DONT USE ANYMORE"
    target_: "schiffe",
    FileName: "Icons/icon_arrowpoint_right.png",
    TargetPool: [
      {GUID: 101121, Name: "Flaggschiff"},
      {GUID: 102437, Name: "Imperiales Flaggschiff"},
      {GUID: 100438, Name: "Schoner"},
      {GUID: 100441, Name: "Klipper"},
      {GUID: 1010062, Name: "Frachtschiff"},
      {GUID: 119360, Name: "Frachtschiff"},
      {GUID: 100853, Name: "Öltanker"},
      {GUID: 118718, Name: "Die Great Eastern"},
      {GUID: 102455, Name: "Extravaganter Dampfer"},
      {GUID: 114166, Name: "Luftschiff"},
      {GUID: 101432, Name: "Flaggschiff"},
      {GUID: 119856, Name: "Flaggschiff"},
      {GUID: 80067, Name: "Die Great Eastern"},
      {GUID: 80068, Name: "Klipper"}
    ]
  },
*/
  {
    GUID: 193982,
    Name: "_all tradeships NEW", //"all tradeships NEW"
    target_: "schiffe",
    FileName: "Icons/icon_arrowpoint_right.png",
    TargetPool: [
      {GUID: 101121, Name: "Flaggschiff"},
      {GUID: 102437, Name: "Imperiales Flaggschiff"},
      {GUID: 100438, Name: "Schoner"},
      {GUID: 100441, Name: "Klipper"},
      {GUID: 1010062, Name: "Frachtschiff"},
      {GUID: 119360, Name: "Frachtschiff"},
      {GUID: 100853, Name: "Öltanker"},
      {GUID: 118718, Name: "Die Great Eastern"},
      {GUID: 102455, Name: "Extravaganter Dampfer"},
      {GUID: 114166, Name: "Luftschiff"},
      {GUID: 101432, Name: "Flaggschiff"},
      {GUID: 119856, Name: "Flaggschiff"},
      {GUID: 80067, Name: "Die Great Eastern"},
      {GUID: 80068, Name: "Klipper"},
      {GUID: 103108, Name: "Klipper"},
      {GUID: 114140, Name: "Klipper"},
      {GUID: 80018, Name: "Klipper"}
    ],
  },
  {
    GUID: 191458,
    Name: "_all warships", //"all warships",
    target_: "schiffe",
    FileName: "Icons/icon_arrowpoint_right.png",
    TargetPool: [
      {GUID: 100437, Name: "Kanonenboot"},
      {GUID: 100439, Name: "Fregatte"},
      {GUID: 100440, Name: "Linienschiff"},
      {GUID: 100442, Name: "Schlachtkreuzer"},
      {GUID: 119354, Name: "Schlachtkreuzer"},
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
      {GUID: 102427, Name: "Königliches Linienschiff"},
      {GUID: 101432, Name: "Flaggschiff"},
      {GUID: 119856, Name: "Flaggschiff"}
    ],
  },
  {
    GUID: 191471,
    Name: "Alle Nutzpflanzen-Farmen der Alten Welt", //"all eu farms",
    target_: "produktion",
    FileName: "Icons/icon_arrowpoint_right.png",
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
    FileName: "Icons/icon_arrowpoint_right.png",
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
    FileName: "Icons/icon_arrowpoint_right.png",
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
      {GUID: 1010372, Name: "Marktplatz"},
      {GUID: 114518, Name: "Marktplatz"},
      {GUID: 114519, Name: "Podium"},
      {GUID: 114520, Name: "Kloster"},
      {GUID: 118736, Name: "Funkturm"}
    ],
  },
  {
    GUID: 191508,
    Name: "Hafengebäude", //"all harbour buildings",
    target_: "mixed",
    FileName: "Icons/icon_arrowpoint_right.png",
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
      {GUID: 102284, Name: "Besucherhafen"},
      {GUID: 119259, Name: "Riesiger Ölhafen"},
      {GUID: 119281, Name: "Riesiger Ölhafen"},
      {GUID: 114626, Name: "Kleines Kontor"},
      {GUID: 114627, Name: "Mittleres Kontor"},
      {GUID: 114628, Name: "Großes Kontor"},
      {GUID: 114629, Name: "Kleines Kontor"},
      {GUID: 114630, Name: "Mittleres Kontor"},
      {GUID: 114631, Name: "Großes Kontor"},
      {GUID: 117870, Name: "Depot"},
      {GUID: 117860, Name: "Hafenmeisterei"},
      {GUID: 117864, Name: "Reparaturkran"},
      {GUID: 270172, Name: "Riesiger Ölhafen"},
      {GUID: 119031, Name: "Kleiner Ölhafen"},
      {GUID: 119032, Name: "Mittlerer Ölhafen"},
      {GUID: 119033, Name: "Großer Ölhafen"},
      {GUID: 119034, Name: "Öllager"},
      {GUID: 117871, Name: "Anlegestelle"},
      {GUID: 125193, Name: "Fortschrittliche Anlegestelle"},
      {GUID: 125028, Name: "Fortschrittliche Anlegestelle"},
      {GUID: 125191, Name: "Fortschrittliche Anlegestelle"},
      {GUID: 114440, Name: "Saline"}
    ],
    hasSubgroups: true,
  },
  {
    GUID: 191540,
    Name: "Marktplätze", //"all marketplaces",
    target_: "öffentlich",
    FileName: "Icons/icon_arrowpoint_right.png",
    TargetPool: [
      {GUID: 101257, Name: "Marktplatz"},
      {GUID: 1010372, Name: "Marktplatz"},
      {GUID: 114518, Name: "Marktplatz"}
    ],
  },
  {
    GUID: 191561,
    Name: "Zoologische Gärten", //"all zoo",
    target_: "culture",
    FileName: "3dicons/icon_zoo.png",
    TargetPool: [
      {GUID: 1010470, Name: "Zoo"},
      {GUID: 102282, Name: "Zoo"}
    ],
  },
  {
    GUID: 191562,
    Name: "Museen", //"all museums",
    target_: "culture",
    FileName: "3dicons/icon_museum.png",
    TargetPool: [
      {GUID: 1010471, Name: "Museum"},
      {GUID: 102283, Name: "Museum"}
    ],
  },
  {
    GUID: 191563,
    Name: "Besucherhäfen", //"all visitors piers",
    target_: "culture",
    FileName: "3dicons/icon_visitor_harbour.png",
    TargetPool: [
      {GUID: 100429, Name: "Besucherkai"},
      {GUID: 102284, Name: "Besucherhafen"}
    ],
  },
  {
    GUID: 191592,
    Name: "Lehmgruben", //"all clay",
    target_: "produktion",
    FileName: "3dicons/icon_clay.png",
    TargetPool: [
      {GUID: 100416, Name: "Lehmgrube"},
      {GUID: 101267, Name: "Lehmgrube"}
    ],
  },
  {
    GUID: 191593,
    Name: "Salpeterwerke", //"all niter",
    target_: "produktion",
    FileName: "3dicons/icon_niter.png",
    TargetPool: [
      {GUID: 101303, Name: "Salpeterwerk"},
      {GUID: 1010310, Name: "Salpeterwerk"}
    ],
  },
  {
    GUID: 191887,
    Name: "Reparaturkräne", //"all repair cranes",
    target_: "sonstige",
    FileName: "Icons/icon_arrowpoint_right.png",
    TargetPool: [
      {GUID: 1010525, Name: "Reparaturkran"},
      {GUID: 101573, Name: "Reparaturkran"},
      {GUID: 117864, Name: "Reparaturkran"}
    ],
  },
  {
    GUID: 192179,
    Name: "Alle Gebäude", //"all residences public buildings EU & SA",
    target_: "mixed",
    FileName: "Icons/icon_arrowpoint_right.png",
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
    FileName: "",
    TargetPool: [
      {GUID: 1010325, Name: "Schneiderei"},
      {GUID: 1010315, Name: "Weberei"}
    ],
  },
  {
    GUID: 192418,
    Name: "_Pubs and Boxing Arena", //"Pubs and Boxing Arena",
    target_: "öffentlich",
    FileName: "3dicons/icon_pub.png",
    TargetPool: [
      {GUID: 1010358, Name: "Wirtshaus"},
      {GUID: 101259, Name: "Boxkampfarena"}
    ],
  },
  {
    GUID: 192423,
    Name: "_Engineer Buildings", //"Engineer Buildings",
    target_: "produktion", //+ Kraftwerk
    FileName: "3dicons/resident/icon_resident_engineer.png",
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
    FileName: "3dicons/icon_beer.png",
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
    FileName: "Icons/icon_arrowpoint_right.png",
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
    FileName: "Icons/icon_arrowpoint_right.png",
    TargetPool: [
      {GUID: 1010343, Name: "Bauernhaus"},
      {GUID: 1010344, Name: "Arbeiterhaus"}
    ],
  },
  {
    GUID: 192446,
    Name: "Investoren- und Obrerohäuser", //"Investors and obreros",
    target_: "wohngebäude",
    FileName: "Icons/icon_arrowpoint_right.png",
    TargetPool: [
      {GUID: 1010347, Name: "Investorenhaus"},
      {GUID: 101255, Name: "Obrero-Haus"}
    ],
  },
  {
    GUID: 192466,
    Name: "Segelschiffswerften", //"all sailing shipyards",
    target_: "schiffbau",
    FileName: "Icons/icon_arrowpoint_right.png",
    TargetPool: [
      {GUID: 1010520, Name: "Segelschiffswerft"},
      {GUID: 101277, Name: "Segelschiffswerft"}
    ],
  },
  {
    GUID: 192566,
    Name: "Alkoholproduktionskette", //"Alcohol production chains",
    target_: "produktion",
    FileName: "3dicons/icon_beer.png",
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
    FileName: "Icons/icon_arrowpoint_right.png",
    TargetPool: [
      {GUID: 1010278, Name: "Fischerei"},
      {GUID: 1010310, Name: "Salpeterwerk"},
      {GUID: 1010560, Name: "Quarzgrube"},
      {GUID: 1010339, Name: "Perlenfarm"},
      {GUID: 101262, Name: "Fischölfabrik"},
      {GUID: 101303, Name: "Salpeterwerk"},
      {GUID: 114440, Name: "Saline"},
      {GUID: 118729, Name: "Zuchtbecken"}
    ],
  },
  {
    GUID: 193480,
    Name: "Hafengebäude", //"all loading time buildings",
    target_: "sonstige",
    FileName: "Icons/icon_arrowpoint_right.png",
    TargetPool: [
      {GUID: 190797, Name: "Alle Kontore"},
      {GUID: 100519, Name: "Anlegestelle"},
      {GUID: 100783, Name: "Kleiner Ölhafen"},
      {GUID: 101403, Name: "Mittlerer Ölhafen"},
      {GUID: 101404, Name: "Großer Ölhafen"},
      {GUID: 101344, Name: "Anlegestelle"},
      {GUID: 101329, Name: "Kleiner Ölhafen"},
      {GUID: 101405, Name: "Mittlerer Ölhafen"},
      {GUID: 101406, Name: "Großer Ölhafen"},
      {GUID: 119259, Name: "Riesiger Ölhafen"},
      {GUID: 119281, Name: "Riesiger Ölhafen"},
      {GUID: 117871, Name: "Anlegestelle"},
      {GUID: 125193, Name: "Fortschrittliche Anlegestelle"},
      {GUID: 125028, Name: "Fortschrittliche Anlegestelle"},
      {GUID: 125191, Name: "Fortschrittliche Anlegestelle"},
      {GUID: 270172, Name: "Riesiger Ölhafen"},
      {GUID: 119031, Name: "Kleiner Ölhafen"},
      {GUID: 119032, Name: "Mittlerer Ölhafen"},
      {GUID: 119033, Name: "Großer Ölhafen"}
    ],
    hasSubgroups: true,
  },
  {
    GUID: 193666,
    Name: "Kulturelle Gebäude", //"all culture",
    target_: "culture",
    FileName: "Icons/icon_attractiveness_group.png",
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
    FileName: "3dicons/icon_botanic_garden.png",
    TargetPool: [
      {GUID: 110935, Name: "Botanischer Garten"},
      {GUID: 114141, Name: "Botanischer Garten"}
    ],
  },
  {
    GUID: 193770,
    Name: "Alle arktischen Produktionsgebäude", //"all arctic production",
    target_: "produktion",
    FileName: "Icons/icon_arrowpoint_right.png",
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
    FileName: "Icons/icon_arrowpoint_right.png",
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
    FileName: "Icons/icon_arrowpoint_right.png",
    TargetPool: [
      {GUID: 1010292, Name: "Brauerei"},
      {GUID: 1010294, Name: "Schnapsbrennerei"},
      {GUID: 100659, Name: "Sektkellerei"},
      {GUID: 1010340, Name: "Rumbrennerei"},
      {GUID: 101252, Name: "Kaffeerösterei"},
      {GUID: 114456, Name: "Ziegenfarm"},
      {GUID: 114468, Name: "Teewürzerei"},
      {GUID: 124738, Name: "Fortschrittliche Kaffeerösterei"},
      {GUID: 124737, Name: "Fortschrittliche Rumbrennerei"}
    ],
  },
  {
    GUID: 193856,
    Name: "Alle Produktionsgebäude", //"all production except powerplant",
    target_: "produktion",
    FileName: "Icons/icon_arrowpoint_right.png",
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
      {GUID: 101311, Name: "Goldmine"},
      {GUID: 118571, Name: "Tankhof"},
      {GUID: 269840, Name: "Tankhof"},
      {GUID: 122963, Name: "Wanza-Holzfällerhütte"},
      {GUID: 114456, Name: "Ziegenfarm"},
      {GUID: 114448, Name: "Flachsfarm"},
      {GUID: 114441, Name: "Leinenweberei"},
      {GUID: 114466, Name: "Stickerei"},
      {GUID: 114440, Name: "Saline"},
      {GUID: 114447, Name: "Hibiskusfarm"},
      {GUID: 114468, Name: "Teewürzerei"},
      {GUID: 117743, Name: "Lehmschöpferei"},
      {GUID: 114450, Name: "Tef-Farm"},
      {GUID: 114467, Name: "Lehmziegelei"},
      {GUID: 114451, Name: "Indigofarm"},
      {GUID: 118725, Name: "Keramikwerkstatt"},
      {GUID: 114469, Name: "Teppichknüpferei"},
      {GUID: 114452, Name: "Gewürzfarm"},
      {GUID: 114459, Name: "Tef-Mühle"},
      {GUID: 114471, Name: "Wat-Küche"},
      {GUID: 114472, Name: "Pfeifenmacherei"},
      {GUID: 117744, Name: "Papiermühle"},
      {GUID: 114464, Name: "Laternenmacher"},
      {GUID: 114470, Name: "Buchmalerei"},
      {GUID: 119028, Name: "Tankhof"},
      {GUID: 114453, Name: "Imkerei"},
      {GUID: 114461, Name: "Kerzenzieherei"},
      {GUID: 118733, Name: "Schuster"},
      {GUID: 118734, Name: "Schneidergeschäft"},
      {GUID: 118735, Name: "Telefonfabrik"},
      {GUID: 124738, Name: "Fortschrittliche Kaffeerösterei"},
      {GUID: 124737, Name: "Fortschrittliche Rumbrennerei"},
      {GUID: 124739, Name: "Fortschrittliche Baumwollweberei"},
      {GUID: 118729, Name: "Zuchtbecken"},
      {GUID: 114439, Name: "Sanga-Farm"},
      {GUID: 114444, Name: "Trockenhaus"}
    ],
  },
  {
    GUID: 193859,
    Name: "_all oil harbours moderate", //"all oil harbours moderate"
    target_: "hafen",
    FileName: "Icons/icon_arrowpoint_right.png",
    TargetPool: [
      {GUID: 100783, Name: "Kleiner Ölhafen"},
      {GUID: 101403, Name: "Mittlerer Ölhafen"},
      {GUID: 101404, Name: "Großer Ölhafen"},
      {GUID: 119259, Name: "Riesiger Ölhafen"}
    ],
  },
  {
    GUID: 193860,
    Name: "_all trade unions", //"all trade unions"
    target_: "boost",
    FileName: "3dicons/icon_townhall.png",
    TargetPool: [
      {GUID: 1010516, Name: "Handelskammer"}
    ],
  },
  {
    GUID: 193861,
    Name: "_all engineer residences", //"all engineer residences"
    target_: "wohngebäude",
    FileName: "3dicons/icon_townhall.png",
    TargetPool: [
      {GUID: 1010346, Name: "Ingenieurshaus"}
    ],
  },
  {
    GUID: 193862,
    Name: "_all artisan residences", //"all artisan residences"
    target_: "wohngebäude",
    FileName: "3dicons/icon_townhall.png",
    TargetPool: [
      {GUID: 1010345, Name: "Handwerkerhaus"}
    ],
  },
  {
    GUID: 193863,
    Name: "_all variety theatres", //"all variety theatres"
    target_: "öffentlich",
    FileName: "3dicons/icon_townhall.png",
    TargetPool: [
      {GUID: 1010361, Name: "Varieté"}
    ],
  },
  {
    GUID: 193864,
    Name: "_all power plants", //"all power plants"
    target_: "kraftwerk",
    FileName: "3dicons/icon_townhall.png",
    TargetPool: [
      {GUID: 100780, Name: "Kraftwerk"},
      {GUID: 117547, Name: "Gasbetriebenes Kraftwerk"}
    ],
  },
  {
    GUID: 193865,
    Name: "_all harbourmaster's offices", //"all harbourmaster's offices"
    target_: "boost",
    FileName: "3dicons/icon_townhall.png",
    TargetPool: [
      {GUID: 100586, Name: "Hafenmeisterei"}
    ],
  },
  {
    GUID: 193866,
    Name: "_all depots", //"all depots"
    target_: "hafen",
    FileName: "3dicons/icon_townhall.png",
    TargetPool: [
      {GUID: 1010519, Name: "Depot"}
    ],
  },
  {
    GUID: 193867,
    Name: "_all oil storages", //"all oil storages"
    target_: "hafen",
    FileName: "3dicons/icon_townhall.png",
    TargetPool: [
      {GUID: 100784, Name: "Öldepot"}
    ],
  },
  {
    GUID: 193868,
    Name: "_all pubs", //"all pubs"
    target_: "öffentlich",
    FileName: "3dicons/icon_townhall.png",
    TargetPool: [
      {GUID: 1010358, Name: "Wirtshaus"}
    ],
  },
  {
    GUID: 193869,
    Name: "_all members clubs", //"all members clubs"
    target_: "öffentlich",
    FileName: "3dicons/icon_townhall.png",
    TargetPool: [
      {GUID: 1010364, Name: "Clubhaus"}
    ],
  },
  {
    GUID: 193871,
    Name: "_all banks", //"all banks"
    target_: "öffentlich",
    FileName: "3dicons/icon_townhall.png",
    TargetPool: [
      {GUID: 1010365, Name: "Bankhaus"}
    ],
  },
  {
    GUID: 193872,
    Name: "_all universities", //"all universities"
    target_: "öffentlich",
    FileName: "3dicons/icon_townhall.png",
    TargetPool: [
      {GUID: 1010362, Name: "Universität"}
    ],
  },
  {
    GUID: 193875,
    Name: "Alle Produktionsgebäude (boosted by electricity)", //"all production boosted by electricity"
    target_: "produktion",
    FileName: "Icons/icon_arrowpoint_right.png",
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
      {GUID: 101250, Name: "Brillenfabrik"},
      {GUID: 124738, Name: "Fortschrittliche Kaffeerösterei"},
      {GUID: 124737, Name: "Fortschrittliche Rumbrennerei"},
      {GUID: 124739, Name: "Fortschrittliche Baumwollweberei"},
      {GUID: 118733, Name: "Schuster"},
      {GUID: 118734, Name: "Schneidergeschäft"},
      {GUID: 118735, Name: "Telefonfabrik"}
    ],
  },
  {
    GUID: 193897,
    Name: "Kontore und Anlegestellen", //"all kontors and piers"
    target_: "sonstige",
    FileName: "Icons/icon_arrowpoint_right.png",
    TargetPool: [
      {GUID: 190797, Name: "Alle Kontore"},
      {GUID: 100519, Name: "Anlegestelle"},
      {GUID: 101344, Name: "Anlegestelle"},
      {GUID: 117871, Name: "Anlegestelle"},
      {GUID: 125193, Name: "Fortschrittliche Anlegestelle"},
      {GUID: 125028, Name: "Fortschrittliche Anlegestelle"},
      {GUID: 125191, Name: "Fortschrittliche Anlegestelle"}
    ],
  },
  {
    GUID: 193955,
    Name: "All Enbesan Crop Farms", //"all farms africa"
    target_: "produktion",
    FileName: "Icons/icon_arrowpoint_right.png",
    TargetPool: [
      {GUID: 114448, Name: "Flachsfarm"},
      {GUID: 114447, Name: "Hibiskusfarm"},
      {GUID: 114450, Name: "Tef-Farm"},
      {GUID: 114451, Name: "Indigofarm"},
      {GUID: 114452, Name: "Gewürzfarm"},
      {GUID: 114453, Name: "Imkerei"}
    ],
  },
  {
    GUID: 193958,
    Name: "Rinderfarm", //"all Cattle Farms"
    target_: "produktion",
    FileName: "",
    TargetPool: [
      {GUID: 1010263, Name: "Rinderfarm"},//eu
      {GUID: 101269, Name: "Rinderfarm"}//sa
    ],
  },
  {
    GUID: 193959,
    Name: "_all food production africa", //"all food production africa"
    target_: "produktion",
    FileName: "Icons/icon_arrowpoint_right.png",
    TargetPool: [
      {GUID: 114456, Name: "Ziegenfarm"},
      {GUID: 114439, Name: "Sanga-Farm"},
      {GUID: 114440, Name: "Saline"},
      {GUID: 114444, Name: "Trockenhaus"},
      {GUID: 114447, Name: "Hibiskusfarm"},
      {GUID: 114468, Name: "Teewürzerei"},
      {GUID: 114452, Name: "Gewürzfarm"},
      {GUID: 114450, Name: "Tef-Farm"},
      {GUID: 114459, Name: "Tef-Mühle"},
      {GUID: 118729, Name: "Zuchtbecken"},
      {GUID: 114471, Name: "Wat-Küche"}
    ],
  },
  {
    GUID: 193960,
    Name: "_clay pipe script and lantern production chains", //"clay pipe script and lantern production chains"
    target_: "produktion",
    FileName: "Icons/icon_arrowpoint_right.png",
    TargetPool: [
      {GUID: 117743, Name: "Lehmschöpferei"},
      {GUID: 114472, Name: "Pfeifenmacherei"},
      {GUID: 114451, Name: "Indigofarm"},
      {GUID: 117744, Name: "Papiermühle"},
      {GUID: 114470, Name: "Buchmalerei"},
      {GUID: 114453, Name: "Imkerei"},
      {GUID: 114461, Name: "Kerzenzieherei"},
      {GUID: 114464, Name: "Laternenmacher"}
    ],
  },
  {
    GUID: 124924,
    Name: "_all LoL Cultural Modules", //"all LoL Cultural Modules"
    target_: "culture",
    FileName: "",
    TargetPool: [
      {GUID: 124057, Name: "Bartgeier-Voliere"},
      {GUID: 124087, Name: "Kranich-Voliere"},
      {GUID: 124088, Name: "Flamingo-Voliere"},
      {GUID: 124091, Name: "Flusspferd-Gehege"},
      {GUID: 124094, Name: "Dschelada-Gehege"},
      {GUID: 124101, Name: "Bergnyala-Gehege"},
      {GUID: 124102, Name: "124102"},
      {GUID: 124109, Name: "124109"},
      {GUID: 124110, Name: "124110"},
      {GUID: 124111, Name: "124111"},
      {GUID: 124112, Name: "124112"},
      {GUID: 124113, Name: "124113"},
      {GUID: 124114, Name: "124114"},
      {GUID: 124090, Name: "124090"},
      {GUID: 124084, Name: "124084"},
      {GUID: 124089, Name: "124089"},
      {GUID: 124103, Name: "124103"},
      {GUID: 124104, Name: "124104"},
      {GUID: 124105, Name: "124105"},
      {GUID: 124106, Name: "124106"},
      {GUID: 124107, Name: "124107"},
      {GUID: 124108, Name: "124108"},
      {GUID: 124786, Name: "124786"},
      {GUID: 124787, Name: "124787"},
      {GUID: 124788, Name: "124788"},
      {GUID: 124789, Name: "124789"},
      {GUID: 124790, Name: "124790"},
      {GUID: 124791, Name: "124791"},
      {GUID: 124793, Name: "124793"},
      {GUID: 124794, Name: "124794"},
      {GUID: 124795, Name: "124795"},
      {GUID: 125029, Name: "125029"},
      {GUID: 125030, Name: "125030"},
      {GUID: 125031, Name: "125031"},
      {GUID: 125033, Name: "125033"},
      {GUID: 125034, Name: "125034"}
    ],
  },
  {
    GUID: 125109,
    Name: "alle enbesanischen Nutzpflanzenfarmen", //"all Enbesa Crop Farms"
    target_: "produktion",
    FileName: "",
    TargetPool: [
      {GUID: 114448, Name: "114448"},
      {GUID: 114447, Name: "114447"},
      {GUID: 114450, Name: "114450"},
      {GUID: 114451, Name: "114451"},
      {GUID: 114452, Name: "114452"}
    ],
  },
  {
    GUID: 125110,
    Name: "Alle Wohnhäuser von Enbesa", // "all Enbesa Residences"
    target_: "wohngebäude",
    FileName: "",
    TargetPool: [
      {GUID: 114436, Name: "114436"},
      {GUID: 114437, Name: "114437"}
    ],
  }
  ,{
    GUID: "_silo",
    Name: "_silo",
    target_: "wohngebäude",
    FileName: "",
    TargetPool: [
      {GUID: 114436, Name: "114436"},
      {GUID: 114437, Name: "114437"}
    ],
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
        193957, /* 1-7 _all residences EU & SA without Africa & Scholar */
        190762, /* 1-7,10-12 Alle Wohngebäude */
     // 192179, /* Alle Gebäude */
      ];
    case 2:
      return [
        101254, /* 6 Jornalero-Haus */
        101255, /* 7 Obrero-Haus */
        192446, /* 5,7 Investoren- und Obrerohäuser */
        193957, /* 1-7 _all residences EU & SA without Africa & Scholar */
        190762, /* 1-7,10-12 Alle Wohngebäude */
     // 192179, /* Alle Gebäude */
      ];
    case 3:
      return [
        112091, /* 8 Entdecker-Behausung*/
        112652, /* 9 Techniker-Behausung*/
     // 192179, /* Alle Gebäude */
      ];
    case 4:
      return [
        114436, /* 10 Hirtenhaus */
        114437, /* 11 Ältestenhaus */
        125110, /* 10,11 Alle Wohnhäuser von Enbesa */
        190762, /* 1-7,10-12 Alle Wohngebäude */
     // 192179, /* Alle Gebäude */
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