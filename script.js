$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 40)
            $(".navbar").addClass("sticky");
        else
            $(".navbar").removeClass("sticky");
    });

    $('.menu-toggler').click(function () {
        $(this).toggleClass("active");
        $('.navbar-menu').toggleClass("active");
    });
});

