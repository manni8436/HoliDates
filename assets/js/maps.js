let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 50.72999074259347, lng: 12.112820546102336 },
    zoom: 5,
  });
}





// let http = new XMLHttpRequest();

// http.open('get', 'places.json', true);

// http.send();

// function initMap() {}

// http.onload = function () {
//   if (this.readyState == 4 && this.status == 200) {
//     let places = JSON.parse(this.responseText);

//     let output = "";

//     for (let place of places) {
//       output += `
//         <div class="places">
//         <p>${place.place}</p>
//         <img src="${place.image}" alt="${place.image}">
//         <p class="description">${place.description}</p>    
//         <div id='map_${place.place}' class="map"></div>
//         </div>  
//       `;      
//     }
//     document.querySelector(".places").innerHTML = output;

//   for (let place of places) {
//     mapid="map_" + place.place
//   var map = new google.maps.Map(document.getElementById(mapid), {
//     center: {
//         lat: parseFloat(place.lat),
//         lng: parseFloat(place.lng),
//     },
//     zoom: 15,
//     mapTypeId: "satellite",
//   });
//   }
// }

