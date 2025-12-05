document.addEventListener("DOMContentLoaded", () => {
  const rollBtn = document.getElementById("rollBtn");
  const diceButtons = document.querySelectorAll(".diceBtn");

  diceButtons.forEach((btn) => {
    btn.onclick = () => {
      selectedDiceNumber = parseInt(btn.dataset.value);
      diceSelection.innerHTML = `You selected: <strong>${selectedDiceNumber}</strong>`;
    };
  });

  rollBtn.onclick = () => {
    if (!selectedDiceNumber) {
      diceResult.innerHTML = "<strong>Please select a number first!</strong>";
      return;
    }

    const betAmount = parseInt(diceBetInput.value);
    if (!isValidBet(betAmount)) {
      diceResult.innerHTML = "<strong>Invalid bet amount!</strong>";
      return;
    }

    const rolled = Math.floor(Math.random() * 6) + 1;
    let output = `You rolled: <strong>${rolled}</strong>`;

    if (rolled === selectedDiceNumber) {
      const win = betAmount * 5;
      balance += win;
      output += `<br><strong>You win ${win} points!</strong>`;
    } else {
      balance -= betAmount;
      output += `<br><strong>You lose ${betAmount} points.</strong>`;
    }

    diceResult.innerHTML = output;
    updateBalance();
    diceBetInput.value = "";
  };
});
