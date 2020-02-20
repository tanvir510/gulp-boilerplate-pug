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
              Click Search Jquery
    ---------------------------------------------*/
    $('.add_search').on('click', function () {
        $('.search_bar_sp').addClass('open')
    })
    $('.remove_search').on('click', function () {
        $('.search_bar_sp').removeClass('open')
    })


})(jQuery);