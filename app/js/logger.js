var app = app || {};

app.Logger = (function() {

	'use strict';

	var Logger = {

		log: function(message) {

			if (console && typeof console.log === 'function') {
				console.log(message);
			}
		}
	};

	Logger.error = Logger.log;
	return Logger;

})();
