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
      duration: 2, 
    }, '<');
   
  });

let timeout;
let body = document.body;

gsap.to('.section_index', {
  scrollTrigger: {
    markers: true,
    trigger: '.section_index',
    onUpdate: (e) => {
      body.classList.add('scrollup');
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        body.classList.remove('scrollup');
        body.classList.remove('scrolldown');
      }, 100)
      
      if(e.direction == 1) {
        body.classList.add('scrolldown');
        body.classList.remove('scrollup');
      } 
      if(e.direction == -1) {
        body.classList.add('scrollup');
        body.classList.remove('scrolldown');
      }
    }
  }
})
  