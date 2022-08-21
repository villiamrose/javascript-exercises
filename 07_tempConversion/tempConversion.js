const ftoc = function(fTemp) {
  const cTemp = (fTemp - 32) * (5/9);

  const rounded = parseFloat(cTemp.toFixed(1));
  
  return rounded;
};

const ctof = function(cTemp) {
  const fTemp = cTemp * (9/5) + 32;

  const rounded = parseFloat(fTemp.toFixed(1));

  return rounded;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
