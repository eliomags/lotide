const assertEqual = function(actual, expected) {
  console.log(actual === expected ? `✅✅✅Assertion Passed: ${actual} === ${expected}` : `🙈🙈🙈Assertion Failed: ${actual} !== ${expected}`);
};

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


assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false */

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true 
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false

