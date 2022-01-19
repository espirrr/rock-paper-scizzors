// Opponent chooses a hand shape using random number generator
function computerPlay(){

    randomNumber = Math.floor(Math.random()*3) + 1;

    if (randomNumber === 1) {
      return "rock";
    } else if (randomNumber === 2) {
        return "paper";
    } else {
        return "scizzors";
    }
 
}

// Stores the player and the opponent's hand shape using a prompt input and the computerPlay(); function.
function playRound(){

    let newcomputerSelection = computerPlay();
    let playerPrompt = prompt("Rock, paper, or scizzors?");
    let playerSelectionLowerCase = playerPrompt.toLowerCase(); // Makes the prompt input case insensitive, the the rest of the function reads lower case strings.

    if ((playerSelectionLowerCase === "rock" && newcomputerSelection === "paper") 
    || (playerSelectionLowerCase === "scizzors" && newcomputerSelection === "rock") 
    || (playerSelectionLowerCase === "paper" && newcomputerSelection === "scizzors")) {

        return "You lost! Your opponent chose" + " " + newcomputerSelection + " " + "which beats" + " " + playerSelectionLowerCase + ".";

        /* I had these two console.log lines to test and make sure that both the player and opponent's hands were being stored correctly in the function.
        console.log(playerSelectionLowerCase);
        console.log(newcomputerSelection); */

    } else if (playerSelectionLowerCase === newcomputerSelection){

        return "It's a draw! Your opponent also chose" + " " + newcomputerSelection + ".";

        /* I had these two console.log lines to test and make sure that both the player and opponent's hands were being stored correctly in the function.
        console.log(playerSelectionLowerCase);
        console.log(newcomputerSelection); */

    } else if ((playerSelectionLowerCase === "rock" && newcomputerSelection === "scizzors") 
    || (playerSelectionLowerCase === "scizzors" && newcomputerSelection === "paper") 
    || (playerSelectionLowerCase === "paper" && newcomputerSelection === "rock")) {

        return "You won! Your opponent chose" + " " + newcomputerSelection + " " + "which loses to" + " " + playerSelectionLowerCase + ".";

        /* I had these two console.log lines to test and make sure that both the player and opponent's hands were being stored correctly in the function.
        console.log(playerSelectionLowerCase);
        console.log(newcomputerSelection); */

    } else {

        return "Please enter a valid option, the input must be 'rock', 'paper', or 'scizzors' only). This round will count as a draw."

        /* I had these two console.log lines to test and make sure that both the player and opponent's hands were being stored correctly in the function.
        console.log(playerSelectionLowerCase);
        console.log(newcomputerSelection); */

    }

}



 function game() {

    // Start player's scores at 0.
    let playerScore = 0;
    let computerScore = 0;

    let roundOne = playRound();
    console.log(roundOne); // Lets you know how you won, lost, or drew the round.

    // Round 1
    if (roundOne.charAt(4) === 'w'){ // This is used to recognize the outcome from the playRound(); function.
        playerScore++;
        console.log("Round 1: The score is" + " " + playerScore + " " + "to" + " " + computerScore);
    }

    if (roundOne.charAt(4) === 'l'){
        computerScore++;
        console.log("Round 1: The score is" + " " + playerScore + " " + "to" + " " + computerScore);
    }

    if (roundOne.charAt(0) === 'I'){
        console.log("Round 1: No points added to either player. The current score is" + " " + playerScore + " " + "to" + " " + computerScore + ".");
    }

    if (roundOne.charAt(0) === 'P'){
        console.log("Round 1: No points added to either player. The current score is" + " " + playerScore + " " + "to" + " " + computerScore + ".");
    }
 
    //Round 2
    let roundTwo = playRound();
    console.log(roundTwo);

    if (roundTwo.charAt(4) === 'w'){
        playerScore++;
        console.log("Round 2: The score is" + " " + playerScore + " " + "to" + " " + computerScore);
    }

    if (roundTwo.charAt(4) === 'l'){
        computerScore++;
        console.log("Round 2: The score is" + " " + playerScore + " " + "to" + " " + computerScore);
    }

    if (roundTwo.charAt(0) === 'I'){
        console.log("Round 2: No points added to either player. The current score is" + " " + playerScore + " " + "to" + " " + computerScore + ".");
    }

    if (roundTwo.charAt(0) === 'P'){
        console.log("Round 2: No points added to either player. The current score is" + " " + playerScore + " " + "to" + " " + computerScore + ".");
    }

    // Round 3
    let roundThree = playRound();
    console.log(roundThree);

    if (roundThree.charAt(4) === 'w'){
        playerScore++;
        console.log("Round 3: The score is" + " " + playerScore + " " + "to" + " " + computerScore);
    }

    if (roundThree.charAt(4) === 'l'){
        computerScore++;
        console.log("Round 3: The score is" + " " + playerScore + " " + "to" + " " + computerScore);
    }

    if (roundThree.charAt(0) === 'I'){
        console.log("Round 3: No points added to either player. The current score is" + " " + playerScore + " " + "to" + " " + computerScore + ".");
    }

    if (roundThree.charAt(0) === 'P'){
        console.log("Round 3: No points added to either player. The current score is" + " " + playerScore + " " + "to" + " " + computerScore + ".");
    }

    //Round 4
    let roundFour = playRound();
    console.log(roundFour);

    if (roundFour.charAt(4) === 'w'){
        playerScore++;
        console.log("Round 4: The score is" + " " + playerScore + " " + "to" + " " + computerScore);
    }

    if (roundFour.charAt(4) === 'l'){
        computerScore++;
        console.log("Round 4: The score is" + " " + playerScore + " " + "to" + " " + computerScore);
    }

    if (roundFour.charAt(0) === 'I'){
        console.log("Round 4: No points added to either player. The current score is" + " " + playerScore + " " + "to" + " " + computerScore + ".");
    }
    
    if (roundFour.charAt(0) === 'P'){
        console.log("Round 4: No points added to either player. The current score is" + " " + playerScore + " " + "to" + " " + computerScore + ".");
    }

    //Round 5
    let roundFive = playRound();
    console.log(roundFive);

    if (roundFive.charAt(4) === 'w'){
        playerScore++;
        console.log("Round 5: The final score is" + " " + playerScore + " " + "to" + " " + computerScore);
    }

    if (roundFive.charAt(4) === 'l'){
        computerScore++;
        console.log("Round 5: The final score is" + " " + playerScore + " " + "to" + " " + computerScore);
    }

    if (roundFive.charAt(0) === 'I'){
        console.log("Round 5: No points added to either player. The final score is" + " " + playerScore + " " + "to" + " " + computerScore + ".");
    }

    if (roundFive.charAt(0) === 'P'){
        console.log("Round 5: No points added to either player. The current score is" + " " + playerScore + " " + "to" + " " + computerScore + ".");
    }

    if (playerScore > computerScore) {
        return "You won the game of 5! The game is now complete, thanks for playing!"
    } else if (playerScore < computerScore) {
        return "You lost the game of 5! The game is now complete, thanks for playing!"
    } else {
        return "It's a draw! The game is now complete, thanks for playing!"
    }

}

