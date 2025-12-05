// Validate bet amount
function isValidBet(amount) {
  return amount > 0 && amount <= balance;
}

// Rectangle intersection for overlap check
function rectIntersectionArea(rect1, rect2) {
  const xOverlap = Math.max(
    0,
    Math.min(rect1.x + rect1.width, rect2.x + rect2.width) -
      Math.max(rect1.x, rect2.x)
  );
  const yOverlap = Math.max(
    0,
    Math.min(rect1.y + rect1.height, rect2.y + rect2.height) -
      Math.max(rect1.y, rect2.y)
  );
  return xOverlap * yOverlap;
}

// Check for 75% corner overlap
function checkCornerHit() {
  const redRect = {
    x: squareX,
    y: squareY,
    width: squareWidth,
    height: squareHeight,
  };

  const corners = [
    { x: 0, y: 0, width: 40, height: 20 },
    { x: 260, y: 0, width: 40, height: 20 },
    { x: 0, y: 280, width: 40, height: 20 },
    { x: 260, y: 280, width: 40, height: 20 },
  ];

  const minOverlap = 0.75 * squareWidth * squareHeight; // 600

  for (const corner of corners) {
    if (rectIntersectionArea(redRect, corner) >= minOverlap) {
      return true;
    }
  }
  return false;
}
