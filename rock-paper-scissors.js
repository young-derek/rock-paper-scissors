/* This program is to simulate rock paper scissors using the Javascript console. */

// Declare constants.
const RequiredWins = 5;

// Declare variables.
let playerWins = 0;
let computerWins = 0;
let totalGames = 0;
let result = "";
let computerSelection;
let gameOver = false;
let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');
let gameResult = document.getElementById('game-result');
let scoreboard = document.getElementById('scoreboard');

// Create event handlers for buttons.
rock.addEventListener('click', playRound);
paper.addEventListener('click', playRound);
scissors.addEventListener('click', playRound);

// Determine the computer's choice of rock/paper/scissors.
function computerPlay() {
    let computerChoiceNumber = Math.floor(Math.random() * 3);

    return computerChoiceNumber === 0 ? "rock"
        : computerChoiceNumber === 1 ? "scissors"
            : "paper";
}

// Function to determine and return the winner of the match.
function playRound(event) {
    playerSelection = event.target.value;
    computerSelection = computerPlay();

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

    // Track and display overall game state.
    game();

}

// Function to track and display game scores and results.
function game() {

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

    // Increment total games played.
    totalGames++;

    // Display the round's results.
    gameResult.textContent = `${displayResult} You chose ${playerSelection}.
        The computer chose ${computerSelection}.`;

    // Display the overall game's scoreboard.
    scoreboard.textContent = `Current Wins: ${playerWins},
        Current Losses: ${computerWins}, Total games: ${totalGames}`;

    // Check if either the player or computer reached the point limit,
    // winning the game. If the game is finished, display the results
    // and set game over to true.
    if (playerWins === RequiredWins) {
        scoreboard.textContent = `You win the game! Congratulations! 
            Your score was ${playerWins},
            the computer's score was ${computerWins}.
            Click rock/paper/scissors to play again.`;
        gameOver = true;
    }
    else if (computerWins === RequiredWins) {
        scoreboard.textContent = `The computer wins the game! Better luck next time!
            Your score was ${playerWins},
            the computer's score was ${computerWins}.
            Click rock/paper/scissors to play again.`;
        gameOver = true;
    }

    // If the game is finished, reset the scores.
    if (gameOver === true) {
        playerWins = 0;
        computerWins = 0;
        totalGames = 0;
        gameOver = false;
    }
}