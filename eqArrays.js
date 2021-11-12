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

module.exports = eqArrays;