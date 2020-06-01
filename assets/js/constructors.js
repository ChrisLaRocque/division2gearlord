// Weapon Constructor
function weapon
  (
    id,
    baseDamage,
    type,
    weapon,
    rarity,
    coreAttributes,
    attributes,
    talent,
    weaponHandling,
    mods
  ) {
  this.id = id;
  this.baseDamage = baseDamage;
  this.type = type;
  this.weapon = weapon;
  this.rarity = rarity;
  this.coreAttributes = coreAttributes;
  this.attributes = attributes;
  this.talent = talent;
  this.weaponHandling = weaponHandling;
  this.mods = mods;

  this.name = weapon.name;
  this.named = weapon.named;
  this.optimalRange = weapon.optimalRange
  this.criticalHitRange = weapon.criticalHitRange;
  this.reloadSpeed = weapon.reloadSpeed;
  this.rpm = weapon.rpm;
  this.magSize = weapon.magSize;

  // this.type = type;
  // this.variant = variant;
};

// Gear constructor
function gear
  (
    id,
    brand,
    item,
    rarity,
    armor,
    coreAttributes,
    attributes,
    modSlotType,
    modSlots,
    talent
  ) {
  this.id = id;
  this.brand = brand;
  this.item = item;
  this.rarity = rarity;
  this.armor = armor;
  this.coreAttributes = coreAttributes;
  this.attributes = attributes;
  this.modSlotType = modSlotType;
  this.modSlots = modSlots;
  this.talent = talent;

};

// Loadout constructor
function loadout
  (
    primaryWeapon,
    secondaryWeapon,
    sidearm,
    signatureWeapon,
    grenade,
    mask,
    backpack,
    vest,
    gloves,
    holster,
    kneepads,
    skill1,
    skill2
  ) {
  this.primaryWeapon = primaryWeapon;
  this.secondaryWeapon = secondaryWeapon
  this.sidearm = sidearm;
  this.signatureWeapon = signatureWeapon;
  this.grenade = grenade;
  this.mask = mask;
  this.backpack = backpack;
  this.vest = vest;
  this.gloves = gloves;
  this.holster = holster;
  this.kneepads = kneepads;
  this.skill1 = skill1;
  this.skill2 = skill2;
};

// Attribute constructor
function attribute
  (
    id,
    source,
    percent,
    attribute,
    text
  ) {
  this.id = id; // Some way to generate a unique ID when saving
  this.source = source;
  this.percent = percent;
  this.attribute = attribute;
  this.text = text;
};