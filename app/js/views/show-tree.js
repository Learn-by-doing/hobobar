var app = app || {};

app.views = app.views || {};

app.views.ShowTree = (function() {

	'use strict';

	return Backbone.View.extend({

		collection: app.trees,

		className: 'show-tree',

		template: '#template-show-tree-details',

		initialize: function(options) {
			this.id = options.id;
		},

		getTrees: function(cb) {

			var self = this;
			var treesArray = [];
			this.collection.fetch({
				success: function(response) {
					treesArray = response.toJSON();
					cb(null, treesArray);
				},
				error: function() {
					cb(new Error('Failed to get corresponding tree details!'));
				}
			})
		},

		render: function() {

			var html = $(this.template).html();
			var template = Handlebars.compile(html);
			var self = this;
			this.getTrees(function(error, treesArray){
				if (treesArray) {
					_.each(treesArray, function(item) {
						if (item.id == self.id) {
							self.$el.html(template({
								description: item.description,
								type: item.type,
								imageUrl: app.config.images.baseUrl + '/trees/' + item.filename + '.jpg'
								// Data for the template goes here.
							}));	
						}
					});
				}
			});
			return this;
		},

		onRender: function() {

			
		},

		submit: function() {
		}

	});

})();