var app = app || {};

/*
	No magic constants in the rest of the app.
	Putting configurations in one place makes it easier to make tweaks later.
*/
app.config = (function() {

	'use strict';

	return {
		images: {
			baseUrl: 'https://hobobar.herokuapp.com'
		},
		api: {
			baseUrl: 'https://hobobar.herokuapp.com/api'
		},
		geolocation: {
			timeout: 30000
		}
	}

})();
