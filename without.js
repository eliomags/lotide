
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


const without = function(source, itemsToRemove) {
  let newArr = [];
  for (let i = 0 ; i < source.length; i++) {
    for (let y=0; y<itemsToRemove.length; y++)
   if (source[i] !== itemsToRemove[y]) {
    newArr.push(source[i]);
   }
  } return newArr
}



const words = ["hello", "world", "lighthouse"]; 
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);