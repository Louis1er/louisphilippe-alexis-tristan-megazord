

gsap.registerPlugin(ScrollTrigger);

const sectionList = document.querySelectorAll(".section-li");
  sectionList.forEach((banner) => { 
  const image1= banner.querySelector(".album1");
  const image2= banner.querySelector(".album2");
  const title = banner.querySelector(".title");

  gsap.timeline({
    scrollTrigger:  {
      trigger: image1, 
      trigger: image2, 
      markers: true,
      toggleActions: "play play none none"
    }
   
  })


  .from(image1, {
    x: '200%',
    duration: 3,
  })

  .from(image2,{
    x: '-100%',
    duration: 2,
  })

  
  


  .from(title, {
    opacity: 0,
    x: '100px',
  })
})