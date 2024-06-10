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
  if (i !== "7" || j !== "7") {
    let next0 = cells[k].nextElementSibling;
    if (next0.classList.value.includes(otherColor()) && j <= 5) {
      for (let l = Number(j) + 1; l <= 7; l++) {
        if (next0.classList.value.includes(color)) {
          break;
        } else if (next0.classList.value.includes(otherColor())) {
          if (l === 7) control[0] = 0;
          else control[0]++;
        } else {
          control[0] = 0;
          break;
        }
        next0 = next0.nextElementSibling;
      }
    }
  }
  //  direction 1 = left.
  if (i !== "0" || j !== "0") {
    let next1 = cells[k].previousElementSibling;
    if (next1.classList.value.includes(otherColor()) && j >= 2) {
      for (let l = Number(j) - 1; l >= 0; l--) {
        if (next1.classList.value.includes(color)) {
          break;
        } else if (next1.classList.value.includes(otherColor())) {
          if (l === 0) control[1] = 0;
          else control[1]++;
        } else {
          control[1] = 0;
          break;
        }
        next1 = next1.previousElementSibling;
      }
    }
  }
  //  direction 2 = top.
  if (i !== "0") {
    let next2 = cells[k - 8];
    if (next2.classList.value.includes(otherColor()) && j >= 2) {
      for (let l = Number(i) - 1; l >= 0; l--) {
        if (next2.classList.value.includes(color)) {
          break;
        } else if (next2.classList.value.includes(otherColor())) {
          if (l === 0) control[2] = 0;
          else control[2]++;
        } else {
          control[2] = 0;
          break;
        }
        next2 = cells[Array.from(cells).indexOf(next2) - 8];
      }
    }
  }
  //  direction 3 = bottom.
  if (i !== "7") {
    let next3 = cells[k + 8];
    if (next3.classList.value.includes(otherColor()) && j <= 5) {
      for (let l = Number(i) + 1; l <= 7; l++) {
        if (next3.classList.value.includes(color)) {
          break;
        } else if (next3.classList.value.includes(otherColor())) {
          if (l === 7) control[3] = 0;
          else control[3]++;
        } else {
          control[3] = 0;
          break;
        }
        next3 = cells[Array.from(cells).indexOf(next3) + 8];
      }
    }
  }
  //  direction 4 = right-bottom.
  if (k <= 54) {
    let next4 = cells[k + 9];
    if (next4.classList.value.includes(otherColor()) && i <= 5 && j <= 5) {
      let m = Number(j);
      for (let l = Number(i) + 1; l <= 7; l++) {
        m++;
        if (next4.classList.value.includes(color)) {
          break;
        } else if (next4.classList.value.includes(otherColor())) {
          if (l === 7 || m === 7) control[4] = 0;
          else control[4]++;
        } else {
          control[4] = 0;
          break;
        }
        next4 = cells[Array.from(cells).indexOf(next4) + 9];
      }
    }
  }
  //  direction 5 = right-top.
  if (k >= 8) {
    let next5 = cells[k - 7];
    if (next5.classList.value.includes(otherColor()) && i >= 2 && j <= 5) {
      let m = Number(j);
      for (let l = Number(i) - 1; l >= 0; l--) {
        m++;
        if (next5.classList.value.includes(color)) {
          break;
        } else if (next5.classList.value.includes(otherColor())) {
          if (l === 0 || m === 7) control[5] = 0;
          else control[5]++;
        } else {
          control[5] = 0;
          break;
        }
        next5 = cells[Array.from(cells).indexOf(next5) - 7];
      }
    }
  }
  //  direction 6 = left-bottom.
  if (k <= 55) {
    let next6 = cells[k + 7];
    if (next6.classList.value.includes(otherColor()) && i <= 5 && j >= 2) {
      let m = Number(j);
      for (let l = Number(i) + 1; l <= 7; l++) {
        m--;
        if (next6.classList.value.includes(color)) {
          break;
        } else if (next6.classList.value.includes(otherColor())) {
          if (l === 7 || m === 0) control[6] = 0;
          else control[6]++;
        } else {
          control[6] = 0;
          break;
        }
        next6 = cells[Array.from(cells).indexOf(next6) + 7];
      }
    }
  }
  //  direction 7 = left-top.
  if (k >= 9) {
    let next7 = cells[k - 9];
    if (next7.classList.value.includes(otherColor()) && i <= 5 && j >= 2) {
      let m = Number(j);
      for (let l = Number(i) - 1; l >= 0; l--) {
        m--;
        if (next7.classList.value.includes(color)) {
          break;
        } else if (next7.classList.value.includes(otherColor())) {
          if (l === 0 || m === 0) control[7] = 0;
          else control[7]++;
        } else {
          control[7] = 0;
          break;
        }
        next7 = cells[Array.from(cells).indexOf(next7) - 9];
      }
    }
  }
  return control.reduce((total, value) => {
    return total + value;
  });
}

// checks who won
function whoWon() {
  let painted = 0;
  let red = 0;
  let yellow = 0;
  for (const slot of board) {
    if (slot.classList.value.includes("red")) {
      painted++;
      red++;
    } else if (slot.classList.value.includes("yellow")) {
      painted++;
      yellow++;
    }
  }
  if (painted === 64) {
    if ((red > yellow && P === "red") || (yellow > red && P === "yellow")) {
      console.log("the person won the computer");
    } else if (
      (red < yellow && P === "red") ||
      (yellow < red && P === "yellow")
    ) {
      console.log("the computer won the person");
    } else {
      console.log("draw!");
    }
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
      isLegal(
        ev.getAttribute("data-row"),
        ev.getAttribute("data-column"),
        P
      ) === 0
    )
      canPut = false;
  }
}

//  reset
document.querySelector(".reset").addEventListener("click", () => {
  location.reload();
});
