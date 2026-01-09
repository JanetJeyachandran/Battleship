import Ship from "./ship.js";

export default function Gameboard() {
  const size = 10;
  const board = Array(size)
    .fill(null)
    .map(() => Array(size).fill(null));

  const ships = [];
  const missedShots = [];

  function placeShip(length, x, y, horizontal = true) {
    const ship = Ship(length);
    ships.push({ ship, x, y, horizontal });

    for (let i = 0; i < length; i++) {
      if (horizontal) board[y][x + i] = ship;
      else board[y + i][x] = ship;
    }
  }

  function receiveAttack(x, y) {
    const target = board[y][x];

    if (target === null) {
      missedShots.push([x, y]);
      return "miss";
    }

    target.hit();
    return "hit";
  }

  function allShipsSunk() {
    return ships.every((obj) => obj.ship.isSunk());
  }

  return {
    board,
    placeShip,
    receiveAttack,
    missedShots,
    allShipsSunk,
  };
}
