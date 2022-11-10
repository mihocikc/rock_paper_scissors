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

//playing one round of RPS
function playRound() {
  //calling getPlayerChoice function to get playerThrow
  let playerThrow = getPlayerChoice();
  //calling getComputerChoice to get computerThrow
  let computerThrow = getComputerChoice();
  //declaring new functions for repeting win/loss messages
  let messageLoss = function (playerThrow, computerThrow) {
    return `You lose, ${computerThrow} beats ${playerThrow}`;
  };
  let messageWin = function (playerThrow, computerThrow) {
    return `You win, ${playerThrow} beats ${computerThrow}`;
  };
  //comparing the player throws
  if (playerThrow === computerThrow) {
    return `You threw ${playerThrow} and computer threw ${computerThrow}. It's a tie!`;
  } else if (playerThrow === "rock") {
    if (computerThrow === "paper") {
      return messageLoss(playerThrow, computerThrow);
    } else if (computerThrow === "scissors") {
      return messageWin(playerThrow, computerThrow);
    }
  } else if (playerThrow === "paper") {
    if (computerThrow === "scissors") {
      return messageLoss(playerThrow, computerThrow);
    } else if (computerThrow === "rock") {
      return messageWin(playerThrow, computerThrow);
    }
  } else if (playerThrow === "scissors") {
    if (computerThrow === "rock") {
      return messageLoss(playerThrow, computerThrow);
    } else if (computerThrow === "paper") {
      return messageWin(playerThrow, computerThrow);
    }
  }
}

//playing a full 5-round game with scoring
function playGame() {
  for (let i = 0; i < 5; i++) {
    console.log(playRound());
  }
}

//console.log(getComputerChoice());
//console.log(getPlayerChoice());
//console.log(playRound());
console.log(playGame());
