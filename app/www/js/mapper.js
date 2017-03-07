var startAt = {
    lat : 50.083881,
    lon: 14.433566
}

// initialize the map
var map = L.map('map').setView([startAt.lat,startAt.lon], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
    maxZoom: 14
}).addTo(map);

map.locate({setView: true, maxZoom: 16});

function onLocationFound(e) {
    L.marker(e.latlng).addTo(map)
        .bindPopup("You are here").openPopup();
}
map.on('locationfound', onLocationFound);

function onLocationError(e) {
    alert(e.message);
}
map.on('locationerror', onLocationError);

// a source of items that shall be displayed on the map as markers
var sourceArray = [
{ "id" : "1",
"lat" : "50.094971",
"lon" : "14.415763"},
{ "id" : "2",
"lat" : "50.032971",
"lon" : "14.426763"},
{ "id" : "3",
"lat" : "50.011971",
"lon" : "14.655763"}
]

// we'll store the markers in here
var poiArray = []

sourceArray.forEach(function (value) {
    poiArray.push(
        // add marker to map
        L.marker([value.lat, value.lon]).addTo(map)
            // show marker popup
            .bindPopup(value.id).openPopup()
    );

});