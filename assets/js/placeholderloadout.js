// Concussion Grenade
var concussionGrenade = {
  type: "Concussion",
  damage: 1406880,
  radius: 3,
  amount: 7,
  specialization: 0
}
// Baker's Dozen
// var bakersDozen = {
//   id: 0,
//   baseDamage: 235100,
//   weapon: weapons.rifle.m1A.bakersDozen,
//   rarity: rarity.highEnd,
//   coreAttributes: [],
//   attributes: [],
//   talent: "Perfect Lucky Shot",
//   weaponHandling: [9.6, 19.8],
//   mods: []
// };

// The White Death
// var theWhiteDeath = {
//   id: 1,
//   baseDamage: 376100,
//   weapon: "",
//   rarity: "",
//   coreAttributes: [],
//   attributes: [],
//   talent: "Ranger",
//   weaponHandling: [9.6, 19.8],
//   mods: []
// }
// Backup Boomstick
// var backupBoomstick = {
//   id: 2,
//   baseDamage: 620600,
//   weapon: weapons.shotgun,
//   rarity: rarity.highEnd,
//   coreAttributes: [],
//   attributes: [],
//   talent: "Reformation",
//   weaponHandling: [9.6, 19.8],
//   mods: []
// }
// Deadstick Mask
// var chucksDeadstickProtectionMask = {
//   id: 3,
//   brand: brands.overlordArmaments,
//   gear: masks.overlordArmaments.deadstickProtectionMask,
//   rarity: rarity.highEnd,
//   armor: 80000,
//   coreAttributes: [],
//   attributes: [],
//   modSlotType: "offensive",
//   modSlots: [],
//   talent: ""
// };

// let myDeadstickProtectionMask = new gear(chucksDeadstickProtectionMask);

// Antumbra Backpack
// var antumbraBackpack = {
//   id: 4,
//   brand: brands.grupoSombraSA,
//   gear: "",
//   rarity: rarity.highEnd,
//   armor: 13000,
//   coreAttributes: [],
//   attributes: [],
//   modSlotType: "utility",
//   modSlots: [],
//   talent: "Composure"
// };
// The Sacrifice Vest
// var theSacrificeVest = {
//   id: 5,
//   brand: brands.providenceDefense,
//   rarity: rarity.highEnd,
//   armor: 158000,
//   named: true,
//   name: "The Sacrifice",
//   coreAttributes: [],
//   attributes: [],
//   modSlotType: "offensive",
//   modSlots: [],
//   talent: "Perfect Glass Cannon"
// };

// Attributes
/*
name
value
attribute

*/
// Weapons
let tac50CRifle = new weapon(6, 128000, type.marksmanRifle , weapons.specializations.tac50CRifle, rarity.signature, [], [], ".50 BMG Rounds", [9.6, 19.8], []);
let myBakersDozen = new weapon(0, 235100, type.rifle, weapons.rifle.m1A.bakersDozen, rarity.highEnd, [[weaponAttributes.core.rifleDamage, 15], [weaponAttributes.core.criticalHitDamage, 15]], [[weaponAttributes.damageToArmor, 6]], talents.perfectLuckyShot, [9.6, 19.8], []);
let myTheWhiteDeath = new weapon(1, 376100, type.marksmanRifle, weapons.marksmanRifle.m44.theWhiteDeath, rarity.highEnd, [[weaponAttributes.core.marksmanRifleDamage, 15], [weaponAttributes.core.headshotDamage, 137]], [[weaponAttributes.damageToTargetsOutOfCover, 7]], talents.ranger, [9.6, 19.8], []);
let myBackupBoomstick = new weapon(2, 620600, type.shotgun, weapons.shotgun.doubleBarrel.backupBoomstick, rarity.highEnd, [], [], talents.reformation, [9.6, 19.8], []);
let mySharpshooters93R = new weapon(7, 620600, type.pistol, weapons.pistol.sharpshooters93R, rarity.signature, [[weaponAttributes.core.pistolDamage, 11]], [[weaponAttributes.reloadSpeed, 9.3]], talents.perfectUnwavering, [9.6, 19.8], []);

// Gear
let myDeadstickProtectionMask = new gear(3, brands.overlordArmaments, brands.overlordArmaments.mask.deadstickProtectionMask, rarity.highEnd, 80000, [[gearAttributes.core.weaponDamage, 13.9]], [[gearAttributes.offensive.criticalHitChance, 5.8], [gearAttributes.offensive.criticalHitDamage, 11.5]], "offensive", [[gearAttributes.mods.criticalHitChance, 4.8]], "");
let myAntumbraBackpack = new gear(4, brands.grupoSombraSA, brands.grupoSombraSA.backpack.antumbraBackpack, rarity.highEnd, 13000, [[gearAttributes.core.weaponDamage, 15]], [[gearAttributes.offensive.headshotDamage, 8.9], [gearAttributes.defensive.hazardProtection, 8,7]], "utility", [[gearAttributes.mods.skillHaste, 11.4]], talents.composure);
let myTheSacrificeVest = new gear(5, brands.providenceDefense, brands.providenceDefense.vest.theSacrificeVest, rarity.highEnd, 158000, [[gearAttributes.core.weaponDamage, 13]], [[gearAttributes.offensive.criticalHitDamage, 10.5], [gearAttributes.offensive.criticalHitChance, 5.3]], "offensive", [[gearAttributes.mods.criticalHitChance, 4.6]], talents.perfectGlassCannon);
let myNBCGloves = new gear(8, brands.ceskaVyroba, brands.ceskaVyroba.gloves.nBCGloves, rarity.highEnd, 80000, [[gearAttributes.core.weaponDamage, 15]], [[gearAttributes.utility.statusEffects, 10], [gearAttributes.offensive.criticalHitChance, 5]], "", [], "");
let myModularHolster = new gear(9, brands.providenceDefense, brands.providenceDefense.holster.modularHolster, rarity.highEnd, 112000, [[gearAttributes.core.weaponDamage, 11.5]], [[gearAttributes.offensive.weaponHandling, 12], [gearAttributes.offensive.criticalHitDamage, 10.4]], "", [], "");
let myDionysusRoundedPadding = new gear(10, brands.airaldiHoldings, brands.airaldiHoldings.kneepads.dionysusRoundedPadding, rarity.highEnd, 99000, [[gearAttributes.core.weaponDamage, 14.6]], [[gearAttributes.offensive.headshotDamage, 9.4], [gearAttributes.offensive.criticalHitChance, 5.6]], "", [], "");


var placeholderLoadout = {
  primaryWeapon: myBakersDozen,
  secondaryWeapon: myTheWhiteDeath,
  sidearm: mySharpshooters93R,
  signatureWeapon: tac50CRifle,
  grenade: concussionGrenade,
  mask: myDeadstickProtectionMask,
  backpack: myAntumbraBackpack,
  vest: myTheSacrificeVest,
  gloves: myNBCGloves,
  holster: myModularHolster,
  kneepads: myDionysusRoundedPadding,
  skill1: "",
  skill2: "",
}
// console.log(placeholderLoadout);
$(".primary-weapon").html(weaponDisplayTemplate(placeholderLoadout.primaryWeapon));
$(".secondary-weapon").html(weaponDisplayTemplate(placeholderLoadout.secondaryWeapon));
$(".sidearm").html(weaponDisplayTemplate(placeholderLoadout.sidearm));
$(".signature-weapon").html(signatureWeaponDisplayTemplate(placeholderLoadout.signatureWeapon));
$(".grenade").html(grenadeDisplayTemplate(placeholderLoadout.grenade));
$(".mask-container").html(gearDisplayTemplate(placeholderLoadout.mask));
$(".backpack-container").html(gearDisplayTemplate(placeholderLoadout.backpack));
$(".vest-container").html(gearDisplayTemplate(placeholderLoadout.vest));
$(".gloves-container").html(gearDisplayTemplate(placeholderLoadout.gloves));
$(".holster-container").html(gearDisplayTemplate(placeholderLoadout.holster));
$(".kneepads-container").html(gearDisplayTemplate(placeholderLoadout.kneepads));