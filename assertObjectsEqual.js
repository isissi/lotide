const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  console.log(`Example lable: ${inspect(actual)}`)
  if (!eqObjects) {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !==  ${inspect(expected)}`);

  } else {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} ===  ${inspect(expected)}`);
  } 
};

module.exports = assertObjectsEqual;