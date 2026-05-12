// 1. Alle constanten voor de tekstvakken
const computerOutput = document.querySelector("#computer");
const humanOutput = document.querySelector("#human");
const resultOutput = document.querySelector("#result");

// 2. Variabelen voor de keuzes
let humanChoice = "";
let computerChoice = "";

// 3. De testregel uit de opdracht
humanOutput.innerHTML = "Jouw keuze komt hier, maak je keuze!";

// 4. DEZE IS NU AANGEPAST: Functie voor de computer keuze met een SWITCH
// Zinnige comment: Gebruikt een switch om het getal 1, 2 of 3 om te zetten naar een tekst-keuze
function makeComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    
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
    
    computerOutput.innerHTML = computerChoice;
}

// 5. Functie om de winnaar te bepalen
function getResult() {
    if (humanChoice === computerChoice) {
        resultOutput.innerHTML = "Gelijkspel!";
    } else if (
        (humanChoice === 'steen' && computerChoice === 'schaar') ||
        (humanChoice === 'papier' && computerChoice === 'steen') ||
        (humanChoice === 'schaar' && computerChoice === 'papier')
    ) {
        resultOutput.innerHTML = "Je wint!";
    } else {
        resultOutput.innerHTML = "Computer wint!";
    }
}

// 6. De centrale 'handler' functie
function handlePlayerChoice(event) {
    humanChoice = event.target.id;
    humanOutput.innerHTML = humanChoice;
    makeComputerChoice();
    getResult();
}

// 7. De event listener voor alle buttons (v2 stijl)
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', handlePlayerChoice);
});