const computerOutput = document.querySelector("#computer");
const humanOutput = document.querySelector("#human");
const resultOutput = document.querySelector("#result");

let humanChoice = "";
let computerChoice = "";

// De bekende Switch-opdracht
function makeComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    switch (randomNumber) {
        case 1: computerChoice = 'steen'; break;
        case 2: computerChoice = 'schaar'; break;
        case 3: computerChoice = 'papier'; break;
    }
    computerOutput.innerHTML = computerChoice;
}

function getResult() {
    resultOutput.classList.remove("animate");
    void resultOutput.offsetWidth; 

    if (humanChoice === computerChoice) {
        resultOutput.innerHTML = "Gelijkspel! ";
    } else if (
        (humanChoice === 'steen' && computerChoice === 'schaar') ||
        (humanChoice === 'papier' && computerChoice === 'steen') ||
        (humanChoice === 'schaar' && computerChoice === 'papier')
    ) {
        resultOutput.innerHTML = "Je wint! ";
        
        // --- HIER KOMT DE CONFETTI ---
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 }
        });
        // -----------------------------

    } else {
        resultOutput.innerHTML = "Verloren...";
    }

    resultOutput.classList.add("animate");
}

// Centrale handler
function handlePlayerChoice(event) {
    humanChoice = event.target.id;
    humanOutput.innerHTML = humanChoice;
    makeComputerChoice();
    getResult();
}

// De bekende Loop-opdracht
document.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', handlePlayerChoice);
});