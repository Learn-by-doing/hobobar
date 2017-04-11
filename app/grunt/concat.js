'use strict';

module.exports = {

	all: {
		nonull: true,
		src: [
			'node_modules/jquery/dist/jquery.js',
			'node_modules/underscore/underscore.js',
			'node_modules/backbone/backbone.js',
			'node_modules/handlebars/dist/handlebars.js',
			'js/collections/**/*',
			'js/views/**/*',
			'js/router.js',
			'js/init.js'
		],
		dest: 'www/js/all.js'
	}
};
