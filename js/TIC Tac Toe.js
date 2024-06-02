//  choosing your type
let C = "x"; //  Computer
let P = "o"; //  Person
const youre = document.querySelector(".youre");
const youreBtn = youre.querySelectorAll("button");
youreBtn[0].addEventListener("click", () => {
  C = "o";
  P = "x";
  youre.style.display = "none";
});
youreBtn[1].addEventListener("click", () => {
  youre.style.display = "none";
});
//  setting variabls
const board = document.querySelector(".board");
const cells = board.querySelectorAll(".cell");
function getRandomNum() {
  let num = Math.floor(Math.random() * cells.length);
  while (cells[num].textContent !== "") {
    num = Math.floor(Math.random() * cells.length);
  }
  return num;
}
//  --  game loop  --
//  persons' turn
board.addEventListener("click", put);
function put(event) {
  let current = event.target;
  if (current.textContent === "") {
    current.textContent = P;
  }
  if (checkWin(P)) {
    document.querySelector(".youWin").style.display = "block";
  }
  //  computers' turn
  let x = getRandomNum();
  while (cells[x].textContent !== "") {
    x = getRandomNum();
  }
  cells[x].textContent = C;
  if (checkWin(C)) {
    document.querySelector(".youFailed").style.display = "block";
  }
}

//  Checks if someone won
function checkWin(type) {
  if (
    (cells[0].textContent === type &&
      cells[1].textContent === type &&
      cells[2].textContent === type) ||
    (cells[3].textContent === type &&
      cells[4].textContent === type &&
      cells[5].textContent === type) ||
    (cells[6].textContent === type &&
      cells[7].textContent === type &&
      cells[8].textContent === type) ||
    (cells[0].textContent === type &&
      cells[3].textContent === type &&
      cells[6].textContent === type) ||
    (cells[1].textContent === type &&
      cells[4].textContent === type &&
      cells[7].textContent === type) ||
    (cells[2].textContent === type &&
      cells[5].textContent === type &&
      cells[8].textContent === type) ||
    (cells[0].textContent === type &&
      cells[4].textContent === type &&
      cells[8].textContent === type) ||
    (cells[2].textContent === type &&
      cells[4].textContent === type &&
      cells[6].textContent === type)
  ) {
    return true;
  }
  return false;
}

document.querySelectorAll(".again").forEach((el) => {
  el.addEventListener("click", () => {
    location.reload();
  });
});
