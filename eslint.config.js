"use strict";

const customLoggerPlugin = require("./custom-logger-plugin");

module.exports = [
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs",
      ecmaVersion: "latest",
    },
    plugins: { "custom-logger": customLoggerPlugin },
    rules: {
      "custom-logger/suggest-custom-logger": "warn",
    },
  },
];
