const findKeyByValue = function (collection, string) {
  const keysArray = Object.keys(collection);
  for (const key of keysArray) {
    if (collection[key] === string) return key;
  }
};

module.exports = findKeyByValue;
