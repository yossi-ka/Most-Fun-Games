function getNum(){
  
}









//  sudoku data
const sudokuArr = [
  6, 4, 9, 2, 5, 7, 8, 3, 1, 5, 3, 1, 9, 8, 4, 6, 7, 2, 8, 2, 7, 6, 1, 3, 5, 4,
  9, 9, 6, 2, 3, 7, 8, 4, 1, 5, 1, 8, 5, 4, 2, 9, 7, 6, 3, 3, 7, 4, 5, 6, 1, 9,
  2, 8, 4, 9, 6, 8, 3, 2, 1, 5, 7, 2, 1, 8, 7, 4, 5, 3, 9, 6, 7, 5, 3, 1, 9, 6,
  2, 8, 4,
];
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
