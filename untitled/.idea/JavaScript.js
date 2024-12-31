var boxA = document.getElementById(1)
var boxB = document.getElementById(2)
var boxC = document.getElementById(3)
var boxD = document.getElementById(4)

var buttonA = document.getElementById(5)
var buttonB = document.getElementById(6)
var buttonC = document.getElementById(7)
var buttonD = document.getElementById(8)

var wrapper = document.querySelector('.wrapper')

buttonA.onclick = function () {
    wrapper.add()
}

buttonB.onclick = function () {}

buttonC.onclick = function () {}

buttonD.onclick = function () {
    wrapper.removeChild(wrapper.firstElementChild)
}

console.log(boxA.textContent)
console.log(boxA.nextElementSibling.textContent)