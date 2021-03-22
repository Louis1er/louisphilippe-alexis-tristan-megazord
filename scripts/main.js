import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

  const sectionslist = document.querySelectorAll("section");
  sectionslist.forEach((section) => { 
  const image = section.querySelector(".album1");
  const ol = section.querySelector("ol");
  const li = section.querySelector("li");
                    
  gsap.timeline({
    scrollTrigger: section,
    markers: true,
    start: 'bottom bottom',
    trigger: section,
    
  })
  .from(image, {
    scale: 2,
    duration: 1,
  })
  .from(ol, {
    opacity: 0,
    y: '100px',
  })
  .from(li, {
    opacity: 0,
  })
})

GSDevTools.create();