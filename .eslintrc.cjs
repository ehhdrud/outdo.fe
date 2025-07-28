module.exports = {
	env: {
		browser: true,
		es2021: true,
		jest: true,
	},
	extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react/recommended', 'prettier'],
	overrides: [
		{
			env: {
				node: true,
			},
			files: ['.eslintrc.{js,cjs}'],
			parserOptions: {
				project: './tsconfig.json',
			},
		},
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier', 'import', 'simple-import-sort'],
	rules: {
		'@typescript-eslint/no-unused-vars': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/no-unused-expressions': 'off',
		'@typescript-eslint/no-empty-object-type': 'off',
		'import/no-unresolved': 'off',
		'react/react-in-jsx-scope': 'off',
		'react/self-closing-comp': 'off',
		'arrow-body-style': ['error', 'as-needed'],
		'simple-import-sort/imports': [
			'error',
			{
				groups: [['^\\u0000'], ['^expo'], ['^react'], ['^@'], ['^[a-z]'], ['^@/'], ['^\\./', '^\\.\\./']],
			},
		],
	},
	settings: {
		'import/resolver': {
			typescript: {},
		},
	},
};
