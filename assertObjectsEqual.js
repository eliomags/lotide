// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function (object1, object2) {
  const keysArray1 = Object.keys(object1);
  const keysArray2 = Object.keys(object2);
  if (keysArray1.length !== keysArray2.length) {
    return false
  }
  if (keysArray1.length === keysArray2.length) {
    for (key of keysArray1) {
      
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        return eqArrays(object1[key], object2[key])
      }
      
      if (object1[key] !== object2[key]) {
        return false
      }
    } 
    return true
  }
}

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; 
  console.log(eqObjects(actual, expected) ? `✅✅✅Assertion Passed: ${inspect(actual)} === ${inspect(expected)}` : `🙈🙈🙈Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`)
};

const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  } return true
}

// TEST CODE

const ab = { a: "1", b: "2" };
const abc = { a: "1", b: "2", c: "3" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); // => true
assertObjectsEqual(ab, abc); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2); // => false

