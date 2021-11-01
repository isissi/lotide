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

const eqArrays = (array1, array2) => {
  if ((Array.isArray(array1)) && (Array.isArray(array2))) {
    if (array1.length === array2.length ) {
      for (let i = 0; i < array1.length; i ++ ) {
          if(!eqArrays(array1[i], array2[i])){
            return false;
          }
      }
    } else {
      return false;
    }
  } else {
    if (array1 !== array2) {
      return false;
    }
  }
  return true;
}

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

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
