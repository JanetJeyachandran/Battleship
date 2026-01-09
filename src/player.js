export default function Player(isComputer = false) {
  const usedMoves = new Set();

  function getRandomMove() {
    let x, y;

    do {
      x = Math.floor(Math.random() * 10);
      y = Math.floor(Math.random() * 10);
    } while (usedMoves.has(`${x},${y}`));

    usedMoves.add(`${x},${y}`);
    return [x, y];
  }

  function attack(enemyBoard, x, y) {
    if (isComputer) {
      const [rx, ry] = getRandomMove();
      return enemyBoard.receiveAttack(rx, ry);
    }

    return enemyBoard.receiveAttack(x, y);
  }

  return { isComputer, attack };
}
