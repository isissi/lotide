const eqArrays = function (argOne, argTwo) {
  if (argOne.length !== argTwo.length) {
    return false;
  }
  let i = 0;
  while (i <= argOne.length) {
    if (i === argOne.length) {
      return true;
    } else if (argOne[i] === argTwo[i]) {
      i += 1;
    } else {
      return false;
    }
  }
};

const assertArraysEqual = function (arrOne, arrTwo) {
  if (eqArrays(arrOne, arrTwo) === true) {
    console.log(`✅✅✅ Assertion Passed: ${arrOne} ===  ${arrTwo}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arrOne} !==  ${arrTwo}`);
  }
};

const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  for (let i = 0;i < sentence.length; i ++) {
    if (sentence[i] in results) {
      results[sentence[i]].push(i + 1);
    } else {
      results[sentence[i]] = [i + 1];
    }
  }
  return results;
};

module.exports = letterPositions;