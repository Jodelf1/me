const swiper = new Swiper('.slider', {

    spaceBetween: 10,
    grabCursor: true,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        0:{
            slidesPerview: 1
        },
        620:{
            slidesPerview: 2
        },
        1024:{
            slidesPerview: 3
        },   
    }
  });