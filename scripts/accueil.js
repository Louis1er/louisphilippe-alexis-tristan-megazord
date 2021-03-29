const swiper = new Swiper('.swiper-container', {
    pagination: {
      el: '.swiper-pagination',
    },
  });

  gsap.registerPlugin(ScrollTrigger);

  const sectionIndex = document.querySelectorAll(".section_index");
    sectionIndex.forEach((banner) => { 
    const animation= banner.querySelectorAll(".anim_scroll");
    
    
  
    gsap.timeline({
      scrollTrigger:  {
        trigger: banner, 
        toggleActions: 'play complete reverse reset',
       
      }
     
    })
    .from(animation, {
      x: '200%',
      duration: 3, 
    }, '<');
   
  });
  