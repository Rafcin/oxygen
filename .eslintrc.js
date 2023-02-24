module.exports = {
  root: true,
  extends: ["@tsconfig/recommended/tsconfig.json"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
