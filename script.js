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

// 4. Functie om de winnaar te bepalen (de vergelijking)
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

// 5. De click event handlers
steenBtn.addEventListener('click', function(event) {
    humanChoice = event.target.id;
    humanOutput.innerHTML = humanChoice;
    makeComputerChoice();
    getResult();
});

papierBtn.addEventListener('click', function(event) {
    humanChoice = event.target.id;
    humanOutput.innerHTML = humanChoice;
    makeComputerChoice();
    getResult();
});

schaarBtn.addEventListener('click', function(event) {
    humanChoice = event.target.id;
    humanOutput.innerHTML = humanChoice;
    makeComputerChoice();
    getResult();
});

// 6. Functie voor de computer keuze (uit de vorige stap)
function makeComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber === 1) computerChoice = 'steen';
    if (randomNumber === 2) computerChoice = 'schaar';
    if (randomNumber === 3) computerChoice = 'papier';
    computerOutput.innerHTML = computerChoice;
}