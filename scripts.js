function getComputerChoice() {
    // randomly return rock, paper, or scissors
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomChoice = Math.floor(Math.random() * choices.length);
    console.log(randomChoice, choices[randomChoice]);
}

getComputerChoice();

function playGame() {
    
}