const without = function(source, itemsToRemove) {
  let final = source;
  for (let a = 0; a < final.length; a ++) {
    for (let b = 0; b < itemsToRemove.length; b ++) {
      if (final[a] === itemsToRemove[b]) {
        final.splice(a,1);
      }
    }
  }
  console.log(final);
  return final;
    
}

module.exports = without;