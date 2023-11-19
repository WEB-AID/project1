let initPrice = false;
let swiperPrice;

function swiperPriceContainer() {
    if (window.innerWidth < 768) {
        if (!initPrice) {
            initPrice = true;
            swiperPrice = new Swiper('.prices-block__swiper', {
                loop: true,
                slidesPerView: 'auto',
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                }
            })
        }
    } else if (initPrice) {
        swiperPrice.destroy()
        initPrice = false
    }
}
swiperPriceContainer();
window.addEventListener('resize', swiperPriceContainer);