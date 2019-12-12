module.exports = function(config) {
  config.set({
    mutator: "typescript",
    packageManager: "yarn",
    reporters: ["html", "clear-text", "progress"],
    htmlReporter: {
      baseDir: "reports/mutation"
    },
    testFramework: "mocha",
    testRunner: "mocha",
    mochaOptions: {
      spec: ["./spec/**/*.spec.ts"],
      opts: "./spec/support/default.stryker.opts"
    },
    coverageAnalysis: "off",
    tsconfigFile: "tsconfig.json",
    mutate: ["./src/**/*.ts"]
  });
};
