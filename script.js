// 1. Alle elementen ophalen uit de HTML
const computerOutput = document.querySelector("#computer");
const humanOutput = document.querySelector("#human");
const resultOutput = document.querySelector("#result");
const countdownDisplay = document.querySelector("#countdown");
const userScoreDisplay = document.querySelector("#user-score");
const computerScoreDisplay = document.querySelector("#computer-score");
const streakDisplay = document.querySelector("#streak");
const roundDisplay = document.querySelector("#round-count");

// 2. Variabelen voor de standen en keuzes
let userScore = 0;
let computerScore = 0;
let roundCount = 1;
let streak = 0;
let humanChoice = "";
let computerChoice = "";

// 3. Functie voor de computer keuze (Houdt de SWITCH uit de vorige opdracht!)
function makeComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    switch (randomNumber) {
        case 1: computerChoice = 'steen'; break;
        case 2: computerChoice = 'schaar'; break;
        case 3: computerChoice = 'papier'; break;
    }
    computerOutput.innerHTML = computerChoice;
}

// 4. Winnaar bepalen + Score & Streaks bijwerken
function getResult() {
    // Verwijder oude animatie-classes zodat we ze opnieuw kunnen toevoegen
    resultOutput.classList.remove('pop-in');
    void resultOutput.offsetWidth; // Trucje om de animatie te herstarten

    if (humanChoice === computerChoice) {
        resultOutput.innerHTML = "Gelijkspel! 😐";
        streak = 0; // Bij gelijkspel gaat je streak weg
    } else if (
        (humanChoice === 'steen' && computerChoice === 'schaar') ||
        (humanChoice === 'papier' && computerChoice === 'steen') ||
        (humanChoice === 'schaar' && computerChoice === 'papier')
    ) {
        resultOutput.innerHTML = "Je wint! 🏆";
        userScore++;
        streak++; // Je wint, dus streak gaat omhoog!
        document.getElementById("win-sound").play(); // Speel geluid
    } else {
        resultOutput.innerHTML = "Computer wint! 🤖";
        computerScore++;
        streak = 0; // Verloren, dus streak naar 0
    }

    // Update de teksten op het scherm
    resultOutput.classList.add('pop-in');
    userScoreDisplay.innerHTML = userScore;
    computerScoreDisplay.innerHTML = computerScore;
    streakDisplay.innerHTML = streak;
    
    // Ronde gaat pas omhoog NA de uitslag
    roundCount++;
    roundDisplay.innerHTML = roundCount;
}

// 5. De centrale handler (Aangepast voor de Countdown/Uitstellen uitslag)
function handlePlayerChoice(event) {
    document.getElementById("click-sound").play();
    
    // Pak de ID van de geklikte div (steen, papier of schaar)
    humanChoice = event.currentTarget.id;
    humanOutput.innerHTML = humanChoice;

    // Reset de uitslag-teksten voor de nieuwe ronde
    resultOutput.innerHTML = "";
    computerOutput.innerHTML = "?";
    
    // COUNTDOWN: Uitslag 1,5 seconde uitstellen (3 stappen van 0.5s)
    let timer = 3;
    countdownDisplay.innerHTML = timer;

    const interval = setInterval(() => {
        timer--;
        if (timer > 0) {
            countdownDisplay.innerHTML = timer;
        } else {
            clearInterval(interval); // Stop de timer
            countdownDisplay.innerHTML = ""; // Haal "1" weg
            makeComputerChoice(); // Computer kiest nu pas
            getResult(); // Winnaar bepalen
        }
    }, 500); // 500ms = een halve seconde per stap
}

// 6. De Event Listeners (Houdt de querySelectorAll uit de vorige opdracht!)
document.querySelectorAll('.choice-btn').forEach(button => {
    button.addEventListener('click', handlePlayerChoice);
});

// Reset knop: Herlaadt de hele pagina (lekker makkelijk)
document.querySelector("#reset-btn").addEventListener('click', () => {
    location.reload();
});