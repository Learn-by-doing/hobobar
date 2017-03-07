'use strict';

if (process.env.NODE_ENV !== 'test') {
	throw new Error('NODE_ENV must be set to "test" to run tests');
}

var _ = require('underscore');
var async = require('async');
var fs = require('fs');

var app = require('../server');
var db = app.db;

var manager = module.exports = {

	app: app,

	// Wait for the app to be ready.
	onReady: function(cb) {

		if (app.ready) {
			// App is already ready.
			// Execute the callback at the next loop.
			return _.defer(cb);
		}

		// App not ready yet.
		// Wait a little time and then check again.
		setTimeout(function() {
			manager.onReady(cb);
		}, 25);
	},

	setUp: function(cb) {

		async.series([
			manager.onReady,
			manager.tearDown,
			db.setUp
		], cb);
	},

	tearDown: function(cb) {

		async.parallel([
			manager.dropDatabaseTables,
			manager.deleteFixtures
		], cb);
	},

	dropDatabaseTables: function(cb) {

		// Drop tables in reverse order (because of foreign keys).
		var models = _.values(db.models).reverse();
		async.eachSeries(models, function(model, next) {
			db.schema.dropTableIfExists(model.tableName).then(function() {
				next();
			}).catch(next);
		}, cb);
	},

	deleteFixtures: function(cb) {

		var dir = app.config.uploadsDir + '/trees';

		fs.readdir(dir, function(error, files) {

			if (error) {
				return cb(error);
			}

			async.each(files, function(file, next) {

				fs.stat(dir + '/' + file, function(error, stat) {

					if (error) {
						return next(error);
					}

					if (!stat.isFile()) {
						return next();
					}

					fs.unlink(dir + '/' + file, next);
				});

			}, cb);
		});
	}
};
