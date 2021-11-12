const countOnly = function (allItems, itemsToCount) {
  let results = {};
  
  for (let item of allItems) {
    if (itemsToCount[item]) {
      if (item in results) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};

module.exports = countOnly;