"use strict";

const baseConfig = {
  displayName: "test",
  testEnvironment: "node",
  verbose: false,
  collectCoverage: false,
  silent: true,
  testTimeout: 60000,
};

const configs = {
  "ts-jest": {
    ...baseConfig,
    preset: "ts-jest",
    globals: {
      "ts-jest": {
        tsconfig: "tsconfig.json",
      },
    },
  },

  "@swc/jest": {
    ...baseConfig,
    transform: {
      "\\.ts$": [
        "@swc/jest",
        {
          jsc: {
            parser: {
              syntax: "typescript",
            },
            target: "es2020",
            keepClassNames: true,
          },
        },
      ],
    },
  },
};

const transformer = process.env.JEST_TRANSFORMER || "@swc/jest";

module.exports = configs[transformer];
