'use strict';

module.exports = function(app) {

	return {
		detail: require('./detail')(app),
	};
};
