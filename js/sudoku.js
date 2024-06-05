const usersArr = JSON.parse(localStorage.getItem("users-fun"));
const current = JSON.parse(localStorage.getItem("current-user"));
const currentUser = JSON.parse(localStorage.getItem("current-user"));
if (current.length === 0) window.location.replace("/index.html");
//navgation
const user = document.querySelector(".user");
const score = document.querySelector(".score");
const cuurentUser = JSON.parse(localStorage.getItem("current-user"));
user.textContent = cuurentUser.name;
score.textContent += "  " + cuurentUser.score;
//  sudoku boards
const sudokuArrs = [
  [
    4, 6, 7, 3, 8, 2, 9, 1, 5, 1, 2, 5, 7, 9, 4, 8, 3, 6, 3, 8, 9, 5, 6, 1, 2,
    7, 4, 9, 4, 6, 8, 2, 3, 1, 5, 7, 5, 7, 3, 1, 4, 9, 6, 2, 8, 2, 1, 8, 6, 5,
    7, 4, 9, 3, 8, 5, 2, 9, 7, 6, 3, 4, 1, 7, 3, 4, 2, 1, 8, 5, 6, 9, 6, 9, 1,
    4, 3, 5, 7, 8, 2,
  ],
  [
    7, 9, 2, 8, 5, 1, 3, 4, 6, 4, 1, 6, 3, 7, 2, 9, 8, 5, 3, 8, 5, 6, 9, 4, 7,
    2, 1, 8, 4, 3, 1, 6, 5, 2, 9, 7, 6, 7, 9, 2, 3, 8, 1, 5, 4, 5, 2, 1, 7, 4,
    9, 8, 6, 3, 2, 5, 7, 4, 8, 3, 6, 1, 9, 1, 6, 4, 9, 2, 7, 5, 3, 8, 9, 3, 8,
    5, 1, 6, 4, 7, 2,
  ],
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
    5, 3, 4, 6, 7, 8, 9, 1, 2, 6, 7, 2, 1, 9, 5, 3, 4, 8, 1, 9, 8, 3, 4, 2, 5,
    6, 7, 8, 5, 9, 7, 6, 1, 4, 2, 3, 4, 2, 6, 8, 5, 3, 7, 9, 1, 7, 1, 3, 9, 2,
    4, 8, 5, 6, 9, 6, 1, 5, 3, 7, 2, 8, 4, 2, 8, 7, 4, 1, 9, 6, 3, 5, 3, 4, 5,
    2, 8, 6, 1, 7, 9,
  ],
  [
    5, 3, 4, 6, 7, 8, 9, 1, 2, 6, 7, 2, 1, 9, 5, 3, 4, 8, 1, 9, 8, 3, 4, 2, 5,
    6, 7, 8, 5, 9, 7, 6, 1, 4, 2, 3, 2, 4, 7, 6, 8, 3, 9, 1, 5, 7, 1, 3, 9, 2,
    4, 8, 5, 6, 9, 6, 1, 5, 3, 7, 2, 8, 4, 4, 2, 8, 6, 5, 3, 7, 9, 1, 3, 5, 6,
    1, 7, 9, 4, 2, 8,
  ],
  
  [
    5, 3, 4, 6, 7, 8, 9, 1, 2, 1, 9, 8, 3, 4, 2, 5, 7, 6, 6, 7, 2, 1, 5, 9, 3,
    4, 8, 3, 5, 1, 7, 2, 8, 6, 9, 4, 9, 4, 7, 6, 8, 3, 2, 5, 1, 2, 6, 5, 9, 1,
    4, 7, 3, 8, 8, 1, 6, 4, 3, 5, 9, 2, 7, 7, 2, 9, 5, 6, 1, 4, 8, 3, 4, 8, 3,
    2, 9, 7, 1, 6, 5,
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
    2, 9, 3, 7, 4, 8, 6, 1, 5, 7, 1, 5, 2, 9, 6, 4, 3, 8, 6, 4, 8, 5, 1, 3, 9,
    7, 2, 1, 5, 9, 3, 8, 7, 2, 4, 6, 8, 3, 2, 1, 6, 4, 5, 9, 7, 4, 6, 7, 8, 2,
    9, 1, 5, 3, 9, 7, 4, 6, 5, 1, 8, 2, 3, 5, 2, 1, 9, 7, 3, 6, 8, 4, 3, 8, 6,
    4, 1, 5, 7, 9, 2,
  ],
  [
    6, 5, 3, 4, 8, 9, 1, 2, 7, 9, 7, 2, 1, 5, 6, 3, 4, 8, 1, 4, 8, 6, 2, 7, 5,
    9, 3, 4, 2, 6, 8, 1, 3, 7, 5, 9, 3, 8, 7, 5, 9, 4, 6, 1, 2, 5, 1, 9, 7, 3,
    2, 8, 4, 6, 8, 9, 4, 2, 6, 1, 7, 3, 5, 7, 6, 5, 3, 4, 8, 2, 9, 1, 2, 3, 1,
    9, 7, 5, 4, 6, 8,
  ],
  [
    5, 3, 4, 6, 7, 8, 9, 1, 2, 6, 7, 2, 1, 9, 5, 3, 4, 8, 1, 9, 8, 3, 4, 2, 5,
    6, 7, 8, 5, 9, 7, 6, 1, 4, 2, 3, 4, 2, 6, 8, 5, 3, 7, 9, 1, 7, 1, 3, 9, 2,
    4, 8, 5, 6, 9, 6, 1, 5, 3, 7, 2, 8, 4, 2, 8, 7, 4, 1, 9, 6, 3, 5, 3, 4, 5,
    2, 8, 6, 1, 7, 9,
  ],
  [
    2, 9, 3, 7, 4, 8, 6, 1, 5, 7, 1, 5, 2, 9, 6, 4, 3, 8, 6, 4, 8, 5, 1, 3, 9,
    7, 2, 1, 5, 9, 3, 8, 7, 2, 4, 6, 8, 3, 2, 1, 6, 4, 5, 9, 7, 4, 6, 7, 8, 2,
    9, 1, 5, 3, 9, 7, 4, 6, 5, 1, 8, 2, 3, 5, 2, 1, 9, 7, 3, 6, 8, 4, 3, 8, 6,
    4, 1, 5, 7, 9, 2,
  ],
  [
    4, 6, 3, 5, 1, 7, 2, 9, 8, 5, 2, 9, 8, 4, 6, 1, 7, 3, 1, 7, 8, 3, 9, 2, 6,
    4, 5, 8, 9, 6, 2, 5, 3, 4, 1, 7, 2, 1, 5, 9, 7, 4, 8, 6, 3, 3, 4, 7, 1, 6,
    8, 5, 9, 2, 6, 3, 2, 7, 8, 9, 1, 5, 4, 7, 5, 1, 4, 2, 6, 9, 8, 3, 9, 8, 4,
    6, 3, 5, 7, 2, 1,
  ],
  [
    1, 3, 2, 5, 7, 4, 6, 9, 8, 9, 6, 5, 2, 3, 8, 1, 4, 7, 4, 7, 6, 1, 9, 5, 3,
    2, 8, 5, 2, 8, 9, 4, 7, 6, 1, 3, 3, 1, 7, 6, 8, 2, 9, 5, 4, 8, 4, 9, 7, 1,
    3, 5, 6, 2, 2, 5, 3, 4, 6, 1, 8, 7, 9, 7, 9, 1, 8, 5, 6, 2, 4, 3, 6, 8, 4,
    3, 2, 9, 7, 5, 1,
  ],
];
//  creates the board with 81 cells
const board = document.querySelector(".board");
for (let i = 0; i < 81; i++) {
  let div = document.createElement("div");
  div.classList.add("cell");
  board.append(div);
}
//  sudoku-data
let sudokuArr = []; //  the full sudoku board
let discoverLvl = 0; //  how many numbers on the board will discover
let discover = []; //  how cells will discover
//  how many numbers will discover (according the level)
const section = document.querySelector("section");
section.addEventListener("click", (event) => {
  for (let i = 0; i < 81; i++) {
    cells[i].textContent = "";
    cells[i].classList.remove("strong");
  }
  discover = [];
  let cls = event.target.classList.value;
  if (cls.includes("easy")) {
    discoverLvl = 38;
    sudokuArr = sudokuArrs[Math.floor(Math.random() * sudokuArrs.length)];
  } else if (cls.includes("medium")) {
    discoverLvl = 30;
    sudokuArr = sudokuArrs[Math.floor(Math.random() * sudokuArrs.length)];
  } else if (cls.includes("hard")) {
    discoverLvl = 22;
    sudokuArr = sudokuArrs[Math.floor(Math.random() * sudokuArrs.length)];
  } else if (cls.includes("extream")) {
    discoverLvl = 14;
    sudokuArr = sudokuArrs[Math.floor(Math.random() * sudokuArrs.length)];
  }
  for (let i = 0; i < discoverLvl; i++) {
    let num = Math.floor(Math.random() * 81);
    while (discover.includes(num)) {
      num = Math.floor(Math.random() * 81);
    }
    discover.push(num);
  }
  for (let i = 0; i < 81; i++) {
    if (discover.includes(i)) {
      cells[i].textContent = sudokuArr[i];
      cells[i].classList.add("strong");
    }
  }
});

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
  let location = event.target;
  const cellIndex = Array.from(board.children).indexOf(location);
  if (!location.classList.value.includes("strong")) {
    if (num > 0) {
      location.textContent = num;
      if (sudokuArr[cellIndex] !== Number(num)) {
        location.classList.add("false");
      } else {
        location.classList.remove("false");
      }
    } else {
      location.textContent = "";
      location.classList.remove("false");
    }
    //  check if win
    let allFill = true;
    for (let i = 0; i < 81; i++) {
      if (cells[i].textContent === "") allFill = false;
    }
    if (allFill) youWin();
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
function youWin() {
  for (let i = 0; i < usersArr.length; i++) {
    if (currentUser.email === usersArr[i].email) {
      currentUser.score++;
      localStorage.setItem("current-user", JSON.stringify(currentUser));
      usersArr[i].score++;
      localStorage.setItem("users-fun", JSON.stringify(usersArr));
    }
  }
  board.removeEventListener("click", insert);
  document.querySelector(".youWin").style.display = "block";
}
//  play again
document.querySelector(".again").addEventListener("click", () => {
  location.reload();
});
//  log out
const logOut = document.querySelector(".logOut");
logOut.addEventListener("click", () => {
  localStorage.removeItem("current-user");
  window.location.replace("/index.html");
});
