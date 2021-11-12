const without = function(source, ...itemsToRemove) {
  let final = source;
  let removeSource = []
  
  for (let items of itemsToRemove) {
    for (let item of items) {
      removeSource.push(item);
    }
  }

  final = final.filter((item) => !removeSource.includes(item));

  return final; 
}

module.exports = without;