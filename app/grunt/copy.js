'use strict';

module.exports = {
	deps: {
		files: [
			{
				nonull: true,
				src: 'index.html',
				dest: 'www/index.html'
			},
			{
				nonull: true,
				expand: true,
				flatten: true,
				cwd: 'node_modules/leaflet/dist/images/',
				src: ['**'],
				dest: 'www/css/images/'
			},
			{
				nonull: true,
				expand: true,
				cwd: 'images/',
				src: ['**'],
				dest: 'www/images/'
			}
		]
	}
};
