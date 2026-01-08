import { defineConfig, globalIgnores } from "eslint/config";
import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import react from "eslint-plugin-react";
import prettier from "eslint-plugin-prettier";
import reactHooks from "eslint-plugin-react-hooks";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import { fixupPluginRules } from "@eslint/compat";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default defineConfig([globalIgnores(["dist/**/*", "**/node_modules"]), {
    extends: [
        ...compat.extends("prettier"),
        ...compat.extends("eslint:recommended"),
        ...nextCoreWebVitals,
        ...compat.extends("plugin:react/recommended"),
        ...compat.extends("plugin:prettier/recommended"),
        ...compat.extends("plugin:tailwindcss/recommended"),
        ...compat.extends("plugin:@typescript-eslint/recommended")
    ],

    plugins: {
        react,
        prettier,
        "react-hooks": fixupPluginRules(reactHooks),
        "@typescript-eslint": typescriptEslint,
        "simple-import-sort": simpleImportSort,
    },

    languageOptions: {
        globals: {
            ...globals.browser,
            ...globals.node,
        },

        parser: tsParser,
        ecmaVersion: "latest",
        sourceType: "commonjs",
    },

    settings: {
        react: {
            version: "detect",
        },
    },

    rules: {
        "linebreak-style": ["error", "unix"],
        indent: "off",
        semi: ["error", "never"],

        quotes: ["error", "single", {
            avoidEscape: true,
            allowTemplateLiterals: true,
        }],

        "eol-last": ["error", "always"],

        "prettier/prettier": ["error", {
            semi: false,
            singleQuote: true,
        }],

        "react/react-in-jsx-scope": "off",
        "react/prop-types": "off",

        "no-console": ["error", {
            allow: ["warn", "error", "debug"],
        }],

        "no-multiple-empty-lines": ["error", {
            max: 1,
        }],

        "simple-import-sort/imports": "error",
        "simple-import-sort/exports": "error",
        "no-extra-boolean-cast": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-var-requires": "off",
        "no-unused-vars": "off",

        "@typescript-eslint/no-unused-vars": ["error", {
            vars: "all",
            varsIgnorePattern: "^_",
            args: "after-used",
            argsIgnorePattern: "^_",
        }],

        "react-hooks/exhaustive-deps": "error",
        "prefer-rest-params": "off",
        "no-html-link-for-pages": "off",
        "no-duplicate-imports": "error",
    },
}]);