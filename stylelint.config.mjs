/** @type {import('stylelint').Config} */
export default {
  extends: ["stylelint-config-standard-scss"],
  rules: {
    "function-url-quotes": null, 
    "import-notation": "string",
    "color-function-notation": "legacy",
    'selector-class-pattern': null,
  },
};
