const usersArr = JSON.parse(localStorage.getItem("users-fun"));
window.onload = () => {
  const currentUser = JSON.parse(localStorage.getItem("current-user"));
  if (currentUser.length === 0) window.location.replace("/index.html");
};
//  navigation
const user = document.querySelector(".user");
const score = document.querySelector(".score");
const cuurentUser = JSON.parse(localStorage.getItem("current-user"));
user.textContent = cuurentUser.name;
score.textContent += "  " + cuurentUser.score;
// //  log out
// const logOut = document.querySelector(".logOut");
// logOut.addEventListener("click", () => {
//   localStorage.removeItem("current-user");
//   window.location.replace("/index.html");
// });

//  cells creating
const board = document.querySelector(".board");
for (let i = 0; i < 8; i++) {
  for (let j = 0; j < 8; j++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.setAttribute("data-row", i);
    cell.setAttribute("data-column", j);
    //  add color to the middle 4
    if ((i === 3 && j === 3) || (i === 4 && j === 4)) {
      cell.classList.add("red");
    } else if ((i === 3 && j === 4) || (i === 4 && j === 3)) {
      cell.classList.add("yellow");
    }
    board.append(cell);
  }
}

//  game loop
const cells = board.querySelectorAll(".cell");
board.addEventListener("click", put);
function put(event) {
  if (event.target.classList.value.includes("cell")) {
    const ev = event.target;
    let canPut = true;
    if (!ev.classList.value.includes("cell")) canPut = false; //  makes sure the user puts on a cell
    if (
      //  makes sure the user doesn't click on a painted square
      ev.classList.value.includes("red") ||
      ev.classList.value.includes("yellow")
    )
      canPut = false;
    if (
      !isLegal(ev.getAttribute("data-row"), ev.getAttribute("data-column"), P)
    )
      canPut = false;
  }
}

//  checks if his action is legal
function isLegal(i, j, color) {
  let control = [0, 0, 0, 0, 0, 0, 0, 0]; // controls the data of all directions

  let otherColor = () => {
    if (color === "red") return "yellow";
    else return "red";
  };
  let k = 0;
  for (k = 0; k < 64; k++) {
    if (
      cells[k].getAttribute("data-row") === i &&
      cells[k].getAttribute("data-column") === j
    ) {
      break;
    }
  }

  //  After the loop, i = row, and j = column
  //  direction 0 = right.
  let next0 = cells[k].nextElementSibling;
  if (next0.classList.value.includes(otherColor()) && j <= 5) {
    for (let l = Number(j) + 1; l <= 7; l++) {
      if (next0.classList.value.includes(color)) {
        break;
      } else if (next0.classList.value.includes(otherColor())) {
        control[0]++;
      } else {
        control[0] = 0;
        break;
      }
      next0 = next0.nextElementSibling;
    }
  }
  //  direction 1 = left.
  let next1 = cells[k].previousElementSibling;
  if (next1.classList.value.includes(otherColor()) && j >= 1) {
    for (let l = Number(j) - 1; l >= 0; l--) {
      if (next1.classList.value.includes(color)) {
        break;
      } else if (next1.classList.value.includes(otherColor())) {
        control[1]++;
      } else {
        control[1] = 0;
        break;
      }
      next1 = next1.previousElementSibling;
    }
  }
  console.log(control);
}

//  i want to be:
let P = "red"; //  persons' color
let C = "yellow"; //  computers' color
const howColor = document.querySelector(".how-color");
const redBtn = howColor.querySelectorAll("button")[0];
const yellowBtn = howColor.querySelectorAll("button")[1];
redBtn.addEventListener("click", () => {
  howColor.style.display = "none";
  board.style.display = "grid";
  document.querySelector(".youre-color").style.display = "flex";
  document.querySelector(".hisColor").style.backgroundColor = "red";
});
yellowBtn.addEventListener("click", () => {
  P = "yellow";
  C = "red";
  howColor.style.display = "none";
  board.style.display = "grid";
  document.querySelector(".youre-color").style.display = "flex";
  document.querySelector(".hisColor").style.backgroundColor = "yellow";
});
//  reset
document.querySelector(".reset").addEventListener("click", () => {
  location.reload();
});
