// Testimonials Carousel
$(document).ready(function(){
  var CurrentSlide = 0;

  (function CheckSlides() {
    if ( $(window).width() > 575) {
      var Slides = document.getElementsByClassName("TestimonialsP");
      ExecSlides()
    } else {
      var Slides = document.getElementsByClassName("TestimonialsT");
      ExecSlides()
    };

    function ExecSlides() {
      if (CurrentSlide == Slides.length) {
          CurrentSlide = 1;
            for (var i = 0; i < Slides.length; i++) {
              Slides[i].style.zIndex = 0;
            }
        } else {
          CurrentSlide++;
        }

        Slides[CurrentSlide-1].style.zIndex = CurrentSlide;
        Slides[CurrentSlide-1].style.display = "block";

      var NextSlide = CurrentSlide;
        if (NextSlide < Slides.length) {
          Slides[CurrentSlide].style.display = "none";
        } else if (NextSlide == Slides.length) {
          Slides[0].style.display = "none";
        };
    };

    setTimeout(ExecSlides, 30000)
  })();
});
