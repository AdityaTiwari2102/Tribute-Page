$(document).ready(function(){

  $('#about-li, .about-li').click(function(){
    	$('html, body').animate({
    		scrollTop: $("#about-him").offset().top - $('header').height()
    	}, 1000);
    });

   $('#architecture-li, .architecture-li').click(function(){
    	$('html, body').animate({
    		scrollTop: $("#achitecture").offset().top - $('header').height()
    	}, 1000);
    });

    $('#buddhism-li, .buddhism-li').click(function(){
      $('html, body').animate({
        scrollTop: $("#buddhism").offset().top - $('header').height()
      }, 1000);
    });

    $('#conatact-li, .conatact-li').click(function(){
      $('html, body').animate({
        scrollTop: $("#contact-us").offset().top - $('header').height()
      }, 1000);
    });

    $( window ).scroll(function() {
      var scroll = $(window).scrollTop();
      if(scroll >= 270) {
         $( "#nav-hero" ).addClass('display-none');
      }

      if(scroll < 270) {
         $( "#nav-hero" ).removeClass('display-none');
      }

      if(scroll >= 500) {
         $( "header" ).addClass('visible');
      }

      if(scroll < 500) {
         $( "header" ).removeClass('visible');
      }

      if($(window).width() <= 750) {
        if(scroll >= 200) {
         $( "header" ).addClass('visible');
      }

      if(scroll < 200) {
         $( "header" ).removeClass('visible');
      }
    }
    });

  // console.log(about);
  // console.log(archi);
  // console.log(buddhism);
  // console.log(contact);
});
