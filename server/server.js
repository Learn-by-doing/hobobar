'use strict';

var express = require('express');

var app = module.exports = express();

app.config = require('./config');
app.models = require('./models');
app.middleware = require('./middleware')(app);
app.controllers = require('./controllers')(app);

// This is where we catch express errors. No "app.use" beyond this one!
app.use(function(error, req, res, next) {
	console.error(error.stack)
	res.status(500).send('Oops! Something went wrong.')
});

app.listen(app.config.port, app.config.host, function() {
	console.log('Server running at ' + app.config.host + ':' + app.config.port);
});
