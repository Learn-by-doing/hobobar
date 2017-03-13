var APIroot = 'http://localhost:3000/api/v1';
var APItrees = APIroot + '/trees';
var poiArray = [] // we'll store the markers in here
var startAt = {
    latitude: 50.083881,
    longitude: 14.433566
}

function ajax(target,callback) {
  var xmlhttp = new XMLHttpRequest();

  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == XMLHttpRequest.DONE) {
      if (xmlhttp.status == 200) {
        callback(null, xmlhttp.responseText);
      } else if (xmlhttp.status == 404) {
        alert('There was an 404 error:\n' + xmlhttp.statusText);
      } else {
        alert('something else other than 200 was returned:\n' + xmlhttp.statusText);
      }
    }
  };

  xmlhttp.open("GET", target, true);
  xmlhttp.send();
}


// initialize the map
var map = L.map('map').setView([startAt.latitude, startAt.longitude], 12);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
    maxZoom: 20
}).addTo(map);

map.locate({
    setView: true,
    maxZoom: 12
});

function onLocationFound(e) {
    L.marker(e.latlng).addTo(map)
        .bindPopup("You are here").openPopup();
}
map.on('locationfound', onLocationFound);

function onLocationError(e) {
    alert(e.message);
}
map.on('locationerror', onLocationError);


function createMarkers(error, sourceArray) {
    if (!error){
    sourceArray = JSON.parse(sourceArray);
    sourceArray.forEach(function(value) {
        poiArray.push(
            // add marker to map
            L.marker([value.latitude, value.longitude]).addTo(map)
            // show marker popup
            .bindPopup(value.description).openPopup()
        );
    }); 
    }
};


ajax(APItrees,createMarkers);