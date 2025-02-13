const swiper = new Swiper(".swiper", {
  
  pagination: {
    el: ".swiper-pagination",
    
  },
  
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },

  slidesPerView: 2,
  
  pagination: {
    el: ".swiper-pagination",
  },

  autoplay: {
      delay: 5000,
    },

    loop: true,
   });
  