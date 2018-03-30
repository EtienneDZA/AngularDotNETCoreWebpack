const path = require('path');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const helpers = require('./webpack.helpers');

const commonConfig = require('./webpack.common');
const webpackMerge = require('webpack-merge');

const MinifyPlugin = require('babel-minify-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const ROOT = path.resolve(__dirname, '..');

module.exports = webpackMerge(commonConfig, {

	//const isDevBuild = !(env && env.prod);
	//devtool: 'source-map',

	performance: {
		hints: false
	},

	output: {
		path: ROOT + '/wwwroot/',
		filename: 'dist/[name].[chunkhash].bundle.js',
		chunkFilename: 'dist/[id].[chunkhash].chunk.js',
		publicPath: '/'
	},

	devServer: {
		historyApiFallback: true,
		contentBase: path.join(ROOT, '/wwwroot/'),
		watchOptions: {
			aggregateTimeout: 300,
			poll: 1000
		}
	},

	//optimization: {
	//	namedModules: true
	//},

	module: {
		rules: [
			{ test: /\.ts$/, use: ['awesome-typescript-loader','angular-router-loader','angular2-template-loader','source-map-loader','tslint-loader'] },
			{ test: /\.(png|jpg|gif|woff|woff2|ttf|svg|eot)$/, use: 'file-loader?name=assets/[name]-[hash:6].[ext]' },
			{ test: /favicon.ico$/, use: 'file-loader?name=/[name].[ext]' },
			//{ test: /\.css$/, use: ['to-string-loader', 'style-loader', 'css-loader'] },
			{
				test: /\.css(\?|$)/, 
				loaders: ['to-string-loader'].concat(ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: ['css-loader']
				}))
			},
			{
				test: /\.less$/,
				loaders: ['to-string-loader'].concat(ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: ['css-loader', 'less-loader']
				}))
			},
			//{ test: /\.less$/, use: [ "style-loader", "css-loader", "less-loader" ] },
			{ test: /\.html$/, use: 'raw-loader' }
		],
		exprContextCritical: false
	},
	plugins: [

		new webpack.optimize.CommonsChunkPlugin({ name: ['app', 'vendor', 'polyfills'] }),
		// Extract boilerplate
		new webpack.optimize.CommonsChunkPlugin({ name: ['manifest'] }),

		// Add separate config vir vendor. kyk na MS example
		// kyk hier na bundle analyzer: https://medium.com/@adamrackis/vendor-and-code-splitting-in-webpack-2-6376358f1923


		new ExtractTextPlugin('css/[name].[chunkhash].css'),

		new webpack.NamedModulesPlugin(),
		new webpack.HashedModuleIdsPlugin(),

		new CleanWebpackPlugin(
			['./wwwroot/dist', './wwwroot/assets', './wwwroot/css'],
			{ root: ROOT }
		),

		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery',
			'window.jQuery': 'jquery'
		}),

		new HtmlWebpackPlugin({
			filename: '../Views/Shared/_Layout.cshtml',
			inject: 'body',
			template: 'src/_Layout.Template.cshtml'
		}),

		// Uses babel-minify-webpack-plugin for minification
		//new MinifyPlugin ()

		//new CopyWebpackPlugin([
		//	{ from: './src/images/*.*', to: 'assets/', flatten: true }
		//])
	]

});