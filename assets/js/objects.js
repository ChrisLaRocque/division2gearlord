// General loadout object example
var loadout = {
  primaryWeapon: "",
  secondaryWeapon: "",
  sidearm: "",
  signatureWeapon: "",
  grenade: "",
  mask: "",
  backpack: "",
  vest: "",
  gloves: "",
  holster: "",
  kneepads: "",
  skill1: "",
  skill2: "",
};

// General weapon object example
var weapon = {
  id: "", // Unique num to differentiate
  baseDamage: "", // "Show base damage" in options menu
  rpm: "", // Number shown in stats, includes talents + rate of fire attributes
  mag: "", // Number shown in stats, includes talents + magazine size attributes
  sidearm: false, // For pistols/sawed offs
  rarity: "",
  type: "", // Assault rife/rifle/LMG/SMG/marksman/shotgun/pistol
  variant: "", // BestNadeThrower sheet "Weapon Damage Ranges" tab, variant column
  weapon: "", // BestNadeThrower sheet "Weapon Damage Ranges" tab, weapon column
  optimalRange: "", // BestNadeThrower sheet "Weapon Damage Ranges" tab, optimal range column
  critialHitRange: "", // BestNadeThrower sheet "Weapon Damage Ranges" tab, critical hit range column
  reloadSpeed: "", // Stats menu
  coreAttributes: {}, // Core weapon attributes in inventory page
  attributes: {}, // Other weapon attributes in inventory page
  talent: "", // Weapon talent in inventory page
  weaponHandling: {
    accuracy: "", // Stats menu
    stability: "" // Stats menu
  },
  mods: {
    sights: "",
    magazine: "",
    underbarrel: "",
    muzzle: ""
  }
}

// General attribute object example
var attribute = {
  id: "",
  type: "", // offensive/defensive/skill
  attribute: "",
  value: ""
}

// General grenade object example 
var grenade = {
  type: "",
  damage: "",
  radius: "",
  amount: "",
  specialization: ""
}

// General gear object example
var gear = {
  slot: "",
  brand: "",
  rarity: "",
  named: false,
  name: "",
  coreAttributes: {},
  attributes: {},
  modSlotType: "",
  modSlots: {},
  talent: {}
}