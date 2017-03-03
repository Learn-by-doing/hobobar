'use strict'

var config = require('./../../config.js')

var fs = require('fs');
var dir = config.uploads;

var multer = require('multer')

var storage = multer.diskStorage({

	destination: dir,

	filename: function (req, file, cb) {
		cb(null, file.fieldname + '-' + Date.now())
	}
})

var upload = multer({ storage: storage })


module.exports = function(app) {

	app.post('/tree/create', upload.single('tree'), function (req, res, next) {

		app.db('trees')
		.insert({
			latitude : req.body.latitude,
			longitude : req.body.longitude,
			type : req.body.type,
			description : req.body.description,
			filename : req.file.filename
		})
		.then(function(result){
			console.log(result)
			res.send(result);
		})
		.catch(function(error) {
			console.log(error);
		});
	})
};