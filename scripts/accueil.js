const swiper = new Swiper('.swiper-container', {
    pagination: {
      el: '.swiper-pagination',
    },
  });

  gsap.registerPlugin(ScrollTrigger);

  let section = document.querySelectorAll('.section-index');
  
  section.forEach(section => {
    const image = section.querySelector('.image');
    const title = section.querySelector('.title');
    const year = section.querySelector('.year');
    
    gsap.timeline({
      scrollTrigger: {
        markers: true,
        start: 'bottom bottom',
        trigger: banner,
        toggleActions: 'play none none none',
      }
    })
    .from(image, {scale: 2})
    .from(title, {y: 100, opacity: 0})
    .from(year, {opacity: 0})
  });