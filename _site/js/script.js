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


// Burger Menu
  $( document ).ready(function() {
   $(".burger-button").click(function(){
     $(".burger-menu").slideToggle();
     $(".burger-button").toggleClass("active");
   });
});

// Sticky nav on homepage

var targetPos = $('.nav-bar a').offset().top;

$(window).scroll(function() {
  var scrollPos = $(this).scrollTop();

if ( scrollPos > targetPos ) {
  $('#home-navigation').addClass('fixed-nav');
} else {
  $('#home-navigation').removeClass('fixed-nav');
}
});
