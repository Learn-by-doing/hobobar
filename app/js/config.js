var app = app || {};

/*
	No magic constants in the rest of the app.
	Putting configurations in one place makes it easier to make tweaks later.
*/
app.config = (function() {

	'use strict';

	return {
		api: {
			baseUrl: 'http://localhost:3000/api'
		},
		geolocation: {
			timeout: 30000
		}
	}

})();
