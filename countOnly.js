// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count

const countOnly = function (allItems, itemsToCount) {
  const results = {};
  for (const item of allItems) {
    if (!itemsToCount[item]) {
      continue;
    }
    if (!results[item]) {
      results[item] = 0;
    }
    results[item] += 1;
  }
  return results;
};

module.exports = countOnly;
