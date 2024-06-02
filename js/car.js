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
  if (str.includes("windowL") || str.includes("windowR")) {
    event.target.style.borderBottom = " 145px solid " + y;
  } else if (str.includes("wheelR") || str.includes("wheelL") ||str.includes("windowM")||str.includes("bodyDown")){
    event.target.style.backgroundColor = y;
  } 
}
