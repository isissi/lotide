const flatten = function(arr) {
  let result = [];
  for (let element of arr) {
    if (Array.isArray(element) === false) {
      result.push(element);
    } else {
      for (let single of element){
        result.push(single);
      }
    } 
  }
  return result;
}

module.exports = flatten;