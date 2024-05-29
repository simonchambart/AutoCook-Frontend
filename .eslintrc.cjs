module.exports = {
    root: true,
    env: {
        browser: true,
        es2024: true,
    },
    extends: [
        "airbnb",
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        "plugin:react-hooks/recommended",
        "prettier",
    ],
    ignorePatterns: ["dist", ".eslintrc.cjs"],
    settings: { react: { version: "18.2" } },
    plugins: ["react-refresh", "unicorn"],
    overrides: [
        {
            env: {
                node: true,
            },
            files: [".eslintrc.{js,cjs}"],
            parserOptions: {
                sourceType: "script",
            },
        },
    ],
    parserOptions: { ecmaVersion: "latest", sourceType: "module" },
    rules: {
        "react/jsx-no-target-blank": "off",
        "react-refresh/only-export-components": [
            "warn",
            { allowConstantExport: true },
        ],
    },
}
