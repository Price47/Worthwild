/**
 * Created by rockstar645 on 10/22/17.
 */
function initMap() {
        var NY = {lat:40.7128, lng: -74.0060};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 13,
          center: NY
        });
        var marker = new google.maps.Marker({
          position: NY,
          map: map
        });
}


