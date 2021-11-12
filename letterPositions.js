const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  for (let i = 0;i < sentence.length; i ++) {
    if (sentence[i] in results) {
      results[sentence[i]].push(i + 1);
    } else {
      results[sentence[i]] = [i + 1];
    }
  }
  return results;
};

module.exports = letterPositions;