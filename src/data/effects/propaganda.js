export default {

  defaults: [
    {
      name: "they are happy",
      effects: [
        {
          attribute: "Happiness",
          relative: +0,
        }
      ],
    },
  ],

  /*
  Consumerism
  Austerity
  Martial Law
  State of Emergency
  Warmongery
  Rallying Cry
  War Effort

  3x Anarchist
  */
  replacement: [

    //Ablenkung
    {
      name: "Distraction",
      effects: [
        {
          profile_level_requirement: 0,
          influence_costs: 10,
          effects: null,
        }
      ],
    },
    //Hypnose
    {
      name: "Hypnosis",
      effects: [
        {
          profile_level_requirement: 0,
          influence_costs: 30,
          attribute: "Happiness",
          relative: +5,
        },
        {
          profile_level_requirement: 13,
          influence_costs: 45,
          attribute: "Happiness",
          relative: +10,
        },
        {
          profile_level_requirement: 20,
          influence_costs: 75,
          attribute: "Happiness",
          relative: +15,
        },
      ]
    },
    //Konsum...
    {
      name: "Consumerism",
      effects: [
        {
          profile_level_requirement: 0,
          influence_costs: 25,
          attribute: "tax income",
          percent: +5,
        },
        {
          profile_level_requirement: 12,
          influence_costs: 55,
          attribute: "tax income",
          percent: +10,
        },
        {
          profile_level_requirement: 16,
          influence_costs: 85,
          attribute: "tax income",
          percent: +15,
        },
      ]
    },
    {
      name: "aoeu",
      effects: [
        {
          profile_level_requirement: 0,
          influence_costs: 30,
          attribute: "Happiness",
          relative: +5,
          percent: -0,
        },
        {
          profile_level_requirement: 13,
          influence_costs: 45,
          attribute: "Happiness",
          relative: +10,
          percent: -0,
        },
        {
          profile_level_requirement: 20,
          influence_costs: 75,
          attribute: "Happiness",
          relative: +15,
          percent: -0,
        },
      ]
    },

  ],
}
