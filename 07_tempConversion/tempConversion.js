const ftoc = function(fTemp) {
  const cTemp = (fTemp - 32) * (5/9);

  return cTemp;
};

const ctof = function(cTemp) {
  const fTemp = cTemp * (9/5) + 32;

  return fTemp;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
