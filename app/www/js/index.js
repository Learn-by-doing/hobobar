document.addEventListener('deviceready', function() {    // The device is ready

    var newTreeButton = document.getElementById('new-tree');

    newTreeButton.addEventListener('click', function() {
        // Run camera.
        navigator.camera.getPicture(function(fileURL) {
            // success
            uploadPhoto(fileURL);
        }, function(error) {
            // error
            alert(error);
        }, {
            destinationType: navigator.camera.DestinationType.FILE_URI
        });
    });

    function uploadPhoto(imageURI) {

        var options = new FileUploadOptions();
        options.fileKey="image";
        options.fileName=imageURI.substr(imageURI.lastIndexOf('/')+1);
        options.mimeType="image/jpeg";

        var params = {
            latitude: '50.083881',
            longitude: '14.433566',
            type: 'fruit?',
            description: 'it\'s a tree!',
        };

        options.params = params;
        options.chunkedMode = false;

        var ft = new FileTransfer();
        ft.upload(imageURI, 'http://localhost:3000/api/v1/tree', function() {
            // success?
            alert('success!');
        }, function(error) {
            alert(error);
        }, options);
    }

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


