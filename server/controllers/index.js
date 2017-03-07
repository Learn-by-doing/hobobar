'use strict';

module.exports = function(app) {

	return {
		home: require('./home')(app),
		api: require('./api')(app),
	};
};
