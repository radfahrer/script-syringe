/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/en/configuration.html
 */

module.exports = {
  // The directory where Jest should output its coverage files
  coverageDirectory: "coverage",

  // An array of file extensions your modules use
  moduleFileExtensions: ["js", "mjs"],

  // The glob patterns Jest uses to detect test files
  testMatch: ["**/*.test.mjs"],

  // A map from regular expressions to paths to transformers
  transform: {
    "^.+\\.mjs$": "babel-jest",
  }
};
