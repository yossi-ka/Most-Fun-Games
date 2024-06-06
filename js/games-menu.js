window.onload = () => {
  const current = JSON.parse(localStorage.getItem("current-user"));
  if (current.length === 0) window.location.replace("/index.html");
};
let music = document.querySelector("#background-music");
let musicBtn = document.querySelector(".playPause-music");
musicBtn.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    musicBtn.textContent = "Pause background music";
  } else {
    music.pause();
    musicBtn.textContent = "Play background music";
  }
});

const h1 = document.querySelector("h1");
const user = document.querySelector(".user");
const score = document.querySelector(".score");
const cuurentUser = JSON.parse(localStorage.getItem("current-user"));
h1.textContent += " " + cuurentUser.name;
user.textContent = cuurentUser.name;
score.textContent += "  " + cuurentUser.score;
//  log out
const logOut = document.querySelector(".logOut");
logOut.addEventListener("click", () => {
  localStorage.removeItem("current-user");
  window.location.replace("/index.html");
});
