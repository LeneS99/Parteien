// Sticky nav on homepage
if ( $('body').hasClass('homepage') ) {
  var targetPos = $('.nav-bar a').offset().top;

  $(window).scroll(function() {
    var scrollPos = $(this).scrollTop();

  if ( scrollPos > targetPos ) {
    $('#home-navigation').addClass('fixed-nav');
  } else {
    $('#home-navigation').removeClass('fixed-nav');
  }
  });
}

//Sticky Button Bar on comparison.html
$(window).scroll(function() {
  var scrollPos = $(this).scrollTop();

  if ( scrollPos > 500 ) {
    $('#button-section').addClass('fixed-nav');
  } else {
    $('#button-section').removeClass('fixed-nav')
  }
});

// Smooth scroll
$(document).ready(function() {

  $('.slide-section').click(function(e) {

    var linkHref = $(this).attr('href');

    $('html, body').animate({
      scrollTop: $(linkHref).offset().top
    }, 1000);

    e.preventDefault();
  });
});

//Smooth Scroll
$(document).ready(function() {

// Get the header height
var headerHeight = $('.nav-bar-sonst').outerHeight();

  $('.smooth-scroll').click(function(e) {

    var linkHref = $(this).attr('href');

    $('html, body').animate({
      scrollTop: $(linkHref).offset().top - headerHeight
    }, 1000);

    e.preventDefault();
  });

});

// Burger Menu
  $( document ).ready(function() {
   $(".burger-button").click(function(){
     $(".burger-menu").slideToggle();
     $(".burger-button").toggleClass("active");
   });
});
