module.exports = {
	'extends': 'eslint:recommended',
	
	'env': {
		'commonjs': true,
		'node': true
	},
	
	'plugins': [
		'promise',
		'security',
	],
	
	'parserOptions': {
		'ecmaVersion': 6,
		'sourceType': 'module',
		'ecmaFeatures': {
			'experimentalObjectRestSpread': true
		}
	},
	
	'rules': {
		//Disabled rules
		'no-console': 0,
		
		'no-undef': 'warn',
		
		'eol-last': 'error',
		'no-alert': 'warn',
		'no-eval': 'error',
		'no-const-assign': 'error',
		'semi': 'warn',
		'prefer-const': 'warn',
		'no-unused-vars': 'warn',
		'strict': 'error',
		'eqeqeq': 'warn',
		'curly': 'warn',
		'complexity': ['error', 10],
		
		//Code style rules
		'quotes': ['warn', 'single'],
		'indent': ['warn', 'tab', { 'SwitchCase': 1 }],
		'prefer-template': 'warn',
		'key-spacing': ['warn', { 'beforeColon': false, 'afterColon': true }],
		
		'promise/always-return': 'error',
		'promise/no-return-wrap': 'error',
		'promise/param-names': 'error',
		'promise/catch-or-return': 'error',
		'promise/no-native': 'off',
		'promise/no-nesting': 'warn',
		'promise/no-promise-in-callback': 'warn',
		'promise/no-callback-in-promise': 'warn',
	}
};
