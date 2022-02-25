// const placeElement = document.getElementById('place');
// const placeDescriptionElement = document.getElementById('place-description');

// function showPlace(pPlace) {
//   placeElement.innerText = pPlace.place;
//   placeDescriptionElement.innerText = pPlace.description;
// };

let http = new XMLHttpRequest();

http.open('get', 'places.json', true);

http.send();

function initMap() {}

http.onload = function () {
  if (this.readyState == 4 && this.status == 200) {
    let places = JSON.parse(this.responseText);

    let output = "";

    for (let place of places) {
      output += `
        <div class="places">
        <p>${place.place}</p>
        <img src="${place.image}" alt="${place.image}">
        <p class="description">${place.description}</p>    
        <div id='map_${place.place}' class="map"></div>
        </div>  
      `;
      
    //   var map = new google.maps.Map(document.getElementById('map'), {
    //     center: {
    //         lat: parseFloat(place.lat),
    //         lng: parseFloat(place.lng),
    //     },
    //     zoom: 15,
    //     mapTypeId: "satellite",
    // });
    }
    document.querySelector(".places").innerHTML = output;


  for (let place of places) {
    mapid="map_" + place.place
  var map = new google.maps.Map(document.getElementById(mapid), {
    center: {
        lat: parseFloat(place.lat),
        lng: parseFloat(place.lng),
    },
    zoom: 15,
    mapTypeId: "satellite",
  });
  }


}
}

// let map;

// // fetch('./places.json')
// //   .then((response) => {
// //     return response.json()
// //   })
// //   .then((data) => {
// //     // Work with JSON data here
// //     console.log(data)
// //   })


// function initMap() {
//   map = new google.maps.Map(document.getElementById("map"), {
//     center: {
//       lat: parseFloat(place.lat),
//       lng: parseFloat(place.lng),
//     },
//     zoom: 5,

//     mapTypeId: "satellite",

//   });
// };





// const placesBank = [{
//   place: "Paris",
//   description: "test",
//   image
//   lat: '40.822633855656974',
//   lng: '14.425354516052282',
//   mark: "Mount Vesuvius"
// },
// {
//   place: "Rio de Janeiro",
//   lat: '40.822633855656974',
//   lng: '14.425354516052282',
//   mark: "Rio de Janeiro"
// }];