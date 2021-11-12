const countLetters = (sentence) => {
  let results = {};
  for (let i = 0;i < sentence.length; i ++) {
    if (sentence[i] in results) {
      results[sentence[i]] += 1;
    } else {
      results[sentence[i]] = 1;
    }
  }
  return results;
}

module.exports = countLetters;