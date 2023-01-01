module.exports = {
    root: true,
    extends: ["next/core-web-vitals", "custom-oxygen"],
    parserOptions: {
        project: 'tsconfig.json',
        tsconfigRootDir: __dirname,
    },
    plugins: ["@typescript-eslint"],
    rules: {
        "@typescript-eslint/consistent-type-imports": "warn"
    }
};