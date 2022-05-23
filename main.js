/* SCROLL */
function onScroll() {
    if (scrollY > 0) {
        menu.classList.add('scroll')
    } else {
        menu.classList.remove('scroll')
    }
}

/* Menu */
function openMenu() {
    document.body.classList.add('menu-expanded')
}

function closeMenu() {
    document.body.classList.remove('menu-expanded')
}

/* FAQ */
/* Funções que incluem e/ou removem a classe que expande a 'pergunta' */
function openQuestion(param, id) {
    console.log(id)
    param.classList.add('question-expanded')
}

function closeQuestion(param) {
    param.classList.remove('question-expanded')
}

/* Swiper carrosel*/
const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    mousewheel: true,
    keyboard: true,
    loop: true,
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination'
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    }
})