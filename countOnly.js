const assertEqual = function(actual, expected) {
  console.log(actual === expected ? `✅✅✅Assertion Passed: ${actual} === ${expected}` : `🙈🙈🙈Assertion Failed: ${actual} !== ${expected}`);
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];



// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count

const countOnly = function (allItems, itemsToCount) {
  const results = {};
  for (const item of allItems) {
    if (!itemsToCount[item]) {
      continue
    }
    if (!results[item]) {
      results[item] = 0
    }
    results[item] += 1
  }
  return results
}


const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);

// Earlier version
// const countOnly = function(allItems, itemsToCount) {
//   let results = {};
//   for (let item of allItems) {
//     if (itemsToCount[item] === true && !results[item]) {
//     results[item] = 1
//     } else if (itemsToCount[item] === true && results[item]) {
//       results[item] +=1
//       }
    
//   }return results
  
//   }