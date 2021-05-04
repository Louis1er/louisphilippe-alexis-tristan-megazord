fetch('http://megazordsoad.com/public_html/soad-api/wp-json/wp/v2/posts')
.then(function(response) {
  return response.json();
})
.then(function(question){
  new Question(question);
})
.catch(function() {
  console.log('Une erreur est survenue')
})

var quizBody = document.querySelector(".body-quiz");
var bonQuiz = document.querySelector(".quiz-bon");
var mauvaisQuiz = document.querySelector(".quiz-mauvais");
var finiQuiz = document.querySelector(".quiz-fini");


class Question {

  constructor(table) {
    this.index = 0;
    this.score = 0;
    this.question = table;
    console.log(table)
    this.question.forEach((question, value) => {
      this.html(question, value + 1);
    });

    this.setVisible(this.index);
    this.reponse();
  }
  
  html(questionobj, value) {

    this.div = document.createElement("div");
    this.div.classList.add("question");
    quizBody.appendChild(this.div);

    this.strong = document.createElement("strong");    
    this.strong.innerText = questionobj.acf.q;
    
    this.div.appendChild(this.strong);

    this.br = document.createElement("br");
    this.div.appendChild(this.br);

    if ("o1" in questionobj.acf) {

      let radio1 = document.createElement("input");
      radio1.setAttribute("type", "radio");
      radio1.setAttribute("name", "question" + value);
      radio1.setAttribute("value", "1");
      this.div.appendChild(radio1);

      let label1 = document.createElement("label");
      label1.innerText = questionobj.acf.o1;
      this.div.appendChild(label1);

      this.br = document.createElement("br");
      this.div.appendChild(this.br);
    }

    if ("o2" in questionobj.acf) {

      let radio2 = document.createElement("input");
      radio2.setAttribute("type", "radio");
      radio2.setAttribute("name", "question" + value);
      radio2.setAttribute("value", "2");
      this.div.appendChild(radio2);

      let label2 = document.createElement("label");
      label2.innerText = questionobj.acf.o2;
      this.div.appendChild(label2);

      this.br = document.createElement("br");
      this.div.appendChild(this.br);
    }

    if (questionobj.acf.o3!=="") {

      let radio3 = document.createElement("input");
      radio3.setAttribute("type", "radio");
      radio3.setAttribute("name", "question" + value);
      radio3.setAttribute("value", "3");
      this.div.appendChild(radio3);

      let label3 = document.createElement("label");
      label3.innerText = questionobj.acf.o3;
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
          if (radio.value == this.question[this.index].acf.r) {
            this.bonneReponse();
          } else {
            this.mauvaiseReponse();
            if (this.score == -1) { this.score = 0 }
          }
          if (this.index <= this.question.length - 1) {
            if(this.index == this.question.length - 1) {
              this.div.classList.add("last");
              this.div.innerText = 'Pointage:';
              this.strong.innerText = this.score + '/' + this.question.length;
              this.div.appendChild(this.br);
              this.div.appendChild(this.strong);
              this.quizTerminer()
              bonQuiz.remove();
              mauvaisQuiz.remove();
            }
            this.index++;
            this.setVisible(this.index);
          }
          else {
            this.quizTerminer()
            bonQuiz.remove();
            mauvaisQuiz.remove();
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
      { scale: 0, delay: 0.8, ease: "bounce"}
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
      { scale: 0, delay: 0.8, ease: "bounce"}
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
      { scale: 0, delay: 0.8, ease: "bounce"}
    );
    gsap.to('.txt-fini',
      { opacity: 1, }
    );
    gsap.to('.txt-fini',
      { opacity: 0, delay: 3 }
    );
  }
}




const play = document.querySelector('.btn');
var end = 'fini'




