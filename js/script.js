$(document).ready(function(){
    $(".nav_mobile").click(function(){
        $(".nav_mobile ul").toggleClass("visible");
    });


    $('.nav_mobile').on("click", function (event) {
    $('span').toggleClass('rota');
    $('span').toggleClass('rota_reset');
});

    $('.xsmall_l').click(function () {
    $('.xsmall_l').toggleClass('resize');
});
    $('.xsmall_r').click(function () {
    $('.xsmall_r').toggleClass('resize');
});
    $('.xsmall_l2').click(function () {
    $('.xsmall_l2').toggleClass('resize');
});
    $('.xsmall_r2').click(function () {
    $('.xsmall_r2').toggleClass('resize');
});
    $('.two_content .big_l').click(function () {
    $('.two_content .big_l').toggleClass('resize');
});

    $('.xsmall_l').click(function () {
    $('.xsmall_r').toggleClass('unsize');
    $('.xsmall_r2').toggleClass('unsize');
    $('.xsmall_l2').toggleClass('unsize');
});

    $('.xsmall_r').click(function () {
    $('.xsmall_l').toggleClass('unsize');
    $('.xsmall_r2').toggleClass('unsize');
    $('.xsmall_l2').toggleClass('unsize');
});

    $('.xsmall_l2').click(function () {
    $('.xsmall_r').toggleClass('unsize');
    $('.xsmall_r2').toggleClass('unsize');
    $('.xsmall_l').toggleClass('unsize');
});

    $('.xsmall_r2').click(function () {
    $('.xsmall_l').toggleClass('unsize');
    $('.xsmall_r2').toggleClass('unsize');
    $('.xsmall_l2').toggleClass('unsize');
});








    });
