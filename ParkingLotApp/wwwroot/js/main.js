/*
 * Name: Jackson Coffey
 * Description: Leaflet JavaScript Map
 * Created: 02/28/23
 * Last Updated: 02/28/23
 */

/* ---- Colors ---- 
- pink: #fab9b9
- yellow: #FFC72C
- blue: #041E42

*/

/* Initializing Map */
var map = L.map('map').setView([36.30258584306485, -82.369561252428231], 17);
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
    }).addTo(map);

/* Click each parking spot to center and zoom on it. */
function clickZoom(e) {
    map.setView(e.target.getLatLng(),20);
}

/* ------ Parking Lots - Students ------ */

/* ------ Parking Lot 21b */
var lot21b = L.icon({
    iconUrl: 'images/number_21.png',

    
    iconSize:     [32, 37], // size of the icon
    iconAnchor:   [17, 36], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -30] // point from which the popup should open relative to the iconAnchor
})
L.marker([36.30182, -82.37312], {icon: lot21b}).addTo(map).bindPopup("Available Spots: " + random300()).on('click', clickZoom);

var latlng = [[36.30217, -82.37363],[36.30135, -82.37304], [36.30158, -82.37252], [36.30245, -82.37314]];
var polygon = L.polygon(latlng, {color: '#FFC72C'}).addTo(map).on('click', clickZoom);


/* ------ Parking Garage ---- */
var garage = L.icon({
    iconUrl: 'images/letter_p.png',

    
    iconSize:     [32, 37], // size of the icon
    iconAnchor:   [17, 36], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -30] // point from which the popup should open relative to the iconAnchor
})
L.marker([36.303019, -82.37288], {icon: garage}).addTo(map).bindPopup("Available Spots: " + random1000()).on('click', clickZoom);

var latlng = [[36.303049, -82.373698],[36.302461, -82.373282], [36.303041, -82.372056], [36.303609, -82.372472]];
var polygon = L.polygon(latlng, {color: '#FFC72C'}).addTo(map).on('click', clickZoom);


/* ------ Parking Lots - Faculty ------ */

/* ------ Parking Lot 21a */
var lot21a = L.icon({
    iconUrl: 'images/b_number_21.png',

    
    iconSize:     [32, 37], // size of the icon
    iconAnchor:   [17, 36], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -30] // point from which the popup should open relative to the iconAnchor
})
L.marker([36.30216, -82.37246], {icon: lot21a}).addTo(map).bindPopup("Available Spots: " + random300()).on('click', clickZoom);

var latlng = [[36.30281, -82.37244],[36.30191, -82.37186], [36.30158, -82.37250], [36.30245, -82.37311]];
var polygon = L.polygon(latlng, {color: '#041E42'}).addTo(map).on('click', clickZoom);

/* ------ Parking Lot 27 */
var lot27 = L.icon({
    iconUrl: 'images/number_27.png',

    
    iconSize:     [32, 37], // size of the icon
    iconAnchor:   [17, 36], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -30] // point from which the popup should open relative to the iconAnchor
})
L.marker([36.304755, -82.368564], {icon: lot27}).addTo(map).bindPopup("Available Spots: " + random100()).on('click', clickZoom);

var latlng = [[36.305047, -82.369052],[36.304297, -82.368556], [36.304467, -82.368156], [36.305207, -82.368661]];
var polygon = L.polygon(latlng, {color: '#041E42'}).addTo(map).on('click', clickZoom);


/* ------ Parking Lots - Unassigned ------ */

/* ------ Parking Lot 15 */
var lot15 = L.icon({
    iconUrl: 'images/number_15.png',

    
    iconSize:     [32, 37], // size of the icon
    iconAnchor:   [17, 36], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -30] // point from which the popup should open relative to the iconAnchor
})
L.marker([36.300421, -82.36802], {icon: lot15}).addTo(map).bindPopup("Available Spots: " + random1000()).on('click', clickZoom);

var latlng = [[36.29988, -82.369382],[36.299643, -82.369216], [36.299999, -82.368553], [36.300976, -82.366748], [36.301247, -82.366614], [36.300561, -82.367985], [36.299883, -82.369385]];
var polygon = L.polygon(latlng, {color: '#fab9b9'}).addTo(map).on('click', clickZoom);

/* ------ Parking Lot 16 */
var lot16 = L.icon({
    iconUrl: 'images/number_16.png',

    
    iconSize:     [32, 37], // size of the icon
    iconAnchor:   [17, 36], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -30] // point from which the popup should open relative to the iconAnchor
})
L.marker([36.299426, -82.370232], {icon: lot16}).addTo(map).bindPopup("Available Spots: " + random100()).on('click', clickZoom);

var latlng = [[36.299253, -82.370742],[36.299091, -82.370627], [36.299452, -82.370045], [36.299532, -82.369889], [36.299413, -82.369819], [36.299595, -82.369372], [36.299753, -82.369516], [36.299772, -82.369616], [36.29963, -82.369943], [36.299606, -82.36994], [36.299506, -82.370163], [36.299504, -82.370227], [36.299253, -82.370742]];
var polygon = L.polygon(latlng, {color: '#fab9b9'}).addTo(map).on('click', clickZoom);


/* ------ Parking Lot 22 */
var lot22 = L.icon({
    iconUrl: 'images/number_22.png',

    
    iconSize:     [32, 37], // size of the icon
    iconAnchor:   [17, 36], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -30] // point from which the popup should open relative to the iconAnchor
})
L.marker([36.300596, -82.376451], {icon: lot22}).addTo(map).bindPopup("Available Spots: " + random1000()).on('click', clickZoom);

var latlng = [[36.302485, -82.374572],[36.302126, -82.374157], [36.299887, -82.376961], [36.298624, -82.379386], [36.298862, -82.37958], [36.299279, -82.378759], [36.299437, -82.378837], [36.3002, -82.377413]];
var polygon = L.polygon(latlng, {color: '#fab9b9'}).addTo(map).on('click', clickZoom);


/* ----- Random Number Generators ------ */

/* ----- Extra Small lots ----- */
function random100() {
    var num = Math.floor((Math.random() * 101) + 1);
    return num;
  }

/* ----- Small lots ----- */
function random300() {
    var num = Math.floor((Math.random() * 301) + 1);
    return num;
  }

/* ----- Medium lots ----- */
function random600() {
    var num = Math.floor((Math.random() * 601) + 1);
    return num;
  }

  /* ----- Large lots ----- */
function random1000() {
    var num = Math.floor((Math.random() * 1001) + 1);
    return num;
  }