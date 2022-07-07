function computerPlay()
{
    let computerChoiceNumber = Math.floor(Math.random()*3);

    return computerChoiceNumber === 0 ? "rock"
    : computerChoiceNumber === 1 ? "scissors"
    : "paper";
}

function playRound(playerSelection, computerSelection)
{
    playerSelection = playerSelection.toLowerCase();

    let winner = "";
    
    if (playerSelection === computerSelection)
    {
        return "Draw!";
    }
    else if (playerSelection === "rock" && computerSelection === "scissors"
        || playerSelection === "scissors" && computerSelection === "paper"
        || playerSelection === "paper" && computerSelection === "rock")
    {
        return `You win! ${playerSelection} beats ${computerSelection}.`;
    }
    else if (playerSelection === "rock" && computerSelection === "paper"
        || playerSelection === "scissors" && computerSelection === "rock"
        || playerSelection === "paper" && computerSelection === "scissors")
    {
        return `You lose! ${computerSelection} beats ${playerSelection}.`;
    }
    else
    {
        return "Invalid choice!";
    }
}

// function game()
// {
//     let playerWins = 0;
//     let computerWins = 0;
//     let totalGames = 0;

//     for (let i = 0; i < 5; i++)
//     {

//     }

// }

playerSelection = prompt("Type rock, paper or scissors.");
computerSelection = computerPlay();

console.log(`You chose ${playerSelection}. The computer chose ${computerSelection}.`);
console.log(playRound(playerSelection, computerSelection));