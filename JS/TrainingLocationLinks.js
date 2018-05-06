// Training Locations Links to GMaps Addresses
$(document).ready(function(){
  var Chino = document.getElementById("LocationChino");
  var Orange = document.getElementById("LocationOrange");

  Chino.addEventListener("click", function() {
    window.open("https://www.google.com/maps/place/3415+Chino+Ave,+Chino,+CA+91710/@34.0110535,-117.7325799,17z/data=!3m1!4b1!4m5!3m4!1s0x80c33298a2168e41:0x37e87c06e1795338!8m2!3d34.0110535!4d-117.7303912?hl=en&authuser=0");
  });

  Orange.addEventListener("click", function() {
    window.open("https://www.google.com/maps/place/231+W+Blueridge+Ave,+Orange,+CA+92865/@33.8185256,-117.8573116,17z/data=!3m1!4b1!4m5!3m4!1s0x80dcd715f33c2257:0x1645ed6b0f4b4ec9!8m2!3d33.8185256!4d-117.8551229?hl=en&authuser=0");
  });
});
