const findKey = function (collection, callback) {
  // testing filter method (works)
  /*
  const keyArrays = Object.keys(collection)
  const keyFound = keyArrays.filter(item => callback(collection[item]));
  return keyFound[0]
  */
  // testing for...in loop (works)
  for (let item in collection) {
    if (callback(collection[item])) {
      return item;
    }
  }
};

module.exports = findKey;
