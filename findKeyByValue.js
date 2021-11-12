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
