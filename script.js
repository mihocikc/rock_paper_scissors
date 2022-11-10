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
function playRound() {
  let playerThrow = getPlayerChoice();
  let computerThrow = getComputerChoice();
  if (playerThrow === computerThrow) {
    console.log(
      `You threw ${playerThrow} and computer threw ${computerThrow}. It's a tie! Try again`
    );
    return "none";
  } else if (
    (playerThrow === "rock" && computerThrow === "scissors") ||
    (playerThrow === "paper" && computerThrow === "rock") ||
    (playerThrow === "scissors" && computerThrow === "paper")
  ) {
    console.log(
      `You threw ${playerThrow} and computer threw ${computerThrow}. You win!`
    );
    return "player";
  } else {
    console.log(
      `You threw ${playerThrow} and computer threw ${computerThrow}. You lose!`
    );
    return "computer";
  }
}

//old:
// function gameScore(result) {
//   if (result === win) {
//     playerScore++;
//   } else if (result === lose) {
//     computerScore++;
//   } else if (result === tie) {
//     tieScore++;
//   }
//   console.log(playerScore, computerScore, tieScore);
// }

//playing a full 5-round game
function playGame() {
  // Initialize scores at 0
  let playerScore = 0;
  let computerScore = 0;
  let tieScore = 0;

  // Play games until one player hits 5 points
  while (playerScore < 5 && computerScore < 5) {
    // Get result of round
    let winner = playRound();
    // If result = player wins, increment playerScore
    if (winner === "player") {
      playerScore++;
    }
    // If result = computer wins, increment computerScore
    if (winner === "computer") {
      computerScore++;
    }
    // If result = tie, increment tieScore
    if (winner === "none") {
      tieScore++;
    }
  }
  console.log(
    `Final scores: You - ${playerScore}, Computer - ${computerScore}, Ties - ${tieScore}`
  );
  if (playerScore > computerScore) {
    console.log(`Player wins!`);
  } else if (computerScore > playerScore) {
    console.log(`Sorry, computer wins!`);
  } else {
    console.log(`No one wins`);
  }
}

//console.log(getComputerChoice());
//console.log(getPlayerChoice());
//console.log(playRound(playerThrow, computerThrow));
playGame();
