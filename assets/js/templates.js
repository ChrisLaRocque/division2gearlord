function weaponDisplayTemplate(weapon) {
  var named = (weapon.named) ? "&nbsp;-&nbsp;<em>Named</em>" : ""
  var htmlStr = '';
  htmlStr += '<h3>' + weapon.name + '<i class="' + weapon.type.icon + ' slot-logo"></i></h3>';
  htmlStr += '<h4>' + weapon.rarity + named + '</h4>';
  htmlStr += '<h5 class="weapon-rpm-mag">RPM:&nbsp;' + weapon.rpm + '&nbsp;|&nbsp;Mag:&nbsp;' + weapon.magSize + '</h5>';
  htmlStr += '<div class="weapon-base-damage">Base Damage:&nbsp;' + weapon.baseDamage + '</div>';
  // htmlStr += '<div class="weapon-mag">Mag:&nbsp;' + weapon.magSize + '</div>';
  htmlStr += '<div class="weapon-reload-speed">Reload Speed:&nbsp;' + weapon.reloadSpeed + 'ms</div>';
  htmlStr += '<h4>Core Attributes</h4><ul class="attribute-list">';
  weapon.coreAttributes.forEach(function(item){htmlStr += '<li>' + item[1] + '%&nbsp;' + item[0].name + '</li>'});
  htmlStr += '</ul><h4>Attributes</h4><ul class="attribute-list">';
  weapon.attributes.forEach(function (item) { htmlStr += '<li>' + item[1] + '%&nbsp;' + item[0].name + '</li>' });
  htmlStr += '</ul>';

  if(weapon.talent !== ""){
    htmlStr += '<h4>Talent</h4><hr class="w-75"><h5>' + weapon.talent.name + '</h5>';
    htmlStr += '<p>' + weapon.talent.info + '</p>';
  }

  return htmlStr;
};

function grenadeDisplayTemplate(grenade) {
  var htmlStr = '';
  htmlStr += '<h3>' + grenade.type + '</h3>';
  htmlStr += '<div class="grenade-damage">Damage:&nbsp;' + grenade.damage + '</div>';
  htmlStr += '<div class="grenade-radius">Radius:&nbsp;' + grenade.radius + '</div>';
  htmlStr += '<div class="grenade-amount">Amount:&nbsp;' + grenade.amount + '</div>';

  return htmlStr;
};

function signatureWeaponDisplayTemplate(weapon) {
  var htmlStr = '';
  htmlStr += '<h3>' + weapon.name + '&nbsp;-&nbsp;<small>' + weapon.rarity + '</small></h3>';
  htmlStr += '<span class="weapon-base-damage">Base Damage:&nbsp;' + weapon.baseDamage + '</span>&nbsp;|&nbsp;';
  htmlStr += '<span class="weapon-rpm">RPM:&nbsp;' + weapon.rpm + '</span>&nbsp;|&nbsp;';
  htmlStr += '<span class="weapon-mag">Mag:&nbsp;' + weapon.magSize + '</span>&nbsp;|&nbsp;';
  htmlStr += '<span class="weapon-reload-speed">Reload Speed:&nbsp;' + weapon.reloadSpeed + 'ms</span>';
  htmlStr += '</ul><h4>' + weapon.talent + '</h4>';
  htmlStr += '<p>' + weapon.talent.info + '</p>';

  return htmlStr;
};

function gearDisplayTemplate(gear) {
  var named = (gear.item.named) ? "&nbsp;-&nbsp;<em>Named</em>" : ""
  var htmlStr = '';
  htmlStr += '<h3>' + gear.item.name + '</h3>';
  htmlStr += '<h4>' + gear.rarity + named + '</h4>';
  htmlStr += '<div class="gear-armor">' + gear.armor + '&nbsp;<i class="flaticon-bulletproof-vest gear-armor"></i></div>';
  htmlStr += '<div class="gear-brand">Brand:&nbsp;' + gear.brand.name + '</div>';
  htmlStr += '<h4>Core Attributes</h4><ul class="attribute-list">';
  gear.coreAttributes.forEach(function (item) { htmlStr += '<li>' + item[1] + '%&nbsp;' + item[0].name + '</li>' });
  htmlStr += '</ul><h4>Attributes</h4><ul class="attribute-list">';
  gear.attributes.forEach(function (item) { htmlStr += '<li>' + item[1] + '%&nbsp;' + item[0].name + '</li>' });
  htmlStr += '</ul>';
  if (gear.modSlotType !== ""){
  htmlStr += '<h4>Mod Slots</h4><ul class="attribute-list">';
  gear.modSlots.forEach(function (item) { htmlStr += '<li>' + item[1] + '%&nbsp;' + item[0].name + '</li>' });
  htmlStr += '</ul>';
  }

  if (gear.talent !== "") {
    htmlStr += '<h4>Talent</h4><hr class="w-75"><h5>' + gear.talent.name + '</h5>';
    htmlStr += '<p>' + gear.talent.info + '</p>';
  };

  return htmlStr;
};

