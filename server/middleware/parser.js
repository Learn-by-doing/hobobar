'use strict';

module.exports = function(app) {

	var bodyParser = require('body-parser');

	app.use(bodyParser.urlencoded({ extended: false }));

	app.use(bodyParser.json());

	// parse application/vnd.api+json as json
	app.use(bodyParser.json({type: 'application/vnd.api+json'}));
};