const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpackTools = require('@ngtools/webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const helpers = require('./webpack.helpers');

const commonConfig = require('./webpack.common');
const webpackMerge = require('webpack-merge');

const ROOT = path.resolve(__dirname, '..');

module.exports = webpackMerge(commonConfig, {

    //entry: {
    //    'polyfills': './App/polyfills.ts',
    //    'vendor': './App/vendor.ts',
    //    'app': './App/main-aot.ts'
    //},

    output: {
        path: ROOT + '/wwwroot/',
        filename: 'dist/[name].[hash].bundle.js',
        chunkFilename: 'dist/[id].[hash].chunk.js',
        publicPath: '/'
    },

    //resolve: {
    //    extensions: ['.ts', '.js', '.json']
    //},

    devServer: {
        historyApiFallback: true,
        stats: 'minimal',
        outputPath: path.join(ROOT, 'wwwroot/')
    },

    module: {
        rules: [
            {
                test: /(?:\.ngfactory\.js|\.ngstyle\.js|\.ts)$/,
                use: '@ngtools/webpack'
            },
            {
                test: /\.(png|jpg|gif|woff|woff2|ttf|svg|eot)$/,
                use: 'file-loader?name=assets/[name]-[hash:6].[ext]'
            },
            {
                test: /favicon.ico$/,
                use: 'file-loader?name=/[name].[ext]'
            },
            {
                test: /\.css$/,
                use: ['style-loader','css-loader'
                ]
            },
            {
                test: /\.scss$/,
                include: path.join(ROOT, 'App/styles'),
                use: ['style-loader','css-loader','sass-loader']
            },
            {
                test: /\.scss$/,
                exclude: path.join(ROOT, 'App/styles'),
                use: ['raw-loader','sass-loader']
            },
            {
                test: /\.html$/,
                use: 'raw-loader'
            }
        ],
        exprContextCritical: false
	},

	optimization: {
		noEmitOnErrors: true
	}

    plugins: [
        //new BundleAnalyzerPlugin({
        //    analyzerMode: 'static'
        //}),
        new webpackTools.AngularCompilerPlugin({
            tsConfigPath: './tsconfig-aot.json'
            // entryModule: './App/app/app.module#AppModule'
        }),

        new CleanWebpackPlugin(
            [
                './wwwroot/dist',
                './wwwroot/assets'
            ],
            { root: ROOT }
	    ),

	   // HashedModuleIdsPlugin

	   /** @deprecated use config.optimization.noEmitOnErrors */
        //new webpack.NoEmitOnErrorsPlugin(),

        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            output: {
                comments: false
            },
            sourceMap: false
        }),
        new webpack.optimize.CommonsChunkPlugin(
            {
                name: ['vendor', 'polyfills']
            }),
        new HtmlWebpackPlugin({
            filename: '../Views/Shared/_Layout.cshtml',
            inject: 'body',
		   template: 'App/_Layout.Template.cshtml'
        }),

        new CopyWebpackPlugin([
            { from: './App/images/*.*', to: 'assets/', flatten: true }
        ])
    ]

});