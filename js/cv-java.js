
/*jslint browser: true*/
/*global $, window,document,*/

$(document).ready(function () {
    
    "use strict";
    
    
    
    
    // Smooth-Scroll    

    $("aside nav .nav-link, .mobile-nav a").on('click', function (event) {

        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

      
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
   
                window.location.hash = hash;
            });
        }
    });
    
    //
    
    // progress bar    
    
    
    $(".skills .progress .progress-bar").each(function () {
        $(this).animate({
            width: $(this).attr("data-pro")
        }, 3000);
    });
  
});