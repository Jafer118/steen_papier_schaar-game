// 1. Alle constanten bovenaan
const computerOutput = document.querySelector("#computer");
const humanOutput = document.querySelector("#human");
const resultOutput = document.querySelector("#result");

const steenBtn = document.querySelector("#steen");
const papierBtn = document.querySelector("#papier");
const schaarBtn = document.querySelector("#schaar");

// 2. Variabelen voor de keuzes
let humanChoice = "";
let computerChoice = "";

// 3. De testregel uit de opdracht
humanOutput.innerHTML = "Jouw keuze komt hier, maak je keuze!";

// 4. Functie om de winnaar te bepalen
// Zinnige comment: Deze functie vergelijkt de keuzes en schrijft de uitslag naar de HTML
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

// 5. Functie voor de computer keuze
function makeComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber === 1) computerChoice = 'steen';
    if (randomNumber === 2) computerChoice = 'schaar';
    if (randomNumber === 3) computerChoice = 'papier';
    computerOutput.innerHTML = computerChoice;
}

// 6. NIEUW IN V2: De centrale 'handler' functie
// Zinnige comment: Deze functie voorkomt dubbele code door alle knop-acties centraal te verwerken
function handlePlayerChoice(event) {
    humanChoice = event.target.id;      // Pak het ID van de geklikte knop
    humanOutput.innerHTML = humanChoice; // Toon de keuze op het scherm
    makeComputerChoice();               // Laat de computer kiezen
    getResult();                        // Bepaal de winnaar
}

// 7. De event listeners (nu veel korter!)
steenBtn.addEventListener('click', handlePlayerChoice);
papierBtn.addEventListener('click', handlePlayerChoice);
schaarBtn.addEventListener('click', handlePlayerChoice);