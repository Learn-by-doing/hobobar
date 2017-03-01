document.addEventListener('deviceready', function() { // The device is ready

	(function(window) {

		var map = new ol.Map({
			target: 'map',
			layers: [
				new ol.layer.Tile({
					source: new ol.source.OSM()
				})
			],
			view: new ol.View({
				center: ol.proj.fromLonLat([37.41, 8.82]),
				zoom: 4
			})
		});

	})(window);

}, false);