const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const results1 = map(words, word => word[0]);
console.log(results1);

const eqArrays = function(arr1, arr2) {
  if (arr1.length!==arr2.length) {
    return false;
  }
  for (i=0; i<arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  } return true  
}

const assertArraysEqual = function (arr1, arr2) {
  console.log(eqArrays(arr1, arr2) ? `✅✅✅Assertion Passed: ${arr1} === ${arr2}` : `🙈🙈🙈Assertion Failed: ${arr1} !== ${arr2}`)
}

assertArraysEqual(map(words, word => word[0]), ["g", "c", "t", "m", "t"]); // => true
assertArraysEqual(map(words, word => word.length), [6, 7, 2, 5, 3]); // => true
assertArraysEqual(map(words, word => word.toUpperCase()), ["GROUND", "CONTROL", "TO", "MAJOR", "TOM"]); // => true