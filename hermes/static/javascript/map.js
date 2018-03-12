/**
 * Created by rockstar645 on 10/22/17.
 */
var mapDiv;
var apiURL = window.location.protocol + "//" + window.location.host + "/api/";


function initMap() {
        mapDiv = document.getElementById('map');
        var NY = {lat:40.7128, lng: -74.0060};
        var map = new google.maps.Map(mapDiv, {
          zoom: 13,
          center: NY
        });
        mapDiv.map = map;
        var marker1 = new google.maps.Marker({
          position: NY,
          map: mapDiv.map
        });
        var marker2 = new google.maps.Marker({
            position: {lat:41.7128, lng: -74.0064},
            map: map
        });

        var input = document.getElementById('pac-input');
        var searchBox = new google.maps.places.SearchBox(input);
        map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

        map.addListener('bounds_changed', function() {
          searchBox.setBounds(map.getBounds());
        });

        searchBox.addListener('places_changed', function() {
          var places = searchBox.getPlaces();

          if (places.length == 0) {
            return;
          }

          // Clear out the old markers.
          markers.forEach(function(marker) {
            marker.setMap(null);
          });
          markers = [];

          // For each place, get the icon, name and location.
          var bounds = new google.maps.LatLngBounds();
          places.forEach(function(place) {
            if (!place.geometry) {
              console.log("Returned place contains no geometry");
              return;
            }
            var icon = {
              url: place.icon,
              size: new google.maps.Size(71, 71),
              origin: new google.maps.Point(0, 0),
              anchor: new google.maps.Point(17, 34),
              scaledSize: new google.maps.Size(25, 25)
            };

            // Create a marker for each place.
            markers.push(new google.maps.Marker({
              map: map,
              icon: icon,
              title: place.name,
              position: place.geometry.location
            }));

            if (place.geometry.viewport) {
              // Only geocodes have viewport.
              bounds.union(place.geometry.viewport);
            } else {
              bounds.extend(place.geometry.location);
            }
          });
          map.fitBounds(bounds);
        });

    
        var locations = getLocation();
        var labels = ['price','is','rad','and','cool','plus','fly','as','shit','tar','tewr','qhtq'];

        // Add some markers to the map.
        // Note: The code uses the JavaScript Array.prototype.map() method to
        // create an array of markers based on a given "locations" array.
        // The map() method here has nothing to do with the Google Maps API.
        var markers = locations.map(function(location, i) {
          return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
          });
        });

        // Add a marker clusterer to manage the markers.
        var markerCluster = new MarkerClusterer(map, markers,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});


}

function openAt(lat, long) {
    mapDiv.map.panTo({lat:lat, lng: long})
}

function getLocation(){
    $.ajax({
        type: 'GET',
        url: apiURL + 'locations',
        success: function(data) {
            return(data)
        }
    })
}