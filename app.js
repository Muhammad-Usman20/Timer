let countdown;
let totalSeconds = 0;
let isRunning = false;

function updateDisplay() {
  const hrs = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
  const mins = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
  const secs = String(totalSeconds % 60).padStart(2, '0');
  document.getElementById('display').textContent = `${hrs}:${mins}:${secs}`;
}

function startCountdown() {
  if (isRunning) return;

  const hours = parseInt(document.getElementById('hoursInput').value) || 0;
  const minutes = parseInt(document.getElementById('minutesInput').value) || 0;
  const seconds = parseInt(document.getElementById('secondsInput').value) || 0;

  if (totalSeconds === 0) {
    totalSeconds = hours * 3600 + minutes * 60 + seconds;
  }

  if (totalSeconds <= 0) {
    alert("Please enter a valid time!");
    return;
  }

  isRunning = true;
  countdown = setInterval(() => {
    if (totalSeconds <= 0) {
      clearInterval(countdown);
      isRunning = false;
      alert("⏰ Time's up!");
      return;
    }
    totalSeconds--;
    updateDisplay();
  }, 1000);
}

function pauseCountdown() {
  clearInterval(countdown);
  isRunning = false;
}

function resetCountdown() {
  pauseCountdown();
  totalSeconds = 0;
  updateDisplay();
  document.getElementById('hoursInput').value = '';
  document.getElementById('minutesInput').value = '';
  document.getElementById('secondsInput').value = '';
}
