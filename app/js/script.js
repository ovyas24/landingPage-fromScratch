const header = document.querySelector(".header")
const overlay = document.querySelector(".overlay")
const menu = document.querySelector(".header__menu")
const body = document.querySelector("body")

const hasFade = [ overlay, menu ]

header.addEventListener('click',() => {
    console.log("open");

    if(header.classList.contains("open")){ 
        //close menu
        body.classList.remove("noscroll")
        header.classList.remove("open")
        hasFade.forEach(element => {
            element.classList.remove("fade-in")
            element.classList.add("fade-out")
        })

    }
    else{ //open menu
        body.classList.add("noscroll")
        header.classList.add("open")
        hasFade.forEach(element => {
            element.classList.add("fade-in")
            element.classList.remove("fade-out")
        })
    }
})