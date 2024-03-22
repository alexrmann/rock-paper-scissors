const choices = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice() {
    // randomly return rock, paper, or scissors
    const randomChoice = Math.floor(Math.random() * choices.length);
    console.log(randomChoice, choices[randomChoice]);
}

function playRound(playerSelection, computerSelection) {

    /*
    PROMPT for playerSelection
    */
    
    /* Make a case insensitive choice

    INIT a regexp variable regexChoice
    SET regexChoice /\b(\w*^${playerSelection}$\w*)\b/gmi
    
    CASE compare regexChoice with items in choices array
    
    IF a match exists
        SET playerSelection to matching array item
    ELSE
        DISPLAY message "Not a match"

    COMPARE playerSelection with computerSelection
    IF playerSelection 
    
    */

    /* Declare winner or tie
    
    IF you win THEN
        DISPLAY "You win! (winning choice) beats (losing choice)"
    ELSE IF you lose
        DISPLAY "You Lose! (winning choice) beats (losing choice)"
    ELSE tie
        DISPLAY "Tie!"
    END IF
    
    */
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));

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