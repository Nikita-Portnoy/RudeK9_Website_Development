// Responsive Menu
$(document).ready(function(){
  (function() {
    var Menu = document.getElementById("TopNav");
    var Icon = document.getElementById("Icon");
    var PageStart = document.getElementsByClassName("ContentFrame")[0];

    Icon.addEventListener("click", function() {
      if (Menu.className === "Menu") {
          Menu.className += " Responsive";
      } else {
        Menu.className = "Menu";
        $(".Submenu").hide();
      }
    });

    $(".ServicesBtn").click(function(){
      $(".Submenu").slideToggle("fast");
    })

    PageStart.addEventListener('click', function() {
      if (Menu.className === "Menu Responsive") {
          Menu.className = "Menu";
          $(".Submenu").hide();
      }
    });
  })();
});


// Smooth Scrolling Animation
$(document).ready(function(){
  $(".TopArrow").on('click', function(Event) { //Apply event handler to tags with class TopArrow
    if (this.hash !== "") { //If <a> targets an element with the #
      Event.preventDefault(); //Prevents the default behaviour of the <a> tag ("event." tarrgets the event binding function)
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top //Scrolls to the top of the targeted element
      }, 800, function(){
        location.hash = hash; //Sets the url to have the current hash value
      });
    } // End if
  });
});
