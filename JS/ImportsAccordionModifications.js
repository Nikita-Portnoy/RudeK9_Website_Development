// Imports Accordion Scroll to Top
$(document).ready(function(){
  $('#ImportsAccordion').on('shown.bs.collapse', function (e) { // Bootstrap Accordion card activation event handler with Event Object(e)
      if ($(e.target).prev().hasClass("CardHeader")) { // Prevents an error when the PedigreeCollapse are fired
        var HeadingTop = $(e.target).prev('.CardHeader').offset().top - 55; // Sets the HeadingTop to be the previous CardHeader with a negative offset(offset up)
        var VisibleTop = $(window).scrollTop(); // Sets the VisibleTop to be the windows scrollbar's position
        if (HeadingTop < VisibleTop) { // If the offset previous card header is higher than the scrollbars position
            $('html,body').animate({ // Animate html and body elements with a custom animation
                scrollTop: HeadingTop //Set the vertical scrollbar to match the offset card
            }, 200); // 200 milliseconds
        };
      };
  });
  $('#ImportsAccordion').on('show.bs.collapse', function() { // When Bootstrap Accordion activates the Pedigree Collapsable Card closes so if reopened doesn't take up room
    $('#PedigreeCollapse1,#PedigreeCollapse2,#PedigreeCollapse3').collapse('hide');
  })
  $('#PedigreeCollapse1,#PedigreeCollapse2,#PedigreeCollapse3').on('show.bs.collapse hide.bs.collapse', function() { // Changing arrow icons when content open or closed
    $(this).prev().find("svg").toggle(300);
  });
});
