  $( document ).ready(function() {
   $(".burger-button").click(function(){
     $(".burger-menu").slideToggle();
     $(".burger-button").toggleClass("active");
   });
});
