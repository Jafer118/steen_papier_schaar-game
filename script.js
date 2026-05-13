// 1. Constanten voor de tekstvakken (v1)
const computerOutput = document.querySelector("#computer");
const humanOutput = document.querySelector("#human");
const resultOutput = document.querySelector("#result");
const userScoreDisplay = document.querySelector("#user-score");
const highScoreDisplay = document.querySelector("#high-score");

// 2. Variabelen voor de keuzes en scores
let humanChoice = "";
let computerChoice = "";
let userScore = 0;
let highScore = 0;

// 3. Functie voor de computer keuze (DE SWITCH OPDRACHT)
function makeComputerChoice() {
    // Genereer getal 1, 2 of 3
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    
    // Switch statement om het getal om te zetten naar tekst
    switch (randomNumber) {
        case 1:
            computerChoice = 'steen';
            break;
        case 2:
            computerChoice = 'schaar';
            break;
        case 3:
            computerChoice = 'papier';
            break;
    }
    
    // Laat de keuze van de computer zien
    computerOutput.innerHTML = computerChoice;
}

// 4. Winnaar bepalen en Highscore bijwerken
function getResult() {
    if (humanChoice === computerChoice) {
        resultOutput.innerHTML = "Gelijkspel!";
    } else if (
        (humanChoice === 'steen' && computerChoice === 'schaar') ||
        (humanChoice === 'papier' && computerChoice === 'steen') ||
        (humanChoice === 'schaar' && computerChoice === 'papier')
    ) {
        resultOutput.innerHTML = "Je wint!";
        userScore++; // Punt erbij voor jou
        
        // Check of dit je nieuwe record is
        if (userScore > highScore) {
            highScore = userScore;
            highScoreDisplay.innerHTML = highScore;
        }
    } else {
        resultOutput.innerHTML = "Computer wint!";
        userScore = 0; // Reset score als je verliest 
    }

    userScoreDisplay.innerHTML = userScore;
}

// 5. De centrale handler functie (v2)
function handlePlayerChoice(event) {
    // Pak de ID van de button waar je op klikt
    humanChoice = event.target.id;
    humanOutput.innerHTML = humanChoice;
    
    // Voer de andere functies uit
    makeComputerChoice();
    getResult();
}

// 6. De Event Listener voor alle buttons (DE 1 CLICK HANDLER OPDRACHT)
// We zoeken alle buttons en geven ze allemaal de 'handlePlayerChoice' functie
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', handlePlayerChoice);
});