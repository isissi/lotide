const words = ["ground", "control", "to", "major", "tom"];
const arrays = [];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}
const assertArraysEqual = function (arrOne, arrTwo) {
  if (eqArrays(arrOne, arrTwo) === true) {
    console.log(`✅✅✅ Assertion Passed: ${arrOne} ===  ${arrTwo}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arrOne} !==  ${arrTwo}`);
  }
};

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

//TEST CODE
const result1 = map(words, word => word[0]);
assertArraysEqual(result1, ['g', 'c', 't', 'm', 't']);

const result2 = map(arrays, array => array[0]);
assertArraysEqual(result2, []);