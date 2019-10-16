(function ($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });

  $('[data-toggle="tooltip"]').tooltip();

  $('.card.6').click(function () {
    window.open('https://sathishvasi.github.io/grid-css/', '_blank');
  })
  $('.card.5').click(function () {
    window.open('https://sathishvasi.github.io/Sathish-cinemas/', '_blank');
  })
  $('.card.4').click(function () {
    window.open('https://sathishvasi.github.io/MSK-live', '_blank');
  })
  $('.card.3').click(function () {
    window.open('https://sathishvasi.github.io/animation/', '_blank');
  })
  $('.card.2').click(function () {
    window.open('https://sathishvasi.github.io/HeyBlue/', '_blank');
  })
  $('.card.1').click(function () {
    window.open('https://sathishvasi.github.io/sathish-moviesv2/', '_blank');
  })
  $('.artkart').click(function () {
    window.open('https://sathish17595.wixsite.com/artkart1', '_blank');
  })
})(jQuery); // End of use strict