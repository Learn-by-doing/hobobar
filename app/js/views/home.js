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

			app.util.getLocation(_.bind(function(error, location) {

				var map = L.map(this.$map[0], {
					center: [location.lat, location.long],
					zoom: 13
				});

				L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
				L.marker([location.lat, location.long]).addTo(map);

			}, this));
		}

	});

})();
