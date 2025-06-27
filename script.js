document.addEventListener("DOMContentLoaded", function () {
    const thumbsSwiper = new Swiper(".thumbs-swiper", {
        spaceBetween: 10,
        slidesPerView: 3,
        freeMode: true,
        watchSlidesProgress: true,
        watchSlidesVisibility: true,
    });
    const mainSwiper = new Swiper(".main-swiper", {
        spaceBetween: 10,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        thumbs: { swiper: thumbsSwiper },
        autoplay: {
            delay: 4500,
            disableOnInteraction: false,
        },
    });
});
