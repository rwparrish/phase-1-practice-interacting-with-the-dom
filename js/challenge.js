
const likeButton = document.getElementById('heart')
const plusButton = document.getElementById('plus')
const minusButton = document.getElementById('minus')
const pauseButton = document.getElementById('pause')
const submitButton = document.getElementById('submit')
const counter = document.getElementById('counter')
const commentsContainer = document.getElementById('list')
let paused = false
let intervalID
let numbersArray = []
let numberOfLikes

plusButton.addEventListener('click', increaseCounter)
minusButton.addEventListener('click', decreaseCounter)
pauseButton.addEventListener('click', pauseTimer)
likeButton.addEventListener('click', likeNumber)
submitButton.addEventListener('submit', addComments)

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
  let showLikesUl = document.querySelector('.likes')
  let likesLi = document.createElement('li')
  num = counter.innerText
  likesLi.id = num
  if (numbersArray.includes(num)) {
    let matchingLi = document.getElementById(num)
    matchingLi.innerText = `${num} was liked ${numberOfLikes += 1} times!`
  } else {
    likesLi.innerText = `${num} was liked ${numberOfLikes = 1} times!`
    showLikesUl.append(likesLi)
    numbersArray.push(num)
  }
}

function pauseTimer() {
  clearInterval(intervalID)
  paused = !paused
  pauseButton.innerText = 'resume'
  likeButton.setAttribute('disabled', true)
  plusButton.setAttribute('disabled', true)
  minusButton.setAttribute('disabled', true)
  submitButton.setAttribute('disabled', true)
  if (!paused) {
    pauseButton.innerText = 'pause'
    likeButton.removeAttribute('disabled')
    plusButton.removeAttribute('disabled')
    minusButton.removeAttribute('disabled')
    submitButton.removeAttribute('disabled')
    runCounter()
  }
}
// why isn't preventDefault() working here?

let commentLi = document.createElement('li')
function addComments(e) {
  e.preventDefault()
  
  commentLi.innerText = e.target.value
  commentsContainer.append(commentLi)
}

runCounter()