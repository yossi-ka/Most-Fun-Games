//  sudoku boards
const sudokuArrs = [
  [
    6, 4, 9, 2, 5, 7, 8, 3, 1, 5, 3, 1, 9, 8, 4, 6, 7, 2, 8, 2, 7, 6, 1, 3, 5,
    4, 9, 9, 6, 2, 3, 7, 8, 4, 1, 5, 1, 8, 5, 4, 2, 9, 7, 6, 3, 3, 7, 4, 5, 6,
    1, 9, 2, 8, 4, 9, 6, 8, 3, 2, 1, 5, 7, 2, 1, 8, 7, 4, 5, 3, 9, 6, 7, 5, 3,
    1, 9, 6, 2, 8, 4,
  ],
  [
    7, 5, 9, 4, 6, 2, 8, 1, 3, 4, 6, 3, 5, 1, 8, 2, 9, 7, 1, 2, 8, 9, 7, 3, 6,
    4, 5, 6, 9, 7, 1, 8, 4, 5, 3, 2, 5, 8, 4, 2, 3, 6, 9, 7, 1, 2, 3, 1, 7, 9,
    5, 4, 8, 6, 3, 4, 5, 8, 2, 1, 7, 6, 9, 9, 1, 2, 6, 4, 7, 3, 5, 8, 8, 7, 6,
    3, 5, 9, 1, 2, 4,
  ],
  [
    1, 7, 5, 2, 9, 4, 8, 3, 6, 6, 2, 3, 1, 8, 7, 9, 4, 5, 8, 9, 4, 5, 6, 3, 2,
    7, 1, 5, 1, 9, 7, 3, 2, 4, 6, 8, 3, 4, 7, 8, 5, 6, 1, 2, 9, 2, 8, 6, 1, 2,
    9, 2, 8, 6, 9, 4, 1, 7, 5, 3, 9, 3, 8, 4, 2, 5, 6, 1, 7, 4, 6, 1, 3, 7, 9,
    5, 8, 2, 7, 5, 2, 6, 1, 8, 3, 9, 4,
  ],
  [
    5, 3, 4, 6, 7, 8, 9, 1, 2, 6, 7, 2, 1, 9, 5, 3, 4, 8, 1, 9, 8, 3, 4, 2, 5,
    6, 7, 8, 5, 9, 7, 6, 1, 4, 2, 3, 4, 2, 6, 8, 5, 3, 7, 9, 1, 7, 1, 3, 9, 2,
    4, 8, 5, 6, 9, 6, 1, 5, 3, 7, 2, 8, 4, 2, 8, 7, 4, 1, 9, 6, 3, 5, 3, 4, 5,
    2, 8, 6, 1, 7, 9,
  ],
  [
    5, 3, 4, 6, 7, 8, 9, 1, 2, 6, 7, 2, 1, 9, 5, 3, 4, 8, 1, 9, 8, 3, 4, 2, 5,
    6, 7, 8, 5, 9, 7, 6, 1, 4, 2, 3, 4, 2, 6, 8, 5, 3, 7, 9, 1, 7, 1, 3, 9, 2,
    4, 8, 5, 6, 9, 6, 1, 5, 3, 7, 2, 8, 4, 2, 8, 7, 4, 1, 9, 6, 3, 5, 3, 4, 5,
    2, 8, 6, 1, 7, 9,
  ],
  [
    8, 2, 7, 1, 5, 4, 3, 9, 6, 9, 6, 5, 3, 2, 7, 1, 4, 8, 3, 4, 1, 6, 8, 9, 7,
    5, 2, 5, 9, 3, 4, 6, 8, 2, 7, 1, 4, 7, 2, 5, 1, 3, 6, 8, 9, 6, 1, 8, 9, 7,
    2, 4, 3, 5, 7, 8, 6, 2, 3, 5, 9, 1, 4, 1, 5, 4, 7, 9, 6, 8, 2, 3, 2, 3, 9,
    8, 4, 1, 5, 6, 7,
  ],
  [
    2, 9, 5, 7, 4, 3, 8, 6, 1, 4, 3, 1, 8, 6, 5, 9, 2, 7, 8, 7, 6, 1, 9, 2, 5,
    4, 3, 3, 8, 7, 4, 5, 9, 2, 1, 6, 6, 1, 2, 3, 8, 7, 4, 9, 5, 5, 4, 9, 2, 1,
    6, 7, 3, 8, 7, 6, 3, 5, 2, 4, 1, 8, 9, 9, 2, 8, 6, 7, 1, 3, 5, 4, 1, 5, 4,
    9, 3, 8, 6, 7, 2,
  ],
  [
    1, 4, 7, 3, 6, 9, 8, 2, 5, 3, 6, 9, 8, 5, 2, 1, 7, 4, 2, 5, 8, 7, 1, 4, 3,
    9, 6, 5, 9, 3, 2, 4, 8, 6, 1, 7, 6, 8, 2, 1, 7, 3, 9, 4, 5, 7, 1, 4, 6, 9,
    5, 2, 3, 8, 8, 2, 5, 9, 3, 6, 7, 4, 1, 9, 3, 6, 4, 2, 7, 5, 8, 2, 4, 7, 1,
    5, 8, 9, 6, 6, 3,
  ],
  [
    9, 8, 6, 1, 2, 3, 4, 5, 7, 1, 2, 3, 4, 5, 7, 8, 9, 6, 4, 5, 7, 8, 9, 6, 1,
    2, 3, 3, 4, 5, 7, 8, 9, 6, 1, 2, 6, 1, 2, 3, 4, 5, 7, 8, 9, 7, 8, 9, 6, 1,
    2, 3, 4, 5, 5, 6, 1, 2, 3, 4, 9, 7, 8, 2, 3, 4, 9, 7, 8, 5, 6, 1, 8, 9, 7,
    5, 6, 1, 2, 3, 4,
  ],
  [
    4, 1, 3, 8, 6, 5, 7, 2, 9, 6, 7, 2, 4, 9, 3, 1, 5, 8, 9, 8, 5, 7, 2, 1, 6,
    4, 3, 3, 9, 4, 5, 8, 7, 2, 1, 6, 2, 6, 7, 1, 4, 9, 5, 3, 8, 8, 5, 1, 2, 3,
    6, 9, 7, 4, 7, 3, 8, 6, 5, 4, 4, 9, 2, 1, 2, 6, 9, 7, 8, 3, 8, 5, 5, 4, 9,
    3, 1, 2, 8, 6, 7,
  ],
];
//  how many numbers are discover (according the level)
const ease = 38;
const medium = 30;
const hard = 22;
const extream = 14;
let level = ease;
const levelBtn = document.querySelectorAll(".lvl");

//  update sudoku-arr
const sudokuArr = sudokuArrs[Math.floor(Math.random() * sudokuArrs.length)];
const discover = [
  0, 2, 4, 5, 7, 8, 9, 14, 17, 18, 21, 23, 24, 27, 34, 35, 37, 40, 42, 46, 47,
  48, 49, 50, 51, 54, 55, 58, 59, 63, 64, 66, 68, 69, 70, 71, 77, 79,
];

const board = document.querySelector(".board");
for (let i = 0; i < 81; i++) {
  let div = document.createElement("div");
  div.classList.add("cell");
  board.append(div);
  if (discover.includes(i)) {
    div.textContent = sudokuArr[i];
    div.classList.add("strong");
  }
}

//  choose & insert numbers in the board
let num;
const numbers = document.querySelector(".numbers");
const cells = board.querySelectorAll(".cell");
numbers.addEventListener("click", choose);
function choose(event) {
  num = event.target.textContent;
}
board.addEventListener("click", insert);
function insert(event) {
  const cellIndex = Array.from(board.children).indexOf(event.target);
  let location = event.target;
  if (!location.classList.value.includes("strong") && num > 0) {
    event.target.textContent = num;
    if (sudokuArr[cellIndex] !== Number(num)) {
      location.classList.add("false");
    } else {
      location.classList.remove("false");
    }
  }
}
//  buttons settings
document.querySelector(".reset").addEventListener("click", () => {
  location.reload();
});
document.querySelector(".solution").addEventListener("click", () => {
  for (let i = 0; i < cells.length; i++) {
    cells[i].textContent = sudokuArr[i];
  }
});
