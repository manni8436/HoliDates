// load google maps
let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: {
      lat: 48.24714034374518,
      lng: 11.607449487355048
    },
    zoom: 4,
    tilt: 45,
    mapTypeId: google.maps.MapTypeId.HYBRID
  });
  map.setTilt(45);

  // open places.json file
  let http = new XMLHttpRequest();

  http.open('get', 'places.json', true);

  http.send();

  http.onload = function () {
    if (this.readyState == 4 && this.status == 200) {
      let places = JSON.parse(this.responseText);
      // loop all places in json file
      for (let place of places) {
        const coord = {
          lat: place.lat,
          lng: place.lng
        };
       
        // create markers for each place on map
        const marker = new google.maps.Marker({
          position: coord,
          map: map,
        });

        // add click event on each place
        marker.addListener("click", () => {
          var pos = map.getZoom();
          // zoom in in clicked place
          map.setZoom(17);
          map.setCenter(marker.getPosition());
          // zoom out after 3 seconds
          window.setTimeout(function () {
            map.setZoom(pos);
          }, 3000);
          // create data output for modal
          let output = `
          <div class="modal-header">
              <h2 class="modal-title fw-bold">${place.place}</h5>                    
          </div>
          <div class="modal-body">
          <img class="w-100" src="${place.image}" alt="${place.image}">
              <p class="p-2 text-center">${place.description}.</p>
          </div>                       
          `;
          // open modal wih place data afte 3 seconds
          document.querySelector(".modal-content").innerHTML = output;
          setTimeout(function() {$('#detailsModal').modal('show')}, 3000);
        });
      }
    };
  }
}

// import the places.json
fetch('./places.json')
.then(response => {
    return response.json();
})
// pass it to the function that dynamically fills the places in html
.then (jsondata => showPlaces(jsondata));

// shows all of the places from JSON file
const showPlaces = (locations) => {
  // takes each location in places.json
  locations.forEach(location => {
    // imports the container from html for all of the locations
    let getaways = document.getElementById('card-container')
    // creates a card
    let cardContainer = document.createElement('div')
    // appends the card to the containing container
    getaways.appendChild(cardContainer)
    // deconstructs the places objects
    let { image, place } = location
    
    // adds the card with content for each object in array of places.json
    cardContainer.innerHTML = `
    <img src="${image}" class="location-images" alt="Image of ${place}">
    `
  });
}