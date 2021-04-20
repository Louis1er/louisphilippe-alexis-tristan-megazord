let question = [
  {
    q: "L’album Toxicity de System of a Down a vendu combien de copies?",
    o1: '10 million',
    o2: '11 million',
    o3: '12 million',
    r: 3
  },
  {
    q: 'Le nom du groupe vient d’un poème que Daron Malakian a nommé « Victims of a Down ».',
    o1: "Vrai",
    o2: "Faux",
    r: 1
  },
  {
    q: 'Les quatre membres du groupe sont tous de quelle origine?',
    o1: 'Syriens',
    o2: 'Arméniens',
    o3: 'Libanais',
    r: 2
  },
  {
    q: 'System of a Down a joué leur chanson « Aerials » aux Grammys de 2003.',
    o1: "Vrai",
    o2: "Faux",
    r: 2
  },
  {
    q: 'Quand est-ce que le groupe a été formé?',
    o1: '1991',
    o2: '1994',
    o3: '1999',
    r: 2
  },
  {
    q: 'L’affiche de leur premier album est une affiche de la deuxième guerre mondiale.',
    o1: "Vrai",
    o2: "Faux",
    r: 1
  },
  {
    q: 'Combien d’albums est-ce que System of a Down a-t-il fait?',
    o1: '4',
    o2: '5',
    o3: '6',
    r: 2
  },
  {
    q: 'L’album Toxicity a été certifié platine en 8 semaines.',
    o1: "Vrai",
    o2: "Faux",
    r: 2
  },
  {
    q: 'Qui est le chanteur principal de System of a Down?',
    o1: "Daron Malakian",
    o2: "Shavo Odadjian",
    o3: 'Serj Tankian',
    r: 3
  },
  {
    q: 'Leur chanson « Bounce » a été présenté dans un film d’animation Pixar.',
    o1: "Vrai",
    o2: "Faux",
    r: 1
  },
  {
    q: 'Combien de nomination Grammy le groupe a-t-il eu?',
    o1: "7",
    o2: "3",
    o3: "4",
    r: 3
  },
  {
    q: 'Le chanteur principal, Serj Tankian, était un vendeur de souliers et a eu une compagnie de logiciels avant d’écrire de la musique.',
    o1: "Vrai",
    o2: "Faux",
    r: 1
  },

]

var quizBody = document.querySelector(".body-quiz");
var bonQuiz = document.querySelector(".quiz-bon");
var mauvaisQuiz = document.querySelector(".quiz-mauvais");
var finiQuiz = document.querySelector(".quiz-fini")

class Question {

  constructor(table) {
    this.index = 0;
    this.score = 0;
    this.question = table;
    this.question.forEach((question, value) => {
      this.html(question, value + 1);
    });

    this.setVisible(this.index);
    this.reponse();
  }
  html(A, value) {

    this.div = document.createElement("div");
    this.div.classList.add("question");
    quizBody.appendChild(this.div);

    this.strong = document.createElement("strong");
    this.strong.innerText = A.q;
    this.div.appendChild(this.strong);

    this.br = document.createElement("br");
    this.div.appendChild(this.br);

    if ("o1" in A) {

      let radio1 = document.createElement("input");
      radio1.setAttribute("type", "radio");
      radio1.setAttribute("name", "question" + value);
      radio1.setAttribute("value", "1");
      this.div.appendChild(radio1);

      let label1 = document.createElement("label");
      label1.innerText = A.o1;
      this.div.appendChild(label1);

      this.br = document.createElement("br");
      this.div.appendChild(this.br);
    }

    if ("o2" in A) {

      let radio2 = document.createElement("input");
      radio2.setAttribute("type", "radio");
      radio2.setAttribute("name", "question" + value);
      radio2.setAttribute("value", "2");
      this.div.appendChild(radio2);

      let label2 = document.createElement("label");
      label2.innerText = A.o2;
      this.div.appendChild(label2);

      this.br = document.createElement("br");
      this.div.appendChild(this.br);
    }

    if ("o3" in A) {

      let radio3 = document.createElement("input");
      radio3.setAttribute("type", "radio");
      radio3.setAttribute("name", "question" + value);
      radio3.setAttribute("value", "3");
      this.div.appendChild(radio3);

      let label3 = document.createElement("label");
      label3.innerText = A.o3;
      this.div.appendChild(label3);

      this.br = document.createElement("br");
      this.div.appendChild(this.br);
    }

  }

  setVisible(nombre) {

    let divA = document.querySelectorAll(".question");
    divA.forEach((q) => {
      q.classList.remove("is-visible");
      divA[nombre].classList.add("is-visible");
    });
  }

  reponse() {

    let r = document.querySelectorAll("input[type = 'radio']");
    r.forEach((radio) => {

      radio.addEventListener("change", () => {
        console.log(this.index);
        if (radio.checked) {
          if (radio.value == this.question[this.index].r) {
            this.bonneReponse();
          } else {
            this.mauvaiseReponse();
            if (this.score == -1) { this.score = 0 }
          }
          if (this.index < this.question.length -1) {
            this.index++;
            this.setVisible(this.index);
          }
          else{
            this.quizTerminer()
            this.index
          }
        }
      });
    });
  }

  bonneReponse() {
    gsap.from('.checkmark',
      { scale: 0, duration: 1, rotate: 360, }
    );
    gsap.to('.checkmark',
      { opacity: 1 }
    );
    gsap.to('.checkmark',
      { opacity: 0, delay: 3 }
    );
    gsap.from('.serj-content',
      { scale: 0, delay: 0.5, rotate: 360, }
    );
    gsap.to('.serj-content',
      { opacity: 1 }
    );
    gsap.to('.serj-content',
      { opacity: 0, delay: 3 }
    );
    gsap.from('.txt-good',
      { scale: 0, delay: 0.8, ease: "bounce", onComplete: () => console.log("fini") }
    );
    gsap.to('.txt-good',
      { opacity: 1, }
    );
    gsap.to('.txt-good',
      { opacity: 0, delay: 3 }
    );
    this.score++;
  }

  mauvaiseReponse() {
    gsap.from('.x',
      { scale: 0, duration: 1, rotate: 360, }
    );
    gsap.to('.x',
      { opacity: 1 }
    );
    gsap.to('.x',
      { opacity: 0, delay: 3 }
    );
    gsap.from('.serj',
      { scale: 0, delay: 0.5, rotate: 360, }
    );
    gsap.to('.serj',
      { opacity: 1 }
    );
    gsap.to('.serj',
      { opacity: 0, delay: 3 }
    );
    gsap.from('.txt-bad',
      { scale: 0, delay: 0.8, ease: "bounce", onComplete: () => console.log("fini") }
    );
    gsap.to('.txt-bad',
      { opacity: 1, }
    );
    gsap.to('.txt-bad',
      { opacity: 0, delay: 3 }
    );

  }
  quizTerminer() {
    gsap.from('.toxic',
      { scale: 0, duration: 1, translateX: -360, }
    );
    gsap.to('.toxic',
      { opacity: 1 }
    );
    gsap.to('.toxic',
      { opacity: 0, delay: 3, translateX: 360, scale: 0 }
    );
    gsap.from('.serj-felicite',
      { scale: 0, delay: 0.5, translateX: -360, }
    );
    gsap.to('.serj-felicite',
      { opacity: 1 }
    );
    gsap.to('.serj-felicite',
      { opacity: 0, delay: 3, translateX: 360, scale: 0 }
    );
    gsap.from('.txt-fini',
      { scale: 0, delay: 0.8, ease: "bounce", onComplete: () => console.log("fini") }
    );
    gsap.to('.txt-fini',
      { opacity: 1, }
    );
    gsap.to('.txt-fini',
      { opacity: 0, delay: 3 }
    );
  }
}

new Question(question);


const play = document.querySelector('.btn');
var end = 'fini'




