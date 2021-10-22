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

eqArrays([1, 2, 3], [1, 2, 3]); // => true
eqArrays([1, 2, 3], [3, 2, 1]); // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 3]);