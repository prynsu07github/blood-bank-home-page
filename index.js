const Hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-bar ul")

Hamburger.addEventListener("click", ()=>{
    Hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
})

for(let i=0 ; i<3 ; i++){
    document.querySelectorAll(".nav-bar h1 a")[i].addEventListener("click" , ()=>{
        Hamburger.classList.remove("active")
        navMenu.classList.remove("active")
    })
}
