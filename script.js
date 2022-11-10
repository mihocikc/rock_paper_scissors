let choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  return choices[Math.trunc(Math.random() * choices.length)];
}

function getPlayerChoice() {
  let playerChoice = prompt("Choose rock, paper, or scissors");
  playerChoice = playerChoice.toLowerCase();
  let validation = validatePlayerChoice(playerChoice);
  if (validation == true) {
    return playerChoice;
  }
}

function validatePlayerChoice(choice) {
  if (choices.includes(choice)) {
    return true;
  }
}

function playRound() {
  let playerThrow = getPlayerChoice();
  let computerThrow = getComputerChoice();
  return `You threw ${playerThrow} and computer threw ${computerThrow}!`;
}

//console.log(getComputerChoice());
console.log(getPlayerChoice());
//console.log(playRound());
