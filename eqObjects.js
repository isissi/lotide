const eqArrays = require('./eqArrays');


const eqObjects = function (object1, object2) {
  if (Array.isArray(object1) && Array.isArray(object2)) {
    return eqArrays(object1, object2);
  }

  if (typeof object1 === "object" && typeof object2 === "object") {
    if (Object.keys(object1).length === Object.keys(object2).length) {
      for (let key in object1) {
        if (!eqObjects(object1[key], object2[key])) {
          return false;
        }
      }
    } else {
      return false;
    }
  } else {
    return object1===object2;
  }
  return true;
};

module.exports = eqObjects;