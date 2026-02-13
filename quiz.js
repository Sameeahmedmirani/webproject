const quiz = [
  {
    question: "Which keyword declares a block-scoped variable that can be reassigned?",
    option: ["var", "let", "const", "static"],
    correct: 1
  },
  {
    question: "Which method selects the first element that matches a CSS selector?",
    option: ["getElementById()", "getElementsByClassName()", "querySelector()", "queryAll()"],
    correct: 2
  },
  {
    question: "What is the output type of JSON.parse('{\"a\":1}')?",
    option: ["string", "number", "object", "array"],
    correct: 2
  },
  {
    question: "Which operator checks both value and type equality?",
    option: ["==", "=", "===", "!==="],
    correct: 2
  },
  {
    question: "Which of these creates an arrow function in JavaScript?",
    option: ["function foo() => {}", "() => {}", "=> function() {}", "func => {}"],
    correct: 1
  },
  {
    question: "Which array method returns a new array with results of calling a function on every element?",
    option: ["filter()", "forEach()", "map()", "reduce()"],
    correct: 2
  },
  {
    question: "What is the result of `typeof null` in JavaScript?",
    option: ["'null'", "'object'", "'undefined'", "'boolean'"],
    correct: 1
  },
  {
    question: "Which event fires when a form is submitted?",
    option: ["onclick", "onsubmit", "onchange", "oninput"],
    correct: 1
  },
  {
    question: "Which promise method is used to handle errors?",
    option: [".then()", ".finally()", ".catch()", ".resolve()"],
    correct: 2
  },
  {
    question: "Which built-in method converts a JavaScript object to a JSON string?",
    option: ["JSON.parse()", "JSON.stringify()", "Stringify()", "Object.toJSON()"],
    correct: 1
  }

];
  quiz.sort(()=>Math.random() -0.5);
let currentquestion=0;
let score=0;
const progress =document.getElementById("progress")
 const question1=document.getElementById("Question");
 const optionbutton=document.querySelectorAll(".Option");
 const score1=document.getElementById("Score");


 funquestion();

  function funquestion(){
    const q=quiz[currentquestion];
    question1.innerText=q.question;
    progress.innerText= `Question ${currentquestion + 1} of ${quiz.length}`;
    optionbutton.forEach((button,index)=>{
        button.innerText=q.option[index];
        button.disabled=false;
        button.classList.remove("correct", "wrong");
    });
    score1.innerText="";
    document.getElementById("nextbutton").disabled=true;

  }
  function checkanswer(selected){
    const correct=quiz[currentquestion].correct;
     if (selected ===correct ){
        score++;
        optionbutton[selected].classList.add('correct');
     }
     else {
        optionbutton[selected].classList.add('wrong');
        optionbutton[correct].classList.add('correct');
     }
      optionbutton.forEach(button=>button.disabled=true);
      document.getElementById("nextbutton").disabled=false;
      score1.innerText="Score: "+score;
  }
  function nextquestion() {
    currentquestion++;

    if (currentquestion < quiz.length) {
        funquestion();
    } else {
        question1.innerText = "Quiz Finished 🎉";
    document.getElementById("options").style.display = "none";

    let percentage = Math.round((score / quiz.length) * 100);

    score1.innerText = `Your Score: ${score}/${quiz.length} (${percentage}%)`;

    document.getElementById("nextbutton").innerText = "Restart Quiz";
    document.getElementById("nextbutton").onclick = () => location.reload();
      
    }
}