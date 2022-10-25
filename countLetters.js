const assertEqual = function (actual, expected) {
  console.log(actual === expected ? `✅✅✅Assertion Passed: ${actual} === ${expected}` : `🙈🙈🙈Assertion Failed: ${actual} !== ${expected}`);
};

const countLetters = function (string) {
  const newString = string.split(" ").join("");
  const letters = {};
  for (const letter of newString) {
    if (!letters[letter]) {
      letters[letter] = 0
    }
    letters[letter] += 1

  }
  return letters
}

const letters1 = countLetters("lighthouse in the house");
console.log(letters1)
// TEST CODE
assertEqual(letters1["l"], 1);
assertEqual(letters1["h"], 4);
assertEqual(letters1["u"], 2);

