const eqArrays = require("./eqArrays");

const assertArraysEqual = require("./assertArraysEqual");

const without = function (source, itemsToRemove) {
  let newArr = [];
  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) newArr.push(source[i]);
  }
  return newArr;
};

const words = [1, 2, 3];
console.log(without(words, [1, 2])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);
