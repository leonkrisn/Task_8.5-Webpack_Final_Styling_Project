import '../scss/style.scss'

console.log('It works!')



new Swiper('.card-wrapper', {
  // Optional parameters
  // direction: 'horizontal',
  loop: true,
  // spaceBetween: 30,

  // If we need pagination
    //   USING THIS
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // breakpoints: {
  //   0: {
  //       slidePerView: 1
  //   },
  //   768: {
  //       slidePerView: 3
  //   },
  //   1024: {
  //       slidePerView: 4
  //   },

  // }

//   // And if we need scrollbar
//   scrollbar: {
//     el: '.swiper-scrollbar',
//   },
});