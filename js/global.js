// GLOBAL STATE
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

// DOM references (collected once)
const balanceEl = document.getElementById("balanceEl");

const coinSelection = document.getElementById("coinSelection");
const coinResult = document.getElementById("coinResult");
const coinBetInput = document.getElementById("coinBetInput");

const diceSelection = document.getElementById("diceSelection");
const diceResult = document.getElementById("diceResult");
const diceBetInput = document.getElementById("diceBetInput");

const cornerResult = document.getElementById("cornerResult");
const cornerBetInput = document.getElementById("cornerBetInput");
const redSquareEl = document.getElementById("redSquareEl");

// UPDATE BALANCE
function updateBalance() {
  balanceEl.textContent = balance;
}

// RESET EVERYTHING
document.getElementById("resetBtn").onclick = function () {
  balance = 1000;
  selectedCoinSide = null;
  selectedDiceNumber = null;

  coinSelection.innerHTML = "";
  coinResult.innerHTML = "";
  diceSelection.innerHTML = "";
  diceResult.innerHTML = "";

  // Stop corner game
  if (cornerGameRunning) {
    clearTimeout(cornerGameTimer);
    cancelAnimationFrame(cornerAnimationId);
  }

  cornerGameRunning = false;
  cornerBetInput.value = "";
  cornerResult.innerHTML = "";

  // Reset position
  squareX = 130;
  squareY = 140;

  redSquareEl.style.left = squareX + "px";
  redSquareEl.style.top = squareY + "px";

  updateBalance();
};
