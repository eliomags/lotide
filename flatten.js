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

const flatten = function (source){
  let flattennedArr = [];
  for (i = 0; i < source.length; i++) {
    if (Array.isArray(source[i])) {
      flattennedArr = flattennedArr.concat(source[i])
    } else flattennedArr.push(source[i])
  } console.log(flattennedArr)
  return flattennedArr

}

flatten([1, 2, [3, 4], 5, [6]])