$(document).ready(function () {
    //smoothscroll
    $('.smooth-scrol').on('click', function (e) {
        e.preventDefault();
        var target = this.hash,
            menu = target;
        if ($(".navbar-collapse").hasClass("show")) {
            $(".navbar-collapse").removeClass("show")
        }
        $target = $(target);
        var height = $(".navbar").height() + $(".navbar").height() - 13;
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - height
        }, 500, 'swing', function () {
            // window.location.hash = target;
        });
    });

    $(".no-link").click(function (e) {
        e.preventDefault();

    });
});