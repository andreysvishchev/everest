var swiper = new Swiper(".hero__slider", {
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".portfolio__slider", {
  spaceBetween: 30,
  pagination: {
    el: ".portfolio__pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".portfolio__button-next",
    prevEl: ".portfolio__button-prev",
  },
});

var swiper = new Swiper(".letters__slider", {
  slidesPerView: 3,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".letters__pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".letters__button-next",
    prevEl: ".letters__button-prev",
  },
});

var swiper = new Swiper(".news__slider", {
  slidesPerView: 5,
  spaceBetween: 15,
  navigation: {
    nextEl: ".news__button-next",
    prevEl: ".news__button-prev",
  },
});

var swiper = new Swiper(".license__slider", {
  slidesPerView: 5,
  spaceBetween: 20,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".license__button-next",
    prevEl: ".license__button-prev",
  },
});

var swiper = new Swiper(".partners__slider", {
  slidesPerView: 7,
  spaceBetween: 100,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".partners__button-next",
    prevEl: ".partners__button-prev",
  },
});

AOS.init();

$(function () {

  let header = $('.header').offset().top;
  let headerHight = $('.header').innerHeight();

  $(window).scroll(function () {
    if ($(window).scrollTop() > header) {
      $('.header').addClass('header--fixed')
      $('.hero').css({
        paddingTop = headerHight
      })
    } else {
      $('.header').removeClass('header--fixed')
      $('.hero').css({
        paddingTop = 0
      })
    }
  });

  $('.menu-mobile').on('click', function () {
    $(this).toggleClass('active')
    $('.menu__list').toggleClass('menu__list--active')
  })
});