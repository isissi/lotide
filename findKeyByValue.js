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

const findKeyByValue = (object, value) => {
  let allKeys = Object.keys(object);
  for (let key of allKeys) {
    if (object[key] === value) {
      return key;
    }
  }
  return undefined;
};

module.exports = findKeyByValue;
