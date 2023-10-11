var timerEl = document.querySelector(".quizTimer");
var startBtn = document.querySelector(".startButton")
var questionEl = document.querySelector(".questionBox")
var answerEl = document.querySelector(".answersArea")
var scoreNav = document.querySelector(".quizEndScore")
var startAgain = document.querySelector(".doBetter")
var goQuizBtn = document.querySelector(".goButton")

document.querySelector(".startButton").addEventListener("click", setTime)
document.querySelector(".startButton").addEventListener("click", quizStart)
document.querySelector(".quizEndScore").addEventListener("click", goToScores)

function quizStart() {
  startBtn.style.display = "none";
  timerEl.style.display = "flex";
  questionEl.style.display = "flex";
  answerEl.style.display = "flex";
}

function setTime() {
  var timeLeft = 3;
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