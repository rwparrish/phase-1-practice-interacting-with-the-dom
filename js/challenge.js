
const likeButton = document.getElementById('heart')
const plusButton = document.getElementById('plus')
const minusButton = document.getElementById('minus')
const pauseButton = document.getElementById('pause')
const counter = document.getElementById('counter')
let paused = false
let intervalID

plusButton.addEventListener('click', increaseCounter)
minusButton.addEventListener('click', decreaseCounter)
pauseButton.addEventListener('click', pauseTimer)

// not sure how to approach this one 
likeButton.addEventListener('click', likeNumber)


function runCounter() {
  intervalID = setInterval(() => counter.innerText++, 1000);
}

function increaseCounter() {
  counter.innerText++;
}

function decreaseCounter() {
  counter.innerText--;
}

function likeNumber() {
  const numberOfLikes = 0;
  
}

function pauseTimer() {
  clearInterval(intervalID)
  paused = !paused
  if (!paused) {
    runCounter()
  }
}

runCounter()