const mapbox = require("mapbox-gl");

const iconURLs = {
  hotel: "http://i.imgur.com/WbMOfMl.png",
  restaurant: "http://i.imgur.com/D9574Cu.png",
  activity: "http://i.imgur.com/cqR6pUI.png"
};

const buildMarker = function(type, coords) {
    const markerDomEl = document.createElement("div");
    markerDomEl.style.width = "32px";
    markerDomEl.style.height = "39px";
    markerDomEl.style.backgroundImage = "url("+iconUrls[type]+")";
    return new mapboxgl.Marker(markerDomEl).setLngLat(coords);

};

module.exports = buildMarker;
