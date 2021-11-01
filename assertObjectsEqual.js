const eqObjects = function (object1, object2) {
  //1.1 check if is object
  if (Array.isArray(object1) && Array.isArray(object2)) {
    return eqArrays(object1, object2);
  }

  if (typeof object1 === "object" && typeof object2 === "object") {
    //2.1 if key length equal
    if (Object.keys(object1).length === Object.keys(object2).length) {
      //3.1 check each value in object if is object
      for (let key in object1) {
        if (!eqObjects(object1[key], object2[key])) {
          return false;
        }
      }
    } else {
      //2.2 if key length don't equal, then false
      return false;
    }
  } else {
    //1.2 compare value if isn't object
    return object1===object2;
  }
  return true;
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