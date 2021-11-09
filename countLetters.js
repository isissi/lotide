const assertEqual = function(actual, expected) {
  if (actual === expected) {
    if ((typeof actual === 'string') && (typeof expected === 'string')) {
      console.log(`✅✅✅ Assertion Passed: \"${actual}\" ===  \"${expected}\"`);
    } else {
      console.log(`✅✅✅ Assertion Passed: ${actual} ===  ${expected}`);
    }
      
      return true;
  } else {
    if ((typeof actual === 'string') && (typeof expected === 'string')) {
      console.log(`🛑🛑🛑 Assertion Failed: \"${actual}\" !==  \"${expected}\"`);
    } else {
      console.log(`🛑🛑🛑 Assertion Failed: ${actual} !==  ${expected}`);
    }
    return false;
  }
};

const countLetters = (sentence) => {
  let results = {};
  for (let i = 0;i < sentence.length; i ++) {
    if (sentence[i] in results) {
      results[sentence[i]] += 1;
    } else {
      results[sentence[i]] = 1;
    }
  }
  return results;
}

module.exports = countLetters;