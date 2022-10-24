const eqArrays = function(arr1, arr2) {
  if (arr1.length!==arr2.length) {
    return false;
  }
  for (i=0; i<arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  } return true  
};

const assertArraysEqual = function (arr1, arr2) {
  console.log(eqArrays(arr1, arr2) ? `✅✅✅Assertion Passed: ${arr1} === ${arr2}` : `🙈🙈🙈Assertion Failed: ${arr1} !== ${arr2}`)
};


const middle = function (source) {
  let middleArr = [];
  if (source.length >2 && source.length % 2 === 0) {
    middleArr.push(source[source.length / 2 - 1], source[source.length / 2])
  } else if (source.length <= 2){
    return middleArr;
  } else if (source.length >2 && source.length % 2 !== 0){
    middleArr.push(source[(source.length - 1) / 2])
  }
  return middleArr
}


assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);

assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);

assertArraysEqual(middle([1]), [1]);
assertArraysEqual(middle([1, 2]), ["2"]);

assertArraysEqual(middle([1, 2, 3]), ["ap"]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), ['HOME', "3"]);

assertArraysEqual(middle([1, 2, 3, 4]), ["2", 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, "4"]);



