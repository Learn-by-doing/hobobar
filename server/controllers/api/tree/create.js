'use strict';

module.exports = function(app) {

	var multer = require('multer');

	var storage = multer.diskStorage({

		destination: app.config.uploadsDir + '/trees',

		filename: function(req, file, cb) {
			cb(null, app.lib.getRandomCharacters(10) + '-' + (new Date).getTime() + '-' + file.originalname);
		}
	});

	var upload = multer({ storage: storage });

	app.post('/api/v1/tree', upload.single('image'), function (req, res, next) {

		app.db.models.Trees.query()
			.insert({
				latitude: req.body.latitude,
				longitude: req.body.longitude,
				type: req.body.type,
				description: req.body.description,
				filename: req.file.filename
			})
			.then(function(result) {
				res.status(200).end();
			})
			.catch(next);
	})
};