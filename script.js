
$(document).ready(function(e) {


// smooth scrolling from css tricks

$('a[href*="#"]')
.not('[href="#"]')
.not('[href="#0"]')
.click(function(event) {
  // On-page links
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    && 
    location.hostname == this.hostname
  ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000, function() {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          $target.focus(); // Set focus again
        };
      });
    }
  }
});



// carousel
$('.main-carousel').flickity({
  cellAlign: 'left',
  contain: true
  
});
// 


// EMAIL SUBSCRIBE
$('#subscribe-button').click(function(e){
var sEmail = $('#email-text').val(); 
if ($.trim(sEmail).length == 0) {
  alert("please enter a valid e-mail");
  e.preventDefault();
}
if (validateEmail(sEmail)) {
  alert("Thank you for subscribing")
}
else {
  alert("Invalid Email address");
  e.preventDefault();
}
});
});


// VALIDATION EMAIL
function validateEmail(sEmail) {
  var filter = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
  if (filter.test(sEmail)){
    return true;
  }
  else{
    return false;
  }
}

