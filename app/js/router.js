var app = app || {};

app.Router = (function() {

	'use strict';

	return Backbone.Router.extend({

		routes: {
			'home': 'home',
			'confirmation': 'confirmation',
			'credits': 'credits',
			'add' : 'add',
			'show/:id' : 'show',

			// For un-matched route, default to:
			'*notFound': 'notFound'
		},

		notFound: function() {

			this.navigate('home', { trigger: true });
		},

		home: function() {

			app.mainView.renderView('Home');
		},

		confirmation: function() {

			app.mainView.renderView('Confirmation');
		},
		
    	credits: function() {

			app.mainView.renderView('Credits');
		},

		add: function() {

			app.mainView.renderView('AddTree');
		},

		show: function(id) {

			app.mainView.renderView('ShowTree', {id: id});
		}

	});

})();
