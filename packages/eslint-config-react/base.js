module.exports = {
  extends: ['prettier/react'],
  plugins: ['react'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    'import/extensions': ['.js', 'jsx'],
  },
  rules: {
    'class-methods-use-this': [
      'error',
      {
        exceptMethods: [
          'render',
          'getInitialState',
          'getDefaultProps',
          'getChildContext',
          'componentWillMount',
          'componentDidMount',
          'componentWillReceiveProps',
          'shouldComponentUpdate',
          'componentWillUpdate',
          'componentDidUpdate',
          'componentWillUnmount',
        ],
      },
    ],
    'jsx-quotes': ['error', 'prefer-double'],
    'no-unused-expressions': ['error', {allowShortCircuit: true}],
    // https://github.com/yannickcr/eslint-plugin-react
    'react/boolean-prop-naming': 'off',
    'react/button-has-type': 'error',
    'react/default-props-match-prop-types': 'error',
    'react/destructuring-assignment': 'off', // TODO: decide on what option to use
    'react/display-name': 'error',
    'react/forbid-component-props': 'off',
    'react/forbid-dom-props': 'off',
    'react/forbid-elements': 'off',
    'react/forbid-foreign-prop-types': 'off',
    'react/forbid-prop-types': ['error', {forbid: ['any', 'array', 'object']}],
    'react/jsx-fragments': ['error', 'syntax'],
    'react/jsx-boolean-value': ['error', 'never'],
    'react/jsx-child-element-spacing': 'off', // TODO: remove once `eslint-config-prettier` adds this
    'react/jsx-curly-brace-presence': ['error', 'never'],
    'react/jsx-filename-extension': ['error', {extensions: ['.jsx']}],
    'react/jsx-handler-names': [
      'off',
      {eventHandlerPrefix: 'handle', eventHandlerPropPrefix: 'on'},
    ],
    'react/jsx-key': 'error',
    // TODO: disable `ignoreRefs` and`allowArrowFunctions` options
    'react/jsx-no-bind': [
      'error',
      {ignoreRefs: true, allowArrowFunctions: true, allowBind: false},
    ],
    'react/jsx-max-depth': 'off',
    'react/jsx-no-comment-textnodes': 'error',
    'react/jsx-no-duplicate-props': ['error', {ignoreCase: true}],
    'react/jsx-no-literals': 'off',
    'react/jsx-no-target-blank': 'error',
    'react/jsx-no-undef': 'error',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-pascal-case': ['error', {allowAllCaps: true, ignore: []}],
    'react/jsx-props-no-multi-spaces': 'off', // not necessary with prettier
    'react/jsx-sort-default-props': 'off',
    'react/jsx-sort-prop-types': 'off', // deprecated in favor of react/jsx-sort-props
    'react/jsx-sort-props': 'off',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/no-access-state-in-setstate': 'error',
    'react/no-array-index-key': 'error',
    'react/no-children-prop': 'error',
    'react/no-comment-textnodes': 'off', // deprecated in favor of react/jsx-no-comment-textnodes
    'react/no-danger-with-children': 'error',
    'react/no-danger': 'error',
    'react/no-deprecated': 'error',
    'react/no-did-mount-set-state': 'error',
    'react/no-did-update-set-state': 'error',
    'react/no-direct-mutation-state': 'error',
    'react/no-find-dom-node': 'error',
    'react/no-is-mounted': 'error',
    'react/no-multi-comp': ['error', {ignoreStateless: true}],
    'react/no-redundant-should-component-update': 'error',
    'react/no-render-return-value': 'error',
    'react/no-set-state': 'off',
    'react/no-string-refs': 'error',
    'react/no-this-in-sfc': 'error',
    'react/no-typos': 'error',
    'react/no-unescaped-entities': 'error',
    'react/no-unknown-property': 'error',
    'react/no-unsafe': 'error',
    'react/no-unused-prop-types': 'off',
    'react/no-unused-state': 'error',
    'react/no-will-update-set-state': 'error',
    'react/prefer-es6-class': ['error', 'always'],
    'react/prefer-stateless-function': 'off',
    'react/prop-types': [
      'off',
      {ignore: [], customValidators: [], skipUndeclared: false},
    ],
    'react/react-in-jsx-scope': 'error',
    'react/require-default-props': ['error', {forbidDefaultForRequired: true}],
    'react/require-extension': 'off', // deprecated in favor of import/extensions
    'react/require-optimization': 'off',
    'react/require-render-return': 'error',
    'react/self-closing-comp': 'error',
    'react/sort-comp': [
      'error',
      {
        order: [
          'type-annotations',
          'static-methods',
          'instance-variables',
          'lifecycle',
          '/^handle.+$/',
          '/^(is|get|set)(?!(InitialState$|DefaultProps$|ChildContext$|InitialProps$)).+$/',
          'everything-else',
          '/^render.+$/',
          'render',
        ],
      },
    ],
    'react/sort-prop-types': 'off', // we don't use prop-types
    'react/style-prop-object': 'error',
    'react/void-dom-elements-no-children': 'error',
  },
};
