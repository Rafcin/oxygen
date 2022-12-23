module.exports = {
  extends: ["next", "turbo", "prettier"],
  settings: {
    react: {
      version: "detect",
    },
    "@typescript-eslint/await-thenable": "error",
    "@typescript-eslint/require-await": "error",
    "@typescript-eslint/no-floating-promises": "error"
  },
  parserOptions: {
    project: "tsconfig.json"
  }
};