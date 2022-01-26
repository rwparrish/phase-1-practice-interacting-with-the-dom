
const likeButton = document.getElementById('heart')
const plusButton = document.getElementById('plus')
const minusButton = document.getElementById('minus')
const pauseButton = document.getElementById('pause')
const counter = document.getElementById('counter')


let intervalID = setInterval(incrimentCounter, 1000)

plusButton.addEventListener('click', increaseCounter)
minusButton.addEventListener('click', decreaseCounter)
likeButton.addEventListener('click', likeNumber)

function incrimentCounter() {
  counter.innerText++;
}

function increaseCounter() {
  counter.innerText++;
}

function decreaseCounter() {
  counter.innerText--;
}

function likeNumber() {
  let numberOfLikes = 0;
  numberOfLikes += 1;
  console.log(numberOfLikes)
}