let initBrand = false;
let swiperBrand;

function swiperBrandContainer() {
    if (window.innerWidth < 768) {
        if (!initBrand) {
            initBrand = true;
            swiperBrand = new Swiper('.brands-block__swiper', {
                loop: true,
                slidesPerView: 'auto',
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                }
            })
        }
    } else if (initBrand) {
        swiperBrand.destroy()
        initBrand = false
    }
}
swiperBrandContainer();
window.addEventListener('resize', swiperBrandContainer);

let brandsSwiper = document.querySelector('.brands-block__swiper-wrapper')
let brandsButton = document.querySelector('.brands-block__button');
let brandHidden = brandsSwiper.querySelectorAll('.hidden');

brandsButton.addEventListener('click', function () {
    if (brandsButton.classList.contains('show-mode')) {
        brandsButton.classList.toggle("show-mode");
        brandsButton.classList.toggle("hide-mode");
        brandsButton.textContent = ('Скрыть');
        brandsButton.style.background = 'url(./img/hidemore-icon.svg) no-repeat -5px';
        for (let i = 0; i < brandHidden.length; i++) {
            brandHidden[i].classList.remove('hidden');
        }
    } else {
        brandsButton.classList.toggle("show-mode");
        brandsButton.classList.toggle("hide-mode");
        brandsButton.textContent = ('Показать все');
        brandsButton.style.background = 'url(./img/readmore-icon.svg) no-repeat -5px';
        for (let i = 0; i < brandHidden.length; i++) {
            brandHidden[i].classList.add('hidden');
        }
    }
});