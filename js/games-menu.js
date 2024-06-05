const h1 = document.querySelector("h1");
const user = document.querySelector(".user");
const score = document.querySelector(".score");
const cuurentUser = JSON.parse(localStorage.getItem("current-user"));
h1.textContent += " " + cuurentUser.name;
user.textContent = cuurentUser.name;
score.textContent +="  "+ cuurentUser.score;
