$(window).scroll(function() {
    if ($(document).scrollTop() > 1) {
        $('.nav').addClass('affix');
        $('.nav').removeClass('on-top');

    } else {
        $('.nav').removeClass('affix');
        $('.nav').addClass('on-top');
    }
});

$('.navTrigger').click(function () {
    $(this).toggleClass('active');

    if($('.nav').hasClass('on-top')){
        $('.nav').toggleClass('affix')
    }

    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();
});

$('.navlinks li a').click(function () {
    $('.navTrigger').toggleClass('active');
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();
}); 

