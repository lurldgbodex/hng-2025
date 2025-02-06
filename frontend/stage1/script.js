// Predefined set of colors
const colors = [
  "#FF5733",
  "#33FF57",
  "#3357FF",
  "#FF33A1",
  "#A133FF",
  "#33FFF5",
];

const colorBox = document.querySelector('[data-testid="colorBox"]');
const colorOptions = document.querySelector('[data-testid="colorOptions"]');
const gameStatus = document.querySelector('[data-testid="gameStatus"]');
const scoreElement = document.querySelector('[data-testid="score"]');
const newGameButton = document.querySelector('[data-testid="newGameButton"]');

let targetColor;
let score = 0;

function initGame() {
  scoreElement.textContent = `Score: ${score}`;
  gameStatus.textContent = "Make your guess!";

  targetColor = colors[Math.floor(Math.random() * colors.length)];
  colorBox.style.backgroundColor = targetColor;

  colorOptions.innerHTML = colors
    .map(
      (color) =>
        `<button style="background-color: ${color};" data-color="${color}"></button>`
    )
    .join("");

  const buttons = document.querySelectorAll(
    '[data-testid="colorOptions"] button'
  );
  buttons.forEach((button) => {
    button.addEventListener("click", handleGuess);
  });
}

function handleGuess(event) {
  const guessedColor = event.target.dataset.color;
  if (guessedColor === targetColor) {
    gameStatus.textContent = "Correct! 🎉";
    score++;
    scoreElement.textContent = `Score: ${score}`;
    setTimeout(initGame, 1000);
  } else {
    gameStatus.textContent = "Wrong! Try again. 😢";
    event.target.style.opacity = "0.5";
  }
}

newGameButton.addEventListener("click", () => {
  score = 0;
  scoreElement.textContent = `Score: ${score}`;
  initGame();
});

initGame();
