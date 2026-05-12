const computerOutput = document.querySelector("#computer");
const humanOutput = document.querySelector("#human");
const resultOutput = document.querySelector("#result");
const countdownDisplay = document.querySelector("#countdown");
const streakDisplay = document.querySelector("#streak");
const statusText = document.querySelector("#status");

let userScore = 0, computerScore = 0, roundCount = 1, streak = 0;
let humanChoice = "", computerChoice = "";

// Geluiden inladen
const winSound = document.getElementById("win-sound");
const clickSound = document.getElementById("click-sound");

function makeComputerChoice() {
    const choices = ['steen', 'schaar', 'papier'];
    computerChoice = choices[Math.floor(Math.random() * 3)];
}

function getResult() {
    resultOutput.classList.remove('pop-in');
    void resultOutput.offsetWidth; // Reset animatie

    let result = "";
    if (humanChoice === computerChoice) {
        result = "Gelijkspel! 😐";
        streak = 0; // Streak stopt
    } else if (
        (humanChoice === 'steen' && computerChoice === 'schaar') ||
        (humanChoice === 'papier' && computerChoice === 'steen') ||
        (humanChoice === 'schaar' && computerChoice === 'papier')
    ) {
        result = "Je wint! 🏆";
        userScore++;
        streak++;
        winSound.play();
    } else {
        result = "Computer wint! 🤖";
        computerScore++;
        streak = 0; // Streak stopt
    }

    // Update alles op het scherm
    resultOutput.innerHTML = result;
    resultOutput.classList.add('pop-in');
    document.querySelector("#user-score").innerHTML = userScore;
    document.querySelector("#computer-score").innerHTML = computerScore;
    streakDisplay.innerHTML = streak;
    computerOutput.innerHTML = computerChoice;
}

function handlePlayerChoice(event) {
    clickSound.play();
    // Pak het ID van de div (ook als je op het plaatje klikt)
    humanChoice = event.currentTarget.id;
    humanOutput.innerHTML = humanChoice;
    
    // START COUNTDOWN (Uitslag verbergen)
    statusText.innerHTML = "De computer denkt na...";
    resultOutput.innerHTML = "";
    computerOutput.innerHTML = "?";
    let timer = 3;
    countdownDisplay.innerHTML = timer;

    const interval = setInterval(() => {
        timer--;
        if (timer > 0) {
            countdownDisplay.innerHTML = timer;
        } else {
            clearInterval(interval);
            countdownDisplay.innerHTML = "";
            statusText.innerHTML = "Uitslag:";
            makeComputerChoice();
            getResult();
        }
    }, 500); // 500ms voor een snelle countdown
}

// Event listeners voor de image-divs
document.querySelectorAll('.choice-btn').forEach(btn => {
    btn.addEventListener('click', handlePlayerChoice);
});

// Reset knop
document.querySelector("#reset-btn").addEventListener('click', () => location.reload());