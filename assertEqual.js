const assertEqual = function(actual, expected) {
  console.log(actual === expected ? "✅✅✅Assertion Passed: " + actual + " === " + expected : "🙈🙈🙈Assertion Failed: " + actual + " !== " + expected);
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Lighthouse", "Lighthouse");
assertEqual(1, -98);