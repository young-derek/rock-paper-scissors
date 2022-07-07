/* This program is to simulate rock paper scissors using the Javascript console. */

// Run the game.
game();

// Determine the computer's choice of rock/paper/scissors.
function computerPlay() {
    let computerChoiceNumber = Math.floor(Math.random() * 3);

    return computerChoiceNumber === 0 ? "rock"
        : computerChoiceNumber === 1 ? "scissors"
            : "paper";
}

// Function to determine and return the winner of the match.
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    let result = "";

    if (playerSelection === computerSelection) {
        result = "Draw";
    }
    else if (playerSelection === "rock" && computerSelection === "scissors"
        || playerSelection === "scissors" && computerSelection === "paper"
        || playerSelection === "paper" && computerSelection === "rock") {
        result = "Player";
    }
    else if (playerSelection === "rock" && computerSelection === "paper"
        || playerSelection === "scissors" && computerSelection === "rock"
        || playerSelection === "paper" && computerSelection === "scissors") {
        result = "Computer";
    }
    else {
        result = "Invalid";
    }

    return result;
}

// The main function which runs the game, and tracks/displays results.
function game() {

    // Declare variables to track player and computer wins.
    let playerWins = 0;
    let computerWins = 0;

    for (let i = 1; i <= 5; i++) {
        // Prompt the player for their choice and set the computer's choice.
        let playerSelection = prompt("Type rock, paper or scissors.");
        let computerSelection = computerPlay();

        // Play the round using the player and computer's choices.
        let result = playRound(playerSelection, computerSelection);

        // Save the round's result to display and increment the winner's counter.
        let displayResult = "";
        if (result === "Draw") {
            displayResult = "Draw!";
        }
        else if (result === "Player") {
            displayResult = "You win!";
            playerWins++;
        }
        else if (result === "Computer") {
            displayResult = "You lose!";
            computerWins++;
        }
        else if (result === "Invalid") {
            displayResult = "Invalid input!";
            i--;
        }

        // Display the round's results to the player.
        console.log(`${displayResult} You chose ${playerSelection}. The computer chose ${computerSelection}.`);

        // Display the overall game's scoreboard.
        console.log(`Current Wins: ${playerWins}, Current Losses: ${computerWins}, Total games: ${i}`);
    }

    // Display the results of the overall game.
    if (playerWins > computerWins) {
        console.log("You win the game! Congratulations!");
    }
    else if (computerWins > playerWins) {
        console.log("The computer wins the game! Better luck next time!");
    }
    else {
        console.log("This game was a draw! Play again!");
    }
}



