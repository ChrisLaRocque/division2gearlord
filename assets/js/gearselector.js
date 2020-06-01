// var tempObj = {
//   mask: {
//     id: 17,
//     brand: "",
//     item: brands.overlordArmaments.mask.deadstickProtectionMask,
//     rarity: rarity.highEnd,
//     armor: 80000,
//     coreAttributes: [[gearAttributes.core.weaponDamage, 13.9]],
//     attributes: [[gearAttributes.offensive.criticalHitChance, 5.8], [gearAttributes.offensive.criticalHitDamage, 11.5]], modSlotType: "offensive",
//     modSlots: [[gearAttributes.mods.criticalHitChance, 4.8]],
//     talent: ""
//   },
//   backpack: {
//     id: 18,
//     brand: "",
//     item: brands.grupoSombraSA.backpack.antumbraBackpack,
//     rarity: rarity.highEnd,
//     armor: 13000,
//     coreAttributes: [[gearAttributes.core.weaponDamage, 15]],
//     attributes: [[gearAttributes.offensive.headshotDamage, 8.9], [gearAttributes.defensive.hazardProtection, 8, 7]],
//     modSlotType: "utility",
//     modSlots: [[gearAttributes.mods.skillHaste, 11.4]],
//     talent: talents.composure
//   }
// }
var tempMaskObj = {
  id: 17,
  brand: "",
  item: brands.overlordArmaments.mask.deadstickProtectionMask,
  rarity: rarity.highEnd,
  armor: 80000,
  coreAttributes: [[gearAttributes.core.weaponDamage, 13.9]],
  attributes: [[gearAttributes.offensive.criticalHitChance, 5.8], [gearAttributes.offensive.criticalHitDamage, 11.5]], modSlotType: "offensive",
  modSlots: [[gearAttributes.mods.criticalHitChance, 4.8]],
  talent: ""
};

var tempBackpackObj = {
  id: 18,
  brand: "",
  item: brands.grupoSombraSA.backpack.antumbraBackpack,
  rarity: rarity.highEnd,
  armor: 13000,
  coreAttributes: [[gearAttributes.core.weaponDamage, 15]],
  attributes: [[gearAttributes.offensive.headshotDamage, 8.9], [gearAttributes.defensive.hazardProtection, 8, 7]], 
  modSlotType: "utility",
  modSlots: [[gearAttributes.mods.skillHaste, 11.4]],
  talent: talents.composure
};

// Brand filter/selector using a dropdown element
for (var slot in slots) {
  var currentSlot = slots[slot].toLowerCase();
  //Loop through brands
  for (var brand in brands) {
    var currentSlotInBrand = brands[brand][currentSlot]
    //If the brand has content for the current slot, add the brand name to the dropdown-menu
    if (currentSlotInBrand !== "") {
      var button = document.createElement('button');
      button.id = brands[brand].id;
      button.className = currentSlot + " dropdown-item brand-dropdown-item";
      button.innerHTML = brands[brand].name;
      $('.' + currentSlot + '-brand-dropdown-menu').append(button);
    }
  }
}

// When brand dropdown is clicked, update the gear display
$('.brand-dropdown-item').click(function(){
  var clickedBrand = this.id;
  var parentDiv = $(this).prop('className');
  var dynamicSlot = parentDiv.substring(0, parentDiv.indexOf(' '));
  // var dynamicSlot = parentDiv[1]; 
  // var clickedBrandObj = brands[clickedBrand];
  console.log(parentDiv);
  console.log(dynamicSlot);
  tempMaskObj.brand = brands[clickedBrand];
  // tempObj[dynamicSlot].brand = brands[clickedBrand];
  buildGear();
});

var buildGear = function () {

  var maskTest = new gear(tempMaskObj.id, tempMaskObj.brand, tempMaskObj.item, tempMaskObj.rarity, tempMaskObj.armor, tempMaskObj.coreAttributes, tempMaskObj.attributes, tempMaskObj.modSlotType, tempMaskObj.modSlots, tempMaskObj.talent);

  var backpackTest = new gear(tempBackpackObj.id, tempBackpackObj.brand, tempBackpackObj.item, tempBackpackObj.rarity, tempBackpackObj.armor, tempBackpackObj.coreAttributes, tempBackpackObj.attributes, tempBackpackObj.modSlotType, tempBackpackObj.modSlots, tempBackpackObj.talent);

  $(".dynamic-mask-container").html(gearDisplayTemplate(maskTest));
  $(".dynamic-backpack-container").html(gearDisplayTemplate(backpackTest));
};

buildGear();



