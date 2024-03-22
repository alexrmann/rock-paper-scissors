const choices = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice() {
    // randomly return rock, paper, or scissors
    const randomChoice = Math.floor(Math.random() * choices.length);
    return randomChoice;
}

function playRound(playerSelection, computerSelection) {

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
                    } else { 
                    console.log("You win! Rock beats Scissors.");
                    }
                    break;      
                case playerChoice == 1:
                    if (computerSelection == 0) { 
                        console.log("You win! Paper beats Rock.");
                    } else {
                    console.log("You Lose! Scissors beats Paper.");
                    }
                    break;
                case playerChoice == 2:
                    if (computerSelection == 0) {
                        console.log("You Lose! Rock beats Scissors.");
                    } else {
                        console.log("You win! Scissors beats Paper.");
                    } 
            }
            
        }
    }

}

// CALL getComputerChoice()
const computerChoice = getComputerChoice();
// PROMPT for playerSelection
const playerInput = prompt('Enter your choice. Rock, Paper, or Scissors.');

// CALL playRound
console.log(playRound(playerInput, computerChoice));


// COMPLETE THIS LAST
function playGame() {
    /*
    
    INIT playerScore to 0
    INIT computerScore to 0
    INIT currentRound to 1
    INIT resultGame

    IF currentRound <= 5
        CALL playRound();
        DISPLAY roundWinner
        IF roundWinner == player
            INCREMENT playerScore
        ELSE IF roundWinner == computer
            INCREMENT computerScore
        ELSE do nothing
        END IF

        INCREMENT currentRound
    END IF
    
    IF playerScore > computerScore
        SET resultGame to "Player Wins!"
    ELSE IF playerScore < computerScore
        SET resultGame to "Computer Wins!"
    ELSE
        SET resultGame to "Tie!"

    DISPLAY resultGame

    */
}