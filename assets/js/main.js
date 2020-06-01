// Sections within the stats menu
var overallStats = {
  weaponTalents: "",
  weaponStats: weaponStats,
  offenseStats: offenseStats,
  gearTalents: "",
  gearBrandsSets: "",
  defenseStats: defenseStats,
  skillSlot1: "",
  skillSlot2: "",
};

// Fields under the weapon statistics section
var weaponStats = {
  weaponDamage: "",
  pvpWeaponDamage: "",
  critHitChance: "",
  critHitDamage: "",
  headshotDamage: "",
  armorDamage: "",
  healthDamage: "",
  range: "",
  reloadTime: "",
  reloadSpeedBonus: "",
  accuracy: "",
  stability: "",
  weaponSwapSpeed: "",
  weaponHandling: "",
  ammoCapacity: ""
};

// Fields under the offense statistics section
var offenseStats = {
  allWeaponsDamageBonus: "",
  marksmanRifleDamageBonus: "",
  rifleDamageBonus: "",
  assaultRifleDamageBonus: "",
  lightMachineGunDamageBonus: "",
  subMachineGunDamageBonus: "",
  shotgunDamageBonus: "",
  pistolDamageBonus: "",
  explosiveDamage: ""
};

// Fields under the defense statistics section
var defenseStats = {
  armor: "",
  armorOnKill: "",
  armorRegeneration: "",
  maxHealth: "",
  healthOnKill: "",
  healthRegneration: "",
  incomingRepairs: "",
  protectionFromElites: "",
  pulseResistance: "",
  explosiveResistance: "",
  hazardProtection: "",
  bleedReistance: "",
  blindDeafResistance: "",
  burnResistance: "",
  confuseResistance: "",
  disruptResistance: "",
  ensnareResistance: "",
  poisonResistance: "",
  shockResistance: ""
};


function totalWeaponDamage(weapon) {
  return (weapon.baseDamage * offenseStats.allWeaponsDamageBonus * (weaponStats.headshotDamage + weaponStats.critHitDamage) * weaponStats.healthDamage * weaponStats.armorDamage);
  // Base damage * weapon damage percentage * (headshot damage + critical hit damage) * talent weapon damage increase * talent weapon damage amplification * damage to health * damage to armor * damage to targets out of cover
};
function burstDPS(weapon) {
  return (totalWeaponDamage(weapon) * (weapon.rpm/60));
  // Damage * (rpm/60)
};
function sustainedDPS(weapon) {
  return (totalWeaponDamage(weapon) * weapon.mag)/((weapon.mag/(weapon.rpm/60)) + weapon.reloadSpeed);
  // (Damage * mag)/((mag/(rpm/60) + reload time)
};
