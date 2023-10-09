var timerEl = document.querySelector(".quizTimer");



function setTime() {
  var timeLeft = 3;
  var timerInterval = setInterval(() => {
    timeLeft--;
    timerEl.textContent = ("Time Remaining: " + timeLeft);

    if(!timeLeft) {
      clearTimeout(timerInterval)
      timerEl.textContent = "TIME IS UP!"
      timesUp();
    }

  }, 1000);
}

// FIX THIS SO THE TIMER STARTS AT TOP NUMBER
setTime();