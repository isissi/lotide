function tail(array) {
  if (array.length === 0) {
    return array;
  } else if (array.length === 1) {
    return array = [];
  } else {
    return array.slice(1);
  }
}

module.exports = tail;