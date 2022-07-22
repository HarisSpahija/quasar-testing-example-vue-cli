const esModules = ["quasar", "quasar/lang", "lodash-es"].join("|");

module.exports = {
  preset: "@vue/cli-plugin-unit-jest/presets/typescript-and-babel",
  testMatch: ["<rootDir>/**/*.spec.(js|jsx|ts|tsx)"],
  transform: {
    // See https://jestjs.io/docs/en/configuration.html#transformignorepatterns-array-string
    [`^(${esModules}).+\\.js$`]: "babel-jest",
  },
  transformIgnorePatterns: [`node_modules/(?!(${esModules}))`],
};
