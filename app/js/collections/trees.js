var app = app || {};

app.collections = app.collections || {};

app.collections.Trees = (function() {

	return Backbone.Collection.extend({
		url: app.config.api.baseUrl + '/v1/tree'
	});

})();
