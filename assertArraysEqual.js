// FUNCTION IMPLEMENTATTION
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    if (typeof actual === "string" && typeof expected === "string") {
      console.log(
        `✅✅✅ Assertion Passed: \"${actual}\" ===  \"${expected}\"`
      );
    } else {
      console.log(`✅✅✅ Assertion Passed: ${actual} ===  ${expected}`);
    }

    return true;
  } else {
    if (typeof actual === "string" && typeof expected === "string") {
      console.log(
        `🛑🛑🛑 Assertion Failed: \"${actual}\" !==  \"${expected}\"`
      );
    } else {
      console.log(`🛑🛑🛑 Assertion Failed: ${actual} !==  ${expected}`);
    }
    return false;
  }
};

const eqArrays = (array1, array2) => {
  if ((Array.isArray(array1)) && (Array.isArray(array2))) {
    if (array1.length === array2.length ) {
      for (let i = 0; i < array1.length; i ++ ) {
          if(!eqArrays(array1[i], array2[i])){
            return false;
          }
      }
    } else {
      return false;
    }
  } else {
    if (array1 !== array2) {
      return false;
    }
  }
  return true;
}

const assertArraysEqual = function (arrOne, arrTwo) {
  if (eqArrays(arrOne, arrTwo) === true) {
    console.log(`✅✅✅ Assertion Passed: ${arrOne} ===  ${arrTwo}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arrOne} !==  ${arrTwo}`);
  }
};

eqArrays([1, 2, 3], [1, 2, 3]); // => true
eqArrays([1, 2, 3], [3, 2, 1]); // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 3]);