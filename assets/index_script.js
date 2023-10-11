var goQuizBtn = document.querySelector(".goButton")

document.querySelector(".goButton").addEventListener("click", initiateQuiz)

function initiateQuiz() {
  window.location.href = "http://127.0.0.1:5500/quiz.html"
}




// When i open this webpage
//then there is a start button on top of the page
//this button then turns into a timer when i click it.
//this means the start button disappears, the timer appears and the timer starts all at the same time