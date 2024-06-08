const choices = ['Rock', 'Paper', 'Scissors'];

// INIT player and computer scores
let playerScore = 0;
let computerScore = 0;
let currentRound = 1;

function getComputerChoice() {
    // randomly return rock, paper, or scissors
    const randomChoice = Math.floor(Math.random() * choices.length);
    return randomChoice;
}

// get all buttons
const buttons = document.querySelectorAll("button");

// get the results div
const results = document.querySelector("#results");

// add a currentScore div
const currentScore = document.querySelector("#current-score");

// play a round when a button is clicked
buttons.addEventListener("click", playRound);

function playRound(playerSelection, computerSelection) {

    // Declare round
    results.textContent = `Round: ${currentRound}`;

    // Convert player selection to a case insensitive regular expression
    const regexpChoice = new RegExp(playerSelection, "i");
    
    // Compare regular expression with items in choices array
    let playerChoice;
    for (let i = 0; i <= choices.length - 1; i++) {
        if (regexpChoice.test(choices[i])) {
            playerChoice = i;
            console.log("Match found!");
            console.log(`playerChoice assigned to ${playerChoice}`);
        }
    }

    // Announce Player's choice
    if (playerChoice === undefined) {
        alert("No matching choices. Check your spelling and try again.");
    } else {
        switch(playerChoice) {
            case playerChoice = 0: 
                results.textContent = `Player has chosen Rock`;
                break;
            case playerChoice = 1: 
                results.textContent = `Player has chosen Paper`;
                break;
            case playerChoice = 2: 
                results.textContent = `Player has chosen Scissors`;
        }
    }

    // Announce Computer's choice
    switch(computerSelection) {
        case computerSelection = 0: 
            results.textContent = `Computer has chosen Rock`;
            break;
        case computerSelection = 1: 
            results.textContent = `Computer has chosen Paper`;
            break;
        case computerSelection = 2: 
            results.textContent = `Computer has chosen Scissors`;
    }

    // Evaluate the result of the round
    if (playerChoice != undefined) {
        if (playerChoice == computerSelection) {
            console.log("Tie!")
        } else {
            switch(true) {
                case playerChoice == 0:
                    if (computerSelection == 1) {
                        results.textContent = "You Lose! Paper beats Rock.";
                        computerScore++;
                    } else { 
                        results.textContent = "You win! Rock beats Scissors.";
                        playerScore++; 
                    }
                    break;      
                case playerChoice == 1:
                    if (computerSelection == 0) { 
                        results.textContent = "You win! Paper beats Rock.";
                        playerScore++;
                    } else {
                        results.textContent = "You Lose! Scissors beats Paper.";
                        computerScore++;
                    }
                    break;
                case playerChoice == 2:
                    if (computerSelection == 0) {
                        results.textContent = "You Lose! Rock beats Scissors.";
                        computerScore++;
                    } else {
                        results.textContent = "You win! Scissors beats Paper.";
                        playerScore++;
                    } 
            }         
        }
    }

    // Display current scores
    currentScore.textContent = `Player score is currently ${playerScore}`;
    currentScore.textContent = `Computer score is currently ${computerScore}`;

}


function playGame() {

    // INIT round counter and game result
    let resultOfGame = "";

    while (currentRound) {
        // CALL getComputerChoice()
        const computerChoice = getComputerChoice();
        // PROMPT for playerSelection
        const playerInput = prompt('Enter your choice. Rock, Paper, or Scissors.');

        // CALL playGame
        playRound(playerInput, computerChoice);       
    }

    // Check the scores
    if (playerScore == computerScore) {
        resultOfGame = "Tie!";
    } else if (playerScore > computerScore) {
        resultOfGame = "Player Wins!";
    } else {
        resultOfGame = "Computer Wins!";
    }
    // Display result of game
    results.textContent = resultOfGame;
    currentScore.textContent = `Final score: Player - ${playerScore}, Computer - ${computerScore}`;
}

playGame();