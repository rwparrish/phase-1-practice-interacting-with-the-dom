
const likeButton = document.getElementById('heart')
const plusButton = document.getElementById('plus')
const minusButton = document.getElementById('minus')
const pauseButton = document.getElementById('pause')
const submitButton = document.getElementById('submit')
const counter = document.getElementById('counter')
const commentsContainer = document.getElementById('list')
let paused = false
let intervalID

plusButton.addEventListener('click', increaseCounter)
minusButton.addEventListener('click', decreaseCounter)
pauseButton.addEventListener('click', pauseTimer)
submitButton.addEventListener('submit', addComments)

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
// append li
// if num hasn't changed, then incriment numberOfLiks
// if num has changed, then append new li and repeat 
function likeNumber() {
  num = counter.innerText
  let showLikesUl = document.querySelector('.likes')
  let likesLi = document.createElement('li')
  let numberOfLikes = 0;
  likesLi.innerText = `${num} was liked ${numberOfLikes += 1} times!`
  showLikesUl.append(likesLi)
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
function addComments(e) {
  e.preventDefault()
  let commentLi = document.createElement('li')
  commentLi.innerText = e.target.value
  commentsContainer.append(commentLi)
  console.log(e.target.value)
}

runCounter()