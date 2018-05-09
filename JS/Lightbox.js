// Gallery Lightbox
$(document).ready(function(){

  var SlideIndex = 0;
  var Lightbox = document.getElementById("Lightbox");
  var Modal = document.getElementById("ModalContent");
  var Slides = document.getElementsByClassName("ModalSlides");

  $('.GalleryImg').on('click', function() { //Attach event handler on each photo
    var GalleryImgs = Array.prototype.slice.call(document.getElementsByClassName('GalleryImg')); //Turns object array to a proper array
    SlideIndex = GalleryImgs.indexOf(this); //Position of img clicked

//Checks to see if the Next and Prev buttons need to displayed then launches the Lightbox element
    BtnCheck();
    Lightbox.style.display = "block";
    Slides[SlideIndex].style.display = "block";
  });

  var PreviousBtn = document.getElementById("PreviousBtn");
  PreviousBtn.addEventListener('click', function() {
    Prev();
  });

  var NextBtn = document.getElementById("NextBtn");
  NextBtn.addEventListener('click', function() {
    Next();
  });

//When a key is pressed the check key is initialized
  document.onkeydown = CheckKey;

//Checks the key that was pressed if 'ArrowRight', 'ArrowLeft' or 'Esc' is clicked then execute appropriate behaviours
  function CheckKey(e) {
      var e = e;

      if (e.keyCode === 37) {
        Prev();
      }
      else if (e.keyCode === 39) {
        Next();
      }
      else if (e.keyCode === 27) {
        Exit();
      }
  };

//If the user clicks outside of the photo the exit function is fired
  var ExitBlock = document.getElementById("ExitBlock");
  ExitBlock.addEventListener('click', function() {
      Exit();
  });

//If the user click on the cross at the top the exit function is fired
  var CloseBtn = document.getElementById("CloseBtn");
  CloseBtn.addEventListener('click', function() {
      Exit();
  });

//Previous Slide
  function Prev() {
    if (SlideIndex > 0) {
      Slides[SlideIndex].style.display = "none";
      SlideIndex --;
      Slides[SlideIndex].style.display = "block";
    };
    BtnCheck();
  };

//Next Slide
  function Next() {
    if (SlideIndex < Slides.length-1) {
      Slides[SlideIndex].style.display = "none";
      SlideIndex ++;
      Slides[SlideIndex].style.display = "block";
    };
    BtnCheck();
  };

//Checks to see if Next and Prev buttons need to displayed
  function BtnCheck() {
    if (SlideIndex === 0) {
      PreviousBtn.style.display = "none";
    } else {
      PreviousBtn.style.display = "block";
    };

    if (SlideIndex === Slides.length-1) {
      NextBtn.style.display = "none";
    } else {
      NextBtn.style.display = "block";
    };
  };

//Exits the Lightbox element
  function Exit() {
    Lightbox.style.display = "none";
    var i = 0;
    while (i < Slides.length) {
      Slides[i].style.display = "none";
      i++
    };
  };

});
