const js = require("@eslint/js");
const react = require("eslint-plugin-react");

module.exports = [
  js.configs.recommended,

  {
    files: ["**/*.js", "**/*.jsx"],
    plugins: {
      react
    },
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: {
        window: "readonly",
        document: "readonly",
        setInterval: "readonly",
        clearInterval: "readonly",
        setTimeout: "readonly",
        clearTimeout: "readonly"
      }
    },
    settings: {
      react: {
        version: "detect"
      }
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "no-unused-vars": [
        "error",
        {
          "varsIgnorePattern": "^[A-Z_]"
        }
      ]
    }
  }
];
