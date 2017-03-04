document.addEventListener('deviceready', function() {    // The device is ready

    (function(window) {

        var watchID = null;

        var positionForQuery = null;

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

        // Scaffolding to get static position
        var positionCurrent = function(error, data) {
            if (error) { // should we have an error, do:
                var errorLog =
                    'code: ' + error.code + '<br>' +
                    'message: ' + error.message + '<br>';
                document.getElementById("positionCurrent").innerHTML = errorLog;
            } else {
                var positionData =
                    'Latitude: ' + data.coords.latitude + '<br>' +
                    'Longitude: ' + data.coords.longitude + '<br>' +
                    'Altitude: ' + data.coords.altitude + '<br>' +
                    'Accuracy: ' + data.coords.accuracy + '<br>' +
                    'Altitude Accuracy: ' + data.coords.altitudeAccuracy + '<br>' +
                    'Heading: ' + data.coords.heading + '<br>' +
                    'Speed: ' + data.coords.speed + '<br>' +
                    'Timestamp: ' + data.timestamp + '<br>';

                positionForQuery = data.coords;

                document.getElementById("positionCurrent").innerHTML = positionData;
            }
        }

        document.getElementById("positionCurrentButton").addEventListener("click", function() {
            position.static(positionCurrent);
        });



        // Scaffolding to get rolling position
        // https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-geolocation/
        var positionStarted = function(error, data) {
            if (error) {
                var errorLog =
                    'code: ' + error.code + '<br>' +
                    'message: ' + error.message + '<br>';
            } else {
                console.log(data.coords);
                var element = document.getElementById('positionRolling');
                element.innerHTML =
                    'Latitude: ' + data.coords.latitude + '<br />' +
                    'Longitude: ' + data.coords.longitude + '<br />' +
                    '<hr />' + element.innerHTML;
            }
        }
        var positionStop = function() {
            if (position.stop(watchID)) {
                document.getElementById("positionRolling").innerHTML = "stopped";
            } else {
                document.getElementById("positionRolling").innerHTML = "stopping failed";
            }
        }
        document.getElementById("positionRollingStartButton").addEventListener("click",
            function() {
                position.start(positionStarted);
            }

        );
        document.getElementById("positionRollingStopButton").addEventListener("click",
            function() {
                position.stop(positionStop);
            }
        );

        function query_trees_from_server (position, cb){

            var url_v = "http://localhost:3000/api/getlist";
            //var pos_data = [position.latitude-0.000001,position.longitude-0.000001,position.latitude+0.000001,position.longitude+0.000001];
            var pos_data = {};
            pos_data.upperleft_la = position.latitude-0.00001;
            pos_data.upperleft_lo = position.longitude-0.00001;
            pos_data.lowerright_la = position.latitude+0.00001;
            pos_data.lowerright_lo = position.longitude+0.00001;
                        

            jQuery.ajax({ 
                type: 'POST',
                data: pos_data,
                url : url_v,
                dataType : 'json',
                error : function() {
                    alert("Errr is occured");
                }
            })
            .then(function(data, status, xhr){
                    cb (null, data);
                }
            )
            .fail(function(xhr, err) { 
                cb(err);
            });

        }


        document.getElementById("treesButton").addEventListener("click",
            function() {
                if (!positionForQuery)
                {
                    alert('Query postion first!');
                }
                else
                {
                    query_trees_from_server(positionForQuery, function (message, data){
                        if (message){
                            alert (message);
                        }
                        else {
                            alert("Got id:" + data[0].id + " description="+ data[0].description);
                        }
                    })
                }
        })


    })(window);

}, false);