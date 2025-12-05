// GLOBAL VARIABLES
let balance = 1000;

let selectedCoinSide = null;
let selectedDiceNumber = null;

let cornerGameRunning = false;
let cornerGameTimer = null;
let cornerAnimationId = null;
let cornerBetAmount = 0;

let squareX = 130;
let squareY = 140;
let dx = 0;
let dy = 0;

const squareWidth = 40;
const squareHeight = 20;
const boxSize = 300;
const speed = 2;

// DOM references (declared now, assigned later)
let balanceEl,
  coinSelection,
  coinResult,
  coinBetInput,
  diceSelection,
  diceResult,
  diceBetInput,
  cornerResult,
  cornerBetInput,
  redSquareEl,
  resetBtn;

document.addEventListener("DOMContentLoaded", () => {
  // Assign DOM references only AFTER page loads
  balanceEl = document.getElementById("balanceEl");

  coinSelection = document.getElementById("coinSelection");
  coinResult = document.getElementById("coinResult");
  coinBetInput = document.getElementById("coinBetInput");

  diceSelection = document.getElementById("diceSelection");
  diceResult = document.getElementById("diceResult");
  diceBetInput = document.getElementById("diceBetInput");

  cornerResult = document.getElementById("cornerResult");
  cornerBetInput = document.getElementById("cornerBetInput");
  redSquareEl = document.getElementById("redSquareEl");

  resetBtn = document.getElementById("resetBtn");

  updateBalance();

  // RESET BUTTON LOGIC
  resetBtn.addEventListener("click", () => {
    balance = 1000;
    updateBalance();

    selectedCoinSide = null;
    selectedDiceNumber = null;

    coinSelection.innerHTML = "";
    coinResult.innerHTML = "";
    diceSelection.innerHTML = "";
    diceResult.innerHTML = "";
    cornerResult.innerHTML = "";

    if (cornerGameRunning) {
      clearTimeout(cornerGameTimer);
      cancelAnimationFrame(cornerAnimationId);
    }

    cornerGameRunning = false;
    cornerBetAmount = 0;
    cornerBetInput.value = "";

    squareX = 130;
    squareY = 140;

    redSquareEl.style.left = squareX + "px";
    redSquareEl.style.top = squareY + "px";
  });
});

// Update balance visually
function updateBalance() {
  if (balanceEl) balanceEl.textContent = balance;
}
