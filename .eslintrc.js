module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
      'plugin:@typescript-eslint/recommended'
  ],
  plugins: [
      '@typescript-eslint'
  ],
  rules: {
      'semi': [1, 'never'],
      "eqeqeq": 2,
      "no-dupe-keys": 2,
      "no-dupe-args": 2,
      "no-empty": 2,
      "no-extra-bind": 2,
      "no-undef": 2,
      "no-const-assign": 2,
      "dot-location": [1, "property"],
      "no-unused-vars": [2, {"vars": "all", "args": "after-used"}],

      "no-extra-boolean-cast": 2,
      "no-extra-parens": 2,
      "no-extra-semi": 2,
      "no-floating-decimal": 2,
      "no-func-assign": 2,
      "no-invalid-this": 2,
      "no-loop-func": 1,
      "no-multi-spaces": 1,
      "no-regex-spaces": 2,
      "no-spaced-func": 2,
      "no-sparse-arrays": 2,
      "no-trailing-spaces": 1,
      "no-unneeded-ternary": 2,
      "no-unreachable": 2,
      "no-unused-expressions": 2,
      "no-use-before-define": 2,
      "no-useless-call": 2,
      "array-bracket-spacing": [2, "never"],
      "arrow-spacing": [1, { "before": true, "after": true }],
      "brace-style": [1, "1tbs"],
      "camelcase": 2,
      "comma-dangle": [2, "never"],
      "comma-style": [2, "last"],
      "dot-notation": [0, { "allowKeywords": true }],
      "eol-last": 1,
      "indent": [2, 2],
      "no-duplicate-case": 2,
      "no-else-return": 2,
      "comma-spacing": [1, { "before": false, "after": true }],
      "space-in-parens": [1, "never"],
      'space-before-function-paren': 1,
      "space-infix-ops": 1,
      "space-before-blocks": 1,
      // "no-irregular-whitespace": [1, { "skipRegExps": true }],
      "no-multiple-empty-lines": [1, { "max": 1 }],
      "no-mixed-spaces-and-tabs": [1, false]
  },
  env:{
      browser: true,
      node: true,
  },
  globals: {
      "Map": true
  }
}
