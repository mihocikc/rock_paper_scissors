function getComputerChoice() {
  let computerChoice = Math.trunc(Math.random() * 3);
  if (computerChoice === 0) {
    return "rock";
  } else if (computerChoice === 1) {
    return "paper";
  } else if (computerChoice === 2) {
    return "scissors";
  }
}

function getPlayerChoice() {
  let playerChoice = prompt("Choose rock, paper, or scissors");
  while (playerChoice == null) {
    playerChoice = prompt("Choose rock, paper, or scissors");
  }
  playerChoice = playerChoice.toLowerCase();
  if (playerChoice !== "rock" || "paper" || "scissors") {
    return prompt("Invalid response. Choose rock, paper, or scissors");
  }
}

//function playRound

//console.log(getComputerChoice()`);
console.log(getPlayerChoice());
