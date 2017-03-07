'use strict';

module.exports = function(app) {
	return {
		tree: require('./tree')(app),
		getlist: require('./getlist')(app),
	};
	
};
