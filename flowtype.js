module.exports = {
  extends: ['prettier/flowtype'],
  plugins: ['flowtype'],
  settings: {
    flowtype: {
      onlyFilesWithFlowAnnotation: true,
    },
  },
  rules: {
    // https://github.com/gajus/eslint-plugin-flowtype
    'flowtype/boolean-style': [2, 'boolean'],
    'flowtype/define-flow-type': 1,
    'flowtype/delimiter-dangle': 0,
    'flowtype/generic-spacing': [2, 'never'],
    'flowtype/no-dupe-keys': 2,
    'flowtype/no-primitive-constructor-types': 2,
    'flowtype/no-weak-types': 0,
    'flowtype/require-parameter-type': 2,
    'flowtype/require-return-type': 0,
    'flowtype/require-valid-file-annotation': 0,
    'flowtype/require-variable-type': 0,
    'flowtype/semi': 0,
    'flowtype/sort-keys': 0,
    'flowtype/space-after-type-colon': [2, 'always'],
    'flowtype/space-before-generic-bracket': [2, 'never'],
    'flowtype/space-before-type-colon': [2, 'never'],
    'flowtype/type-id-match': 0,
    'flowtype/union-intersection-spacing': [2, 'always'],
    'flowtype/use-flow-type': 1,
    'flowtype/valid-syntax': 1,
  },
};
