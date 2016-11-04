const webpack = require('webpack');

module.exports = {
	entry: './src/components/app.jsx',
	output: {
		path: 'dist/js',
		filename: 'app.bundle.js'
	},
	devtool: 'source-map',
	module: {
		loaders: [
			{
				test: /\.js$|\.jsx/,
				exclude: /node_modules/,
				loader: 'babel',
				query: {
					presets: [
						'es2015',
						'react'
					]
				}
			}
		]
	}
};