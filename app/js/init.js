var app = app || {};

document.addEventListener('deviceready', function() {

	'use strict';

	$('html').removeClass('no-js');

	// Initialize the collection
	app.trees = new app.collections.Trees()

	// Initialize the main view.
	app.mainView = new app.views.Main();
	app.mainView.render();

	// Initialize the router.
	app.router = new app.Router();

	// Start storing in-app browsing history.
	Backbone.history.start();
});
