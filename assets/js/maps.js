let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
      center: {
        lat: 48.24714034374518,
        lng: 11.607449487355048
      },
      zoom: 4,
      tilt:45,
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
          window.setTimeout(function() {map.setZoom(pos);},3000);
          window.open(place.url, '_blank');
          console.log(place.url)
        });

        


     }
     
    };
  }
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