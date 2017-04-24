var app = app || {};

app.util = (function() {

	'use strict';

	return {

		getLocation: function(cb) {

			app.util.checkLocationServiceAvailability(function(error) {

				if (error) {
					return cb(error);
				}

				navigator.geolocation.getCurrentPosition(function(result) {
					cb(null, {
						lat: result.coords.latitude,
						long: result.coords.longitude
					});
				}, cb/* error callback */, {
					timeout: app.config.geolocation.timeout
				});
			});
		},

		checkLocationServiceAvailability: function(cb) {

			// The diagnostic plugin is not available in the browser.
			if (!cordova.plugins.diagnostic) {
				return cb();
			}

			cordova.plugins.diagnostic.isGpsLocationAvailable(function(available) {
				app.Logger.log('GPS location is ' + (available ? 'available' : 'not available'));
				if (available) {
					return cb();
				}
				app.util.checkLocationServiceAuthorization(cb);
			}, cb);
		},

		checkLocationServiceAuthorization: function(cb) {

			// The diagnostic plugin is not available in the browser.
			if (!cordova.plugins.diagnostic) {
				return cb();
			}

			cordova.plugins.diagnostic.isLocationAuthorized(function(authorized) {
				app.Logger.log('Location is ' + (authorized ? 'authorized' : 'unauthorized'));
				if (authorized) {
					app.util.checkLocationServiceDeviceSetting(cb);
				} else {
					cordova.plugins.diagnostic.requestLocationAuthorization(function(status) {
						switch(status) {
							case cordova.plugins.diagnostic.permissionStatus.GRANTED:
								app.Logger.log('Permission granted');
								app.util.checkLocationServiceDeviceSetting();
								break;
							case cordova.plugins.diagnostic.permissionStatus.DENIED:
								app.Logger.log('Permission denied');
								cb(new Error('This app has been blocked from accessing the device\'s location service.'));
								break;
							case cordova.plugins.diagnostic.permissionStatus.DENIED_ALWAYS:
								app.Logger.log('Permission permanently denied');
								cb(new Error('This app has been permanently blocked from accessing the device\'s location service.'));
								break;
						}
					}, cb);
				}
			}, cb);
		},

		checkLocationServiceDeviceSetting: function(cb) {

			// The diagnostic plugin is not available in the browser.
			if (!cordova.plugins.diagnostic) {
				return cb();
			}

			cordova.plugins.diagnostic.isGpsLocationEnabled(function(enabled) {
				app.Logger.log('GPS location setting is ' + (enabled ? 'enabled' : 'disabled'));
				if (!enabled) {
					cordova.plugins.locationAccuracy.request(function(success) {
						app.Logger.log('Successfully requested high accuracy location mode: '+success.message);
						cb();
					}, function onRequestFailure(error) {
						app.Logger.error('Accuracy request failed: error code='+error.code+'; error message='+error.message);
						if (error.code !== cordova.plugins.locationAccuracy.ERROR_USER_DISAGREED) {
							if (confirm('Failed to automatically set Location Mode to "High Accuracy". Would you like to switch to the Location Settings page and do this manually?')) {
								cordova.plugins.diagnostic.switchToLocationSettings();
							}
						}
						cb();
					}, cordova.plugins.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY);
				}
			}, cb);
		},

		takePicture: function(cb) {

			// Run camera.
			navigator.camera.getPicture(function(imagePath) {
				// Successfully took the picture.
				cb(null, imagePath);
			}, cb/* error callback */, {
				destinationType: navigator.camera.DestinationType.FILE_URI
			});
		}
	};

})();
