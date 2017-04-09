document.addEventListener('deviceready', function() {    // The device is ready

    // var newTreeButton = document.getElementById('new-tree');

    // newTreeButton.addEventListener('click', function() {
    //     // Run camera.
    //     navigator.camera.getPicture(function(fileURL) {
    //         // success
    //         uploadPhoto(fileURL);
    //     }, function(error) {
    //         // error
    //         alert(error);
    //     }, {
    //         destinationType: navigator.camera.DestinationType.FILE_URI
    //     });
    // });

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

    function getLocation() {
      var promise = $.Deferred();
      navigator.geolocation.getCurrentPosition(function(result) {
        promise.resolve({
          lat: result.coords.latitude,
          long: result.coords.longitude
        });
      }, promise.reject);
      return promise;
    }

    function getTrees() {
      var promise = $.Deferred();
      var url = makeApiUrl('v1/trees');
      $.get(url).then(function(data) {
        promise.resolve(data);
      }).fail(function() {
        // Resolve with an empty array of trees in case of failure.
        promise.resolve([]);
      });
      return promise;
    }

    function makeApiUrl(uri) {
      var url = location.protocol + '//' + location.hostname;
      if (location.port) {
        url += ':' + location.port;
      }
      return url + '/api/' + uri;
    }

    // Get location and tree data in parallel.
    // Excute the callback when both are done.
    $.when(getLocation(), getTrees()).then(function(location, trees) {

      var markers = [location];
      _.each(trees, function(tree) {
        markers.push({
          lat: tree.latitude,
          long: tree.longitude
        });
      });

      Vue.component('v-map', Vue2Leaflet.Map);
      Vue.component('v-tilelayer', Vue2Leaflet.TileLayer);
      Vue.component('v-marker', Vue2Leaflet.Marker);

      const customToolbar = {
      template: '#custom-toolbar',
      props: ['backLabel']
      };

      const customMap = {
        template: '#custom-map',
        data() {
          return {
            zoomLevel: 13,
            lat: location.lat,
            long: location.long,
            markers: markers
          };
        }
      };

      const homepage = {
        template: '#homepage',
        methods: {
          add() {
            this.pageStack.push(confirmPhoto);
          },
          credits(){
            this.pageStack.push(credits);
          }
        },
        props: ['pageStack'],
        components: { customToolbar, customMap }
      };

      const confirmPhoto = {
        template: '#confirmPhoto',
        methods: {
          home(){
            this.pageStack.pop(homepage);
          },
          next(){
            this.pageStack.push(fillDetails);
          }
        },
        props: ['pageStack'],
        components: { customToolbar }
      };

      const fillDetails = {
        template: '#fillDetails',
        methods: {
          home(){
            this.pageStack.pop(homepage);
          },
          save(){
            this.pageStack.push(treeSaved);
          }          
        },
        props: ['pageStack'],
        components: { customToolbar }
      };


      const treeSaved = {
        template: '#treeSaved',
        props: ['pageStack'],
        components: { customToolbar }
      };

      const credits = {
        template: '#credits',
        props: ['pageStack'],
        components: { customToolbar }
      };


      new Vue({
        el: '#app',
        template: '#main',
        data() {
          return {
            pageStack: [homepage]
          };
        }
      });

    }).fail(console.log);

}, false);


