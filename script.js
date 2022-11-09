// test: console.log('Hello World!');

//GETTING COMPUTER CHOICE
function getComputerChoice() {
  let randomNumber = Math.trunc(Math.random() * 3);
  if (randomNumber === 2) {
    return "rock";
  } else if (randomNumber === 1) {
    return "paper";
  } else if (randomNumber === 0) {
    return "scissors";
  }
}
const computerSelection = getComputerChoice();
//GETTING PLAYER CHOICE
let playerSelection = prompt("Rock, paper, or scissors?");
playerSelection = playerSelection.toLowerCase();

//Display message functions to reduce repetition
function displayMessageWin(player, computer) {
  console.log(`You win, ${player} beats ${computer}`);
}
function displayMessageLoss(player, computer) {
  console.log(`You lose, ${computer} beats ${player}`);
}

//PLAYING A ROUND
function playRound(playerSelection, computerSelection) {
  if (playerSelection === "paper" && computerSelection === "rock") {
    return displayMessageWin(playerSelection, computerSelection);
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return displayMessageLoss(playerSelection, computerSelection);
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return displayMessageWin(playerSelection, computerSelection);
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return displayMessageLoss(playerSelection, computerSelection);
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return displayMessageWin(playerSelection, computerSelection);
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return displayMessageLoss(playerSelection, computerSelection);
  } else {
    return `Tie! You both chose ${playerSelection}`;
  }
}

//console.log(playerSelection, computerSelection);
console.log(playRound(playerSelection, computerSelection));
