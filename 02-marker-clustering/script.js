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

let singaporeMarker = L.marker([1.29, 103.85]);
singaporeMarker.addTo(map);
singaporeMarker.bindPopup("<p>Singapore, Hello</p>");

// singaporeMarker.addEventListener('click' , function(){
//     alert("Singapore lol");
// })

let circle = L.circle([1.35166526, 103.773663572], {
    color: 'blue',
    fillColor:"orange",
    fillOpacity:0.5,
    radius: 500
})

circle.addTo(map);

//add 3 new markers, markers can be can consider as layers
//Singapore Zoo
let singaporeZoo = L.marker([1.4043, 103.7930]);
singaporeZoo.addTo(map);
singaporeZoo.bindPopup("<p>singapore zoo</p>");

//Singapore Discovery Centre
let singDisCentre = L.marker([1.3327, 103.6789]);
singDisCentre.addTo(map);
singDisCentre.bindPopup("<p>singapore discovery centre</p>");


//Jurong Bird Park
let jBirdPark = L.marker([1.3187, 103.7064]);
jBirdPark.addTo(map);
jBirdPark.bindPopup("<p>jurong bird park</p>");
