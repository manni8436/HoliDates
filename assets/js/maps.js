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
          </div>
          <div class="modal-body">
          <img class="w-100" src="${place.image}" alt="${place.image}">
              <p class="p-2 text-center">${place.description}.</p>
          </div>                       
          `;
          document.querySelector(".modal-content").innerHTML = output;
          $('#detailsModal').modal('show');
        });
      }
    };
  }
}