const box = document.getElementsByClassName('box')
const Sdiv = document.querySelectorAll('.box>div')
const bir = document.getElementById('bird')
const star = document.getElementById('star')

var birdX = bir.getAttribute('left')
var birdY = bir.getAttribute('top')
console.log(birdX, birdY)
star.onclick = function(e) {
    e = e || window.event
    var birdX = e.offsetX
    var birdY = e.clientY
    console.log(birdX, birdY)
}