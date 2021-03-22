

gsap.registerPlugin(ScrollTrigger);

const sectionList = document.querySelectorAll(".section-li");
  sectionList.forEach((banner) => { 
  const animation= banner.querySelector(".anim_scroll");
  const animation_left= banner.querySelector(".anim_scroll_left");
  
  

  gsap.timeline({
    scrollTrigger:  {
      trigger: banner, 
      markers: true,
      toggleActions: 'play restart play restart',
     
    }
   
  })


  .from(animation, {
    x: '200%',
    duration: 3, 
  })

  .from(animation_left, {
    x: '-100%',
    duration: 3, 
  }, '<' );

 
  

})