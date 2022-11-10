let choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  return choices[Math.trunc(Math.random() * choices.length)];
}

function getPlayerChoice() {
  //get user input and convert to lowercase
  let playerChoice = prompt("Choose rock, paper, or scissors");
  playerChoice = playerChoice.toLowerCase();
  // if empty input:
  while (playerChoice == null) {
    playerChoice = prompt("Choose rock, paper, or scissors");
  }
  // validate user input with choices array
  let validation = validatePlayerChoice(playerChoice);
  // if in choices array:
  if (validation == true) {
    return playerChoice;
  } else {
    //if not in choices array:
    return getPlayerChoice();
  }
}

//validate user input function
function validatePlayerChoice(choice) {
  if (choices.includes(choice)) {
    return true;
  }
}

function playRound() {
  let playerThrow = getPlayerChoice();
  let computerThrow = getComputerChoice();
  if (playerThrow === computerThrow) {
    return `You threw ${playerThrow} and computer threw ${computerThrow}. It's a tie!`;
  } else if (playerThrow === "rock") {
    if (computerThrow === "paper") {
      return `You lose, ${computerThrow} beats ${playerThrow}`;
    } else if (computerThrow === "scissors") {
      return `You win, ${playerThrow} beats ${computerThrow}`;
    }
  } else if (playerThrow === "paper") {
    if (computerThrow === "scissors") {
      return `You lose, ${computerThrow} beats ${playerThrow}`;
    } else if (computerThrow === "rock") {
      return `You win, ${playerThrow} beats ${computerThrow}`;
    }
  } else if (playerThrow === "scissors") {
    if (computerThrow === "rock") {
      return `You lose, ${computerThrow} beats ${playerThrow}`;
    } else if (computerThrow === "paper") {
      return `You win, ${playerThrow} beats ${computerThrow}`;
    }
  }
}

//console.log(getComputerChoice());
//console.log(getPlayerChoice());
console.log(playRound());
