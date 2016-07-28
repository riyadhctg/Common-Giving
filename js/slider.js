(function() {
     var galleryTop = new Swiper('.gallery-upper', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 10,
        slidesPerView: 3,
        touchRatio: 0.2,
        loop:true,
        loopedSlides: 9, //looped slides should be the same
        slideToClickedSlide: true,

        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        /*pagination: '.swiper-pagination',*/
        centeredSlides: true
    });

    var galleryBottom = new Swiper('.gallery-lower', { 
        //spaceBetween: 10,
        loop:true,
        loopedSlides: 9,
        spaceBetween: 30,
        autoHeight: true //enable auto height
    });

    galleryTop.params.control = galleryBottom;
    galleryBottom.params.control = galleryTop;

})();