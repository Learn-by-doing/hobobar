document.addEventListener('deviceready', function() {

    // Device ready.




    (function(window) {

        var watchID = null;

        var position = {
            static: function (callback) {
                function onSuccess (position) {
                    callback(position)
                }

                // onError Callback receives a PositionError object
                function onError (error) {
                    callback(false, error)
                }
                navigator.geolocation.getCurrentPosition(onSuccess, onError);
            },
            start: function (callback) {
                function onSuccess(position) {
                    callback(position)
                }
                // onError Callback receives a PositionError object
                function onError(error) {
                    callback(false, error)
                }
                // make sure there's only one process at a time:
                if (watchID) {
                    position.stop(watchID);
                }
                // see 'quirks at' https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-geolocation/
                // https://tol8.blogspot.cz/2014/03/how-to-get-reliable-geolocation-data-on.html
                watchID = navigator.geolocation.watchPosition(onSuccess, onError, { maximumAge: 3000, timeout: 15000, enableHighAccuracy: true });
            },
            stop: function (watchID) {
                navigator.geolocation.clearWatch(watchID);
                console.log("watcher stopped");
            }
        }

// Scaffolding to get static position
        var positionCurrent = function (data, error) {
            if (!data){ // should we have an error, do:
                var errorLog =
                    'code: '    + error.code    + '<br>' +
                    'message: ' + error.message + '<br>';
                document.getElementById("positionCurrent").innerHTML = errorLog;
            } else {
                var positionData =
                    'Latitude: '          + data.coords.latitude          + '<br>' +
                    'Longitude: '         + data.coords.longitude         + '<br>' +
                    'Altitude: '          + data.coords.altitude          + '<br>' +
                    'Accuracy: '          + data.coords.accuracy          + '<br>' +
                    'Altitude Accuracy: ' + data.coords.altitudeAccuracy  + '<br>' +
                    'Heading: '           + data.coords.heading           + '<br>' +
                    'Speed: '             + data.coords.speed             + '<br>' +
                    'Timestamp: '         + data.timestamp                + '<br>';

                document.getElementById("positionCurrent").innerHTML = positionData;
            }
        }

document.getElementById("positionCurrentButton").addEventListener("click", function () {
    position.static(positionCurrent);
});



// Scaffolding to get rolling position
// https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-geolocation/
        var positionStarted = function(data) {
            console.log(data.coords);
            var element = document.getElementById('positionRolling');
            element.innerHTML =
                'Latitude: '  + data.coords.latitude      + '<br />' +
                'Longitude: ' + data.coords.longitude     + '<br />' +
                '<hr />'      + element.innerHTML;
        }

        var positionStop = function () {
            if (position.stop(watchID)) {
                document.getElementById("positionRolling").innerHTML = "stopped";
            } else {
                document.getElementById("positionRolling").innerHTML = "stopping failed";
            }
        }
document.getElementById("positionRollingStartButton").addEventListener("click",
    function () {
        position.start(positionStarted);
    }

);
document.getElementById("positionRollingStopButton").addEventListener("click",
    function () {
        position.stop(positionStop);
    }
);


    })(window);





}, false);
