import { fixupConfigRules, fixupPluginRules } from "@eslint/compat";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import jsxA11Y from "eslint-plugin-jsx-a11y";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import imp from "eslint-plugin-import";
import promise from "eslint-plugin-promise";
import next from "@next/eslint-plugin-next";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  {
    ignores: [
      "**/vite.config.ts",
      "**/tsconfig.json",
      "**/tsconfig.node.json",
      "**/branch.js",
      "**/setupTests.ts",
      "**/jest.config.ts",
      "**/dist",
      "**/test",
      "**/*.test.*",
    ],
  },
  ...fixupConfigRules(
    compat.extends(
      "plugin:@typescript-eslint/eslint-recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:react/recommended",
      "plugin:react/jsx-runtime",
      "plugin:react-hooks/recommended",
      "plugin:jsx-a11y/recommended",
      "plugin:import/recommended",
      "plugin:@next/next/recommended",
      "prettier",
    ),
  ),
  {
    files: ["**/*.{js,jsx,mjs,ts,tsx}"],
    plugins: {
      react: fixupPluginRules(react),
      "react-hooks": fixupPluginRules(reactHooks),
      "@typescript-eslint": fixupPluginRules(typescriptEslint),
      "jsx-a11y": fixupPluginRules(jsxA11Y),
      import: fixupPluginRules(imp),
      next: fixupPluginRules(next),
      promises: fixupConfigRules(promise),
    },

    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },

      parser: tsParser,
      ecmaVersion: 2022,
      sourceType: "module",

      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },

        warnOnUnsupportedTypeScriptVersion: false,
      },
    },

    settings: {
      react: {
        version: "detect",
      },
      "import/resolver": {
        typescript: {
          project: "./tsconfig.json",
        },
      },
    },
    rules: {
      // all rules that don't need typescript type information
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
        },
      ],
      "no-unused-vars": "off",
      "@typescript-eslint/no-explicit-any": "warn",
      "arrow-body-style": "off",
      "prefer-arrow-callback": "off",
      "jsx-a11y/alt-text": "warn",
      "jsx-a11y/aria-role": "warn",
      "require-await": "error",
      "no-return-await": "warn",

      /* === Control flow === */
      "no-unreachable": "error",
      "no-constant-condition": "warn",
      "no-fallthrough": "warn",

      /* === Variables === */
      "no-undef": "error",

      /* === Syntax & style === */
      "no-extra-semi": "error",
      "no-extra-parens": ["warn", "functions"],

      /* === Equality / types === */
      eqeqeq: ["error", "always"],
      "use-isnan": "error",

      /* === Loops / labels === */
      "no-continue": "warn",
      "no-labels": "error",

      /* === Const / let === */
      "prefer-const": "warn",
      "no-const-assign": "error",

      /* === Imports === */
      "import/no-unresolved": "error",
      "import/no-duplicates": "warn",

      /* === Redundant code === */
      "no-useless-return": "warn",
      "no-useless-concat": "warn",
      "no-useless-computed-key": "warn",

      /* === JSDoc === */
      "require-jsdoc": "off", // optional plugin if you want doc enforcement
      "valid-jsdoc": "off", // same, plugin needed
    },
  },
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: __dirname,
        ecmaFeatures: { jsx: true },
        warnOnUnsupportedTypeScriptVersion: false,
      },
    },
    rules: {
      "@typescript-eslint/no-floating-promises": "error",
    },
  },
];
