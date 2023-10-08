var timerEl = document.querySelector(".quizTimer");

var timeLeft = 45;

function setTime() {
  var timerInterval = setInterval(function() {
    timeLeft--;
    timerEl.textContent = "Time Remaining: " + timeLeft;

    if(timeLeft === 0) {
      clearTimeout(timerInterval);
      timesUp();
    }

  }, 1000);
}