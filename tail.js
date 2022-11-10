const assertEqual = require('./assertEqual');

const tail = function(exampleArray) {
  let newArray = exampleArray.slice(1);
  return newArray;
};


module.exports = tail;

