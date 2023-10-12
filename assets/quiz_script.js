var timerEl = document.querySelector(".quizTimer");
var startBtn = document.querySelector(".startButton")
var questionEl = document.querySelector(".questionBox")
var answerEl = document.querySelector(".answersArea")
var scoreNav = document.querySelector(".quizEndScore")
var startAgain = document.querySelector(".doBetter")
var goQuizBtn = document.querySelector(".goButton")
var questionTitleEl = document.querySelector("#question")
var answerTabsEl = document.querySelector("#answerTabs")
var questionIndex = 0
var questions = [
  {
    questionTitle: "What is \"aperture\"?",
    answersArray: ["Fun indie game available for free on Steam", "Opening within the lens that controls amount of light that enters the camera's sensor", "A tiny apartment", "The record button"],
    correctAnswer: "Opening within the lens that controls amount of light that enters the camera's sensor"
  },

  {
    questionTitle: "What is \"depth of field\"?",
    answersArray: ["The distance between the closest and farthest objects in frame", "How far a quarterback can successfully complete a pass", "How long a lens is", "How far a lens can zoom"],
    correctAnswer: "Four"
  },

  {
    questionTitle: "Which brand has the largest array of lens available?",
    answersArray: ["Sony", "Lumix", "Canon", "Fujifilm"],
    correctAnswer: "Canon"
  },

]

document.querySelector(".startButton").addEventListener("click", setTime)
document.querySelector(".startButton").addEventListener("click", quizStart)
document.querySelector(".quizEndScore").addEventListener("click", goToScores)

function quizStart() {
  startBtn.style.display = "none";
  timerEl.style.display = "flex";
  questionEl.style.display = "flex";
  answerEl.style.display = "flex";
  generateQuestion()
}

function generateQuestion() {
  questionTitleEl.textContent = questions[questionIndex].questionTitle;
  answerTabsEl.innerHTML = "";
  questions[questionIndex].answersArray.forEach(function (choice, i) {
    var tempBtn = document.createElement("button");
    tempBtn.textContent = choice;
    tempBtn.setAttribute("class", "answerBtn")
    tempBtn.setAttribute("value", choice);
    tempBtn.onclick = checkAnswer;
    answerTabsEl.appendChild(tempBtn)
  })
}

function checkAnswer() {
  var correctAnswer = questions[questionIndex].correctAnswer
  var selectedAnswer = this.value
  // 'this.value' is referring to the element used to call it's function, or in other terms, the elemnt this function is connected to. In this case, that would be the temp button. The value of 'value' means it is now referring to the value of the temp button (if btn 3 was click, it uses btn 3 as the input). 
  questionIndex++;
  generateQuestion();
}

function setTime() {
  var timeLeft = 7;
  var timerInterval = setInterval(() => {
    timeLeft--;
    timerEl.textContent = ("Time Remaining: " + timeLeft);


    if (!timeLeft) {
      clearTimeout(timerInterval)
      timerEl.textContent = "TIME IS UP!"
      questionEl.style.display = "none";
      answerEl.style.display = "none";
      scoreNav.style.display = "flex";
    }

  }, 1000);
}

function goToScores() {
  window.location.href = "http://127.0.0.1:5500/scorecard.html"
}