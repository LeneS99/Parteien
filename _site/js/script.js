  $( document ).ready(function() {
   $(".burger-button").click(function(){
     $(".burger-menu").slideToggle();
     $(".burger-button").toggleClass("active");
   });
});

// Stiky nav on homepage

var targetPos = $('.nav-bar a').offset().top;

$(window).scroll(function() {
  var scrollPos = $(this).scrollTop();

if ( scrollPos > targetPos ) {
  $('#home-navigation').addClass('fixed-nav');
} else {
  $('#home-navigation').removeClass('fixed-nav');
}
});
