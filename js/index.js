var mySwiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    slidesPerView: 'auto',
    centeredSlides: true,
    coverflowEffect: {
        slideShadows: true,
        rotate: 20,
        stretch: 0,
        depth: 350,
        modifier: 1,
    },
});