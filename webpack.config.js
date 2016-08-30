var path = require('path')
var yeticss = require('yeticss')

module.exports = {
	entry: './src/index.js',
	output: {
		path: __dirname,
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{ test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader' },
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['es2015']
				}
			},
			{
				test: /\.tag$/,
				loader: 'tag',
				exclude: /node_modules/,
			},
		]
	},
	stylus: {
		use: [yeticss()]
	}
}