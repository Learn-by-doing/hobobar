'use strict'

module.exports = function(app) {

	return {
		create: require('./create.js')(app)
	}
}