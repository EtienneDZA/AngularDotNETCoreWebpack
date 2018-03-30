const path = require('path');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const helpers = require('./webpack.helpers');

module.exports = {
	entry: {		
		polyfills: './src/polyfills.ts',
		vendor: './src/vendor.ts',
		app: './src/main.ts',
	},

	resolve: {
		extensions: ['.ts', '.js', '.json']
	},
}