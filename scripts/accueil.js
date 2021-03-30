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
      duration: 1.5, 
    }, '<');
   
  });
 
let timeout;
let body = document.body;

gsap.to('.bomb', {
  scrollTrigger: {
    start: 'top 50%' ,
    end: 'bottom 50%' ,
    scrub: true,
    trigger: '.bomb',
    pin: true,

    onUpdate: (e) => {
      body.classList.add('scrollup');
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        body.classList.remove('scrollup');
        body.classList.remove('scrolldown');
      }, 0)
      
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
  