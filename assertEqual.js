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

// TEST CONDE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

