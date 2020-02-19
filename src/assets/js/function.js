(function ($) {
    "use strict";
    /*--------------------------------------------
                Active class jquery
    ---------------------------------------------*/
    $('ul.navber_list li').on('click', function () {
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
    });

    /*--------------------------------------------
               Wow Js Jquery
    ---------------------------------------------*/
    new WOW().init();

    /*--------------------------------------------
               Wow Js Jquery
    ---------------------------------------------*/


})(jQuery);