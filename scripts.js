const choices = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice() {
    // randomly return rock, paper, or scissors
    const randomChoice = Math.floor(Math.random() * choices.length);
    console.log(randomChoice, choices[randomChoice]);
    return;
}

function playRound(playerSelection, computerSelection) {

/* Make a case insensitive choice

    // INIT a regexp variable regexChoice
        
    // Compare with items in choices array

    FOR each choices item 
    for (i = 0; i <= choices.length - 1; i++) {
        IF regexChoice.test(choices[item])
            SET playerChoice to i + 1
            LOG playerChoice
        ELSE
            DISPLAY message "No matching choices. Check your spelling and try again."
            return
    }
    ENDFOR
*/
    
    const regexpChoice = new RegExp(playerSelection, "i");
    let playerChoice;
    for (let i = 0; i <= choices.length - 1; i++) {
        if (regexpChoice.test(choices[i])) {
            playerChoice = i;
            console.log(`playerChoice assigned to ${playerChoice}`);
        }
    }
    
    if (playerChoice === undefined) {
        alert("No matching choices. Check your spelling and try again.");
    } else {
        console.log("Match found!");
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
        
/* Compare playerSelection with computerSelection
    
    IF playerChoice === computerSelection
        DISPLAY "Tie!"
    ELSE
        CASE playerChoice == 1 (rock)
            IF computerSelection == 2 (paper)
                DISPLAY "You Lose! (winning choice) beats (losing choice)"
            ELSE 
                DISPLAY "You win! (winning choice) beats (losing choice)"
            BREAK        
        CASE playerChoice == 2 (paper)
            IF computerSelection == 1 (rock)
                DISPLAY "You win! (winning choice) beats (losing choice)"
            ELSE
                DISPLAY "You Lose! (winning choice) beats (losing choice)"
            BREAK
        CASE playerChoice == 3 (scissors)
            IF computerSelection == 1 (rock)
                DISPLAY "You Lose! (winning choice) beats (losing choice)"
            ELSE 
                DISPLAY "You win! (winning choice) beats (losing choice)"
    ENDIF
*/

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