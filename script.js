let button = document.getElementById("switch")
let body = document.querySelector("body")

button.addEventListener("click", ()=>{
    body.classList.toggle("dark_mode");
    button.classList.toggle("switch")
} )