'use strict';

var BaseModel = require('./BaseModel');

module.exports = BaseModel.extend({

	tableName: 'trees',

	defineSchema: function(table) {

		BaseModel.defineSchema.apply(this, arguments);

		table.increments('id');
		table.decimal('latitude', 23, 20).notNullable();
		table.decimal('longitude', 23, 20).notNullable();
		table.string('type').notNullable();
		table.text('description');
		table.string('filename').notNullable();
	}

});
