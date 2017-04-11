var app = app || {};

app.util = (function() {

	'use strict';

	return {

		getLocation: function(cb) {

			navigator.geolocation.getCurrentPosition(function(result) {
				cb(null, {
					lat: result.coords.latitude,
					long: result.coords.longitude
				});
			}, cb);
		}
	};

})();
