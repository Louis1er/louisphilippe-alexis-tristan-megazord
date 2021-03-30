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
  const titre= banner.querySelector(".ol");
  const video= banner.querySelector(".video");
  const titrevideo= banner.querySelector(".titre-video");
  const button= banner.querySelector(".button");
  
  

  gsap.timeline({
    scrollTrigger:  {
      trigger: banner, 
      toggleActions: 'play complete reverse reset',
     
    }
   
  })
  .from(titre, {
      x: '-100%',
      duration: 0.5, 
      opacity: 0,
    })

    .from(button, {
      duration: 0.5, 
      opacity: 0,
    })

    .from(titrevideo, {
      x: '-100%',
      duration: 1, 
      opacity: 0,
    })

  .from(animation, {
    x: '100%',
    duration: 0.8, 
    opacity: 0,
  })

  .from(video, {
      x: '-100%',
      duration: 1, 
      opacity: 0,
    })

  .from(animation_left, {
    x: '-50%',
    duration: 0.5, 
    opacity: 0,
  }, '<' );

})






let timeout;
let body = document.body;

gsap.to('.baril', {
  scrollTrigger: {
    start: 'top 50%' ,
    end: 'bottom 50%' ,
    scrub: true,
    trigger: '.baril',
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