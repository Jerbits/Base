const webpack = require('webpack');
const path = require('path');
const Extractplugin = require('extract-text-webpack-plugin');
const environment = 'production';

let config = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, './build'),
		filename: 'bundle.js'
	},
	module: {
    rules: [
	    {
	      test: /\.js$/,
	      exclude: /node_modules/, 
	      loader: "babel-loader" 
	    },
	    {
	    	test: /\.scss$/,
	    	use: Extractplugin.extract({
					use: ['css-loader', 'sass-loader'],
					fallback: 'style-loader'
	    	})
	    }
    ]
  },
  plugins: [
		new Extractplugin({
			filename: 'styles.css',
			allChunks : true,
			disable: process.env.NODE_ENV !== 'production'
		})
  ],
  devServer: {
  	contentBase: path.resolve(__dirname, './build'),
  	historyApiFallback: true,
  	inline: true,
  	open: true
  },
  devtool: 'eval-source-map'
}

module.exports = config;