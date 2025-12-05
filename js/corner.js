document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("startBtn");

  startBtn.onclick = () => {
    if (cornerGameRunning) return;

    const betAmount = parseInt(cornerBetInput.value);
    if (!isValidBet(betAmount)) {
      cornerResult.innerHTML = "<strong>Invalid bet amount!</strong>";
      return;
    }

    cornerBetAmount = betAmount;
    cornerGameRunning = true;
    cornerResult.innerHTML = "";

    // Reset position
    squareX = 130;
    squareY = 140;
    redSquareEl.style.left = squareX + "px";
    redSquareEl.style.top = squareY + "px";

    // Random direction
    const angle = Math.random() * 2 * Math.PI;
    dx = Math.cos(angle) * speed;
    dy = Math.sin(angle) * speed;

    // Timer
    cornerGameTimer = setTimeout(() => {
      cornerGameRunning = false;
      balance -= cornerBetAmount;
      updateBalance();
      cornerResult.innerHTML = `<strong>Time's up! You lost ${cornerBetAmount} points.</strong>`;
      cornerBetInput.value = "";
      cornerBetAmount = 0;
    }, 10000);

    moveSquare();
  };
});

function moveSquare() {
  if (!cornerGameRunning) return;

  squareX += dx;
  squareY += dy;

  if (squareX <= 0 || squareX >= boxSize - squareWidth) dx = -dx;
  if (squareY <= 0 || squareY >= boxSize - squareHeight) dy = -dy;

  redSquareEl.style.left = squareX + "px";
  redSquareEl.style.top = squareY + "px";

  if (checkCornerHit()) {
    cornerGameRunning = false;
    clearTimeout(cornerGameTimer);

    balance += cornerBetAmount * 2;
    updateBalance();
    cornerResult.innerHTML = `<strong>Corner hit! You won ${
      cornerBetAmount * 2
    } points!</strong>`;

    cornerBetInput.value = "";
    cornerBetAmount = 0;
    return;
  }

  cornerAnimationId = requestAnimationFrame(moveSquare);
}
