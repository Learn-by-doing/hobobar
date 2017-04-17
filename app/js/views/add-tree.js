var app = app || {};

app.views = app.views || {};

app.views.AddTree = (function() {

	'use strict';

	return Backbone.View.extend({

		className: 'add-tree',

		template: '#template-add-tree',

		events: {
			'click #submit-add-tree': 'submit'
		},

		render: function() {

			var html = $(this.template).html();
			var template = Handlebars.compile(html);
			this.$el.html(template({
				// Data for the template goes here.
			}));
			return this;
		},

		submit: function() {
			var newTree = new app.models.Tree({
				latitude: 23.23,
				longitude: 23.23,
				type: $('#type').val(),
				description: $('#description').val(),
				filename: 'test'
			})
			console.log(newTree.attributes)
			app.trees.add(newTree);
			newTree.save(null, {
				success: function(response) {
					console.log('Successfully SAVED tree with id: ' + response.toJSON().id);
				},
				error: function() {
					console.log('Failed to save tree!');
				}
			});
		}

	});

})();