const h1 = document.querySelector("h1")

h1.innerHTML = "The text has been changed"

h1.style.color = "red"
h1.style.backgroundColor = "yellow"

h1.addEventListener("click", ()=> {
    h1.innerHTML = "Click kar ke badal dia text"
})

const circle = document.querySelector(".bulb")
const buttonON = document.querySelector(".buttonON")
const buttonOFF = document.querySelector(".buttonOFF")
const buttonOnOff = document.querySelector(".buttonOnOff")

buttonON.addEventListener("click", () => {
    circle.style.backgroundColor = "yellow"
})
buttonOFF.addEventListener("click", () => {
    circle.style.backgroundColor = "white"
})

let flag = 0

buttonOnOff.addEventListener("click", () => {
    if(flag == 0) {
        circle.style.backgroundColor = "yellow"
        flag = 1
    } else {
        circle.style.backgroundColor = "transparent"
        flag = 0
    }
})