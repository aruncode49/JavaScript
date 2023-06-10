const number = Math.floor(Math.random() * 100 + 1);

let guessNumber;
let numberOfGuess = 0;
while (guessNumber !== number) {
  guessNumber = prompt("Enter your guess number : ");
  numberOfGuess++;
  guessNumber = Number.parseInt(guessNumber);
  if (guessNumber < number) {
    alert("Your guess is too short");
  } else if (guessNumber > number) {
    alert("Your guess is too high");
  } else if (guessNumber === number) {
    alert(`Your score is ${100 - numberOfGuess}`);
  }
}
