
const findKey = function (collection, callback) {
  // testing filter method (works)
  /*
  const keyArrays = Object.keys(collection)
  const keyFound = keyArrays.filter(item => callback(collection[item]));
  return keyFound[0]
  */
  // testing for...in loop (works)
  for (let item in collection) {
    if (callback(collection[item])) {
      return item;
    }
  }
  
}

const assertEqual = function(actual, expected) {
  console.log(actual === expected ? `✅✅✅Assertion Passed: ${actual} === ${expected}` : `🙈🙈🙈Assertion Failed: ${actual} !== ${expected}`);
};

// TEST CODE
assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 2), "noma") // => "noma"


