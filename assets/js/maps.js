const placeElement = document.getElementById('place');
const placeDescriptionElement = document.getElementById('place-description');

function showPlace(pPlace) {
  placeElement.innerText = pPlace.place;
  placeDescriptionElement.innerText = pPlace.description;
};

let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: {
      lat: parseFloat(placesBank.lat),
      lng: parseFloat(placesBank.lat)
    },
    zoom: 15,
    mapTypeId: "satellite",

  });
};


const placesBank = [{
  place: "Paris",
  description: "test",
  lat: '40.822633855656974',
  lng: '14.425354516052282',
  mark: "Mount Vesuvius"
},
{
  place: "Rio de Janeiro",
  lat: '40.822633855656974',
  lng: '14.425354516052282',
  mark: "Rio de Janeiro"
}];