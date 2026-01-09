export function renderBoards(playerBoard, computerBoard) {
  const playerDiv = document.getElementById("player-board");
  const compDiv = document.getElementById("computer-board");

  playerDiv.innerHTML = "";
  compDiv.innerHTML = "";

  for (let y = 0; y < 10; y++) {
    for (let x = 0; x < 10; x++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");

      if (playerBoard.board[y][x] !== null) {
        cell.classList.add("player-ship");
      }

      playerDiv.appendChild(cell);
    }
  }

  for (let y = 0; y < 10; y++) {
    for (let x = 0; x < 10; x++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.dataset.x = x;
      cell.dataset.y = y;
      compDiv.appendChild(cell);
    }
  }
}

export function updateCell(boardId, x, y, result) {
  const board = document.getElementById(boardId);
  const index = y * 10 + x;
  const cell = board.children[index];

  if (result === "hit") cell.classList.add("hit");
  else cell.classList.add("miss");
}

export function showMessage(msg) {
  document.getElementById("message").textContent = msg;
}
