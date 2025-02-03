module.exports = {
    transform: {
      "^.+\\.[t|j]sx?$": "babel-jest",
    },
    moduleNameMapper: {
      "^axios$": require.resolve("axios"), // Ensure axios is resolved correctly
    },
  };