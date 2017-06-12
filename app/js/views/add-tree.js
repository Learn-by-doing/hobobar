var app = app || {};

app.views = app.views || {};

app.views.AddTree = (function() {

	'use strict';

	return Backbone.View.extend({

		className: 'add-tree',

		template: '#template-add-tree',

		events: {
			'submit form': 'submit'
		},

		render: function() {

			var html = $(this.template).html();
			var template = Handlebars.compile(html);
			var data = {
				types: [
					{ key: 'apple', label: 'Apple' },
					{ key: 'cherry', label: 'Cherry' },
					{ key: 'pear', label: 'Pear' }
				]
			};
			this.$el.html(template(data));
			return this;
		},

		submit: function(evt) {

			evt.preventDefault();

			app.util.takePicture(function(error, imagePath) {

				if (error) {
					app.Logger.error('Failed to take picture: ' + error.message);
					return app.mainView.showMessage('Failed to take picture.');
				}

				app.util.getLocation(function(error, location) {

					if (error) {
						app.Logger.error('Failed to get location: ' + error.message);
						return app.mainView.showMessage('Failed to get your location. Is your location service turned off?');
					}

					var newTree = new app.models.Tree({
						latitude: location.lat,
						longitude: location.long,
						type: $('#type').val(),
						description: $('#description').val(),
						imagePath: imagePath
					});

					newTree.save(null, {
						success: function() {
							app.trees.add(newTree);
							app.mainView.showMessage('A new tree was added. Thanks!')
							// Show the home screen.
							app.router.navigate('home', { trigger: true });
						},
						error: function(model, error) {
							app.Logger.error(error);
							app.mainView.showMessage('Failed to add tree.')
						}
					});
				});
			});
		}
	});
})();
