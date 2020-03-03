import css from '../sass/main.scss';

$(document).ready(function () {
  //Page scrolling
  $('a.navbar-brand, a.nav-link, .back-to-top').click(function () {
    var $link = $(this);
    $('html, body').stop().animate({
      scrollTop: ($($link.attr('href')).offset().top - 50)
    }, 1250);

  });

  // Highlight the top nav as scrolling occurs
  $('body').scrollspy({
    target: ".navbar-fixed-top",
    offset: 51
  });
});