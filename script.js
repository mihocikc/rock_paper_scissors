// test: console.log('Hello World!');

const getComputerChoice = function () {
  let randomNumber = Math.trunc(Math.random() * 3);
  if (randomNumber === 2) {
    console.log("Rock");
  } else if (randomNumber === 1) {
    console.log("Paper");
  } else if (randomNumber === 0) {
    console.log("Scissors");
  }
};

console.log(getComputerChoice());
