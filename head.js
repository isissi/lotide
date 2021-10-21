// FUNCTION IMPLEMENTATTION
const assertEqual = function(elements, element) {
  if (elements === element) {
    console.log(`✅✅✅ Assertion Passed: ${elements} ===  ${element}`);
    return true;
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${elements} !==  ${element}`);
    return false;
  }
};

function head(array) {
  return array[0];
}

// TEST CONDE
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

