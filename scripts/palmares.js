var swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    992: {
      slidesPerView: 2,
    }
  }
});

gsap.registerPlugin(ScrollTrigger);



const sectionNom = document.querySelectorAll('section');
sectionNom.forEach((banner) => {
  const Nom = banner.querySelector('h1');
  const swiper = banner.querySelector('.swiper-container');
  const vid = banner.querySelector('.video');
  gsap.timeline({
    scrollTrigger: {
      trigger: banner,
      markers: true,
      toggleActions: 'play complete reverse reset',
    }
  })
    .from(Nom, {
      x: '200%',
      duration: 2,
      opacity: 0,
    })
    .from(swiper, {
      x: '200%',
      duration: 1,
      opacity: 0,
    })
    .from(vid, {
      x: '200%',
      duration: 2,
      opacity: 0,
    }, '<' );
})

const sectionList = document.querySelectorAll(".card");
sectionList.forEach((banner) => {
  gsap.timeline({
    scrollTrigger: {
      trigger: banner,
      markers: true,
      toggleActions: 'play complete reverse reset',
    }
  })
    .from(banner, {
      x: '200%',
      duration: 2,
      opacity: 0,
    }, '<' );
})

