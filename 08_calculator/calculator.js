const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(values) {
  let sum = 0;
	
  values.forEach((value) => sum += +value);

  return sum;
};

const multiply = function(values) {
  let product = 1;
	
  values.forEach((value) => product *= +value);

  return product;
};

const power = function() {
	
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
