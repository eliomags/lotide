const flatten = function (source) {
  let flattennedArr = [];
  for (i = 0; i < source.length; i++) {
    if (Array.isArray(source[i])) {
      flattennedArr = flattennedArr.concat(source[i]);
    } else flattennedArr.push(source[i]);
  }
  console.log(flattennedArr);
  return flattennedArr;
};

module.exports = flatten;
