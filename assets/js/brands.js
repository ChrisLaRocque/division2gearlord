var brandBonuses = {
  accuracy: {
    percent: 10,
    attribute: gearAttributes.brand.accuracy, 
    text: "10% Accuracy"},
  ammoCapacity: {
    percent: 20,
    attribute: gearAttributes.brand.ammoCapacity,
    text: "10% Accuracy"},
  armorRegeneration: {
    percent: 1,
    attribute: gearAttributes.brand.armorRegeneration,
    text: "1% Armor/sec Regeneration"},
  assaultRifleDamage: {
    percent: 10, 
    attribute: gearAttributes.brand.assaultRifleDamage, 
    text: "10% Assault Rifle Damage"},
  cooldownReduction: {
    percent: 10,
    attribute: gearAttributes.brand.cooldownReduction,
    text: "10% Cooldown Reduction"},
  criticalHitChance: {
    percent: 10, 
    attribute: gearAttributes.brand.criticalHitChance, 
    text: "10% Critical Hit Chance"},
  criticalHitDamage: {
    percent: 15, 
    attribute: gearAttributes.brand.criticalHitDamage, 
    text: "15% Critical Hit Damage"},
  damagetoArmor: {
    percent: 5,
    attribute: gearAttributes.brand.damagetoArmor, 
    text: "5% Damage to Armor"},
  extraIncomingHealing: {
    percent: 15, 
    attribute: gearAttributes.brand.extraIncomingHealing, 
    text: "15% Extra Incoming Healing"},
  explosiveDamage: {
    percent: 15, 
    attribute: gearAttributes.brand.explosiveDamage, 
    text: "15% Explosive Damage"},
  explosiveResistance: {
    percent: 10,
    attribute: gearAttributes.brand.explosiveResistance,
    text: "10% Explosive Resistance"},
  hazardProtection: {
    percent: 10, 
    attribute: gearAttributes.brand.hazardProtection, 
    text: "10% Hazard Protection"},
  headshotDamage: {
    percent: 10, 
    attribute: gearAttributes.brand.headshotDamage, 
    text: "10% Headshot Damage"},
  health: {
    percent: 10, 
    attribute: gearAttributes.brand.health, 
    text: "10% Health"},
  lightMachineGunDamage: {
    percent: 10,
    attribute: gearAttributes.brand.lightMachineGunDamage,
    text: "10% LMG Damage"},
  marksmanRifleDamage: {
    percent: 10, 
    attribute: gearAttributes.brand.marksmanRifleDamage, 
    text: "10% Marksman Rifle Damage"},
  pistolDamage: {
    percent: 20, 
    attribute: gearAttributes.brand.pistolDamage, 
    text: "20% Pistol Damage"},
  pulseResistance: {
    percent: 40,
    attribute: gearAttributes.brand.pulseResistance,
    text: "40% Pulse Resistance"},
  rifleDamage: {
    percent: 10,
    attribute: gearAttributes.brand.rifleDamage,
    text: "10% Rifle Damage"},
  reloadSpeed: {
    percent: 10, 
    attribute: gearAttributes.brand.reloadSpeed, 
    text: "10% Reload Speed"},
  skillDamage: {
    percent: 10,
    attribute: gearAttributes.brand.skillDamage,
    text: "10% Skill Damage"},
  skillDuration: {
    percent: 20, 
    attribute: gearAttributes.brand.skillDuration, 
    text:"20% Skill Duration"},
  skillRepair: {
    percent: 15, 
    attribute: gearAttributes.brand.skillRepair, 
    text: "15% Skill Repair"},
  shotgunDamage: {
    percent: 10, 
    attribute: gearAttributes.brand.shotgunDamage, 
    text: "10% Shotgun Damage"},
  stability: {
    percent: 10, 
    attribute: gearAttributes.brand.stability, 
    text: "10% Stability"},
  statusEffects: {
    percent: 10, 
    attribute: gearAttributes.brand.statusEffects, 
    text: "10% Status Effects"},
  subMachineGunDamage: {
    percent: 10,
    attribute: gearAttributes.brand.subMachineGunDamage,
    text: "10% SMG Damage"},
  totalArmor: {
    percent: 5, 
    attribute: gearAttributes.brand.totalArmor, 
    text: "5% Total Armor"},
  weaponDamage: {
    percent: 5,
    attribute: gearAttributes.brand.weaponDamage,
    text: "5% Weapon Damage"},
  weaponHandling: {
    percent: 10,
    attribute: gearAttributes.brand.weaponHandling,
    text: "10% Weapon Handling"}
};

var brands = {
  fiveEleven: {
    id: "fiveEleven",
    name: "5.11 Tactical",
    bonuses: [brandBonuses.health, brandBonuses.extraIncomingHealing, brandBonuses.hazardProtection],
    mask: "",
    backpack: {
      allHazardsNitroBackpack: { name: "All Hazards Nitro Backpack" },
      allHazardsPrimeBackpack: { name: "All Hazards Nitro Backpack" },
      amp24: { name: "AMP 24" },
      rush12Backpack: { name: "RUSH12 Backpack" },
      rush24Backpack: { name: "RUSH24 Backpack" },
      rush72Backpack: { name: "RUSH72 Backpack" }
    },
    vest: "",
    gloves: {
      stationGripGloves: {
        name: "Station Grip Gloves"
      }
    },
    holster: "",
    kneepads: ""
  },
  acesAndEights: {
    id: "acesAndEights",
    name: "Aces and Eights",
    bonuses: [],
    mask: "",
    backpack: {
    zibaLowProfilePack: { name: "Ziba Low Profile Pack" }
    },
    vest: "",
    gloves: "",
    holster: "",
    kneepads: ""
  },
  airaldiHoldings: {
    id: "airaldiHoldings",
    name: "Airaldi Holdings",
    bonuses: [brandBonuses.marksmanRifleDamage, brandBonuses.headshotDamage, brandBonuses.damagetoArmor],
    mask: "",
    backpack: {
      apolloOperatorPack: { name: "Apollo Operator Pack" },
      demeterQuickStash: { name: "Demeter Quick Stash" }
    },
    vest: "",
    gloves: "",
    holster: "",
    kneepads: {
      dionysusRoundedPadding: {
        name: "Dionysus Rounded Padding"
      }
    }
  },
  alpsSummitArmaments: {
    id: "alpsSummitArmaments",
    name: "Alps Summit Armaments",
    bonuses: [brandBonuses.skillRepair, brandBonuses.skillDuration, brandBonuses.cooldownReduction],
    mask: "",
    backpack: {
      elementOutdoorsRucksack: { name: "Element Outdoors Rucksack" },
      mountainHikingPack: { name: "Mountain Hiking Pack" },
      trekkingElitePack: { name: "Trekking Elite Pack" }
    },
    vest: "",
    gloves: "",
    holster: "",
    kneepads: ""
  },
  badgerTuff: {
    id: "badgerTuff",
    name: "Badger Tuff",
    bonuses: [brandBonuses.shotgunDamage, brandBonuses.totalArmor, brandBonuses.hazardProtection],
    mask: "",
    backpack: {
      longRangePackSett: { name: "Long Range Pack 'Sett'" },
      roamerPackSow: { name: "Roamer Pack 'Sow'" },
      winterCaryallBergmann: { name: "Winter Caryall Bergmann" }
    },
    vest: "",
    gloves: "",
    holster: "",
    kneepads: ""
  },
  ceskaVyroba: {
    id: "ceskaVyroba",
    name: "Česká Výroba s.r.o.",
    bonuses: [brandBonuses.criticalHitChance, brandBonuses.hazardProtection, brandBonuses.health],
    mask: "",
    backpack: "",
    vest: "",
    gloves: {
      nBCGloves: {
        name: "NBC Gloves",
        named: false
      }
    },
    holster: "",
    kneepads: ""
  },
  chinaLightIndustriesCorporation: {
    id: "chinaLightIndustriesCorporation",
    name: "China Light Industries Corporation",
    bonuses: [brandBonuses.explosiveDamage, brandBonuses.cooldownReduction, brandBonuses.statusEffects],
    mask: "",
    backpack: "",
    vest: "",
    gloves: "",
    holster: "",
    kneepads: ""
  },
  douglasAndHarding: {
    id: "douglasAndHarding",
    name: "Douglas and Harding",
    bonuses: [brandBonuses.pistolDamage, brandBonuses.cooldownReduction, brandBonuses.statusEffects],
    mask: "",
    backpack: "",
    vest: "",
    gloves: "",
    holster: "",
    kneepads: ""
  },
  fenrisGroupAB: {
    id: "fenrisGroupAB",
    name: "Fenris Group AB",
    bonuses: [brandBonuses.assaultRifleDamage, brandBonuses.reloadSpeed, brandBonuses.stability],
    mask: "",
    backpack: "",
    vest: "",
    gloves: "",
    holster: "",
    kneepads: ""
  },
  gilaGuard: {
    id: "gilaGuard",
    name: "Gila Guard",
    bonuses: [brandBonuses.totalArmor, brandBonuses.health, brandBonuses.armorRegeneration],
    mask: "",
    backpack: {
      bigHornPack: {name: "Big Horn Pack"},
      gilaInventorySystem: {name: "Gila Inventory System"}
    },
    vest: "",
    gloves: "",
    holster: "",
    kneepads: ""
  },
  golanGear: {
    id: "golanGear",
    name: "Golan Gear",
    bonuses: [brandBonuses.statusEffects, brandBonuses.armorRegeneration, brandBonuses.totalArmor],
    mask: "",
    backpack: "",
    vest: "",
    gloves: "",
    holster: "",
    kneepads: ""
  },
  grupoSombraSA: {
    id: "grupoSombraSA",
    name: "Grupo Sombra S.A.",
    bonuses: [brandBonuses.criticalHitDamage, brandBonuses.explosiveDamage, brandBonuses.headshotDamage],
    mask: "",
    backpack: {
      antumbraBackpack: {
        name: "Antumbra Backpack",
        named: false
      }
    },
    vest: "",
    gloves: "",
    holster: "",
    kneepads: ""
  },
  hardWired: {
    id: "hardWired",
    name: "Hard Wired",
    backpack: {
      abbertonDynamoCarrier: { name: "Abberton Dynamo Carrier"}
    }
  },
  hanaUCorporation: {
    id: "hanaUCorporation",
    name: "Hana-U Corporation",
    bonuses: [brandBonuses.cooldownReduction, brandBonuses.skillDamage, brandBonuses.weaponDamage],
    mask: "",
    backpack: "",
    vest: "",
    gloves: "",
    holster: "",
    kneepads: ""
  },
  murakamiIndustries: {
    id: "murakamiIndustries",
    name: "Murakami Industries",
    bonuses: [brandBonuses.skillDuration, brandBonuses.skillRepair, brandBonuses.skillDamage],
    mask: "",
    backpack: {
      horoCarryBackpack: {name: "Horo Carry Backpack"},
      sashimonoBackpack: {name: "Sashimono Backpack"}
    },
    vest: "",
    gloves: "",
    holster: "",
    kneepads: ""
  },
  negotiatorsDelimma: {
    id: "negotiatorsDelimma",
    name: "Negotiator's Delimma",
    backpack: {
      nibbleBackpack: {name: "Nibble Backpack"}
    }
  },
  ongoingDirective: {
    id: "ongoingDirective",
    name: "Ongoing Directive",
    backpack: {
      loadoutFrame: {name: "Loadout Frame"}
    }
  },
  overlordArmaments: {
    id: "overlordArmaments",
    name: "Overlord Armaments",
    bonuses: [brandBonuses.rifleDamage, brandBonuses.accuracy, brandBonuses.weaponHandling],
    mask: {
      deadstickProtectionMask: {
        id: "deadstickProtectionMask",
        named: false,
        name: "Deadstick Protection Mask"
      }
    },
    backpack: "",
    vest: "",
    gloves: "",
    holster: "",
    kneepads: ""
  },
  petrovDefenseGroup: {
    id: "petrovDefenseGroup",
    name: "Petrov Defense Group",
    bonuses: [brandBonuses.lightMachineGunDamage, brandBonuses.weaponHandling, brandBonuses.ammoCapacity],
    mask: "",
    backpack: {
      supportWeaponsBag: {
        name: "Support Weapons Bag"
      },
      tacSackMKII: {
        name: "Tac Sack MKII"
      }
    },
    vest: "",
    gloves: "",
    holster: "",
    kneepads: ""
  },
  providenceDefense: {
    id: "providenceDefense",
    name: "Providence Defense",
    bonuses: [brandBonuses.headshotDamage, brandBonuses.criticalHitChance, brandBonuses.criticalHitDamage],
    mask: "",
    backpack: "",
    vest: {
      theSacrificeVest: {
        name: "The Sacrifice Vest",
        named: true
      }
    },
    gloves: "",
    holster: {
      modularHolster: {
        name: "Modular Holster",
        named: false
      }
    },
    kneepads: ""
  },
  richterKaiser: {
    id: "richterKaiser",
    name: "Richter & Kaiser GmbH",
    bonuses: [brandBonuses.extraIncomingHealing, brandBonuses.explosiveResistance, brandBonuses.skillRepair],
    mask: "",
    backpack: "",
    vest: "",
    gloves: "",
    holster: "",
    kneepads: ""
  },
  sokolovConcern: {
    id: "sokolovConcern",
    name: "Sokolov Concern",
    bonuses: [brandBonuses.subMachineGunDamage, brandBonuses.criticalHitDamage, brandBonuses.criticalHitChance],
    mask: "",
    backpack: "",
    vest: "",
    gloves: "",
    holster: "",
    kneepads: ""
  },
  wyvernWear: {
    id: "wyvernWear",
    name: "Wyvern Wear",
    bonuses: [brandBonuses.skillDamage, brandBonuses.statusEffects, brandBonuses.skillDuration],
    mask: "",
    backpack: "",
    vest: "",
    gloves: "",
    holster: "",
    kneepads: ""
  },
  yaahlGear: {
    id: "yaahlGear",
    name: "Yaahl Gear",
    bonuses: [brandBonuses.hazardProtection, brandBonuses.weaponDamage, brandBonuses.pulseResistance],
    mask: "",
    backpack: "",
    vest: "",
    gloves: "",
    holster: "",
    kneepads: ""
  }
};

