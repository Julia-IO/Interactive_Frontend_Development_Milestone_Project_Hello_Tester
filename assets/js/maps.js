function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3,
        center: {
            lat: 46.619261,
            lng: -33.134766
        }
    });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var locations = [
        { lat: 51.896893, lng: -8.486316 },
        { lat: 41.387920, lng: 2.169920 },
        { lat: 40.416775, lng: -3.703790 },
        { lat: -35.675148, lng: -71.542969 },
        { lat: -34.9964963, lng: -64.9672817 },
        { lat: 22.5000485, lng: -100.0000375 },
         { lat: 36.7014631, lng: -118.7559974 },
        { lat: 27.7567667, lng: -81.4639835 },
        { lat: 26.1223084, lng: -80.1433786 }
    ];

    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
}
