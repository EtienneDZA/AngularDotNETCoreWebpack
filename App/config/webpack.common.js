const path = require('path');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const helpers = require('./webpack.helpers');

module.exports = {
	entry: {		
		polyfills: './App/polyfills.ts',
		vendor: './App/vendor.ts',
		app: './App/main.ts',
	},

	resolve: {
		extensions: ['.ts', '.js', '.json']
	},
}