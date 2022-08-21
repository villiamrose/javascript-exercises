const removeFromArray = function(array, ...itemsToRemove) {
  const filteredArray = [];

  for (item of array) {
    if (itemsToRemove.includes(item)) continue;
    filteredArray.push(item);
  }

  return filteredArray;
};

// Do not edit below this line
module.exports = removeFromArray;
