const middle = (array) => {
  let result = [];
  let i = array.length / 2;
  
  if (array.length === 1 || array.length === 2) {
    result = [];
  } else if (array.length % 2 === 0) {
    result.push(array[i - 1]) && result.push(array[i]);
  } else if (array.length % 2 != 0) {
    result.push(array[Math.floor(i)]);
  }
  return result;
};

module.exports = middle;