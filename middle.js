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

const assertArraysEqual = function (arrOne, arrTwo) {
  if (eqArrays(arrOne, arrTwo) === true) {
    console.log(`✅✅✅ Assertion Passed: ${arrOne} ===  ${arrTwo}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arrOne} !==  ${arrTwo}`);
  }
};

const middle = (array) => {
  let result = [];
  let i = array.length / 2;
  if ((array.length === 1) || (array.length === 2)) {
    result = [];
  } else if (array.length % 2 === 0) {
    result.push(array[i - 1]) && result.push(array[i]);
  }else if (array.length % 2 != 0) {
    result.push((array[Math.floor(i)]));
  }
  console.log(result);
  return result;
}

middle([1]) // => []
middle([1, 2]) // => []
middle([1, 2, 3, 4])

assertArraysEqual(middle([1, 2, 3, 4]),[2, 3]);
assertArraysEqual(middle([1]),[]);
assertArraysEqual(middle([1, 2]),[]);