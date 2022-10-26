const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

// Function without Object.keys
// const findKeyByValue = function(collection, string){
//   const newString = string.toLowerCase();
//   for (const movie in collection) {
//     if (newString === collection[movie].toLowerCase()) {
//       return movie
//     }
//   } 
// }

const findKeyByValue = function(collection, string){
   const keysArray = Object.keys(collection)
  for (const key of keysArray) {
    if (collection[key] === string )
    return key
  }
}

const assertEqual = function(actual, expected) {
  console.log(actual === expected ? `✅✅✅Assertion Passed: ${actual} === ${expected}` : `🙈🙈🙈Assertion Failed: ${actual} !== ${expected}`);
};

// TEST
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);