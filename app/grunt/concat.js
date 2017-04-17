'use strict';

module.exports = {

	all_js: {
		nonull: true,
		src: [
			'node_modules/jquery/dist/jquery.js',
			'node_modules/underscore/underscore.js',
			'node_modules/backbone/backbone.js',
			'node_modules/handlebars/dist/handlebars.js',
			'node_modules/leaflet/dist/leaflet-src.js',
			'js/util.js',
			'js/models/**/*',
			'js/collections/**/*',
			'js/views/**/*',
			'js/router.js',
			'js/init.js'
		],
		dest: 'www/js/all.js'
	},
	all_css: {
		nonull: true,
		src: [
			'node_modules/leaflet/dist/leaflet.css',
			'css/base.css',
			'css/menu.css',
			'css/views/**'
		],
		dest: 'www/css/all.css'
	}
};
