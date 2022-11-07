// test: console.log('Hello World!');

const getComputerChoice = function () {
  let randomNumber = Math.trunc(Math.random() * 3);
  if (randomNumber === 2) {
    console.log("rock");
  } else if (randomNumber === 1) {
    console.log("paper");
  } else if (randomNumber === 0) {
    console.log("scissors");
  }
};

function playRound(playerChoice, computerChoice) {
  playerChoice = prompt("Choose rock, paper, or scissors");
  return playerChoice.toLowerCase();
}

//console.log(getComputerChoice());
console.log(playRound());
