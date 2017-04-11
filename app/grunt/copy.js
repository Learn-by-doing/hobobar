'use strict';

module.exports = {
	deps: {
		files: [
		/*
			Example for copying build files from a dependency to the cordova app's webroot:

			{
				nonull: true,
				src: 'node_modules/jquery/dist/jquery.min.js',
				dest: 'www/lib/jquery/jquery.min.js'
			}

			The whole `www/lib` directory is ignored by git.
		*/
			{
				nonull: true,
				src: 'node_modules/jquery/dist/jquery.js',
				dest: 'www/lib/jquery/jquery.js'
			},
			{
				nonull: true,
				src: 'node_modules/underscore/underscore.js',
				dest: 'www/lib/underscore/underscore.js'
			},
			{
				nonull: true,
				src: 'node_modules/backbone/backbone.js',
				dest: 'www/lib/backbone/backbone.js'
			}
		]
	}
};
