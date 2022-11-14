const letterPositions = function (sentence) {
  const newArray = sentence.toLowerCase().split(" ").join("").split("");
  console.log(newArray);
  const results = {};
  for (let i = 0; i < newArray.length; i++) {
    if (!results[newArray[i]]) {
      results[newArray[i]] = [];
    }

    if (results[newArray[i]]) {
      results[newArray[i]].push(i);
    }
  }
  return results;
};

module.exports = letterPositions;
