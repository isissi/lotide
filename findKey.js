const findKey = (object, callback) => {
  for (let keys in object) {
    if (callback(object[keys])) {
      return keys;
    }
  }
};

module.exports = findKey;