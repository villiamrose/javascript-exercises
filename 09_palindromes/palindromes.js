const palindromes = function(text) {
  const cleanText = text.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  const textArray = [...cleanText];
  const reverseText = textArray.reverse().join('');
  
  return cleanText === reverseText;
};

// Do not edit below this line
module.exports = palindromes;
