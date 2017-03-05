var vectorSource = new ol.source.Vector({
    //create empty vector
});

var sourceData =
    {"trees":[
        {
            "id": "2",
            "lat": 50.103363,
            "long": 14.450552
        },
        {
            "id": "1",
            "lat": 0.0,
            "long": 0.0
        }
    ]}

var trees = sourceData["trees"];


for (i=0; i < trees.length; i++){
    var lat = trees[i]["lat"]
    var long = trees[i]["long"]
    console.log(lat);

    var POI = new ol.Feature({
        // geometry: new ol.geom.Point(ol.proj.transform(lat, long, 'EPSG:4326', 'EPSG:3857'))
    });
    vectorSource.addFeature(POI);
}

console.log(vectorSource);


var map = new ol.Map({
    target: 'poimap',
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