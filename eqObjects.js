const eqArrays = require('./eqArrays');

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

module.exports = eqObjects;