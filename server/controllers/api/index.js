'use strict';

module.exports = function(app) {
	return {
		tree: require('./tree')(app),
		trees: require('./trees')(app),
	};
	
};
