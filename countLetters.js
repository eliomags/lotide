const countLetters = function (string) {
  const newString = string.split(" ").join("");
  const letters = {};
  for (const letter of newString) {
    if (!letters[letter]) {
      letters[letter] = 0;
    }
    letters[letter] += 1;
  }
  return letters;
};

module.exports = countLetters;
