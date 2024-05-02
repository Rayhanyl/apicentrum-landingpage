(function () {
    "use strict";
    new Swiper('.carousel-swipper', {
        speed: 600,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
        slidesPerView: 'auto',
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 40
            },

            700: {
                slidesPerView: 2,
                spaceBetween: 40
            },

            1200: {
                slidesPerView: 3,
                spaceBetween: 60
            }
        }
    });

})()