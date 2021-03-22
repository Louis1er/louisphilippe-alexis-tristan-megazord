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
      scrub: true,
      start: 'top 75%',
      end: 'bottom 25%',
      markers: true,
      toggleActions: 'play complete reverse reset',
     
    }
   
  })


  .from(animation, {
    x: '200%',
    duration: 3, 
  })

  .from(animation_left, {
    x: '-110%',
    duration: 3, 
  }, '<' );

 
  

})

  