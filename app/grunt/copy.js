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
			}
		]
	}
};
