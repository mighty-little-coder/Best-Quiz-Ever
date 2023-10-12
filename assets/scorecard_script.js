var renderHighScores = document.querySelector(".scoreLog")
var startAgain = document.querySelector(".doBetter")
var improveBtn = document.querySelector(".resetQuiz")
var scoreSheet = document.querySelector(".scoreBoard")
var renderAnswersEl = document.querySelector(".renderAllAnswers")
var renderCheckAns = document.querySelector(".checkAnswers")

document.querySelector(".scoreLog").addEventListener("click", goToHighscores)
document.querySelector(".doBetter").addEventListener("click", goToStart)
document.querySelector(".resetQuiz").addEventListener("click", goToStart)
document.querySelector(".renderAllAnswers").addEventListener("click", renderAnswers)

function goToStart() {
  window.location.href = "http://127.0.0.1:5500/index.html"
}

function goToHighscores() {
  scoreSheet.style.display = "flex";
  improveBtn.style.display = "flex";
  renderCheckAns.style.display = "none";
}

function renderAnswers() {
  scoreSheet.style.display = "none";
  if (renderCheckAns.style.display = "none") {
    renderCheckAns.style.display = "flex";
  } else if (renderCheckAns.style.display = "flex") {
    renderCheckAns.style.display = "none";
  }
}

// if (document.querySelector(".checkAnswers")) {
//   document.querySelector(".checkAnswers").style.display = "none";

// }