let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 48.858525392116746, lng: 2.294530492488468},
    zoom: 17,
    mapTypeId: "satellite",
    rotateControl: true

  });
}
