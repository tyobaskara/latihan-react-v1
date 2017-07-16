var webpack = require('webpack');
var path = require('path');

module.exports = {
	entry: __dirname + '/main.js',
	devServer: {
		inline: true,
		port: 3333
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: __dirname + '/node_modules/',
				loader: 'babel-loader',
				query: {
					presets: ['es2015', 'react']
				}
			}
		]
	},
	output: {
		path: __dirname,
		filename: 'main.min.js'
	}
}