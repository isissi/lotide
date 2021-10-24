const eqArrays = function (argOne, argTwo) {
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

const sentencToCount = letterPositions("hello");

assertArraysEqual(sentencToCount['h'], [1]);
assertArraysEqual(sentencToCount['e'], [2]);
assertArraysEqual(sentencToCount['l'], [3, 4]);
assertArraysEqual(sentencToCount['o'], [5]);