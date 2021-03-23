var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      992: {
        slidesPerView: 2,
      }
    }
  });

  gsap.registerPlugin(ScrollTrigger);

const sectionList = document.querySelectorAll("section");
  sectionList.forEach((banner) => { 
  const animation= banner.querySelector(".card");
  const animation_left= banner.querySelector(".anim_right_p");
  
  

  gsap.timeline({
    scrollTrigger:  {
      trigger: '.card', 
      markers: true,
      toggleActions: 'play complete reverse reset',
     
    }
   
  })


  .from(animation, {
    x: '200%',
    duration: 2, 
    opacity: 0,
  })

  .from(animation_left, {
    x: '-110%',
    duration: 2, 
    opacity: 0,
  }, '<' );

 
  

})