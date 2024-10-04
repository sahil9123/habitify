module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: [
    "react-refresh",
    "react",
    "@typescript-eslint",
    "react-hooks",
    "prettier",
  ],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    camelcase: 0,
    "no-duplicate-imports": "error",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "react/react-in-jsx-scope": "off",
    "no-console": 0,
    "no-alert": 0,
    "react-hooks/exhaustive-deps": "off",
    "react/prop-types": 0,
    "react/display-name": 0,
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "@typescript-eslint/no-empty-function": "off",
    "react/no-unknown-property": "off",
    "react/no-unescaped-entities ": "off",
  },
};

/*
module.exports = {
  root: true,
  env: { browser: true, es2021: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      tsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: [
    "react-refresh",
    "react",
    "@typescript-eslint",
    "react-hooks",
    "prettier",
    "simple-import-sort",
  ],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    camelcase: 0,
    "no-duplicate-imports": "error",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "react/react-in-jsx-scope": "off",
    "no-console": 0,
    "no-alert": 0,
    "react-hooks/exhaustive-deps": "off",
    "react/prop-types": 0,
    "react/display-name": 0,
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "@typescript-eslint/no-empty-function": "off",
    "react/no-unknown-property": "off",
    "react/no-unescaped-entities ": "off",
  },
  settings: {
    "import/resolver": {
      typescript: {},
    },
    react: {
      version: "detect",
    },
  },
};*/
