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
    /*--------------------------------------------
             Calendar Jquery
    ---------------------------------------------*/
    document.addEventListener('DOMContentLoaded', function () {

        var calendarEl = document.getElementById('calendar');

        var calendar = new FullCalendar.Calendar(calendarEl, {
            plugins: ['dayGrid'],
            locale: "ja",
            contentHeight: "auto",
            weekends: "true",
            header: {
                left: "title",
                center: "",
                right: "prev,today,next"
            },
            view: {
                titleFormat: {
                    month: '"M月"'
                },
            }
        });

        calendar.render();
    });


})(jQuery);