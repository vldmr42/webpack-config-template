import { defineConfig } from "eslint/config";
import eslintConfigPrettier from "eslint-config-prettier";
import pluginReact from "eslint-plugin-react";
import reactCompiler from "eslint-plugin-react-compiler";
import reactHooks from "eslint-plugin-react-hooks";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import sonarjs from "eslint-plugin-sonarjs";
import tseslint from "typescript-eslint";

export default defineConfig([
    { ignores: ["build"] },
    {
        ...pluginReact.configs.flat.recommended,
        settings: { react: { version: "detect" } },
        rules: { "react/react-in-jsx-scope": "off" },
    },
    {
        ...reactHooks.configs["recommended-latest"],
        files: ["**/*.{ts,tsx}"],
        plugins: { "react-hooks": reactHooks },
        rules: {
            "react-hooks/rules-of-hooks": "error",
            "react-hooks/exhaustive-deps": "warn",
        },
    },
    reactCompiler.configs.recommended,
    {
        ...sonarjs.configs.recommended,
        rules: {
            "sonarjs/unused-import": "off",
        },
    },
    {
        files: ["**/*.{mjs,ts,tsx}"],
        extends: [...tseslint.configs.recommended, eslintConfigPrettier],
        plugins: {
            "simple-import-sort": simpleImportSort,
        },
        rules: {
            "simple-import-sort/imports": "error",
            "simple-import-sort/exports": "error",
        },
    },
]);
