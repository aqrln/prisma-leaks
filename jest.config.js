"use strict";

const configs = {
  "ts-jest": {
    displayName: "test",
    preset: "ts-jest",
    testEnvironment: "node",
    verbose: false,
    collectCoverage: false,
    silent: true,
    globals: {
      "ts-jest": {
        tsconfig: "tsconfig.json",
      },
    },
  },

  "@swc/jest": {
    displayName: "test",
    testEnvironment: "node",
    verbose: false,
    collectCoverage: false,
    silent: true,
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
