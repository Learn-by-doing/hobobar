var rome = new ol.Feature({
    // geometry: new ol.geom.Point(ol.proj.fromLonLat([50.103326, 14.450543]))
    // geometry: new ol.geom.Point(50.103326, 14.450543)
    geometry: new ol.geom.Point(ol.proj.transform([0.0, 0.0], 'EPSG:4326',
        'EPSG:3857'))
});

var rome2 = new ol.Feature({
    // geometry: new ol.geom.Point(ol.proj.fromLonLat([50.103326, 14.450543]))
    // geometry: new ol.geom.Point(50.103326, 14.450543)
    geometry: new ol.geom.Point(ol.proj.transform([0.0, 0.0], 'EPSG:4326',
        'EPSG:3857'))
});


/*
var london = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-0.12755, 51.507222]))
});

var madrid = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([-3.683333, 40.4]))
});
*/
rome.setStyle(new ol.style.Style({
    image: new ol.style.Icon(/** @type {olx.style.IconOptions} */ ({
        color: '#8959A8',
        src: 'https://openlayers.org/en/v4.0.1/examples/data/dot.png',
        crossOrigin: 'anonymous'
    }))
}));
/*
london.setStyle(new ol.style.Style({
    image: new ol.style.Icon(/** @type {olx.style.IconOptions} *//* ({
        color: '#4271AE',
        src: 'https://openlayers.org/en/v4.0.1/examples/data/dot.png',
        crossOrigin: 'anonymous'
    }))
}));
*//*
madrid.setStyle(new ol.style.Style({
    image: new ol.style.Icon(/** @type {olx.style.IconOptions} *//* ({
        color: [113, 140, 0],
        src: 'https://openlayers.org/en/v4.0.1/examples/data/dot.png',
        crossOrigin: 'anonymous'
    }))
}));
*/

var vectorSource = new ol.source.Vector({
    // features: [rome, london, madrid]
    features: [rome, rome2]
});

/*
var vectorLayer = new ol.layer.Vector({
    source: vectorSource
});
*/
/*
var rasterLayer = new ol.layer.Tile({
    source: new ol.source.TileJSON({
        url: 'https://api.tiles.mapbox.com/v3/mapbox.geography-class.json?secure',
        crossOrigin: ''
    })
});
*/
var map = new ol.Map({
    // layers: [rasterLayer, vectorLayer],
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM()
        })
    ],
    target: document.getElementById('poimap'),
    // projection: new ol.proj.Projection("EPSG:900913"),
    // displayProjection: new ol.proj.Projection("EPSG:4326"),
    view: new ol.View({
        // projection: 'EPSG:4326',
        // center: ol.proj.fromLonLat([2.896372, 44.60240]),
        center: [0,0],
        zoom: 3
    })
});
/*
var view = new ol.View({
    center: [0, 0],
    zoom: 2
});

var map = new ol.Map({
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM()
        })
    ],
    target: 'map',
    controls: ol.control.defaults({
        attributionOptions: /** @type {olx.control.AttributionOptions} *//* ({
            collapsible: false
        })
    }),
    view: view
});
*/