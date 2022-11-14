const eqArrays = require("./eqArrays");
const eqObjects = require("./eqObjects");

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function (actual, expected) {
  const inspect = require("util").inspect;
  console.log(
    eqObjects(actual, expected)
      ? `✅✅✅Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`
      : `🙈🙈🙈Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`
  );
};

module.exports = assertObjectsEqual;
