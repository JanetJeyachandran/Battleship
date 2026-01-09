import Gameboard from "./gameboard.js";
import Player from "./player.js";
import { renderBoards, updateCell, showMessage } from "./ui.js";

const player = Player(false);
const computer = Player(true);

const playerBoard = Gameboard();
const computerBoard = Gameboard();

playerBoard.placeShip(4, 0, 0);
playerBoard.placeShip(3, 3, 3);
computerBoard.placeShip(4, 1, 1);
computerBoard.placeShip(3, 5, 5);

renderBoards(playerBoard, computerBoard);

document.getElementById("computer-board").addEventListener("click", (e) => {
  if (!e.target.dataset.x) return;

  const x = Number(e.target.dataset.x);
  const y = Number(e.target.dataset.y);

  const result = player.attack(computerBoard, x, y);
  updateCell("computer-board", x, y, result);

  if (computerBoard.allShipsSunk()) {
    showMessage("🎉 YOU WIN!");
    return;
  }

  const [cx, cy] = computerTurn(playerBoard);
  const compResult = playerBoard.receiveAttack(cx, cy);
  updateCell("player-board", cx, cy, compResult);

  if (playerBoard.allShipsSunk()) {
    showMessage("💀 COMPUTER WINS!");
  }
});

function computerTurn(board) {
  let x, y;
  do {
    x = Math.floor(Math.random() * 10);
    y = Math.floor(Math.random() * 10);
  } while (
    document.getElementById("player-board").children[y * 10 + x].classList.contains("hit") ||
    document.getElementById("player-board").children[y * 10 + x].classList.contains("miss")
  );

  return [x, y];
}
