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
document.querySelector(".doBetter").addEventListener("click", startAgain)
document.querySelector(".goButton").addEventListener("click", goQuizBtn)



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

function goQuizBtn() {
  window.location.href = "http://127.0.0.1:5500/quiz.html"

}

function goToScores() {
  window.location.href = "http://127.0.0.1:5500/scorecard.html"
}

function startAgain() {
  window.location.href = "http://127.0.0.1:5500/index.html"
}


// setTime();


// When i open this webpage
//then there is a start button on top of the page
//this button then turns into a timer when i click it.
//this means the start button disappears, the timer appears and the timer starts all at the same time