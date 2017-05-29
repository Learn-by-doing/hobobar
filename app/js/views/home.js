var app = app || {};

app.views = app.views || {};


app.views.Home = (function() {

	'use strict';

	return Backbone.View.extend({

		collection: app.trees,
		className: 'home',
		template: '#template-home',

		getTrees: function(cb) {

			var self = this;
			var treesArray = [];
			this.collection.fetch({
				success: function(response) {
					treesArray = response.toJSON();
					cb(null, treesArray);
				},
				error: function() {
					cb(new Error('Failed to get trees!'));
				}
			})
		},

		render: function() {

			var html = $(this.template).html();
			var template = Handlebars.compile(html);
			this.$el.html(template({
				// Data for the template goes here.
			}));
			this.$map = this.$('#map');
			this.renderMap();
			return this;
		},

		renderMap: function() {

			var $map = this.$map;
			var map = this.map;
			// Binds the function this.renderTrees to the object this
			var renderTrees = _.bind(this.renderTrees, this);

			app.util.getLocation(function(error, location) {

				if (error) {
					app.Logger.error('Failed to get location: ' + error.message);
					app.mainView.showMessage('Failed to get your location. Is your location service turned off?');
				}

				var options = {};

				if (location) {
					// Center the map and set reasonable zoom level, if we have the current location.
					options.center = [location.lat, location.long];
					options.zoom = 13;
				}

				map = L.map($map[0], options);
				L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

				if (location) {
					// Add current location marker to map, if we have it.
					L.marker([location.lat, location.long]).addTo(map);
				}

				renderTrees(map);
			});
			
		},

		renderTrees: function(map) {
			this.getTrees(function(error, treesArray) {
				if (treesArray) {
					_.each(treesArray, function(item) {
						L.marker([item.latitude, item.longitude]).addTo(map);
					});
				}
			});
		}

	});

})();
