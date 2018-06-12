
function initMap() {
  var Chino = {lat: 34.0110535, lng: -117.7325799};
  var Orange = {lat: 33.8186013, lng: -117.8572332};

  var MapChino = new google.maps.Map(document.getElementById('MapChino'), {zoom: 13, center: Chino});
  var MapOrange = new google.maps.Map(document.getElementById('MapOrange'), {zoom: 13, center: Orange});

  var MarkerChino = new google.maps.Marker({position: Chino, map: MapChino});
  var MarkerOrange = new google.maps.Marker({position: Orange, map: MapOrange});
}
