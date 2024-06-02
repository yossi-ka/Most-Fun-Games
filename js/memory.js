//  setting the animals
const snakeImg = "../assents/images/snake.png";
const bearImg = "../assents/images/bear.jpg";
const lionImg = "../assents/images/lion.jpg";
const roosterImg = "../assents/images/rooster.jpg";
const camelImg = "../assents/images/camel.jpg";
const wolfImg = "../assents/images/wolf.webp";
const cowImg = "../assents/images/cow.webp";
const dolphinImg = "../assents/images/dolphin.jpg";
const animalImages = [
  snakeImg,
  snakeImg,
  bearImg,
  bearImg,
  lionImg,
  lionImg,
  roosterImg,
  roosterImg,
  camelImg,
  camelImg,
  dolphinImg,
  dolphinImg,
  wolfImg,
  wolfImg,
  cowImg,
  cowImg,
];
const game = document.querySelector(".game");
const cards = game.querySelectorAll(".card");
const images = game.querySelectorAll("img");
const p = game.querySelectorAll("p");
//  put images randomly
function getNum() {
  let x = Math.floor(Math.random() * 16);
  while (images[x].getAttribute("src") != "") {
    x = Math.floor(Math.random() * 16);
  }
  return x;
}
for (let i = 0; i < 16; i++) {
  images[getNum()].setAttribute("src", animalImages[i]);
}
//  game
let counter = 0; //  how many cards are discover
let left = 10; //  how many times are left to play
const leftX = document.querySelector("h1");
leftX.textContent = left;
game.addEventListener("click", discover);
function discover(event) {
  let currentP = event.target;
  let currentIndex = Array.from(p).indexOf(currentP);
  if (
    images[currentIndex].style.display === "block" ||
    currentP.textContent === ""
  )
    return;
  currentP.style.display = "none";
  images[currentIndex].style.display = "block";
  counter++;
  if (counter === 2) {
    game.removeEventListener("click", discover);
  }
}
document.querySelector("button").addEventListener("click", cover);
function cover() {
  counter = 0;
  game.addEventListener("click", discover);
  for (let i = 0; i < 16; i++) {
    if (p[i].textContent === "click" && p[i].style.display === "none") {
      p[i].style.display = "block";
      images[i].style.display = "none";
    }
  }
  leftX.textContent = --left;
  if (left == 0) youFailed();
}
function youFailed() {
  document.querySelector(".youFailed").style.display = "block";
}
function youWin() {
  document.querySelector(".youWin").style.display = "block";
}
