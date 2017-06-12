'use strict';

var express = require('express');
var app = module.exports = express();
var serveStatic = require('serve-static');

app.lib = require('./lib');
app.config = require('./config');
app.db = require('./database');
require('./middleware')(app);
require('./controllers')(app);

app.db.setUp(function(error) {

	if (error) {
		throw error;
	}

	app.use(serveStatic(__dirname + '/uploads'));

	// This is where we catch express errors. No "app.use" beyond this one!
	app.use(function(error, req, res, next) {
		console.error(error.stack)
		res.status(500).send('Oops! Something went wrong.')
	});

	app.listen(app.config.port, function() {
		console.log('Server running at ' + app.config.db.host + ':' + app.config.port);
	});

	app.ready = true;
});
