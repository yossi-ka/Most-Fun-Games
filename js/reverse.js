const usersArr = JSON.parse(localStorage.getItem("users-fun"));
window.onload = () => {

const currentUser = JSON.parse(localStorage.getItem("current-user"));
if (currentUser.length === 0) window.location.replace("/index.html");}
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
const boardSize = 8;
const board = document.querySelector(".board");
for (let i = 0; i < boardSize; i++) {
  const row = document.createElement("tr");
  for (let j = 0; j < boardSize; j++) {
    const cell = document.createElement("td");
    cell.classList.add("cell");
    cell.setAttribute("data-x", `${i * boardSize + j}`);
    //  add color to the middle 4
    if ((i === 3 && j === 3) || (i === 4 && j === 4)) {
      cell.classList.add("red");
    } else if ((i === 3 && j === 4) || (i === 4 && j === 3)) {
      cell.classList.add("yellow");
    }
    row.append(cell);
  }
  board.append(row);
}
//  i want to be
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
