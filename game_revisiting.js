const firstContainer = document.querySelector('#gameButtons')
const secondContainer = document.querySelector('#scores')
const invisibleButton = document.querySelector('button')

let startRound = document.createElement('div');
const updatedResult = document.createElement('div');
const updatedScores = document.createElement('div');

var newcomputerSelection;

var playerScore = 0;
var computerScore = 0;
var drawScore = 0;

const rockbtn = document.querySelector('#rockbtn');
const paperbtn = document.querySelector('#paperbtn');
const scizzorsbtn = document.querySelector('#scizzorsbtn');

// DOM Manipulation
startRound.textContent = "Choose one to play a round of Rock, Paper, Scizzors. First to 5 wins!";
startRound.style.cssText = "border: 2px solid black; font-size: 20px; display:inline-block; padding: 15px;"

updatedScores.textContent = "Your Score:" + " " + playerScore + " | " + "Computer'\s Score:" + " " + computerScore + " | " + "Draws:" + " " + drawScore;

updatedResult.textContent = "Play a round to see the result!"

secondContainer.appendChild(startRound);
secondContainer.appendChild(updatedScores);
secondContainer.appendChild(updatedResult);


// Click event listeners to play the game
rockbtn.addEventListener('click', function (e) {

   let roundResult = playRound('Rock');

    if (roundResult.charAt(4) === 'w'){ // This is used to recognize the outcome from the playRound(); function.
        playerScore++;

        console.log("The score is" + " " + playerScore + " " + "to" + " " + computerScore);
        updatedResult.textContent = "You won! Your opponent chose" + " " + "Scizzors" + " " + "which loses to" + " " + "Rock" + ".";
        updatedScores.textContent = "Your Score:" + " " + playerScore + " | " + "Computer'\s Score:" + " " + computerScore + " | " + "Draws:" + " " + drawScore;
    }

    if (roundResult.charAt(4) === 'l'){

        computerScore++;

        console.log("The score is" + " " + playerScore + " " + "to" + " " + computerScore);
        updatedResult.textContent = "You lost! Your opponent chose" + " " + "Paper" + " " + "which beats" + " " + "Rock" + ".";
        updatedScores.textContent = "Your Score:" + " " + playerScore + " | " + "Computer'\s Score:" + " " + computerScore + " | " + "Draws:" + " " + drawScore;
    }

    if (roundResult.charAt(0) === 'I'){

        drawScore++;

        console.log("No points added to either player. The current score is" + " " + playerScore + " " + "to" + " " + computerScore + ".");
        updatedResult.textContent = "It's a draw! No Points have been added. Your opponent also chose" + " " + "Rock" + ".";
        updatedScores.textContent = "Your Score:" + " " + playerScore + " | " + "Computer's Score:" + " " + computerScore + " | " + "Draws:" + " " + drawScore;
    }


    // Ends the game if either the player or computer reaches a score of 5
    if (playerScore === 5) {

        startRound.textContent = "The game has ended. You won! Refresh the page to play again."

        // Makes buttons disappear so you can't play anymore
        rockbtn.style.display = "none";
        paperbtn.style.display = "none";
        scizzorsbtn.style.display = "none";

    } else if (computerScore === 5){

        startRound.textContent = "The game has ended. You lost! Refresh the page to play again."

        // Makes buttons disappear so you can't play anymore
        rockbtn.style.display = "none";
        paperbtn.style.display = "none";
        scizzorsbtn.style.display = "none";
    } 
});

paperbtn.addEventListener('click', function (e) {

    let roundResult = playRound('Paper');

    if (roundResult.charAt(4) === 'w'){ // This is used to recognize the outcome from the playRound(); function.
        playerScore++;
        console.log("The score is" + " " + playerScore + " " + "to" + " " + computerScore);
        updatedResult.textContent = "You won! Your opponent chose" + " " + "Rock" + " " + "which loses to" + " " + "Paper" + ".";
        updatedScores.textContent = "Your Score:" + " " + playerScore + " | " + "Computer'\s Score:" + " " + computerScore + " | " + "Draws:" + " " + drawScore; 
    }

    if (roundResult.charAt(4) === 'l'){

        computerScore++;

        console.log("The score is" + " " + playerScore + " " + "to" + " " + computerScore);
        updatedResult.textContent = "You lost! Your opponent chose" + " " + "Scizzors" + " " + "which beats" + " " + "Paper" + ".";
        updatedScores.textContent = "Your Score:" + " " + playerScore + " | " + "Computer'\s Score:" + " " + computerScore + " | " + "Draws:" + " " + drawScore;
    }

    if (roundResult.charAt(0) === 'I'){

        drawScore++;

        console.log("No points added to either player. The current score is" + " " + playerScore + " " + "to" + " " + computerScore + ".");
        updatedResult.textContent = "It's a draw! No Points have been added. Your opponent also chose" + " " + "Paper" + ".";
        updatedScores.textContent = "Your Score:" + " " + playerScore + " | " + "Computer's Score:" + " " + computerScore + " | " + "Draws:" + " " + drawScore;
    }

     // Ends the game if either the player or computer reaches a score of 5
     if (playerScore === 5) {

        startRound.textContent = "The game has ended. You won! Refresh the page to play again."

        // Makes buttons disappear so you can't play anymore
        rockbtn.style.display = "none";
        paperbtn.style.display = "none";
        scizzorsbtn.style.display = "none";

    } else if (computerScore === 5){

        startRound.textContent = "The game has ended. You lost! Refresh the page to play again."
        
        // Makes buttons disappear so you can't play anymore
        rockbtn.style.display = "none";
        paperbtn.style.display = "none";
        scizzorsbtn.style.display = "none";
    } 
});

scizzorsbtn.addEventListener('click', function (e) {

    let roundResult = playRound('Scizzors');

    if (roundResult.charAt(4) === 'w'){ // This is used to recognize the outcome from the playRound(); function.

        playerScore++;

        console.log("The score is" + " " + playerScore + " " + "to" + " " + computerScore);
        updatedResult.textContent = "You won! Your opponent chose" + " " + "Paper" + " " + "which loses to" + " " + "Scizzors" + ".";
        updatedScores.textContent = "Your Score:" + " " + playerScore + " | " + "Computer'\s Score:" + " " + computerScore + " | " + "Draws:" + " " + drawScore;
    }

    if (roundResult.charAt(4) === 'l'){

        computerScore++;

        console.log("The score is" + " " + playerScore + " " + "to" + " " + computerScore);
        updatedResult.textContent = "You lost! Your opponent chose" + " " + "Rock" + " " + "which beats" + " " + "Scizzors" + ".";
        updatedScores.textContent = "Your Score:" + " " + playerScore + " | " + "Computer'\s Score:" + " " + computerScore + " | " + "Draws:" + " " + drawScore;
    }

    if (roundResult.charAt(0) === 'I'){

        drawScore++;

        console.log("No points added to either player. The current score is" + " " + playerScore + " " + "to" + " " + computerScore + ".");
        updatedResult.textContent = "It's a draw! No Points have been added. Your opponent also chose" + " " + "Scizzors" + ".";
        updatedScores.textContent = "Your Score:" + " " + playerScore + " | " + "Computer's Score:" + " " + computerScore + " | " + "Draws:" + " " + drawScore;
    }

     // Ends the game if either the player or computer reaches a score of 5
     if (playerScore === 5) {

        startRound.textContent = "The game has ended. You won! Refresh the page to play again."

        // Makes buttons disappear so you can't play anymore
        rockbtn.style.display = "none";
        paperbtn.style.display = "none";
        scizzorsbtn.style.display = "none";

    } else if (computerScore === 5){

        startRound.textContent = "The game has ended. You lost! Refresh the page to play again."
        
        // Makes buttons disappear so you can't play anymore
        rockbtn.style.display = "none";
        paperbtn.style.display = "none";
        scizzorsbtn.style.display = "none";
    } 
});


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

// Stores the player and the opponent's hand shape:
function playRound(buttonClicked){

    let newcomputerSelection = computerPlay();
    let playerPrompt = buttonClicked;

    //console.log(playerPrompt);
    let playerSelectionLowerCase = playerPrompt.toLowerCase(); // Makes the prompt input case insensitive, the the rest of the function reads lower case strings.

    //console.log(playerSelectionLowerCase);

    if ((playerSelectionLowerCase === "rock" && newcomputerSelection === "paper") 
    || (playerSelectionLowerCase === "scizzors" && newcomputerSelection === "rock") 
    || (playerSelectionLowerCase === "paper" && newcomputerSelection === "scizzors")) {

        console.log("You lost! Your opponent chose" + " " + newcomputerSelection + " " + "which beats" + " " + playerSelectionLowerCase + ".");
        return "You lost! Your opponent chose" + " " + newcomputerSelection + " " + "which beats" + " " + playerSelectionLowerCase + ".";

        /* I had these two console.log lines to test and make sure that both the player and opponent's hands were being stored correctly in the function.
        console.log(playerSelectionLowerCase);
        console.log(newcomputerSelection); */

    } else if (playerSelectionLowerCase === newcomputerSelection){

        console.log("It's a draw! Your opponent also chose" + " " + newcomputerSelection + ".");
        return "It's a draw! Your opponent also chose" + " " + newcomputerSelection + ".";

        /* I had these two console.log lines to test and make sure that both the player and opponent's hands were being stored correctly in the function.
        console.log(playerSelectionLowerCase);
        console.log(newcomputerSelection); */

    } else if ((playerSelectionLowerCase === "rock" && newcomputerSelection === "scizzors") 
    || (playerSelectionLowerCase === "scizzors" && newcomputerSelection === "paper") 
    || (playerSelectionLowerCase === "paper" && newcomputerSelection === "rock")) {

        console.log("You won! Your opponent chose" + " " + newcomputerSelection + " " + "which loses to" + " " + playerSelectionLowerCase + ".");
        return "You won! Your opponent chose" + " " + newcomputerSelection + " " + "which loses to" + " " + playerSelectionLowerCase + ".";

        /* I had these two console.log lines to test and make sure that both the player and opponent's hands were being stored correctly in the function.
        console.log(playerSelectionLowerCase);
        console.log(newcomputerSelection); */

    } else {

        console.log("Please enter a valid option, the input must be 'rock', 'paper', or 'scizzors' only). This round will count as a draw.");
        return "Please enter a valid option, the input must be 'rock', 'paper', or 'scizzors' only). This round will count as a draw."

        /* I had these two console.log lines to test and make sure that both the player and opponent's hands were being stored correctly in the function.
        console.log(playerSelectionLowerCase);
        console.log(newcomputerSelection); */

    }

}





// FROM MY ORIGINAL ROCK PAPER SCIZZORS PROJECT, DO NOT USE IN THIS REVISITED VERSION!
//  function game() {



//     // Start player's scores at 0.
    

//     let roundOne = playRound();
//     console.log(roundOne); // Lets you know how you won, lost, or drew the round.

//     // Round 1
//     if (roundOne.charAt(4) === 'w'){ // This is used to recognize the outcome from the playRound(); function.
//         playerScore++;
//         console.log("Round 1: The score is" + " " + playerScore + " " + "to" + " " + computerScore);
//     }

//     if (roundOne.charAt(4) === 'l'){
//         computerScore++;
//         console.log("Round 1: The score is" + " " + playerScore + " " + "to" + " " + computerScore);
//     }

//     if (roundOne.charAt(0) === 'I'){
//         console.log("Round 1: No points added to either player. The current score is" + " " + playerScore + " " + "to" + " " + computerScore + ".");
//     }

//     if (roundOne.charAt(0) === 'P'){
//         console.log("Round 1: No points added to either player. The current score is" + " " + playerScore + " " + "to" + " " + computerScore + ".");
//     }
 
//     //Round 2
//     let roundTwo = playRound();
//     console.log(roundTwo);

//     if (roundTwo.charAt(4) === 'w'){
//         playerScore++;
//         console.log("Round 2: The score is" + " " + playerScore + " " + "to" + " " + computerScore);
//     }

//     if (roundTwo.charAt(4) === 'l'){
//         computerScore++;
//         console.log("Round 2: The score is" + " " + playerScore + " " + "to" + " " + computerScore);
//     }

//     if (roundTwo.charAt(0) === 'I'){
//         console.log("Round 2: No points added to either player. The current score is" + " " + playerScore + " " + "to" + " " + computerScore + ".");
//     }

//     if (roundTwo.charAt(0) === 'P'){
//         console.log("Round 2: No points added to either player. The current score is" + " " + playerScore + " " + "to" + " " + computerScore + ".");
//     }

//     // Round 3
//     let roundThree = playRound();
//     console.log(roundThree);

//     if (roundThree.charAt(4) === 'w'){
//         playerScore++;
//         console.log("Round 3: The score is" + " " + playerScore + " " + "to" + " " + computerScore);
//     }

//     if (roundThree.charAt(4) === 'l'){
//         computerScore++;
//         console.log("Round 3: The score is" + " " + playerScore + " " + "to" + " " + computerScore);
//     }

//     if (roundThree.charAt(0) === 'I'){
//         console.log("Round 3: No points added to either player. The current score is" + " " + playerScore + " " + "to" + " " + computerScore + ".");
//     }

//     if (roundThree.charAt(0) === 'P'){
//         console.log("Round 3: No points added to either player. The current score is" + " " + playerScore + " " + "to" + " " + computerScore + ".");
//     }

//     //Round 4
//     let roundFour = playRound();
//     console.log(roundFour);

//     if (roundFour.charAt(4) === 'w'){
//         playerScore++;
//         console.log("Round 4: The score is" + " " + playerScore + " " + "to" + " " + computerScore);
//     }

//     if (roundFour.charAt(4) === 'l'){
//         computerScore++;
//         console.log("Round 4: The score is" + " " + playerScore + " " + "to" + " " + computerScore);
//     }

//     if (roundFour.charAt(0) === 'I'){
//         console.log("Round 4: No points added to either player. The current score is" + " " + playerScore + " " + "to" + " " + computerScore + ".");
//     }
    
//     if (roundFour.charAt(0) === 'P'){
//         console.log("Round 4: No points added to either player. The current score is" + " " + playerScore + " " + "to" + " " + computerScore + ".");
//     }

//     //Round 5
//     let roundFive = playRound();
//     console.log(roundFive);

//     if (roundFive.charAt(4) === 'w'){
//         playerScore++;
//         console.log("Round 5: The final score is" + " " + playerScore + " " + "to" + " " + computerScore);
//     }

//     if (roundFive.charAt(4) === 'l'){
//         computerScore++;
//         console.log("Round 5: The final score is" + " " + playerScore + " " + "to" + " " + computerScore);
//     }

//     if (roundFive.charAt(0) === 'I'){
//         console.log("Round 5: No points added to either player. The final score is" + " " + playerScore + " " + "to" + " " + computerScore + ".");
//     }

//     if (roundFive.charAt(0) === 'P'){
//         console.log("Round 5: No points added to either player. The current score is" + " " + playerScore + " " + "to" + " " + computerScore + ".");
//     }

//     if (playerScore > computerScore) {
//         return "You won the game of 5! The game is now complete, thanks for playing!"
//     } else if (playerScore < computerScore) {
//         return "You lost the game of 5! The game is now complete, thanks for playing!"
//     } else {
//         return "It's a draw! The game is now complete, thanks for playing!"
//     }

//}