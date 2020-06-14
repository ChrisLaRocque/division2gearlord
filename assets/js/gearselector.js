var tempObj = {
  mask: {
    id: 17,
    brand: brands.overlordArmaments,
    item: brands.overlordArmaments.mask.deadstickProtectionMask,
    rarity: rarity.highEnd,
    armor: 80000,
    coreAttributes: [[gearAttributes.core.weaponDamage, 13.9]],
    attributes: [[gearAttributes.offensive.criticalHitChance, 5.8], [gearAttributes.offensive.criticalHitDamage, 11.5]], modSlotType: "offensive",
    modSlots: [[gearAttributes.mods.criticalHitChance, 4.8]],
    talent: ""
  },
  backpack: {
    id: 18,
    brand: brands.grupoSombraSA,
    item: brands.grupoSombraSA.backpack.antumbraBackpack,
    rarity: rarity.highEnd,
    armor: 13000,
    coreAttributes: [[gearAttributes.core.weaponDamage, 15]],
    attributes: [[gearAttributes.offensive.headshotDamage, 8.9], [gearAttributes.defensive.hazardProtection, 8, 7]],
    modSlotType: "utility",
    modSlots: [[gearAttributes.mods.skillHaste, 11.4]],
    talent: talents.composure
  },
  vest: {
    id: 19,
    brand: brands.providenceDefense,
    item: brands.providenceDefense.vest.theSacrificeVest,
    rarity: rarity.highEnd,
    armor: 158000,
    coreAttributes: [[gearAttributes.core.weaponDamage, 13]],
    attributes: [[gearAttributes.offensive.criticalHitDamage, 10.5], [gearAttributes.offensive.criticalHitChance, 5.3]],
    modSlotType: "offensive",
    modSlots: [[gearAttributes.mods.criticalHitChance, 4.6]],
    talent: talents.perfectGlassCannon
  },
  gloves: {
    id: 20,
    brand: brands.ceskaVyroba,
    item: brands.ceskaVyroba.gloves.nBCGloves,
    rarity: rarity.highEnd,
    armor: 80000,
    coreAttributes: [[gearAttributes.core.weaponDamage, 15]],
    attributes: [[gearAttributes.utility.statusEffects, 10], [gearAttributes.offensive.criticalHitChance, 5]],
    modSlotType: "",
    modSlots: [[]],
    talent: ""
  },
  holster: {
    id: 21,
    brand: brands.providenceDefense,
    item: brands.providenceDefense.holster.modularHolster,
    rarity: rarity.highEnd,
    armor: 112000,
    coreAttributes: [[gearAttributes.core.weaponDamage, 11.5]],
    attributes: [[gearAttributes.offensive.weaponHandling, 12], [gearAttributes.offensive.criticalHitDamage, 10.4]],
    modSlotType: "",
    modSlots: [[]],
    talent: ""
  },
  kneepads: {
    id: 22,
    brand: brands.airaldiHoldings,
    item: brands.airaldiHoldings.kneepads.dionysusRoundedPadding,
    rarity: rarity.highEnd,
    armor: 99000,
    coreAttributes: [[gearAttributes.core.weaponDamage, 14.6]],
    attributes: [[gearAttributes.offensive.headshotDamage, 9.4], [gearAttributes.offensive.criticalHitChance, 5.6]],
    modSlotType: "",
    modSlots: [[]],
    talent: ""
  }
}
// var tempMaskObj = {
//   id: 17,
//   brand: "",
//   item: brands.overlordArmaments.mask.deadstickProtectionMask,
//   rarity: rarity.highEnd,
//   armor: 80000,
//   coreAttributes: [[gearAttributes.core.weaponDamage, 13.9]],
//   attributes: [[gearAttributes.offensive.criticalHitChance, 5.8], [gearAttributes.offensive.criticalHitDamage, 11.5]], modSlotType: "offensive",
//   modSlots: [[gearAttributes.mods.criticalHitChance, 4.8]],
//   talent: ""
// };

// var tempBackpackObj = {
//   id: 18,
//   brand: "",
//   item: brands.grupoSombraSA.backpack.antumbraBackpack,
//   rarity: rarity.highEnd,
//   armor: 13000,
//   coreAttributes: [[gearAttributes.core.weaponDamage, 15]],
//   attributes: [[gearAttributes.offensive.headshotDamage, 8.9], [gearAttributes.defensive.hazardProtection, 8, 7]], 
//   modSlotType: "utility",
//   modSlots: [[gearAttributes.mods.skillHaste, 11.4]],
//   talent: talents.composure
// };

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


// For each model dropdown > get this slot and then the brand in that slot in tempObj > for things in brands>brandinslot>slotitems

var getModels = function(){
  var allModelDropdowns = document.getElementsByClassName('model-dropdown-menu');
  console.log(allModelDropdowns);
}
getModels();
// var getModels = function(){
//   for (var slot in slots) {
//     //Loop through brands
//     $('.' + currentSlot + '-model-dropdown-menu').each(function () {
//       $(this).html('');
//     });
//     for (var obj in tempObj) {
//       var currentSlot = slots[slot].toLowerCase();
//       var currentBrandObj = tempObj[obj].brand;
//       var slotBrand = currentBrandObj[brand];
//       var currentBrandItems = currentBrandObj[currentSlot];

//       // console.log(currentSlot);
//       // console.log(currentBrandObj);
//       // console.log(slotBrand);
//       // console.log(currentBrandItems);
      
//       // If the brand has content for the current slot, add the brand name to the dropdown-menu
//       for (slotitem in currentBrandItems) {
//         var button = document.createElement('button');
//         button.id = currentBrandItems[slotitem].id;
//         button.className = currentSlot + " dropdown-item model-dropdown-item";
//         button.innerHTML = currentBrandItems[slotitem].name;
//         $('.' + currentSlot + '-model-dropdown-menu').append(button);
//       }
//     }
//   }
// };


var buildGear = function () {

  // var maskTest = new gear(tempMaskObj.id, tempMaskObj.brand, tempMaskObj.item, tempMaskObj.rarity, tempMaskObj.armor, tempMaskObj.coreAttributes, tempMaskObj.attributes, tempMaskObj.modSlotType, tempMaskObj.modSlots, tempMaskObj.talent);
  // var backpackTest = new gear(tempBackpackObj.id, tempBackpackObj.brand, tempBackpackObj.item, tempBackpackObj.rarity, tempBackpackObj.armor, tempBackpackObj.coreAttributes, tempBackpackObj.attributes, tempBackpackObj.modSlotType, tempBackpackObj.modSlots, tempBackpackObj.talent);

  var tempObjMask = (((tempObj || {}).mask));
  var tempObjBackpack = (((tempObj || {}).backpack));
  var tempObjVest = (((tempObj || {}).vest));
  var tempObjGloves = (((tempObj || {}).gloves));
  var tempObjHolster = (((tempObj || {}).holster));
  var tempObjKneepads = (((tempObj || {}).kneepads));
  // var maskTest = new gear(tempObj[mask].id, tempObj[mask].brand, tempObj[mask].item, tempObj[mask].rarity, tempObj[mask].armor, tempObj[mask].coreAttributes, tempObj[mask].attributes, tempObj[mask].modSlotType, tempObj[mask].modSlots, tempObj[mask].talent);

  var maskTest = new gear(tempObjMask.id, tempObjMask.brand, tempObjMask.item, tempObjMask.rarity, tempObjMask.armor, tempObjMask.coreAttributes, tempObjMask.attributes, tempObjMask.modSlotType, tempObjMask.modSlots, tempObjMask.talent);
  var backpackTest = new gear(tempObjBackpack.id, tempObjBackpack.brand, tempObjBackpack.item, tempObjBackpack.rarity, tempObjBackpack.armor, tempObjBackpack.coreAttributes, tempObjBackpack.attributes, tempObjBackpack.modSlotType, tempObjBackpack.modSlots, tempObjBackpack.talent);
  var vestTest = new gear(tempObjVest.id, tempObjVest.brand, tempObjVest.item, tempObjVest.rarity, tempObjVest.armor, tempObjVest.coreAttributes, tempObjVest.attributes, tempObjVest.modSlotType, tempObjVest.modSlots, tempObjVest.talent);
  var glovesTest = new gear(tempObjGloves.id, tempObjGloves.brand, tempObjGloves.item, tempObjGloves.rarity, tempObjGloves.armor, tempObjGloves.coreAttributes, tempObjGloves.attributes, tempObjGloves.modSlotType, tempObjGloves.modSlots, tempObjGloves.talent);
  var holsterTest = new gear(tempObjHolster.id, tempObjHolster.brand, tempObjHolster.item, tempObjHolster.rarity, tempObjHolster.armor, tempObjHolster.coreAttributes, tempObjHolster.attributes, tempObjHolster.modSlotType, tempObjHolster.modSlots, tempObjHolster.talent);
  var kneepadsTest = new gear(tempObjKneepads.id, tempObjKneepads.brand, tempObjKneepads.item, tempObjKneepads.rarity, tempObjKneepads.armor, tempObjKneepads.coreAttributes, tempObjKneepads.attributes, tempObjKneepads.modSlotType, tempObjKneepads.modSlots, tempObjKneepads.talent);



  $(".dynamic-mask-container").html(gearDisplayTemplate(maskTest));
  $(".dynamic-backpack-container").html(gearDisplayTemplate(backpackTest));
  $(".dynamic-vest-container").html(gearDisplayTemplate(vestTest));
  $(".dynamic-gloves-container").html(gearDisplayTemplate(glovesTest));
  $(".dynamic-holster-container").html(gearDisplayTemplate(holsterTest));
  $(".dynamic-kneepads-container").html(gearDisplayTemplate(kneepadsTest));
};

buildGear();

// When brand dropdown is clicked, update the gear display
$('.brand-dropdown-item').click(function () {
  var clickedBrand = this.id;
  var parentDiv = $(this).prop('className');
  var dynamicSlot = parentDiv.substring(0, parentDiv.indexOf(' '));
  var slotToUpdate = (((tempObj || {})[dynamicSlot]));
  // $('.' + dynamicSlot + '-model-dropdown-menu').html('');

  slotToUpdate.brand = brands[clickedBrand];
  buildGear();
});

// $('.model-dropdown-item').click(function () {
//   var clickedModel = this.id;
//   var parentDiv = $(this).prop('className');
//   var dynamicSlot = parentDiv.substring(0, parentDiv.indexOf(' '));
//   var slotToUpdate = (((tempObj || {})[dynamicSlot]));
//   var pathToItem = (((brands || {})[dynamicSlot]));

//   console.log("clickedModel= " + clickedModel);
//   console.log("parentDiv= " + parentDiv)
//   console.log("dynamicSlot= " + dynamicSlot)
//   console.log("brands= " + brands);
//   console.log("slotToUpdate= " + slotToUpdate);
//   console.log("pathToItem= " + pathToItem);
//   slotToUpdate.item = pathToItem.clickedModel;
//   buildGear();
// });



