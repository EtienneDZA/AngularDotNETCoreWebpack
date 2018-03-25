module.exports = function (config) {

	var webpackConfig = require('./config/webpack.test.js');

	config.set({
		basePath: '',
		frameworks: ['jasmine'],
		files: [
			{ pattern: './config/spec.bundle.js', watched: false }
		],
		exclude: [
		],

		client: {
			clearContext: false
		},

		preprocessors: {
			'./config/spec.bundle.js': ['webpack', 'sourcemap']
		},

		// webpack
		webpack: webpackConfig,

		//reporters: ['progress'],
		reporters: ['spec', 'kjhtml'],

		port: 9876,
		colors: true,
		logLevel: config.LOG_INFO,
		autoWatch: true,
		browsers: ['Chrome'],
		singleRun: false,
		concurrency: Infinity
	})
}