var app = app || {};

app.views = app.views || {};

app.views.Home = (function() {

	'use strict';

	return Backbone.View.extend({

		className: 'home',
		template: '#template-home',

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

				var map = L.map($map[0], options);
				L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

				if (location) {
					// Add current location marker to map, if we have it.
					L.marker([location.lat, location.long]).addTo(map);
				}
			});
		}

	});

})();
