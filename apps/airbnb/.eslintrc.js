module.exports = {
    root: true,
    extends: ["next/core-web-vitals", "custom-oxygen"],
    parserOptions: {
        project: ['./tsconfig.json'],
        tsconfigRootDir: __dirname,
        ecmaFeatures: { jsx: true },
        ecmaVersion: 12,
    },
};