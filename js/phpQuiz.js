fetch(
  "https://quizapi.io/api/v1/questions?apiKey=PVmS7iAdYPrIl6Se88KHtvLXEyk0sspZy0eILpNX&limit=20&tags=PHP"
)
  .then((res) => res.json())
  .then((data) => {
    //   select dom element
    let quizjson = data;
    let quizLength = quizjson.length;
    let qustionNumber = document.querySelector(".qustionNumber");
    let question = document.querySelector(".question");
    let answerLabel = document.querySelectorAll(".answer label");
    let submit = document.querySelector(".submit");
    let next = document.querySelector(".next");
    let count = 0;
    let correct = document.querySelector(".correct");

    qustionNumber.innerHTML = `${quizLength}`;
    question.innerHTML = quizjson[0].question;
    answerLabel[0].textContent = `(a) ${quizjson[count].answers.answer_a}`;
    answerLabel[1].textContent = `(b) ${quizjson[count].answers.answer_b}`;
    answerLabel[2].textContent = `(c) ${quizjson[count].answers.answer_c}`;
    answerLabel[3].textContent = `(d) ${quizjson[count].answers.answer_d}`;

    // next function
    next.onclick = () => {
      correct.setAttribute("style", "display:none;");
      if (count <= 20) {
        count++;
        qustionNumber.innerHTML = `${quizLength}`;
        question.innerHTML = quizjson[count].question;
        answerLabel[0].textContent = `(a) ${quizjson[count].answers.answer_a}`;
        answerLabel[1].textContent = `(b) ${quizjson[count].answers.answer_b}`;
        answerLabel[2].textContent = `(c) ${quizjson[count].answers.answer_c}`;
        answerLabel[3].textContent = `(d) ${quizjson[count].answers.answer_d}`;
        // console.log(quizjson[count].correct_answer);
        // console.log(count);
      } else {
        next.setAttribute("style", "background: var(--bg);color:var(--font);");
      }
    };
    // submit
    submit.onclick = () => {
      let entries = Object.entries(quizjson[count].correct_answers);
      for (let i = 0; i < entries.length; i++) {
        if (entries[i][1] === "true") {
          correct.innerHTML = entries[i][0];
        }
      }
      //   correct.innerHTML = quizjson[count].correct_answer;
      if (correct.style.display == "none") {
        correct.setAttribute("style", "display:block;");
        submit.innerHTML = "Hide Answer";
      } else {
        correct.setAttribute("style", "display:none;");
        submit.innerHTML = "Show Answer";
      }
    };
  });
