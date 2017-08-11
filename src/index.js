const mapboxgl = require("mapbox-gl");
const marker = require("./marker.js");

mapboxgl.accessToken = "pk.eyJ1Ijoiampkb29sZXkiLCJhIjoiY2o2ODQ1dXNrMGQzejJ3bG1lb3ozNmp1OCJ9.ltqfS9u3cbP9eLvH8_O21Q";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack coordinates
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available
});

/* FSA MARKER ONLY 
const markerDomEl = document.createElement("div");
markerDomEl.style.width = "32px";
markerDomEl.style.height = "39px";
markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

new mapboxgl.Marker(markerDomEl).setLngLat([-74.009151, 40.705086]).addTo(map);
*/

