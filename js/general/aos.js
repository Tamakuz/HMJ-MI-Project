'use strict'

AOS.init({
    once: true
});

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    grabCursor: 'true',
    centeredSlides: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".bi-chevron-right",
        prevEl: ".bi-chevron-left",
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        626: {
            slidesPerView: 2,
        },
        921: {
            slidesPerView: 3,
        },
    },
});