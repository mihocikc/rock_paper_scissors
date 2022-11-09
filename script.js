// test: console.log('Hello World!');

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
console.log(getComputerChoice());
//console.log(playRound(playerSelection, getComputerChoice()));
