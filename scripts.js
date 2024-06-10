/* 
ASSIGN HTML ELEMENTS
*/

// Status Readouts
const round = document.querySelector("#round");
const gameStatus = document.querySelector("#game-status");
const results = document.querySelector("#results");
const score = document.querySelector("#score");
const textPlayer = document.querySelector("#player");
const textComputer = document.querySelector("#computer");

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

rock.addEventListener("click", () => playGame(choices[0])); 
paper.addEventListener("click", () => playGame(choices[1])); 
scissors.addEventListener("click", () => playGame(choices[2]));

function playGame(playerChoice) {

    // Log clicks to console
    console.log("Player clicked: " + playerChoice);

    // Get the computer's choice
    const computerSelection = getComputerChoice();
    
    // Play out the round
    const roundResult = playRound(playerChoice, computerSelection);

    // updateResult(roundResult);

    updateScore(playerScore, computerScore);
    
    // Increment to the next round
    currentRound++;

}

function getComputerChoice() {
    // Randomly select an index from choices array
    const randomIndex = Math.floor(Math.random() * choices.length);

    // Convert random index to corresponding string in choices array
    console.log("Computer picked: " + choices[randomIndex]);
    return choices[randomIndex];
}

function playRound(playerChoice, computerSelection) {
   
    // Update the current round
    round.textContent = `Round: ${currentRound}`;

    // Announce Player's choice
    switch(playerChoice) {
        case playerChoice = choices[0]: 
            textPlayer.textContent = `Player has chosen Rock`;
            break;
        case playerChoice = choices[1]: 
            textPlayer.textContent = `Player has chosen Paper`;
            break;
        case playerChoice = choices[2]: 
            textPlayer.textContent = `Player has chosen Scissors`;
    }

    // Announce Computer's choice
    switch(computerSelection) {
        case computerSelection = choices[0]: 
            textComputer.textContent = `Computer has chosen Rock`;
            break;
        case computerSelection = choices[1]: 
            textComputer.textContent = `Computer has chosen Paper`;
            break;
        case computerSelection = choices[2]: 
            textComputer.textContent = `Computer has chosen Scissors`;
    }

    if (playerChoice != undefined) {
        if (playerChoice === computerSelection) {
            results.textContent = "Tie!";
        } else {
            switch(true) {
                case playerChoice === choices[0]:
                    if (computerSelection === choices[1]) {
                        results.textContent = "You lost this round! Paper beats Rock.";
                        computerScore++;
                    } else { 
                        results.textContent = "You win the round! Rock beats Scissors.";
                        playerScore++; 
                    }
                    break;      
                case playerChoice === choices[1]:
                    if (computerSelection === choices[0]) { 
                        results.textContent = "You win the round! Paper beats Rock.";
                        playerScore++;
                    } else {
                        results.textContent = "You lost this round! Scissors beats Paper.";
                        computerScore++;
                    }
                    break;
                case playerChoice === choices[2]:
                    if (computerSelection === choices[0]) {
                        results.textContent = "You lost this round! Rock beats Scissors.";
                        computerScore++;
                    } else {
                        results.textContent = "You win the round! Scissors beats Paper.";
                        playerScore++;
                    } 
            }         
        }
    }
}

/*
function updateResult(result) {

    // Check the scores
    if (computerScore === 5) {
        updateResult("Computer  Wins!");
    } else if (playerScore === 5) {
        updateResult("Player Wins!");
    } else {
        updateResult("Next Round!");
    }

    gameStatus.textContent = result;

}
*/
  
function updateScore(playerScore, computerScore) {
    score.textContent = `Score: Player - ${playerScore}, Computer - ${computerScore}`;
}