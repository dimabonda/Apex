
$(document).ready(function(){
    $('.carousel-list').slick({
        // slidesToShow: 3,
        arrows: false,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 3000,
        swipeToSlide: true,
        variableWidth: true,
    });
    $('.events-mobile-list').slick({
        // slidesToShow: 3,
        arrows: false,
        slidesToScroll: 1,
        variableWidth: true,
        swipeToSlide: true,
    });
    $('.reviews-carousel').slick({
        // slidesToShow: 3,
        arrows: false,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        variableWidth: true,
        centerMode: true,
        
    });
    $('.reviews-carousel-mobile').slick({
        arrows: false,
        slidesToScroll: 1,
        variableWidth: true,
        centerMode: true,
        swipeToSlide: true,
    });
    $('.reviews-carousel').on('beforeChange', function() {
        $('.reviews-carousel .slick-slide').removeClass('prev next');
    });
    $('.reviews-carousel').on('afterChange', function() {
        $('.reviews-carousel .slick-active').prev().addClass('prev');
        $('.reviews-carousel .slick-active').next().addClass('next');
    });
    $('.reviews-carousel-mobile').on('beforeChange', function() {
        $('.reviews-carousel-mobile .slick-slide').removeClass('prev next');
    });
    $('.reviews-carousel-mobile').on('afterChange', function() {
        $('.reviews-carousel-mobile .slick-active').prev().addClass('prev');
        $('.reviews-carousel-mobile .slick-active').next().addClass('next');
    });
});