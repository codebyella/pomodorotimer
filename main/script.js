let timer;
let minutes = 25;
let seconds = 0;

function startTimer() {
    timer = setInterval(updateTimer, 1000);
}

function updateTimer() {
    if (seconds === 0) {
        if (minutes === 0) {
            clearInterval(timer);
            alert("Pomodoro Completed!");
            return;
        } else {
            minutes--;
            seconds = 59;
        }
    } else {
        seconds--;
    }

    document.getElementById("minutes").textContent = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("seconds").textContent = seconds < 10 ? "0" + seconds : seconds;
}

function pauseTimer() {
    clearInterval(timer);
}

function resetTimer() {
    clearInterval(timer);
    minutes = 25;
    seconds = 0;
    document.getElementById("minutes").textContent = "25";
    document.getElementById("seconds").textContent = "00";
}
