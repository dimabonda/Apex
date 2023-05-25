
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
    
    $('.rooms-carousel').on('init', function() {
        const numberOfDots = 4;
        const sizeOfdot = 244; 
        const wrapperWidth = $('.slide-dots')[0].offsetWidth;
        const gaps = wrapperWidth - (numberOfDots * sizeOfdot);
        if(gaps > 0){
            const gap = gaps / (numberOfDots - 1);
            $('.slick-dots li').css("width", sizeOfdot);
            $('.rooms-carousel-wrapper .slick-dots').css("grid-gap", gap);
        } else {
            const size = wrapperWidth / numberOfDots;
            $('.slick-dots li').css("width", size);
        }
        
//////////////////////////////////////////////////////////////
        let stopPropagationHandler = (e) => {
            e.stopPropagation()
        }
        let isMoved = false;
        let movedElem = null;
        let pos = {left: 0, x: 0,};

        let mouseMoveHandler = (e) => {
            
            const dotsWrap = e.currentTarget;
            const dx = e.clientX - pos.x;
            dotsWrap.scrollLeft = pos.left - dx;
        }

        $('.rooms-carousel-wrapper .slide-dots').on('mousedown', (e) => {
            isMoved = false
            movedElem?.removeEventListener('click', stopPropagationHandler, true) 
            setTimeout(() => {
                isMoved = true
            }, 200)

            const dotsWrap = e.currentTarget;
            pos.x = e.clientX;
            pos.left = dotsWrap.scrollLeft;
            $('.rooms-carousel-wrapper .slide-dots').on('mousemove', mouseMoveHandler)
            
        })
        $('.rooms-carousel-wrapper .slide-dots').on('mouseup', (e, i) => {
            
            if(isMoved){
                movedElem = e.target
                e.target.addEventListener('click', stopPropagationHandler, true)
            }
            
            $('.rooms-carousel-wrapper .slide-dots').off('mousemove', mouseMoveHandler)
            
        })
        $('.rooms-carousel-wrapper .slide-dots').on('mouseleave', (e) => {
            $('.rooms-carousel-wrapper .slide-dots').off('mousemove', mouseMoveHandler)
        })

    });
    //////////////////////
    $('.rooms-carousel').on('afterChange', function(){
        let dotsWrapper = $('.rooms-carousel-wrapper .slide-dots');
        let activeDot = $('.rooms-carousel-wrapper .slider-controls .slick-active');
        let activeDotIndex = activeDot.index()
        let offsetLeftOfActiveDots = activeDot.position().left;
        let scrollLeftDotsWrapper = dotsWrapper.scrollLeft();
        let dotSizeWithGap = offsetLeftOfActiveDots / activeDotIndex;
        let wrapperRightSide = scrollLeftDotsWrapper + dotsWrapper.width();
        let activeDotRightSide = offsetLeftOfActiveDots + activeDot.width();
        if(offsetLeftOfActiveDots < scrollLeftDotsWrapper){
            dotsWrapper.scrollLeft(activeDotIndex  * dotSizeWithGap)
        }

        if(wrapperRightSide < activeDotRightSide){
            dotsWrapper.scrollLeft((activeDotIndex - 3) * dotSizeWithGap)
        }
  
    })
    
    $('.entertainment-details-cards-mobile').slick({
        dots: false,
        infinite: false,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        swipe: false,
    });
    $('.events-info-content-mobile').slick({
        dots: false,
        infinite: false,
        // adaptiveHeight: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        swipe: false,
    });
    $('.rooms-carousel').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnDotsHover: true,
        appendDots: $(".slide-dots"),
        prevArrow: $(".slide-prev"),
        nextArrow: $(".slide-next")
    });
    
    $('.eat-drink .menu-carousel').on('afterChange', () => {
        let activeSlide = $('.slick-active');
        let typeOfActiveElementByDataAttr = activeSlide.data("type");
        
        let activeMenuItem = $(`.eat-drink .menu-container[data-type='${typeOfActiveElementByDataAttr}']`);
        $('.eat-drink .menu-container').addClass('hidden-content');
        activeMenuItem.removeClass('hidden-content');
       
    })
    $('.eat-drink .menu-carousel').slick({
        arrows: false,
        // slidesToScroll: 5,
        swipeToSlide: true,
        infinite: true,
        // slidesToShow: 3,
        centerMode: true,
        focusOnSelect: true,
        variableWidth: true,

        // speed: 300,
        // slidesToShow: 1,
        // centerMode: true,
        // variableWidth: true
    });
    
});