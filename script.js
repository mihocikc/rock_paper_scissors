function getComputerChoice() {
  let computerChoice = Math.trunc(Math.random() * 3);
  if (computerChoice === 0) {
    return "rock";
  } else if (computerChoice === 1) {
    return "paper";
  } else if (computerChoice === 2) {
    return "scissors";
  }
  console.log(`Computer threw ${computerChoice}`);
}

function getPlayerChoice() {
  let playerChoice = prompt("Choose rock, paper, or scissors").toLowerCase();
  if (playerChoice === "rock") {
    return `You threw ${playerChoice}`;
  } else if (playerChoice === "paper") {
    return `You threw ${playerChoice}`;
  } else if (playerChoice === "scissors") {
    return `You threw ${playerChoice}`;
  } else {
    return `Invalid response. Pick rock, paper, or scissors`;
  }
}

console.log(getComputerChoice());
console.log(getPlayerChoice());
