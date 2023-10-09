var timerEl = document.querySelector(".quizTimer");
var questions = [
  {
    question: "What is \"aperture\"?",
    answers: [
      { text: "Opening within the lens that controls amount of light that enters the camera's sensor", correct: true }
      { text: "Fun indie game available for free on Steam", correct: false }
      { text: "A tiny apartment", correct: false }
      { text: "The record button", correct: false }
    ]
  },
  {
    question: "What is \"depth of field\"?",
    answers: [
      { text: "Depth of focus within the lens", correct: true }
      { text: "How far a quarterback can successfully complete a pass", correct: false }
      { text: "Physical distance covered within frame", correct: false }
      { text: "How far a lens can zoom", correct: false }
    ]
  }
];

var questionEl = document.getElementById("question");
var answerEl = document.getElementById("answerTabs");
var nextEl = document.getElementById("nextBtn");

let currentQuestionIndex = 0;
let score = 0;

function quizStart() {
  currentQuestionIndex = 0;
  score = 0;
  nextEl.innerHTML = "Next";
  displayQuiz();
}

function displayQuiz() {
  let currentQuestion = questions[currentQuestionIndex];
  let questionNum = currentQuestionIndex + 1;
  questionEl.innerHTML = questionNum + ". " + currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerBtn.appendChild(button);
  });
}

startQuiz()

function setTime() {
  var timeLeft = 45;
  var timerInterval = setInterval(() => {
    timeLeft--;
    timerEl.textContent = ("Time Remaining: " + timeLeft);

    if (!timeLeft) {
      clearTimeout(timerInterval)
      timerEl.textContent = "TIME IS UP!"
      timesUp();
    }

  }, 1000);
}

// FIX THIS SO THE TIMER STARTS AT TOP NUMBER
setTime();

