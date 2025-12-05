document.addEventListener("DOMContentLoaded", () => {
  const headsBtn = document.getElementById("headsBtn");
  const tailsBtn = document.getElementById("tailsBtn");
  const flipBtn = document.getElementById("flipBtn");

  headsBtn.onclick = () => {
    selectedCoinSide = "heads";
    coinSelection.innerHTML = `You selected: <strong>heads</strong>`;
  };

  tailsBtn.onclick = () => {
    selectedCoinSide = "tails";
    coinSelection.innerHTML = `You selected: <strong>tails</strong>`;
  };

  flipBtn.onclick = () => {
    if (!selectedCoinSide) {
      coinResult.innerHTML =
        "<strong>Please select Heads or Tails first!</strong>";
      return;
    }

    const betAmount = parseInt(coinBetInput.value);
    if (!isValidBet(betAmount)) {
      coinResult.innerHTML = "<strong>Invalid bet amount!</strong>";
      return;
    }

    const result = Math.random() < 0.5 ? "heads" : "tails";
    const won = result === selectedCoinSide;

    if (won) {
      balance += betAmount;
      coinResult.innerHTML = `<strong>You won! It was ${result}. You gained ${betAmount} points!</strong>`;
    } else {
      balance -= betAmount;
      coinResult.innerHTML = `<strong>You lost! It was ${result}. You lost ${betAmount} points.</strong>`;
    }

    updateBalance();
    coinBetInput.value = "";
  };
});
