const takeUntil = function (array, callback) {
  // ...
  const newArray = array.slice(0, array.findIndex(callback));
  return newArray;
};

module.exports = takeUntil;
