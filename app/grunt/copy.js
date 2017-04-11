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
				expand: true,
				cwd: 'node_modules/onsenui/',
				src: [
					'css/font_awesome/**/*',
					'css/ionicons/**/*',
					'css/material-design-iconic-font/**/*',
					'css/onsen-css-components.css',
					'css/onsenui.css',
					'js/onsenui.js'
				],
				dest: 'www/lib/onsenui/'
			},
			{
				nonull: true,
				src: 'node_modules/vue/dist/vue.js',
				dest: 'www/lib/vue/vue.js'
			},
			{
				nonull: true,
				src: 'node_modules/vue-onsenui/dist/vue-onsenui.js',
				dest: 'www/lib/vue-onsenui/vue-onsenui.js'
			},
			{
				nonull: true,
				expand: true,
				flatten: true,
				cwd: 'node_modules/vue2-leaflet/',
				src: [
					'dist/vue2-leaflet.js',
					'node_modules/leaflet/dist/leaflet.js',
					'node_modules/leaflet/dist/leaflet.css'
				],
				dest: 'www/lib/vue2-leaflet/'
			},
			{
				nonull: true,
				expand: true,
				flatten: false,
				cwd: 'node_modules/vue2-leaflet/node_modules/leaflet/dist/images/',
				src: [
					'**'
				],
				dest: 'www/lib/vue2-leaflet/images/'
			}
		]
	}
};
