const middle = function (source) {
  let middleArr = [];
  if (source.length > 2 && source.length % 2 === 0) {
    middleArr.push(source[source.length / 2 - 1], source[source.length / 2]);
  } else if (source.length <= 2) {
    return middleArr;
  } else if (source.length > 2 && source.length % 2 !== 0) {
    middleArr.push(source[(source.length - 1) / 2]);
  }
  return middleArr;
};

module.exports = middle;
