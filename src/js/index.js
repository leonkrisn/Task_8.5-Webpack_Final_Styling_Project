import '../scss/style.scss'

console.log('It works!')

const swiper = new Swiper('.swiper', {
  // Optional parameters
  // direction: 'horizontal',
  loop: true,
  // spaceBetween: 30,

  // If we need pagination
  //   USING THIS
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },

  breakpoints: {
    0: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 3
    },
    1120: {
      slidesPerView: 4
    },
        1366: {
      slidesPerView: 5
    }
  }

  //   // And if we need scrollbar
  //   scrollbar: {
  //     el: '.swiper-scrollbar',
  //   },
})
