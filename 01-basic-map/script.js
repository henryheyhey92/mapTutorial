let singapore = [1.29, 103.85];

let map =L.map('map').setView(singapore, 13);

//setup the tile layers
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoieW91cmNhdCIsImEiOiJja3pqZGNkc3oxd2x3MzJwZGlqZG44NWR1In0.SSCdyBoQ4RjnixrhhQ2sJA' //demo access token
}).addTo(map);
