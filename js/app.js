
// ===== Small slideshow function ==== //
$(".slideshow > div:gt(0)").hide();					// Hide div

setInterval(function() {
  $('.slideshow > div:first')								// Show first div content
    .fadeOut(1900)												 	// Fade out
    .next()																	// Change to next div content
    .fadeIn(1900)														// Fade in - show div
    .end()																	// End - repeat
    .appendTo('.slideshow');								// 4.2 seconds to show.
},  4200);

// ===== Small second slideshow-contact function ==== //
$(".slideshow-contact > div:gt(0)").hide();	// Hide div

setInterval(function() {
  $('.slideshow-contact > div:first')				// Show first div content
    .fadeOut(1900)												 	// Fade out
    .next()																	// Change to next div content
    .fadeIn(1900)														// Fade in - show div
    .end()																	// End - repeat
    .appendTo('.slideshow-contact');				// 4.2 seconds to show.
},  4200);

// ===== Scroll to top ==== //
$(window).scroll(function() {
    if ($(this).scrollTop() >= 900) {       // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});

// ===== Animate link - smooth scroll ==== //
$(document).ready(function(){
  $("a").on('click', function(event) {      // Add smooth scrolling to all links
                                            // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      event.preventDefault();               // Prevent default anchor click behavior

      // Store hash
      var hash = this.hash;

                                            // Method to add smooth page scroll
                                            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

                                            // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }
  });
});
