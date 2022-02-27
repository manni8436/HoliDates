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

  let http = new XMLHttpRequest();

  http.open('get', 'places.json', true);

  http.send();

  http.onload = function () {
    if (this.readyState == 4 && this.status == 200) {
      let places = JSON.parse(this.responseText);

      for (let place of places) {
        const coord = {
          lat: place.lat,
          lng: place.lng
        };
       

        const marker = new google.maps.Marker({
          position: coord,
          map: map,
        });

        marker.addListener("click", () => {
          var pos = map.getZoom();
          map.setZoom(17);
          map.setCenter(marker.getPosition());
          window.setTimeout(function () {
            map.setZoom(pos);
          }, 3000);
          let output = `
          <div class="modal-header">
              <h2 class="modal-title fw-bold">${place.place}</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>                  
          </div>
          <div class="modal-body">
          <img class="w-100" src="${place.image}" alt="${place.image}">
              <p class="p-2 text-center">${place.description}.</p>
              <hr>
              <p class="m-0 fw-bold text-center">Tips:</p>
              <p class="small p-2 px-5">${place.tips}</p>
          </div>                       
          `;
          document.querySelector(".modal-content").innerHTML = output;
          setTimeout(function() {$('#detailsModal').modal('show')}, 3000);
        });
      }
    };
  }
}

// import the json files and pass them to the respectable function
fetch('./places.json')
.then(response => {
    return response.json();
})
// pass it to the function that dynamically fills the places in html
.then (jsondata => showGetaways(jsondata));


fetch('./honeymoon.json')
.then(response => {
    return response.json();
})
.then (jsondata => showHoneymoon(jsondata));

const addEachImage = (getaways, images) => {
  // deconstructs the places objects
  let { image, place } = images
  // creates an image
  let cardContainer = document.createElement('img')
  // adds tags to the image
  cardContainer.src = `${image}`
  cardContainer.alt = `Image of ${place}` 
  cardContainer.classList.add('location-images', 'img-fluid') 
  // appends the card to the containing container
  getaways.appendChild(cardContainer)
}

// shows all of the romantic getaways from JSON file
const showGetaways = (locations) => {
  // takes each location in places.json
  locations.forEach(location => {
    // imports the container from html for all of the locations
    let getaways = document.getElementById('card-container')

    addEachImage(getaways, location)
  });
}

// show all of the honeymoon locations from honeymoon.json
const showHoneymoon = (locations) => {
  // takes each location in places.json
  locations.forEach(location => {
    // imports the container from html for all of the locations
    let getaways = document.getElementById('honeymoon-container')

    addEachImage(getaways, location)
  });
}