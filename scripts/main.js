

gsap.registerPlugin(ScrollTrigger);

const sectionList = document.querySelectorAll(".section-li");
  sectionList.forEach((section) => { 
  const swiper= section.querySelector(".album1");
  const title = section.querySelector(".title");

  gsap.timeline({
    scrollTrigger: section,
    markers: true,
    toggleActions: 'reset complete reverse',
  })
  .from(swiper, {
    scale: 2,
    duration: 1,
  })
  .from(title, {
    opacity: 0,
    x: '100px',
  })
})