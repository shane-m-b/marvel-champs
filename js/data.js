//LEVELS
//Heroes:       1000
//Aspects:      2000
//Villains:     3000
//Encounters:   4000

var MCLCG_DATA = {
  "latest_release": "Ant-Man",
  "latest_release_date": "11/06/2020",
    //REGION: Heroes
  "heroes": {
    "black_panther": {
      "id": "1005",
      "name": "Black Panther",
      "starter_aspect": "Protection",
      "nemesis": "Killmonger",
      "nemesis_scheme": "Usurp the Throne",
      "obligation": "Affairs of State",
      "image": "black_panther.png",
      "release": "Core Set",
      "active": true
    },
    "captain_marvel": {
      "id": "1002",
      "name": "Captain Marvel",
      "starter_aspect": "Leadership",
      "nemesis": "Yon-Rogg",
      "nemesis_scheme": "The Psyche-Magnitron",
      "obligation": "Family Emergency",
      "image": "captain_marvel.png",   
      "release": "Core Set",
      "active": true
    },
    "iron_man": {
      "id": "1004",
      "name": "Iron Man",
      "starter_aspect": "Aggression",
      "nemesis": "Whiplash",
      "nemesis_scheme": "Imminent Overload",
      "obligation": "Business Problems",
      "image": "iron_man.png",
      "release": "Core Set",
      "active": true
    },
    "spider-man": {
      "id": "1001",
      "name": "Spider-Man",
      "starter_aspect": "Justice",
      "nemesis": "Vulture",
      "nemesis_scheme": "Highway Robbery",
      "obligation": "Eviction Notice",
      "image": "spider-man.png",
      "release": "Core Set",
      "active": true
    },
    "she-hulk": {
      "id": "1003",
      "name": "She-Hulk",
      "starter_aspect": "Aggression",
      "nemesis": "Titania",
      "nemesis_scheme": "Personal Challenge",
      "obligation": "Legal Work",
      "image": "she-hulk.png",
      "release": "Core Set",
      "active": true
    },
    "captain_america": {
      "id": "1006",
      "name": "Captain America",
      "starter_aspect": "Leadership",
      "nemesis": "Baron Zemo",
      "nemesis_scheme": "Hit Squad",
      "obligation": "Man Out of Time",
      "image": "captain_america.png",
      "release": "Hero Pack",
      "active": true
    },
   "ms_marvel": {
      "id": "1007",
      "name": "Ms. Marvel",
      "starter_aspect": "Protection",
      "nemesis": "Thomas Edison",
      "nemesis_scheme": "Generation Why?",
      "obligation": "Home Before Dawn",
      "image": "ms_marvel.png",
      "release": "Hero Pack",
      "active": true
    },
    "thor": {
      "id": "1008",
      "name": "Thor",
      "starter_aspect": "Aggression",
      "nemesis": "Loki",
      "nemesis_scheme": "Family Feud",
      "obligation": "Odin's Anger",
      "image": "thor.png",
      "release": "Hero Pack",
      "active": true
    },
    "black_widow": {
      "id": "1009",
      "name": "Black Widow",
      "starter_aspect": "Justice",
      "nemesis": "Taskmaster",
      "nemesis_scheme": "<unknown>",
      "obligation": "Burn Notice",
      "image": "black_widow.png",
      "release": "Hero Pack",
      "active": true
    },
    "doctor_strange": {
      "id": "1010",
      "name": "Doctor Strange",
      "starter_aspect": "Protection",
      "nemesis": "Baron Mordo",
      "nemesis_scheme": "<unknown>",
      "obligation": "<unkown>",
      "image": "doctor_strange.png",
      "release": "Hero Pack",
      "active": true
    },
    "hulk": {
      "id": "1011",
      "name": "Hulk",
      "starter_aspect": "Aggression",
      "nemesis": "Abomination",
      "nemesis_scheme": "<unknown>",
      "obligation": "Inner Demons",
      "image": "hulk.png",
      "release": "Hero Pack",
      "active": true
    },
    "hawkeye": {
        "id": "1012",
        "name": "Hawkeye",
        "starter_aspect": "Leadership",
        "nemesis": "Crossfire",
        "nemesis_scheme": "<unknown>",
        "obligation": "<unkown>",
        "image": "hawkeye.png",
        "release": "The Rise of Red Skull",
        "active": true
      },
      "spider-woman": {
        "id": "1013",
        "name": "Spider-Woman",
        "starter_aspect": "<unknown>",
        "nemesis": "The Viper",
        "nemesis_scheme": "<unknown>",
        "obligation": "<unkown>",
        "image": "spider-woman.png",
        "release": "The Rise of Red Skull",
        "active": true
      },
      "ant-man": {
        "id": "1014",
        "name": "Ant-Man",
        "starter_aspect": "Leadership",
        "nemesis": "<unknown>",
        "nemesis_scheme": "<unknown>",
        "obligation": "<unkown>",
        "image": "ant-man.png",
        "release": "Hero Pack",
        "active": true
      },
      "wasp": {
        "id": "1015",
        "name": "Wasp",
        "starter_aspect": "Aggression",
        "nemesis": "<unknown>",
        "nemesis_scheme": "<unknown>",
        "obligation": "<unkown>",
        "image": "wasp.png",
        "release": "Hero Pack",
        "active": false
      },
      "quicksilver": {
        "id": "1016",
        "name": "Quicksilver",
        "starter_aspect": "Protection",
        "nemesis": "<unknown>",
        "nemesis_scheme": "<unknown>",
        "obligation": "<unkown>",
        "image": "quicksilver.png",
        "release": "Hero Pack",
        "active": false
      },
      "scarlet_witch": {
        "id": "1017",
        "name": "Scarlet Witch",
        "starter_aspect": "Protection",
        "nemesis": "<unknown>",
        "nemesis_scheme": "<unknown>",
        "obligation": "<unkown>",
        "image": "scarlet_witch.png",
        "release": "Hero Pack",
        "active": false
      }
  },
    //REGION:Aspects
  "aspects": {
    "aggression": {
      "id": "2001",
      "name": "Aggression",
      "image": "aggression_core_set.png",
      "release": "Core Set",
      "variants": ["core_set", "thor", "hulk", "wasp"]
    },
    "justice": {
      "id": "2002",
      "name": "Justice",
      "image": "justice_core_set.png",
      "release": "Core Set",
      "variants": ["core_set", "black_widow", "scarlet_witch"]
    },
    "leadership": {
      "id": "2003",
      "name": "Leadership",
      "image": "leadership_core_set.png",
      "release": "Core Set",
      "variants": ["core_set", "captain_america", "hawkeye", "ant-man"]
    },
    "protection": {
      "id": "2004",
      "name": "Protection",
      "image": "protection_core_set.png",
      "release": "Core Set",
      "variants": ["core_set", "ms_marvel", "doctor_strange", "quicksilver"]
    }
  },
    //REGION:Scenarios
  "villains": {
    "rhino": {
      "id": "3001",
      "name": "Rhino",
      "starter_encounter": "Bomb Scare",
      "image": "rhino.png",
      "release": "Core Set",
      "active": true
    },
    "klaw": {
      "id": "3002",
      "name": "Klaw",
      "starter_encounter": "Masters of Evil",
      "image": "klaw.png",
      "release": "Core Set",
      "active": true
    },
    "ultron": {
      "id": "3003",
      "name": "Ultron",
      "starter_encounter": "Under Attack",
      "image": "ultron.png",
      "release": "Core Set",
      "active": true
    },
    "green_goblin_rb": {
      "id": "3004",
      "name": "Green Goblin (Risky Business)",
      "starter_encounter": "Goblin Gimmicks",
      "image": "green_goblin_rb.png",
      "release": "Scenario Pack",
      "active": true
    },
    "green_goblin_mf": {
      "id": "3005",
      "name": "Green Goblin (Mutagen Formula)",
      "starter_encounter": "Goblin Gimmicks",
      "image": "green_goblin_mf.png",
      "release": "Scenario Pack",
      "active": true
    },
    "wrecking_crew": {
      "id": "3006",
      "name": "Wrecking Crew",
      "starter_encounter": "<unkown>",
      "image": "wrecking_crew.png",
      "release": "Scenario Pack",
      "active": true
    },
    "crossbones": {
      "id": "3007",
      "name": "Crossbones",
      "starter_encounter": "<unkown>",
      "image": "crossbones.png",
      "release": "The Rise of Red Skull",
      "active": true
    },
    "absorbing_man": {
      "id": "3008",
      "name": "Absorbing Man",
      "starter_encounter": "<unkown>",
      "image": "absorbing_man.png",
      "release": "The Rise of Red Skull",
      "active": true
    },
    "taskmaster": {
      "id": "3009",
      "name": "Taskmaster",
      "starter_encounter": "<unkown>",
      "image": "taskmaster.png",
      "release": "The Rise of Red Skull",
      "active": true
    },
    "zola": {
      "id": "3010",
      "name": "Zola",
      "starter_encounter": "<unkown>",
      "image": "zola.png",
      "release": "The Rise of Red Skull",
      "active": true
    },
    "red_skull": {
      "id": "3011",
      "name": "Red Skull",
      "starter_encounter": "<unkown>",
      "image": "red_skull.png",
      "release": "The Rise of Red Skull",
      "active": true
    }, 
      "kang": {
      "id": "3012",
      "name": "Kang the Conquerer",
      "starter_encounter": "<unkown>",
      "image": "kang.png",
      "release": "Scenario Pack",
      "active": true
      }
  },
    //REGION: Encounters
  "encounter_sets": {
    "bomb_scare": {
      "id": "4001",
      "name": "Bomb Scare",
      "image": "bomb_scare.png",
      "release": "Core Set",
      "active": true
    },
    "masters_of_evil": {
      "id": "4002",
      "name": "The Masters of Evil",
      "image": "masters_of_evil.png",
      "release": "Core Set",
      "active": true,
      "sorting_name": "Masters of Evil, The"
    },
    "under_attack": {
      "id": "4003",
      "name": "Under Attack",
      "image": "under_attack.png",
      "release": "Core Set",
      "active": true
    },
    "legions_of_hydra": {
      "id": "4004",
      "name": "Legions of Hydra",
      "image": "legions_of_hydra.png",
      "release": "Core Set",
      "active": true
    },
    "doomsday_chair": {
      "id": "4005",
      "name": "The Doomsday Chair",
      "image": "doomsday_chair.png",
      "release": "Core Set",
      "active": true,
      "sorting_name": "Doomsday Chair, The"
    },
    "goblin_gimmicks": {
      "id": "4006",
      "name": "Goblin Gimmicks",
      "image": "goblin_gimmicks.png",
      "release": "The Green Goblin",
      "active": true
    },
    "mess_of_things": {
      "id": "4007",
      "name": "A Mess of Things",
      "image": "mess_of_things.png",
      "release": "The Green Goblin",
      "active": true,
      "sorting_name": "Mess of Things, A"
    },
    "power_drain": {
      "id": "4008",
      "name": "Power Drain",
      "release": "The Green Goblin",
      "image": "power_drain.png",
      "active": true
    },
    "running_interference": {
      "id": "4009",
      "name": "Running Interference",
      "release": "The Green Goblin",
      "image": "running_interference.png",
      "active": true
    }, 
    "hydra_assault": {
      "id": "4010",
      "name": "Hydra Assault",
      "release": "The Rise of Red Skull",
      "image": "hydra_assault.png",
      "active": true
    },
    "hydra_patrol": {
      "id": "4011",
      "name": "Hydra Patrol",
      "release": "The Rise of Red Skull",
      "image": "hydra_patrol.png",
      "active": true
    },
    "weapon_master": {
      "id": "4012",
      "name": "Weapon Master",
      "release": "The Rise of Red Skull",
      "image": "weapon_master.png",
      "active": true
    },
    "temporal": {
      "id": "4013",
      "name": "Temporal",
      "release": "The Once and Future Kang",
      "image": "temporal.png",
      "active": true
    },
    "anachronauts": {
      "id": "4014",
      "name": "Anachronauts",
      "release": "The Once and Future Kang",
      "image": "anachronauts.png",
      "active": true
    },
      "master_of_time": {
      "id": "4014",
      "name": "Master of Time",
      "release": "The Once and Future Kang",
      "image": "master_of_time.png",
      "active": true
    }

//    "test_encounter_01": {
//      "id": "9999",
//      "name": "Red Skull Murders You",
//      "release": "The Rise of Red Skull",
//      "image": "default_encounter.png",
//      "active": false
//    }
  },
  "unreleased": {   //NOT YET RELEASED HEROES AND VILLAINS

  }
}