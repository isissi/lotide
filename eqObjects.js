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
  if (argOne.length !== argTwo.length) {
    return false;
  }
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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

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

//TEST CODE
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };

const abc = { a: "1", b: "2", c: "3" };

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };

const cd2 = { c: "1", d: ["2", 3, 4] };

assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ab, abc), false);
assertEqual(eqObjects(cd, dc), true);
assertEqual(eqObjects(cd, cd2), false);
