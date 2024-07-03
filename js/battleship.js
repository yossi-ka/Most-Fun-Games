const usersArr = JSON.parse(localStorage.getItem("users-fun"));
// window.onload = () => {
//   const currentUser = JSON.parse(localStorage.getItem("current-user"));
//   if (currentUser.length === 0) window.location.replace("/index.html");
// };
//  navigation
const user = document.querySelector(".user");
const score = document.querySelector(".score");
const currentUser = JSON.parse(localStorage.getItem("current-user"));
user.textContent = currentUser.name;
score.textContent += "  " + currentUser.score;
// //  log out
// const logOut = document.querySelector(".logOut");
// logOut.addEventListener("click", () => {
//   localStorage.removeItem("current-user");
//   window.location.replace("/index.html");
// });

//  createing cells
const boardP = document.querySelector(".board-person");
const boardPE = document.querySelector(".board-personsEnemy");
const boardC = document.querySelector(".board-computer");
const boardCE = document.querySelector(".board-computersenemy");
const boardsArr = [boardP, boardPE, boardC, boardCE];
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    for (let k = 0; k < 4; k++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.setAttribute("data-row", i);
      cell.setAttribute("data-column", j);
      boardsArr[k].append(cell);
    }
  }
}