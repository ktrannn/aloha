
$(document).ready(function (e) {

  /* EMAIL SUBSCRIBE */
  $('.subscribe-button').click(function (e) {
    e.preventDefault();
    var sEmail = $('.email-text').val();
    if ($.trim(sEmail).length == 0) {
      alert("please enter a valid e-mail");
    }
    if (validateEmail(sEmail)) {
      alert("Thank you for subscribing")
    }
    else {
      alert("Invalid Email address");
    }
  });
  /* VALIDATION EMAIL */
  function validateEmail(sEmail) {
    var filter = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
    if (filter.test(sEmail)) {
      return true;
    }
    else {
      return false;
    }
  }
  /* SMOOTH SCROLLING FROM CSS TRICKS */
  $('a[href*="#"]')
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
        &&
        location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000, function () {
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) {
              return false;
            } else {
              $target.attr('tabindex', '-1');
              $target.focus();
            };
          });
        }
      }
    });
  /* CAROUSEL */
  $('.main-carousel').flickity({
    cellAlign: 'left',
    contain: true
  });

});



