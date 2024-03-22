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
    const regexpChoice = new RegExp(playerSelection, i);
        
    /* Compare with items in choices array

    FOR each choices item 
    for (i = 0; i <= choices.length - 1; i++) {
        IF regexChoice === choices[item]
            SET playerChoice to i + 1
        ELSE
            DISPLAY message "No matching choices. Check your spelling and try again."
            return
    }
    ENDFOR
    */
        
/* Compare playerSelection with computerSelection
    
    IF playerSelection === computerSelection
        DISPLAY "Tie!"
    ELSE
        CASE playerSelection == 1 (rock)
            IF computerSelection == 2 (paper)
                DISPLAY "You Lose! (winning choice) beats (losing choice)"
            ELSE 
                DISPLAY "You win! (winning choice) beats (losing choice)"
            BREAK        
        CASE playerSelection == 2 (paper)
            IF computerSelection == 1 (rock)
                DISPLAY "You win! (winning choice) beats (losing choice)"
            ELSE
                DISPLAY "You Lose! (winning choice) beats (losing choice)"
            BREAK
        CASE playerSelection == 3 (scissors)
            IF computerSelection == 1 (rock)
                DISPLAY "You Lose! (winning choice) beats (losing choice)"
            ELSE 
                DISPLAY "You win! (winning choice) beats (losing choice)"
    ENDIF
*/

}

// CALL getComputerChoice()
const computerChoice = getComputerChoice();

const playerInput = "rock";

// PROMPT for playerSelection
// const playerChoice = prompt('Enter your choice. Rock, Paper, or Scissors.');

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