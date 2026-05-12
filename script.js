// 1. Alle constanten voor de tekstvakken
const computerOutput = document.querySelector("#computer");
const humanOutput = document.querySelector("#human");
const resultOutput = document.querySelector("#result");

// 2. Variabelen voor de keuzes
let humanChoice = "";
let computerChoice = "";

// 3. De testregel uit de opdracht
humanOutput.innerHTML = "Jouw keuze komt hier, maak je keuze!";

// 4. Functie voor de computer keuze
function makeComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber === 1) computerChoice = 'steen';
    if (randomNumber === 2) computerChoice = 'schaar';
    if (randomNumber === 3) computerChoice = 'papier';
    computerOutput.innerHTML = computerChoice;
}

// 5. Functie om de winnaar te bepalen
// Zinnige comment: Vergelijkt keuzes en toont de uitslag in de HTML
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
// Zinnige comment: Verwerkt de klik, stelt de keuze in en start de computer-ronde
function handlePlayerChoice(event) {
    humanChoice = event.target.id;      // Pak het ID van de geklikte knop
    humanOutput.innerHTML = humanChoice;
    makeComputerChoice();
    getResult();
}

// 7. DE V2 UPDATE: Eén listener voor alle buttons
// Zinnige comment: Zoekt alle buttons en koppelt ze in één keer aan de handler
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', handlePlayerChoice);
});