$(document).ready(function () {
    window.onscroll = function () {
        myFunction();

    };
    let nav = document.querySelector("header");
    let prt = nav.parentElement;
    let sticky = nav.offsetTop+1;
    function myFunction() {
        let wdth = window.innerWidth
        if (wdth < 257) {
            if (window.pageYOffset > sticky) {
                nav.classList.add("sticky");
            } else {
                nav.classList.remove("sticky");
            }
        } else {
            if (window.pageYOffset > sticky) {
                nav.classList.add("sticky");
            } else {
                nav.classList.remove("sticky");
            }
        }
    }
});



$(document).ready(function () {
    $('.open-menu').on('click', function () {
        $(this).toggleClass('close-menu');
        if ($(this).hasClass('close-menu')) {
            $('.nav-menu').addClass('transition-menu');
            $('body').addClass('body_fix');
        } else {
            $('.nav-menu').addClass('menu-width');
            $('body').removeClass('body_fix');
            $('.nav-menu').removeClass('transition-menu');
        }
    });
    $('.head-menu a').on('click', function () {
        $('.nav-menu').addClass('menu-width');
        $('body').removeClass('body_fix');
        $('.nav-menu').removeClass('transition-menu');
        $('.open-menu').removeClass('close-menu');
    })
});

$('.menu-scroll a').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
        && location.hostname == this.hostname) {
        let $target = $(this.hash);
        $target = $target.length && $target
            || $('[name=' + this.hash.slice(1) +']');
        if ($target.length) {
            let targetOffset = $target.offset().top-130;
            $('html,body')
                .animate({scrollTop: targetOffset}, 1000);
            return false;
        }
    }
});

$('.open-reviews-box').click(function () {
    $(this).toggleClass('open-reviews-act');
    $('.about-people-cnt').toggleClass('about-people-act');
})

$(function () {
    let Accordion = function (el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;
        let links = this.el.find('.link');
        links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
    };

    Accordion.prototype.dropdown = function (e) {
        let $el = e.data.el;
        $this = $(this),
            $next = $this.next();
        $next.slideToggle();
        if (!e.data.multiple) {

            $el.find('.submenu').not($next).slideUp();
        }
        if (!$this.hasClass('open')) {
            $('.link').each(function () {
                $(this).removeClass('open')
            })
            $this.addClass('open')
        } else {
            $this.removeClass('open')
        }
    }

    let accordion = new Accordion($('#accordion'), false);
});








let selectionSwiper = new Swiper(".selection-slider", {
    slidesPerView: 3,
    spaceBetween: 14,
    breakpoints: {
        '1199': {
            slidesPerView: 3,
            spaceBetween: 14,
        },
        '991': {
            slidesPerView: 3,
            spaceBetween: 14,
        },
        '620': {
            slidesPerView: 2,
            spaceBetween: 14,
        },
        '320': {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 10,
        },
    },
    pagination: {
        el: ".selection-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".selection-button-next",
        prevEl: ".selection-button-prev",
    },
});





let examplesSwiper = new Swiper(".examples-slider", {
    slidesPerView: 3,
    spaceBetween: 14,
    loop: true,
    centeredSlides: true,
    breakpoints: {
        '1199': {
            slidesPerView: 3,
            spaceBetween: 14,
        },
        '991': {
            slidesPerView: 2,
            spaceBetween: 14,
        },
        '575': {
            slidesPerView: 1,
            spaceBetween: 14,
        },
        '320': {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 10,
            centeredSlides: true,

        },
    },
    pagination: {
        el: ".examples-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".examples-button-next",
        prevEl: ".examples-button-prev",
    },
});




let reviewsSwiper = new Swiper(".reviews-slider", {
    slidesPerView: 5,
    spaceBetween: 12,
    loop: true,
    centeredSlides: true,
    breakpoints: {
        '1480': {
            slidesPerView: 5,
            spaceBetween: 12,
        },
        '1299': {
            slidesPerView: 4,
            spaceBetween: 12,
        },
        '991': {
            slidesPerView: 3,
            spaceBetween: 12,
        },
        '767': {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 10,
            centeredSlides: false,
        },
        '570': {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 10,
            centeredSlides: false,
        },
        '320': {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 10,
            centeredSlides: false,
        },
    },
    pagination: {
        el: ".reviews-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".reviews-button-next",
        prevEl: ".reviews-button-prev",
    },
});



let giftSwiper = new Swiper(".gift-mobile-slider", {
    slidesPerView: 2,
    spaceBetween: 10,
    breakpoints: {
        '575': {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        '320': {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 10,
            centeredSlides: false,
        },
    },
    pagination: {
        el: ".gift-mobile-pagination",
        clickable: true,
    },
});








