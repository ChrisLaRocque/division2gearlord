// Rarity Options
var rarity = {
  worn: "Worn",
  standard: "Standard",
  specialized: "Specialized",
  superior: "Superior",
  highEnd: "High End",
  gearSet: "Gear Set",
  exotic: "Exotic",
  signature: "Signature Weapon"
};

// Weapon Types
var type = {
  assaultRifle: {
    name: "Assault Rifle",
    icon: "flaticon-rifle"
  },
  lightMachineGun: {
    name: "Light Machine Gun",
    icon: "flaticon-machine-gun"
  },
  marksmanRifle: { 
    name: "Marksman Rifle",
    icon: "flaticon-sniper"
},
  pistol: {
    name: "Pistol",
    icon: "flaticon-gun"
  },
  rifle: {
    name: "Rifle",
    icon: "flaticon-rifle-1"
  },
  shotgun: {
    name: "Shotgun",
    icon: "flaticon-shotgun-1",
  },
  subMachineGun: {
    name: "Sub Machine Gun",
    icon: "flaticon-shotgun"
  }
};

// Gear Slots
var slots = {
  mask: "Mask",
  backpack: "Backpack",
  vest: "Vest",
  gloves: "Gloves",
  holster: "Holster",
  kneepads: "Kneepads"
};

// Sources
var sources = {
  brand: "brand",
  scavenged: "scavenged",
  looted: "looted",
};

var weaponAttributes = {
  core: {
    rifleDamage: {
      name: "Rifle Damage",
    },
    criticalHitDamage: {
      name: "Critical Hit Damage"
    },
    marksmanRifleDamage: {
      name: "Marksman Rifle Damage"
    },
    headshotDamage: {
      name: "Headshot Damage"
    },
    pistolDamage: {
      name: "Pistol Damage"
    }
  },
  damageToArmor: {
    name: "Damage To Armor"
  },
  damageToTargetsOutOfCover: {
    name: "Damage to target out of cover"
  },
  reloadSpeed: {
    name: "Reload Speed"
  }
};

// Gear Attributes. Excluding weapons and mod slots 
var gearAttributes = {
  core: {
    weaponDamage: {
      name: "Weapon Damage"
    },
    armor: "Armor",
    skillTier: "Skill Tier"
  },
  offensive: {
    criticalHitChance: {
      name: "Critical Hit Chance"
    },
    criticalHitDamage: {
      name: "Critical Hit Damage"
    },
    headshotDamage: {
      name: "Headshot Damage"
    },
    weaponHandling: {
      name: "Weapon Handling"
    },
    // Technically nadethrower's list ends here, not sure if what I've done is the best organization
    damageToArmor: "Damage to Armor",
    damageToHealth: "Damage to Health",
    damageToTargetsOutOfCover: "Damage to Targets Out of Cover",
    accuracy: "",
    stability: "",
    ammoCapacity: "",
    weapon: {
      assaultRifleDamage: "",
      lightMachineGunDamage: "",
      marksmanRifleDamage: "Marksman Rifle Damage",
      pistolDamage: "",
      rifleDamage: "",
      shotgunDamage: "",
      subMachineGunDamage: ""
    },
  },
  defensive: {
    armorRegeneration: "Armor Regeneration",
    explosiveResistance: "Explosive Resistance",
    hazardProtection: {
      name: "Hazard Protection"
    },
    health: "Health",
    extraIncomingHealing: "Extra Incoming Healing",
    totalArmor: "Total Armor"
  },
  utility: {
    skillDamage: "",
    skillHaste: "",
    skillRepair: "",
    statusEffects: {
      name: "Status Effects"
    }
  },
  mods: {
    criticalHitChance: {
      name: "Critical Hit Chance"
    },
    skillHaste: {
      name: "Skill Haste"
    }
  },
  brand: {
    accuracy: 0,
    ammoCapacity: 0,
    armorRegeneration: 0,
    assaultRifleDamage: 0,
    cooldownReduction: 0,
    criticalHitChance: 0,
    criticalHitDamage: 0,
    damagetoArmor: 0,
    extraIncomingHealing: 0,
    explosiveDamage: 0,
    explosiveResistance: 0,
    hazardProtection: 0,
    headshotDamage: 0,
    health: 0,
    lightMachineGunDamage: 0,
    marksmanRifleDamage: 0,
    pistolDamage: 0,
    pulseResistance: 0,
    rifleDamage: 0,
    reloadSpeed: 0,
    skillDamage: 0,
    skillDuration: 0,
    skillRepair: 0,
    shotgunDamage: 0,
    stability: 0,
    statusEffects: 0,
    subMachineGunDamage: 0,
    totalArmor: 0,
    weaponDamage: 0,
    weaponHandling: 0
  }
};

var talents = {
  composure: {
    name: "Composure",
    info: "While in cover, increases total weapon damage by 15%.",
    on: [slots.backpack, ]
  },
  perfectGlassCannon: {
    name: "Perfect Glass Cannon",
    info: "All damage you deal is amplified by 30%. All damage you take is amplified by 60%"
  },
  perfectLuckyShot: {
    name: "Perfect Lucky Shot",
    info: "Magazine capacity is increased by 30%. Missed shots from cover have a 100% chance to return to the magazine."
  },
  ranger: {
    name: "Ranger",
    info: "Amplifies weapon damage by 2% for every 5 meters you are away from your target."
  },
  reformation: {
    name: "Reformation",
    info: "Headshots grant 30% skill repair for 8 seconds."
  },
  perfectUnwavering: {
    name: "Perfect Unwavering",
    info: "Swapping to this weapon grants +400% weapon handling for 5s. Kills refresh the buff. Swapping away disables this from all weapons for 5s."
  }
};