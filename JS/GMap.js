$(document).ready(function(){
// Fixing the Static Menu Bar Problem when jumping to ID's
  var Offset = $(':target').offset();
  var JumpTo = Offset.top - 60;
  $('html, body').animate({scrollTop:JumpTo}, 0);
});

function initMap() {
  var Chino = {lat: 34.0110363, lng: -117.7303999};
  var Orange = {lat: 33.8187024, lng: -117.854874};

  var MapChino = new google.maps.Map(document.getElementById('MapChino'), {zoom: 13, center: Chino});
  var MapOrange = new google.maps.Map(document.getElementById('MapOrange'), {zoom: 13, center: Orange});

  var MarkerChino = new google.maps.Marker({position: Chino, map: MapChino});
  var MarkerOrange = new google.maps.Marker({position: Orange, map: MapOrange});
}

function initMapLoc() {
  var Current = {lat: 33.9217964, lng: -117.7738354};
  var Chino = {lat: 34.0110363, lng: -117.7303999};
  var Orange = {lat: 33.8187024, lng: -117.854874};

  var MapLocations = new google.maps.Map(document.getElementById('MapLocations'), {zoom: 11, center: Current});

  $('#LocationOrange').click(function(){MapLocations.panTo(Orange);MapLocations.setZoom(15)});
  $('#LocationChino').click(function(){MapLocations.panTo(Chino);MapLocations.setZoom(15)});

  var MarkerOrangeLoc = new google.maps.Marker({position: Orange, map: MapLocations});
  var MarkerChinoLoc = new google.maps.Marker({position: Chino, map: MapLocations});
}
