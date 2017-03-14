document.addEventListener('deviceready', function() {    // The device is ready

    (function(window) {

        var watchID = null;

        var position = {
            static: function(callback) {
                function onSuccess(position) {
                    callback(null, position)
                }

                // onError Callback receives a PositionError object
                function onError(error) {
                    callback(error)
                }
                navigator.geolocation.getCurrentPosition(onSuccess, onError);
            },
            start: function(callback) {
                function onSuccess(position) {
                    callback(null, position)
                }
                // onError Callback receives a PositionError object
                function onError(error) {
                    callback(error)
                }
                // make sure there's only one process at a time:
                if (watchID) {
                    position.stop(watchID);
                }
                // see 'quirks at' https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-geolocation/
                // https://tol8.blogspot.cz/2014/03/how-to-get-reliable-geolocation-data-on.html
                watchID = navigator.geolocation.watchPosition(onSuccess, onError, {
                    maximumAge: 3000,
                    timeout: 15000,
                    enableHighAccuracy: true
                });
            },
            stop: function(watchID) {
                navigator.geolocation.clearWatch(watchID);
                console.log("watcher stopped");
            }
        }


    })(window);



}, false);


