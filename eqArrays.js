// FUNCTION IMPLEMENTATTION
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

const eqArrays = function(argOne, argTwo) {
  let i = 0; 
  while (i <= argOne.length) {
    if (i === argOne.length) {
      console.log(true);
      return true;
    } else if (argOne[i] === argTwo[i]) {
      i += 1;
    }else {
      console.log(false);
      return false;
    }
  }
}



eqArrays([1, 2, 3], [1, 2, 3]) // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS