// test: console.log('Hello World!');

//GETTING COMPUTER CHOICE

//Display message functions to reduce repetition
function displayMessageWin(player, computer) {
  console.log(`You win, ${player} beats ${computer}`);
}
function displayMessageLoss(player, computer) {
  console.log(`You lose, ${computer} beats ${player}`);
}

let playerScore = 0;
let computerScore = 0;

let getComputerChoice = function () {
  let randomNumber = Math.trunc(Math.random() * 3);
  if (randomNumber === 2) {
    return "rock";
  } else if (randomNumber === 1) {
    return "paper";
  } else if (randomNumber === 0) {
    return "scissors";
  }
};
let computerSelection = getComputerChoice();
let playerSelection = prompt("Rock, paper, or scissors?").toLowerCase();
//PLAYING A ROUND
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    console.log(`It's a tie!`);
  }
  if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      console.log(displayMessageWin("paper", "rock"));
    } else if (computerSelection === "scissors") {
      console.log(displayMessageLoss("paper", "scissors"));
    }
  }
  if (playerSelection === "scissors") {
    if (computerSelection === "paper") {
      console.log(displayMessageWin("scissors", "paper"));
    } else if (computerSelection === "rock") {
      console.log(displayMessageLoss("scissors", "rock"));
    }
  }
  if (playerSelection === "rock") {
    if (computerSelection === "scissors") {
      console.log(displayMessageWin("rock", "scissors"));
    } else if (computerSelection === "paper") {
      console.log(displayMessageLoss("rock", "paper"));
    }
  }
}
console.log(playerSelection, computerSelection);
console.log(playRound());
