var app = app || {};

app.collections = app.collections || {};

app.collections.Trees = (function() {

	return Backbone.Collection.extend({
		url: 'http://localhost:3000/api/v1/tree'
	});

})();
