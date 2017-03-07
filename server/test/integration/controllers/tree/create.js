'use strict';

var chai = require('chai');
var chaiHttp = require('chai-http');
var expect = require('chai').expect;
var fs = require('fs');

chai.use(chaiHttp);

var manager = require('../../../manager');
var app = manager.app;

describe('POST /api/v1/tree', function() {

	before(manager.setUp);
	after(manager.tearDown);

	it('create a new tree', function(done) {

		chai.request(app)
			.post('/api/v1/tree')
			.attach('image', fs.readFileSync(__dirname + '/../../../fixtures/images/merrr.jpg'), 'merrr.jpg')
			.field('longitude', '50.00012')
			.field('latitude', '-80.02')
			.field('type', 'some_type')
			.field('description', 'something something')
			.then(function(res) {
				expect(res).to.have.status(200);
				done();
			})
			.catch(done)
	});
});
