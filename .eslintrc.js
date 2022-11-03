module.exports = {
   env: {
      browser: true,
      es2021: true,
   },
   extends: ["plugin:react/recommended", "standard-with-typescript", "prettier"],
   overrides: [],
   parserOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      project: "./tsconfig.json",
   },
   plugins: ["react"],
   rules: {
      "react/jsx-key": 0,
      "require-jsdoc": 0,
      "no-use-before-define": "off",
      "react/react-in-jsx-scope": "off",
      "import/extensions": [
         "error",
         "ignorePackages",
         {
            js: "never",
            jsx: "never",
            ts: "never",
            tsx: "never",
         },
      ],
      "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx", "tsx"] }],
      "spaced-comment": [
         "error",
         "always",
         {
            line: {
               markers: ["/"],
            },
         },
      ],
   },
   settings: {
      react: {
         version: "detect",
      },
      "import/resolver": {
         node: {
            extensions: [".js", ".jsx", ".tsx", "ts"],
         },
      },
   },
}
