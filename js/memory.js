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
let left = 10;
document.querySelector("h1").textContent = left;
game.addEventListener("click", swich);
function swich(event) {
  let currentP = event.target;
  let currentIndex = Array.from(p).indexOf(currentP);
  currentP.style.display = "none";
  images[currentIndex].style.display = "block";
}
