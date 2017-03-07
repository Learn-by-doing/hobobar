'use strict';

module.exports = function(app) {

	app.get('/api/v1/trees', function(req, res, next) {

		app.db.models.Trees.query().select([
			'trees.id',
			'trees.latitude',
			'trees.longitude',
			'trees.type',
			'trees.description',
			'trees.filename'
		])
		.then(function(trees) {
			res.json(trees);
		}).catch(next);
	});
};
