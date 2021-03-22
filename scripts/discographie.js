const swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    effect: "flip",
    autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        }
  })

  
gsap.registerPlugin(ScrollTrigger);

const sectionList = document.querySelectorAll(".section-li");
  sectionList.forEach((banner) => { 
  const animation= banner.querySelector(".anim_scroll");
  const animation_left= banner.querySelector(".anim_scroll_left");
  
  

  gsap.timeline({
    scrollTrigger:  {
      trigger: banner, 
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

  