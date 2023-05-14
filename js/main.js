$(document).ready(function() {
    $('.btn-search').click(function() {
        $('nav').addClass('fadein');
        $('.btn-search').addClass('fadeout');
        $('.input-search').addClass('input-open');
        $('button').addClass('btn-open');
        $('form').addClass('open')
    });

    $('.toggle').click(function() {
        $('.toggle').toggleClass('active');
        $('.slide-bar').addClass('open')
    });
    $(' .close-tab ').click(function() {
        $('.slide-bar').removeClass('open')
    });

    $('button').click(function() {
        $('nav').removeClass('fadein');
        $('.btn-search').removeClass('fadeout');
        $('.input-search').removeClass('input-open');
        $('form').removeClass('open');
        $('button').removeClass('btn-open');
        $('form').removeClass('search-tab');


    });

    $('.search').click(function() {
        $('form').addClass('search-tab');
    });
    $('button').click(function() {
        $('form').removeClass('search-tab');
    });
    // form mediaa
    $('.toggle').click(function() {
        $('.slide-bar').addClass('active');
        $('.toggle').addClass('close');
        $('.close-tab ').addClass('open');

    })
    $(' .close-tab').click(function() {
        $('.slide-bar').removeClass('active');
        $('.toggle').removeClass('close');
        $('.close-tab ').removeClass('open');
    });
    $(' .close-search').click(function() {
        $('form').addClass('open');
        $('.search').addClass('open')
    });
    $('.close-times').click(function() {
        $('form').removeClass('open');
        $('.search').removeClass('open')
    });
    // preload
    $(window).on('load', function() {
        $('.loader').fadeOut(3000)

    });
    // footer
    $("#plus").click(function() {
        $('ul.list-unstyled.two').toggleClass('open');
        $('#plus-two').toggleClass('two');
    });
    $(".plus").click(function() {
        $('ul.list-unstyled.one').toggleClass('open');
        $('#plus-one').toggleClass('active');
    });
})