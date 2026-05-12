// 1. Constanten voor tekstvakken en score
const computerOutput = document.querySelector("#computer");
const humanOutput = document.querySelector("#human");
const resultOutput = document.querySelector("#result");
const userScoreDisplay = document.querySelector("#user-score");
const computerScoreDisplay = document.querySelector("#computer-score");

// 2. Variabelen voor keuzes en scores
let humanChoice = "";
let computerChoice = "";
let userScore = 0;
let computerScore = 0;

// 3. Starttekst
humanOutput.innerHTML = "Maak je keuze om te beginnen!";

// 4. Computer keuze met Switch
function makeComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    switch (randomNumber) {
        case 1: computerChoice = 'steen'; break;
        case 2: computerChoice = 'schaar'; break;
        case 3: computerChoice = 'papier'; break;
    }
    computerOutput.innerHTML = computerChoice;
}

// 5. Winnaar bepalen + Score bijwerken
// Zinnige comment: Deze functie checkt wie wint en hoogt de score op
function getResult() {
    if (humanChoice === computerChoice) {
        resultOutput.innerHTML = "Gelijkspel! 😐";
    } else if (
        (humanChoice === 'steen' && computerChoice === 'schaar') ||
        (humanChoice === 'papier' && computerChoice === 'steen') ||
        (humanChoice === 'schaar' && computerChoice === 'papier')
    ) {
        resultOutput.innerHTML = "Je wint! 🏆";
        userScore++; // Doe er 1 punt bij voor de mens
    } else {
        resultOutput.innerHTML = "Computer wint! 🤖";
        computerScore++; // Doe er 1 punt bij voor de computer
    }

    // Update de cijfers op het scherm
    userScoreDisplay.innerHTML = userScore;
    computerScoreDisplay.innerHTML = computerScore;
}

// 6. Centrale handler
function handlePlayerChoice(event) {
    humanChoice = event.target.id;
    humanOutput.innerHTML = humanChoice;
    makeComputerChoice();
    getResult();
}

// 7. Eén event listener voor alle buttons
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', handlePlayerChoice);
});