const reverseString = function(string) {
  const strArr = string.split('');
  const reversedStrArr = strArr.reverse();

  return reversedStrArr.join('');
};

// Do not edit below this line
module.exports = reverseString;
