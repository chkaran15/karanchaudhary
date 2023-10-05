/*jslint browser: true*/
/*global $, jQuery, alert*/

var lastScrollTop = 0;

/* Navbar fade when scrolling */

$(window).scroll(function () {
  var st = $(this).scrollTop();
  if (st < lastScrollTop) {
    $(".navbar ").fadeIn();
  } else {
    $(".navbar ").fadeOut();
  }
  lastScrollTop = st;
});

$(document).on("click", ".navlink", function (event) {
  event.preventDefault();

  $("html, body").animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top,
    },
    500
  );
});
