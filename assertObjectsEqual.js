const eqObjects = function (object1, object2) {
  //compare length first, return false if not matching
  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (let key in object1) {
      if (key in object2) {
        //if key in object2
        let compareResult = compareValue(object1[key], object2[key]);
        if (!compareResult) {
          return false;
        }
      } else {
        return false;
      }
    }
  } else {
    return false;
  }
  return true;
};

const compareValue = function (value1, value2) {
  //compare type first
  if (typeof value1 !== typeof value2) {
    return false;
  } else {
    if (Array.isArray(value1)) {
      return eqArrays(value1, value2);
    } else {
      return value1 === value2;
    }
  }
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  // Implement me!
  const inspect = require('util').inspect;
  console.log(`Example lable: ${inspect(actual)}`)
  if (!eqObjects) {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !==  ${inspect(expected)}`);

  } else {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} ===  ${inspect(expected)}`);
  } 
};

//TEST CODE
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };

const abc = { a: "1", b: "2", c: "3" };

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };

const cd2 = { c: "1", d: ["2", 3, 4] };

assertObjectsEqual(ab, ba);