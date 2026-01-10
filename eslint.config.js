import js from "@eslint/js";

export default [
    js.configs.recommended,
    {
        files: ["**/*.js"],
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: "module",
            globals: {
                console: "readonly",
                process: "readonly",
                __dirname: "readonly",
                __filename: "readonly"
            }
        },
        rules: {
            // Relax some strict rules for beginners
            "no-unused-vars": "warn",  // Just warn, don't error
            "no-undef": "error"         // Catch undefined variables
        }
    }
];
