$(function () {
    var header = $(".header");
    header.height($(window).height());
    $(window).resize(function () {
        header.height($(window).height());
    });
});