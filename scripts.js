// A $( document ).ready() block.
$(document).ready(function () {; // This closing semicolon prevents any previous 
    //code that may have missed a semicolon to not interfer with this code.
    //IIFE to Hide Code 
    (function () {
        $('a').addClass('smoothScroll');
        $('.smoothScroll').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000); // The number here represents the speed of the scroll in milliseconds
                    return false;
                }
            }
        });

    })(); //If I need to expose outside inside the IIFE, called it here.
});
