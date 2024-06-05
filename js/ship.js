const current = JSON.parse(localStorage.getItem("current-user"));
if (current.length === 0) window.location.replace("/index.html");
localStorage.setItem("currentColor", "white");
const colors = document.querySelector(".colors");
const color = document.querySelectorAll(".color");
colors.addEventListener("click", chooseColor);

const drawing = document.querySelector("main");
drawing.addEventListener("click", draw);

function chooseColor(event) {
  let x = event.target;
  localStorage.setItem("currentColor", JSON.stringify(x.classList[1]));
  document.querySelector(".current").style.backgroundColor = x.classList[1];
}

function draw(event) {
  let y = JSON.parse(localStorage.getItem("currentColor"));
  let str = event.target.classList.value;
  if (str.includes("triangleWhiteLeft") || str.includes("triangleWhiteRight")) {
    event.target.style.borderBottom = " 185px solid " + y;
  } else if (str.includes("flag") || str.includes("space")) {
    event.target.style.backgroundColor = y;
  } else if (str.includes("baseIn")) {
    event.target.style.borderTop = " 80px solid " + y;
  }
}
//  log out
const logOut = document.querySelector(".logOut");
logOut.addEventListener("click", () => {
  localStorage.removeItem("current-user");
  window.location.replace("/index.html");
});
