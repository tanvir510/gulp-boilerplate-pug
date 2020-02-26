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
    // new WOW().init();

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

        var dates = $(".fc-day-number");
        dates.each(function (index) {
            dates[index].innerHTML = dates[index].innerHTML.toString().replace('日', '');
            dates[index].style.fontSize = '16' + 'px'
        })
    });

    /*--------------------------------------------
             Sticky Menu Jquery
    ---------------------------------------------*/
    var fixed_top = $("header");
    var width = $(window).width();
    $(window).on('scroll', function () {
        console.log(width)
        if ($(this).scrollTop() >= 70 && width <= 991) {
            fixed_top.addClass("menu-fixed animated fadeInDown");
        } else {
            fixed_top.removeClass("menu-fixed animated fadeInDown");
        }

    });


})(jQuery);