module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/airbnb'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
	'linebreak-style': 'off',
	'comma-dangle': 'off',
	'semi': ['error', 'always'],
	'import/no-unresolved': 'off',
	'import/no-extraneous-dependencies': 'off',
	'import/no-duplicates': 'off',
	'import/extensions': 'off',
	'import/no-named-as-default': 'off',
	'import/no-named-as-default-member': 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}