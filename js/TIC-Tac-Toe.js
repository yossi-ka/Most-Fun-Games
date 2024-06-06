window.onload = () => {
  const current = JSON.parse(localStorage.getItem("current-user"));
  if (current.length === 0) window.location.replace("/index.html");
};
//navgation
const user = document.querySelector(".user");
const score = document.querySelector(".score");
const usersArr = JSON.parse(localStorage.getItem("users-fun"));
const currentUser = JSON.parse(localStorage.getItem("current-user"));
user.textContent = currentUser.name;
score.textContent += "  " + currentUser.score;
//  choosing your type
let C = "x"; //  Computer
let P = "o"; //  Person
const youre = document.querySelector(".youre");
const youreBtn = youre.querySelectorAll("button");
const main = document.querySelector("main");
youreBtn[0].addEventListener("click", () => {
  C = "o";
  P = "x";
  main.style.display = "block";
  youre.style.display = "none";
});
youreBtn[1].addEventListener("click", () => {
  main.style.display = "block";
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
let countTurn = 0; //  num of turn

board.addEventListener("click", game);

function game(event) {
  if (countTurn % 2 === 0) {
    countTurn++;
    let current = event.target;
    if (current.textContent === "") {
      current.textContent = P;
    }
    if (checkWin(P)) {
      for (let i = 0; i < usersArr.length; i++) {
        if (currentUser.email === usersArr[i].email) {
          currentUser.score++;
          localStorage.setItem("current-user", JSON.stringify(currentUser));
          usersArr[i].score++;
          localStorage.setItem("users-fun", JSON.stringify(usersArr));
        }
      }
      document.querySelector(".youWin").style.display = "block";
      board.removeEventListener("click", game);
      return;
    } else if (countTurn === 9) {
      document.querySelector(".youFailed").style.display = "block";
      board.removeEventListener("click", game);
      return;
    }

    setTimeout(Computer, 1000);
    //  computers' turn
    function Computer() {
      countTurn++;
      let x = getRandomNum();
      while (cells[x].textContent !== "") {
        x = getRandomNum();
      }
      cells[x].textContent = C;
      if (checkWin(C)) {
        document.querySelector(".youFailed").style.display = "block";
        return;
      }
    }
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
//  log out
const logOut = document.querySelector(".logOut");
logOut.addEventListener("click", () => {
  localStorage.removeItem("current-user");
  window.location.replace("/index.html");
});
