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

//takeUntil function
const takeUntil = function(array, callback) {
  // ...
  const result = [];
  for (let item of array) {
    if (!callback(item)) {
      result.push(item);
    } else {
      return result;
    }
  }
};


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertArraysEqual(results1, [1, 2, 5, 7, 2]);
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);