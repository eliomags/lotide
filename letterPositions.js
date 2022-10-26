const letterPositions = function (sentence) {
  const newArray = sentence.toLowerCase().split(" ").join("").split("");
  console.log(newArray);
  const results = {};
  for (let i = 0; i < newArray.length; i++) {

    if (!results[newArray[i]]) {
      results[newArray[i]] = [];
    }

    if (results[newArray[i]]) {
      results[newArray[i]].push(i)
    }
  }
  return results
};

console.log(letterPositions("helLo world"))

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


const assertArraysEqual = function (arr1, arr2) {
  console.log(eqArrays(arr1, arr2) ? `✅✅✅Assertion Passed: ${arr1} === ${arr2}` : `🙈🙈🙈Assertion Failed: ${arr1} !== ${arr2}`)
}

assertArraysEqual(letterPositions("helLo world").l, [2, 3, 8]); // => true
