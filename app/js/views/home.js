var app = app || {};

app.views = app.views || {};

app.views.Home = (function() {

	'use strict';

	return Backbone.View.extend({

		className: 'home',

		template: '#template-home',

		events: {
		},

		render: function() {

			var html = $(this.template).html();
			var template = Handlebars.compile(html);
			this.$el.html(template({
				// Data for the template goes here.
			}));
			return this;
		}

	});

})();
