'use strict';

module.exports = function(app) {
	
	var bodyParser = require('body-parser')
	var jsonParser = bodyParser.json()
	var urlencodedParser = bodyParser.urlencoded({ extended: false })

	app.use(bodyParser.urlencoded({ extended: false }))
	app.use(bodyParser.json())
	
	app.post('/api/getlist', function (req, res) {
		console.log('inside post');
  		if (!req.body) return res.sendStatus(400);

  		var requested = req.body;

  		res.header("Access-Control-Allow-Origin", "*");

		app.db.select([
			'trees.id',
			'trees.latitude',
			'trees.longitude',
			'trees.type',
			'trees.description',
			'trees.filename'
		])
		.from('trees')
		.where ('latitude','>',req.body.upperleft_la)
		.andWhere ('latitude','<',req.body.lowerright_la)
		.andWhere ('longitude','>',req.body.upperleft_lo)
		.andWhere ('longitude','<',req.body.lowerright_lo) 
		.then(function(trees) {
			console.log('inside then of knex');
			console.log(trees[0]);
			res.json(trees);
			
			res.send();
		}).catch(console.log);
  		
  		})

};

