var app = app || {};

app.views = app.views || {};

app.views.Main = (function() {

	'use strict';

	return Backbone.View.extend({

		el: '#app',
		template: '#template-main',

		events: {
			'click #menu-toggle': 'toggleMenu'
		},

		currentView: null,

		initialize: function() {

			_.bindAll(this, 'onDocumentClick');
			$(document).on('click', this.onDocumentClick);
		},

		render: function() {

			var html = $(this.template).html();
			var template = Handlebars.compile(html);
			this.$el.html(template());
			this.onRender();
			return this;
		},

		renderView: function(name, options) {

			var view = new app.views[name](options || {});

			view.$el.addClass('view');

			this.$viewContent.html(view.render().el);

			if (this.currentView) {

				this.currentView.remove();

				if (this.currentView.className) {
					$('body').removeClass('view-' + this.currentView.className);
				}
			}

			this.currentView = view;

			if (view.className) {
				$('body').addClass('view-' + view.className);
			}
		},

		onRender: function() {

			this.$menu = this.$('#menu');
			this.$menuToggle = this.$('#menu-toggle');
			this.$viewContent = this.$('#view-content');
			this.$message = this.$('#message');
			this.$messageContent = this.$('#message-content');
			return this;
		},

		toggleMenu: function() {

			this.$menu.toggleClass('visible');
		},

		showMessage: function(message) {

			this.$messageContent.text(message);
			this.$message.addClass('visible');
		},

		hideMessage: function() {

			this.$message.removeClass('visible');
		},

		onDocumentClick: function(evt) {

			if ($(evt.target)[0] !== this.$menuToggle[0]) {
				this.$menu.removeClass('visible');
			}

			this.hideMessage();
		}

	});

})();
