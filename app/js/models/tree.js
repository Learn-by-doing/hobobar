var app = app || {};

app.models = app.models || {};

app.models.Tree = (function() {

	return Backbone.Model.extend({
		idAttribute: 'id',
		
		defaults: {
			latitude: '',
			longitude: '',
			type: '',
			description: '',
			filename: ''
		}
		
	});

})();