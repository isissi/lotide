// FUNCTION IMPLEMENTATTION
const assertEqual = function(result, arrayTail) {
  if ((result.length === 0) && (arrayTail.length === 0)) {
    console.log(`✅✅✅ Assertion Passed: ${result} ===  ${arrayTail}`);
    return true;
  } else if (result.length === arrayTail.length) {
    for (let i = 0; i < result.length; i++) {
      if (result[i] === arrayTail[i]) {
        console.log(`✅✅✅ Assertion Passed: ${result} ===  ${arrayTail}`);
        return true;
      } else {
        console.log(`🛑🛑🛑 Assertion Failed: ${result} !==  ${arrayTail}`);
        return false;
      }
    }
  }
};

function tail(array) {
  if (array.length === 0) {
    return array;
  } else if (array.length === 1) {
    return array = [];
  } else {
    return array.slice(1);
  }
}

// TEST CONDE
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]);
