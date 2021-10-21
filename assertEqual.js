// FUNCTION IMPLEMENTATTION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} ===  ${expected}`);
    return true;
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !==  ${expected}`);
    return false;
  }
};

// TEST CONDE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

