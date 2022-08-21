const sumAll = function(x, y) {
  let start = Math.min(x, y);
  let end = Math.max(x, y);
  let sum = 0;
  
  for (let i = start; i <= end; i++) {
    sum += i;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
