'use strict';

module.exports = function(app) {

	return {
		tree: require('./tree')(app),
	};
};
