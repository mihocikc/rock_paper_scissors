let choices = ["rock", "paper", "scissors"]; //global array to get computer choice and validate user choice

function getComputerChoice() {
  return choices[Math.trunc(Math.random() * choices.length)];
} //easy enough, this gets the computer choice from the array above

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

//playing one round of RPS
function playRound(playerThrow, computerThrow) {
  if (playerThrow === computerThrow) {
    return tie;
  } else if (
    (playerThrow === "rock" && computerThrow === "scissors") ||
    (playerThrow === "paper" && computerThrow === "rock") ||
    (playerThrow === "scissors" && computerThrow === "paper")
  ) {
    return win;
  } else {
    return lose;
  }
}

//scoring:
function gameScore(result) {
  if (result === win) {
    playerScore++;
  } else if (result === lose) {
    computerScore++;
  } else if (result === tie) {
    tieScore++;
  }
  console.log(playerScore, computerScore, tieScore);
}

let playerScore = 0;
let computerScore = 0;
let tieScore = 0;
let playerThrow = getPlayerChoice();
let computerThrow = getComputerChoice();
const win = `You threw ${playerThrow} and computer threw ${computerThrow}. You win!`;
const lose = `You threw ${playerThrow} and computer threw ${computerThrow}. You lose!`;
const tie = `You threw ${playerThrow} and computer threw ${computerThrow}. It's a tie! Try again`;

//playing a full 5-round game
function playGame() {
  for (let i = 0; i < 5; i++) {
    console.log(playRound());
  }
}

//console.log(getComputerChoice());
//console.log(getPlayerChoice());
console.log(playRound(playerThrow, computerThrow));
//console.log(playGame());
