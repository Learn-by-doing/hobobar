'use strict';

module.exports = function(app) {

	// to allow localhost:8000 api calls
	app.use(function(req, res, next) {
		res.header("Access-Control-Allow-Origin", "http://localhost:8000");
		res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
		next();
	});
};
