/*
 * Name: Jackson Coffey
 * Description: Leaflet JavaScript Map
 * Created: 02/28/23
 * Last Updated: 02/28/23
 */


/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

/* Initializing Map */
var map = L.map('map').setView([36.30258584306485, -82.369561252428231], 16);
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
    }).addTo(map);

/* Alerting the user their location is found */
map.on('locationfound', onLocationFound);

function onLocationError(e) {
    alert(e.message);
}

/* Location error handler */
map.on('locationerror', onLocationError);

/* Locating the user and setting the map accordingly 
map.locate({setView: true, maxZoom: 16});
 UNDO THIS!!!! */

/* Showing the user and setting the map accordingly */
function onLocationFound(e) {

    /* -- Variable for radius calculation --
    var radius = e.accuracy;
    */

    var user = L.icon({
        iconUrl: 'markers/male.png',
    
        
        iconSize:     [32, 37], // size of the icon
        iconAnchor:   [17, 36], // point of the icon which will correspond to marker's location
        popupAnchor:  [0, -30] // point from which the popup should open relative to the iconAnchor
    })

    L.marker((e.latlng), {icon: user}).addTo(map)
        .bindPopup("Your Location").openPopup();

    /* --- Radius around user location ---
    L.circle(e.latlng, radius).addTo(map);
    */
}

/* ------ Routes ------ */

/* -------------------------
----------------------------
-- Nicks -> Roger Stout --
----------------------------
----------------------------
*/
var polygon1 = L.polygon([
    [36.30242064155211, -82.36795760906797],
    [36.3021821190685, -82.36847740713418],
    
]).addTo(map);

var polygon = L.polygon([
    [36.3021821190685, -82.36847740713418],
    [36.30273982899117, -82.36870962343818]
]).addTo(map);

var polygon = L.polygon([
    [36.30273982899117, -82.36870962343818],
    [36.302812442489916, -82.36840168958354]
]).addTo(map);

var polygon = L.polygon([
    [36.302812442489916, -82.36840168958354],
    [36.30291025466817, -82.3682173865099]
]).addTo(map);

var polygon = L.polygon([
    [36.30291025466817, -82.3682173865099],
    [36.302954934264335, -82.36819341212635]
]).addTo(map);

var polygon = L.polygon([
    [36.302954934264335, -82.36819341212635],
    [36.30291386708225, -82.36758523097755]
]).addTo(map);

var polygon = L.polygon([
    [36.30291386708225, -82.36758523097755],
    [36.30312058519061, -82.36725585288885]
]).addTo(map);

var polygon = L.polygon([
    [36.30312058519061, -82.36725585288885],
    [36.303194580745355, -82.36689441145352]
]).addTo(map);

var polygon = L.polygon([
    [36.303194580745355, -82.36689441145352],
    [36.303454388894515, -82.36630350007242]
]).addTo(map);



/* -------------------------
----------------------------
-- Roger Stout -> Library --
----------------------------
----------------------------
*/
var polygon = L.polygon([
    [36.303271969080086, -82.36671265989668],
    [36.30277577704209, -82.36637150067385]
]).addTo(map);

var polygon = L.polygon([
    [36.30277577704209, -82.36637150067385],
    [36.302663523317634, -82.36627056599555]
]).addTo(map);



/* -------------------------
----------------------------
-- Library -> Culp --
----------------------------
----------------------------
*/
var polygon = L.polygon([
    [36.302663523317634, -82.36627056599555],
    [36.30260551501323, -82.36649867837525]
]).addTo(map);

var polygon = L.polygon([
    [36.30260551501323, -82.36649867837525],
    [36.30224298654592, -82.36665973263456]
]).addTo(map);

var polygon = L.polygon([
    [36.30224298654592, -82.36665973263456],
    [36.302184802807844, -82.36663196465881]
]).addTo(map);



/* -------------------------
----------------------------
-- Culp -> CPA --
----------------------------
----------------------------
*/
var polygon = L.polygon([
    [36.30142, -82.36791],
    [36.30119, -82.36835]
]).addTo(map);

var polygon = L.polygon([
    [36.30119, -82.36835],
    [36.30042, -82.37002]
]).addTo(map);

var polygon = L.polygon([
    [36.30042, -82.37002],
    [36.29931, -82.37245]
]).addTo(map);

var polygon = L.polygon([
    [36.29931, -82.372452],
    [36.29931, -82.37263]
]).addTo(map);

var polygon = L.polygon([
    [36.29931, -82.37263],
    [36.29950, -82.37262]
]).addTo(map);

var polygon = L.polygon([
    [36.29950, -82.37262],
    [36.30007, -82.37301]
]).addTo(map);

var polygon = L.polygon([
    [36.30007, -82.37301],
    [36.30000, -82.37316]
]).addTo(map);

var polygon = L.polygon([
    [36.30000, -82.37316],
    [36.30016, -82.37329]
]).addTo(map);

var polygon = L.polygon([
    [36.30016, -82.37329],
    [36.30042, -82.37339]
]).addTo(map);

var polygon = L.polygon([
    [36.30042, -82.37339],
    [36.30018, -82.37397]
]).addTo(map);



/* -------------------------
----------------------------
CPA ->  ETSU/Ballad Health Athletic Center
----------------------------
----------------------------
*/
var polygon = L.polygon([
    [36.30042, -82.37339],
    [36.30068, -82.37339]
]).addTo(map);

var polygon = L.polygon([
    [36.30068, -82.37339],
    [36.30090, -82.37332]
]).addTo(map);

var polygon = L.polygon([
    [36.30090, -82.37332],
    [36.30108, -82.37324]
]).addTo(map);

var polygon = L.polygon([
    [36.30108, -82.37324],
    [36.30140, -82.37338]
]).addTo(map);

var polygon = L.polygon([
    [36.30140, -82.37338],
    [36.30213, -82.37389]
]).addTo(map);

var polygon = L.polygon([
    [36.30213, -82.37389],
    [36.30222, -82.37371]
]).addTo(map);

var polygon = L.polygon([
    [36.30222, -82.37371],
    [36.30258, -82.37292]
]).addTo(map);

var polygon = L.polygon([
    [36.30258, -82.37292],
    [36.30299, -82.37212]
]).addTo(map);

var polygon = L.polygon([
    [36.30299, -82.37212],
    [36.30289, -82.37203]
]).addTo(map);

var polygon = L.polygon([
    [36.30289, -82.37203],
    [36.30302, -82.37177]
]).addTo(map);

var polygon = L.polygon([
    [36.30302, -82.37177],
    [36.30307, -82.37147]
]).addTo(map);




/* -------------------------
----------------------------
ETSU/Ballad Health Athletic Center - > ETSU Martin Center for the Arts
----------------------------
----------------------------
*/
var polygon = L.polygon([
    [36.30307, -82.37147],
    [36.30284, -82.37126]
]).addTo(map);

var polygon = L.polygon([
    [36.30284, -82.37126],
    [36.30272, -82.37114]
]).addTo(map);

var polygon = L.polygon([
    [36.30272, -82.37114],
    [36.30285, -82.37087]
]).addTo(map);

var polygon = L.polygon([
    [36.30285, -82.37087],
    [36.30331, -82.37006]
]).addTo(map);

var polygon = L.polygon([
    [36.30331, -82.37006],
    [36.30350, -82.36970]
]).addTo(map);

var polygon = L.polygon([
    [36.30350, -82.36970],
    [36.30386, -82.36995]
]).addTo(map);

var polygon = L.polygon([
    [36.30386, -82.36995],
    [36.30405, -82.37003]
]).addTo(map);

var polygon = L.polygon([
    [36.30405, -82.37003],
    [36.30413, -82.36993]
]).addTo(map);

var polygon = L.polygon([
    [36.30413, -82.36993],
    [36.30434, -82.37006]
]).addTo(map);

var polygon = L.polygon([
    [36.30434, -82.37006],
    [36.30444, -82.37038]
]).addTo(map);

var polygon = L.polygon([
    [36.30444, -82.37038],
    [36.30460, -82.37055]
]).addTo(map);

var polygon = L.polygon([
    [36.30460, -82.37055],
    [36.30505, -82.37091]
]).addTo(map);

var polygon = L.polygon([
    [36.30505, -82.37091],
    [36.30492, -82.37091]
]).addTo(map);

var polygon = L.polygon([
    [36.30492, -82.37091],
    [36.30461, -82.37147]
]).addTo(map);

var polygon = L.polygon([
    [36.30461, -82.37147],
    [36.30479, -82.37158]
]).addTo(map);



/* -------------------------
----------------------------
ETSU Martin Center for the Arts -> Millennium Center
----------------------------
----------------------------
*/
var polygon = L.polygon([
    [36.30505, -82.37091],
    [36.30526, -82.37064]
]).addTo(map);

var polygon = L.polygon([
    [36.30526, -82.37064],
    [36.30569, -82.37105]
]).addTo(map);

var polygon = L.polygon([
    [36.30569, -82.37105],
    [36.30570, -82.37121]
]).addTo(map);

/* ------ Map Markers ------- */

/* 1. Roy S. Nicks Hall */
var nicksIcon = L.icon({
    iconUrl: 'markers/number_1.png',

    
    iconSize:     [32, 37], // size of the icon
    iconAnchor:   [17, 36], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -30] // point from which the popup should open relative to the iconAnchor
})
L.marker([36.30242064155211, -82.36795760906797], {icon: nicksIcon}).addTo(map).bindPopup("<b>Roy S. Nicks Hall</b>");

/* 2. Roger-Stout Hall */
var stoutIcon = L.icon({
    iconUrl: 'markers/number_2.png',

    
    iconSize:     [32, 37], // size of the icon
    iconAnchor:   [17, 36], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -30] // point from which the popup should open relative to the iconAnchor
})
L.marker([36.30331906174627, -82.36617670369293], {icon: stoutIcon}).addTo(map).bindPopup("<b>Roger-Stout Hall</b>");

/* 3. Charles C. Sherrod Library */
var sherrodIcon = L.icon({
    iconUrl: 'markers/number_3.png',

    
    iconSize:     [32, 37], // size of the icon
    iconAnchor:   [17, 36], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -30] // point from which the popup should open relative to the iconAnchor
})
L.marker([36.30263991044142, -82.3657496092193], {icon: sherrodIcon}).addTo(map).bindPopup("<b>Charles C. Sherrod Library</b>");

/* 4. The D.P Culp Student Center */
var culpIcon = L.icon({
    iconUrl: 'markers/number_4.png',

    
    iconSize:     [32, 37], // size of the icon
    iconAnchor:   [17, 36], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -30] // point from which the popup should open relative to the iconAnchor
})
L.marker([36.301435931913495, -82.36689001887989], {icon: culpIcon}).addTo(map).bindPopup("<b>The D.P. Culp Student Center</b>");

/* 5. ETSU Basler Center for Physical Activity */
var cpaIcon = L.icon({
    iconUrl: 'markers/number_5.png',

    
    iconSize:     [32, 37], // size of the icon
    iconAnchor:   [17, 36], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -30] // point from which the popup should open relative to the iconAnchor
})
L.marker([36.299940355472835, -82.37421758487031], {icon: cpaIcon}).addTo(map).bindPopup("<b>ETSU Basler Center for Physical Activity</b>");

/* 6. ETSU/Ballad Health Athletic Center */
var hacIcon = L.icon({
    iconUrl: 'markers/number_6.png',

    
    iconSize:     [32, 37], // size of the icon
    iconAnchor:   [17, 36], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -30] // point from which the popup should open relative to the iconAnchor
})
L.marker([36.30367130821872, -82.37098820515777], {icon: hacIcon}).addTo(map).bindPopup("<b>ETSU/Ballad Health Athletic Center</b>");

/* 7. ETSU Martin Center for the Arts */
var martinIcon = L.icon({
    iconUrl: 'markers/number_7.png',

    
    iconSize:     [32, 37], // size of the icon
    iconAnchor:   [17, 36], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -30] // point from which the popup should open relative to the iconAnchor
})
L.marker([36.304808824229816, -82.37188733396003], {icon: martinIcon}).addTo(map).bindPopup("<b>ETSU Martin Center for the Arts</b>");

/* 8. ETSU Martin Center for the Arts */
var mcIcon = L.icon({
    iconUrl: 'markers/number_8.png',

    
    iconSize:     [32, 37], // size of the icon
    iconAnchor:   [17, 36], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -30] // point from which the popup should open relative to the iconAnchor
})
L.marker([36.30564150823485, -82.37119166146188], {icon: mcIcon}).addTo(map).bindPopup("<b>ETSU Millennium Center</b>");