/* 
ASSIGN HTML ELEMENTS*/

// Status Readouts
const round = document.querySelector("#round");
const results = document.querySelector("#results");
const score = document.querySelector("#score");

// Buttons
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

/*
INITIALIZE GAME PARAMETERS
*/

// INIT choices
const choices = ['Rock', 'Paper', 'Scissors'];

// INIT player and computer scores
let playerScore = 0;
let computerScore = 0; 

// INIT round counter and game result
let currentRound = 1; 

// play a round when a button is clicked
rock.addEventListener("click", playGame(choices[0])); 
paper.addEventListener("click", playGame(choices[1])); 
scissors.addEventListener("click", playGame(choices[2])); 

function playGame(playerChoice) {
    // Log clicks to console
    console.log("Player clicked: " + playerChoice);

    const computerSelection = getComputerChoice();
    /*
    const roundResult = playRound(playerChoice, computerSelection);
    updateResult(roundResult);
    updateScore(playerScore, computerScore);*/
}

function getComputerChoice() {
    // randomly return rock, paper, or scissors
    const randomIndex = Math.floor(Math.random() * choices.length);

    //convert 
    console.log("Computer picked: " + choices[randomIndex]);
    return choices[randomIndex];
}

/*
function playRound(playerChoice, computerSelection) {
   
    // Declare round
    round.textContent = `Round: ${currentRound}`;

    switch(playerChoice) {
        case playerChoice = choices[0]: 
            results.textContent = `Player has chosen Rock`;
            break;
        case playerChoice = choices[1]: 
            results.textContent = `Player has chosen Paper`;
            break;
        case playerChoice = choices[2]: 
            results.textContent = `Player has chosen Scissors`;
    }

    // Announce Computer's choice
    switch(computerSelection) {
        case computerSelection = choices[0]: 
            results.textContent = `Computer has chosen Rock`;
            break;
        case computerSelection = choices[1]: 
            results.textContent = `Computer has chosen Paper`;
            break;
        case computerSelection = choices[2]: 
            results.textContent = `Computer has chosen Scissors`;
    }

    if (playerChoice != undefined) {
        if (playerChoice === computerSelection) {
            console.log("Tie!")
        } else {
            switch(true) {
                case playerChoice === choices[0]:
                    if (computerSelection === choices[1]) {
                        results.textContent = "You Lose! Paper beats Rock.";
                        computerScore++;
                    } else { 
                        results.textContent = "You win! Rock beats Scissors.";
                        playerScore++; 
                    }
                    break;      
                case playerChoice === choices[1]:
                    if (computerSelection === choices[0]) { 
                        results.textContent = "You win! Paper beats Rock.";
                        playerScore++;
                    } else {
                        results.textContent = "You Lose! Scissors beats Paper.";
                        computerScore++;
                    }
                    break;
                case playerChoice === choices[2]:
                    if (computerSelection === choices[0]) {
                        results.textContent = "You Lose! Rock beats Scissors.";
                        computerScore++;
                    } else {
                        results.textContent = "You win! Scissors beats Paper.";
                        playerScore++;
                    } 
            }         
        }
    }

    // Increment to the next round
    currentRound++;
}

function updateResult(result) {
    results.textContent = result;

        // Check the scores
        if (computerScore == 5) {
            updateResult("Computer Wins!");
        } else if (playerScore == 5) {
            updateResult("Player Wins!");
        } else {
            updateResult("Next Round!");
        }
}
  
function updateScore(playerScore, computerScore) {
    score.textContent = `Score: Player - ${playerScore}, Computer - ${computerScore}`;
}
*/