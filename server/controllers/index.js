'use strict';

module.exports = function(app) {

	require('./home')(app);
	require('./api')(app);
};
