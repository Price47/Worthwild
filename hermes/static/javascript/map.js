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

function mapModal(id) {
    var map = new Datamap({
        element: document.getElementById(id),
        responsive: false,
        geographyConfig: {
            popupOnHover: true,
            highlightOnHover: true,
            highlightFillColor: '#1a1b1c',
            highlightBorderColor: 'black',
            borderColor: '#050505',
            borderWidth: 0.5,
            highlightBorderWidth: .5
        },
        fills: {
            defaultFill: '#1a1b1c',
            dataAvailable: '#033ebc',
            dataAvailableHover: '#60e9ff'
        },
        data: {
            USA: {fillKey: "dataAvailable", borderColor:'#033ebc', highlightFillColor: '#60e9ff', highlightBorderColor: '#60e9ff'}
        }
    });
    d3.select(window).on('resize', map.resize());

    function resize() {
        // adjust things when the window size changes
        console.log('resizing');
    }
}


