$(window).scroll(function() {
    if ($(document).scrollTop() > 1) {
        $('.nav').addClass('affix');
    } else {
        $('.nav').removeClass('affix');
    }
});

$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();
});

$('.navlinks li a').click(function () {
    $('.navTrigger').toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();
});

