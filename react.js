module.exports = {
	'extends': './base.js',
	
	'plugins': [
		'react',
		'react-native',
	],
	
	'parserOptions': {
		'ecmaVersion': 6,
		'sourceType': 'module',
		'ecmaFeatures': {
			'experimentalObjectRestSpread': true,
			'jsx': true,
		},
	},
	
	'rules': {
		//Code style rules
		'jsx-quotes': ['warn', 'prefer-double'],
		
		'react/jsx-uses-vars': 'error',
		'react/style-prop-object': 'error',
		'react-native/no-inline-styles': 'warn',
		
		'no-class-assign': 0,
	},
};
