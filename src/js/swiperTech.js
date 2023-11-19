let initTech = false;
let swiperTech;

function swiperTechContainer() {
    if (window.innerWidth < 768) {
        if (!initTech) {
            initTech = true;
            swiperTech = new Swiper('.techRepair-block__swiper', {
                loop: true,
                slidesPerView: 'auto',
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                }
            })
        }
    } else if (initTech) {
        swiperTech.destroy()
        initTech = false
    }
}
swiperTechContainer();
window.addEventListener('resize', swiperTechContainer);

let techRepairSwiper = document.querySelector('.techRepair-block__swiper-wrapper')
let techRepairButton = document.querySelector('.techRepair-block__button');
let techRepairHidden = techRepairSwiper.querySelectorAll('.hidden');

techRepairButton.addEventListener('click', function () {
    if (techRepairButton.classList.contains('show-mode')) {
        techRepairButton.classList.toggle("show-mode");
        techRepairButton.classList.toggle("hide-mode");
        techRepairButton.textContent = ('Скрыть');
        techRepairButton.style.background = 'url(./img/hidemore-icon.svg) no-repeat -5px';
        for (let i = 0; i < techRepairHidden.length; i++) {
            techRepairHidden[i].classList.remove('hidden');
        }
    } else {
        techRepairButton.classList.toggle("show-mode");
        techRepairButton.classList.toggle("hide-mode");
        techRepairButton.textContent = ('Показать все');
        techRepairButton.style.background = 'url(./img/readmore-icon.svg) no-repeat -5px';
        for (let i = 0; i < techRepairHidden.length; i++) {
            techRepairHidden[i].classList.add('hidden');
        }
    }
});