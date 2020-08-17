const ftoc = function(fTemp) {
  let cTemp = Math.round(((fTemp - 32) * (5/9)) * 10) / 10;
  return cTemp;
}

const ctof = function(cTemp) {
  let fTemp = Math.round(((cTemp * (9/5)) + 32) * 10) / 10;
  return fTemp;
}

module.exports = {
  ftoc,
  ctof
}
