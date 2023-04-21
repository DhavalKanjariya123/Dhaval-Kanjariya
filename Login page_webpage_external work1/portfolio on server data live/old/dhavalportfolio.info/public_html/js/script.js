


$(function () {
    if ($('.js-scroll-trigger').length) {
        scrollAnimation();
    }

    function scrollAnimation() {
        $(window).scroll(function () {
            $(".js-scroll-trigger").each(function () {
                let position = $(this).offset().top,
                    scroll = $(window).scrollTop(),
                    windowHeight = $(window).height();

                if (scroll > position - windowHeight + 180) {
                    $(this).addClass('is-active');
                }
            });
        });
    }
    $(window).trigger('scroll');
});




$(document).ready(function () {
    $(".mobile-nav-toggle").click(function () {
        $(".mobile-nav-toggle").css({ "display": "none" });
        $(".nav-link").click(function () {
            $("nav").css({ "display": "none" });
            $(".mobile-nav-toggle").css({ "display": "block" });
        });
        $("nav").css({ "display": "block" });
    });
    // jquery bvalidator
    $("#frm").bValidator();
});




