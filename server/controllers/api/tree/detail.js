'use strict';

module.exports = function(app) {

	app.get('/api/v1/tree/:id', function(req, res, next) {

		app.db.models.Trees.query()
			.select()
			.where('id', req.params.id)
			.limit(1)
			.then(function(results) {

				var tree = results[0] || null;

				if (!tree) {
					return res.status(404).end();
				}

				res.json(tree);

			}).catch(next);
	});
};
