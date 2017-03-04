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

  		console.log('req.body.upperleft["latitude"]: ' + req.body.upperleft_la);
  		console.log('req.body.upperleft["latitude"]: ' + req.body.upperleft_lo);
  		console.log('req.body.upperleft["latitude"]: ' + req.body.lowerright_la);
  		console.log('req.body.upperleft["latitude"]: ' + req.body.lowerright_lo);
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
	/*	.and ('latitude','<',req.body.lowerright_la)
		.and ('longitude','<',req.body.upperleft_lo)
		.and ('longitude','<',req.body.lowerright_lo) */
		.then(function(trees) {
			console.log('inside then of knex');
			console.log(trees[0]);
			res.json(trees);
			
			res.send();
		}).catch(console.log);
  		
  		//res.header("Access-Control-Allow-Origin", "*");
  		//res.send();
  		//res.send('welcome from post, l=' + req.body.upperleft.latitude);
  		})

};
//No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin is therefore not allowed access.

