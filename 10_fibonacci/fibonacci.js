const fibonacci = function(n) {
  if(n < 1) return 'OOPS';

  let previous = 1;
  let value = 0;

  for (let i = 1; i <= n; i++) {
    let currentValue = value;
    
    value = currentValue + previous;
    previous = currentValue;
  }

  return value;
};

// Do not edit below this line
module.exports = fibonacci;
