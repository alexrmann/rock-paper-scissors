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

function playRound(playerSelection, computerSelection) {

    // Declare round
    console.log(`Round: ${currentRound}`);

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
                console.log(`Player has chosen Rock`);
                break;
            case playerChoice = 1: 
                console.log(`Player has chosen Paper`);
                break;
            case playerChoice = 2: 
                console.log(`Player has chosen Scissors`);
        }
    }

    // Announce Computer's choice
    switch(computerSelection) {
        case computerSelection = 0: 
            console.log(`Computer has chosen Rock`);
            break;
        case computerSelection = 1: 
            console.log(`Computer has chosen Paper`);
            break;
        case computerSelection = 2: 
            console.log(`Computer has chosen Scissors`);
    }

    // Evaluate the result of the round
    if (playerChoice != undefined) {
        if (playerChoice == computerSelection) {
            console.log("Tie!")
        } else {
            switch(true) {
                case playerChoice == 0:
                    if (computerSelection == 1) {
                        console.log("You Lose! Paper beats Rock.");
                        computerScore++;
                    } else { 
                        console.log("You win! Rock beats Scissors.");
                        playerScore++; 
                    }
                    break;      
                case playerChoice == 1:
                    if (computerSelection == 0) { 
                        console.log("You win! Paper beats Rock.");
                        playerScore++;
                    } else {
                        console.log("You Lose! Scissors beats Paper.");
                        computerScore++;
                    }
                    break;
                case playerChoice == 2:
                    if (computerSelection == 0) {
                        console.log("You Lose! Rock beats Scissors.");
                        computerScore++;
                    } else {
                        console.log("You win! Scissors beats Paper.");
                        playerScore++;
                    } 
            }         
        }
    }

    // Display current scores
    console.log(`Player score is currently ${playerScore}`);
    console.log(`Computer score is currently ${computerScore}`);

}


function playGame() {

    // INIT round counter and game result
    let resultOfGame = "";

    for (currentRound; currentRound <= 5; currentRound++) {
        // CALL getComputerChoice()
        const computerChoice = getComputerChoice();
        // PROMPT for playerSelection
        const playerInput = prompt('Enter your choice. Rock, Paper, or Scissors.');

        // CALL playGame
        console.log(playRound(playerInput, computerChoice));       
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
    console.log(resultOfGame);
    console.log(`Final score: Player - ${playerScore}, Computer - ${computerScore}`);
}

console.log(playGame());