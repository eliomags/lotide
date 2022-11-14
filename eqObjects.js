const eqArrays = require("./eqArrays");
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function (object1, object2) {
  const keysArray1 = Object.keys(object1);
  const keysArray2 = Object.keys(object2);
  if (keysArray1.length !== keysArray2.length) {
    return false;
  }
  if (keysArray1.length === keysArray2.length) {
    for (key of keysArray1) {
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        return eqArrays(object1[key], object2[key]);
      }

      if (object1[key] !== object2[key]) {
        return false;
      }
    }
    return true;
  }
};

module.exports = eqObjects;
