import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import eslintPluginPrettier from "eslint-plugin-prettier";
import tseslint from "typescript-eslint";
import tsParser from "@typescript-eslint/parser";
import * as next from "@next/eslint-plugin-next";
import imp from "eslint-plugin-import";
import sonar from "eslint-plugin-sonarjs";
import unicorn from "eslint-plugin-unicorn";
import security from "eslint-plugin-security";

export default tseslint.config(
  { ignores: ["dist", "next-env.d.ts", ".next"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parser: tsParser,
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      prettier: eslintPluginPrettier,
      next,
      import: imp,
      unicorn,
      sonarjs: sonar,
      security,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "prettier/prettier": "warn",
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/no-floating-promises": "error",
      "@typescript-eslint/no-misused-promises": "error",
      "@typescript-eslint/strict-boolean-expressions": "warn",
      "@typescript-eslint/no-unnecessary-type-assertion": "warn",
      "no-unreachable": "error",
      "no-cond-assign": "error",
      eqeqeq: ["error", "always"],
      "no-undef": "off",
      "import/no-unused-modules": [
        "warn",
        { unusedExports: true, missingExports: false },
      ],
      "security/detect-eval-with-expression": "error",
      "security/detect-non-literal-fs-filename": "warn",
      "unicorn/prefer-module": "off",
      "unicorn/consistent-function-scoping": "warn",
      "sonarjs/cognitive-complexity": ["warn", 30],
      "sonarjs/no-duplicate-string": "warn",
    },
  },
);
