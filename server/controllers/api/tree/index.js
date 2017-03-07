'use strict';

module.exports = function(app) {

	return {
		create: require('./create')(app),
		detail: require('./detail')(app),
	};
};
