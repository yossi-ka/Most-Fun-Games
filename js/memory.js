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
let left = 10; //  how many times left to play
const leftX = document.querySelector("h1");
leftX.textContent = left + " times left";
let arrImg = [];
game.addEventListener("click", discover);
function discover(event) {
  let currentP = event.target;
  let currentIndex = Array.from(p).indexOf(currentP);
  if (
    images[currentIndex].style.display === "block" ||
    currentP.textContent === ""
  )
    return;
  //  switchs the card
  currentP.style.display = "none";
  images[currentIndex].style.display = "block";

  //  save in array the src of the image
  arrImg.push(images[currentIndex].getAttribute("src"));

  if (arrImg.length === 2) {
    if (arrImg[0] === arrImg[1]) {
      know(arrImg[0]);
    } else {
      game.removeEventListener("click", discover);
      document.querySelector(".cover").style.backgroundColor =
        "rgb(192, 192, 142)";
    }
    arrImg = [];
  }
}
//  if you know
function know(srcImg) {
  const side = document.querySelector(".side");
  const imgSide = side.querySelectorAll("img");
  let i = 0;
  for (i = 0; i < 8; i++) {
    if (imgSide[i].getAttribute("src") === "") {
      imgSide[i].style.display = "block";
      imgSide[i].setAttribute("src", srcImg);
      break;
    }
  }
  for (let j = 0; j < 16; j++) {
    if (images[j].getAttribute("src") === srcImg) {
      images[j].style.display = "none";
      p[j].style.display = "block";
      p[j].textContent = "";
    }
  }
  if (imgSide[7].getAttribute("src") != "") youWin();
}
//  cover the cards if you dont know
document.querySelector(".cover").addEventListener("click", function () {
  game.addEventListener("click", discover);
  let count = 0;
  for (let i = 0; i < 16; i++) {
    if (p[i].textContent === "click" && p[i].style.display === "none") {
      p[i].style.display = "block";
      images[i].style.display = "none";
      count = 1;
    }
  }
  if (count === 1) {
    leftX.textContent = --left + " times left";
  }
  document.querySelector(".cover").style.backgroundColor = "white";
  if (left == 0) youFailed();
});
//  you failed
function youFailed() {
  document.querySelector(".youFailed").style.display = "block";
}
//  you win
function youWin() {
  document.querySelector(".youWin").style.display = "block";
}
//  play again
document.querySelectorAll(".again").forEach((el) => {
  el.addEventListener("click", () => {
    location.reload();
  });
});
